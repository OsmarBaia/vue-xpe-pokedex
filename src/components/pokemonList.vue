<template>
  <div @click="log" v-for="(pokemon, index) in list" :key="index">
    <img
      :src="pokemonImage(pokemonId(pokemon.url))"
      :alt="pokemon.name + ' sprite'"
    />
    <p class="pokemon">{{ pokemon.name }}</p>
  </div>
</template>

<script>
import {
  getPokemonID,
  getPokemonImage,
  getPokemonList,
} from "../service/pokemon-service.js";
import { onMounted, ref } from "vue";

export default {
  setup() {
    const list = ref([]);
    onMounted(() => {
      getPokemonList().then((resp) => {
        list.value = resp.results;
      });
    });
    const pokemonId = (url) => getPokemonID(url);
    const pokemonImage = (id) => getPokemonImage(id);
    function log() {
      console.log("click");
    }

    return { list, pokemonImage, pokemonId, log };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>