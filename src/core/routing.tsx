import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const ContactsAppRouting = React.lazy(() =>
  import("../apps/contacts").then((module) => ({
    default: module.contactsApp.Routing,
  }))
);
const CvAppRouting = React.lazy(() =>
  import("../apps/cv").then((module) => ({ default: module.cvApp.Routing }))
);
const SpCalculatorAppRouting = React.lazy(() =>
  import("../apps/sp-calculator").then((module) => ({
    default: module.spCalculatorApp.Routing,
  }))
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="cv/*" element={<CvAppRouting />} />
      <Route path="sp-calculator/*" element={<SpCalculatorAppRouting />} />
      <Route path="/*" element={<ContactsAppRouting />} index={true} />
    </>
  )
);

export const Routing = () => {
  return <RouterProvider router={router} />;
};
