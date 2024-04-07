import HomePage from "@pages/HomePage.js";
import ErrorPage from "@pages/ErrorPage.js";
import Router from "@route/router.js";

const routes = ($element) => {
  const router = new Router();
  router.addRoute("", () => new HomePage({ $element, router }));
  router.addRoute("/", () => new HomePage({ $element, router }));
  router.addRoute(null, () => new ErrorPage({ $element }));
  router.loadInitialRoute();
  return router;
};

export default routes;
