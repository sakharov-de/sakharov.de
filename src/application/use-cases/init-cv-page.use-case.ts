import profileData from "../../infrastructure/data/profile.json";
import { Profile } from "../../domain/models/profile.model";
import { Employer } from "../../domain/models/employer.model";
import { WorkPosition } from "../../domain/models/work-position.model";
import { EducationalItem } from "../../domain/models/educational-item.model";
import { ProfileRepository } from "../../domain/repositories/profile.repository";
import { EducationalItemRepository } from "../../domain/repositories/educational-item.repository";
import { EmployerRepository } from "../../domain/repositories/employer.repository";
import { CvService } from "../../domain/services/cv.service";
import { WorkPositionRepository } from "../../domain/repositories/work-position.repository";

export class InitCvPageUseCase {
  constructor(
    // Repositories
    private readonly educationalItemRepository: EducationalItemRepository,
    private readonly employerRepository: EmployerRepository,
    private readonly profileRepository: ProfileRepository,
    private readonly workPositionRepository: WorkPositionRepository,
    // Services
    private readonly cvService: CvService
  ) {}
  execute() {
    this.cvService.fetchProfile();
    // Fill data storage
    const profile = this.profileRepository.save(
      new Profile({
        name: profileData.name,
        about: profileData.about,
      })
    );
    profileData.education.forEach((educationalData) =>
      this.educationalItemRepository.save(
        new EducationalItem({ ...educationalData, profileId: profile.id })
      )
    );
    profileData.experience.forEach((experienceData) => {
      const employer = this.employerRepository.save(
        new Employer(experienceData)
      );
      experienceData.positions.forEach((positionData) =>
        this.workPositionRepository.save(
          new WorkPosition({
            ...positionData,
            employerId: employer.id,
            profileId: profile.id,
          })
        )
      );
    });
  }
}
