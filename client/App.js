export default class App extends Component {
  constructor($element) {
    $element.innerHTML = "";
    super($element);
    this.render();
  }

  template() {
    return `
			<div>Hellow World!</div>
		`;
  }
}
