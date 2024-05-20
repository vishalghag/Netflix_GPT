import React from "react";

const CommonInput = ({ inputType, inputPlaceholder }) => {
  return (
    <div className=" flex items-center justify-center mt-4">
      <input
        className=" p-2 my-2 w-full rounded-md bg-slate-800/70"
        type={inputType}
        placeholder={inputPlaceholder}
      />
    </div>
  );
};

export default CommonInput;
