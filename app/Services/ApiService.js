export const pokemonApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon",
  setTimeout: 5000,
});

export const sandboxApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/Gavin/pokemon",
  setTimeout: 5000,
});
