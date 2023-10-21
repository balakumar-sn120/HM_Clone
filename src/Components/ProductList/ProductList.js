// exports default function ProductList
import axios from "axios";
import { React, useEffect, useState } from "react";
import Product from "./Product";
import constant from "../../indWasteConstants";
import { useGetProductsQuery } from "../../services/apiSlice";
// import { configDotenv } from "dotenv";

const ProductList = () => {
  // const [isLoading, setIsLoading] = useState(true);
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get(`${constant.domain}/products`)
  //     .then(function (res) {
  //       products.length
  //         ? setProducts([...products, ...res.data])
  //         : setProducts([...res.data]);
  //       setIsLoading(false);
  //     })
  //     .catch((err) => {
  //       setIsLoading(false);
  //       console.error(err);
  //     });
  // }, []);
  const defaultParams = {
    country: "us",
    lang: "en",
    currentpage: "0",
    pagesize: "30",
    categories: "men_all",
    concepts: "H&M MAN",
  };
  const {
    data: products = [],
    error,
    isLoading,
  } = useGetProductsQuery(defaultParams);
  console.log(products);
  return (
    <div class="grid grid-cols-4 gap-x-1 gap-y-6">
      {isLoading ? (
        <p>loading....</p>
      ) : (
        products.map((product) => {
          return <Product product={product} isLoading={isLoading} />;
        })
      )}
    </div>
  );
};

export default ProductList;
