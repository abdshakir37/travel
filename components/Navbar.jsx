import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className=" flex justify-between items-center py-3 px-4 mx-auto uppercase absolute z-10 w-full text-white bg-gray-800 ">
      <div>
        <p className="font-bold text-xl">
          <a href="/">Beaches</a>
        </p>
      </div>
      <ul className="hidden md:flex items-center gap-5">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Destinations</a>
        </li>
        <li>
          <a href="/">Travel</a>
        </li>
        <li>
          <a href="/">Book</a>
        </li>
      </ul>

      <div className="hidden md:flex items-center gap-2 mr-4 cursor-pointer">
        <BiSearch size={20} />
        <BsPerson size={20} />
      </div>

      {/* Hamburger */}

      <div className="z-10 md:hidden" onClick={handleNav}>
        {nav ? <AiOutlineClose size={20} /> : <HiOutlineMenuAlt4 size={20} />}
      </div>

      {/* Mobile Menu */}
      <div
        onClick={handleNav}
        className={
          nav
            ? "absolute top-0 left-0 w-full px-4 py-10 bg-gray-900 flex flex-col gap-4 md:hidden"
            : "absolute left-[-100%]"
        }
      >
        <ul>
          <li className="py-4 px-2 border-b border-white">Home</li>
          <li className="py-4 px-2 border-b border-white">Destinations</li>
          <li className="py-4 px-2 border-b border-white">Travel</li>
          <li className="py-4 px-2 border-b border-white">Book</li>
        </ul>
        <div className="flex flex-col gap-3">
          <button className="bg-blue-400 rounded-md py-1">Search</button>
          <button className="bg-blue-400 rounded-md py-1">Account</button>
        </div>
        <div className="flex justify-around items-center cursor-pointer">
          <FaFacebook size={20} className="text-[#0675E7]" />
          <FaInstagram size={20} className="text-[#DA2771]" />
          <FaYoutube size={20} className="text-[#FF0000]" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
