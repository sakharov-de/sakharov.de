import React from "react";
import ReactDOM from "react-dom/client";
import "./presentation/index.css";
import App from "./presentation/App";
import reportWebVitals from "./reportWebVitals";
import { config } from "./config";
import { HttpClients } from "./infrastructure/http-clients";
import { Domain } from "./domain";
import { Application } from "./application";

// Init domain, application and context
const httpClients = new HttpClients(config);
const domain = new Domain(httpClients);
const application = new Application(domain);
export const DomainContext = React.createContext(domain);
export const ApplicationContext = React.createContext(application);

// Init UI
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
