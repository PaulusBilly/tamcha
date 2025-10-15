"use client";

import { useState } from "react";

export default function MembershipPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#E3E2C7]">
      {/* Header with Logo and Navigation */}
      <header className="px-4 sm:px-9 py-4 sm:py-8 flex items-center justify-between mb-8 sm:mb-12">
        {/* Logo */}
        <a href="/" className="hover:opacity-80 transition-opacity">
          <img
            src="/Tamcha-Logo.svg"
            alt="Tamcha"
            className="h-[50px] sm:h-[70px] w-auto"
          />
        </a>

        {/* Desktop Navigation Bar */}
        <nav className="hidden lg:flex bg-[#D8D7C4] px-10 py-4 items-center gap-16">
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
        </div>
      )}

      {/* Page Content */}
      <div className="px-4 sm:px-9 pb-16">
        <h2 className="font-times text-[48px] sm:text-[72px] text-[#267A18] mb-8">
          Membership
        </h2>
        <div className="bg-[#D8D7C4] p-8 rounded-sm">
          <p className="font-times text-[20px] text-[#267A18]">
            Coming soon...
          </p>
        </div>
      </div>
    </div>
  );
}
