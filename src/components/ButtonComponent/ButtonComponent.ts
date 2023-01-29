import Component from "../Component/Component.js";
import type ButtonComponentStructure from "./ButtonComponentStructure.js";

class ButtonComponent extends Component implements ButtonComponentStructure {
  text: string;
  constructor(parentElement: Element, className: string, text: string) {
    super(parentElement, className, "a");
    this.text = text;
  }

  render() {
    super.render();
    this.domElement.textContent = this.text;
  }
}

export default ButtonComponent;
