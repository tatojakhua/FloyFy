import React, { useState } from "react";
import { sigUp } from "../../api/auth";
import { useNavigate } from "react-router-dom";
import { SIGN_IN } from "../../constants/routes";

const SignUp = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    userName: "",
    password: "",
    email: "",
  });
  const [error, seterror] = useState("");
  const signUpHandler = () => {
    sigUp(user)
      .then(() => {
        navigate(SIGN_IN, { state: { isSuccess: true } });
      })
      .catch((error) => seterror(error.message));
  };
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Sign Up</h2>
        <form onSubmit={() => signUpHandler()}>
          <label htmlFor="username" className="block font-medium mb-1">
            Username
          </label>
          <input
            name="userName"
            id="userName"
            className="w-full p-2 border rounded"
            placeholder="Enter your username"
            onChange={(e) => {
              setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
            }}
          />
          <label htmlFor="email" className="block font-medium mb-1">
            Email
          </label>
          <input
            name="email"
            id="email"
            className="w-full p-2 border rounded"
            placeholder="Enter your email"
            onChange={(e) => {
              setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
            }}
          />
          <label htmlFor="password" className="block font-medium mb-1">
            password
          </label>
          <input
            name="password"
            id="password"
            className="w-full p-2 border rounded"
            placeholder="Enter your password"
            onChange={(e) => {
              setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
            }}
          />
          <label htmlFor="confirmPassword" className="block font-medium mb-1">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="w-full p-2 border rounded"
            placeholder="Confirm your password"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
