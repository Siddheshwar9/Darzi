"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabaseClient"
import { Loader2 } from "lucide-react"

export default function DashboardPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession()

      if (!session) {
        router.push("/auth")
        return
      }

      // Fetch user role
      const { data: profile, error } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", session.user.id)
        .single()

      if (error || !profile) {
        console.error("Error fetching profile:", error)
        // Detailed error for debugging
        const errorMessage = error?.message || "Profile not found in database";
        alert(`Dashboard Error: ${errorMessage}. \n\nPlease ensure you ran the 'create_tailor_profile.sql' or 'FINAL_fix_profile.sql' script in Supabase.`);

        await supabase.auth.signOut();
        router.push("/auth");
        return
      }

      console.log("User role detected:", profile.role);
      console.log("Redirecting to:", profile.role === "tailor" ? "/dashboard/tailor" : "/dashboard/customer");

      if (profile.role === "tailor") {
        router.push("/dashboard/tailor")
      } else {
        router.push("/dashboard/customer")
      }
      setLoading(false)
    }

    checkUser()
  }, [router])

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <span className="ml-2 text-lg font-medium">Loading dashboard...</span>
      </div>
    )
  }

  return null
}
