// exports default function ProductList
import { React, useEffect, useState } from "react";
import Product from "./Product";
import constant from "../../indWasteConstants";
import { useGetProductsQuery } from "../../services/apiSlice";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../redux/slices/productSlice";
import ProductLoader from "./ProductLoader";
// import { configDotenv } from "dotenv";

const ProductList = () => {
  //Hooks
  const [pageStart, setPageStart] = useState(0);

  const dispatch = useDispatch();

  //Variables

  const defaultParams = {
    country: "us",
    lang: "en",
    currentpage: `${pageStart}`,
    pagesize: "30",
    categories: "men_all",
    concepts: "H&M MAN",
  };

  const cardStyle = {
    textAlign: "left",
    borderRadius: 0,
    border: 0,
  };

  const {
    data: productList = [],
    error,
    isLoading,
  } = useGetProductsQuery(defaultParams);

  const productListInStore = useSelector((state) => state.productSlice);

  //side effect

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (productList.products) {
      dispatch(addProduct(productList.products));
    }
  }, [productList.products]);

  //handler functions
  const handleScroll = () => {
    if (
      document.documentElement.clientHeight + window.scrollY >=
      document.documentElement.scrollHeight
    ) {
      setPageStart((pageStart) => pageStart + 1);
    }
  };

  return (
    <div class="grid grid-cols-4 gap-x-2 gap-y-6">
      {productListInStore.map((product) => {
        return (
          <Product
            product={product}
            cardStyle={cardStyle}
            isLoading={isLoading}
          />
        );
      })}
      {isLoading ? <ProductLoader cardStyle={cardStyle} /> : <></>}
    </div>
  );
};

export default ProductList;
