import { SprintsRepository } from "./repositories/sprints.repository";
import { DevelopersRepository } from "./repositories/developers.repository";
import { DeveloperReportsRepository } from "./repositories/developer-reports.repository";

type Repository =
  | SprintsRepository
  | DevelopersRepository
  | DeveloperReportsRepository;
type RepositoryConstructor = new (...args: any) => Repository;
export class Domain {
  private readonly repositories = new Map<RepositoryConstructor, Repository>();
  constructor() {
    // Repositories
    this.repositories.set(SprintsRepository, new SprintsRepository());
    this.repositories.set(DevelopersRepository, new DevelopersRepository());
    this.repositories.set(
      DeveloperReportsRepository,
      new DeveloperReportsRepository()
    );
  }
  getRepository<T extends Repository>(repository: new (...args: any) => T): T {
    return this.repositories.get(repository) as T;
  }
}
