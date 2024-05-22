import React from "react";
import { LOGO, USER_AVATAR } from "../utils/constant";
import CommonBtn from "../common/CommonBtn";
import { signOut } from "firebase/auth";
import { database } from "../utils/firebase";
import routes from "../PageRouters/routes.json";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(database)
      .then(() => {
        navigate(`${routes.HOME}`);
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-t from-black z-10 flex justify-between items-center">
      <img className="w-44" src={LOGO} alt="logo" />
      <div className="flex items-center ml-auto p-2">
        <img className="mr-4 w-12 h-12" src={USER_AVATAR} alt="avatar" />
        <CommonBtn buttonName={"Sign-out"} buttonOnClick={handleSignOut} />
      </div>
    </div>
  );
};

export default Header;
