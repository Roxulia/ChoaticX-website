function TrialPredictionPage() {
setLoading(true);
setError(null);
try {
const sig = await signalService.getTrialSignal(symbol);
setSignal(sig);
} catch (err) {
setError(err.message || 'Failed to fetch');
} finally {
setLoading(false);
}
}


useEffect(() => {
// run on first load for quick demo
runTrial();
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);


return (
<main className="max-w-4xl mx-auto p-6">
<div className="flex justify-between items-center mb-6">
<h2 className="text-2xl font-bold">Trial Prediction</h2>
<div className="flex gap-2">
<input className="bg-white/5 rounded px-3 py-1" value={symbol} onChange={(e)=>setSymbol(e.target.value)} />
<button className="px-3 py-1 rounded bg-cyan-500 text-black" onClick={runTrial} disabled={loading}>{loading? 'Running...' : 'Run'}</button>
</div>
</div>


<Card title="Result">
{error && <div className="text-red-400">{error}</div>}
{!signal && !error && <div className="text-slate-400">No signal yet.</div>}
{signal && (
<div className="space-y-2">
<div>Symbol: <strong>{signal.symbol}</strong></div>
<div>Position: <strong>{signal.position}</strong></div>
<div>Probability: <strong>{(signal.probability*100).toFixed(1)}%</strong></div>
<div>SL: <strong>{signal.sl}</strong> TP: <strong>{signal.tp}</strong></div>
<div className="text-xs text-slate-400">Generated: {new Date(signal.timestamp).toLocaleString()}</div>
</div>
)}
</Card>


<div className="mt-4 text-sm text-slate-400">Note: Trial Prediction exposes a limited feature-set for demo purposes — full predictions include zone metadata, confidence breakdown and risk suggestions.</div>
</main>
);
}