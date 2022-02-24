export class Pokemon {
  constructor(data) {
    this.name = data.name;
    this.order = data.order;
    this.img = data.img || data.sprites.other.dream_world.front_default;
    this.weight = data.weight;
    this.height = data.height;
    this.types = data.types;
    this.user = data.user;
    this.typesString = this.types
      .map((t) => t.type.name.toUpperCase())
      .join(", ");
  }

  get Template() {
    return `
    <div class="bg-light shadow p-4">
            <div class="text-center">
              <h2>${this.name}</h2>
              <img class="img-fluid" src="${this.img}" alt="">
              <h4> ${this.height} | ${this.weight} | (${this.typesString}) </h4>
              <p></p>
              <p>${this.order}</p>
              <div class="d-flex justify-content-between align-items-baseline">
                <button>Prepare for Battle</button>
                <button onclick="app.gavinsPokemonController.catchPokemon()">Catch Pokemon</button>
              </div>
            </div>
          </div>
    
    `;
  }

  get MyPokemon() {
    return `
    <div class="bg-light shadow p-4">
    <h3>${this.name}</h3>
    <img class="img-fluid" src="${this.img}" alt="">
    <button class="btn btn-dark" onclick="app.gavinsPokemonController.deletePokemon(${this.id})" >Delete</button>
  </div>
    
    `;
  }
}
