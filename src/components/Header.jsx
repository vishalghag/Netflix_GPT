import React, { useEffect } from "react";
import { LOGO, USER_AVATAR } from "../utils/constant";
import CommonBtn from "../common/CommonBtn";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { database } from "../utils/firebase";
import routes from "../PageRouters/routes.json";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUsers, removeUsers } from "../utils/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(database)
      .then(() => {
        toast.success("user logout successfully");
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(database, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUsers({ uid: uid, email: email, displayName: displayName })
        );
        navigate(`${routes.BROWSE}`);
      } else {
        dispatch(removeUsers());
        navigate(`${routes.HOME}`);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-t from-black z-10 flex justify-between items-center">
      <img className="w-44" src={LOGO} alt="logo" />
      <div className="flex items-center ml-auto p-2">
        {user !== null && (
          <>
            <img
              className="mr-4 w-12 h-12 cursor-pointer"
              src={USER_AVATAR}
              alt="avatar"
            />
            <CommonBtn buttonName={"Sign-out"} buttonOnClick={handleSignOut} />
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
