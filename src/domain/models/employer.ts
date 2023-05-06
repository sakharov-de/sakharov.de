export class Employer {
  constructor(args: { id: string; name: string; about: string }) {
    this.id = args.id;
    this.name = args.name;
  }

  id: string;
  name: string;
}
