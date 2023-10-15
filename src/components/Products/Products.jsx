/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect } from "react";
import SidebarCart from "../Carts/SidebarCart";
import "./Products.css";
import SingleProduct from "./SingleProduct";
import fakeData from "../../fakeData/products.json";
import { useState } from "react";
import LocalDB from "../../hooks/LocalDB";

const Products = () => {
  const [data, setData] = useState([]);
  const [carts, setCarts] = useState([]);
  const { addToCart, getFromCart } = LocalDB;

  useEffect(() => {
    setData(fakeData);
    console.log(data);
  }, [data]);

  useEffect(() => {
    const storedCart = getFromCart();
    const newClickedCart = [];
    for (const elm in storedCart) {
      const foundCart = data.find((e) => e.id === elm);
      if (foundCart) {
        foundCart.quantity = storedCart[elm];
        newClickedCart.push(foundCart);
      }
    }
    setCarts(newClickedCart);
  }, [data]);

  const addToCartBtnHandle = (e) => {
    addToCart(e);
    let newCarts = [];
    const foundCart = carts.find((pd) => pd.id === e.id);
    if (foundCart) {
      foundCart.quantity += 1;
      const remains = carts.filter((pd) => pd.id !== foundCart.id);
      newCarts = [...remains, foundCart];
    } else {
      e.quantity = 1;
      newCarts = [...carts, e];
    }
    setCarts(newCarts);
  };
  return (
    <div className="grid grid-cols-2">
      <div className="col-span-full mx-auto">
        <div className=" grid md:grid-cols-3 mr-60 gap-11 h-fit mt-20">
          {data.map((e) => (
            <SingleProduct
              key={e.id}
              data={e}
              addToCartBtnHandle={addToCartBtnHandle}
            />
          ))}
        </div>
      </div>
      <SidebarCart carts={carts} />
    </div>
  );
};

export default Products;
