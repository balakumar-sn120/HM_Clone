import React from "react";

const CategoryModal = ({ children }) => {
  return (
    <div class="left-0 right-0 w-full h-full z-50 bg-white absolute">
      <div class="p-2">{children}</div>
    </div>
  );
};

export default CategoryModal;
