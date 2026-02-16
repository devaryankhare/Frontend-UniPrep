
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

export default function Home(){
    const logos = ["/logos/du.png", "/logos/srcc.png", "/logos/jnu.png", "/logos/st.png"];

const router=useRouter()
  const auth=useAuthStore()
 useEffect(() => {
    if (auth.hasHydrated && !auth.token) {
      router.push("/login");
    }
  }, [auth.token, auth.hasHydrated, router]);

  if (!auth.hasHydrated) return null;

  return(
    <main className="bg-linear-to-br from-orange-100 via-white to-orange-100">
      <div>
        <Navbar />
      </div>

      <div>
        <Hero />
      </div>

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

       <div>
        <Courses />
       </div>
    </main>
  );
}