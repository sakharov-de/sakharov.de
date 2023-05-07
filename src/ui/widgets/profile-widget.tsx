import React from "react";
import { useDomain } from "../hooks/useDomain";
export const ProfileWidget: React.FC = () => {
  const domain = useDomain();
  const profile = domain.profileRepository.findOne();

  if (!profile) return null;

  return (
    <>
      <h1>{profile.name}</h1>
      <p>{profile.about}</p>
    </>
  );
};
