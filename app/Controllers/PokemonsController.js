import { ProxyState } from "../AppState.js";
import { pokemonApi } from "../Services/ApiService.js";
import { pokemonsService } from "../Services/PokemonsService.js";

function _drawPokemon() {
  let temp = "";
  ProxyState.pokemons.forEach(
    (p) =>
      (temp += `<li class="selectable" onclick="app.pokemonsController.getActivePokemon('${p.name}')">${p.name}</li>`)
  );
  document.getElementById("pokemon").innerHTML = temp;
}

function _drawActivePokemon() {
  let curPokemon = ProxyState.ActivePokemon;
  if (curPokemon.name)
    document.getElementById("active-pokemon").innerHTML =
      ProxyState.ActivePokemon.Template;
  else {
    document.getElementById("active-pokemon").innerText =
      "Select A Pokemon to battle";
  }
}

async function getPokemon() {
  try {
    await pokemonsService.getPokemon();
  } catch (error) {
    console.error(error);
  }
}

export class PokemonsController {
  constructor() {
    console.log("[PokemonsController] Connected ");
    getPokemon();
    ProxyState.on("pokemons", _drawPokemon);
    ProxyState.on("ActivePokemon", _drawActivePokemon);
  }

  async getActivePokemon(name) {
    try {
      console.log(name, "this is the current pokemon");
      await pokemonsService.getActivePokemon(name);
    } catch (error) {
      console.log(error);
    }
  }
}
