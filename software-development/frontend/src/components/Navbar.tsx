import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="fixed top-0 w-full transition-all duration-300 z-10">
      <div className="flex fixed justify-between items-center h-20 w-full mx-auto px-8 text-black bg-white shadow-md">
        <h1 className="w-auto text-3xl font-bold mr-8 tracking-wider">
          SUPERSET
        </h1>
        <ul className="hidden md:flex md:text-xl md:font-medium"></ul>
        <div onClick={handleNav} className="flex left-[90%] md:hidden ml-8">
          <AiOutlineMenu
            size={30}
            className="cursor-pointer transition ease-in-out"
          />
        </div>
        <div
          className={
            !nav
              ? "fixed left-0 top-0 w-full h-full bg-white ease-in-out duration-500 md:hidden"
              : "fixed left-[-100%] top-0 w-full h-full ease-in-out duration-500 md:hidden"
          }
        >
          <div
            onClick={handleNav}
            className="flex justify-end mt-[33px] mr-[30px]"
          >
            <AiOutlineClose
              size={30}
              className="cursor-pointer transition ease-in-out"
            />
          </div>
          <div className="flex h-5/6 justify-center items-center">
            <ul className="mt-10">
              <li
                className="p-4 text-2xl text-center font-medium"
                onClick={handleNav}
              >
                Browse
              </li>
              <li
                className="p-4 text-2xl text-center font-medium"
                onClick={handleNav}
              >
                Sign Up
              </li>
              <li
                className="p-4 text-2xl text-center font-medium"
                onClick={handleNav}
              >
                Login
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
