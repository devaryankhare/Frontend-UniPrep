import {
  TiStarFullOutline,
  TiStarHalfOutline,
  TiStarOutline,
} from "react-icons/ti";
import Link from "next/link";

export default function Hero() {
  return (
    <main className="relative mx-auto w-full py-12 md:py-16 lg:py-20 backdrop-blur-lg overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Floating background logos */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <img
          src="/logos/du.png"
          className="absolute top-10 left-4 md:top-14 md:left-16 w-16 md:w-20 lg:w-24 opacity-20 md:opacity-30 animate-floatSlow"
          alt=""
        />
        <img
          src="/logos/jnu.png"
          className="absolute bottom-16 right-4 md:bottom-24 md:right-20 w-12 md:w-16 lg:w-18 opacity-15 md:opacity-25 animate-floatMedium"
          alt=""
        />
        <img
          src="/logos/srcc.png"
          className="absolute top-1/4 right-4 md:top-1/3 md:right-32 w-20 md:w-24 lg:w-32 opacity-15 md:opacity-20 animate-floatSlow"
          alt=""
        />
        <img
          src="/logos/st.png"
          className="absolute bottom-20 left-8 md:bottom-32 md:left-40 w-16 md:w-20 lg:w-28 opacity-20 md:opacity-25 animate-floatFast"
          alt=""
        />
      </div>

      <div className="flex flex-col gap-6 md:gap-8 justify-start items-center max-w-5xl mx-auto">
        {/* Rating Badge */}
        <div className="bg-white flex gap-1.5 md:gap-2 items-center justify-center rounded-full py-1.5 px-3 md:py-2 md:px-4 shadow-sm">
          <span className="flex flex-row items-center justify-center">
            <TiStarFullOutline className="text-blue-500 text-sm md:text-base" />
            <TiStarFullOutline className="text-blue-500 text-sm md:text-base" />
            <TiStarFullOutline className="text-blue-500 text-sm md:text-base" />
            <TiStarHalfOutline className="text-blue-500 text-sm md:text-base" />
            <TiStarOutline className="text-blue-500 text-sm md:text-base" />
          </span>
          <span className="text-black font-semibold text-sm md:text-base">4.5</span>
          <span className="text-black text-xs md:text-sm text-neutral-600">(120k Review)</span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-3xl text-black text-center leading-tight">
          Practice like the{" "}
          <span className="bg-orange-400 text-black px-2 md:px-4 py-1 md:py-0 shadow-lg md:shadow-xl inline-block transform -rotate-1 md:rotate-0">
            real exam.
          </span>{" "}
          Prepare with rankers.
        </h1>

        {/* Subheadline */}
        <p className="max-w-lg md:max-w-xl text-base md:text-lg lg:text-xl text-center text-neutral-700 px-4 md:px-0">
          Mock tests, PYQs, notes, flashcards, and performance analytics all in
          one place.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 w-full sm:w-auto px-4 sm:px-0">
          <Link 
            href="/login" 
            className="font-roboto flex text-white w-full sm:w-auto"
          >
            <span className="rounded-full flex bg-linear-to-br duration-300 hover:scale-105 from-blue-400 to-blue-600 items-center justify-center text-base md:text-lg shadow-lg md:shadow-xl px-6 py-3 md:px-8 md:py-4 w-full sm:w-auto">
              Start Preparation
            </span>
          </Link>

          <Link
            href="/explore"
            className="rounded-full flex bg-white duration-300 hover:scale-105 text-black items-center justify-center text-base md:text-lg shadow-lg md:shadow-xl px-6 py-3 md:px-8 md:py-4 border border-neutral-200 w-full sm:w-auto"
          >
            Explore Mocks
          </Link>
        </div>
      </div>
    </main>
  );
}