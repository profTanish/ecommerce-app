import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <ul className="flex items-center gap-8 font-medium">
            <li>
                <NavLink to="/home">Home</NavLink>
            </li>
            <li>
                <NavLink to="/store">Store</NavLink>
            </li>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
        </ul>
    );
};

export default Navigation;