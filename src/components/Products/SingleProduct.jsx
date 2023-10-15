/* eslint-disable no-unused-vars */
import React, { Component } from "react";

class SingleProduct extends Component {
  render() {
    return (
      <div className="shadow-lg text-center border-gray-300 border rounded py-10 pb-0  pt-0">
        <div className="m-1 rounded bg-slate-200">
          <img
            className="hover:scale-105 duration-200 py-5 w-4/6 inline-block"
            src="chrome://branding/content/about-logo.png"
            alt=""
          />
        </div>
        <h2 className="mt-2 font-bold text-lg">Title</h2>
        <p className="product_price"></p>
        <div className="px-1 text-start text-sm mt-2">
          <p>Manufacture : Address</p>
          <p>Rating : 3star</p>
        </div>
        <button className="hover:bg-orange-300 duration-200 mt-2 py-2 w-full bg-orange-200">
          Add to Cart
        </button>
      </div>
    );
  }
}

export default SingleProduct;
