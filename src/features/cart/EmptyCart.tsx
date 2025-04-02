import { Button } from "@/components/ui/button";
import { useMoveBack } from "@/hooks/useMoveBack";
import { Link } from "react-router-dom";

const EmptyCart = () => {
    const moveBack = useMoveBack();

    return (
        <div className="max-w-container mx-auto min-h-[80vh] flex flex-col items-center justify-center text-center gap-5">
            <h2 className="heading-secondary">Your cart is empty.</h2>
            <p className="text-textGray">
                Please start adding products to your cart.
            </p>
            <div className="space-x-2.5">
                <Button variant="outline" onClick={moveBack}>
                    &larr; Go back
                </Button>
                <Button asChild>
                    <Link to="/shop">Start Shopping</Link>
                </Button>
            </div>
        </div>
    );
};

export default EmptyCart;