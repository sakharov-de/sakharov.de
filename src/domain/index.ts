import { EducationalItemRepository } from "./repositories/educational-item.repository";
import { EmployerRepository } from "./repositories/employer.repository";
import { ProfileRepository } from "./repositories/profile.repository";
import { WorkPositionRepository } from "./repositories/work-position.repository";
import { CvService } from "./services/cv.service";
import { HttpClients } from "../api/http-clients";

export class Domain {
  // Repositories
  readonly educationalItemRepository: EducationalItemRepository;
  readonly employerRepository: EmployerRepository;
  readonly profileRepository: ProfileRepository;
  readonly workPositionRepository: WorkPositionRepository;
  // Services
  readonly cvService: CvService;

  constructor(private readonly httpClients: HttpClients) {
    // Repositories
    this.educationalItemRepository = new EducationalItemRepository();
    this.employerRepository = new EmployerRepository();
    this.profileRepository = new ProfileRepository();
    this.workPositionRepository = new WorkPositionRepository();
    // Services
    this.cvService = new CvService(httpClients.cvHttpClient);
  }
}
