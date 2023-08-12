import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home";
import About from "../views/About";
import ErrorPage from "../views/ErrorPage";
import App from "../App";
import ProductView from "../views/products/ProductView";
// import Loading from "../components/Loading";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    // loader: <Loading />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:id/:slug",
        element: <ProductView />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

export default router;
