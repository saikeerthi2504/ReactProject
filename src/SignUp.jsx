import React from "react";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SignUp.css"; // optional
import { Link } from "react-router-dom";

function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(`Signup successful!\nWelcome, ${data.name}`);
    console.log("Form Data:", data);
  };

  const password = watch("password"); // to validate confirm password

  return (
    <>
    <h2 className="text-center text-success mb-4" style={{ marginTop: "140px" }}>
        BigBasket :: Signup Page
      </h2>
      <div
        className="card p-4 shadow-lg signup-card"
        style={{ width: "1000px" }}
      >
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Full Name */}
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your full name"
            {...register("name", { required: "Full name is required" })}
          />
          {errors.name && (
            <div className="text-danger">{errors.name.message}</div>
          )}
        </div>

        {/* Email */}
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Enter a valid email address",
              },
            })}
          />
          {errors.email && (
            <div className="text-danger">{errors.email.message}</div>
          )}
        </div>

        {/* Password */}
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter a password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          {errors.password && (
            <div className="text-danger">{errors.password.message}</div>
          )}
        </div>

        {/* Confirm Password */}
        <div className="mb-3">
          <label className="form-label">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Re-enter your password"
            {...register("confirmPassword", {
              required: "Confirm your password",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
          />
          {errors.confirmPassword && (
            <div className="text-danger">
              {errors.confirmPassword.message}
            </div>
          )}
        </div>

        {/* Terms Checkbox */}
        <div className="mb-3">
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              {...register("termsAccepted", {
                required: "You must accept Terms and Conditions",
              })}
            />
            <label className="form-check-label">
              I agree to the <strong>Terms and Conditions</strong>
            </label>
          </div>
          {errors.termsAccepted && (
            <div className="text-danger">{errors.termsAccepted.message}</div>
          )}
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-success w-100">
          Sign Up
        </button>
      </form>
      <p>Already have an account? <Link to="/login">Login here</Link></p>
    </div>
    </>
  );
}

export default SignUp;
