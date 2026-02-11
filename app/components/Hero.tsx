import {
  TiStarFullOutline,
  TiStarHalfOutline,
  TiStarOutline,
} from "react-icons/ti";
import Link from "next/link";
import Grid from "./ui/grid";
import ImageCarousel from "./ui/infiniteCarousal";

export default function Hero() {
  const logos = ["/logos/du.png", "/logos/srcc.png", "/logos/jnu.png", "/logos/st.png"];

  return (
    <main className="max-w-6xl mx-auto w-full pt-24">
      <div className="flex flex-col gap-8 justify-center items-center">
        <div className="bg-white flex gap-2 items-center justify-center rounded-full py-2 px-4">
          <span className="flex flex-row items-center justify-center">
            <TiStarFullOutline className="text-blue-500" />
            <TiStarFullOutline className="text-blue-500" />
            <TiStarFullOutline className="text-blue-500" />
            <TiStarHalfOutline className="text-blue-500" />
            <TiStarOutline className="text-blue-500" />
          </span>
          <span className="text-black font-semibold">4.5</span>
          <span className="text-black">(120k Review)</span>
        </div>
        <h1 className="text-6xl max-w-3xl text-black text-center">
          Practice like the real exam. Prepare with rankers.
        </h1>
        <p className="max-w-2xl text-xl text-center text-neutral-800">
          Mock tests, PYQs, notes, flashcards, and performance analytics all in
          one place.
        </p>

        <div className="flex gap-6">
          <Link href="/login" className="font-roboto flex text-white">
            <span className="rounded-full flex bg-linear-to-br duration-300 hover:scale-105 from-blue-400 to-blue-600 items-center justify-center text-lg shadow-xl px-8 py-4">
              Start Preparation
            </span>
          </Link>

          <Link
            className="rounded-full flex bg-white duration-300 hover:scale-105 text-black items-center justify-center text-lg shadow-xl px-8 py-4"
            href=""
          >
            Explore Mocks
          </Link>
        </div>

        <div className="py-12">
          <Grid />
        </div>

        <div className="max-w-6xl">
          <div className="flex flex-col items-center justify-center">
            <h2 className="py-8 text-xl text-black">Colleges to Crack</h2>
            <ImageCarousel images={logos} speed={120} />
          </div>
        </div>
      </div>
    </main>
  );
}
