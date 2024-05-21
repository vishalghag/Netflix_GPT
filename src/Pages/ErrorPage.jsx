import React from "react";
import { Link } from "react-router-dom";
import routes from "../PageRouters/routes.json";

const ErrorPage = () => {
  return (
    <div className=" flex justify-center items-center flex-col">
      <h1 className=" text-4xl text-black font-bold">Page Not found 404</h1>
      <Link to={routes.HOME}>
        <h2 className=" text-3xl mt-4 text-red-600">
          Click here to get back to home page
        </h2>
      </Link>
    </div>
  );
};

export default ErrorPage;
