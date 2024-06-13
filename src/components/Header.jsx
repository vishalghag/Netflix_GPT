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
import { toggleGptSearchView } from "../utils/gptSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const gpt = useSelector((store) => store.gpt?.showGptSearch);

  const handleSignOut = () => {
    signOut(database)
      .then(() => {
        toast.success("User logged out successfully");
      })
      .catch((error) => {
        toast.error(error.message);
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
  }, [dispatch, navigate]);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  return (
    <div className="absolute w-full h-auto px-4 py-2 bg-gradient-to-t from-black/60 z-10 flex justify-between items-center sm:px-8">
      <img className="w-32 sm:w-44" src={LOGO} alt="logo" />
      <div className="flex items-center ml-auto p-2">
        {user && (
          <>
            <span
              className={`text-2xl py-2 px-2 font-medium cursor-pointer mr-3 hover:text-red-500 ${
                gpt ? " text-violet-500" : "text-white"
              }`}
              onClick={handleGptSearchClick}
            >
              GPT Search
            </span>
            <img
              className="mr-4 w-8 h-8 sm:w-12 sm:h-12 cursor-pointer"
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
