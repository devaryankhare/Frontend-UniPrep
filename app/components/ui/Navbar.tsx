"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";

export default function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navlinks = [
    {
      title: "Home",
      link: "#",
    },
    {
      title: "PYQs",
      link: "#",
    },
    {
      title: "Materials",
      link: "#",
    },
    {
      title: "FAQs",
      link: "#",
    },
  ];

  return (
    <main className="flex items-center justify-center">
      <div className="max-w-6xl flex items-center justify-center border border-red-500">
        <Image height={64} width={64} alt="logo" src="/logo.png" />
        <ul className="text-black flex gap-6">
          {navlinks.map((item, index) => (
            <li key={index} className="">
              <Link href={item.link} className="">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* auth */}
        <div>
          {isLoggedIn ? (
            <button
              onClick={() => setIsLoggedIn(false)} // logout
              className="flex items-center gap-2"
            >
            </button>
          ) : (
            <Link
              href="/login"
              className="px-6 py-2 rounded-lg text-lg bg-linear-to-br from-blue-500 to-blue-700 text-white"
              onClick={() => setIsLoggedIn(true)} // login
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}
