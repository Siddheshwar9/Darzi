"use client"

import type React from "react"
import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { supabase } from "@/lib/supabaseClient"

type Mode = "login" | "signup"

const AuthPage: React.FC = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const returnUrl = searchParams.get("returnUrl")

  const [mode, setMode] = useState<Mode>("login")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (mode === "signup") {
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            role: "customer", // Always customer for this page
          },
        },
      });

      if (authError) {
        if (authError.message.includes("already registered") || authError.message.includes("unique constraint")) {
          alert("This email is already registered. Please switch to Login.");
          setMode("login");
        } else {
          alert(authError.message);
        }
        return;
      }

      const user = authData.user;
      if (!user) {
        alert("Signup failed.");
        return;
      }

      alert("Account created! Please verify your email before logging in.");
    }

    else if (mode === "login") {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        if (error.message.includes("Email not confirmed")) {
          alert("Please verify your email address. Check your inbox (and spam folder) for a confirmation link from Supabase.");
        } else {
          alert(error.message);
        }
        return;
      }

      alert("Logged in! Redirecting...");
      if (returnUrl) {
        router.push(returnUrl);
      } else {
        router.push("/dashboard");
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="bg-card w-full max-w-md rounded-xl shadow-lg p-8 border">
        {/* Header */}
        <h2 className="text-2xl font-bold text-center text-card-foreground">Welcome to Darzi</h2>
        <p className="text-muted-foreground text-center mb-6">
          {mode === "login" ? "Sign in to your customer account" : "Create your customer account"}
        </p>

        {/* Login / Signup Tabs */}
        <div className="flex mb-6 border-b border-border">
          <button
            type="button"
            onClick={() => setMode("login")}
            className={`w-1/2 py-2 text-center font-medium transition
              ${mode === "login" ? "border-b-2 border-primary text-primary" : "text-muted-foreground hover:text-card-foreground"}`}
          >
            Login
          </button>
          <button
            type="button"
            onClick={() => setMode("signup")}
            className={`w-1/2 py-2 text-center font-medium transition
              ${mode === "signup" ? "border-b-2 border-primary text-primary" : "text-muted-foreground hover:text-card-foreground"}`}
          >
            Sign Up
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-card-foreground">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-card-foreground">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:bg-primary/90 transition"
          >
            {mode === "login" ? "Login" : "Sign Up"}
          </button>
        </form>

        {/* Link to Tailor Login */}
        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Are you a tailor?{" "}
            <button
              onClick={() => router.push("/auth/tailor")}
              className="text-primary hover:underline"
            >
              Login here
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default AuthPage