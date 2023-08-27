import { RouteObject } from "react-router-dom";
import React from "react";
import { HomePage } from "./home-page";

export const routes: RouteObject[] = [
  {
    path: "",
    element: <HomePage />,
  },
];
