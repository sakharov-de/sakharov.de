import { ProfileWidget } from "../../widgets/profile-widget";
import { ExperienceWidget } from "../../widgets/experience-widget";
import { EducationWidget } from "../../widgets/education-widget";
import React, { useEffect, useState } from "react";
import { useDomain } from "../../hooks/useDomain";
import { ProfileRepository } from "../../../domain/repositories/profile.repository";
import { useApplication } from "../../hooks/useApplication";
import { InitCvPageUseCase } from "../../../application/use-cases/init-cv-page.use-case";

export const CvPage = () => {
  const domain = useDomain();
  const profileRepository = domain.getRepository(ProfileRepository);
  const application = useApplication();
  const initCvPageUseCase = application.getUseCase(InitCvPageUseCase);
  const profile = profileRepository.findOne();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    initCvPageUseCase.execute();
    setIsLoading(false);
  }, [initCvPageUseCase]);

  if (isLoading || !profile) return null;

  return (
    <>
      <header>
        <ProfileWidget />
      </header>
      <h2>Experience</h2>
      <ExperienceWidget profileId={profile.id} />
      <h2>Education</h2>
      <EducationWidget profileId={profile.id} />
    </>
  );
};
