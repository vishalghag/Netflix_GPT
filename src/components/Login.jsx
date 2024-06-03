import React, { useEffect, useState } from "react";
import Header from "./Header";
import { NETFLIX_BACKGROUND, USER_AVATAR } from "../utils/constant";
import CommonInput from "../common/CommonInput";
import CommonBtn from "../common/CommonBtn";
import { useFormik } from "formik";
import { signInSchema, signUpSchema } from "../schemas";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { database } from "../utils/firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { addUsers } from "../utils/userSlice";

const initialValues = {
  name: "",
  email: "",
  password: "",
  phone_number: "",
};

const Login = () => {
  const dispatch = useDispatch();

  const [isSignInForm, setIsSignInForm] = useState(true);
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: isSignInForm ? signInSchema : signUpSchema,
      onSubmit: (values, action) => {
        if (!isSignInForm) {
          createUserWithEmailAndPassword(
            database,
            values.email,
            values.password
          )
            .then((credentials) => {
              const users = credentials.user;
              updateProfile(users, {
                displayName: values.name,
                photoURL: USER_AVATAR,
              })
                .then(() => {
                  const { uid, email, displayName } = database.currentUser;
                  dispatch(
                    addUsers({
                      uid: uid,
                      email: email,
                      displayName: displayName,
                    })
                  );
                  toast.success("Sign-in SuccessFull!");
                  // navigate(`${routes.BROWSE}`);
                })
                .catch((error) => {
                  // An error occurred
                  // ...
                });
            })
            .catch((err) => {
              // alert(err.code);
              toast.error(err.code);
              // setIsSignInForm(!isSignInForm);
            });
        } else {
          console.log("sigin");
          signInWithEmailAndPassword(database, values.email, values.password)
            .then((credentials) => {
              toast.success("Sign-in SuccessFull!");
              // navigate(`${routes.BROWSE}`);
            })
            .catch((err) => {
              toast.error(err.code);
              // setIsSignInForm(!isSignInForm);
            });
        }
        action.resetForm();
      },
    });

  useEffect(() => {
    document.title = "Netflix | Sign-In & Sign-Up";
  }, []);

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
