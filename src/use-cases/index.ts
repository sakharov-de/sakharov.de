import { CvUseCases } from "./cv.use-cases";
import { Domain } from "../domain";

export class UseCases {
  readonly cvUseCases: CvUseCases;
  constructor(private readonly domain: Domain) {
    this.cvUseCases = new CvUseCases(domain);
  }
}
