import React, { useState } from "react";
import Card from "../components/Card";
import { useServices } from "../hooks/useService";
import TrialPredictionForm from "../components/trial/TrialPredictionForm";
import PredictionResult from "../components/trial/PredictionResult";

export default function TrialPredictionPage() {
  const { signalService } = useServices();
  const [loading, setLoading] = useState(false);
  const [signal, setSignal] = useState(null);
  const [error, setError] = useState(null);

  const runPrediction = async (formData) => {
    setLoading(true);
    setError(null);
    try {
      const res = await signalService.getTrialSignal(formData);
      setSignal(res);
    } catch (err) {
      setError(err.message || "Failed to fetch signal");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Trial Prediction</h1>

      <Card title="Input Data">
        <TrialPredictionForm onSubmit={runPrediction} loading={loading} />
      </Card>

      <div className="mt-6">
        <Card title="Result">
          {error && <div className="text-red-400">{error}</div>}
          {!signal && !error && (
            <div className="text-slate-400">
              No result yet. Fill the form and click “Run Prediction”.
            </div>
          )}
          {signal && <PredictionResult signal={signal} />}
        </Card>
      </div>
    </div>
  );
}
