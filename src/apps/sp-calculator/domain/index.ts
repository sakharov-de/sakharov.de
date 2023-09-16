import { SprintsRepository } from "./repositories/sprints.repository";
import { DevelopersRepository } from "./repositories/developers.repository";
import { DeveloperReportsRepository } from "./repositories/developer-reports.repository";
import { DeveloperReportsService } from "./services/developer-reports.service";

type Repository =
  | SprintsRepository
  | DevelopersRepository
  | DeveloperReportsRepository;
type RepositoryConstructor = new (...args: any) => Repository;
type Service = DeveloperReportsService;
type ServiceConstructor = new (...args: any) => Service;
export class Domain {
  static instance: Domain;
  static getInstance(): Domain {
    if (!Domain.instance) {
      Domain.instance = new Domain();
    }
    return Domain.instance;
  }

  private readonly repositories = new Map<RepositoryConstructor, Repository>();
  private readonly services = new Map<ServiceConstructor, Service>();
  constructor() {
    // Repositories
    this.repositories.set(SprintsRepository, new SprintsRepository());
    this.repositories.set(DevelopersRepository, new DevelopersRepository());
    this.repositories.set(
      DeveloperReportsRepository,
      new DeveloperReportsRepository()
    );
    // Services
    this.services.set(
      DeveloperReportsService,
      new DeveloperReportsService(
        this.getRepository(DeveloperReportsRepository)
      )
    );
  }
  getRepository<T extends Repository>(repository: new (...args: any) => T): T {
    return this.repositories.get(repository) as T;
  }
  getService<T extends Service>(service: new (...args: any) => T): T {
    return this.services.get(service) as T;
  }
}
