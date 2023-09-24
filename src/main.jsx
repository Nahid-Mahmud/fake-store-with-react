import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./Components/Home/Home";
import LoadProducts from "./Components/Product/LoadProducts";
import LandingPage from "./Components/Landingpage/LandingPage";
import Product from "./Components/Product/Product";
import Favourites from "./Components/Favourites/Favourites";

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

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
