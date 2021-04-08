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
    <div className="w-screen bg-gradient-to-r from-headstart via-headmid to-headend opacity-95">
      <div className="flex justify-between items-center border-b-2 border-gray-100 py-2 md:justify-start md:space-x-10">
        <Logo />
        <nav className="pr-28">
          <ul className="inline-flex">
            {links.map((NavItem, index) => {
              return (
                <li
                  key={index}
                  className="px-10 mt-1 hover:bg-gray-500 transform -skew-x-12"
                >
                  <a className="text-gray-300" href={NavItem.navURL}>
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
        <ImEvil className="text-gray-400 transform scale-125" />
        <ImCircleDown className="text-gray-400 transform scale-125 mx-0" />
        <ImFire className="text-gray-400 transform scale-150 mx-8" />
        <RiUser5Line className="text-gray-400 transform scale-150 mx-8" />
        <div className="inline-flex pr-28">
          <a className="text-gray-300" href="/">
            Sign in
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
