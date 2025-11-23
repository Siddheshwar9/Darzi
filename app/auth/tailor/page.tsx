"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabaseClient"
import { Scissors } from "lucide-react"
import Link from "next/link"

type Mode = "login" | "signup"

export default function TailorAuthPage() {
    const router = useRouter()
    const [mode, setMode] = useState<Mode>("signup")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [shopName, setShopName] = useState("")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (mode === "signup") {
            const { data: authData, error: authError } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: {
                        role: "tailor",
                        shop_name: shopName,
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

            alert("Tailor account created! Please verify your email before logging in.");
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
            router.push("/dashboard");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-background">
            <div className="bg-card w-full max-w-md rounded-xl shadow-lg p-8 border">
                {/* Header */}
                <div className="flex items-center justify-center mb-6">
                    <Scissors className="h-8 w-8 text-accent mr-2" />
                    <h2 className="text-2xl font-bold text-center text-card-foreground">Tailor Portal</h2>
                </div>
                <p className="text-muted-foreground text-center mb-6">
                    {mode === "login" ? "Sign in to your tailor account" : "Create your tailor account"}
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
                    {mode === "signup" && (
                        <div>
                            <label className="block text-sm font-medium text-card-foreground">Shop Name</label>
                            <input
                                type="text"
                                placeholder="Enter your shop name"
                                value={shopName}
                                onChange={(e) => setShopName(e.target.value)}
                                className="mt-1 w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
                                required
                            />
                        </div>
                    )}

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
                        {mode === "login" ? "Login as Tailor" : "Sign Up as Tailor"}
                    </button>
                </form>

                {/* Back to Customer Login */}
                <div className="mt-6 text-center">
                    <Link
                        href="/auth"
                        className="text-sm text-muted-foreground hover:text-foreground transition"
                    >
                        ← Back to Customer Login
                    </Link>
                </div>
            </div>
        </div>
    )
}
