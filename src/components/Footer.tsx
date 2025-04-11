import { FaGithubSquare, FaLinkedin, FaYoutubeSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-darkSlate text-white px-5">
      <div className="max-w-container mx-auto flex flex-wrap items-end justify-between py-16">
        <div className="grid sm:grid-cols-3 sm:gap-24">
        <div className="space-y-2.5">
             <Logo isDark={true} />
             <p className="w-36 text-stone-400">All about online shopping</p>
           </div>
 
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
              <FaLinkedin className="text-3xl hover:fill-none hover:stroke-[20]" />
            </a>
            <a href="https://github.com/andrijaweb">
              <FaGithubSquare className="text-3xl hover:fill-none hover:stroke-[20]" />
            </a>
            <a href="https://youtube.com">
              <FaYoutubeSquare className="text-3xl hover:fill-none hover:stroke-[20]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;