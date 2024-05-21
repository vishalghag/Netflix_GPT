import React from "react";

const CommonInput = ({
  inputType,
  inputPlaceholder,
  inputName,
  valueInput,
  monitorInput,
  monitorBlur,
  errorState,
}) => {
  return (
    <>
      <div className="flex items-center justify-center mt-4 flex-col w-full">
        <input
          className="p-2 my-2 w-full rounded-md bg-slate-800/70 text-white"
          type={inputType}
          placeholder={inputPlaceholder}
          name={inputName}
          value={valueInput}
          onChange={monitorInput}
          onBlur={monitorBlur}
        />
        <div className="w-full text-left">
          <span className="text-red-500 md:font-medium md:text-[1rem] font-thin text-[12px]">
            {errorState}
          </span>
        </div>
      </div>
    </>
  );
};

export default CommonInput;
