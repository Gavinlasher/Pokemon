import { ProxyState } from "../AppState.js";
import { gavinsPokemonService } from "../Services/GavinsPokemonService.js";

async function _getMyPokemon() {
  try {
    await gavinsPokemonService.getMyPokemon();
  } catch (error) {
    console.error(error);
  }
}

function _drawGavinsPokemon() {
  let temp = "";
  ProxyState.gavinsPokemon.map((p) => (temp += p.MyPokemon));
  document.getElementById("gavins-pokemon").innerHTML = temp;
}

export class GavinsPokemonController {
  constructor() {
    ProxyState.on("gavinsPokemon", _drawGavinsPokemon);
    _getMyPokemon();
  }

  async catchPokemon() {
    try {
      await gavinsPokemonService.catchPokemon();
    } catch (error) {
      console.error(error);
    }
  }

  async deletePokemon() {
    await gavinsPokemonService.deletePokemon();
  }
}
