import Navbar from "./components/ui/Navbar";
import Hero from "./components/Hero";

export default function Home(){
  return(
    <main>
      <div>
        <Navbar />
      </div>

      <div className="bg-linear-to-br from-blue-100 to-white">
        <Hero />
      </div>
    </main>
  );
}