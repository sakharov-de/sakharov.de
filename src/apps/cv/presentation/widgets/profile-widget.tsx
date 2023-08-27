import React from "react";
import { useDomain } from "../hooks/useDomain";
import { ProfileRepository } from "../../domain/repositories/profile.repository";
export const ProfileWidget: React.FC = () => {
  const domain = useDomain();
  const profileRepository = domain.getRepository(ProfileRepository);
  const profile = profileRepository.findOne();

  if (!profile) return null;

  return (
    <>
      <h1>{profile.name}</h1>
      <p>{profile.about}</p>
    </>
  );
};
