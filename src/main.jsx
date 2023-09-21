import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./Components/Home/Home";
import LoadProducts from "./Components/Product/LoadProducts";
import LandingPage from "./Components/Landingpage/LandingPage";
import Product from "./Components/Product/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <LandingPage></LandingPage>,
      },
      {
        path: "/products",
        element: <LoadProducts></LoadProducts>,
        loader: () => fetch("https://fakestoreapi.com/products"),
      },
      {
        path: "/products/:id",
        element: <Product></Product>,
        loader: ({params}) => fetch(`https://fakestoreapi.com/products/${params.id}`)
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
