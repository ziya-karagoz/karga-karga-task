import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { Link } from "react-scroll";

import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import one from "./content/1.png";
import two from "./content/2.png";

export const DocumentSlider = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sliderRef = useRef();
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    centerMode: true,
    swipe: false,
    slidesToShow: 1,
    slidesToScroll: 1,
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
    <div className='relative flex flex-col child:mb-8 bg-white h-[calc(100vh-2rem)] p-10 rounded-2xl shadow-lg'>
      {" "}
      <div>
        <Slider {...settings} ref={sliderRef}>
          <div className='w-full '>
            <div className='flex  h-full  justify-center items-center child:mx-8'>
              <img src={one} alt='one' />
            </div>
          </div>
          <div className='w-full '>
            <div className='flex  h-full  justify-center items-center child:mx-8'>
              <img src={two} alt='two' />
            </div>
          </div>
        </Slider>
        <div className=' absolute bottom-[5%] right-[50%]  flex flex-col justify-center items-center '>
          <div className='flex w-[30%] justify-between items-center child:cursor-pointer'>
            <div onClick={goBefore}>
              <MdNavigateBefore size={60} color='#d2d2d2' />
            </div>

            <div onClick={goNext}>
              <MdNavigateNext size={60} color='#d2d2d2' />
            </div>
          </div>
        </div>
        <div
          className={`${
            isVisible ? "visible" : "invisible"
          } w-full flex items-center absolute bottom-[7%] right-[10%] justify-end mt-10`}
        >
          <Link to='videoView' smooth={true} duration={1000}>
            <button className='bg-[#024D81] text-white px-7 py-2 rounded-lg'>
              Devam Et
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
