"use client"

import type React from "react"
import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { supabase } from "@/lib/supabaseClient"

type Role = "customer" | "tailor"
type Mode = "login" | "signup"

const AuthPage: React.FC = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const returnUrl = searchParams.get("returnUrl")

  const [role, setRole] = useState<Role>("customer")
  const [mode, setMode] = useState<Mode>("login")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (mode === "signup") {
      // 1️⃣ Create auth account with metadata
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            role: role,
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

      // Database trigger handles profile creation now

      alert("Account created! Please verify your email before logging in.");
      // Optional: Redirect or keep them here to check email
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
        <h2 className="text-2xl font-bold text-center text-card-foreground">Welcome Back</h2>
        <p className="text-muted-foreground text-center mb-6">
          {mode === "login" ? "Sign in to your account" : "Create a new account"}
        </p>

        {/* Role Selection */}
        <div className="mb-4">
          <p className="text-card-foreground font-medium mb-2">I am a:</p>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setRole("customer")}
              className={`flex items-center justify-center px-4 py-2 rounded-lg border transition
                ${role === "customer" ? "bg-primary text-primary-foreground" : "bg-card text-card-foreground border-border hover:bg-accent"}`}
            >
              <span className="mr-2">👤</span> Customer
            </button>
            <button
              type="button"
              onClick={() => setRole("tailor")}
              className={`flex items-center justify-center px-4 py-2 rounded-lg border transition
                ${role === "tailor" ? "bg-primary text-primary-foreground" : "bg-card text-card-foreground border-border hover:bg-accent"}`}
            >
              ✂️ Tailor
            </button>
          </div>
        </div>

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
            {mode === "login"
              ? `Login as ${role === "customer" ? "Customer" : "Tailor"}`
              : `Sign Up as ${role === "customer" ? "Customer" : "Tailor"}`}
          </button>
        </form>

        {/* Forgot Password */}
        {mode === "login" && (
          <p className="text-center text-muted-foreground mt-4 text-sm cursor-pointer hover:underline hover:text-card-foreground transition">
            Forgot your password?
          </p>
        )}
      </div>
    </div>
  )
}

export default AuthPage