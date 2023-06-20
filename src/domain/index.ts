import { EducationalItemRepository } from "./repositories/educational-item.repository";
import { EmployerRepository } from "./repositories/employer.repository";
import { ProfileRepository } from "./repositories/profile.repository";
import { WorkPositionRepository } from "./repositories/work-position.repository";
import { CvService } from "./services/cv.service";
import { HttpClients } from "../infrastructure/http-clients";

type Repository =
  | EducationalItemRepository
  | EmployerRepository
  | ProfileRepository
  | WorkPositionRepository;
type RepositoryConstructor = new (...args: any) => Repository;
type Service = CvService;
type ServiceConstructor = new (...args: any) => Service;

export class Domain {
  private readonly repositories = new Map<RepositoryConstructor, Repository>();
  private readonly services = new Map<ServiceConstructor, Service>();
  constructor(private readonly httpClients: HttpClients) {
    // Repositories
    this.repositories.set(
      EducationalItemRepository,
      new EducationalItemRepository()
    );
    this.repositories.set(EmployerRepository, new EmployerRepository());
    this.repositories.set(ProfileRepository, new ProfileRepository());
    this.repositories.set(WorkPositionRepository, new WorkPositionRepository());
    // Services
    this.services.set(CvService, new CvService(httpClients.cvHttpClient));
  }
  getRepository<T extends Repository>(repository: new (...args: any) => T): T {
    return this.repositories.get(repository) as T;
  }
  getService<T extends Service>(service: new (...args: any) => T): T {
    return this.services.get(service) as T;
  }
}
