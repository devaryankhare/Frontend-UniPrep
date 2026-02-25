import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"

export default async function Dashboard() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth")
  }

  return (
    <div>
      <h1 className="text-black">Dashboard</h1>
      <p className="text-black">Logged in as: {user.email}</p>
    </div>
  )
}