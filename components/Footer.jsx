import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-gray-200 py-10">
      <div className="max-w-[1240px] mx-auto flex flex-col px-4">
        <div className="sm:flex items-center gap-10">
          <p className="uppercase font-bold text-xl md:text-3xl text-center py-4">
            Beaches
          </p>
          <div className="flex gap-10 justify-between items-center cursor-pointer ">
            <FaFacebook className="text-[#0675E7]" size={20} />
            <FaInstagram className="text-[#DA2771]" size={20} />
            <FaYoutube className="text-[#FF0000]" size={20} />
          </div>
        </div>

        <div className="flex justify-between items-center py-4 font-semibold cursor-pointer">
          <ul className="lg:flex gap-3">
            <li className="hover:opacity-80 duration-200">About</li>
            <li className="hover:opacity-80 duration-200">Partnerships</li>
            <li className="hover:opacity-80 duration-200">Careers</li>
            <li className="hover:opacity-80 duration-200">Newsroom</li>
            <li className="hover:opacity-80 duration-200">Advertising</li>
          </ul>
          <ul className="text-right lg:flex gap-3">
            <li className="hover:opacity-80 duration-200">Home</li>
            <li className="hover:opacity-80 duration-200">Destinations</li>
            <li className="hover:opacity-80 duration-200">Travel</li>
            <li className="hover:opacity-80 duration-200">View</li>
            <li className="hover:opacity-80 duration-200">Book</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
