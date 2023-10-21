import React from "react";
import ProductCardC from "../../antDComponents/organisms/ProductCardC";

function Product({ product, isLoading }) {
  const productProps = {
    withModelImg: product.articles[0].logoPicture[0].url,
    withoutModelImg: product.articles[0].images[0].url,
    name: product.name,
    formattedAmount: product.price.formattedValue,
    rgbColors: product.rgbColors,
    sellingAttributes: product.sellingAttributes,
  };
  return <ProductCardC {...productProps} isLoading={isLoading} />;
}

export default Product;
