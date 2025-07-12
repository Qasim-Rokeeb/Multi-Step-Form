import { useForm } from "react-hook-form";

export default function StepExperience({ defaultValues = {}, onNext, onBack }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      years: defaultValues.years ?? "",
      stack: defaultValues.stack ?? "",
    },
  });

  const inputClass =
    "w-full mt-1 px-3 py-2 border rounded " +
    "text-gray-900 dark:text-white " +
    "bg-white dark:bg-gray-800 " +
    "placeholder-gray-400 dark:placeholder-gray-500 " +
    "border-gray-300 dark:border-gray-700 " +
    "focus:outline-none focus:ring-2 focus:ring-blue-500";

  return (
    <form onSubmit={handleSubmit(onNext)} className="space-y-4">
      <div>
        <label>Years of Experience</label>
        <input
          type="number"
          {...register("years", {
            required: "Years of experience is required",
            min: { value: 0, message: "Must be 0 or more" },
            valueAsNumber: true,
          })}
          className={inputClass}
          placeholder="e.g. 2"
        />
        {errors.years && <p className="error">{errors.years.message}</p>}
      </div>

      <div>
        <label>Primary Tech Stack</label>
        <input
          type="text"
          {...register("stack", {
            required: "Tech stack is required",
          })}
          className={inputClass}
          placeholder="e.g. React, Tailwind"
        />
        {errors.stack && <p className="error">{errors.stack.message}</p>}
      </div>

      <div className="flex gap-3">
        <button type="button" onClick={onBack} className="btn-secondary flex-1">
          Back
        </button>
        <button type="submit" className="btn-primary flex-1">
          Next
        </button>
      </div>
    </form>
  );
}
