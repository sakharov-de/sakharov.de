import { v4 as uuidv4 } from "uuid";
type Args = Partial<Pick<WorkPosition, "id">> &
  Pick<
    WorkPosition,
    "name" | "description" | "start" | "end" | "profileId" | "employerId"
  >;
export class WorkPosition {
  id: string;
  name: string;
  description: string;
  start: string;
  end: string;
  profileId: string;
  employerId: string;
  constructor(args: Args) {
    this.id = args.id || uuidv4();
    this.name = args.name;
    this.description = args.description;
    this.start = args.start;
    this.end = args.end;
    this.profileId = args.profileId;
    this.employerId = args.employerId;
  }
}
