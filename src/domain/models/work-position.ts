export class WorkPosition {
  constructor(args: {
    id: string;
    name: string;
    description: string;
    start: string;
    end: string;
    profileId: string;
    employerId: string;
  }) {
    this.id = args.id;
    this.name = args.name;
    this.description = args.description;
    this.start = args.start;
    this.end = args.end;
    this.profileId = args.profileId;
    this.employerId = args.employerId;
  }

  id: string;
  name: string;
  description: string;
  start: string;
  end: string;
  profileId: string;
  employerId: string;
}
