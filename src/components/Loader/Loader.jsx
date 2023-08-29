/* eslint-disable react/prop-types */
import React from "react";
import "./loader.css";

const Loader = ({ title }) => {
  return (
    <div className="w-full flex justify-center items-center flex-col mt-32">
      <div className="custom-loader"></div>
      <h1 className="font-bold text-2xl text-white mt-2">
        {title || "Loading..."}
      </h1>
    </div>
  );
};

export default Loader;
