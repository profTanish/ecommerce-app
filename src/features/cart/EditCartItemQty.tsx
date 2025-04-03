import { AppDispatch } from "@/store";
import { useDispatch } from "react-redux";
import { decreaseQty, increaseQty } from "./cartSlice";
import { HiMinus, HiPlus } from "react-icons/hi2";

type EditCartItemQtyProps = {
    productId: number;
    quantity: number;
};

const EditCartItemQty = ({ productId, quantity }: EditCartItemQtyProps) => {
    const dispatch = useDispatch<AppDispatch>();

    return (
        <div className="flex gap-4 text-2xl">
            <button onClick={() => dispatch(decreaseQty(productId))}>
                <HiMinus />
            </button>

            <p className="text-lg">{quantity}</p>

            <button onClick={() => dispatch(increaseQty(productId))}>
                <HiPlus />
            </button>
        </div>
    );
};

export default EditCartItemQty;