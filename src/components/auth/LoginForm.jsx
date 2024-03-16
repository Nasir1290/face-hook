import React from "react";
import Field from "../../common/Field";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (formData) => {
    console.log(formData);
  };

  return (
    <div className="card">
      <form
        onSubmit={handleSubmit(submitForm)}
        action=""
        className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]"
      >
        <Field label={"Email"} error={errors.email}>
          <input
            {...register("email", { required: "Email is required" })}
            className={`auth-input border-${
              errors.email ? "red-500" : "gray-600"
            }`}
            type="email"
            name="email"
            id="email"
          />
        </Field>
        <Field label={"Password"} error={errors.password}>
          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
            className={`auth-input border-${
              errors.password ? "red-500" : "gray-600"
            }`}
            type="password"
            name="password"
            id="password"
          />
        </Field>
        <Field>
          <button
            className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
            type="submit"
          >
            Login
          </button>
        </Field>
      </form>
    </div>
  );
};

export default LoginForm;
