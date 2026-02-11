import {
  TiStarFullOutline,
  TiStarHalfOutline,
  TiStarOutline,
} from "react-icons/ti";
import Link from "next/link";

export default function Hero() {
  return (
    <main className="mx-auto w-full py-24 backdrop-blur-lg">
      <div className="flex flex-col gap-8 justify-start items-center">
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
      </div>
    </main>
  );
}
