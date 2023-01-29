import Component from "../Component/Component.js";

class CardListComponent extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "card-list", "ul");
  }

  render() {
    super.render();
    this.domElement.innerHTML = `
      <div class="page-buttons-container"></div>
    `;
  }
}

export default CardListComponent;
