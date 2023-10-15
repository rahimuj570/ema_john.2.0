/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import CartToLocalDB from "../../hooks/LocalDB";

const SingleProduct = ({ data }) => {
  const { addToCart } = CartToLocalDB;

  return (
    <div className="flex flex-col justify-between w-56 shadow-lg text-center border-gray-300 border rounded py-10 pb-0  pt-0">
      <div className="">
        <div className="m-1 rounded bg-slate-200">
          <img
            className=" hover:scale-105 duration-200 py-5 w-4/6 inline-block"
            src={
              data.img == null
                ? "chrome://branding/content/about-logo.png"
                : data.img
            }
            alt=""
          />
        </div>
        <h2 className="mt-2 font-bold text-lg">{data.name}</h2>
      </div>
      <div className="">
        <p className="product_price"></p>
        <div className="px-1 text-start text-sm mt-2">
          <p>Manufacture : {data.seller}</p>
          <p>Rating : {data.ratings} star</p>
        </div>
        <button
          onClick={() => addToCart(data)}
          className="hover:bg-orange-300 duration-200 mt-2 py-2 w-full bg-orange-200"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;
