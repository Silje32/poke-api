import "./style.css";
import { setupPokemonForm } from "./modules/setupPokemonForm.js";

document.querySelector("#app").innerHTML = `
  <div>
    <h1>Pokedex</h1>
    <form id="searchPokemonForm">
    <input id="searchPokemonInput" type="text"></input>
    <input type="submit"></input>
    </form>
  </div>
`;

setupPokemonForm(document.querySelector("#searchPokemonForm"));
