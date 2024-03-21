import React from "react";
import { useForm } from "react-hook-form";
import Field from "../../common/Field";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const submitForm = async (formData) => {
    console.log(formData);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/auth/register`,
        formData
      );
      if (response.status === 201) {
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
      setError("root.random", {
        type: "random",
        message: `User with Given credentials not found Email was:${formData.email} and password was:${formData.password}`,
      });
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(submitForm)}
        action=""
        className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]"
      >
        <Field label={"First Name"} error={errors.firstName}>
          <input
            {...register("firstName", { required: "firstName is required" })}
            className={`auth-input border-${
              errors.firstName ? "red-500" : "gray-600"
            }`}
            type="text"
            name="firstName"
            id="firstName"
          />
        </Field>
        <Field label={"Last Name"} error={errors.lastName}>
          <input
            {...register("lastName")}
            className={`auth-input border-${
              errors.lastName ? "red-500" : "gray-600"
            }`}
            type="text"
            name="lastName"
            id="lastName"
          />
        </Field>

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
        <p>{errors.root?.random?.message}</p>
        <Field>
          <button
            className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
            type="submit"
          >
            Registration
          </button>
        </Field>
      </form>
    </>
  );
};

export default RegistrationForm;
