import { pokemonApiUrl } from "../config.js";

export fetchPokemon = async (pokemon) => {
   await fetch(`${pokemonApiUrl}/`)
};
