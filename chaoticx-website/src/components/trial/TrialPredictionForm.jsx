import React, { useState } from "react";

const TrialPredictionForm = ({ onSubmit, loading }) => {
  const [formData, setFormData] = useState({
    touch_from: "",
    below_body_size: "",
    below_zone_low: "",
    above_zone_low: "",
    candle_volume: "",
    zone_low: "",
    candle_high: "",
    count: "",
    below_volume_on_creation: "",
    volume_on_creation: "",
    above_zone_high: "",
    above_zone_width: "",
    above_count: "",
    zone_width: "",
    zone_high: "",
    above_volume_on_creation: "",
    zone_type: "",
    touch_type: "",
    below_zone_width: "",
    below_zone_high: "",
    body_size: "",
    above_type: "",
    candle_open: "",
    below_duration_between_first_last_touch: "",
    below_count: "",
    below_type: "",
    distance_to_nearest_zone_below: "",
    candle_low: "",
    candle_close: "",
    distance_to_nearest_zone_above: "",
    above_body_size: "",
    duration_between_first_last_touch: "",
    above_duration_between_first_last_touch: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };
  /*const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, message: "" });

    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/trial-predict`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus({ loading: false, message: "✅ Prediction successful!" });
        console.log("Response:", data);
      } else {
        setStatus({ loading: false, message: `❌ Error: ${data.error || "Failed"}` });
      }
    } catch (err) {
      setStatus({ loading: false, message: "❌ Network or server error" });
    }
  };*/

 return (
    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-3">
      {Object.keys(formData).map((key) => (
        <div key={key} className="flex flex-col">
          <label className="text-sm text-gray-400 mb-1">{key}</label>
          <input
            type="text"
            name={key}
            value={formData[key]}
            onChange={handleChange}
            className="bg-white/5 border border-gray-600 rounded px-2 py-1 text-sm text-white"
          />
        </div>
      ))}
      <div className="col-span-2 mt-4">
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-cyan-500 text-black font-semibold py-2 px-4 rounded disabled:opacity-50"
        >
          {loading ? "Predicting..." : "Run Prediction"}
        </button>
      </div>
    </form>
  );
};

export default TrialPredictionForm;
