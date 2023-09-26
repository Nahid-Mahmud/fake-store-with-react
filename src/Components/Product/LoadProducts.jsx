import { useLoaderData } from "react-router-dom";
import Products from "./Products";
import { Helmet } from "react-helmet";

const LoadProducts = () => {
  const products = useLoaderData();
  return (
    <> <Helmet>

      <title>Fake Store - All Products</title>
    </Helmet>
      <div className="flex flex-col md:flex-wrap lg:grid lg:grid-cols-4 max-w-[90vw] mx-auto gap-14 my-10">
        {products.map((product, index) => (
          <Products key={index} product={product}></Products>
        ))}
      </div>
    </>
  );
};

export default LoadProducts;
