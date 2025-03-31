import { useMoveBack } from "@/hooks/useMoveBack";
import { HiArrowUturnLeft } from "react-icons/hi2";
import CartItem from "./CartItem";

const Cart = () => {
    const moveBack = useMoveBack();

    return (
        <div className="max-w-container mx-auto py-16">
            <button
                onClick={moveBack}
                className="flex items-center gap-2.5 text-textGray hover:text-darkSlate"
            >
                <span>
                    <HiArrowUturnLeft />
                </span>
                Go Back
            </button>

            <h2 className="heading-tertiary mt-5 mb-8">Shopping Cart</h2>

            <ul>
                <CartItem />
            </ul>
        </div>
    );
};

export default Cart;