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

  const hancleClearAll = () => {
    localStorage.clear();
    SetDisplayProduct([]);
  };

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
          <button> All</button>
        </li>
        <li
          onClick={() => {
            handleClickCatagories("electronics");
          }}
        >
          <button> Electronics</button>
        </li>
        <li
          onClick={() => {
            handleClickCatagories("jewelery");
          }}
        >
          <button> Jewelery</button>
        </li>
        <li
          onClick={() => {
            handleClickCatagories("women's clothing");
          }}
        >
          <button> Women's Clothing</button>
        </li>
        <li
          onClick={() => {
            handleClickCatagories("men's clothing");
          }}
        >
          <button> Men's Clothing</button>
        </li>
      </ul>
      <div className="grid grid-cols-4 gap-10 max-w-[90vw] mx-auto">
        {displayProduct.map((e) => (
          <ShowFavouratesProduct key={e.id} product={e} />
        ))}
      </div>
      <div className="text-center my-10">
        <button onClick={hancleClearAll} className="btn btn-warning">
          Clear All
        </button>
      </div>
    </>
  );
};

export default Favourites;
