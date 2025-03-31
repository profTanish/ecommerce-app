import { useMoveBack } from "@/hooks/useMoveBack";
import { HiArrowUturnLeft } from "react-icons/hi2";
import CartItem from "./CartItem";
import CartOverview from "./CartOverview";

const Cart = () => {
    const moveBack = useMoveBack();

    return (
        <div className="max-w-container mx-auto py-16 flex justify-between">
            <div>
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

                <ul className="max-h-96 overflow-scroll">
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </ul>
            </div>

            <CartOverview />
        </div>
    );
};

export default Cart;