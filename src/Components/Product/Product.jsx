
import { useLoaderData, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveProducts } from "../../utility/localstorage";

const Product = () => {
  const data = useLoaderData();
  const { id, category, description, image, title, price, rating } = data;
  const { rate, count } = rating;
  const navigate = useNavigate()
  const handleFavouriteBtnClick = () => {
    saveProducts(id);
    toast("Product Added to favoroute");
  };
const handleGoBack = ()=>{
  navigate(-1)
}
  return (
    <>
      <div className="card card-compact md:w-96 bg-base-100 shadow-xl mx-auto my-10">
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
          <div className="card-actions justify-between">
          <button  className="btn btn-primary" onClick={handleGoBack}>Go Back</button>
            <button
              onClick={() => handleFavouriteBtnClick()}
              className="btn btn-primary"
            >
              Add To Favourite
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Product;
