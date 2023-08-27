import React from "react";
import { RouteObject } from "react-router-dom";
import { CvPage } from "./cv-page";

export const routes: RouteObject[] = [
  {
    path: "",
    element: <CvPage />,
  },
];
