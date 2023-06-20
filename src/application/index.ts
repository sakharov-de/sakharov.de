import { EducationalItemRepository } from "../domain/repositories/educational-item.repository";
import { EmployerRepository } from "../domain/repositories/employer.repository";
import { ProfileRepository } from "../domain/repositories/profile.repository";
import { WorkPositionRepository } from "../domain/repositories/work-position.repository";
import { CvService } from "../domain/services/cv.service";
import { InitCvPageUseCase } from "./use-cases/init-cv-page.use-case";
import { Domain } from "../domain";

type UseCase = InitCvPageUseCase;
type UseCaseConstructor = new (...args: any) => UseCase;

export class Application {
  private readonly useCases = new Map<UseCaseConstructor, UseCase>();
  constructor(private readonly domain: Domain) {
    // Use-cases
    this.useCases.set(
      InitCvPageUseCase,
      new InitCvPageUseCase(
        domain.getRepository(EducationalItemRepository),
        domain.getRepository(EmployerRepository),
        domain.getRepository(ProfileRepository),
        domain.getRepository(WorkPositionRepository),
        domain.getService(CvService)
      )
    );
  }
  getUseCase<T extends UseCase>(useCase: new (...args: any) => T): T {
    return this.useCases.get(useCase) as T;
  }
}
