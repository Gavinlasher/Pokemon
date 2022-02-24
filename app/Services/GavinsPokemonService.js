import { ProxyState } from "../AppState.js";
import { Pokemon } from "../Models/Pokemon.js";
import { sandboxApi } from "./ApiService.js";

class GavinsPokemonService {
  async catchPokemon() {
    let currPokemon = ProxyState.ActivePokemon;
    const res = await sandboxApi.post("", currPokemon);
    console.log(res.data, "this is my saved pokemon");
    ProxyState.gavinsPokemon = [
      ...ProxyState.gavinsPokemon,
      new Pokemon(res.data),
    ];
  }
  async getMyPokemon() {
    const res = await sandboxApi.get();
    ProxyState.gavinsPokemon = res.data.map((p) => new Pokemon(p));
  }

  deletePokemon() {}
}
export const gavinsPokemonService = new GavinsPokemonService();
