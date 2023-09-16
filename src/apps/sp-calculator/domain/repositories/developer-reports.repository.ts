import { DeveloperReport } from "../models/developer-report";
import { BaseRepository } from "../../../../core/_base.repository";
import { Developer } from "../models/developer";
import { Sprint } from "../models/sprint";

export class DeveloperReportsRepository extends BaseRepository<DeveloperReport> {
  findAllByDeveloper(developer: Developer) {
    return this.findAll().filter(
      (report) => report.developerId === developer.id
    );
  }
  findAllBySprint(sprint: Sprint) {
    return this.findAll().filter((report) => report.sprintId === sprint.id);
  }
  findByDeveloperAndSprint(developer: Developer, sprint: Sprint) {
    return this.findAll().find(
      (report) =>
        report.developerId === developer.id && report.sprintId === sprint.id
    );
  }
}
