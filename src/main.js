import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import PokemonList from "./components/pokemonList";
import PokemonDetail from "./components/pokemonDetail";
import App from "./App.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", PokemonList, component: PokemonList },
    { path: "/pokemon/:id", name: "pokemon", component: PokemonDetail }
  ]
});

const app = createApp(App);
app.use(router);
app.mount("#app");
