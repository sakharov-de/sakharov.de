import { EducationalItem } from "../models/educational-item.model";

export class EmployerRepository {
  storage = new Map<EducationalItem["id"], EducationalItem>();
  getById(id: EducationalItem["id"]) {
    return this.storage.get(id) || null;
  }
  save(educationalItem: EducationalItem) {
    if (this.storage.has(educationalItem.id)) {
      this.storage.delete(educationalItem.id);
    }
    this.storage.set(educationalItem.id, educationalItem);

    return this.getById(educationalItem.id);
  }
}
