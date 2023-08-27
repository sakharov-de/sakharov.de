import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { cvApp } from "../apps/cv";
import { contactsApp } from "../apps/contacts";
import { spCalculatorApp } from "../apps/sp-calculator";

const router = createBrowserRouter([
  {
    path: "/",
    children: contactsApp.routes,
  },
  {
    path: "/cv",
    children: cvApp.routes,
  },
  {
    path: "/sp-calculator",
    children: spCalculatorApp.routes,
  },
]);

export const Routing = () => {
  return <RouterProvider router={router} />;
};
