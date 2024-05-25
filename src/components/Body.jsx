import React, { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import route from "../PageRouters/routes.json";
import Browse from "./Browse";
import Login from "./Login";
import ErrorPage from "../Pages/ErrorPage";

const Body = () => {
  const routes = createBrowserRouter([
    {
      path: `${route.HOME}`,
      element: <Login />,
      errorElement: <ErrorPage />,
    },
    {
      path: `${route.BROWSE}`,
      element: <Browse />,
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={routes} />;
};

export default Body;
