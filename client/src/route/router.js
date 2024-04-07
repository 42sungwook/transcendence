export default class Router {
  constructor() {
    this.routes = []
    this.data = {}

    window.addEventListener('popstate', () => {
      this.loadInitialRoute()
    })
  }

  addRoute(path, page) {
    this.routes.push({ path, page })
  }

  getData() {
    return this.data
  }

  loadInitialRoute() {
    this._parseQueryParameters()
    const pathnameSplit = this._getCurrentURL().split('/')
    const pathSegments = pathnameSplit.length > 1 ? pathnameSplit.slice(1) : ''
    this._loadRoute(...pathSegments)
  }

  navigateTo(path) {
    const currentPath = this._getCurrentURL()
    if (currentPath !== path) {
      window.history.pushState(null, '', path)
      const popStateEvent = new PopStateEvent('popstate', { state: null })
      dispatchEvent(popStateEvent)
    } else {
      console.log('render fail')
    }
  }

  _getCurrentURL() {
    const path = window.location.pathname
    return path
  }

  _loadRoute(...urlSegments) {
    const matchedRoute = this._findPage(urlSegments)
    if (!matchedRoute) {
      const routeWithNullPath = this.routes.find((route) => route.path === null)
      routeWithNullPath.page()
      return
    }
    matchedRoute.page()
  }

  _parseQueryParameters() {
    const url = new URL(window.location.href)
    const params = new URLSearchParams(url.search)
    for (const [key, value] of params) {
      this.data[key] = value
    }
  }

  _findPage(urlSegments) {
    try {
      const page = this.routes.find((route) => {
        const routePathSegments = route.path.split('/').filter(Boolean)
        const currentPathSegments = urlSegments.filter(Boolean)

        if (routePathSegments.length !== currentPathSegments.length) {
          return false
        }

        return routePathSegments.every((routePathSegments, index) => {
          return (
            routePathSegments.startsWith(':') ||
            routePathSegments === currentPathSegments[index]
          )
        })
      })
      return page
    } catch {
      return false
    }
  }
}
