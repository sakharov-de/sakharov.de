import { Developer } from "../models/developer";
import { Sprint } from "../models/sprint";
import { DeveloperReportsRepository } from "../repositories/developer-reports.repository";
import { DeveloperReport } from "../models/developer-report";
import { SprintsRepository } from "../repositories/sprints.repository";

export class DeveloperReportsService {
  constructor(
    private readonly developerReportsRepository: DeveloperReportsRepository,
    private readonly sprintsRepository: SprintsRepository
  ) {}
  getHoursSumFromBy(entity: Developer | Sprint): number {
    let developerReports: DeveloperReport[] = [];

    if (entity instanceof Developer)
      developerReports =
        this.developerReportsRepository.findAllByDeveloper(entity);
    if (entity instanceof Sprint)
      developerReports =
        this.developerReportsRepository.findAllBySprint(entity);

    return this.calculateHoursSum(developerReports);
  }
  getStoryPointsSumBy(entity: Developer | Sprint): number {
    let developerReports: DeveloperReport[] = [];

    if (entity instanceof Developer)
      developerReports =
        this.developerReportsRepository.findAllByDeveloper(entity);
    if (entity instanceof Sprint)
      developerReports =
        this.developerReportsRepository.findAllBySprint(entity);

    return this.calculateStoryPointsSum(developerReports);
  }
  getStoryPointCost(developer: Developer, sprint: Sprint): number | null {
    const report = this.developerReportsRepository.findByDeveloperAndSprint(
      developer,
      sprint
    );

    if (!report || !report.hours || !report.storyPoints) return null;

    return report.hours / report.storyPoints;
  }
  getAverageStoryPointCostBy(entity: Developer | Sprint): number {
    return this.getHoursSumFromBy(entity) / this.getStoryPointsSumBy(entity);
  }
  getAverageStoryPointCostByAllSprints() {
    const sprints = this.sprintsRepository.findAll();

    return (
      sprints.reduce((sum, sprint) => {
        return sum + this.getAverageStoryPointCostBy(sprint);
      }, 0) / sprints.length
    );
  }
  getSubjectAverageStoryPointCostBy(entity: Developer | Sprint): number {
    let developerReports: DeveloperReport[] = [];

    if (entity instanceof Developer)
      developerReports =
        this.developerReportsRepository.findAllByDeveloper(entity);
    if (entity instanceof Sprint)
      developerReports =
        this.developerReportsRepository.findAllBySprint(entity);

    return (
      developerReports.reduce((sum, report) => {
        if (!report.hours || !report.storyPoints) return sum;
        return sum + report.hours / report.storyPoints;
      }, 0) / developerReports.length
    );
  }
  getSubjectAverageStoryPointCostByAllSprints() {
    const sprints = this.sprintsRepository.findAll();

    return (
      sprints.reduce((sum, sprint) => {
        return sum + this.getSubjectAverageStoryPointCostBy(sprint);
      }, 0) / sprints.length
    );
  }

  private calculateHoursSum(developerReports: DeveloperReport[]): number {
    return developerReports.reduce((sum, report) => {
      return sum + report.hours;
    }, 0);
  }
  private calculateStoryPointsSum(developerReports: DeveloperReport[]): number {
    return developerReports.reduce((sum, report) => {
      return sum + report.storyPoints;
    }, 0);
  }
}
