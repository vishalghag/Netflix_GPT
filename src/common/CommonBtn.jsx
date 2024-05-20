import React from "react";

const CommonBtn = ({ buttonName, buttonOnClick }) => {
  return (
    <div className=" flex items-center justify-center mt-4">
      <button
        onClick={buttonOnClick}
        className=" w-full block bg-red-600 text-white py-2 px-8 rounded-md shadow-lg transform transition-transform duration-200 ease-in-out active:scale-95"
      >
        {buttonName}
      </button>
    </div>
  );
};

export default CommonBtn;
