import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./config/routes";

const AppRoutes = () => {
  return (
    <Routes>
      {routes.map((route) => {
        if (route.Guard) {
          return (
            <Route
              key={route.id}
              path={route.path}
              element={
                <route.Guard>
                  <route.element />
                </route.Guard>
              }
            />
          );
        }
        return (
          <Route key={route.id} path={route.path} element={<route.element />} />
        );
      })}
    </Routes>
  );
};

export default AppRoutes;
