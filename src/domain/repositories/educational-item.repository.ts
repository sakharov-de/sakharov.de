import { EducationalItem } from "../models/educational-item.model";
import { Profile } from "../models/profile.model";

export class EducationalItemRepository {
  storage = new Map<EducationalItem["id"], EducationalItem>();
  findOneById(id: EducationalItem["id"]) {
    return this.storage.get(id) || null;
  }
  findAllByProfileId(profileId: Profile["id"]) {
    const result: EducationalItem[] = [];
    this.storage.forEach((educationalItem) => {
      if (educationalItem.profileId !== profileId) return;

      result.push(educationalItem);
    });

    return result;
  }
  save(educationalItem: EducationalItem) {
    if (this.storage.has(educationalItem.id)) {
      this.storage.delete(educationalItem.id);
    }
    this.storage.set(educationalItem.id, educationalItem);

    return educationalItem;
  }
}
