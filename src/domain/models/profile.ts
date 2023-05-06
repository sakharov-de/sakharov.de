export class Profile {
  constructor(args: { id: string; name: string; about: string }) {
    this.id = args.id;
    this.name = args.name;
    this.about = args.about;
  }

  id: string;
  name: string;
  about: string;
}
