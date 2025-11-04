export async function getBots() {
  // replace with real fetch: return await fetch('/api/bots').then(r => r.json());
  // mock:
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 'grid-mean', name: 'GridMean Bot', description: 'Grid mean reversion, best in ranges.', strategy: 'Grid/Mean' },
        { id: 'trend-follower', name: 'TrendFollower', description: 'Multi-timeframe trend follower.', strategy: 'Trend' },
        { id: 'scalper-x', name: 'ScalperX', description: 'High-frequency scalping assistant.', strategy: 'Scalping' },
      ]);
    }, 250);
  });
}
