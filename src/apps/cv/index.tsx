import "./index.css";
import React from "react";
import { routes } from "./presentation/pages";
import { HttpClients } from "./infrastructure/http-clients";
import { config } from "../../core/config";
import { Domain } from "./domain";
import { Application } from "./application";

// Init domain, application and context
const httpClients = new HttpClients(config);
const domain = new Domain(httpClients);
const application = new Application(domain);
export const DomainContext = React.createContext(domain);
export const ApplicationContext = React.createContext(application);
export const cvApp = { routes };
