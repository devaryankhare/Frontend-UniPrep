import Navbar from "./components/ui/Navbar";
import Hero from "./components/Hero";

export default function Home(){
  return(
    <main className="bg-linear-to-br from-white to-blue-100">
      <div>
        <Navbar />
      </div>

      <div>
        <Hero />
      </div>
    </main>
  );
}