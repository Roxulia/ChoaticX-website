import React from "react";

export default function PredictionResult({ signal }) {
  if (!signal) return null;
  return (
    <div className="space-y-2">
      <div>Symbol: <strong>{signal.symbol}</strong></div>
      <div>Position: <strong>{signal.position}</strong></div>
      <div>Probability: <strong>{(signal.probability * 100).toFixed(1)}%</strong></div>
      <div>SL: <strong>{signal.sl}</strong> &nbsp; TP: <strong>{signal.tp}</strong></div>
      <div className="text-xs text-slate-400">
        Generated: {new Date(signal.timestamp).toLocaleString()}
      </div>
    </div>
  );
}
