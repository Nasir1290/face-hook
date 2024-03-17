import React from "react";
import Field from "../../common/Field";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const LoginForm = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm();

  const submitForm = async (formData) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/auth/login`,
        formData
      );

      if (response.status === 200) {
        const { user, token } = response.data;

        const { authToken, refreshToken } = token;

        console.log(`Login time Auth Token: ${authToken}`);

        setAuth({ user, authToken, refreshToken });

        navigate("/");
      }
    } catch (error) {
      console.error(error);
      setError("root.random",{
        type:"random",
        message:`User with Given credentials not found Email was:${formData.email}`
      })
    }
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
