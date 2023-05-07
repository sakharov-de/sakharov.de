import { WorkPosition } from "../models/work-position.model";
import { Profile } from "../models/profile.model";
import { EducationalItem } from "../models/educational-item.model";

export class WorkPositionRepository {
  storage = new Map<WorkPosition["id"], WorkPosition>();
  findOneById(id: WorkPosition["id"]) {
    return this.storage.get(id) || null;
  }
  findAllByProfileId(profileId: Profile["id"]) {
    const result: WorkPosition[] = [];
    this.storage.forEach((workPosition) => {
      if (workPosition.profileId !== profileId) return;

      result.push(workPosition);
    });

    return result;
  }
  save(workPosition: WorkPosition) {
    if (this.storage.has(workPosition.id)) {
      this.storage.delete(workPosition.id);
    }
    this.storage.set(workPosition.id, workPosition);

    return workPosition;
  }
}
