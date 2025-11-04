import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-slate-900 to-zinc-900 text-white p-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <h1 className="text-xl font-semibold">ChaoticX</h1>
        <nav className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/trial" className="hover:underline">Trial Prediction</Link>
          <Link to="/bots" className="hover:underline">Bot Marketplaces</Link>
        </nav>
      </div>
    </header>
  );
}
