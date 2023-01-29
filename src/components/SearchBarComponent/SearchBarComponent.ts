import Component from "../Component/Component.js";

class SearchBarComponent extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "search-bar", "div");
  }

  render() {
    super.render();

    this.domElement.innerHTML = `
      <input class="search-input" type="text" placeholder="Search by Name or ID">
      <button type="submit" class="search-submit">
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    `;
  }
}

export default SearchBarComponent;
