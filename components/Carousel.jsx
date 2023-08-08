import React from "react";
import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const sliderData = [
  {
    url: "https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
];

const Carousel = () => {
  const [slide, setSlide] = useState(0);
  const length = sliderData.length;
  console.log(length);

  const prevSlide = () => {
    setSlide(slide === length - 1 ? 0 : slide + 1);
  };
  const nextSlide = () => {
    setSlide(slide === 0 ? length - 1 : slide - 1);
  };

  return (
    <div className="max-w-[1240px] mx-auto px-4 py-10 relative flex items-center justify-center">
      <BsArrowLeftCircleFill
        onClick={prevSlide}
        className="absolute top-[75%] text-3xl cursor-pointer left-[40%] text-black opacity-80"
      />
      <BsArrowRightCircleFill
        onClick={nextSlide}
        className="absolute top-[75%] text-3xl  cursor-pointer right-[40%] text-black opacity-80"
      />
      {sliderData.map((item, index) => (
        <div className={index == slide ? "opacity-100 " : "opacity-0"}>
          {index == slide && (
            <img className="w-full rounded-md" src={item.url} alt="/" />
          )}
        </div>
      ))}
    </div>
  );
};

export default Carousel;
