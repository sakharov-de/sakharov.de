import React, { useEffect, useState } from "react";
import "./App.css";
import { useDomain } from "./hooks/useDomain";
import { ProfileWidget } from "./widgets/profile-widget";
import { ExperienceWidget } from "./widgets/experience-widget";
import { EducationWidget } from "./widgets/education-widget";
import { useUseCases } from "./hooks/useUseCases";

function App() {
  const domain = useDomain();
  const useCases = useUseCases();
  const profile = domain.profileRepository.findOne();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    useCases.cvUseCases.initCvPage();
    setIsLoading(false);
  }, [useCases.cvUseCases]);

  if (isLoading || !profile) return null;

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
