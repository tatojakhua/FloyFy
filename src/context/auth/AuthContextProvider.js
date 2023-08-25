/* eslint-disable react/prop-types */
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { authReducer, initialState } from "./authReducer";
import { isTokenValid } from "../../utils/jwt";
import { authenticateAction } from "../actions/constants/actionCreators";

const Context = createContext();
const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (token && isTokenValid(token)) {
      dispatch(authenticateAction(token));
    }
  }, []);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(Context);
  if (context) {
    return context;
  }
  throw new Error("Context problem");
};

export default ContextProvider;
