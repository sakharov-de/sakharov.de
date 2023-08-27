import React from "react";
import { Route, Routes } from "react-router-dom";
import { CvPage } from "./cv-page";

export const Routing = () => (
  <Routes>
    <Route path="" element={<CvPage />} />
  </Routes>
);
