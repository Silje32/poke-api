// Bilde av pokemon, knapper, navn
export const renderPokemonCard = (pokemonCardElement, pokemonObj) => {
  // Sette inn et bilde
  const imgElement = document.createElement("img");
  imgElement.src = pokemonObj.sprites.front_default;
  // Sette inn tekst for navn!
  const nameElement = document.createElement("h1");
  nameElement.textContent = pokemonObj.name;

  // Append elementer
  pokemonCardElement.replaceChildren(imgElement, nameElement);

  /* Alt. Data...
  - Abilities?
  - Types?
  */

  // Tømme forrige innholdet
  pokemonCardElement.replaceChildren();
};
