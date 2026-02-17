"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginUser } from "@/services/authServices";
import { useAuthStore } from "@/store/useAuthStore";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const checkAuth = useAuthStore((state) => state.checkAuth);

  const handleLogin = async () => {
    try {
      await loginUser(email, password);

      // cookie already set by server
      await checkAuth(); // load user from /auth/me

      router.push("/");
    } catch (err: any) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center text-black bg-gray-50">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-center">Login</h1>

        <input
          type="email"
          placeholder="Email"
          className="border p-3 rounded-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-3 rounded-lg"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="bg-blue-600 text-white py-3 rounded-lg"
        >
          Login
        </button>

        <p className="text-sm text-center">
          Don’t have an account?{" "}
          <Link href="/signup" className="text-blue-600 underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
