import { v4 as uuidv4 } from "uuid";

export class DeveloperReport {
  constructor(
    public readonly id: string = uuidv4(),
    public readonly sprintId: string,
    public readonly developerId: string,
    public readonly hours: number,
    public readonly storyPoints: number
  ) {}
}
