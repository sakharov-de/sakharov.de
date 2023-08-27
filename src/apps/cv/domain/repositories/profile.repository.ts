import { Profile } from "../models/profile.model";

export class ProfileRepository {
  storage = new Map<Profile["id"], Profile>();
  findOne(): Profile | null {
    return (
      (this.storage.entries().next().value &&
        this.storage.entries().next().value[1]) ||
      null
    );
  }
  save(profile: Profile): Profile {
    if (this.storage.has(profile.id)) {
      this.storage.delete(profile.id);
    }
    this.storage.set(profile.id, profile);

    return profile;
  }
}
