export default class Component {
  constructor($element) {
    this.$container = document.createElement("div");
    $element.appendChild(this.$container);
    this.$element = this.$container;
  }

  setTemplate() {}

  setProps() {}

  setEvent() {}

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  template() {
    return "";
  }

  render() {
    this.$element.innerHTML = this.setTemplate();
    this.setTemplate();
    this.setEvent();
  }
}
