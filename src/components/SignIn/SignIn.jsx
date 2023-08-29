import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../api/auth";
import { useGlobalContext } from "../../context/auth/AuthContextProvider";
import { LogIn } from "../../context/actions/constants/actionCreators";
import { HOME_PAGE } from "../../constants/routes";
import Loader from "../Loader/Loader";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const SignIn = () => {
  const [user, setUser] = useState({
    password: "",
    userName: "",
    error: "",
  });
  const navigate = useNavigate();
  const [loading, setloading] = useState(false);
  const [showPassword, setshowPassword] = useState(false);
  const { dispatch } = useGlobalContext();
  const handleShowPassword = () => {
    setshowPassword((prev) => !prev);
  };

  const signInHandler = (e) => {
    e.preventDefault();
    setloading(true);
    signIn(user)
      .then((data) => {
        dispatch(LogIn(data));
        navigate(HOME_PAGE);
      })
      .catch((Err) => {
        setUser((prev) => ({ ...prev, error: Err.message }));
      })
      .finally(() => setloading(false));
  };
  if (loading) {
    return (
      <div className="h-[520px] w-full flex justify-center items-center flex-col">
        <Loader />;
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center min-h-screen mt-10">
      <div className="animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg p-8 rounded shadow-md max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4 text-white">Sign In</h2>
        <form onSubmit={signInHandler}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block font-medium mb-1 text-white"
            >
              Enter Email or User Name
            </label>
            <input
              name="email"
              placeholder="Email or userName"
              id="email"
              className="animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg w-full p-2 border rounded placeholder-blue-700"
              onChange={(e) => {
                setUser((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }));
              }}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="password"
              className="block font-medium mb-1 text-white"
            >
              password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="password"
              className="animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg w-full p-2 border rounded placeholder-blue-700"
              onChange={(e) => {
                setUser((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }));
              }}
            />
            <button
              type="button"
              className="absolute right-3 bottom-[13px] text-white"
              onClick={handleShowPassword}
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </button>
          </div>
          {user.error && (
            <span className="text-center p-1 text-yellow-500 text-xs block">
              {user.error}
            </span>
          )}
          <button
            type="submit"
            className="w-full animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg text-white py-2 rounded hover:bg-blue-800"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
