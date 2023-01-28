import PageComponent from "./PageComponent.js";

describe("Given a PageComponent component", () => {
  describe("When it's rendered with a main tag", () => {
    test("Then it should render a main on the interface", () => {
      const virtualContainer = document.createElement("main");
      const tagName = "main";

      const newMain = new PageComponent(virtualContainer);
      newMain.render();
      const main = virtualContainer.querySelector(tagName);

      expect(main).not.toBeNull();
    });
  });
});
