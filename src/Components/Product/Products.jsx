import React from "react";

const Products = ({ product }) => {
  const { category, description, id, image, price, title } = product;

  return (
    <>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img className="w-80 h-80"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
