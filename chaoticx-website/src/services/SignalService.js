// Single Responsibility: Handles only signal fetching/mapping
export default class SignalService {
  constructor(httpClient) {
    this.http = httpClient;
  }

  async getTrialSignal(symbol = 'BTCUSDT') {
    try {
      const data = await this.http.get(`/signals/trial?symbol=${symbol}`);
      return this._mapSignal(data);
    } catch (err) {
      // fallback mock data
      return this._mapSignal({
        symbol,
        position: 'Long',
        probability: 0.68,
        sl: 60000,
        tp: 68000,
        timestamp: Date.now(),
      });
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
