"use client";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

const capsules = [
  "Happy Students",
  "24/7 Availability",
  "Best Mentors",
  "Learning",
  "Analytics",
];

export default function Grid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pillsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.fromTo(
      pillsRef.current,
      {
        y: -80,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
      },
    );
  }, []);

  return (
    <main className="flex flex-col gap-6 w-full">
      <div className="grid grid-cols-6 gap-6 w-full">
        <div className="flex flex-col gap-6 w-full col-span-2">
          <div className="flex gap-6 flex-wrap">
            <img
              src="https://i.pravatar.cc/100?img=12"
              className="rounded-2xl shadow-lg"
              height={166}
              width={166}
              alt="person"
            />
            <img
              src="https://i.pravatar.cc/100?img=13"
              className="rounded-2xl shadow-lg"
              height={166}
              width={166}
              alt="person"
            />
          </div>
          <div>
            <div className="bg-linear-to-br shadow-lg from-orange-200 to-orange-300 min-h-[260px] lg:h-[34vh] rounded-2xl flex flex-col justify-between p-6">
              {/* Avatar Stack */}
              <div className="flex -space-x-3">
                {[
                  "https://i.pravatar.cc/100?img=1",
                  "https://i.pravatar.cc/100?img=2",
                  "https://i.pravatar.cc/100?img=3",
                  "https://i.pravatar.cc/100?img=4",
                  "https://i.pravatar.cc/100?img=5",
                  "https://i.pravatar.cc/100?img=7",
                ].map((src, i) => (
                  <img
                    key={i}
                    width={12}
                    height={12}
                    src={src}
                    alt="user avatar"
                    className="w-12 h-12 rounded-full border-2 border-orange-300 object-cover"
                  />
                ))}
              </div>

              <div className="flex flex-col gap-2">
                <h1 className="text-black text-6xl font-semibold">50+</h1>
                <span className="text-xl text-black">Worldwide Students</span>
              </div>
            </div>
          </div>
        </div>

        {/* Ken Burns Slideshow */}
        <div className="relative h-[65vh] shadow-lg w-full overflow-hidden rounded-2xl col-span-2">
          {["/colleges/college1.webp", "/colleges/college2.jpeg", "/colleges/college3.jpeg"].map(
            (src, i) => (
              <motion.div
                key={src}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1 }}
                animate={{
                  opacity: [0, 1, 1, 0],
                  scale: [1, 1.12, 1.18, 1.2],
                }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  delay: i * 6,
                  ease: "linear",
                }}
              >
                <Image
                  src={src}
                  alt="college image"
                  fill
                  className="object-cover object-center"
                  priority={i === 0}
                />
              </motion.div>
            )
          )}
        </div>

        <div className="col-span-2 flex flex-col gap-6">
          <div className="h-[36vh] flex flex-col justify-center items-center bg-linear-to-br shadow-lg from-green-200 to-green-300 rounded-2xl relative overflow-hidden">

            {/* Circular Accuracy Graph */}
            <div className="relative w-40 h-40">
              <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                {/* Background Circle */}
                <path
                  d="M18 2.0845
                     a 15.9155 15.9155 0 0 1 0 31.831
                     a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#bfdbfe"
                  strokeWidth="3"
                />

                {/* Progress Circle */}
                <path
                  d="M18 2.0845
                     a 15.9155 15.9155 0 0 1 0 31.831
                     a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="100, 100"
                />
              </svg>

              {/* Center Text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold text-black">100%</h1>
                <p className="text-sm text-black">Accuracy</p>
              </div>
            </div>

            {/* Subtitle */}
            <p className="mt-4 text-xl text-black">Over subjects covered</p>
          </div>
          <div className="h-[26vh] shadow-lg bg-linear-to-br from-yellow-200 to-yellow-300 rounded-2xl p-6 flex flex-col gap-4">
            <h1 className="text-xl text-black">Learn & Prepare</h1>

            {/* Capsule area */}
            <div
              ref={containerRef}
              className="relative flex flex-wrap gap-3 mt-auto"
            >
              {capsules.map((text, i) => (
                <motion.div
                  key={text}
                  ref={(el) => {
                    if (el) pillsRef.current[i] = el;
                  }}
                  className="bg-white backdrop-blur px-4 py-2 rounded-full text-xs text-black"
                >
                  {text}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
