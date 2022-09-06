import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-scroll";

export const VideoView = () => {
  return (
    <div className='flex flex-col justify-center items-center child:mb-8 bg-white h-[calc(100vh-3rem)] p-10 rounded-2xl shadow-lg'>
      <ReactPlayer
        controls
        width={"60vw"}
        height={"70vh"}
        url='https://www.youtube.com/watch?v=ZzL5txCOx5Y'
      />
      <div className='flex w-full justify-end items-center'>
        <Link to='questionary' smooth={true} duration={1000}>
          <button className='bg-[#024D81] text-white px-7 py-2 rounded-lg'>
            Devam Et
          </button>
        </Link>
      </div>
    </div>
  );
};
