"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="p-4 relative sm:px-12 shadow flex justify-between items-center">
      <Link href="/">
        <Image src="/logo.svg" alt="logo" width={150} height={100} />
      </Link>
      <button id="burgerMenu" onClick={toggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <nav
        className={`absolute ${
          menuOpen ? "flex" : "hidden"
        } right-12 top-20 z-10 bg-gray-200 p-2 rounded-lg flex-col gap-2 border border-black`}
      >
        <Link className="p-2 px-4 hover:bg-gray-50 rounded-md" href="/panel">
          Panel użytkownika
        </Link>
      </nav>
    </header>
  );
}
