import React from "react";
import { Profile } from "../../domain/models/profile.model";
import { useDomain } from "../hooks/useDomain";
type Props = {
  profileId: Profile["id"];
};
export const ExperienceWidget: React.FC<Props> = (props) => {
  const domain = useDomain();
  const workPositions = domain.workPositionRepository.findAllByProfileId(
    props.profileId
  );

  function renderWorkPositions() {
    return workPositions.map((workPosition) => {
      const employer = domain.employerRepository.findOneById(
        workPosition.employerId
      );

      return (
        <section key={workPosition.id}>
          <h3>{workPosition.name}</h3>
          {employer && <div>{employer.name}</div>}
          <div>{`${workPosition.start} - ${workPosition.end}`}</div>
          <p>{workPosition.description}</p>
        </section>
      );
    });
  }

  return <>{renderWorkPositions()}</>;
};
