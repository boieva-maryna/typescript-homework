class View {
  element:HTMLElement;

  createElement({ tagName, className = '', attributes = {} }:
  {tagName:string,className:string,attributes?:{}}):HTMLElement {
    const element = document.createElement(tagName);
    element.classList.add(className);
    Object.keys(attributes).forEach(key => element.setAttribute(key, (attributes as Record<string,any>)[key]));

    return element;
  }
}

export default View;
