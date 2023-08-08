import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import beachVid from "../assets/beachVid.mp4";

const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      <video
        className="w-full h-full object-cover"
        src={beachVid}
        autoPlay
        loop
        muted
      />
      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/30"></div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white p-3 ">
        <h1 className="font-bold sm:text-2xl md:text-4xl">
          Best Travel Experience
        </h1>
        <h2 className="py-4 font-bold sm:text-lg md:text-2xl">
          Popular Locations Worldwide
        </h2>
        <form
          className="flex justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-md bg-gray-100/90 text-black"
          action="
        "
        >
          <div>
            <input
              className=" bg-transparent focus:outline-none w-96 px-2"
              type="text"
              placeholder="Search Destinations"
            />
          </div>
          <div className="cursor-pointer">
            <AiOutlineSearch size={20} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
