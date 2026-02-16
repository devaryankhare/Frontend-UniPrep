


"use client";

import { FaPowerOff } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { user, logout } = useAuthStore();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    setOpen(false);
    router.push("/login");
  };

  const navlinks = [
    { title: "Home", link: "/" },
    { title: "PYQs", link: "#" },
    { title: "Materials", link: "#" },
    { title: "FAQs", link: "#" },
  ];

  const userInitial = user?.name?.charAt(0).toUpperCase();

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

        <div className="relative" ref={dropdownRef}>
          {user ? (
            <>
              <button
                onClick={() => setOpen(!open)}
                className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold"
              >
                {userInitial}
              </button>

              {open && (
                <div className="absolute z-50 right-0 mt-2 w-40 bg-white shadow-lg rounded-xl border">
                  <Link
                    href="/dashboard"
                    className="px-4 py-2 flex gap-2 border-b border-neutral-200 justify-center items-center text-black hover:bg-gray-100 rounded-t-xl"
                    onClick={() => setOpen(false)}
                  >
                    <MdDashboard />
                    <span>Dashboard</span>
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="w-full text-left flex justify-center items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-b-xl text-red-500"
                  >
                    <FaPowerOff />
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </>
          ) : (
            <Link
              href="/login"
              className="rounded-full bg-linear-to-br from-blue-400 via-blue-500 to-blue-600 text-white px-8 py-2 hover:scale-105 duration-300 shadow-xl"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}
