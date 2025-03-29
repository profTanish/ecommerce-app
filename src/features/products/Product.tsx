import { Link } from "react-router-dom";
import { capitalizeFirstLetter } from "../../lib/helpers";

type ProductType = {
   product: product;
 };
 
 const Product = ({ product }: ProductType) => {
   if (!product) return;
 
   const { id, name, images, category, price } = product;
 
return (
      <Link to={`${category}/${id}`}>
        <div className="rounded-lg overflow-hidden relative">
          <img src={images?.at(0)} alt="product" loading="lazy"/>
          <p className="text-xs py-[2px] px-2 absolute top-1 right-1 bg-white text-darkSlate rounded-full">
          {capitalizeFirstLetter(category)}
          </p>
        </div>
        <div className="space-y-2.5 mt-2.5">
          <h5 className="font-medium text-darkSlate">{name}</h5>
          <p className="font-bold text-darkSlate text-2xl">${price}</p>
          <div className="flex gap-2.5">
            <button className="text-sm py-2 text-darkSlate bg-lightGray rounded-full w-full transition-all duration-300 hover:bg-darkGray">
              Add to Cart
            </button>
  
            <button className="text-sm py-2 text-white bg-darkSlate rounded-full w-full transition-all duration-300 hover:bg-black">
              Buy Now
            </button>
          </div>
        </div>
      </Link>
    );
  };
  
  export default Product;