import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
            <img
              src="http://mmshipping.com/assets/img/misc/logo2.png"
              alt="MM Shipping Logo"
              className="h-8 md:h-10"
            />
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className={` ${isScrolled ? "text-gray-800 hover:text-gray-600":  "text-white hover:text-gray-300"} `}>
              Home
            </Link>
            <Link to="/about" className={` ${isScrolled ? "text-gray-800 hover:text-gray-600":  "text-white hover:text-gray-300"} `}>
              About Us
            </Link>
            <Link to="/services" className={` ${isScrolled ? "text-gray-800 hover:text-gray-600":  "text-white hover:text-gray-300"} `}>
              Services
            </Link>
            <Link to="/contact" className={` ${isScrolled ? "text-gray-800 hover:text-gray-600":  "text-white hover:text-gray-300"} `}>
              Contact Us
            </Link>
          </div>

          {/* Mobile Burger Menu */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`${isScrolled ? "text-gray-800" : "text-white"}  focus:outline-none`}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-16 left-0 w-full bg-white shadow-lg transform transition-transform duration-300 ${
          isMenuOpen ? "translate-y-0" : "-translate-y-96"
        }`}
      >
        <ul className="flex flex-col space-y-4 p-4">
          <li>
            <Link
              to="/"
              className="block text-gray-800 hover:text-gray-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block text-gray-800 hover:text-gray-600"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="block text-gray-800 hover:text-gray-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="block text-gray-800 hover:text-gray-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
