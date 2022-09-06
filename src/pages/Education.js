import React, { useEffect } from "react";
import { Navbar } from "../components/EducationComponents/Navbar/Navbar";
import { SliderImages } from "../components/EducationComponents/SliderImages/SliderImages";
import { FittedImages } from "../components/EducationComponents/FittedImages/FittedImages";
import { DocumentSlider } from "../components/EducationComponents/DocumentSlider/DocumentSlider";
import { VideoView } from "../components/EducationComponents/VideoView/VideoView";
import { Questionary } from "../components/EducationComponents/Questionary/Questionary";
import { Ending } from "../components/EducationComponents/Ending/Ending";

export const Education = () => {
  const Scroll = require("react-scroll");
  const scroll = Scroll.animateScroll;
  document.body.style.overflow = "hidden";
  useEffect(() => {
    return () => {
      scroll.scrollToTop();
    };
  }, []);

  return (
    <div className='bg-gray-200'>
      <Navbar />
      <div className='h-[calc(100vh-4.5rem)] my-1 p-4'>
        <SliderImages />
      </div>
      <div name='fittedImages' className='h-[100vh] my-1 p-4'>
        <FittedImages />
      </div>
      <div name='documentSlider' className='h-[100vh] my-1 p-4'>
        <DocumentSlider />
      </div>
      <div name='videoView' className='h-[100vh] my-1 p-4'>
        <VideoView />
      </div>
      <div name='questionary' className='h-[100vh] my-1 p-4'>
        <Questionary />
      </div>
      <div name='ending' className='h-[100vh] my-1 p-4'>
        <Ending />
      </div>
    </div>
  );
};
