import React from "react";
import ProductCardC from "../../antDComponents/organisms/ProductCardC";

const ProductLoader = ({ numberOfCards = 4, cardStyle }) => {
  const repeatingLoaderCards = Array(numberOfCards).fill(
    <ProductCardC isLoading={true} cardStyle={cardStyle} />
  );
  return (
    <>
      {repeatingLoaderCards.map((card) => {
        return <>{card}</>;
      })}
    </>
  );
};

export default ProductLoader;
