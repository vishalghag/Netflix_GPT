import React from "react";
import { LOGO } from "../utils/constant";

const Header = () => {
  return (
    <div className=" absolute px-8 py-2 bg-gradient-to-t from-black z-10">
      <img className=" w-44" src={LOGO} alt="logo" />
    </div>
  );
};

export default Header;
