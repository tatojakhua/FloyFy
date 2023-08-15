import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { sigIn } from "../../api/auth";
import { useAuthContext } from "../../context/auth/AuthContextProvider";
import { LogIn } from "../../context/actions/constants/actionCreators";
import { HOME_PAGE } from "../../constants/routes";

const SingIn = () => {
  const [user, setUser] = useState({
    password: "",
    email: "",
  });
  const navigate = useNavigate();
  const [error, seterror] = useState("");
  const { dispatch } = useAuthContext();
  const location = useLocation();
  const signInHandler = () => {
    sigIn(user)
      .then((data) => {
        dispatch(LogIn(data));
        navigate(HOME_PAGE);
      })
      .catch((Err) => seterror(Err.message));
  };
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <div>
      {location?.state?.isSuccess && <h1>Successfull Registered</h1>}
      <h1>Sign_In</h1>
      <label htmlFor="email">Enter Email or User Name</label>
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
      <button onClick={signInHandler}>Sign In</button>
    </div>
  );
};

export default SingIn;
