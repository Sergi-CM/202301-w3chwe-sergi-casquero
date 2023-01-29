import MainComponent from "./components/MainComponent/MainComponent.js";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent.js";
import CardComponent from "./components/CardComponent/CardComponent.js";
import type { PokemonListStructure, PokeInfoStructure } from "./ts/types.js";
import CardListComponent from "./components/CardListComponent/CardListComponent.js";
import getPokemonById from "./ts/getPokemonById.js";
import getPokemonList from "./ts/getPokemonList.js";
import ButtonComponent from "./components/ButtonComponent/ButtonComponent.js";
import SearchBarComponent from "./components/SearchBarComponent/SearchBarComponent.js";

const firstPokeIndex = 0;
const lastPokeIndex = 50;
const baseApiUrl = `https://pokeapi.co/api/v2/pokemon/`;
const listApiUrl = `https://pokeapi.co/api/v2/pokemon/?offset=${firstPokeIndex}&limit=${lastPokeIndex}`;

const rootContainer: HTMLElement = document.querySelector(".root")!;

const header = new HeaderComponent(rootContainer);
header.render();

const main = new MainComponent(rootContainer);
main.render();

const cardList = new CardListComponent(main.domElement);
cardList.render();

const searchBar = new SearchBarComponent(header.domElement);
searchBar.render();

const favouritesButton = new ButtonComponent(
  header.domElement,
  "favourites-button",
  "My Favourites"
);
favouritesButton.render();

const generateCardList = async () => {
  const initialListFromApi: PokemonListStructure = await getPokemonList(
    listApiUrl
  );
  const initialPokeList = initialListFromApi.results;
  initialPokeList.map(async (pokemon, id) => {
    const pokemonInfo: PokeInfoStructure = await getPokemonById(
      baseApiUrl,
      id + 1
    );
    const card = new CardComponent(cardList.domElement, pokemonInfo);
    card.render();
  });
};

await generateCardList();
