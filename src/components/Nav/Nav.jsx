// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "/youtube.png";
import { Link } from "react-scroll";

const Nav = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="flex justify-between items-center w-full h-28 text-white fixed bg-white px-4">
      <div className="w-36 h-36 items-center justify-center mt-16 hover:scale-105">
        <img src={Image} alt="" />
      </div>
      <ul className="hidden md:flex pr-16">
        <li className=" text-3xl px-4 cursor-pointer capitalize font-semibold text-gray-500 hover:scale-105 hover:text-red-700 duration-200 ">
          <Link to="home" smooth duration={500}>
            {" "}
            Home
          </Link>
        </li>
        <li className="text-3xl px-4 cursor-pointer capitalize font-semibold text-gray-500 hover:scale-105 hover:text-red-700 duration-200 ">
          <Link to="about" smooth duration={500}>
            {" "}
            about
          </Link>
        </li>
        <li className="text-3xl px-4 cursor-pointer capitalize font-semibold text-gray-500 hover:scale-105 hover:text-red-700 duration-200 ">
          <Link to="protfolio" smooth duration={500}>
            {" "}
            protfolio
          </Link>
        </li>
        <li className="text-3xl px-4 cursor-pointer capitalize font-semibold text-gray-500 hover:scale-105 hover:text-red-700 duration-200 ">
          <Link to="contact" smooth duration={500}>
            {" "}
            contact
          </Link>
        </li>
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden hover:text-red-400">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 h-screen bg-gradient-to-b from-black to-gray-800 w-full">
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-105 hover:text-red-400 font-semibold">
            <Link onClick={() => setNav(!nav)} to="home" smooth duration={500}>
              {" "}
              Home
            </Link>
          </li>
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-105 hover:text-red-400 font-semibold">
            <Link onClick={() => setNav(!nav)} to="about" smooth duration={500}>
              {" "}
              About
            </Link>
          </li>
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-105 hover:text-red-400 font-semibold">
            <Link
              onClick={() => setNav(!nav)}
              to="protfolio"
              smooth
              duration={500}>
              {" "}
              Protfolio
            </Link>
          </li>
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-105 hover:text-red-400 font-semibold">
            <Link
              onClick={() => setNav(!nav)}
              to="contact"
              smooth
              duration={500}>
              {" "}
              contact
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Nav;
