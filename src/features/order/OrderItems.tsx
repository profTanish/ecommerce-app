import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCart } from "../cart/cartSlice";

const OrderItems = () => {
    const cart = useSelector(getCart);

    if (!cart.length) return <Navigate to="/cart" replace />;

    return (
        <ul className="max-h-96 overflow-scroll mb-5 pr-5">
            {cart.map((item) => (
                <li
                    key={item.productId}
                    className="flex gap-16 justify-between items-center py-5 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-lightGray"
                >
                    <div className="flex items-center gap-4">
                        <div className="w-[5] h-[5rem] rounded-md overflow-hidden">
                            <img className="w-full h-full" src={item.image} alt={item.name} />
                        </div>
                        <p className="font-bold">{item.quantity}x</p>
                        <p>{item.name}</p>
                    </div>

                    <p className="font-bold">${item.price}</p>
                </li>
            ))}
        </ul>
    );
};

export default OrderItems;