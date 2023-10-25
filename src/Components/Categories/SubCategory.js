import React from "react";

const SubCategory = ({ subCategory = {} }) => {
  console.log("hsbjsbj", subCategory.CatName);
  return (
    <div class="text-left">
      <h3 class="font-bold">{subCategory.CatName}</h3>
      <ul>
        {subCategory.CategoriesArray?.map((category) => {
          return (
            <li>
              <a>{category.CatName}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SubCategory;
