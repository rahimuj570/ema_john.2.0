/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  console.log(error);
  return (
    <div className="h-screen justify-center flex flex-col items-center">
      <h2 className="text-9xl">404</h2>
      <h2 className="text-7xl">NOT FOUND</h2>
      <p className="text-orange-400"></p>
      <button
        onClick={() => navigate(-1)}
        className="font-bold hover:bg-orange-300 text-white hover:text-black duration-200 mt-4 btn bg-orange-400 rounded px-4 py-2"
      >
        {`<= BACK`}{" "}
      </button>
    </div>
  );
};

export default NotFound;
