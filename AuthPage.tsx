import React, { useState } from "react";

type Role = "customer" | "tailor";
type Mode = "login" | "signup";

const AuthPage: React.FC = () => {
  const [role, setRole] = useState<Role>("customer");
  const [mode, setMode] = useState<Mode>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ role, mode, email, password });
    // TODO: Call your backend API here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-8">
        {/* Header */}
        <h2 className="text-2xl font-bold text-center">Welcome Back</h2>
        <p className="text-gray-500 text-center mb-6">
          {mode === "login" ? "Sign in to your account" : "Create a new account"}
        </p>

        {/* Role Selection */}
        <div className="mb-4">
          <p className="text-gray-700 font-medium mb-2">I am a:</p>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setRole("customer")}
              className={`flex items-center justify-center px-4 py-2 rounded-lg border transition
                ${role === "customer" ? "bg-gray-900 text-white" : "bg-white text-gray-700 border-gray-300"}`}
            >
              <span className="mr-2">👤</span> Customer
            </button>
            <button
              type="button"
              onClick={() => setRole("tailor")}
              className={`flex items-center justify-center px-4 py-2 rounded-lg border transition
                ${role === "tailor" ? "bg-gray-900 text-white" : "bg-white text-gray-700 border-gray-300"}`}
            >
              ✂️ Tailor
            </button>
          </div>
        </div>

        {/* Login / Signup Tabs */}
        <div className="flex mb-6 border-b">
          <button
            type="button"
            onClick={() => setMode("login")}
            className={`w-1/2 py-2 text-center font-medium transition
              ${mode === "login" ? "border-b-2 border-gray-900 text-gray-900" : "text-gray-500"}`}
          >
            Login
          </button>
          <button
            type="button"
            onClick={() => setMode("signup")}
            className={`w-1/2 py-2 text-center font-medium transition
              ${mode === "signup" ? "border-b-2 border-gray-900 text-gray-900" : "text-gray-500"}`}
          >
            Sign Up
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-gray-900 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-gray-900 focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 transition"
          >
            {mode === "login"
              ? `Login as ${role === "customer" ? "Customer" : "Tailor"}`
              : `Sign Up as ${role === "customer" ? "Customer" : "Tailor"}`}
          </button>
        </form>

        {/* Forgot Password */}
        {mode === "login" && (
          <p className="text-center text-gray-500 mt-4 text-sm cursor-pointer hover:underline">
            Forgot your password?
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
