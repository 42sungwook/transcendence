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
      { title: 'AI' },
      { title: 'Local' },
      { title: 'Online' },
      { title: 'Profile' },
      { title: 'Tournament' },
      { title: 'Settings' }
    ]

    const cardElements = menuItems
      .map(
        (item) => `
					<div class="col-md-4 h-25">
						<div class="card h-100 w-100 d-flex align-items-center justify-content-center">
							<a href="#" class="btn btn-primary text-black border-black w-100 h-100 d-flex align-items-center justify-content-center fs-3 fw-bold" style="background-color: #FFFFFF;">${item.title}</a>
						</div>
					</div>
				`
      )
      .join('')

    return `
			<div class="container py-4 w-100 h-100">
				<div class="row h-100 justify-content-center align-items-center">
					<div class="row h-75 justify-content-center align-items-center">
						${cardElements}
					</div>
				</div>
			</div>
		`
  }
}
