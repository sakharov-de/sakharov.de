import { v4 as uuidv4 } from "uuid";

export class Developer {
  constructor(
    public readonly id: string = uuidv4(),
    public readonly name: string
  ) {}
}
