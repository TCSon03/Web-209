import { useForm, SubmitHandler } from "react-hook-form";
import { loginUser, registerUser, User } from "../services/Auth";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useState } from "react";

export default function Login() {
  const nav = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();
  const handleLogin: SubmitHandler<User> = (values) => {
    // console.log(handleRegister);
    loginUser(values)
      .then(({ data }) => {
        toast.success("dang nhap thanh cong");
        localStorage.setItem("token", data.token);
        nav("/");
      })
      .catch((error) => {
        toast.error("Error: " + error.message);
      });
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("email", {
                required: true,
              })}
            />
            {errors?.email && (
              <span className="text-red-400">{errors.email.message}</span>
            )}
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("password", {
                required: true,
                minLength: {
                  value: 6,
                  message: "min 6 characters",
                },
              })}
            />
            {errors?.password && (
              <span className="text-red-400">{errors.password.message}</span>
            )}
          </div>
          <div className="mb-6">
            <button
              type="submit"
              className="w-full py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-lg hover:from-blue-600 hover:to-purple-600"
            >
              Submit
            </button>
          </div>
          {/* <div className="text-center">
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Forgot Password?
            </a>
          </div> */}
          <div className="text-center mt-4">
            <span className="text-sm">Don't have an account?</span>
            <Link
              to="/register"
              className="text-sm text-blue-500 hover:underline"
            >
              Register
            </Link>
          </div>
          <div className="text-center">
            <span className="text-sm"></span>
            <Link to="/" className="text-sm text-blue-500 hover:underline">
              Home Page
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
