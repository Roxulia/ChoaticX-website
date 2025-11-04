import HttpClient from './HttpClient';

export default class FetchHttpClient extends HttpClient {
  constructor(base = '') {
    super();
    this.base = base;
  }

  async get(url) {
    const res = await fetch(this.base + url);
    if (!res.ok) throw new Error(await res.text());
    return res.json();
  }
}
