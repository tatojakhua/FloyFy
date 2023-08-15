import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate(-1);
    }, 5000);
  }, []);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="font-bold text-2xl text-white mt-2">
        Something went wrong. Pleas try again.
      </h1>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};

export default Error;
