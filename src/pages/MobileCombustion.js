import React from "react";
import { Analyze } from "../components/MobileCombustionComponents/Analyze/Analyze";
import { Greet } from "../components/MobileCombustionComponents/Greet/Greet";

import { Navbar } from "../components/MobileCombustionComponents/Navbar/Navbar";
export const MobileCombustion = () => {
  return (
    <>
      <main>
        <section>
          <div className='bg-gray-100 sm:grid grid-cols-5 grid-rows-1 px-4 py-6 min-h-full lg:min-h-screen space-y-6 sm:space-y-0 sm:gap-4'>
            <Navbar />
            <div className='h-fit col-span-4 bg-gradient-to-tr  rounded-md flex flex-col items-center'>
              <Greet />
              <Analyze />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
