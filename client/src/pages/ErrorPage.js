import Component from "@core/Component.js";

export default class ErrorPage extends Component {
  constructor({ $element }) {
    super($element);
    this.render();
  }

  template() {
    return `
			<div>
				<h1>Error Page</h1>
			</div>
		`;
  }
}
