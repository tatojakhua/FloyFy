import React from "react";
import { useNavigate } from "react-router-dom";
import { logo } from "../../assets/index";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="animate-slideup h-screen w-full flex justify-center items-center flex-col">
      <img
        src={logo}
        alt="logo"
        className="w-32 h-32 object-contain m-8 mt-[-40px]"
      />
      <h1 className="text-4xl font-bold tracking-tighter text-white leading-none m-4">
        Page not found
      </h1>
      <span className="text-lg font-medium text-gray-400 inline-block max-w-lg mb-8">
        We can’t seem to find the page you are looking for.
      </span>
      <button
        onClick={() => navigate(-1)}
        className="cursor-pointer px-6 py-3 bg-slate-900 text-white rounded-full m-4 hover:bg-white hover:text-slate-900"
      >
        Back
      </button>
    </div>
  );
};

export default Error;
