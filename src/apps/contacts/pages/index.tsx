import { Route, Routes } from "react-router-dom";
import React from "react";
import { HomePage } from "./home-page";

export const Routing = () => (
  <Routes>
    <Route path="" element={<HomePage />} />
  </Routes>
);
