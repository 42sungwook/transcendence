import Component from '@core/Component.js'

export default class HomePage extends Component {
  constructor({ $element, router }) {
    $element.innerHTML = ''
    super($element)
    this.router = router
    this.render()
  }
  template() {
    const menuItems = [
      { title: 'Menu Item 1', description: 'Description for Menu Item 1' },
      { title: 'Menu Item 2', description: 'Description for Menu Item 2' },
      { title: 'Menu Item 3', description: 'Description for Menu Item 3' },
      { title: 'Menu Item 4', description: 'Description for Menu Item 4' },
      { title: 'Menu Item 5', description: 'Description for Menu Item 5' },
      { title: 'Menu Item 6', description: 'Description for Menu Item 6' }
    ]

    const cardElements = menuItems
      .map(
        (item) => `
			<div class="col-md-4 mb-4">
				<div class="card">
						<a href="#" class="btn btn-primary w-100 h-100">${item.title}</a>
				</div>
			</div>
		`
      )
      .join('')

    return `
			<div class="container py-4 w-100 h-100">
				<h1 class="text-center mb-4">Home Page</h1>
				<div class="row">
					${cardElements}
				</div>
			</div>
		`
  }
}
