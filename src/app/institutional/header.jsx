"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", href: "/institutional/institute-home" },
  { name: "Services", href: "/institutional/services" },
  { name: "Framework", href: "/institutional/framework" },
  { name: "Portfolio", href: "/institutional/portfolio" },
  { name: "About Us", href: "/institutional/about" },
  { name: "Contact Us", href: "/institutional/contact" },
];

export default function InstitutionalHeader() {
  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* 🔹 Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-green-800 text-white flex items-center justify-center font-bold rounded">
            BV
          </div>
          <div>
            <h1 className="text-lg font-bold text-gray-900 leading-none">
              INSTITUTIONAL
            </h1>
            <p className="text-xs text-green-700 tracking-widest">
              BHARATX VENTURES
            </p>
          </div>
        </Link>

        {/* 🔹 Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -2 }}
              className="relative group"
            >
              <Link
                href={item.href}
                className="text-sm font-semibold text-gray-600 hover:text-green-800 transition"
              >
                {item.name.toUpperCase()}
              </Link>

              {/* Underline Animation */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-700 transition-all duration-300 group-hover:w-full"></span>
            </motion.div>
          ))}
        </nav>

        {/* 🔹 CTA Buttons */}
        <div className="flex items-center gap-4">
          
          {/* Back to Main Website */}
          <Link href="/">
            <button className="hidden md:block border border-green-800 text-green-800 px-4 py-2 text-sm font-semibold rounded hover:bg-green-800 hover:text-white transition">
              BACK TO MAIN
            </button>
          </Link>

          {/* Primary CTA */}
          <Link href="/institutional/contact">
            <button className="bg-green-800 text-white px-5 py-2 text-sm font-semibold rounded hover:bg-green-900 transition shadow">
              GET IN TOUCH
            </button>
          </Link>

        </div>
      </div>
    </header>
  );
}