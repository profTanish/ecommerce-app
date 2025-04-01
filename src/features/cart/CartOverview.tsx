import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import { getTotalCartPrice } from "./cartSlice";
import {
    calculateGrandTotal,
    calculateShipping,
    calculateTax,
} from "@/lib/helpers";

const CartOverview = () => {
    const totalCartPrice = useSelector(getTotalCartPrice);
    const shippingPrice = calculateShipping();
    const taxPrice = calculateTax(totalCartPrice);
  
    return (
        <div className="bg-lightGray p-8 rounded-md max-w-[26rem] w-full self-start">
            <h3 className="heading-tertiary">Order Details</h3>
            <ul className="space-y-2.5 my-5">
                <li className="text-textGray flex items-center justify-between">
                    <p>Subtotal</p>
                    <p>${totalCartPrice}</p>
                </li>
                <li className="text-textGray flex items-center justify-between">
                    <p>Shipping</p>
                    <p>${shippingPrice}</p>
                </li>
                <li className="text-textGray flex items-center justify-between">
                    <p>Tax</p>
                    <p>${taxPrice}</p>
                </li>
                <li className="pt-5 text-textGray font-semibold flex items-center justify-between border-t border-darkGray">
                    <p>Grand Total</p>
                    <p>${calculateGrandTotal(totalCartPrice, shippingPrice, taxPrice)}</p>
                </li>
            </ul>
            <Button className="w-full">Checkout</Button>
        </div>
    );
};

export default CartOverview;