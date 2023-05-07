import { v4 as uuidv4 } from "uuid";
type Args = Partial<Pick<Employer, "id">> & Pick<Employer, "name">;
export class Employer {
  id: string;
  name: string;
  constructor(args: Args) {
    this.id = args.id || uuidv4();
    this.name = args.name;
  }
}
