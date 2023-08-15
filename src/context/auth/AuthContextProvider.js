/* eslint-disable react/prop-types */
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { authReducer, initialState } from "./authReducer";
import { isTokenValid } from "../../utils/jwt";
import { authenticateAction } from "../actions/constants/actionCreators";

const authContext = createContext();
const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (token && isTokenValid(token)) {
      dispatch(authenticateAction(token));
    }
  }, []);
  return (
    <authContext.Provider value={{ state, dispatch }}>
      {children}
    </authContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(authContext);
  if (context) {
    return context;
  }
  throw new Error("authContext problem");
};

export default AuthContextProvider;
