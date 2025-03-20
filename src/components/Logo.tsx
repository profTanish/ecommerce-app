import { Link } from "react-router-dom";

const Logo = () => {
    const isDarkMode = false;

    const src = isDarkMode ? "./logo-dark.svg" : "/logo-light.svg";

    return (
        <Link className="my-auto" to="/">
            <img src={src} alt="logo" />
        </Link>
    );
};

export default Logo;