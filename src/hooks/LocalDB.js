/* eslint-disable no-unused-vars */
import { stringify } from "postcss";

//ADD CART ID LIST
const addToCart = (data) => {
  // console.log(data);
  let idList = getFromCart();
  console.log(idList);
  if (idList[data.id]) {
    let quantity = idList[data.id];
    idList[data.id] = quantity + 1;
  } else {
    idList[data.id] = 1;
    // console.log(idList);
  }
  localStorage.setItem("cartList", JSON.stringify(idList));
};

//GET CART ID LIST
const getFromCart = () => {
  let cartList = {};
  if (localStorage.getItem("cartList")) {
    cartList = JSON.parse(localStorage.getItem("cartList"));
  }
  return cartList;
};

export default { addToCart, getFromCart };
