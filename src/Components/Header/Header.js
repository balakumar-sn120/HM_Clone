import React from "react";
import HeaderMenu from "./HeaderMenu";
import HeaderLoginActions from "./HeaderLoginActions";

const Header = () => {
  return (
    <div class="grid grid-cols-3 items-center">
      <HeaderMenu />
      <div class="flex justify-center items-end">
        <img
          class="w-20 h-20"
          src="../assets/images/H&M_logo.svg"
          alt="H&M Logo"
        ></img>
      </div>

      <HeaderLoginActions />
    </div>
  );
};

export default Header;
