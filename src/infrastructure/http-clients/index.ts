import { CvHttpClient } from "./cv.http-client";
import { Config } from "../../config";

export class HttpClients {
  readonly cvHttpClient: CvHttpClient;
  constructor(private readonly config: Config) {
    this.cvHttpClient = new CvHttpClient(config);
  }
}
