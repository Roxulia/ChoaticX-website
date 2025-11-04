import { BrowserRouter as Router } from 'react-router-dom';
import { ServicesProvider } from './context';
import { Header } from './components';
import AppRouter from './router/AppRouter';

export default function App() {
  return (
    <ServicesProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-zinc-900 text-white">
          <Header />
          <AppRouter />
          <footer className="mt-12 p-6 text-center text-slate-500">
            © {new Date().getFullYear()} ChaoticX — Built with care.
          </footer>
        </div>
      </Router>
    </ServicesProvider>
  );
}
