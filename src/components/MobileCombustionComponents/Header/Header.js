import React from "react";
import mcLogo from "./content/mclogo.png";
export const Header = () => {
  return (
    <div className=' bg-[#0D1840] text-white w-full h-[7rem] rounded-b-3xl rounded-t-md '>
      <p className='text-sm font-thin px-4 pt-2'>Scope 1</p>
      <div className='flex justify-center items-center   '>
        <div className='flex justify-center items-center'>
          <img src={mcLogo} alt='mcLogo' />
          <h1 className='text-xl font-light'>MOBILE COMBUSTION</h1>
        </div>
      </div>
    </div>
  );
};
