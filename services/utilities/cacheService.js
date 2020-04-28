import httpClient from "../httpService";

class CacheService {
  clear() {
    return httpClient.get('/utility/clearcache');
  }
}

export default new CacheService();