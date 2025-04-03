import { capitalizeFirstLetter } from "@/lib/helpers";
import DeleteCartItem from "./DeleteCartItem";
import EditCartItemQty from "./EditCartItemQty";

type CartItemProps = {
    item: {
        productId: number;
        name: string;
        category: string;
        price: number;
        image: string;
        totalPrice: number;
        quantity: number;
    };
};

const CartItem = ({ item }: CartItemProps) => {
    const { productId, name, category, price, image, quantity } = item;

    return (
        <li className="flex gap-16 justify-between items-center py-5 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-lightGray pr-5">
            <div className="flex gap-5">
                <div className="max-w-[7.5rem] rounded-md overflow-hidden">
                    <img className="w-full h-full" src={image} alt={name} />
                </div>

                <div className="max-w-[12.125rem]">
                    <p className="text-xs text-textGray">
                        {capitalizeFirstLetter(category)}
                    </p>
                    <h5 className="text-lg">{name}</h5>
                </div>
            </div>

            <EditCartItemQty productId={productId} quantity={quantity} />

            <p className="text-2xl font-bold">${price}</p>

            <DeleteCartItem productId={productId} />
        </li>
    );
};

export default CartItem;