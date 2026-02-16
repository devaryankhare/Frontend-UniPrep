"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { registerUser } from "@/services/authServices";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSignup = async () => {
    try {
      const data = await registerUser({
        name,
        email,
        password,
      });

      alert("Successfully created account")

      router.push("/login");
    } catch (error: any) {
      alert(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="flex flex-col text-black gap-4 max-w-sm mx-auto mt-20">
      <h1 className="text-2xl font-bold">Create Account</h1>

      <input
      required
        placeholder="Full Name"
        className="border p-2 rounded"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        required
        placeholder="Email"
        className="border p-2 rounded"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        required
        type="password"
        placeholder="Password"
        className="border p-2 rounded"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={handleSignup}
        className="bg-blue-600 text-white py-2 rounded"
      >
        Create Account
      </button>
    </div>
  );
}
