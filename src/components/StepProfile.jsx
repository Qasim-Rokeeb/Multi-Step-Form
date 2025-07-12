import { useForm } from "react-hook-form";

export default function StepProfile({ defaultValues, onNext }) {
  const { register, handleSubmit, formState } = useForm({
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onNext)} className="space-y-4">
      <div>
        <label>Name</label>
        <input
          {...register("name", { required: "Name is required" })}
          className="input"
        />
        <p className="error">{formState.errors.name?.message}</p>
      </div>
      <div>
        <label>Email</label>
        <input
          {...register("email", {
            required: "Email required",
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
          })}
          className="input"
        />
        <p className="error">{formState.errors.email?.message}</p>
      </div>
      <button className="btn-primary w-full">Next</button>
    </form>
  );
}
