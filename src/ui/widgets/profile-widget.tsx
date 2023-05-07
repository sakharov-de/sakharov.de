import React from "react";
import { Profile } from "../../domain/models/profile.model";
import { useDomain } from "../hooks/useDomain";
type Props = {
  profileId: Profile["id"];
};
export const ProfileWidget: React.FC<Props> = (props) => {
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
