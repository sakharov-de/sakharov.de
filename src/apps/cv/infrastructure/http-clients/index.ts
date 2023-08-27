import { CvHttpClient } from "./cv.http-client";
import { Config } from "../../../../core/config";

export class HttpClients {
  readonly cvHttpClient: CvHttpClient;
  constructor(private readonly config: Config) {
    this.cvHttpClient = new CvHttpClient(config);
  }
}
