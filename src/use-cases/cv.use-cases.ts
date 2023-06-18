import profileData from "../data/profile.json";
import { Domain } from "../domain";
import { Profile } from "../domain/models/profile.model";
import { Employer } from "../domain/models/employer.model";
import { WorkPosition } from "../domain/models/work-position.model";
import { EducationalItem } from "../domain/models/educational-item.model";

export class CvUseCases {
  constructor(private readonly domain: Domain) {}
  initCvPage() {
    this.domain.cvService.fetchProfile();
    // Fill data storage
    const profile = this.domain.profileRepository.save(
      new Profile({
        name: profileData.name,
        about: profileData.about,
      })
    );
    profileData.education.forEach((educationalData) =>
      this.domain.educationalItemRepository.save(
        new EducationalItem({ ...educationalData, profileId: profile.id })
      )
    );
    profileData.experience.forEach((experienceData) => {
      const employer = this.domain.employerRepository.save(
        new Employer(experienceData)
      );
      experienceData.positions.forEach((positionData) =>
        this.domain.workPositionRepository.save(
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
