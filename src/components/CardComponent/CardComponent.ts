import { type PokeInfoStructure } from "../../ts/types.js";
import Component from "../Component/Component.js";

class CardComponent extends Component {
  id: number;
  name: string;
  image: string;
  type: string;

  constructor(parentElement: Element, pokemon: PokeInfoStructure) {
    super(parentElement, "card", "article");
    this.id = pokemon.id;
    this.name = pokemon.name[0].toLocaleUpperCase() + pokemon.name.slice(1);
    this.type = pokemon.types[0].type.name;
    this.image = pokemon.sprites.other["official-artwork"].front_default;
  }

  render() {
    super.render();

    this.domElement.innerHTML = `
      <img class="card__image" src="${this.image}" alt="${this.name} width="200"/>
      <span class="card__title">${this.name}</span>
      <div class="card__footer">
        <span class="card__id">#${this.id}</span>
        <img class="card__type" src="${this.type}.png" alt="${this.type} icon"/>
      </div>
    `;
  }
}

export default CardComponent;
