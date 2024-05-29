import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <header className="max-w-screen-xl mx-auto mb-8">
      <nav className="px-4 sm:px-5 py-12 flex items-center justify-between space-x-12">
        <div className="flex items-center space-x-8">
          <div id="logo" className="flex items-center space-x-2">
            <Link to="/app/" className="flex items-center space-x-2">
              <img
                src={process.env.PUBLIC_URL + "/assets/logo.png"}
                className="w-8 h-8"
                alt="VTecknology Logo"
              />
              <h5 className="text-xl font-bold text-[#094067]">
                VTecknologies
              </h5>
            </Link>
          </div>
        </div>
        <div className="lg:hidden">
          <button>
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
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <line x1="4" y1="6" x2="20" y2="6"></line>
              <line x1="4" y1="12" x2="20" y2="12"></line>
              <line x1="4" y1="18" x2="20" y2="18"></line>
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex items-center space-x-5">
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
    </header>
  );
};

export default Header;
