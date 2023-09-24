
import { useNavigate } from "react-router-dom";

const Products = ({ product }) => {
  const { description, id, image, title ,category} = product;
 const navigate = useNavigate()

  const handleShowDetail =()=>{
navigate(`/products/${id}`)
  }

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
          <h2 className="card-title">{title}</h2>
          <p className='capitalize text-xl font-medium'>{category}</p>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button onClick={handleShowDetail} className="btn btn-primary">Show Details</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
