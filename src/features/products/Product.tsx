import { Link } from "react-router-dom";
import { capitalizeFirstLetter } from "../../lib/helpers";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { addToCart } from "../cart/cartSlice";
import { AppDispatch } from "@/store";

type ProductType = {
  product: product;
};

const Product = ({ product }: ProductType) => {
  const dispatch = useDispatch<AppDispatch>();
  if (!product) return;

  const { id, name, images, category, price } = product;

  function handleAddToCart() {
    const newProduct = {
      productId: id,
      name: name,
      category: category,
      price: price,
      image: images?.at(0),
      totalPrice: (price ?? 0) * 1,
      quantity: 1,
    };

    dispatch(addToCart(newProduct));
  }

  return (
    <div>
      <Link to={`${category}/${id}`}>
        <div className="rounded-lg overflow-hidden relative">
          <img src={images?.at(0)} alt="product" loading="lazy" />
          <p className="text-xs py-[2px] px-2 absolute top-1 right-1 bg-white text-darkSlate rounded-full">
            {capitalizeFirstLetter(category)}
          </p>
        </div>
        <div className="space-y-2.5 mt-2.5">
          <h5 className="font-medium text-darkSlate">{name}</h5>
          <p className="font-bold text-darkSlate text-2xl">${price}</p>
        </div>
      </Link>

      <div className="flex gap-2.5 mt-2.5">
        <Button variant="outline" className="w-full" onClick={handleAddToCart}>
          Add to Cart
        </Button>

        <Button className="w-full">Buy Now</Button>
      </div>
    </div>
  );
};

export default Product;