import React from "react";
import { AiOutlinePieChart, AiOutlineFile } from "react-icons/ai";
import { MdOutlineWindow } from "react-icons/md";
import { BsPerson, BsGear } from "react-icons/bs";
import { RiMessage2Line, RiLockPasswordLine } from "react-icons/ri";
import { VscPerson } from "react-icons/vsc";
import { Link } from "react-router-dom";
import timLogo from "./content/timLogo.png";
import pp from "./content/pp.png";
export const Navbar = () => {
  return (
    <div className='bg-white'>
      <div className=''>
        <div className='bg-[#0D1840] pt-10 flex flex-col items-center m- pb-10'>
          <img
            className='mb-3 w-24 h-24 rounded-full shadow-lg'
            src={pp}
            alt='Ziya Image'
          />
          <h3 className='mb-1 text-xl font-medium text-gray-900 dark:text-white'>
            Murat Turan
          </h3>
          <span className='text-sm text-gray-500 dark:text-gray-400'>
            Tedarik Zinciri Yöneticisi
          </span>
        </div>
      </div>
      <h1 className='text-left text-xl font-bold my-4  bg-white py-2 rounded-md  cursor-pointer  text-[#868E96] mx-4'>
        MENÜ
      </h1>
      <div className='bg-white rounded-md list-none  text-left  mx-6 child:cursor-pointer'>
        <li className='py-3  '>
          <div className='flex  items-center font-semibold child:mx-1'>
            <AiOutlinePieChart size={20} />
            <Link to='/education' className='list-none  hover:text-indigo-600'>
              Eğitimler
            </Link>
          </div>
        </li>
        <li className='py-3 bg-[#0D1840] rounded-md text-white'>
          <div className='flex  items-center font-semibold child:mx-1'>
            <MdOutlineWindow size={20} />
            <a href='#' className='list-none  hover:text-indigo-600'>
              Analiz
            </a>
          </div>
        </li>
        <li className='py-3  '>
          <div className='flex  items-center font-semibold child:mx-1'>
            <AiOutlineFile size={20} />
            <a href='#' className='list-none  hover:text-indigo-600'>
              Raporlar
            </a>
          </div>
        </li>
        <li className='py-3  '>
          <div className='flex  items-center font-semibold child:mx-1'>
            <BsPerson size={20} />
            <a href='#' className='list-none  hover:text-indigo-600'>
              Profil
            </a>
          </div>
        </li>
        <li className='py-3  '>
          <div className='flex  items-center font-semibold child:mx-1'>
            <RiMessage2Line size={20} />
            <a href='#' className='list-none  hover:text-indigo-600'>
              TİM’e Yaz
            </a>
          </div>
        </li>
      </div>
      <h1 className='text-left text-xl font-bold my-4  bg-white py-2 rounded-md  cursor-pointer  text-[#868E96] mx-4'>
        TERCİHLER
      </h1>
      <div className='bg-white rounded-md list-none  text-left  mx-6'>
        <li className='py-3  '>
          <div className='flex  items-center font-semibold child:mx-1'>
            <VscPerson size={20} />
            <a href='#' className='list-none  hover:text-indigo-600'>
              Yetkilendirme
            </a>
          </div>
        </li>
        <li className='py-3  '>
          <div className='flex  items-center font-semibold child:mx-1'>
            <RiLockPasswordLine size={20} />
            <a href='#' className='list-none  hover:text-indigo-600'>
              Şifremi Değiştir
            </a>
          </div>
        </li>
        <li className='py-3  '>
          <div className='flex  items-center font-semibold child:mx-1'>
            <BsGear size={20} />
            <a href='#' className='list-none  hover:text-indigo-600'>
              Gizlilik Politikası
            </a>
          </div>
        </li>
      </div>
      <div className='flex justify-center items-center my-8'>
        <img src={timLogo} alt='timLogo' />
      </div>
    </div>
  );
};
