import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)



export default new Vuex.Store({
  state: {
    kategorije: [],
    sveUsluge: [],
    token: '',
    username: null
  },
  getters: {
    getUslugeByKategorija: (state) => (id) => {//funkcija koja vraca drugu funkciju
      let kategorija = state.kategorije.find(j => j.id == id);
      let usluge = state.sveUsluge.filter(u => u.kategorijaId == id);
      return { kategorija, usluge };
  },
},
  mutations: {
    addKategorije(state, kategorije) {
      state.kategorije = kategorije;
    },
    addUsluge(state, usluge) {
      state.sveUsluge = usluge;
    },
    setToken(state, token) {
      state.token = token;
      localStorage.token = token;
    },
    removeToken(state) {
      state.token = '';
      localStorage.token = '';
    },
    setUsername(state, username) {
      state.username = username;
    },
  },
  actions: {
    register({ commit }, obj) {
      fetch('http://127.0.0.1:9001/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
      }).then( res => res.json() )
        .then( data => commit('setToken', data.token) )
        .catch(error => console.error('Error:', error));
    },
    login({ commit }, obj) {
      fetch('http://127.0.0.1:9001/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
    }).then( res => res.json() )
      .then( data => {
        console.log("DATA",data.token);
        if (data.msg) {
          alert(data.msg);
        } else {
          commit('setToken', data.token)
        }
      })
      .catch(error => console.error('Error:', error));
    },

    // async fetchKategorije({ commit }) {
    //   let res = await fetch(`http://localhost:9000/kategorija`);
    //   let data = await res.json();
    //   commit('addKategorije', data);
    // },
    
    async fetchSveUsluge({ commit }) {
      const token = localStorage.getItem('token');
      console.log("TOKEN",token);
      if(token === null) {
        return;
      }
      let res = await fetch(`http://localhost:9000/usluga`,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      let data = await res.json();
      console.log("DATA",data);
      commit('addUsluge', data);
      let res2 = await fetch(`http://localhost:9000/kategorija`,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      let data2 = await res2.json();
      commit('addKategorije', data2);
    },
  },
  modules: {
  }
})
