import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"

export default async function Dashboard() {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth")
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Logged in as: {user.email}</p>
    </div>
  )
}