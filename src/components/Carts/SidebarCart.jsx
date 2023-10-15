// eslint-disable-next-line no-unused-vars
import React from "react";

const SidebarCart = () => {
  return (
    <div className="p-5 bg-orange-200 w-60 h-screen ml-20">
      <h1 className="text-center text-lg font-bold">Order Summery</h1>
      <div className="text-base flex flex-col gap-3 mt-5">
        <p>Selected Items: 6</p>
        <p>Total Price: $1104</p>
        <p>Shipping Charge: $3</p>
        <p>Tax: $1</p>
      </div>
      <h2 className="text-lg font-bold my-5">Grand Total: $111</h2>
      <button className="btn bg-rose-500 py-2 px-5 hover:bg-red-600 duration-200 outline-none text-white rounded">
        Clear Cart
      </button>
      <button className="mt-2 btn bg-yellow-400 py-2 px-5 hover:bg-yellow-500 duration-200 outline-none text-white rounded">
        Review Cart
      </button>
    </div>
  );
};

export default SidebarCart;