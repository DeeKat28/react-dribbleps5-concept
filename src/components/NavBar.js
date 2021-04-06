import React from "react";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <div className="relative w-screen bg-gray-500">
      <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
        <Logo />
        <nav className="hidden md:flex space-x-10">
          <div class="relative">
            <button
              type="button"
              className="text-gray-50 group bg-gray-500 rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              aria-expanded="false"
            >
              <span>Solutions</span>
            </button>
          </div>
          <div class="relative">
            <button
              type="button"
              className="text-gray-50 group bg-gray-500 rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              aria-expanded="false"
            >
              <span>Solutions</span>
            </button>
          </div>
          <div class="relative">
            <button
              type="button"
              className="text-gray-50 group bg-gray-500 rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              aria-expanded="false"
            >
              <span>Solutions</span>
            </button>
          </div>
          <div class="relative">
            <button
              type="button"
              className="text-gray-50 group bg-gray-500 rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              aria-expanded="false"
            >
              <span>Solutions</span>
            </button>
          </div>
          <div class="relative">
            <button
              type="button"
              className="text-gray-50 group bg-gray-500 rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              aria-expanded="false"
            >
              <span>Solutions</span>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
