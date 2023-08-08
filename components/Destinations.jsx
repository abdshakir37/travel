import React from "react";

import Bali from "../assets/bali.jpg";
import Dubai from "../assets/dubai.jpg";
import Turkey from "../assets/turkey.jpg";
import Paris from "../assets/paris.jpg";
import India from "../assets/india.jpg";

const Destinations = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-14 px-4 text-center">
      <h1 className="font-bold text-2xl sm:3xl md:4xl md:text-4xl">
        Explore the World: Your Ultimate Destination Guide
      </h1>
      <p className="text-lg md:2xl font-semibold py-4">
        Embark on a Journey of Discovery with Our Travel Experts
      </p>
      <div className="grid gap-2 md:gap-4 md:grid-cols-5 py-4 px-2">
        <img
          className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2 hover:opacity-95 "
          src={Paris}
          alt=""
        />
        <img
          className="w-full h-full object-cover hover:opacity-95"
          src={Dubai}
          alt="Dubai"
        />
        <img
          className="w-full h-full object-cover hover:opacity-95 "
          src={Turkey}
          alt="Turkey"
        />
        <img
          className="w-full h-full object-cover hover:opacity-95 "
          src={Bali}
          alt="Bali"
        />
        <img
          className="w-full h-full object-cover hover:opacity-95 "
          src={India}
          alt="India"
        />
      </div>
    </div>
  );
};

export default Destinations;
