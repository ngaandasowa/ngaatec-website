"use client";

import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNotification, setShowNotification] = useState(true);
  const [showClientZoneModal, setShowClientZoneModal] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const closeNotification = () => {
    setShowNotification(false);
    localStorage.setItem("notificationDismissed", "true");
  };

  const handleClientZoneClick = () => {
    setShowClientZoneModal(true);
    setCountdown(3); // Reset countdown to 3 seconds
  };

  const closeClientZoneModal = () => {
    setShowClientZoneModal(false);
    setCountdown(3); // Reset countdown when modal is closed
  };

  useEffect(() => {
    let countdownInterval: NodeJS.Timeout;
    
    if (showClientZoneModal && countdown > 0) {
      countdownInterval = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else if (showClientZoneModal && countdown === 0) {
      // Redirect when countdown reaches 0
      window.location.href = "https://clientzone.ngaatec.co.zw";
    }

    return () => {
      if (countdownInterval) {
        clearInterval(countdownInterval);
      }
    };
  }, [showClientZoneModal, countdown]);

  useEffect(() => {
    const dismissed = localStorage.getItem("notificationDismissed");
    if (dismissed === "true") {
      setShowNotification(false);
    }
  }, []);

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
    <>
      {/* Notification Section */}
      {showNotification && (
        <div
          className="fixed top-0 left-0 w-full bg-white text-black py-4 px-4 md:px-8 flex justify-between items-center z-60"
          style={{ zIndex: 1000 }}
        >
          <p className="text-sm font-bold">
            🎉 Special Offers: Visit our store and grab the latest deals!
          </p>
          <div className="flex items-center">
            <button
              onClick={() => (window.location.href = "/shop")}
              className="bg-black text-white mr-2 px-4 py-2 rounded-md hover:bg-blue-900 flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faShoppingCart} />
            </button>
            <button
              onClick={closeNotification}
              className="bg-black text-white px-4 py-2 rounded-md hover:bg-blue-900 flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        </div>
      )}

      {/* ClientZone Modal */}
      {showClientZoneModal && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[1000] p-4"
          style={{ zIndex: 1001 }}
        >
          <div className="bg-white text-black rounded-lg p-6 max-w-md w-full text-center shadow-2xl">
            <h3 className="text-xl font-bold mb-4 text-blue-600">Redirecting to ClientZone</h3>
            <p className="mb-4 text-gray-700">
              You are being redirected to our ClientZone portal.
            </p>
            
            {/* Countdown Display */}
            <div className="mb-4">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {countdown}
              </div>
              <div className="text-sm text-gray-500">
                {countdown === 1 ? "second" : "seconds"} remaining...
              </div>
            </div>

            {/* Animated Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-linear"
                style={{ width: `${((3 - countdown) / 3) * 100}%` }}
              ></div>
            </div>

            {/* Loading Spinner */}
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-4"></div>
            
            <button
              onClick={closeClientZoneModal}
              className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors duration-200"
            >
              Cancel Redirect
            </button>
          </div>
        </div>
      )}

      {/* Navbar */}
      <nav
        className={`fixed w-full text-white py-4 z-50 transition-all duration-300 ease-in-out ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        } ${isScrolled ? "bg-black" : "bg-transparent"}`}
        style={{
          top: showNotification ? "64px" : "0",
          transition: "top 0.3s ease-out, background-color 0.3s ease-out",
        }}
      >
        <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
          <h1 className="text-lg font-bold">Ngaatec</h1>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 font-bold items-center">
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
            
            {/* Desktop ClientZone Button */}
            <button
              onClick={handleClientZoneClick}
              className="bg-white text-black hover:text-white bg-blue-600 hover:bg-[#212121] px-4 py-2 rounded-md transition-colors duration-200 flex items-center space-x-2"
            >
              <FaUserCircle size={16} />
              <span>ClientZone</span>
            </button>
          </div>

          {/* Mobile Menu Icons */}
          <div className="md:hidden flex items-center font-bold space-x-4">
            {/* Mobile ClientZone Icon */}
            <button
              onClick={handleClientZoneClick}
              className="text-white focus:outline-none"
              aria-label="ClientZone"
            >
              <FaUserCircle size={24} />
            </button>
            
            {/* Mobile Menu Toggle */}
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
            className="md:hidden absolute top-0 left-0 w-full bg-black text-white py-4 shadow-md z-50 animate-slide-down"
          >
            <div className="flex flex-col items-center space-y-4 font-bold">
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
              <Link href="/shop" legacyBehavior>
                <a
                  onClick={closeMenu}
                  className={`hover:text-blue-400 transition ${
                    pathname === "/shop" ? "underline" : ""
                  }`}
                >
                  Shop
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
              
              {/* Mobile ClientZone Button in Menu */}
              <button
                onClick={() => {
                  closeMenu();
                  handleClientZoneClick();
                }}
                className="bg-white text-black hover:bg-[#212121] hover:text-white px-4 py-2 rounded-md transition-colors duration-200 flex items-center space-x-2 mt-4"
              >
                <FaUserCircle size={16} />
                <span>ClientZone</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;