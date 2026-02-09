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
    <main className="flex items-center w-full pt-4 font-roboto bg-white">
      <div className="max-w-6xl w-full mx-auto flex items-center justify-between p-2">
        <Image
          src="/logo.png"
          alt="logo"
          width={240}
          height={240}
          className="h-14 w-auto object-contain px-8"
        />
        <ul className="text-black flex gap-6">
          {navlinks.map((item, index) => (
            <li key={index} className="">
              <Link href={item.link} className="hover:underline duration-300">
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
            ></button>
          ) : (
            <Link
              href="/login"
              className="font-roboto flex text-white"
              onClick={() => setIsLoggedIn(true)} // login
            >
              <span className="rounded-full flex items-center justify-center text-lg bg-linear-to-br from-neutral-500 to-black shadow-xl px-8 py-2">
                Login
              </span>
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}
