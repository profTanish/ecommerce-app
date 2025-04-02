import { capitalizeFirstLetter } from "@/lib/helpers";
import { HiMinus, HiOutlineTrash, HiPlus } from "react-icons/hi2";

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
    const { name, category, price, image, quantity } = item;

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

            <div className="flex gap-4 text-2xl">
                <button>
                    <HiMinus />
                </button>

                <p className="text-lg">{quantity}</p>

                <button>
                    <HiPlus />
                </button>
            </div>

            <p className="text-2xl font-bold">${price}</p>

            <button className="text-textGray hover:text-red-600 text-2xl">
                <HiOutlineTrash />
            </button>
        </li>
    );
};

export default CartItem;