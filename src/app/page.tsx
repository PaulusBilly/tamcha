"use client";

import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#E3E2C7]">
      {/* Header with Logo and Navigation */}
      <header className="px-4 sm:px-9 py-4 sm:py-8 flex items-center justify-between mb-8 sm:mb-12">
        {/* Logo */}
        <a href="/">
          <h1
            className="font-times text-[40px] sm:text-[64px] leading-none text-[#267A18] cursor-pointer hover:opacity-80 transition-opacity"
            style={{ letterSpacing: "-0.04em" }}
          >
            Tamcha
          </h1>
        </a>

        {/* Desktop Navigation Bar with Icon */}
        <div className="hidden lg:flex items-center gap-8">
          <nav className="bg-[#D8D7C4] px-10 py-4 flex items-center gap-16">
            <a
              href="/menu"
              className="font-times text-[20px] tracking-wide text-[#267A18] hover:opacity-70 transition-opacity"
            >
              MENU
            </a>
            <a
              href="/location"
              className="font-times text-[20px] tracking-wide text-[#267A18] hover:opacity-70 transition-opacity"
            >
              LOCATION
            </a>
            <a
              href="/about"
              className="font-times text-[20px] tracking-wide text-[#267A18] hover:opacity-70 transition-opacity"
            >
              ABOUT US
            </a>
            <a
              href="/membership"
              className="font-times text-[20px] tracking-wide text-[#267A18] hover:opacity-70 transition-opacity"
            >
              MEMBERSHIP
            </a>
          </nav>
          <a
            href="/"
            className="w-16 h-16 flex items-center justify-center hover:opacity-70 transition-opacity"
          >
            <img
              src="/Tamcha-Icon.svg"
              alt="Tamcha Icon"
              className="w-full h-full"
            />
          </a>
        </div>

        {/* Mobile Hamburger Menu */}
        <button
          className="lg:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-[#267A18] transition-all ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-[#267A18] transition-all ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-[#267A18] transition-all ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </header>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#D8D7C4] mx-4 mb-8 rounded-sm overflow-hidden">
          <nav className="flex flex-col">
            <a
              href="/menu"
              className="font-times text-[18px] tracking-wide text-[#267A18] hover:bg-[#CDD1B8] transition-colors px-6 py-4 border-b border-[#267A18]/20"
              onClick={() => setIsMenuOpen(false)}
            >
              MENU
            </a>
            <a
              href="/location"
              className="font-times text-[18px] tracking-wide text-[#267A18] hover:bg-[#CDD1B8] transition-colors px-6 py-4 border-b border-[#267A18]/20"
              onClick={() => setIsMenuOpen(false)}
            >
              LOCATION
            </a>
            <a
              href="/about"
              className="font-times text-[18px] tracking-wide text-[#267A18] hover:bg-[#CDD1B8] transition-colors px-6 py-4 border-b border-[#267A18]/20"
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT US
            </a>
            <a
              href="/membership"
              className="font-times text-[18px] tracking-wide text-[#267A18] hover:bg-[#CDD1B8] transition-colors px-6 py-4"
              onClick={() => setIsMenuOpen(false)}
            >
              MEMBERSHIP
            </a>
          </nav>
          <div className="flex items-center justify-center py-4">
            <a href="/">
              <img
                src="/Tamcha-Icon.svg"
                alt="Tamcha Icon"
                className="w-12 h-12"
              />
            </a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="px-4 sm:px-9 pb-16">
        <div className="max-w-4xl mx-auto text-center py-20">
          <h2
            className="font-times text-[64px] sm:text-[96px] text-[#267A18] mb-8"
            style={{ letterSpacing: "-0.04em" }}
          >
            Welcome to Tamcha
          </h2>
          <p className="font-times text-[24px] sm:text-[32px] text-[#267A18] mb-12">
            Experience True Premium Matcha
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/menu"
              className="px-8 py-4 bg-[#267A18] font-times text-[18px] tracking-widest text-white hover:bg-[#1e5f13] transition-colors"
            >
              VIEW MENU
            </a>
            <a
              href="/location"
              className="px-8 py-4 border-2 border-[#267A18] bg-[#F5F4E8] font-times text-[18px] tracking-widest text-[#267A18] hover:bg-[#267A18] hover:text-white transition-colors"
            >
              FIND US
            </a>
          </div>
        </div>

        {/* Featured Icon */}
        <div className="flex justify-center mt-16">
          <img
            src="/Tamcha-Icon.svg"
            alt="Tamcha"
            className="w-32 h-32 sm:w-48 sm:h-48 opacity-80"
          />
        </div>
      </div>
    </div>
  );
}
