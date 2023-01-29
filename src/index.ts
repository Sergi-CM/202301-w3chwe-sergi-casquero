import MainComponent from "./components/MainComponent/MainComponent.js";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent.js";
import CardComponent from "./components/CardComponent/CardComponent.js";
import type { PokemonListStructure, PokeInfoStructure } from "./ts/types.js";
import CardListComponent from "./components/CardListComponent/CardListComponent.js";
import getPokemonById from "./ts/getPokemonById.js";
import getPokemonList from "./ts/getPokemonList.js";
import ButtonComponent from "./components/ButtonComponent/ButtonComponent.js";
import SearchBarComponent from "./components/SearchBarComponent/SearchBarComponent.js";

let listPage = 1;
let firstPokeIndex = 0;
let lastPokeIndex = 50;
const baseApiUrl = `https://pokeapi.co/api/v2/pokemon/`;
let listApiUrl = `https://pokeapi.co/api/v2/pokemon/?offset=${firstPokeIndex}&limit=${lastPokeIndex}`;

const rootContainer: HTMLElement = document.querySelector(".root")!;

const header = new HeaderComponent(rootContainer);
header.render();

const main = new MainComponent(rootContainer);
main.render();

const cardList = new CardListComponent(main.domElement);
cardList.render();

const prevPageButton = new ButtonComponent(
  cardList.domElement.querySelector(".page-buttons-container"),
  "page-button prev-page",
  "◄"
);
prevPageButton.render();

const nextPageButton = new ButtonComponent(
  cardList.domElement.querySelector(".page-buttons-container"),
  "page-button next-page",
  "►"
);
nextPageButton.render();

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

const nextButton = cardList.domElement.querySelector(".next-page");

nextButton.addEventListener("click", async () => {
  if (listPage === 5) {
    return;
  }

  listPage++;
  firstPokeIndex += 51;
  lastPokeIndex += 51;
  listApiUrl = `https://pokeapi.co/api/v2/pokemon/?offset=${firstPokeIndex}&limit=${lastPokeIndex}`;
  await getPokemonList(listApiUrl);
  await generateCardList();
});
