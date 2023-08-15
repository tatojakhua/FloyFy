/* eslint-disable react/prop-types */
import React from "react";
import { logo } from "../../assets/index";

const Loader = ({ title }) => {
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <img src={logo} alt="loader" className="w-32 h-32 object-contain" />
      <h1 className="font-bold text-2xl text-white mt-2">
        {title || "Loading..."}
      </h1>
    </div>
  );
};

export default Loader;
