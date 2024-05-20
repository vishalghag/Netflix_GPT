import React, { useState } from "react";
import Header from "./Header";
import { NETFLIX_BACKGROUND } from "../utils/constant";
import CommonInput from "../common/CommonInput";
import CommonBtn from "../common/CommonBtn";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInFn = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative h-screen w-screen">
      <Header />
      <div className="absolute inset-0">
        <img
          src={NETFLIX_BACKGROUND}
          alt="bg"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex justify-center items-center h-full">
        <form className="relative p-12 bg-black bg-opacity-75 w-96 py-32 rounded m-auto">
          <h1 className=" text-3xl text-white mb-10 font-bold">
            {isSignInForm ? "Sign-In" : "Sign-Up"}
          </h1>
          <CommonInput
            inputType={"text"}
            inputPlaceholder={"Enter your email@"}
          />
          <CommonInput
            inputType={"password"}
            inputPlaceholder={"Enter your password*"}
          />
          {!isSignInForm && (
            <>
              <CommonInput
                inputType={"text"}
                inputPlaceholder={"Enter your user name"}
              />
              <CommonInput
                inputType={"number"}
                inputPlaceholder={"Enter your phone number(3423)"}
              />
            </>
          )}
          <CommonBtn buttonName={isSignInForm ? "Sign-in" : "Sign-up"} />

          <p className=" text-white text-md font-normal float-start mt-4">
            {isSignInForm ? " New to Netflex?" : "Already a User? "}
            <span
              className=" font-medium text-red-600 cursor-pointer "
              onClick={toggleSignInFn}
            >
              {" "}
              {isSignInForm ? "Sign-up now" : "Sign-In"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
