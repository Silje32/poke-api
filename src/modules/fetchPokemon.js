import { pokemonApiUrl } from "../config.js";

export const fetchPokemon = async (pokemon) => {
  const response = await fetch(`${pokemonApiUrl}/pokemon/${pokemon}`);
  try {
    const pokemonData = await response.json();
  } catch (err) {
    throw new Error("Failed to get JSON from fetchPokemon");
  }
  return pokemonData;
};
