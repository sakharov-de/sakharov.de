import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { CvPage } from "./cv-page";
import { HomePage } from "./home-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "cv",
    element: <CvPage />,
  },
]);

export const Routing = () => {
  return <RouterProvider router={router} />;
};
