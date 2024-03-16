import React from "react";
import Field from "../../common/Field";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return <div>Login Form</div>;
};

export default LoginForm;
