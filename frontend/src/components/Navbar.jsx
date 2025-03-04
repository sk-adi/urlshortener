import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Mobile icons

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-br from-gray-900 to-black text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <NavLink to="/" className="text-2xl font-bold text-blue-400">
          URL Shortener
        </NavLink>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 text-lg font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-blue-400 transition-all ${
                  isActive ? "text-blue-400" : "text-gray-300"
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `hover:text-blue-400 transition-all ${
                  isActive ? "text-blue-400" : "text-gray-300"
                }`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                `hover:text-blue-400 transition-all ${
                  isActive ? "text-blue-400" : "text-gray-300"
                }`
              }
            >
              Try Free
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all"
            >
              Login
            </NavLink>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-gray-800 text-white text-lg font-medium py-4 space-y-4 text-center">
          <li>
            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className="block py-2 hover:text-blue-400 transition-all"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={() => setIsOpen(false)}
              className="block py-2 hover:text-blue-400 transition-all"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/register"
              onClick={() => setIsOpen(false)}
              className="block py-2 hover:text-blue-400 transition-all"
            >
              Try Free
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/api/login"
              onClick={() => setIsOpen(false)}
              className="block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 mx-10 rounded-lg transition-all"
            >
              Login
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
