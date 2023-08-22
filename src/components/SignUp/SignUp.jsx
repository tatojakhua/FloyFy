import React, { useState } from "react";
import { signUp } from "../../api/auth";
import { useNavigate } from "react-router-dom";
import { SIGN_IN } from "../../constants/routes";
import { inputs } from "../../constants/constants";
import Form from "./Form";
import Loader from "../Loader/Loader";

const SignUp = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    userName: "",
    password: "",
    email: "",
  });
  const [error, seterror] = useState("");
  const [loading, setloading] = useState(false);
  const signUpHandler = (e) => {
    e.preventDefault();
    setloading(true);

    signUp(user)
      .then(() => {
        navigate(SIGN_IN);
      })
      .catch((error) => seterror(error.message))
      .finally(() => {
        setloading(false);
      });
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-right">
        <h1
          className="font-bold text-2xl text-white mt-2 w-5/12 text-start
        "
        >
          {error}
        </h1>
        <button
          className="cursor-pointer px-4 py-2 bg-slate-900 text-white rounded-full m-4"
          onClick={() => navigate(window.location.reload())}
        >
          Back
        </button>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="h-[520px] mt-20">
        <Loader title={"Don't expect quick results, this demands time."} />;
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg p-8 rounded shadow-md max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4 text-white">Sign Up</h2>
        <form onSubmit={signUpHandler}>
          {inputs.map((input) => (
            <Form
              key={input.id}
              {...input}
              value={user[input.name]}
              onChange={handleChange}
            />
          ))}
          <button
            type="submit"
            className="w-full animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg text-white py-2 rounded hover:bg-blue-800"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
