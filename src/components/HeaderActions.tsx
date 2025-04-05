import {
    HiOutlineMagnifyingGlass,
    HiOutlineShoppingCart,
    HiOutlineUser,
} from "react-icons/hi2";
import { Link } from "react-router-dom";

const HeaderActions = () => {
    return (
        <div className="flex items-center gap-2.5">
            <Link
                to="/cart"
                className="text-center p-3 border border-darkGray rounded-full transition-all duration-300 hover:bg-darkGray"
            >
                <HiOutlineMagnifyingGlass className="text-2xl" />
            </Link>

            <button className="text-center p-3 border border-darkGray rounded-full transition-all duration-300 hover:bg-darkGray">
                <HiOutlineShoppingCart className="text-2xl" />
            </button>

            <Link
                to="account"
                className="text-center p-3 border border-darkSlate bg-darkSlate rounded-full"
            >
                <HiOutlineUser className="text-2xl text-white" />
            </Link>
        </div>
    );
};

export default HeaderActions;