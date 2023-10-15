/* eslint-disable no-unused-vars */
import React from "react";
import logo from "../../images/Logo.svg";

const TopMenu = () => {
  return (
    <div className="flex justify-around w-full h-16 bg-slate-700">
      <img className="w-28" src={logo} alt="" />
      <ul className="text-white flex gap-5 items-center">
        <li className="cursor-pointer hover:bg-slate-500 px-2 py-1 rounded-md duration-200">
          Order
        </li>
        <li className="cursor-pointer hover:bg-slate-500 px-2 py-1 rounded-md duration-200">
          Order Review
        </li>
        <li className="cursor-pointer hover:bg-slate-500 px-2 py-1 rounded-md duration-200">
          Manage Inventory
        </li>
      </ul>
    </div>
  );
};

export default TopMenu;
