import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

import one from "./content/1.png";
import two from "./content/2.png";
import three from "./content/3.png";
import four from "./content/4.png";
import five from "./content/5.png";
import six from "./content/6.png";
import seven from "./content/7.png";
import eight from "./content/8.png";
export const SliderImages = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4.5,
    slidesToScroll: 4.5,
  };

  const goNext = () => {
    setIsVisible(true);
    sliderRef.current.slickNext();
  };
  const goBefore = () => {
    setIsVisible(false);
    sliderRef.current.slickPrev();
  };

  return (
    <div className='flex flex-col child:mb-8 bg-white h-[calc(100vh-7rem)] p-10 rounded-2xl shadow-lg'>
      <div>
        <h1 className='font-bold tracking-wide text-lg'>
          İNOVASYON EĞİTİMİ 101
        </h1>
      </div>

      <Slider arrows={false} {...settings} ref={sliderRef}>
        <div>
          <img src={one} alt='one' />
        </div>
        <div>
          <img src={two} alt='two' />{" "}
        </div>
        <div>
          <img src={three} alt='three' />{" "}
        </div>
        <div>
          <img src={four} alt='four' />{" "}
        </div>
        <div>
          <img src={five} alt='five' />{" "}
        </div>
        <div>
          <img src={six} alt='six' />{" "}
        </div>
        <div>
          <img src={seven} alt='seven' />{" "}
        </div>
        <div className='flex items-center justify-center'>
          <img src={eight} alt='eight' />{" "}
        </div>
        <div>
          <span className='h-[24rem] flex justify-center items-center'>
            <button className='bg-[#024D81] text-white px-7 py-2 rounded-lg'>
              Devam Et
            </button>
          </span>
        </div>
      </Slider>
      <div className='flex flex-col justify-center items-center '>
        <div className='flex w-[30%] justify-between items-center child:cursor-pointer'>
          <div onClick={goBefore}>
            <MdNavigateBefore size={60} color='#d2d2d2' />
          </div>

          <div onClick={goNext}>
            <MdNavigateNext size={60} color='#d2d2d2' />
          </div>
        </div>
      </div>
    </div>
  );
};
