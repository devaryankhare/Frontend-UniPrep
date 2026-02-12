"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    await fetch("/api/logout", { method: "POST" });
  };

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

        <div>
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="rounded-full bg-red-500 text-white px-6 py-2 hover:scale-105 duration-300 shadow-xl"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/signup"
              className="rounded-full bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 text-white px-8 py-2 hover:scale-105 duration-300 shadow-xl"
            >
              Join Now
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}
