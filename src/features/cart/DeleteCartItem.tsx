import { AppDispatch } from "@/store";
import { HiOutlineTrash } from "react-icons/hi2";
import { useDispatch } from "react-redux";
import { deleteFromCart } from "./cartSlice";

const DeleteCartItem = ({ productId }: { productId: number }) => {
    const dispatch = useDispatch<AppDispatch>();

    return (
        <div>
            <button
                className="text-textGray hover:text-red-600 text-2xl"
                onClick={() => dispatch(deleteFromCart(productId))}
            >
                <HiOutlineTrash />
            </button>
        </div>
    );
};

export default DeleteCartItem;