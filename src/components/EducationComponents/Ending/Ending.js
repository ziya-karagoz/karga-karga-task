import React from "react";
import one from "./content/1.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const Ending = () => {
  const notify = () => {
    document.body.style.overflow = "visible";
    toast(
      "Your training section is complete. Please proceed to the next Education section"
    );
  };

  return (
    <div className='flex flex-col child:mb-8 bg-white h-[calc(100vh-4rem)] p-10 rounded-2xl shadow-lg'>
      <div className='flex w-full mt-10 '>
        <div className='flex w-full  h-full  justify-center items-center child:mx-8 '>
          <div>
            <img src={one} alt='one' />
          </div>
        </div>
        <div className=' flex items-center justify-end mt-10'>
          <button
            onClick={notify}
            className='bg-[#024D81] text-white px-7 py-2 rounded-lg'
          >
            Bitir
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
