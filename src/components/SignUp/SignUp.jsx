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
      .catch((error) => {
        if (JSON.stringify(error.message).includes("E11000")) {
          seterror("This user is already exists");
        } else {
          seterror(error.message);
        }
      })
      .finally(() => {
        setloading(false);
      });
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  if (loading) {
    return (
      <div className="h-screen w-full flex justify-center items-center flex-col">
        <Loader />;
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center min-h-screen mt-10">
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
          <span className="text-center pb-2 text-yellow-500 text-xs block">
            {error}
          </span>
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
