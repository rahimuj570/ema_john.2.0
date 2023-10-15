/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { toast, ToastContainer } from "react-toastify";

const SidebarCart = ({ carts, clearCarts }) => {
  let quantity = 0,
    totalPrice = 0,
    shippingCharge = 0,
    tax = 0;
  for (let elm of carts) {
    quantity += elm.quantity;
    totalPrice += elm.price * elm.quantity;
    shippingCharge += elm.shipping * elm.quantity;
    tax += (totalPrice * 6) / 100;
  }
  return (
    <div className="fixed p-5 bg-orange-200 w-46 md:w-60 h-screen ml-20 right-0">
      <h1 className="text-center text-lg font-bold">Order Summery</h1>
      <div className="text-base flex flex-col gap-3 mt-5">
        <p>Selected Items: {quantity}</p>
        <p>Total Price: ${totalPrice}</p>
        <p>Shipping Charge: ${shippingCharge}</p>
        <p>Tax: ${tax.toFixed(2)}</p>
      </div>
      <h2 className="text-lg font-bold my-5">
        Grand Total: ${(tax + totalPrice + shippingCharge).toFixed(2)}
      </h2>
      <button
        onClick={() => {
          clearCarts();
          toast.success("Successfully Cart is Cleared", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }}
        className="btn bg-rose-500 py-2 px-5 hover:bg-red-600 duration-200 outline-none text-white rounded"
      >
        Clear Cart
      </button>
      <button className="block mt-2 btn bg-yellow-400 py-2 px-5 hover:bg-yellow-500 duration-200 outline-none text-white rounded">
        Review Cart
      </button>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
};

export default SidebarCart;
