import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { cvApp } from "../apps/cv";
import { contactsApp } from "../apps/contacts";

const router = createBrowserRouter([
  {
    path: "/",
    children: contactsApp.routes,
  },
  {
    path: "cv",
    children: cvApp.routes,
  },
]);

export const Routing = () => {
  return <RouterProvider router={router} />;
};
