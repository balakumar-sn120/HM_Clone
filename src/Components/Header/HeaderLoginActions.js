import React from "react";
import sprite from "./../commonSVG.svg";

const HeaderLoginActions = () => {
  const menuList = [
    {
      name: "Sign in",
      redirectUrl: "",
      iconUrl: `${sprite}#login_icon`,
    },
    {
      name: "Favourites",
      redirectUrl: "",
      iconUrl: `${sprite}#favorite_icon`,
    },
    {
      name: "Shopping bag",
      redirectUrl: "",
      iconUrl: `${sprite}#shopping_icon`,
    },
  ];
  return (
    <div class="items-end">
      <ul class="flex  justify-end">
        {menuList.map((menu) => {
          return (
            <li class="mr-2 flex">
              <svg class="w-6 h-6 mr-1">
                <use xlinkHref={menu.iconUrl} />
              </svg>
              <a href={menu.redirectUrl}>{menu.name}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HeaderLoginActions;
