import type ComponentStructure from "../types.js";

class Component implements ComponentStructure {
  domElement: Element;
  parentElement: Element;

  constructor(parentElement: Element, className: string, tag = "div") {
    this.domElement = document.createElement(tag);
    this.domElement.className = className;
    this.parentElement = parentElement;
  }

  render(): void {
    this.parentElement.appendChild(this.domElement);
  }
}

export default Component;
