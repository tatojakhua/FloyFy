/* eslint-disable react/prop-types */
import React from "react";
import { useAuthContext } from "../context/auth/AuthContextProvider";
import { useNavigate } from "react-router-dom";
import { SIGN_IN, SIGN_UP } from "../constants/routes";

const AuthGuard = ({ children }) => {
  const navigate = useNavigate();
  const { state } = useAuthContext();
  return (
    <div>
      {state.isAuthenticated ? (
        children
      ) : (
        <div>
          <h1>You are not Authenticated</h1>
          <button onClick={() => navigate(SIGN_IN)}>Sign In</button>
          <button onClick={() => navigate(SIGN_UP)}>Sign Up</button>
        </div>
      )}
    </div>
  );
};

export default AuthGuard;
