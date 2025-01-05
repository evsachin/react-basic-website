import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 text-white px-4 py-3 flex justify-between items-center rounded-md">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <Link to="/">MyLogo</Link>
      </div>

      {/* Links for larger screens */}
      <ul
        className={`hidden md:flex space-x-6 items-center ${
          isMenuOpen ? "block" : ""
        }`}
      >
        <li>
          <Link to="/" className="text-white hover:text-blue-500">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-white hover:text-blue-500">
            About
          </Link>
        </li>
        <li>
          <Link to="/gallery" className=" text-white hover:text-blue-500">
            Gallery
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-white hover:text-blue-500">
            Contact
          </Link>
        </li>
        <li>
          <Link
            to="/login"
            className="bg-green-500 hover:bg-slate-600 text-white px-4 py-2 rounded"
          >
            Login
          </Link>
        </li>
      </ul>

      {/* Hamburger Menu */}
      <div
        className="md:hidden flex flex-col space-y-1 cursor-pointer"
        onClick={toggleMenu}
      >
        <span className="w-6 h-1 bg-white"></span>
        <span className="w-6 h-1 bg-white"></span>
        <span className="w-6 h-1 bg-white"></span>
      </div>

      {/* Links for smaller screens */}
      {isMenuOpen && (
        <ul className="absolute top-full left-0 w-full bg-gray-800 text-center space-y-4 py-4 md:hidden">
          <li>
            <Link to="/" className="block hover:text-blue-500">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="block hover:text-blue-500">
              About
            </Link>
          </li>

          <li>
            <Link to="/gallery" className="block hover:text-blue-500">
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/contact" className="block hover:text-blue-500">
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded w-3/4"
            >
              Login
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
