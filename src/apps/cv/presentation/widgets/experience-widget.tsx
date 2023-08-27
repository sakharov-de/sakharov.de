import React from "react";
import { Profile } from "../../domain/models/profile.model";
import { useDomain } from "../hooks/useDomain";
import { WorkPositionRepository } from "../../domain/repositories/work-position.repository";
import { EmployerRepository } from "../../domain/repositories/employer.repository";
type Props = {
  profileId: Profile["id"];
};
export const ExperienceWidget: React.FC<Props> = (props) => {
  const domain = useDomain();
  const workPositionRepository = domain.getRepository(WorkPositionRepository);
  const employerRepository = domain.getRepository(EmployerRepository);
  const workPositions = workPositionRepository.findAllByProfileId(
    props.profileId
  );

  function renderWorkPositions() {
    return workPositions.map((workPosition) => {
      const employer = employerRepository.findOneById(workPosition.employerId);

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
