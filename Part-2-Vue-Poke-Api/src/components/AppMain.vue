<script>
import { store } from '../store';
import AppCard from './AppCard.vue';

export default {
  data(){
    return {
      store: store,
    }
  },
  computed: {
    pokemons: function(){
      return store.pokemons
    }
  },
  components: {
    AppCard,
  },
}

</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-3" v-for="pokemon in pokemons">
        <AppCard :item="pokemon"/>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .row {
    row-gap: 20px;
  }
</style>