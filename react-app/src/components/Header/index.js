import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "../../App.css";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 bg-white shadow z-50 max-w-screen-xl mx-auto lg:mb-8" id="header">
      <nav className="px-4 sm:px-5 py-12 flex items-center justify-between space-x-12">
        <div className="flex items-center space-x-8">
          <div id="logo" className="flex items-center space-x-2">
            <Link to="/app/" className="flex items-center space-x-2">
              <img
                src={process.env.PUBLIC_URL + "/assets/logo.png"}
                className="w-8 h-8"
                alt="VTecknology Logo"
              />
              <h5 className="text-xl font-bold text-[#094067]">VTecknologies</h5>
            </Link>
          </div>
        </div>
        <div className="sm:block md:hidden">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </svg>
            )}
          </button>
        </div>
        <div className="hidden md:flex items-center space-x-5">
          <Link
            to="/app"
            className="px-5 py-3 rounded-md text-[#094067] font-semibold hover:text-[#094067]/75 transition duration-300"
          >
            Home
          </Link>
          <Link
            className="px-5 py-3 rounded-md text-[#094067] font-semibold hover:text-[#094067]/75 transition duration-300"
            to="/app/about"
          >
            About Us
          </Link>
          <HashLink
            className="px-5 py-3 rounded-md text-[#094067] font-semibold hover:text-[#094067]/75 transition duration-300"
            to="/app/#contactme"
          >
            Contact Us
          </HashLink>
          <HashLink
            to="/app/#myproduct"
            className="px-5 py-3 text-white bg-[#D687EB] rounded-md shadow-[0_6px_30px_rgba(214,135,235,0.6)] font-semibold hover:bg-[#D687EB] transition-colors duration-300"
          >
            Our Products
          </HashLink>
        </div>
      </nav>
      <div
        className={`fixed top-[70px] left-0 w-full bg-white z-20 transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-screen" : "max-h-0"
        } overflow-hidden md:hidden`}
      >
        <div className="flex flex-col items-start space-y-3 p-4">
          <Link
            to="/app"
            className="px-5 py-3 rounded-md text-[#094067] font-semibold hover:text-[#094067]/75 transition duration-300"
            onClick={toggleMobileMenu}
          >
            Home
          </Link>
          <Link
            className="px-5 py-3 rounded-md text-[#094067] font-semibold hover:text-[#094067]/75 transition duration-300"
            to="/app/about"
            onClick={toggleMobileMenu}
          >
            About Us
          </Link>
          <HashLink
            className="px-5 py-3 rounded-md text-[#094067] font-semibold hover:text-[#094067]/75 transition duration-300"
            to="/app/#contactme"
            onClick={toggleMobileMenu}
          >
            Contact Us
          </HashLink>
          {/* Updated Our Products link to match others */}
          <HashLink
            to="/app/#myproduct"
            className="px-5 py-3 rounded-md text-[#094067] font-semibold hover:text-[#094067]/75 transition duration-300"
            onClick={toggleMobileMenu}
          >
            Our Products
          </HashLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
