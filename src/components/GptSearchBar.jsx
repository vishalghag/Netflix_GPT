import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import CommonBtn from "../common/CommonBtn";

const GptSearchBar = () => {
  return (
    <div className="pt-[20%] flex justify-center items-center bg-black">
      <form className=" bg-black/70 ">
        <input
          type="text"
          placeholder="What do you want to watch today?"
          className="w-full p-2 pr-12 rounded-lg text-black"
        />
        <MagnifyingGlassIcon className="absolute right-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-500" />
        <CommonBtn buttonName={"Search"} className="ml-4" />
      </form>
    </div>
  );
};

export default GptSearchBar;
