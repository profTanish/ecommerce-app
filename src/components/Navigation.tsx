import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <ul className="flex items-center gap-8 font-medium text-textGray">
            <li>
                <NavLink className="hover:text-darkSlate nav-link" to="/home">
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink className="hover:text-darkSlate nav-link" to="/store">
                    Store
                </NavLink>
            </li>
            <li>
                <NavLink className="hover:text-darkSlate nav-link" to="/about">
                    About
                </NavLink>
            </li>
        </ul>
    );
};

export default Navigation;