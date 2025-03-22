import { FaGithubSquare, FaLinkedin, FaYoutubeSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" bg-darkSlate text-white">
      <div className="max-w-container mx-auto flex flex-wrap items-end justify-between px-5 py-8 xl:px-0">
        <div className="flex gap-16">
          <div>
            <h3 className="heading-tertiary mb-2.5">Navigation</h3>
            <ul className="text-stone-400">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/store">Store</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="heading-tertiary mb-2.5">Support</h3>
            <ul className="text-stone-400">
              <li>
                <Link to="">Contact Us</Link>
              </li>
              <li>
                <Link to="">Shipping</Link>
              </li>
              <li>
                <Link to="">Return</Link>
              </li>
              <li>
                <Link to="">FAQ</Link>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <p>Get In Touch</p>
          <div className="flex items-center gap-2.5 mt-2.5">
            <a href="https://www.linkedin.com/in/andrija-djordjevic-a7b794282/">
              <FaLinkedin className="text-3xl" />
            </a>
            <a href="https://github.com/andrijaweb">
              <FaGithubSquare className="text-3xl" />
            </a>
            <a href="https://youtube.com">
              <FaYoutubeSquare className="text-3xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;