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
    <div>
      <h1>Sign_Up</h1>
      <label htmlFor="userName">User Name</label>
      <input
        name="userName"
        id="userName"
        onChange={(e) => {
          setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        }}
      />
      <label htmlFor="email">Email</label>
      <input
        name="email"
        id="email"
        onChange={(e) => {
          setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        }}
      />
      <label htmlFor="password">password</label>
      <input
        name="password"
        id="password"
        onChange={(e) => {
          setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        }}
      />
      <button onClick={signUpHandler}>Sign Up</button>
    </div>
  );
};

export default SignUp;
