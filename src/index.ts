import MainComponent from "./components/MainComponent/MainComponent.js";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent.js";
import CardComponent from "./components/CardComponent/CardComponent.js";
import type { PokemonListStructure, PokeInfoStructure } from "./ts/types.js";
import CardListComponent from "./components/CardListComponent/CardListComponent.js";
import getPokemonById from "./ts/getPokemonById.js";
import getPokemonList from "./ts/getPokemonList.js";

const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

const rootContainer: HTMLElement = document.querySelector(".root")!;

const header = new HeaderComponent(rootContainer);
header.render();

const main = new MainComponent(rootContainer);
main.render();

const cardList = new CardListComponent(main.domElement);
cardList.render();

const generateCard = async () => {
  const pokemonList: PokemonListStructure = await getPokemonList(apiUrl);
  pokemonList.results.forEach(async (pokemon, id) => {
    const pokemonInfo: PokeInfoStructure = await getPokemonById(apiUrl, id);
    const card = new CardComponent(cardList.domElement, pokemonInfo);
    card.render();
  });
};

await generateCard();
