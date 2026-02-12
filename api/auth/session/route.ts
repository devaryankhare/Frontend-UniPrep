import { NextRequest, NextResponse } from "next/server"
import { adminAuth } from "@/lib/firebaseAdmin"

export async function POST(req: NextRequest) {
  try {
    const { token } = await req.json()

    const decodedToken = await adminAuth.verifyIdToken(token)

    // Create cookie
    const res = NextResponse.json({ message: "Session created" })
    res.cookies.set({
      name: "token",
      value: token, // you can use session token from Firebase if needed
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 5, // 5 days
      path: "/",
    })

    return res
  } catch (err) {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 })
  }
}