import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate(-1);
    }, 2000);
  }, []);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="font-bold text-2xl text-white mt-2 ">
        Something went wrong. Pleas try again.
      </h1>
      <button
        onClick={() => navigate(-1)}
        className="cursor-pointer px-4 py-2 bg-slate-900 text-white rounded-full m-4"
      >
        Back
      </button>
    </div>
  );
};

export default Error;
