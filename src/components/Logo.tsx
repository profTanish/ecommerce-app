import { Link } from "react-router-dom";

const Logo = () => {
    const isDarkMode = false;

    const src = isDarkMode ? "./logo-dark.svg" : "/logo-light.svg";

    return (
        <Link className="my-auto h-9" to="/">
            <img src={src} alt="logo" className="w-full h-full" />
        </Link>
    );
};

export default Logo;