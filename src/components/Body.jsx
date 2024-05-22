import React, { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import route from "../PageRouters/routes.json";
import Browse from "./Browse";
import Login from "./Login";
import ErrorPage from "../Pages/ErrorPage";
import { onAuthStateChanged } from "firebase/auth";
import { database } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUsers, removeUsers } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();

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

  useEffect(() => {
    onAuthStateChanged(database, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUsers({ uid: uid, email: email, displayName: displayName })
        );
      } else {
        dispatch(removeUsers());
      }
    });
  }, []);

  return <RouterProvider router={routes} />;
};

export default Body;
