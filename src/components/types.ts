interface ComponentStructure {
  domElement: Element;
  parentElement: Element;
  render: () => void;
  addListeners?: () => void;
}

export default ComponentStructure;
