import { Profile } from "../models/profile.model";

export class ProfileRepository {
  storage = new Map<Profile["id"], Profile>();
  getById(id: Profile["id"]) {
    return this.storage.get(id) || null;
  }
  save(profile: Profile): Profile {
    if (this.storage.has(profile.id)) {
      this.storage.delete(profile.id);
    }
    this.storage.set(profile.id, profile);

    return profile;
  }
}
