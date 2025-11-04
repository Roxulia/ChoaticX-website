import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import { getBots } from '../services/api/botAPI';

function BotCard({ bot }) {
  return (
    <Card title={bot.name}>
      <p className="text-slate-300 mb-2">{bot.description}</p>
      <div className="flex justify-between items-center">
        <div className="text-sm text-slate-400">Strategy: {bot.strategy}</div>
        <div className="flex gap-2">
          <button className="px-3 py-1 rounded bg-cyan-500 text-black">Connect</button>
          <button className="px-3 py-1 rounded border">Details</button>
        </div>
      </div>
    </Card>
  );
}

export default function BotsPage() {
  const [bots, setBots] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      setLoading(true);
      const data = await getBots();
      if (!cancelled) setBots(data);
      setLoading(false);
    }
    load();
    return () => { cancelled = true; };
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">ChaoticX Bot Marketplace</h1>

      {loading && <div className="text-slate-400 mb-4">Loading bots…</div>}

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        {bots.map(b => <BotCard key={b.id} bot={b} />)}
      </div>
    </div>
  );
}
