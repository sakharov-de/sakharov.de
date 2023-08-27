import { Route, RouteObject, Routes } from "react-router-dom";
import React from "react";
import { HomePage } from "./home-page";

export const routes: RouteObject[] = [
  {
    path: "",
    element: <HomePage />,
  },
];

export const Routing = () => (
  <Routes>
    <Route path="" element={<HomePage />}></Route>
  </Routes>
);
