import { pokemonApiUrl } from "../config.js";

export const fetchPokemon = async (pokemon) => {
  await fetch(`${pokemonApiUrl}/pokemon/${pokemon}`);
  const pokemonData = await Response.json();
  return pokemonData;
};
