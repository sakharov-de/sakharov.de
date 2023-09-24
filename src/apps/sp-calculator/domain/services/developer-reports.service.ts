import { Developer } from "../models/developer";
import { Sprint } from "../models/sprint";
import { DeveloperReportsRepository } from "../repositories/developer-reports.repository";
import { DeveloperReport } from "../models/developer-report";
import { SprintsRepository } from "../repositories/sprints.repository";
import { DeveloperReportsHelper } from "../helpers/developer-reports.helper";

export class DeveloperReportsService {
  constructor(
    private readonly developerReportsRepository: DeveloperReportsRepository,
    private readonly sprintsRepository: SprintsRepository,
    private readonly developerReportsHelper: DeveloperReportsHelper
  ) {}
  getHoursSumBy(entity: Developer | Sprint): number {
    return this.developerReportsHelper.calculateHoursSum(
      this.developerReportsRepository.findAllBy(entity)
    );
  }
  getStoryPointsSumBy(entity: Developer | Sprint): number {
    return this.developerReportsHelper.calculateStoryPointsSum(
      this.developerReportsRepository.findAllBy(entity)
    );
  }
  getStoryPointCost(developer: Developer, sprint: Sprint): number | null {
    const report = this.developerReportsRepository.findByDeveloperAndSprint(
      developer,
      sprint
    );

    if (!report) return null;

    return this.developerReportsHelper.calculateStoryPointCost(report);
  }
  getMedianOfStoryPointCostBy(entity: Developer | Sprint) {
    return this.developerReportsHelper.calculateMedianOfStoryPointCost(
      this.developerReportsRepository.findAllBy(entity)
    );
  }
  getMedianOfStoryPointCostByAllSprints() {
    const sprints = this.sprintsRepository.findAll();

    return (
      sprints.reduce((sum, sprint) => {
        return sum + (this.getMedianOfStoryPointCostBy(sprint) || 0);
      }, 0) / sprints.length
    );
  }
  getAverageStoryPointCostBy(entity: Developer | Sprint): number {
    let developerReports: DeveloperReport[] =
      this.developerReportsRepository.findAllBy(entity);

    return (
      developerReports.reduce((sum, report) => {
        return (
          sum +
          (this.developerReportsHelper.calculateStoryPointCost(report) || 0)
        );
      }, 0) / developerReports.length
    );
  }
  getAverageStoryPointCostByAllSprints() {
    const sprints = this.sprintsRepository.findAll();

    return (
      sprints.reduce((sum, sprint) => {
        return sum + this.getAverageStoryPointCostBy(sprint);
      }, 0) / sprints.length
    );
  }
}
