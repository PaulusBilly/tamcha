"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function MenuPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const products = [
    { id: 1, name: "PRODUCT 1" },
    { id: 2, name: "PRODUCT 2" },
    { id: 3, name: "PRODUCT 3" },
    { id: 4, name: "PRODUCT 4" },
    { id: 5, name: "PRODUCT 5" },
    { id: 6, name: "PRODUCT 6" },
    { id: 7, name: "PRODUCT 7" },
    { id: 8, name: "PRODUCT 8" },
  ];

  return (
    <div className="min-h-screen bg-[#E3E2C7]">
      {/* Header with Logo and Navigation */}
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
          <Link
            href="/menu"
            className="font-times text-[20px] tracking-wide text-[#267A18] hover:opacity-70 transition-opacity"
          >
            MENU
          </Link>
          <Link
            href="/artikel"
            className="font-times text-[20px] tracking-wide text-[#267A18] hover:opacity-70 transition-opacity"
          >
            ARTICLE
          </Link>
          <Link
            href="/location"
            className="font-times text-[20px] tracking-wide text-[#267A18] hover:opacity-70 transition-opacity"
          >
            LOCATION
          </Link>
          <Link
            href="/about"
            className="font-times text-[20px] tracking-wide text-[#267A18] hover:opacity-70 transition-opacity"
          >
            ABOUT US
          </Link>
          <Link
            href="/membership"
            className="font-times text-[20px] tracking-wide text-[#267A18] hover:opacity-70 transition-opacity"
          >
            MEMBERSHIP
          </Link>
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
            <Link
              href="/menu"
              className="font-times text-[18px] tracking-wide text-[#267A18] hover:bg-[#CDD1B8] transition-colors px-6 py-4 border-b border-[#267A18]/20"
              onClick={() => setIsMenuOpen(false)}
            >
              MENU
            </Link>
            <Link
              href="/artikel"
              className="font-times text-[18px] tracking-wide text-[#267A18] hover:bg-[#CDD1B8] transition-colors px-6 py-4 border-b border-[#267A18]/20"
              onClick={() => setIsMenuOpen(false)}
            >
              ARTICLE
            </Link>
            <Link
              href="/location"
              className="font-times text-[18px] tracking-wide text-[#267A18] hover:bg-[#CDD1B8] transition-colors px-6 py-4 border-b border-[#267A18]/20"
              onClick={() => setIsMenuOpen(false)}
            >
              LOCATION
            </Link>
            <Link
              href="/about"
              className="font-times text-[18px] tracking-wide text-[#267A18] hover:bg-[#CDD1B8] transition-colors px-6 py-4 border-b border-[#267A18]/20"
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT US
            </Link>
            <Link
              href="/membership"
              className="font-times text-[18px] tracking-wide text-[#267A18] hover:bg-[#CDD1B8] transition-colors px-6 py-4"
              onClick={() => setIsMenuOpen(false)}
            >
              MEMBERSHIP
            </Link>
          </nav>
        </div>
      )}

      {/* Main Content */}
      <div className="px-4 sm:px-9 pb-16">
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-8">
          <button className="px-4 sm:px-8 py-2.5 bg-[#9BBE8D] font-times text-[14px] sm:text-[16px] tracking-widest text-white hover:bg-[#267A18] transition-colors">
            FILTER
          </button>
          <button className="px-4 sm:px-8 py-2.5 border-2 border-[#267A18] bg-[#F5F4E8] font-times text-[14px] sm:text-[16px] tracking-widest text-[#267A18] hover:bg-[#267A18] hover:text-white transition-colors">
            ALL
          </button>
          <button className="px-4 sm:px-8 py-2.5 border-2 border-[#267A18] bg-[#F5F4E8] font-times text-[14px] sm:text-[16px] tracking-widest text-[#267A18] hover:bg-[#267A18] hover:text-white transition-colors">
            MILK
          </button>
          <button className="px-4 sm:px-8 py-2.5 border-2 border-[#267A18] bg-[#F5F4E8] font-times text-[14px] sm:text-[16px] tracking-widest text-[#267A18] hover:bg-[#267A18] hover:text-white transition-colors">
            OAT
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col gap-2">
              {/* Product Image Placeholder */}
              <div className="aspect-square bg-[#D4D8C5] rounded-sm"></div>
              {/* Product Name */}
              <div className="bg-[#D8D7C4] py-3 text-center">
                <p className="font-times text-[20px] tracking-wide text-[#267A18]">
                  {product.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
