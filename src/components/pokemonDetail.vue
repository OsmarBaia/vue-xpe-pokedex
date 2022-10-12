<template>
  <p>"Details"</p>
</template>

<script>
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import { getPokemonDetails } from "../service/pokemon-service.js";
//import { Loader } from "./Loader";

export default {
  setup() {
    //const router = useRouter();
    const route = useRoute();
    const info = ref(null);
    const isLoading = ref(false);

    onMounted(() => {
      getPokemonDetails(route.params.id)
        .then(resp => {
          isLoading.value = true;
          info.value = resp;
        })
        .finally(() => {
          isLoading.value = false;
        });
    });
    return {};
  }
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
