"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <header className="px-4 sm:px-9 py-4 sm:py-8 flex items-center justify-between mb-8 sm:mb-12">
        {/* Logo */}
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <Image
            src="/Tamcha-Logo.svg"
            alt="Tamcha"
            width={140}
            height={70}
            className="h-[50px] sm:h-[70px] w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation Bar */}
        <nav className="hidden lg:flex bg-[#D8D7C4] px-10 py-4 items-center gap-16">
          <Link href="/menu" className="font-times text-[20px] tracking-wide text-[#267A18] hover:opacity-70 transition-opacity">MENU</Link>
          <Link href="/article" className="font-times text-[20px] tracking-wide text-[#267A18] hover:opacity-70 transition-opacity">article</Link>
          <Link href="/location" className="font-times text-[20px] tracking-wide text-[#267A18] hover:opacity-70 transition-opacity">LOCATION</Link>
          <Link href="/about" className="font-times text-[20px] tracking-wide text-[#267A18] hover:opacity-70 transition-opacity">ABOUT US</Link>
          <Link href="/membership" className="font-times text-[20px] tracking-wide text-[#267A18] hover:opacity-70 transition-opacity">MEMBERSHIP</Link>
        </nav>

        {/* Mobile Hamburger Menu */}
        <button
          className="lg:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-[#267A18] transition-all ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-0.5 bg-[#267A18] transition-all ${isMenuOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 bg-[#267A18] transition-all ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </header>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#D8D7C4] mx-4 mb-8 rounded-sm overflow-hidden">
          <nav className="flex flex-col">
            <Link href="/menu" className="font-times text-[18px] tracking-wide text-[#267A18] hover:bg-[#CDD1B8] transition-colors px-6 py-4 border-b border-[#267A18]/20" onClick={() => setIsMenuOpen(false)}>MENU</Link>
            <Link href="/article" className="font-times text-[18px] tracking-wide text-[#267A18] hover:bg-[#CDD1B8] transition-colors px-6 py-4 border-b border-[#267A18]/20" onClick={() => setIsMenuOpen(false)}>article</Link>
            <Link href="/location" className="font-times text-[18px] tracking-wide text-[#267A18] hover:bg-[#CDD1B8] transition-colors px-6 py-4 border-b border-[#267A18]/20" onClick={() => setIsMenuOpen(false)}>LOCATION</Link>
            <Link href="/about" className="font-times text-[18px] tracking-wide text-[#267A18] hover:bg-[#CDD1B8] transition-colors px-6 py-4 border-b border-[#267A18]/20" onClick={() => setIsMenuOpen(false)}>ABOUT US</Link>
            <Link href="/membership" className="font-times text-[18px] tracking-wide text-[#267A18] hover:bg-[#CDD1B8] transition-colors px-6 py-4" onClick={() => setIsMenuOpen(false)}>MEMBERSHIP</Link>
          </nav>
        </div>
      )}
    </>
  );
}