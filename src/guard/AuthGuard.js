/* eslint-disable react/prop-types */
import React from "react";
import { useAuthContext } from "../context/auth/AuthContextProvider";
import LandingPage from "../pages/Landing/LandingPage";

const AuthGuard = ({ children }) => {
  const { state } = useAuthContext();
  return <div>{state.isAuthenticated ? children : <LandingPage />}</div>;
};

export default AuthGuard;
