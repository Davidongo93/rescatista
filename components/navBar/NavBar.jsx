import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBriefcase,
  faImage,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/experience", icon: faBriefcase, label: "Experiencia" },
    { href: "/", icon: faHome, label: "Inicio" },
    { href: "/gallery", icon: faImage, label: "Galería" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full px-4 py-3 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/60 backdrop-blur-xl border-b border-white/10 shadow-glow-soft"
          : "bg-transparent backdrop-blur-md"
      }`}
      aria-label="Navegación principal"
    >
      <div className="flex justify-center items-center">
        <ul className="flex items-center gap-2 sm:gap-3 p-1 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                title={link.label}
                aria-label={link.label}
                className="group relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl text-white/70 hover:text-white transition-all duration-300 hover:bg-gradient-to-br hover:from-brand-indigo-500/20 hover:to-brand-orange-500/20"
              >
                <FontAwesomeIcon
                  icon={link.icon}
                  className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
                />
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
