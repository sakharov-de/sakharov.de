export class Employer {
  constructor(args: Pick<Employer, "id" | "name">) {
    this.id = args.id;
    this.name = args.name;
  }

  id: string;
  name: string;
}
