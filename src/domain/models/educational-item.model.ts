export class EducationalItem {
  constructor(
    args: Pick<
      EducationalItem,
      | "id"
      | "name"
      | "description"
      | "start"
      | "end"
      | "grade"
      | "specialization"
      | "profileId"
    >
  ) {
    this.id = args.id;
    this.name = args.name;
    this.description = args.description;
    this.start = args.start;
    this.end = args.end;
    this.grade = args.grade;
    this.specialization = args.specialization;
    this.profileId = args.profileId;
  }

  id: string;
  name: string;
  description: string;
  start: string;
  end: string;
  grade: string;
  specialization: string;
  profileId: string;
}
