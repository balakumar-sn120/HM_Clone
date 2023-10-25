import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCategories } from "../../redux/slices/categoriesSlice";
import { useGetCategoriesQuery } from "../../services/apiSlice";
import SubCategoriesModel from "./SubCategoriesModel";

const Categories = () => {
  const parentRef = useRef(null);
  const [showModalIndex, setModalIndex] = useState(-1);
  const dispatch = useDispatch();
  const defaultParams = {
    country: "in",
    lang: "en",
  };
  const {
    data: categories = [],
    isLoading,
    error,
  } = useGetCategoriesQuery(defaultParams);
  useEffect(() => {
    dispatch(addCategories(categories));
  }, [categories]);

  const handleHoverMenu = (index) => {
    setModalIndex(() => index);
  };

  const handleHoverLeaveMenu = (e) => {
    const parentRect = parentRef.current.getBoundingClientRect();
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Check if the mouse is outside the parent's bounding box
    if (
      mouseX < parentRect.left ||
      mouseX > parentRect.right ||
      mouseY < parentRect.top ||
      mouseY > parentRect.bottom
    ) {
      // Mouse left the parent component or its children
      console.log("Mouse left the parent component or its children");
      setModalIndex(() => -1);
    }
  };

  return (
    <div ref={parentRef} onMouseLeave={(e) => handleHoverLeaveMenu(e)}>
      <ul class="flex justify-center mb-2">
        {categories.map((categoty, index) => {
          return (
            <li class="mr-5" onMouseEnter={() => handleHoverMenu(index)}>
              <a>{categoty.CatName}</a>
            </li>
          );
        })}
      </ul>
      {showModalIndex >= 0 ? (
        <SubCategoriesModel category={categories[showModalIndex]} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Categories;
