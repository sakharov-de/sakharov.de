import React from "react";
import { Profile } from "../../domain/models/profile.model";
import { useDomain } from "../hooks/useDomain";
import { EducationalItemRepository } from "../../domain/repositories/educational-item.repository";
type Props = {
  profileId: Profile["id"];
};
export const EducationWidget: React.FC<Props> = (props) => {
  const domain = useDomain();
  const educationalItemRepository = domain.getRepository(
    EducationalItemRepository
  );
  const educationalItems = educationalItemRepository.findAllByProfileId(
    props.profileId
  );
  function renderEducationalItems() {
    return educationalItems.map((educationalItem) => {
      return (
        <section key={educationalItem.id}>
          <h3>{educationalItem.name}</h3>
          <div>{`${educationalItem.start} - ${educationalItem.end}`}</div>
          <p>{educationalItem.description}</p>
        </section>
      );
    });
  }

  return <>{renderEducationalItems()}</>;
};
