import axios from "axios";

const getPokemonList = async () => {
  const resp = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=100");
  return resp.data;
};

const getPokemonDetails = async (id) => {
  const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return resp.data;
};

const getPokemonID = (url) =>
  url.replace("https://pokeapi.co/api/v2/pokemon/", "").replace("/", "");

const getPokemonImage = (id) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

export { getPokemonList, getPokemonDetails, getPokemonID, getPokemonImage };
