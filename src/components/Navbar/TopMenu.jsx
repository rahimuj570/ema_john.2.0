/* eslint-disable no-unused-vars */
import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../images/Logo.svg";

const TopMenu = () => {
  return (
    <div className="flex justify-around w-full h-16 bg-slate-700">
      <Link className={"w-28 inline-flex"} to={"/"}>
        <img className="w-full" src={logo} alt="" />
      </Link>
      <ul className="text-white flex gap-5 items-center">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-red-300 cursor-pointer  px-2 py-1 rounded-md duration-200"
              : "cursor-pointer hover:bg-slate-500 px-2 py-1 rounded-md duration-200"
          }
          to={"/shop"}
        >
          Order
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-red-300 cursor-pointer  px-2 py-1 rounded-md duration-200"
              : "cursor-pointer hover:bg-slate-500 px-2 py-1 rounded-md duration-200"
          }
          to={"/order_review"}
        >
          Order Review
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-red-300 cursor-pointer  px-2 py-1 rounded-md duration-200"
              : "cursor-pointer hover:bg-slate-500 px-2 py-1 rounded-md duration-200"
          }
          to={"/shops"}
        >
          Manage Inventory
        </NavLink>
      </ul>
    </div>
  );
};

export default TopMenu;
