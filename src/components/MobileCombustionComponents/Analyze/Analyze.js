import React from "react";
import { CustomTable } from "../CustomTable/CustomTable";
import { Header } from "../Header/Header";
import { InputsAndResults } from "../InputsAndResults/InputsAndResults";

export const Analyze = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-4 w-full h-fit rounded-md bg-white'>
      <Header />
      <div>
        <InputsAndResults />
      </div>
      <div>
        <CustomTable />
      </div>
    </div>
  );
};
