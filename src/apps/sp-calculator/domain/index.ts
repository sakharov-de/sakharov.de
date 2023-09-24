import { SprintsRepository } from "./repositories/sprints.repository";
import { DevelopersRepository } from "./repositories/developers.repository";
import { DeveloperReportsRepository } from "./repositories/developer-reports.repository";
import { DeveloperReportsService } from "./services/developer-reports.service";
import { DeveloperReportsHelper } from "./helpers/developer-reports.helper";

type Repository =
  | SprintsRepository
  | DevelopersRepository
  | DeveloperReportsRepository;
type RepositoryConstructor = new (...args: any) => Repository;
type Service = DeveloperReportsService;
type ServiceConstructor = new (...args: any) => Service;
type Helper = DeveloperReportsHelper;
type HelperConstructor = new (...args: any) => Helper;
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
  private readonly helpers = new Map<HelperConstructor, Helper>();
  constructor() {
    // Helpers
    this.helpers.set(DeveloperReportsHelper, new DeveloperReportsHelper());
    // Repositories
    this.repositories.set(SprintsRepository, new SprintsRepository());
    this.repositories.set(DevelopersRepository, new DevelopersRepository());
    this.repositories.set(
      DeveloperReportsRepository,
      new DeveloperReportsRepository(this.getHelper(DeveloperReportsHelper))
    );
    // Services
    this.services.set(
      DeveloperReportsService,
      new DeveloperReportsService(
        this.getRepository(DeveloperReportsRepository),
        this.getRepository(SprintsRepository),
        this.getHelper(DeveloperReportsHelper)
      )
    );
  }
  getRepository<T extends Repository>(repository: new (...args: any) => T): T {
    return this.repositories.get(repository) as T;
  }
  getService<T extends Service>(service: new (...args: any) => T): T {
    return this.services.get(service) as T;
  }
  getHelper<T extends Helper>(service: new (...args: any) => T): T {
    return this.helpers.get(service) as T;
  }
}
