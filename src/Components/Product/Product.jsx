import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const Product = () => {
  const data = useLoaderData();
  const { category, description, image, title, price, rating } = data;
  const { rate, count } = rating;
  const navigate = useNavigate();

  const handleGoToStore = () => {
    navigate(-1);
  };

  return (
    <div className="card card-compact  bg-base-100 shadow-xl mx-auto my-10">
      <figure>
        <img className="p-5" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-xl">
          {" "}
          Category: <span className="capitalize"> {category}</span>
        </p>
        <p className="text-xl">{description}</p>
        <p className="text-xl">Price : {price}</p>
        <p className="text-xl">
          Rating : {rate}, Rating Count : {count}
        </p>
        <div className="card-actions justify-end">
          <button onClick={handleGoToStore} className="btn btn-primary">
            Go To Store
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
