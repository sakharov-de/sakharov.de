import React from "react";
import { Route, RouteObject, Routes } from "react-router-dom";
import { CvPage } from "./cv-page";

export const routes: RouteObject[] = [
  {
    path: "",
    element: <CvPage />,
  },
];

export const Routing = () => (
  <Routes>
    <Route path="" element={<CvPage />} />
  </Routes>
);
