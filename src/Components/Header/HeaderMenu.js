import React from "react";

const HeaderMenu = () => {
  const menuList = [
    {
      name: "Customer Service",
      redirectUrl: "",
    },
    {
      name: "Newsletter",
      redirectUrl: "",
    },
    {
      name: "Find a store",
      redirectUrl: "",
    },
  ];
  const moreList = [
    {
      name: "DownLoad iOS",
      redirectUrl: "",
    },
    {
      name: "Download android",
      redirectUrl: "",
    },
  ];
  return (
    <div>
      <ul class="flex">
        {menuList.map((menu) => {
          return (
            <li class="mr-2">
              <a href={menu.redirectUrl}>{menu.name}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HeaderMenu;
