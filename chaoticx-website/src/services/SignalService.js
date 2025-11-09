// Single Responsibility: Handles only signal fetching/mapping
export default class SignalService {
  constructor(httpClient) {
    this.http = httpClient;
  }

  async getTrialSignal(formData = { symbol: 'BTCUSDT' }) {
    try {
      const res = await this.http.post('/predict',formData);

      const data = await res.json();
      if (res.ok) {
        return this._mapSignal(data);
      } else {
        throw new Error(`❌ Error: ${data.error || "Failed"}`);
      }
    } catch (err) {
      throw new Error(err.message);
      
    }
  }

  _mapSignal(raw) {
    return {
      symbol: raw.symbol,
      position: raw.position,
      probability: Number(raw.probability ?? 0.5),
      sl: raw.sl,
      tp: raw.tp,
      timestamp: raw.timestamp,
    };
  }
}
