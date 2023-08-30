/* eslint-disable react/prop-types */
import React, { useState } from "react";

const Form = ({ label, onChange, errorMessage, ...inputProps }) => {
  const [focused, setfocused] = useState(false);
  const handleFocuse = () => {
    if (inputProps.value.match(inputProps.pattern)) {
      setfocused(false);
    } else {
      setfocused(true);
    }
  };
  return (
    <div className="mb-4">
      <label className="block font-medium mb-1 text-white">{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocuse}
        className={`animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg w-full p-2 border rounded placeholder-blue-700 ${
          focused && "border-yellow-600"
        }`}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setfocused(true)
        }
      />
      <span
        className={`text-center p-1 text-yellow-500 text-xs ${
          focused ? "block" : "hidden"
        }`}
      >
        {errorMessage}
      </span>
    </div>
  );
};

export default Form;
