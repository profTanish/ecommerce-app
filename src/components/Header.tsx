import HeaderActions from "./HeaderActions";
import Logo from "./Logo";
import Navigation from "./Navigation";

const Header = () => {
    return (
        <div className="max-w-container mx-auto min-h-20 rounded-b-xl flex justify-between px-10">
            <Logo />
            <Navigation />
            <HeaderActions />
        </div>
    );
};

export default Header;