import React, { useState } from "react";
import { Link } from "react-scroll";
export const Questionary = () => {
  const [isVisible, setIsVisible] = useState(false);

  const [isAnsOne, setisAnsOne] = useState(false);
  const [isAnsTwo, setisAnsTwo] = useState(true);
  const [ansOneColor, setAnsOneColor] = useState("white");
  const [ansTwoColor, setAnsTwoColor] = useState("white");
  return (
    <div className='flex flex-col justify-center items-center child:mb-8 bg-white h-[calc(100vh-3rem)] p-10 rounded-2xl shadow-lg'>
      <div className='flex h-[20%] w-full justify-center items-center'>
        <div className='w-[40%] h-full flex flex-col justify-center '>
          <hr className='border-[#024D81] border-4' />
        </div>
        <h1 className='w-[20%] text-center text-[#024D81] text-3xl font-semibold'>
          SORU
        </h1>
        <div className='w-[40%] h-full flex flex-col justify-center '>
          <hr className='border-[#024D81] border-4' />
        </div>
      </div>
      <div className='flex flex-col w-[50%] h-[80%] mt-4'>
        <h2 className='text-center  text-lg font-medium tracking-wider'>
          Sence her yenilik bir inovasyon mudur?
        </h2>
        <div className='flex flex-row mx-1 my-12 justify-center items-center child:mx-8'>
          <div>
            <button
              className={`flex justify-center items-center  ${ansOneColor} border border-[#024D81] rounded-3xl px-10 h-24`}
              onClick={() => {
                setIsVisible(true);

                if (isAnsOne) {
                  setAnsOneColor("bg-[#51FB15]");
                  setAnsTwoColor("bg-[#F32626]");
                } else {
                  setAnsTwoColor("bg-[#51FB15]");
                  setAnsOneColor("bg-[#F32626]");
                }
              }}
            >
              <p className='text-ellipsis w-[99%]'>Inovasyondur</p>
            </button>
          </div>
          <div>
            <button
              className={`flex justify-center items-center ${ansTwoColor} border border-[#024D81] rounded-3xl px-10 h-24`}
              onClick={() => {
                setIsVisible(true);
                if (isAnsTwo) {
                  setAnsTwoColor("bg-[#51FB15]");
                  setAnsOneColor("bg-[#F32626]");
                } else {
                  setAnsOneColor("bg-[#51FB15]");
                  setAnsTwoColor("bg-[#F32626]");
                }
              }}
            >
              <p className='text-ellipsis w-[99%]'>Inovasyon Değildir</p>
            </button>
          </div>
        </div>
        <div
          className={`${
            isVisible ? "visible" : "invisible"
          } w-full flex items-center justify-end mt-10`}
        >
          <Link to='ending' smooth={true} duration={1000}>
            <button className='bg-[#024D81] text-white px-7 py-2 rounded-lg'>
              Devam Et
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
