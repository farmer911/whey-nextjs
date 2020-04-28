import httpClient from "../httpService";

class LanguageService {
  fetchLanguages() {
    return httpClient.get("/LanguageHelpers/GetAvailableLanguages")
  }
}

export default new LanguageService();