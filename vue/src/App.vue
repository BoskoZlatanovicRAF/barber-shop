<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/prijavi-promenu">Zakazi termin</router-link> |
      <a href="http://127.0.0.1:8000/administrator/login">Admin</a> <!-- Add this line -->
    </nav>
    <nav>
      
      <b-nav-item v-if="!token" to="/register">Register</b-nav-item>
      <b-nav-item v-if="!token" to="/login">Log In</b-nav-item>
      <b-nav-item v-else @click="logout()">Log Out</b-nav-item>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import {mapState, mapMutations } from 'vuex';
export default {
    name: 'App',
    components: {
    },
    computed: {
      ...mapState([
        'token'
      ])
    },
    methods: {
      ...mapMutations([
        'removeToken',
        'setToken'
      ]),
      logout() {
        this.removeToken();
      }
    },
    mounted() {
      if (localStorage.token) {
        console.log('token found in localStorage', localStorage.token);
        this.setToken(localStorage.token);
      }
      else{
        console.log('token not found in localStorage');
      }
    },
  }
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
