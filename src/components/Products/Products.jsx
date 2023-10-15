/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect } from "react";
import SidebarCart from "../Carts/SidebarCart";
import "./Products.css";
import SingleProduct from "./SingleProduct";
import fakeData from "../../fakeData/products.json";
import { useState } from "react";

const Products = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(fakeData);
    console.log(data);
  }, [data]);
  return (
    <div className="flex justify-between">
      <div className="grid grid-cols-3 mx-auto gap-11 h-fit mt-20">
        {data.map((e) => (
          <SingleProduct key={e.id} data={e} />
        ))}
        {/* <SingleProduct />
        <SingleProduct /> */}
      </div>
      <SidebarCart />
    </div>
  );
};

export default Products;
