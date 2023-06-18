import React from "react";
import ReactDOM from "react-dom/client";
import "./ui/index.css";
import App from "./ui/App";
import reportWebVitals from "./reportWebVitals";
import { config } from "./config";
import { HttpClients } from "./api/http-clients";
import { Domain } from "./domain";
import { UseCases } from "./use-cases";

// Init domain and use-cases
const httpClients = new HttpClients(config);
const domain = new Domain(httpClients);
const useCases = new UseCases(domain);

// Init context
export const DomainContext = React.createContext(domain);
export const UseCasesContext = React.createContext(useCases);

// Init UI
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <DomainContext.Provider value={domain}>
      <UseCasesContext.Provider value={useCases}>
        <App />
      </UseCasesContext.Provider>
    </DomainContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
