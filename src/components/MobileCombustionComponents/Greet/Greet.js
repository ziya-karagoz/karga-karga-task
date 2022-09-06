import React from "react";
import { VscBellDot } from "react-icons/vsc";
import { BiChevronDown } from "react-icons/bi";
import avatar from "./content/avatar.png";
export const Greet = () => {
  return (
    <div className='flex w-full h-28 rounded-md bg-white'>
      <div className='flex w-[30%]'>
        <div className='mx-4 mt-2'>
          <VscBellDot />
        </div>
        <div className='my-2 mx-2 flex'>
          <img src={avatar} alt='avatar' />
        </div>
        <div className='flex text-xs mb-3 items-end font-semibold w-fit'>
          <div className='flex'>
            <p>Dijital Mentor</p>
            <BiChevronDown size={20} />
          </div>
        </div>
      </div>
      <div className='flex w-[70%] px-16 flex-col justify-center text-[#0D1840] items-start text-left'>
        <h1 className='text-2xl font-semibold '>Merhaba Murat Bey,</h1>
        <div className='flex text-xs italic mb-3 items-end font-semibold w-fit'>
          <p>
            Talep etmiş olduğunuz tedarik zinciri raporunu oluşturdum. Bu alana
            tıklayarak rapora erişim sağlayabiliriniz.
          </p>
        </div>
      </div>
    </div>
  );
};
