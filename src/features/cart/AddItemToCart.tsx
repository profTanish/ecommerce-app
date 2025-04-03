import { AppDispatch } from "@/store";
import { useDispatch } from "react-redux";
import { addToCart } from "./cartSlice";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

const AddItemToCart = ({ product }: { product: product }) => {
    const dispatch = useDispatch<AppDispatch>();

    const { id, images, category, name, price } = product;

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
        toast.success("Successfully added item to cart!");
    }

    return (
        <Button variant="outline" className="w-full" onClick={handleAddToCart}>
            Add to Cart
        </Button>
    );
};

export default AddItemToCart;