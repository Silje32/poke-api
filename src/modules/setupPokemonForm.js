import { fetchPokemon } from "./fetchPokemon.js";

export const setupPokemonForm = (formElement) => {
  formElement.addEventListener("submit", async (e) => {
    e.preventDefault();

    const form = new FormData(formElement);
    const searchInput = form.get("searchPokemonInput");
    const pokemon = await fetchPokemon(searchInput);

    // Render pokemon card

    alert(`Your pokemon is: ${pokemon.sprites.front_default}`);
  });
};
