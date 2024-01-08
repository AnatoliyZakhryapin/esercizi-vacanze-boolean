<script>
import AppMain from './components/AppMain.vue';
import { store } from './store';
import axios from 'axios'

export default {
  data() {
    return {
      store: store,
    }
  },
  components: { 
    AppMain
  },
  methods: {
    fetch() {
      console.log('fetch')

      // get pokemon date
      axios.get('https://pokeapi.co/api/v2/pokemon/',{
        params: {
          count:1302,
          next: "https://pokeapi.co/api/v2/pokemon?offset=10&limit=10",
          previous:null
        }
      }).then(res => {
        console.log('risposta', res.data) 
        this.store.pokemons = res.data.results;
      })

    }
  },
  created() {
    this.fetch();
  }
};

</script>

<template>
  <AppMain/>
</template>

<style scoped>
</style>
