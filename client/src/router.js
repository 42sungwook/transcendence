import { ROUTES } from '@constants/routes.js'
import ErrorPage from '@pages/ErrorPage.js'
/**
 * @param {HTMLElement} $container
 */
export default function Router($container) {
  let $header = document.querySelector('#header')
  let currentPage = undefined
  let currentHeader = undefined
  let prevInfo = undefined

  const findMatchedRoute = () =>
    ROUTES.find((route) => route.path.test(location.pathname))

  const route = (info) => {
    // Unmount 함수가 있다면 호출
    if (currentPage !== undefined && currentPage.unmount) currentPage.unmount()

    const TargetPage = findMatchedRoute()?.page || ErrorPage

    if (info != null && info.errorCode) {
      currentPage = new ErrorPage($container, info.errorCode)
    } else {
      // 같은 페이지로 이동
      if (currentPage instanceof TargetPage && prevInfo === info) return

      prevInfo = info
      currentPage = new TargetPage($container, info)
    }
  }

  const init = () => {
    // 페이지 이동
    window.addEventListener('historychange', ({ detail }) => {
      const { to, info } = detail
      // 같은 페이지로 이동
      if (to === location.pathname && info === prevInfo)
        history.replaceState(null, '', to)
      else {
        history.pushState(null, '', to)
        route(info)
      }
    })
    // 뒤로가기
    window.addEventListener('popstate', () => {
      route()
    })
  }

  init()
  route()
}
