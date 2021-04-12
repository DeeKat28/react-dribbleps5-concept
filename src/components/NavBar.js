import React from "react";
import Logo from "./Logo";
import GameSearch from "./GameSearch";
import { ImEvil, ImCircleDown, ImFire } from "react-icons/im";
import { RiUser5Line } from "react-icons/ri";

const links = [
  {
    navTitle: "Shop",
    navURL: "/",
  },
  {
    navTitle: "Best Sellers",
    navURL: "/",
  },
  {
    navTitle: "Flash Sale",
    navURL: "/",
  },
  {
    navTitle: "About Us",
    navURL: "/",
  },
  {
    navTitle: "Ask Questions",
    navURL: "/",
  },
];

const NavBar = () => {
  return (
    <div className="w-screen h-auto bg-gradient-to-r from-headstart via-headmid to-headend opacity-95">
      <div className="flex flex-row flex-wrap justify-between items-center">
        <Logo />
        <nav className="flex-auto">
          <ul className="inline-flex w-full">
            {links.map((NavItem, index) => {
              return (
                <li
                  key={index}
                  className="flex-1 hover:bg-gray-300 transform -skew-x-12"
                >
                  <a
                    className="block text-center py-6 text-gray-300 hover:text-headend"
                    href={NavItem.navURL}
                  >
                    {NavItem.navTitle}
                  </a>
                </li>
              );
            })}
          </ul>
          {/* <div className="relative">
            <button
              type="button"
              className="text-gray-50 group bg-gray-500 rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              aria-expanded="false"
            >
              <span>Shop</span>
            </button>
          </div> */}
        </nav>
        <GameSearch />
        <div className="flex-auto inline-flex items-center place-content-evenly">
          <ImEvil className="text-gray-400 transform scale-125 cursor-pointer" />
          <ImCircleDown className="flex-grow-0 text-gray-400 transform scale-125 cursor-pointer" />
          <ImFire className="text-gray-400 transform scale-150 cursor-pointer" />
          <div className="inline-flex items-center">
            <RiUser5Line className="text-gray-400 transform scale-150 cursor-pointer" />
            <a className="text-gray-300 mx-5" href="/">
              Sign in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
