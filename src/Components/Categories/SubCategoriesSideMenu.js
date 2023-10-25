import React from "react";
import SubCategory from "./SubCategory";

import { useSelector } from "react-redux";

const SubCategoriesSideMenu = () => {
  const category = useSelector((state) => state.categoriesSlice)[3];
  return (
    <div>
      {category?.CategoriesArray?.map((category) => {
        return <SubCategory subCategory={category} />;
      })}
    </div>
  );
};

export default SubCategoriesSideMenu;
