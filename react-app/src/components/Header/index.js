import React from 'react';

const Header = () => {
  return (
<header className="max-w-screen-xl mx-auto mb-8">
      <nav
        className="px-4 sm:px-5 py-12 flex items-center justify-between space-x-12"
      >
        <div className="flex items-center space-x-8">
          <div id="logo" className="flex items-center space-x-2">
            <a href="/" className="flex items-center space-x-2">
              <img
                src="assets/logo.png"
                className="w-8 h-8"
                alt="VTecknology Logo"
              />
              <h5 className="text-xl font-bold text-[#094067]">VTecknologies</h5>
            </a>
          </div>
         
        </div>
        <div className="lg:hidden">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <line x1="4" y1="6" x2="20" y2="6"></line>
              <line x1="4" y1="12" x2="20" y2="12"></line>
              <line x1="4" y1="18" x2="20" y2="18"></line>
            </svg>
          </button>
        </div>
        <div class="hidden lg:flex items-center space-x-5">
          <a
            href="/"
            className="px-5 py-3 rounded-md text-[#094067] font-semibold hover:text-[#094067]/75 transition duration-300"
          >
            Home
          </a>
          <a
            className="px-5 py-3 rounded-md text-[#094067] font-semibold hover:text-[#094067]/75 transition duration-300"
            href="about.html"
          >
            About Us
          </a>
          <a
            className="px-5 py-3 rounded-md text-[#094067] font-semibold hover:text-[#094067]/75 transition duration-300"
            href="#contactme"
          >
            Contact Us
          </a>
          <a
            href="#myproduct"
            className="px-5 py-3 text-white bg-[#D687EB] rounded-md shadow-[0_6px_30px_rgba(214,135,235,0.6)] font-semibold hover:bg-[#D687EB] transition-colors duration-300"
          >
            Our Products
          </a>
          
        </div>
      </nav>
    </header>
    )
}


export default Header;