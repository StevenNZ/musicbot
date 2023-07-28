import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from "../assets/weblogo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <nav
      className={`fixed h-20 top-0 w-full bg-[#6E47AE] transition-all duration-300 z-10 shadow-lg ${
        visible
          ? "opacity-100"
          : "opacity-0 -translate-y-full pointer-events-none"
      }`}
    >
      <div className="flex h-full lg:max-w-[75%] relative justify-between items-center w-full mx-auto px-8 text-black">
        <div className="flex h-full items-center">
          <img
            src={logo}
            alt="superset brand logo"
            className=" h-[45%] object-contain mr-4"
          />
          <h1 className="w-auto text-2xl font-bold mr-8 tracking-wider">
            SUPERSET
          </h1>
        </div>
        <Link to={"/login"} target="_blank">
          <button className="hidden btn primary-colour-bg sm:flex sm:text-xl">
            Login
          </button>
        </Link>

        <div onClick={handleNav} className="flex left-[90%] sm:hidden ml-8">
          <AiOutlineMenu
            size={30}
            className="cursor-pointer transition ease-in-out"
          />
        </div>
        <div
          className={
            !nav
              ? "fixed left-0 top-0 w-full h-full bg-white ease-in-out duration-500 sm:hidden"
              : "fixed left-[-100%] top-0 w-full h-full ease-in-out duration-500 sm:hidden"
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
