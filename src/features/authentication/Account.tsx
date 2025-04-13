import {
    HiOutlineLifebuoy,
    HiOutlineLockClosed,
    HiOutlineUser,
} from "react-icons/hi2";
import { NavLink, Outlet } from "react-router-dom";
import Logout from "../authentication/Logout";

const Account = () => {
    const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
        `flex items-center gap-2.5 p-2.5 group ${isActive ? "text-darkSlate" : "hover:text-darkSlate"
        }`;

    const iconClasses = (isActive: boolean) =>
        `text-xl ${isActive ? "text-blue-600" : "group-hover:text-blue-600"}`;

    return (
        <div className="max-w-container mx-auto py-16">
            <h3 className="text-3xl font-bold">Account Settings</h3>
            <p className="text-textGray">Change your profile & account settings.</p>

            <div className="border-2 border-lightGray p-5 rounded-md mt-10 grid grid-cols-[1fr_4fr]">
                <aside>
                    <ul className="text-textGray font-semibold">
                        <li>
                            <NavLink to="general" className={navLinkClasses}>
                                {({ isActive }) => (
                                    <>
                                        <HiOutlineUser className={iconClasses(isActive)} />
                                        Account
                                    </>
                                )}
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="password" className={navLinkClasses}>
                                {({ isActive }) => (
                                    <>
                                        <HiOutlineLockClosed className={iconClasses(isActive)} />
                                        Password
                                    </>
                                )}
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/help" className={navLinkClasses}>
                                {({ isActive }) => (
                                    <>
                                        <HiOutlineLifebuoy className={iconClasses(isActive)} />
                                        Help
                                    </>
                                )}
                            </NavLink>
                        </li>

                        <li>
                            <Logout />
                        </li>
                    </ul>
                </aside>
                <Outlet />
            </div>
        </div>
    );
};

export default Account;