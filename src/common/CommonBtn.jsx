import React from "react";

const CommonBtn = ({ buttonName, buttonOnClick, btnColor, btnTextColor }) => {
  return (
    <div className=" flex items-center justify-center mt-4">
      <button
        onClick={buttonOnClick}
        style={{ backgroundColor: `${btnColor}`, color: `${btnTextColor}` }}
        className=" block bg-red-600 text-white py-2 px-8 rounded-md shadow-lg transform transition-transform duration-200 ease-in-out active:scale-95 w-auto font-medium m-2"
      >
        {buttonName}
      </button>
    </div>
  );
};

export default CommonBtn;
