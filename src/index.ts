import MainComponent from "./components/MainComponent/MainComponent.js";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent.js";
import getPokemonById from "./ts/getPokemonById.js";
import CardComponent from "./components/CardComponent/CardComponent.js";
import { type PokeInfoStructure } from "./ts/types.js";
import CardListComponent from "./components/CardListComponent/CardListComponent.js";

const rootContainer: HTMLElement = document.querySelector(".root")!;

const header = new HeaderComponent(rootContainer);
header.render();

const main = new MainComponent(rootContainer);
main.render();

const cardList = new CardListComponent(main.domElement);
cardList.render();

const generateCard = async () => {
  const pokemon: PokeInfoStructure = await getPokemonById(5);
  const card = new CardComponent(cardList.domElement, pokemon);
  card.render();
};

await generateCard();
