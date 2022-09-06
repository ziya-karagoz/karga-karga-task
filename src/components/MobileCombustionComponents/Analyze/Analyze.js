import React from "react";
import { CustomTable } from "../CustomTable/CustomTable";
import { InputAndResults } from "../InputAndResults/InputAndResults";
import mcLogo from "./content/mclogo.png";
export const Analyze = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-4 w-full h-fit rounded-md bg-white'>
      <div className=' bg-[#0D1840] text-white w-full h-[7rem] rounded-b-3xl '>
        <p className='text-sm font-thin px-4 pt-2'>Scope 1</p>
        <div className='flex justify-center items-center   '>
          <div className='flex justify-center items-center'>
            <img src={mcLogo} alt='mcLogo' />
            <h1 className='text-xl font-light'>MOBILE COMBUSTION</h1>
          </div>
        </div>
      </div>
      <div>
        <InputAndResults />
      </div>
      <div>
        <CustomTable />
      </div>
    </div>
  );
};
