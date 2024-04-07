import Component from '@core/Component.js'
import routes from '@route/routes.js'

export default class App extends Component {
  constructor($element) {
    $element.innerHTML = ''
    super($element)
    this.render()
  }

  // default template cannot be null
  template() {
    return '<div></div>'
  }

  setTemplate() {
    this.router = routes(this.$element.querySelector('div'))
  }
}
