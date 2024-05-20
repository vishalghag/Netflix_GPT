import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import route from "../PageRouters/routes.json";
import Browse from "./Browse";
import Login from "./Login";

const Body = () => {
  const routes = createBrowserRouter([
    {
      path: `${route.HOME}`,
      element: <Login />,
    },
    {
      path: `${route.BROWSE}`,
      element: <Browse />,
    },
  ]);

  return <RouterProvider router={routes} />;
};

export default Body;
