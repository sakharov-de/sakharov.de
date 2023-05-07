import React from "react";
import "./App.css";
import { useDomain } from "./hooks/useDomain";
import { ProfileWidget } from "./widgets/profile-widget";
import { ExperienceWidget } from "./widgets/experience-widget";
import { EducationWidget } from "./widgets/education-widget";

function App() {
  const domain = useDomain();
  const profile = domain.profileRepository.findOne();

  if (!profile) return null;

  const educationalItems = domain.educationalItemRepository.findAllByProfileId(
    profile.id
  );
  console.log(educationalItems);

  return (
    <div className="App">
      <header>
        <ProfileWidget />
      </header>
      <h2>Experience</h2>
      <ExperienceWidget profileId={profile.id} />
      <h2>Education</h2>
      <EducationWidget profileId={profile.id} />
    </div>
  );
}

export default App;
