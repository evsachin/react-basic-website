import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"; // Use useNavigate from react-router-dom

const LoginForm = () => {
  // Use the useForm hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate(); // Use useNavigate for routing

  // Form submission handler
  const onSubmit = (data) => {
    console.log("Login data:", data);
    // Handle login (API call or state management)
  };

  const handleSignUpClick = () => {
    navigate("/signup"); // Redirect to the signup page
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-lg mx-auto p-6 bg-gray-800 text-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-100 mb-6">
          Login
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-md font-medium text-gray-300"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ ]+$/,
                  message: "Please enter a valid email",
                },
              })}
              className="mt-2 block w-full px-4 py-2 border border-gray-600 rounded-lg shadow-sm bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-2">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-md font-medium text-gray-300"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              {...register("password", { required: "Password is required" })}
              className="mt-2 block w-full px-4 py-2 border border-gray-600 rounded-lg shadow-sm bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-2">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Login Button */}
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg font-semibold transition-colors hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
            >
              Login
            </button>
          </div>
        </form>

        {/* Sign Up Link */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400">
            Don't have an account?{" "}
            <button
              onClick={handleSignUpClick}
              className="text-blue-500 hover:underline font-semibold"
            >
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
