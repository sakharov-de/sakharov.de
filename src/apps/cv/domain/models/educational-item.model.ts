import { v4 as uuidv4 } from "uuid";
type Args = Partial<Pick<EducationalItem, "id">> &
  Pick<
    EducationalItem,
    | "name"
    | "description"
    | "start"
    | "end"
    | "grade"
    | "specialization"
    | "profileId"
  >;
export class EducationalItem {
  id: string;
  name: string;
  description: string;
  start: string;
  end: string;
  grade: string;
  specialization: string;
  profileId: string;
  constructor(args: Args) {
    this.id = args.id || uuidv4();
    this.name = args.name;
    this.description = args.description;
    this.start = args.start;
    this.end = args.end;
    this.grade = args.grade;
    this.specialization = args.specialization;
    this.profileId = args.profileId;
  }
}
