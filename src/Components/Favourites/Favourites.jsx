import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredProducts } from "../../utility/localstorage";
import ShowFavouratesProduct from "./ShowFavouratesProduct";

const Favourites = () => {
  const [favouritesProducts, setFavouritesProducts] = useState([]);
  const [displayProduct, SetDisplayProduct] = useState([]);
  const productData = useLoaderData();

  useEffect(() => {
    const storedProductId = getStoredProducts();
    if (productData.length > 0) {
      const favoritesProducts = productData.filter((product) =>
        storedProductId.includes(product.id)
      );
      setFavouritesProducts(favoritesProducts);
      SetDisplayProduct(favoritesProducts);
    }
  }, [productData]);

  const handleClickCatagories = (catagories) => {
    if (catagories === "all") {
      SetDisplayProduct(favouritesProducts);
    } else if (catagories === "electronics") {
      const ellectronicsProducts = favouritesProducts.filter(
        (product) => product.category === "electronics"
      );
      SetDisplayProduct(ellectronicsProducts);
    } else if (catagories === "jewelery") {
      const jeweleryProducts = favouritesProducts.filter(
        (product) => product.category === "jewelery"
      );
      SetDisplayProduct(jeweleryProducts);
    } else if (catagories === "women's clothing") {
      const wemensProducts = favouritesProducts.filter(
        (product) => product.category === "women's clothing"
      );
      SetDisplayProduct(wemensProducts);
    } else if (catagories === "men's clothing") {
      const menProducts = favouritesProducts.filter(
        (product) => product.category === "men's clothing"
      );
      SetDisplayProduct(menProducts);
    }
  };
  return (
    <>
      <ul className="menu menu-horizontal mx-auto justify-center flex max-w-fit mb-10 gap-5 bg-base-200 rounded-box">
        <li
          onClick={() => {
            handleClickCatagories("all");
          }}
          className="menu-item"
        >
          {" "}
          All{" "}
        </li>
        <li
          onClick={() => {
            handleClickCatagories("electronics");
          }}
        >
          {" "}
          Electronics{" "}
        </li>
        <li
          onClick={() => {
            handleClickCatagories("jewelery");
          }}
        >
          Jewelery
        </li>
        <li
          onClick={() => {
            handleClickCatagories("women's clothing");
          }}
        >
          Women's Clothing
        </li>
        <li
          onClick={() => {
            handleClickCatagories("men's clothing");
          }}
        >
          Men's Clothing
        </li>
      </ul>
      <div className="grid grid-cols-4 gap-10 max-w-[90vw] mx-auto">
        {displayProduct.map((e) => (
          <ShowFavouratesProduct key={e.id} product={e} />
        ))}
      </div>
    </>
  );
};

export default Favourites;
