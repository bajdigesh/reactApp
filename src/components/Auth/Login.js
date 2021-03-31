import React from "react";
import { useHistory } from "react-router-dom";
import useFormValidator from "../../utils/useFormValidator";
import ErrorMessage from "../Shared/ErrorMessage";
import validate from "./validation";

const Login = () => {
  const history = useHistory();

  let initialFormData = {
    email: "",
    password: "",
    errors: {
      email: "",
      password: "",
    },
  };

  const { onHandleSubmit, onHandleChange, formData } = useFormValidator(
    initialFormData,
    submitForm,
    validate
  );

  function submitForm() {
    if (
      formData.email === "admin@admin.com" &&
      formData.password === "password"
    ) {
      history.push("/dashboard");
    } else {
      alert("Invalid login credential");
    }
  }

  const { errors } = formData;

  return (
    <div className="container d-flex align-items-center h-100 justify-content-center">
      <div className="w-100 card p-5 shadow" style={{ maxWidth: 500 }}>
        <h2 className="mb-4 text-center">Sign In</h2>
        <form className="w-100" onSubmit={onHandleSubmit} noValidate>
          <div className="mb-4">
            <label className="form-label">Email</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your email"
              name="email"
              onChange={onHandleChange}
            />
            {errors.email && <ErrorMessage errorMsg={errors.email} />}
          </div>
          <div className="mb-4">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              name="password"
              minLength="8"
              onChange={onHandleChange}
            />
            {errors.password && <ErrorMessage errorMsg={errors.password} />}
          </div>
          <button className="btn btn-secondary w-100">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
