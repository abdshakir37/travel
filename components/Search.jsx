import React from "react";

const Search = () => {
  return (
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16">
      <div className="lg:col-span-2 flex flex-col justify-evenly px-4 py-4">
        <div>
          <h2 className="uppercase font-bold">Travel with us</h2>
          <p className="py-4 text-justify">
            Travel around the world with us. From the Romantic Streets of Paris
            to the Exotic Charms of Turkey, the Spiritual Mystique of India, the
            Serene Paradises of Bali, to the Modern Marvels of Dubai. Embark on
            a Global Odyssey with Us! Are you ready to tread the cobblestone
            alleys of Paris, hand in hand with history? Or to immerse yourself
            in the whirlwind of colors at Turkey's bustling markets? How about
            delving into the spiritual mosaic of India, where ancient wisdom
            meets contemporary life in an explosion of experiences? Picture
            yourself lazing on Bali's sun-kissed shores, your worries carried
            away by the gentle waves. Or be awe-inspired by Dubai's futuristic
            skyline, a testament to human ingenuity against the desert backdrop.
            Join us on an unparalleled adventure as we unravel the world's
            greatest treasures, one destination at a time. Let your wanderlust
            meet its match and let your travel dreams take flight.
          </p>
        </div>
      </div>

      <div>
        <div className="border-2 border-black text-center">
          <p className="pt-2 font-semibold bg-gray-200">
            GET AN ADDITIONAL 10% OFF
          </p>
          <p className="py-4 font-semibold bg-gray-200">12 HOURS LEFT</p>
          <p className="bg-gray-800 text-gray-200 py-2">BOOK NOW AND SAVE</p>
        </div>
        <form
          action="
       "
        >
          <div className="flex flex-col my-2">
            <label htmlFor="">Destinations</label>
            <select
              className="border border-black rounded-md my-2"
              name=""
              id=""
            >
              <option value="">Turkey</option>
              <option value="">Dubai</option>
              <option value="">India</option>
              <option value="">Bali</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="">Check-In</label>
            <input
              className="border border-black rounded-md my-2"
              type="date"
            />
          </div>
          <div className="flex flex-col my-2">
            <label htmlFor="">Check-Out</label>
            <input
              className="border border-black rounded-md my-2"
              type="date"
            />
          </div>

          <div>
            <button className="py-1 bg-blue-700 px-2 rounded-md text-white hover:opacity-95 duration-300">
              Rate and Availablities
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
