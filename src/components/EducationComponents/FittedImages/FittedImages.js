import React from "react";
import { Link } from "react-scroll";
import one from "./content/1.png";
import two from "./content/2.png";
import three from "./content/3.png";
import four from "./content/4.png";

export const FittedImages = () => {
  return (
    <div className='flex flex-col justify-center items-center child:mb-8 bg-white h-[calc(100vh-4rem)] p-10 rounded-2xl shadow-lg'>
      <div className='flex flex-col '>
        <div className='flex  h-full  justify-center items-center child:mx-8 '>
          <div>
            <img src={one} alt='one' />
          </div>
          <div>
            <img src={two} alt='two' />
          </div>
          <div>
            <img src={three} alt='three' />
          </div>
          <div>
            <img src={four} alt='four' />
          </div>
        </div>
        <div className=' w-full flex items-center justify-end mt-10'>
          <Link to='documentSlider' smooth={true} duration={1000}>
            <button className='bg-[#024D81] text-white px-7 py-2 rounded-lg'>
              Devam Et
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
