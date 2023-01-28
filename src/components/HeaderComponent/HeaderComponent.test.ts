import HeaderComponent from "./HeaderComponent.js";

describe("Given a HeaderComponent component", () => {
  describe("When it's rendered with a header tag", () => {
    test("Then it should render a header on the interface", () => {
      const virtualContainer = document.createElement("header");
      const tagName = "header";

      const newHeader = new HeaderComponent(virtualContainer);
      newHeader.render();
      const header = virtualContainer.querySelector(tagName);

      expect(header).not.toBeNull();
    });
  });
});
