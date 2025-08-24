// Header component sabhi pages me common dikhne wala top section hai
// Isme website ka naam aur navigation links diye gaye hain
// NavLink ka use kiya gaya hai jo active route ke liye styling allow karta hai
// NavLink anchor tag jaise hi hota hai, but routing ke liye kaam karta hai bina reload ke

import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 shadow-md">
      <div className="flex justify-between items-center px-8 py-8 max-w-7xl mx-auto text-white">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold tracking-wide">
          <NavLink to="/" className="hover:text-blue-400 transition">
            🌍 World <span className="text-blue-400">Atlas</span>
          </NavLink>
        </h1>

        {/* Navigation */}
        <nav>
          <ul className="flex items-center space-x-8">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `transition hover:text-blue-400 ${
                    isActive ? "text-yellow-300 font-semibold" : "text-gray-300"
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
                  `transition hover:text-blue-400 ${
                    isActive ? "text-yellow-300 font-semibold" : "text-gray-300"
                  }`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/country"
                className={({ isActive }) =>
                  `transition hover:text-blue-400 ${
                    isActive ? "text-yellow-300 font-semibold" : "text-gray-300"
                  }`
                }
              >
                Country
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `transition hover:text-blue-400 ${
                    isActive ? "text-yellow-300 font-semibold" : "text-gray-300"
                  }`
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;


//Why use NavLink instead of Link?
// NavLink is better when you want to apply styles on the active link.
//eg. see About
// we need to pass an attribute to= in NavLink, jisme hum path define karte hai.