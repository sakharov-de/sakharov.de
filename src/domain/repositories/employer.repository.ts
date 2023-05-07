import { Employer } from "../models/employer.model";

export class EmployerRepository {
  storage = new Map<Employer["id"], Employer>();
  findOneById(id: Employer["id"]) {
    return this.storage.get(id) || null;
  }
  save(employer: Employer) {
    if (this.storage.has(employer.id)) {
      this.storage.delete(employer.id);
    }
    this.storage.set(employer.id, employer);

    return employer;
  }
}
