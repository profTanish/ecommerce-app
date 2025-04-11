import HeaderActions from "./HeaderActions";
import Logo from "./Logo";
import Navigation from "./Navigation";

const Header = () => {
    return (
        <header className="min-h-20 px-5 fixed top-0 z-50 w-full bg-white flex items-stretch">
            <div className="flex justify-between items-center  max-w-container mx-auto w-full">
                <Logo />
                <Navigation />
                <HeaderActions />
            </div>
        </header>
    );
};

export default Header;