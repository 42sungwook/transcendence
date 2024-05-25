export default class Component {
  constructor($element) {
    this.$element = $element
    this.state = {} // Initialize state if necessary
    this.render()
  }

  setTemplate() {}

  setProps() {}

  setEvent() {}

  setState(newState) {
    this.state = { ...this.state, ...newState }
    this.render()
  }

  template() {
    return ''
  }

  render() {
    this.$element.innerHTML = this.template()
    this.setTemplate()
    this.setEvent()
  }
}
