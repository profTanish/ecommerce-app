import { useDispatch } from "react-redux";
import { Button } from "./ui/button";
import { AppDispatch } from "@/store";
import { addToCart } from "@/features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

const BuyNowButton = ({ product }: { product: product }) => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const { id, images, category, name, price } = product;

    function handleBuy() {
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
        navigate("/order/new");
    }

    return (
        <Button className="w-full" onClick={handleBuy}>
            Buy Now
        </Button>
    );
};

export default BuyNowButton;