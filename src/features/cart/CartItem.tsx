import { HiMinus, HiOutlineTrash, HiPlus } from "react-icons/hi2";

const CartItem = () => {
    return (
        <li className="flex gap-16 items-center py-5 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-lightGray pr-5">
            <div className="flex gap-5">
                <div className="max-w-[7.5rem] rounded-md overflow-hidden">
                    <img className="w-full h-full" src="bike.jpg" alt="electric bike" />
                </div>

                <div className="max-w-[12.125rem]">
                    <p className="text-xs text-textGray">Clothes</p>
                    <h5 className="text-lg">Classic Red Jogger Sweatpants</h5>
                </div>
            </div>

            <div className="flex gap-4 text-2xl">
                <button>
                    <HiMinus />
                </button>

                <p className="text-lg">1</p>

                <button>
                    <HiPlus />
                </button>
            </div>

            <p className="text-2xl font-bold">$41.99</p>

            <button className="text-textGray hover:text-red-600 text-2xl">
                <HiOutlineTrash />
            </button>
        </li>
    );
};

export default CartItem;