"use client";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function AuthForm() {
  const supabase = createClient();
  const router = useRouter();

  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);

    if (isLogin) {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) alert(error.message);
      else router.push("/dashboard");
    } else {
      const { error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) alert(error.message);
      else alert("Check your email for confirmation");
    }

    setLoading(false);
  };

  return (
    <div className="w-full bg-white flex gap-4 items-center justify-center max-w-2xl p-6 border rounded-2xl shadow-xl">
      <div className="relative w-72 h-128 rounded-2xl overflow-hidden">
  <Image
    src="/assets/exam.avif"
    alt="exam prep"
    fill
    sizes="120px"
    className="object-cover"
    priority
  />
</div>
      <div>
        <h1 className="text-lg font-light text-center text-black">
          {isLogin ? "Login" : "Sign Up"}
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-black text-white p-2 rounded"
        >
          {loading ? "Loading..." : isLogin ? "Login" : "Create Account"}
        </button>

        <p className="text-sm text-center">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-500 underline"
          >
            {isLogin ? "Sign up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}
