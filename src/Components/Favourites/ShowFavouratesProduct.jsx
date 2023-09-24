import React from 'react';

const ShowFavouratesProduct = ({product}) => {
    const { description, id, image, title,category } = product;
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
            <h2 className="card-title text-3xl">{title}</h2>
            <p className='capitalize text-xl font-medium'>{category}</p>
            <p>{description}</p>
          </div>
        </div>
      </>
    );
};

export default ShowFavouratesProduct;