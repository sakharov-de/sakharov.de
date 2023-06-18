export class Config {
  getCmsBaseUrl() {
    if (!process.env.REACT_APP_CMS_BASE_URL)
      throw new Error("process.env.REACT_APP_CMS_BASE_URL is not defined");
    return process.env.REACT_APP_CMS_BASE_URL;
  }
  getCmsCvApiToken() {
    if (!process.env.REACT_APP_CMS_CV_API_TOKEN)
      throw new Error("process.env.REACT_APP_CMS_CV_API_TOKEN is not defined");
    return process.env.REACT_APP_CMS_CV_API_TOKEN;
  }
}

export const config = new Config();
