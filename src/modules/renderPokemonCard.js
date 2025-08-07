import { renderPokemonImage } from "./renderPokemonImage.js";

// Bilde av pokemon, knapper, navn
export const renderPokemonCard = (pokemonCardElement, pokemonObj) => {
  // Sette inn et bilde
  const imgElement = document.createElement("img");
  imgElement.src = pokemonObj.sprites.front_default;

  // Sette inn tekst for navn!
  const nameElement = document.createElement("h1");
  nameElement.textContent = pokemonObj.name;

  let sex = "male";
  let viewDirection = "front";
  let shiny = false;

  // Rotate Button
  const rotateBtn = document.createElement("button");
  rotateBtn.textContent = "Rotate";
  rotateBtn.addEventListener("click", () => {
    viewDirection = viewDirection === "front" ? "back" : "front";
    imgElement.src = renderPokemonImage(pokemonObj, shiny, sex, viewDirection);
  });

  // Shiny Button
  const shinyBtn = document.createElement("button");
  shinyBtn.textContent = "Toggle Shiny";
  shinyBtn.addEventListener("click", () => {
    shiny = !shiny;
    imgElement.src = renderPokemonImage(pokemonObj, shiny, sex, viewDirection);
  });

  // Toggle Female
  const swapGenderBtn = document.createElement("button");
  swapGenderBtn.textContent = "Swap Gender";
  swapGenderBtn.addEventListener("click", () => {
    sex = sex === "male" ? "female" : "male";
    imgElement.src = renderPokemonImage(pokemonObj, shiny, sex, viewDirection);
  });

  // Append elements
  pokemonCardElement.replaceChildren(
    imgElement,
    nameElement,
    rotateBtn,
    shinyBtn,
    swapGenderBtn
  );
};
