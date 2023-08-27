import { Config } from "../../../../core/config";

export class CvHttpClient {
  private readonly baseUrl: string;
  private readonly apiToken: string;
  constructor(private readonly config: Config) {
    this.baseUrl = config.getCmsBaseUrl();
    this.apiToken = config.getCmsCvApiToken();
  }
  getProfileList() {
    const url = new URL(this.baseUrl + "/api/cv-profiles");
    const headers = new Headers();
    headers.set("Authorization", `Bearer ${this.apiToken}`);

    return fetch(url, { headers }).then((response) => response.json());
  }
}
