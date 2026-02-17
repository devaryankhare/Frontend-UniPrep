"use client";

import Navbar from "./components/ui/Navbar";
import Hero from "./components/Hero";
import Grid from "./components/ui/grid";
import ImageCarousel from "./components/ui/infiniteCarousal";
import Feature from "./components/Feature";
import Courses from "./components/Courses";
import { useEffect } from "react";
import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from "next/navigation";

export default function Home() {
  const logos = ["/logos/du.png", "/logos/srcc.png", "/logos/jnu.png", "/logos/st.png"];

  const router = useRouter();
  const { user, isCheckingAuth, checkAuth } = useAuthStore();

  // Check session on page load
  useEffect(() => {
    if (!isCheckingAuth && !user) {
      router.push("/login");
    }
  }, [user, isCheckingAuth, router]);

  if (isCheckingAuth) {
    return <div className="p-10">Loading...</div>;
  }


  return (
    <main className="bg-linear-to-br from-orange-100 via-white to-orange-100">
      <Navbar />
      <Hero />

      <div className="py-12 max-w-6xl mx-auto flex items-center justify-center">
        <Grid />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center">
          <h2 className="py-8 text-xl text-black">Colleges to Crack</h2>
          <ImageCarousel images={logos} speed={120} />
        </div>
      </div>

      <div className="py-8">
        <Feature />
      </div>

      <Courses />
    </main>
  );
}
