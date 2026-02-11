import Navbar from "./components/ui/Navbar";
import Hero from "./components/Hero";
import Grid from "./components/ui/grid";
import ImageCarousel from "./components/ui/infiniteCarousal";

export default function Home(){
  const logos = ["/logos/du.png", "/logos/srcc.png", "/logos/jnu.png", "/logos/st.png"];

  return(
    <main className="bg-linear-to-br from-white to-blue-100">
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
    </main>
  );
}