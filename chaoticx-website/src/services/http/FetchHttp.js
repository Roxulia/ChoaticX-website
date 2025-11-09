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

  async post(url, body = {}) {
    const res = await fetch(this.base + url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(errorText || `POST request failed: ${res.status}`);
    }

    return res.json();
  }
}
