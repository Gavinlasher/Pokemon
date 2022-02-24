import { GavinsPokemonController } from "./Controllers/GavinsPokemonController.js";
import { PokemonsController } from "./Controllers/PokemonsController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  pokemonsController = new PokemonsController();
  gavinsPokemonController = new GavinsPokemonController();
}

window["app"] = new App();
