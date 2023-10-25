import React from "react";
import SubCategory from "./SubCategory";
import CategoriesSlice from "../../redux/slices/categoriesSlice";
import CategoryModal from "../atoms/CategoryModal";

const SubCategoriesModel = ({ category = {} }) => {
  console.log("Inside Categories", category);
  return (
    <div>
      <CategoryModal>
        {category.CategoriesArray?.map((category) => {
          return <SubCategory subCategory={category} />;
        })}
      </CategoryModal>
    </div>
  );
};

export default SubCategoriesModel;
