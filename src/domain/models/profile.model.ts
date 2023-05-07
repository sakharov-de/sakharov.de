export class Profile {
  constructor(args: Pick<Profile, "id" | "name" | "about">) {
    this.id = args.id;
    this.name = args.name;
    this.about = args.about;
  }

  id: string;
  name: string;
  about: string;
}
