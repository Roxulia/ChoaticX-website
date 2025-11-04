import React, { useState } from 'react';
import Card from '../components/Card';
import { useServices } from '../hooks/useService';

function PredictionForm({ symbol, setSymbol, onRun, loading }) {
  return (
    <div className="flex gap-2 items-center">
      <input
        value={symbol}
        onChange={(e) => setSymbol(e.target.value.toUpperCase())}
        className="bg-white/5 rounded px-3 py-2"
        placeholder="Symbol e.g. BTCUSDT"
      />
      <select className="bg-white/5 rounded px-3 py-2" defaultValue="1h">
        <option value="15m">15m</option>
        <option value="1h">1h</option>
        <option value="4h">4h</option>
        <option value="1d">1d</option>
      </select>
      <button
        onClick={onRun}
        disabled={loading}
        className="px-4 py-2 rounded bg-cyan-500 text-black font-semibold disabled:opacity-50"
      >
        {loading ? 'Running...' : 'Run'}
      </button>
    </div>
  );
}

function PredictionResult({ signal }) {
  if (!signal) return null;
  return (
    <div className="space-y-2">
      <div>Symbol: <strong>{signal.symbol}</strong></div>
      <div>Position: <strong>{signal.position}</strong></div>
      <div>Probability: <strong>{(signal.probability * 100).toFixed(1)}%</strong></div>
      <div>SL: <strong>{signal.sl}</strong> &nbsp; TP: <strong>{signal.tp}</strong></div>
      <div className="text-xs text-slate-400">Generated: {new Date(signal.timestamp).toLocaleString()}</div>
    </div>
  );
}

export default function TrialPredictionPage() {
  const { signalService } = useServices();
  const [symbol, setSymbol] = useState('BTCUSDT');
  const [loading, setLoading] = useState(false);
  const [signal, setSignal] = useState(null);
  const [error, setError] = useState(null);

  const run = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await signalService.getTrialSignal(symbol);
      setSignal(res);
    } catch (err) {
      setError(err.message || 'Failed to fetch signal');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Trial Prediction</h1>

      <Card>
        <PredictionForm symbol={symbol} setSymbol={setSymbol} onRun={run} loading={loading} />
      </Card>

      <div className="mt-6">
        <Card title="Result">
          {error && <div className="text-red-400">{error}</div>}
          {!signal && !error && <div className="text-slate-400">No result yet. Click Run to generate a trial signal.</div>}
          {signal && <PredictionResult signal={signal} />}
        </Card>
      </div>

      <div className="mt-4 text-sm text-slate-400">
        Note: Trial Prediction shows a **limited** subset of ChaoticX features for demo purposes.
      </div>
    </div>
  );
}
