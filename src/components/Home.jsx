/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";
import heroImg from "../images/giphy.webp";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-screen justify-center items-center flex gap-10 flex-wrap-reverse md:mt-0 mt-10">
      <section className="flex flex-col gap-5">
        <p className="text-sm text-orange-400">Sell up to70% off</p>
        <div className="">
          <h2 className="text-2xl">New Collections!</h2>
          <p className="text-base">
            Discover all the new arrivals of ready-to-wear collection.
          </p>
        </div>
        <button
          onClick={() => navigate("/shop")}
          className="w-fit inline bg-orange-400 hover:bg-orange-300 duration-200 text-black
         px-4 py-1 rounded outline-none"
        >
          Shop Now
        </button>
      </section>
      <div className="w-60">
        <img
          className="shadow-orange-400 shadow-2xl w-full"
          src={heroImg}
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
