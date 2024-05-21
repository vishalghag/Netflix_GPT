import React, { useState } from "react";
import Header from "./Header";
import { NETFLIX_BACKGROUND } from "../utils/constant";
import CommonInput from "../common/CommonInput";
import CommonBtn from "../common/CommonBtn";
import { useFormik } from "formik";
import { signUpSchema } from "../schemas";

const initialValues = {
  name: "",
  email: "",
  password: "",
  phone_number: "",
};

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });

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
        <form
          className="relative p-12 bg-black bg-opacity-75 w-96 py-32 rounded m-auto"
          onSubmit={handleSubmit}
        >
          <h1 className=" text-3xl text-white mb-10 font-bold">
            {isSignInForm ? "Sign-In" : "Sign-Up"}
          </h1>
          <CommonInput
            inputType={"text"}
            inputPlaceholder={"Enter your email@"}
            inputName={"email"}
            valueInput={values.email}
            monitorInput={handleChange}
            monitorBlur={handleBlur}
            errorState={errors.email && touched.email ? errors.email : ""}
          />
          <CommonInput
            inputType={"password"}
            inputPlaceholder={"Enter your password*"}
            inputName={"password"}
            valueInput={values.password}
            monitorInput={handleChange}
            monitorBlur={handleBlur}
            errorState={
              errors.password && touched.password ? errors.password : ""
            }
          />
          {!isSignInForm && (
            <>
              <CommonInput
                inputType={"text"}
                inputPlaceholder={"Enter your user name"}
                inputName={"name"}
                valueInput={values.name}
                monitorInput={handleChange}
                monitorBlur={handleBlur}
                errorState={errors.name && touched.name ? errors.name : ""}
              />
              <CommonInput
                inputType={"number"}
                inputPlaceholder={"Enter your phone number(3423)"}
                inputName={"phone_number"}
                valueInput={values.phone_number}
                monitorInput={handleChange}
                monitorBlur={handleBlur}
                errorState={
                  errors.phone_number && touched.phone_number
                    ? errors.phone_number
                    : ""
                }
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
