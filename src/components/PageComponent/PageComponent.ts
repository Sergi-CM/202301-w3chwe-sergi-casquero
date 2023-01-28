import Component from "../Component/Component.js";

const rootContainer: HTMLElement = document.querySelector(".root")!;

class PageComponent extends Component {
  constructor() {
    super(rootContainer, "main-container", "main");
  }
}

export default PageComponent;
