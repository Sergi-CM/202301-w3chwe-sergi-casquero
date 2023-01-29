import MainComponent from "./MainComponent.js";

describe("Given a MainComponent component", () => {
  describe("When it's rendered with a main tag", () => {
    test("Then it should render a main on the interface", () => {
      const virtualContainer = document.createElement("main");
      const tagName = "main";

      const newMain = new MainComponent(virtualContainer);
      newMain.render();
      const main = virtualContainer.querySelector(tagName);

      expect(main).not.toBeNull();
    });
  });
});
