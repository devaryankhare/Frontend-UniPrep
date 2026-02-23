"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const navlinks = [
    { title: "Home", link: "/" },
    { title: "PYQs", link: "#" },
    { title: "Materials", link: "#" },
    { title: "FAQs", link: "#" },
  ];

  return (
    <main className="flex items-center w-full pt-4 font-roboto bg-white">
      <div className="max-w-6xl w-full mx-auto flex items-center justify-between p-2">
        <Image
          src="/logo.svg"
          alt="logo"
          width={240}
          height={240}
          className="h-14 w-auto object-contain px-8"
        />

        <ul className="text-black flex gap-6">
          {navlinks.map((item, index) => (
            <li key={index}>
              <Link href={item.link} className="hover:underline duration-300">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="relative">
          <Link
            href="/login"
            className="rounded-full bg-linear-to-br from-blue-400 via-blue-500 to-blue-600 text-white px-8 py-2 hover:scale-105 duration-300 shadow-xl"
          >
            Login
          </Link>
        </div>
      </div>
    </main>
  );
}
