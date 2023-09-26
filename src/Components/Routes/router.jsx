import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import LandingPage from "../Landingpage/LandingPage";
import LoadProducts from "../Product/LoadProducts";
import Product from "../Product/Product";
import Favourites from "../Favourites/Favourites";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "/products",
          element: <LoadProducts />,
          loader: () => fetch("https://fakestoreapi.com/products"),
        },
        {
          path: "/products/:id",
          element: <Product />,
          loader: ({ params }) =>
            fetch(`https://fakestoreapi.com/products/${params.id}`),
        },
        {
          path: "/favourites",
          element: <Favourites />,
          loader: () => fetch("https://fakestoreapi.com/products"),
        },
      ],
    },
  ]);
export default router;