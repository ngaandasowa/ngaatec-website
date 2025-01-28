"use client";

import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsOpen(false);
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full text-white py-4 z-50 transition-all duration-300 ease-in-out ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } ${isScrolled ? "bg-gray-800" : "bg-transparent"}`}
      style={{
        transition: "background-color 0.3s ease-out",
      }}
    >
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        <h1 className="text-lg font-bold">Ngaatec</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" legacyBehavior>
            <a
              className={`hover:text-blue-400 transition ${
                pathname === "/" ? "underline" : ""
              }`}
            >
              Home
            </a>
          </Link>
          <Link href="/shop" legacyBehavior>
            <a
              className={`hover:text-blue-400 transition ${
                pathname === "/shop" ? "underline" : ""
              }`}
            >
              Shop
            </a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a
              className={`hover:text-blue-400 transition ${
                pathname === "/about" ? "underline" : ""
              }`}
            >
              About
            </a>
          </Link>
          <Link href="/services" legacyBehavior>
            <a
              className={`hover:text-blue-400 transition ${
                pathname === "/services" ? "underline" : ""
              }`}
            >
              Services
            </a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a
              className={`hover:text-blue-400 transition ${
                pathname === "/contact" ? "underline" : ""
              }`}
            >
              Contact
            </a>
          </Link>
          <Link href="/socials" legacyBehavior>
            <a
              className={`hover:text-blue-400 transition ${
                pathname === "/socials" ? "underline" : ""
              }`}
            >
              Socials
            </a>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
        <Link href="/shop" legacyBehavior>
            <a>
              <FaShoppingCart size={24} className="mr-4" />
            </a>
          </Link>
        <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Backdrop for Mobile Menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeMenu}
        ></div>
      )}

      {/* Mobile Menu */}
      {isOpen && (
        <div
          ref={menuRef}
          className="md:hidden absolute top-0 left-0 w-full bg-gray-800 text-white py-4 shadow-md z-50 animate-slide-down"
        >
          <div className="flex flex-col items-center space-y-4">
            <Link href="/" legacyBehavior>
              <a
                onClick={closeMenu}
                className={`hover:text-blue-400 transition ${
                  pathname === "/" ? "underline" : ""
                }`}
              >
                Home
              </a>
            </Link>
            <Link href="/about" legacyBehavior>
              <a
                onClick={closeMenu}
                className={`hover:text-blue-400 transition ${
                  pathname === "/about" ? "underline" : ""
                }`}
              >
                About
              </a>
            </Link>
            <Link href="/services" legacyBehavior>
              <a
                onClick={closeMenu}
                className={`hover:text-blue-400 transition ${
                  pathname === "/services" ? "underline" : ""
                }`}
              >
                Services
              </a>
            </Link>
            <Link href="/contact" legacyBehavior>
              <a
                onClick={closeMenu}
                className={`hover:text-blue-400 transition ${
                  pathname === "/contact" ? "underline" : ""
                }`}
              >
                Contact
              </a>
            </Link>
            <Link href="/socials" legacyBehavior>
              <a
                onClick={closeMenu}
                className={`hover:text-blue-400 transition ${
                  pathname === "/socials" ? "underline" : ""
                }`}
              >
                Socials
              </a>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;