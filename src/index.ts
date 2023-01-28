import PageComponent from "./components/PageComponent/PageComponent.js";
import { HeaderComponent } from "./components/HeaderComponent/HeaderComponent.js";
import getPokemonById from "./ts/getPokemonById.js";
import CardComponent from "./components/CardComponent/CardComponent.js";
import { type PokeInfoStructure } from "./ts/types.js";

const rootContainer: HTMLElement = document.querySelector(".root")!;

const header = new HeaderComponent(rootContainer);
header.render();

const page = new PageComponent(rootContainer);
page.render();

const generateCard = async () => {
  const pokemon: PokeInfoStructure = await getPokemonById(5);
  const card = new CardComponent(page.domElement, pokemon);
  card.render();
};

await generateCard();
