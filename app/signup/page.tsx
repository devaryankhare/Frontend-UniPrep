"use client";

import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Set display name in Firebase Auth
      await updateProfile(userCredential.user, {
        displayName: name,
      });

      // Get Firebase ID Token
      const token = await userCredential.user.getIdToken();

      // Store token in httpOnly cookie
      await fetch("/api/session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });

      router.push("/dashboard");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div className="flex flex-col text-black gap-4 max-w-sm mx-auto mt-20">
      <h1 className="text-2xl font-bold">Create Account</h1>

      <input
        type="text"
        placeholder="Full Name"
        className="border p-2 rounded"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        className="border p-2 rounded"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="border p-2 rounded"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={handleSignup}
        className="bg-blue-600 text-white py-2 rounded hover:opacity-90"
      >
        Create Account
      </button>
      <p className="text-sm text-center">
        Already have an account? {" "}
        <Link href="/login" className="text-blue-600 underline">
          Login
        </Link>
      </p>
    </div>
  );
}