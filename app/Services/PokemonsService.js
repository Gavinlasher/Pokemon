import { ProxyState } from "../AppState.js";
import { Pokemon } from "../Models/Pokemon.js";
import { pokemonApi } from "./ApiService.js";

class PokemonsService {
  async getPokemon() {
    const res = await pokemonApi.get("?limit=151");
    console.log(res.data.results, "pokemon");
    let pokemon = res.data.results;
    ProxyState.pokemons = [...pokemon];
  }

  async getActivePokemon(name) {
    const res = await pokemonApi.get(name);
    console.log(res.data, "this is from the api active pokemon");
    ProxyState.ActivePokemon = new Pokemon(res.data);
  }
}

export const pokemonsService = new PokemonsService();
