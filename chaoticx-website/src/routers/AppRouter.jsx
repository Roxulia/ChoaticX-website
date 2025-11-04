import { Routes, Route } from 'react-router-dom';
import { HomePage, TrialPredictionPage, BotsPage } from '../pages';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/trial" element={<TrialPredictionPage />} />
      <Route path="/bots" element={<BotsPage />} />
    </Routes>
  );
}
