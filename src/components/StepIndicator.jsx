import { User, Briefcase, CheckCircle2 } from "lucide-react";

const steps = [
  { id: 1, icon: User, label: "Profile" },
  { id: 2, icon: Briefcase, label: "Experience" },
  { id: 3, icon: CheckCircle2, label: "Review" },
];

export default function StepIndicator({ step }) {
  return (
    <div className="flex justify-center gap-6">
      {steps.map(({ id, icon: Icon, label }) => (
        <div key={id} className="flex flex-col items-center">
          <div
            className={`w-10 h-10 flex items-center justify-center rounded-full border-2
              ${step >= id ? "bg-blue-600 border-blue-600 text-white" : "border-gray-400"}`}>
            <Icon size={18} />
          </div>
          <span
            className={`mt-1 text-sm ${
              step >= id ? "text-blue-600 font-medium" : "text-gray-500"
            }`}
          >
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
