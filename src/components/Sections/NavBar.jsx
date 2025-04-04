import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 z-50 w-full p-4 bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-black font-bold text-xl">GTour</div>

        <div className="hidden md:flex space-x-4 text-black">
          <Link to="/" className="hover:text-gray-500">
            Home
          </Link>
          <Link to="/destinations" className="hover:text-gray-500">
            Destinations
          </Link>
          <Link to="/about" className="hover:text-gray-500">
            About Us
          </Link>
          <Link to="/packages" className="hover:text-gray-500">
            Packages
          </Link>
          <Link to="/blog" className="hover:text-gray-500">
            Blog
          </Link>
          <Link to="/contact" className="hover:text-gray-500">
            Contact Us
          </Link>
         
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.829-4.828 4.829a1 1 0 0 1-1.414-1.414l4.829-4.828-4.829-4.829a1 1 0 0 1 1.414-1.414l4.828 4.829 4.829-4.829a1 1 0 1 1 1.414 1.414l-4.829 4.828 4.829 4.829z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-2 bg-white shadow-md">
          <Link to="/" className="block py-2 px-4 text-black hover:bg-gray-100">
            Home
          </Link>
          <Link
            to="/destinations"
            className="block py-2 px-4 text-black hover:bg-gray-100"
          >
            Destinations
          </Link >
          <Link  to="/about"
           className="block py-2 px-4 text-black hover:bg-gray-100">
            About Us
          </Link>
          <Link  to="/packages" className="block py-2 px-4 text-black hover:bg-gray-100">
            Packages
          </Link>
         
          <Link  to="/blog" className="block py-2 px-4 text-black hover:bg-gray-100">
            Blog
          </Link>
          <Link  to="/contact" className="block py-2 px-4 text-black hover:bg-gray-100">
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
