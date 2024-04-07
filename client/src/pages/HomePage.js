import Component from '@core/Component.js'

export default class HomePage extends Component {
  constructor({ $element, router }) {
    $element.innerHTML = ''
    super($element)
    this.router = router
    this.render()
  }

  template() {
    return `
			<div>
				<h1>Home Page</h1>
			</div>
		`
  }
}
