import Navbar from "./components/ui/Navbar";
import Hero from "./components/Hero";
import StatsStrip from "./components/StatsStrip";
import Grid from "./components/ui/grid";
import ImageCarousel from "./components/ui/infiniteCarousal";
import Feature from "./components/Feature";
import HowItWorks from "./components/HowItWorks";
import CuetCoverage from "./components/CuetCoverage";
import Courses from "./components/Courses";
import Usp from "./components/Usp";
import Reviews from "./components/Review";
import Faq from "./components/faq";
import Footer from "./components/Footer";
import PreferenceSupport from "./components/PreferenceSupport";
import AfterAdmissionSupport from "./components/AfterAdmissionSupport";
import TargetUniversities from "./components/TargetUniversities";
import FinalCta from "./components/FinalCta";

export default function Home() {
  const logos = ["/logos/du.png", "/logos/srcc.png", "/logos/jnu.png", "/logos/st.png"];
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <StatsStrip />

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

      <HowItWorks />

      <CuetCoverage />

      <PreferenceSupport />

      <AfterAdmissionSupport />

      <TargetUniversities />

      <Courses />

      <Usp />

      <Reviews />

      <Faq />

      <FinalCta />

      <Footer />
    </main>
  );
}
