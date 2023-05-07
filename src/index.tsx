import React from "react";
import ReactDOM from "react-dom/client";
import "./ui/index.css";
import App from "./ui/App";
import reportWebVitals from "./reportWebVitals";
import { EducationalItemRepository } from "./domain/repositories/educational-item.repository";
import { EmployerRepository } from "./domain/repositories/employer.repository";
import { ProfileRepository } from "./domain/repositories/profile.repository";
import { WorkPositionRepository } from "./domain/repositories/work-position.repository";
import profileData from "./data/profile.json";
import { Profile } from "./domain/models/profile.model";
import { EducationalItem } from "./domain/models/educational-item.model";
import { Employer } from "./domain/models/employer.model";
import { WorkPosition } from "./domain/models/work-position.model";

// Init domain
const domain = {
  educationalItemRepository: new EducationalItemRepository(),
  employerRepository: new EmployerRepository(),
  profileRepository: new ProfileRepository(),
  workPositionRepository: new WorkPositionRepository(),
};
export const DomainContext = React.createContext(domain);

// Fill data storage
const profile = domain.profileRepository.save(
  new Profile({
    name: profileData.name,
    about: profileData.about,
  })
);
profileData.education.forEach((educationalData) =>
  domain.educationalItemRepository.save(
    new EducationalItem({ ...educationalData, profileId: profile.id })
  )
);
profileData.experience.forEach((experienceData) => {
  const employer = domain.employerRepository.save(new Employer(experienceData));
  experienceData.positions.forEach((positionData) =>
    domain.workPositionRepository.save(
      new WorkPosition({
        ...positionData,
        employerId: employer.id,
        profileId: profile.id,
      })
    )
  );
});

// Init UI
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
