import React from "react";

const VideoTitle = ({ movieTitle, movieOverview }) => {
  return (
    <div className=" w-screen aspect-video pt-[10%] px-24 absolute text-white bg-gradient-to-r from-black/90 my-[90px]">
      <h1 className=" text-4xl font-bold">{movieTitle}</h1>
      <p className=" py-6 text-lg w-1/2 font-medium">{movieOverview}</p>
      <div className=" flex flex-row">
        <button className=" bg-white  hover:bg-opacity-50 hover:text-black text-black py-2 px-8 rounded-md shadow-lg transform transition-transform duration-200 ease-in-out active:scale-95 w-[150px] font-medium">
          ▶️ Play
        </button>
        <button className=" mx-4 bg-gray-500 hover:bg-opacity-50 hover:text-black text-white py-2 px-8 rounded-md shadow-lg transform transition-transform duration-200 ease-in-out active:scale-95 w-[150px] font-medium">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
