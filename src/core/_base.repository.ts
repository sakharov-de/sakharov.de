interface Base {
  id: string;
}

export class BaseRepository<T extends Base> {
  private readonly storage = new Map<T["id"], T>();

  findAll() {
    return Array.from(this.storage.values());
  }

  findById(id: T["id"]) {
    return this.storage.get(id);
  }
  save(model: T) {
    if (this.storage.has(model.id)) {
      this.storage.delete(model.id);
    }
    this.storage.set(model.id, model);

    return model;
  }
}
