<script>
import axios from 'axios'


export default {
  data() {
    return {
      pokemonUrl: this.item.url
    }
  },
  props: {
    item: {
        type: Object,
        required: true
    }
  },
  methods: {
    fetch() {
      // console.log('fetch pokemon', this.pokemonUrl)

      // get pokemon date
      axios.get(this.pokemonUrl).then(res => {
        // console.log('risposta img url', res.data.sprites.front_default) 
        this.item.imageURL = res.data.sprites.front_default;
      })

    }
  },
  created() {
    this.fetch();
  }
}
</script>

<template>
  <div class="card">
    <img :src="item.imageURL" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">{{ item.name }}</h5>
      <p>URL : {{ item.url }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>