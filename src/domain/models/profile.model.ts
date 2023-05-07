import { v4 as uuidv4 } from "uuid";
type Args = Partial<Pick<Profile, "id">> & Pick<Profile, "name" | "about">;
export class Profile {
  id: string;
  name: string;
  about: string;
  constructor(args: Args) {
    this.id = args.id || uuidv4();
    this.name = args.name;
    this.about = args.about;
  }
}
