export default function StepReview({ values, onBack, onReset }) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Review Your Info</h2>
      <ul className="space-y-1">
        {Object.entries(values).map(([k, v]) => (
          <li key={k} className="flex justify-between">
            <span className="capitalize">{k}</span>
            <span className="font-medium">{String(v)}</span>
          </li>
        ))}
      </ul>

      <div className="flex gap-3 pt-4">
        <button onClick={onBack} className="btn-secondary flex-1">
          Back
        </button>
        <button onClick={onReset} className="btn-primary flex-1">
          Submit & Reset
        </button>
      </div>
    </div>
  );
}
