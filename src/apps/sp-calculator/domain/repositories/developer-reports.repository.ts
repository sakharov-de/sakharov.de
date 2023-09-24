import { DeveloperReport } from "../models/developer-report";
import { BaseRepository } from "../../../../core/_base.repository";
import { Developer } from "../models/developer";
import { Sprint } from "../models/sprint";
import { DeveloperReportsHelper } from "../helpers/developer-reports.helper";

export class DeveloperReportsRepository extends BaseRepository<DeveloperReport> {
  constructor(private readonly developerReportsHelper: DeveloperReportsHelper) {
    super();
  }
  findAllBy(entity: Developer | Sprint) {
    if (entity instanceof Developer)
      return this.developerReportsHelper.filterByDeveloperId(
        entity.id,
        this.findAll()
      );

    return this.developerReportsHelper.filterBySprintId(
      entity.id,
      this.findAll()
    );
  }
  findByDeveloperAndSprint(developer: Developer, sprint: Sprint) {
    return this.developerReportsHelper.findByDeveloperIdAndSprintId(
      developer.id,
      sprint.id,
      this.findAll()
    );
  }
}
