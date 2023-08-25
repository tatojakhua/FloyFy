/* eslint-disable react/prop-types */
import React from "react";
import { useGlobalContext } from "../context/auth/AuthContextProvider";
import LandingPage from "../pages/Landing/LandingPage";

const AuthGuard = ({ children }) => {
  const { state } = useGlobalContext();
  return <div>{state.isAuthenticated ? children : <LandingPage />}</div>;
};

export default AuthGuard;
