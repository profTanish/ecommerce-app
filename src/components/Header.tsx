import HeaderActions from "./HeaderActions";
import Logo from "./Logo";
import Navigation from "./Navigation";

const Header = () => {
    return (
        <header className="max-w-container mx-auto min-h-20 rounded-b-xl flex justify-between px-10">
            <Logo />
            <Navigation />
            <HeaderActions />
        </header>
    );
};

export default Header;