import { Link } from "react-router-dom";
import { capitalizeFirstLetter } from "../../lib/helpers";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import { getCurrentQuantityById } from "../cart/cartSlice";
import DeleteCartItem from "../cart/DeleteCartItem";
import EditCartItemQty from "../cart/EditCartItemQty";
import BuyNowButton from "@/components/BuyNowButton";
import AddItemToCart from "../cart/AddItemToCart";

type ProductType = {
  product: product;
};

const Product = ({ product }: ProductType) => {
  const { id, name, images, category, price } = product;

  const curQuantity = useSelector(getCurrentQuantityById(id));
  const isItemInCart = curQuantity > 0;

  return (
    <div  className="flex flex-col h-full">
      <Link to={`/store/${category}/${id}`}>
        <div className="rounded-lg overflow-hidden relative">
          <img loading="lazy" src={images?.at(0)} alt="product" />
          <p className="text-xs py-[2px] px-2 absolute top-1 right-1 bg-white text-darkSlate rounded-full">
            {capitalizeFirstLetter(category)}
          </p>
        </div>
        <div className="space-y-2.5 my-2.5">
          <h5 className="font-medium text-darkSlate">{name}</h5>
          <p className="font-bold text-darkSlate text-2xl">${price}</p>
        </div>
      </Link>

      <div className="flex gap-2.5 mt-auto justify-between items-center">
        {isItemInCart ? (
          <>
            <EditCartItemQty productId={id} quantity={curQuantity} />

            <DeleteCartItem productId={id} />
          </>
        ) : (
          <>
            <AddItemToCart product={product} />

            <BuyNowButton product={product} />
          </>
        )}
      </div>
    </div>
  );
};

export default Product;