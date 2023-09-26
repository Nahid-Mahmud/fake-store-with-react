import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./Components/Home/Home";
import LoadProducts from "./Components/Product/LoadProducts";
import LandingPage from "./Components/Landingpage/LandingPage";
import Product from "./Components/Product/Product";
import Favourites from "./Components/Favourites/Favourites";
import React from "react";
import { HelmetProvider } from "react-helmet-async";
import router from "./Components/Routes/router";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);
