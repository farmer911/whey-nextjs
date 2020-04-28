import httpClient from "./httpService";

export default class BaseCrudService {
  _baseUrl = '';

  constructor(baseUrl) {
    this._baseUrl = baseUrl;
    this.httpClient = httpClient;
  }

  async getAll(searchModel = {}, __cookies = {}) {
    return await this.httpClient.get(this._baseUrl, {
      params: searchModel,
      headers: __cookies
    });
  }

  async create(postModel) {
    return await this.httpClient.post(this._baseUrl, postModel);
  }

  async update(postModel) {
    return await this.httpClient.put(this._baseUrl, postModel);
  }

  async delete(id) {
    return await this.httpClient.delete(this._baseUrl + id);
  }

  async getById(id, cookies = {}) {
    return await this.httpClient.get(this._baseUrl + id, { headers: { ...cookies } })
  }
}
