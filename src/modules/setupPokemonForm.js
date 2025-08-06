export const setupPokemonForm = (formElement) => {
  formElement.addEventlistener("submit", (e) => {
    e.preventDefault();
    console.log(e);
  });
};
