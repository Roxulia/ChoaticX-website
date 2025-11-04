// Abstract interface for HTTP clients
export default class HttpClient {
  async get(url) {
    throw new Error('Not implemented');
  }
}
