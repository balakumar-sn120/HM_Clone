import React from "react";

const ProductLayout = ({ children }) => {
  const [category, productList] = children;
  return (
    <div class="grid grid-cols-5">
      <div>{category}</div>
      <div class="col-span-4">{productList}</div>
    </div>
  );
};

export default ProductLayout;
