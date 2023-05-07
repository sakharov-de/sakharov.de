import { WorkPosition } from "../models/work-position.model";

export class WorkPositionRepository {
  storage = new Map<WorkPosition["id"], WorkPosition>();
  getById(id: WorkPosition["id"]) {
    return this.storage.get(id) || null;
  }
  save(workPosition: WorkPosition) {
    if (this.storage.has(workPosition.id)) {
      this.storage.delete(workPosition.id);
    }
    this.storage.set(workPosition.id, workPosition);

    return workPosition;
  }
}
