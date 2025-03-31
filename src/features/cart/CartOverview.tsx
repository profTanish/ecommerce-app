import { Button } from "@/components/ui/button";

const CartOverview = () => {
    return (
        <div className="bg-lightGray p-8 rounded-md max-w-[26rem] w-full self-start">
            <h3 className="heading-tertiary">Order Details</h3>
            <ul className="space-y-2.5 my-5">
                <li className="text-textGray flex items-center justify-between">
                    <p>Subtotal</p>
                    <p>$44.99</p>
                </li>
                <li className="text-textGray flex items-center justify-between">
                    <p>Shipping</p>
                    <p>$10.00</p>
                </li>
                <li className="text-textGray flex items-center justify-between">
                    <p>Tax</p>
                    <p>7%</p>
                </li>
                <li className="pt-5 text-textGray font-semibold flex items-center justify-between border-t border-darkGray">
                    <p>Grand Total</p>
                    <p>$100.00</p>
                </li>
            </ul>
            <Button className="w-full">Checkout</Button>
        </div>
    );
};

export default CartOverview;