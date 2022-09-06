import React from "react";
import Select from "react-select";

export const InputAndResults = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <div className='m-8'>
      <div className='flex w-full justify-center items-start'>
        <div className='flex flex-col w-[30vw]  '>
          <div className='my-4'>
            <h1 className='text-xl font-semibold'>
              GİRDİ ALANI
              <hr className='w-[40%] h-2 border-t-2' />
            </h1>
            <p className='text-sm'>
              Lütfen salınım değerlerini hesaplamak için aşağıdaki alanları
              doldurun:
            </p>
          </div>
          <div className='mt-10 border-r-2 '>
            <div className='my-4  xl:w-96 text-[#0D1840] text-lg'>
              <label htmlFor=''>Facility ID</label>
              <Select options={options} />
            </div>
            <div className='my-4  xl:w-96 text-[#0D1840] text-lg'>
              <label htmlFor=''>Year</label>
              <Select options={options} />
            </div>
            <div className='my-4  xl:w-96 text-[#0D1840] text-lg'>
              <label htmlFor=''>Activity Type </label>
              <Select options={options} />
            </div>
            <div className='my-4  xl:w-96 text-[#0D1840] text-lg'>
              <label htmlFor=''>Fuel Source</label>
              <Select options={options} />
            </div>
            <div className='my-4  xl:w-96 text-[#0D1840] text-lg'>
              <label htmlFor=''>Vehicle Type</label>
              <Select options={options} />
            </div>
            <div className='my-4  xl:w-96 text-[#0D1840] text-lg'>
              <label htmlFor=''>Amount of Activity</label>
              <Select options={options} />
            </div>
          </div>
        </div>
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

              <p className='w-full text-center'>14</p>
            </div>
            <div className=' flex my-4 justify-start items-center  xl:w-96 text-[#0D1840] text-lg border-2 border-black rounded-2xl'>
              <div className=' rounded-l-2xl  rounded-r-xl m-2 border-r-2 text-white bg-[#0D1840]'>
                <label htmlFor='' className='m-4 '>
                  CH4
                </label>
              </div>

              <p className='w-full text-center'>14</p>
            </div>
            <div className=' flex my-4 justify-start items-center  xl:w-96 text-[#0D1840] text-lg border-2 border-black rounded-2xl'>
              <div className=' rounded-l-2xl rounded-r-xl m-2 border-r-2 text-white bg-[#0D1840]'>
                <label htmlFor='' className='m-4'>
                  N2O
                </label>
              </div>

              <p className='w-full text-center'>14</p>
            </div>
            <div className=' flex my-4 justify-start items-center  xl:w-96 text-[#0D1840] text-lg border-2 border-black rounded-2xl'>
              <div className=' rounded-l-2xl rounded-r-xl m-2 border-r-2 text-white bg-[#0D1840]'>
                <label htmlFor='' className='m-4'>
                  CO2E
                </label>
              </div>

              <p className='w-full text-center'>14</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
