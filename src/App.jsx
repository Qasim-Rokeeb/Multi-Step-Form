import { useEffect, useState } from "react";
import StepIndicator from "./components/StepIndicator";
import StepProfile from "./components/StepProfile";
import StepExperience from "./components/StepExperience";
import StepReview from "./components/StepReview";

const TOTAL_STEPS = 3;

export default function App() {
  // load cached form or start fresh
  const [data, setData] = useState(
    () => JSON.parse(localStorage.getItem("appForm")) || {}
  );
  const [step, setStep] = useState(1);

  // cache on every change
  useEffect(() => localStorage.setItem("appForm", JSON.stringify(data)), [data]);

  const next = (values) => {
    setData({ ...data, ...values });
    setStep(step + 1);
  };

  const prev = () => setStep(step - 1);

  const resetAll = () => {
    localStorage.removeItem("appForm");
    setData({});
    setStep(1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <StepProfile defaultValues={data} onNext={next} />;
      case 2:
        return (
          <StepExperience defaultValues={data} onNext={next} onBack={prev} />
        );
      case 3:
        return <StepReview values={data} onBack={prev} onReset={resetAll} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center 
      bg-gradient-to-br from-teal-100 to-indigo-100 dark:from-gray-900 dark:to-gray-800
      text-gray-900 dark:text-white p-6 transition-all">
      <h1 className="text-3xl font-bold mb-4">📝 Multi‑Step Portfolio Form</h1>

      <StepIndicator step={step} />

      <div className="w-full max-w-lg bg-white/70 dark:bg-white/10 backdrop-blur-md 
        p-6 mt-6 rounded-xl shadow-lg">{renderStep()}</div>
    </div>
  );
}
