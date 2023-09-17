import { faker } from "@faker-js/faker";
import { Domain } from "../domain";
import { Developer } from "../domain/models/developer";
import { DevelopersRepository } from "../domain/repositories/developers.repository";
import { DeveloperReport } from "../domain/models/developer-report";
import { Sprint } from "../domain/models/sprint";
import { SprintsRepository } from "../domain/repositories/sprints.repository";
import { DeveloperReportsRepository } from "../domain/repositories/developer-reports.repository";

// Developers
function createRandomDeveloper() {
  return new Developer(undefined, faker.person.fullName());
}
function fillFakeDevelopers(domain: Domain) {
  const developersRepository = domain.getRepository(DevelopersRepository);

  while (developersRepository.findAll().length < 2) {
    developersRepository.save(createRandomDeveloper());
  }
}

// Sprints
function createRandomSprint(sprintNumber: number) {
  return new Sprint(undefined, "Sprint " + sprintNumber);
}
function fillFakeSprints(domain: Domain) {
  const sprintsRepository = domain.getRepository(SprintsRepository);

  while (sprintsRepository.findAll().length < 2) {
    sprintsRepository.save(
      createRandomSprint(sprintsRepository.findAll().length + 1)
    );
  }
}

// Developer Reports
function createRandomDeveloperReport(developer: Developer, sprint: Sprint) {
  return new DeveloperReport(
    undefined,
    sprint.id,
    developer.id,
    faker.number.int({ min: 1, max: 40 }),
    faker.number.int(13)
  );
}
function fillFakeDeveloperReports(domain: Domain) {
  const developerReportsRepository = domain.getRepository(
    DeveloperReportsRepository
  );
  const developersRepository = domain.getRepository(DevelopersRepository);
  const sprintsRepository = domain.getRepository(SprintsRepository);

  for (const sprint of sprintsRepository.findAll()) {
    for (const developer of developersRepository.findAll()) {
      if (
        developerReportsRepository
          .findAll()
          .find(
            (report) =>
              report.developerId === developer.id &&
              report.sprintId === sprint.id
          )
      )
        return;

      developerReportsRepository.save(
        createRandomDeveloperReport(developer, sprint)
      );
    }
  }
}

export function fillFakeData(domain: Domain) {
  fillFakeDevelopers(domain);
  fillFakeSprints(domain);
  fillFakeDeveloperReports(domain);
}
