"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import { FiArrowUpRight } from "react-icons/fi";

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
    <main className="flex items-center w-full pt-4 font-roboto">
      <div className="max-w-6xl w-full mx-auto flex items-center justify-between shadow-xl rounded-full px-6">
        <Image className="" height={124} width={72} alt="logo" src="/logo.png" />
        <ul className="text-black flex gap-6">
          {navlinks.map((item, index) => (
            <li key={index} className="">
              <Link href={item.link} className="text-md">
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
              className="font-roboto flex text-white"
              onClick={() => setIsLoggedIn(true)} // login
            >
              <span className="rounded-full flex items-center justify-center text-lg bg-linear-to-br from-blue-500 to-blue-700 shadow-xl px-8 py-2">Login</span>
              <span className="bg-black rounded-full p-3 flex items-center justify-center shadow-xl"><FiArrowUpRight className="text-xl"/></span>
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}
