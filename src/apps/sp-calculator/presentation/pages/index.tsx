import { RouteObject } from "react-router-dom";
import { HomePage } from "../../../contacts/pages/home-page";
import React from "react";

export const routes: RouteObject[] = [
  {
    path: "",
    element: <HomePage />,
  },
];
