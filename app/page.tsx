import Navbar from "./components/ui/Navbar";
import Hero from "./components/Hero";

export default function Home(){
  return(
    <main>
      <div>
        <Navbar />
      </div>

      <div className="">
        <Hero />
      </div>
    </main>
  );
}