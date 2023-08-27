import { DeveloperReport } from "../apps/sp-calculator/domain/models/developer-report";

interface Base {
  id: string;
}

export class BaseRepository<T extends Base> {
  private readonly storage = new Map<T["id"], DeveloperReport>();

  findById(id: DeveloperReport["id"]) {
    return this.storage.get(id);
  }
  save(model: DeveloperReport) {
    if (this.storage.has(model.id)) {
      this.storage.delete(model.id);
    }
    this.storage.set(model.id, model);

    return model;
  }
}
