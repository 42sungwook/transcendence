/**
 * @param {HTMLElement} $container
 * @param {number} errorCode
 */
export default function ErrorPage($container, errorCode = 0) {
  let comment = ''

  const init = () => {
    switch (errorCode) {
      case 401:
        comment = '401 Error'
        break
      case 404:
        comment = '404 Error'
        break
      case 403:
        comment = '403 Error'
        break
      case 500:
        comment = '500 Error'
        break
      default:
        comment = 'Undefined Error'
        break
    }
    this.render()
  }

  this.render = () => {
    $container.innerHTML = `
    <div class="errorPage-container">
      <span class="error-code">${errorCode} !<br/></span>
      <span class="error-comment">${comment}</span>
    </div>
    `
  }

  init()
}
