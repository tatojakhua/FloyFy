/* eslint-disable react/prop-types */
import React from "react";
import { useGlobalContext } from "../context/auth/AuthContextProvider";
import { Navigate } from "react-router-dom";
import { HOME_PAGE } from "../constants/routes";

const GuestGuard = ({ children }) => {
  const { state } = useGlobalContext();
  return (
    <div>{state.isAuthenticated ? <Navigate to={HOME_PAGE} /> : children}</div>
  );
};

export default GuestGuard;
