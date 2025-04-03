import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 z-50 w-full p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">GTour</div>

        <div className="hidden md:flex space-x-4 text-white">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/destinations" className="hover:text-gray-300">
            Destinations
          </Link>
          <span className="hover:text-gray-300">Tours</span>
          <span className="hover:text-gray-300">Booking</span>
          <span className="hover:text-gray-300">Pages</span>
          <span className="hover:text-gray-300">Blog</span>
          <span className="hover:text-gray-300">Shortcodes</span>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
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
        <div className="md:hidden mt-2">
          <Link to="/" className="block py-2 px-4 text-white hover:bg-gray-700">
            Home
          </Link>
          <Link
            to="/destinations"
            className="block py-2 px-4 text-white hover:bg-gray-700"
          >
            Destinations
          </Link>
          <span className="block py-2 px-4 text-white hover:bg-gray-700">
            Tours
          </span>
          <span className="block py-2 px-4 text-white hover:bg-gray-700">
            Booking
          </span>
          <span className="block py-2 px-4 text-white hover:bg-gray-700">
            Pages
          </span>
          <span className="block py-2 px-4 text-white hover:bg-gray-700">
            Blog
          </span>
          <span className="block py-2 px-4 text-white hover:bg-gray-700">
            Shortcodes
          </span>
        </div>
      )}
    </nav>
  );
}

export default NavBar;