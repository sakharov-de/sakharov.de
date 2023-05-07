import React from "react";
import ReactDOM from "react-dom/client";
import "./ui/index.css";
import App from "./ui/App";
import reportWebVitals from "./reportWebVitals";
import { EducationalItemRepository } from "./domain/repositories/educational-item.repository";
import { EmployerRepository } from "./domain/repositories/employer.repository";
import { ProfileRepository } from "./domain/repositories/profile.repository";
import { WorkPositionRepository } from "./domain/repositories/work-position.repository";

const educationalItemRepository = new EducationalItemRepository();
const employerRepository = new EmployerRepository();
const profileRepository = new ProfileRepository();
const workPositionRepository = new WorkPositionRepository();
const domain = {
  educationalItemRepository,
  employerRepository,
  profileRepository,
  workPositionRepository,
};
export const DomainContext = React.createContext(domain);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <DomainContext.Provider value={domain}>
      <App />
    </DomainContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
