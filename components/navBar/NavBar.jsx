import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBriefcase,
  faImage,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full p-2 bg-indigo-500 transition-opacity duration-300 ${
        scrolling
          ? "backdrop-blur-md bg-opacity-10"
          : "backdrop-blur-md bg-opacity-30"
      }`}
      style={{ zIndex: 1000 }}
    >
      <div className="flex justify-center items-center">
        <div className="flex items-center space-x-8">
          <Link href="/experience" title="Experiencia">
            <FontAwesomeIcon icon={faBriefcase} className="w-8 h-8 text-indigo-500 text-2xl transition duration-300 transform hover:scale-110" />
          </Link>
         <Link href="/">
            <FontAwesomeIcon icon={faHome} className="w-8 h-8 text-indigo-500 text-2xl transition duration-300 transform hover:scale-110" />
        </Link>
          <Link href="/gallery" title="Galería">
            <FontAwesomeIcon icon={faImage} className="w-8 h-8 text-indigo-500 text-2xl transition duration-300 transform hover:scale-110" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
