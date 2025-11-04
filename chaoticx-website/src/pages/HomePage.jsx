import React from 'react';
import Card from '../components/Card';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-10">
      <div>
        <h2 className="text-4xl font-bold mb-3">Trade Smarter. Predict the Chaos.</h2>
        <p className="mb-4 text-slate-300">
          ChaoticX blends Technical, Fundamental and Sentiment analysis to provide
          retail traders with data-driven trade suggestions and risk-aware position sizing.
        </p>
        <div className="flex gap-3">
          <Link to="/trial" className="px-4 py-2 rounded bg-cyan-500 text-black font-semibold">Try Trial Prediction</Link>
          <Link to="/bots" className="px-4 py-2 rounded border border-white/10">Explore Bots</Link>
        </div>
      </div>

      <div>
        <Card title="Live Snapshot (Demo)">
          <div className="h-48 flex items-center justify-center text-slate-300">
            Chart mock / live preview area
          </div>
        </Card>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    { title: 'Technical Engine', desc: 'EMA/ATR/RR and structural zones (OB, FVG).' },
    { title: 'Sentiment', desc: 'Social + news sentiment aggregated.' },
    { title: 'Risk Management', desc: 'SL/TP suggestions and position sizing.' },
  ];

  return (
    <section className="grid md:grid-cols-3 gap-4 mb-10">
      {features.map(f => (
        <Card key={f.title} title={f.title}>
          <p className="text-slate-300">{f.desc}</p>
        </Card>
      ))}
    </section>
  );
}

function Testimonials() {
  const items = [
    { text: 'Reduced my overtrading — signals helped me focus.', by: 'Beta user' },
    { text: 'Clear SL/TP suggestions saved my account.', by: 'TraderX' }
  ];
  return (
    <section className="mb-10">
      <h3 className="text-2xl font-semibold mb-4">Early feedback</h3>
      <div className="space-y-4">
        {items.map((t, i) => (
          <div key={i} className="bg-white/3 p-4 rounded">
            <div className="text-slate-100">“{t.text}”</div>
            <div className="text-sm text-slate-400 mt-2">— {t.by}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="text-center py-8">
      <h3 className="text-2xl font-semibold mb-3">Ready to try a guided prediction?</h3>
      <Link to="/trial" className="px-6 py-3 rounded bg-cyan-500 text-black font-semibold">Run Trial Prediction</Link>
    </section>
  );
}

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <Testimonials />
      <CTASection />
    </div>
  );
}
