import {
    HiOutlineMagnifyingGlass,
    HiOutlineShoppingCart,
    HiOutlineUser,
} from "react-icons/hi2";

const HeaderActions = () => {
    return (
        <div className="flex items-center gap-2.5">
            <button className="text-center p-3 border border-darkGray rounded-full">
                <HiOutlineMagnifyingGlass className="text-2xl" />
            </button>

            <button className="text-center p-3 border border-darkGray rounded-full">
                <HiOutlineShoppingCart className="text-2xl" />
            </button>

            <button className="text-center p-3 border border-darkSlate bg-darkSlate rounded-full">
                <HiOutlineUser className="text-2xl text-white" />
            </button>
        </div>
    );
};

export default HeaderActions;