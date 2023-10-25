import React from "react";
import ProductList from "./ProductList/ProductList";
import Header from "./Header/Header";
import Categories from "./Categories/Categories";
import ProductLayout from "../Layouts/ProductLayout";
import SubCategoriesSideMenu from "./Categories/SubCategoriesSideMenu";
import HomeScreen from "./HomeScreen.js/HomeScreen";

function Home() {
  return (
    <div>
      <Header />
      <Categories />
      {/* <ProductLayout>
        <SubCategoriesSideMenu />
        <ProductList />
      </ProductLayout> */}
      <HomeScreen />
    </div>
  );
}

export default Home;
