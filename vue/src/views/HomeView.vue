<template>
  <div id="app">
    <img alt="RafBarber logo" src="@/assets/rafbarber - skript (1).png">
    <AppHeader v-bind:title="headerTitle"/>

    <div>
      <button @click = "prev()">Prethodno</button>
      ...
      <button @click = "next()">Sledece</button>
    </div>
    <UslugeList v-if = "sveUsluge" :uslugeIDs = "sveUsluge.slice(current * 10, current * 10 + 10)"/>
    <p v-else>Lista još nije spremna</p>
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader.vue'
import UslugeList from '../components/UslugeList.vue'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'App',
  components: {
    AppHeader, UslugeList
  },
  data () {
    return {
      headerTitle: 'Welcome to Barber Shop',
      current: 0
    }
  },
  computed: {
    ...mapState([
      'sveUsluge'
    ])
  },
  methods:{
      next(){
        if( this.current * 10 < this.sviStudenti.length ){
          this.current++;
        }
      },
      prev(){
        if( this.current > 0){
          this.current--;
        }
      },
      ...mapActions([
        'fetchSveUsluge'
      ]),
    },
    
    mounted(){
      this.fetchSveUsluge();
    }
}
</script>


