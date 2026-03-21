"use client";

import React from "react";
import InstitutionalHeader from "@/app/institutional/header";
import Footer from "@/components/Footer";
import GoToTop from "@/components/GoToTop";

export default function InstitutionalLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* 🔹 Institutional Navbar */}
      <InstitutionalHeader />

      {/* 🔹 Page Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* 🔹 Footer (optional – keep same or create separate) */}
      <Footer />

      {/* 🔹 Scroll To Top */}
      <GoToTop />
    </div>
  );
}