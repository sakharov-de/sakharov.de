import { DeveloperReport } from "../models/developer-report";

export class DeveloperReportsHelper {
  calculateStoryPointCost(
    report: Pick<DeveloperReport, "hours" | "storyPoints">
  ): number | null {
    if (!report.hours || !report.storyPoints) return null;

    return report.hours / report.storyPoints;
  }
  calculateHoursSum(developerReports: DeveloperReport[]): number {
    return developerReports.reduce((sum, report) => {
      return sum + report.hours;
    }, 0);
  }
  calculateStoryPointsSum(developerReports: DeveloperReport[]): number {
    return developerReports.reduce((sum, report) => {
      return sum + report.storyPoints;
    }, 0);
  }
  calculateMedianOfStoryPointCost(developerReports: DeveloperReport[]) {
    return this.calculateStoryPointCost({
      hours: this.calculateHoursSum(developerReports),
      storyPoints: this.calculateStoryPointsSum(developerReports),
    });
  }
  filterByDeveloperId(
    developerId: string,
    developerReports: DeveloperReport[]
  ) {
    return developerReports.filter(
      (report) => report.developerId === developerId
    );
  }
  filterBySprintId(sprintId: string, developerReports: DeveloperReport[]) {
    return developerReports.filter((report) => report.sprintId === sprintId);
  }
  findByDeveloperIdAndSprintId(
    developerId: string,
    sprintId: string,
    developerReports: DeveloperReport[]
  ) {
    return developerReports.find(
      (report) =>
        report.developerId === developerId && report.sprintId === sprintId
    );
  }
}
