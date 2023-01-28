import PageComponent from "./components/PageComponent/PageComponent.js";
import { HeaderComponent } from "./components/HeaderComponent/HeaderComponent.js";

const rootContainer: HTMLElement = document.querySelector(".root")!;

const header = new HeaderComponent(rootContainer);
header.render();

const page = new PageComponent(rootContainer);
page.render();
