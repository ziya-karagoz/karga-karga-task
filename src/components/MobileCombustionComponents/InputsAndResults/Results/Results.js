import React, { useEffect, useState } from "react";
import axios from "axios";
export const Results = ({
  results,
  resetResults,
  setIsResetting,
  setTableArray,
  tableArray,
}) => {
  const handleSifirla = () => {
    resetResults();
    setIsResetting(true);
  };

  const handleSaveResults = () => {
    setTableArray([...tableArray, results]);
  };

  return (
    <div className='flex flex-col  w-[30vw] ml-10'>
      <div className='my-4'>
        <h1 className='text-xl font-semibold'>
          SONUÇ ALANI
          <hr className='w-[40%] h-2 border-t-2' />
        </h1>
        <p className='text-sm'>
          Girdi Alanı'nda girdiğiniz değerlere göre salınan gaz miktarları
          aşağıdaki gibidir:
        </p>
      </div>
      <div className='mt-10'>
        {" "}
        <div className=' flex my-4 justify-start items-center  xl:w-96 text-[#0D1840] text-lg border-2 border-black rounded-2xl'>
          <div className=' rounded-l-2xl rounded-r-xl m-2 border-r-2 text-white bg-[#0D1840]'>
            <label htmlFor='' className='m-4'>
              CO2
            </label>
          </div>

          <p className='w-full text-center'>{results?.data.co2}</p>
        </div>
        <div className=' flex my-4 justify-start items-center  xl:w-96 text-[#0D1840] text-lg border-2 border-black rounded-2xl'>
          <div className=' rounded-l-2xl  rounded-r-xl m-2 border-r-2 text-white bg-[#0D1840]'>
            <label htmlFor='' className='m-4 '>
              CH4
            </label>
          </div>

          <p className='w-full text-center'>{results?.data.ch4}</p>
        </div>
        <div className=' flex my-4 justify-start items-center  xl:w-96 text-[#0D1840] text-lg border-2 border-black rounded-2xl'>
          <div className=' rounded-l-2xl rounded-r-xl m-2 border-r-2 text-white bg-[#0D1840]'>
            <label htmlFor='' className='m-4'>
              N2O
            </label>
          </div>

          <p className='w-full text-center'>{results?.data.n2o}</p>
        </div>
        <div className=' flex my-4 justify-start items-center  xl:w-96 text-[#0D1840] text-lg border-2 border-black rounded-2xl'>
          <div className=' rounded-l-2xl rounded-r-xl m-2 border-r-2 text-white bg-[#0D1840]'>
            <label htmlFor='' className='m-4'>
              CO2E
            </label>
          </div>

          <p className='w-full text-center'>{results?.data.co2e}</p>
        </div>
      </div>
      <div className='flex justify-end items-center child:mx-1 text-white'>
        <button
          className='px-6 bg-[#0D1840] rounded-lg'
          onClick={handleSifirla}
        >
          Sıfırla
        </button>
        <button
          className='px-6 bg-[#0D1840] rounded-lg'
          onClick={handleSaveResults}
        >
          Kaydet
        </button>
      </div>
    </div>
  );
};
