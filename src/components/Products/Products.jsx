/* eslint-disable no-unused-vars */
import React from "react";
import SidebarCart from "../Carts/SidebarCart";
import "./Products.css";
import SingleProduct from "./SingleProduct";

const Products = () => {
  return (
    <div className="flex justify-between">
      <div className="flex justify-center mx-auto gap-11 h-fit mt-20">
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
      </div>
      <SidebarCart />
    </div>
  );
};

export default Products;
