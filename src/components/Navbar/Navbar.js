import React from "react";
import { FaBars } from "react-icons/fa";

import navbarLogo from "./content/navbarLogo.png";
import timLogo from "./content/tim.png";
export const Navbar = () => {
  return (
    <nav className='flex justify-between items-center  w-full h-20 bg-white rounded-b-md'>
      <div className='ml-10 w-[20%]'>
        <img src={navbarLogo} alt='logo' />
      </div>
      <div className='flex justify-end  w-[80%]'>
        <div className='flex  justify-center items-center  child:w-24 child:font-thin child:cursor-pointer child:h-full child:flex child:justify-center child:items-center child:mx-6 align-middle'>
          <div>
            <h2>ANASAYFA</h2>
          </div>
          <div>
            <h2>CHAT</h2>
          </div>
          <div>
            <h2>PUANLAR</h2>
          </div>
          <div>
            <h2>SINIFIM</h2>
          </div>
          <div className='border-b-2 border-[#024D81]'>
            <h2 className='text-[#024D81] font-semibold'>EGITIM</h2>
          </div>
        </div>
        <div className='flex justify-between child:ml-10 items-center mr-10 cursor-pointer'>
          <div className=' '>
            <FaBars size={20} />
          </div>
          <img src={timLogo} alt='timLogo' />
        </div>
      </div>
    </nav>
  );
};
