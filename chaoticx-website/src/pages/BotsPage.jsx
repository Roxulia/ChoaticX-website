function BotsPage() {
const bots = [
{ id: 'grid-mean', name: 'GridMean Bot', desc: 'Mean-reversion grid bot — best for range markets.' },
{ id: 'trend-follower', name: 'TrendFollower', desc: 'Trend-following bot using multi-timeframe confirmation.' }
];


return (
<main className="max-w-6xl mx-auto p-6">
<h2 className="text-2xl font-bold mb-4">Bot Marketplaces</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
{bots.map(b => (
<Card key={b.id} title={b.name}>
<p className="mb-2 text-slate-300">{b.desc}</p>
<div className="flex gap-2">
<button className="px-3 py-1 rounded bg-cyan-500 text-black">Connect</button>
<button className="px-3 py-1 rounded border">Details</button>
</div>
</Card>
))}
</div>
</main>
);
}