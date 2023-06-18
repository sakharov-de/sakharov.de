import { CvHttpClient } from "../../api/http-clients/cv.http-client";

export class CvService {
  constructor(private readonly cvHttpClient: CvHttpClient) {}

  fetchProfile() {
    const promise = this.cvHttpClient.getProfileList();
    promise.then(console.log).catch(console.error);
    return promise;
  }
}
