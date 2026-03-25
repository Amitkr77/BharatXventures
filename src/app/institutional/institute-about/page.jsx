"use client";

import React from "react";
import { motion } from "framer-motion";

/* ================= ANIMATION ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

export default function AboutPage() {
  return (
    <div className="bg-white text-[#0A3D2E]">

      {/* ================= HERO ================= */}
          <section className="py-24 lg:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">

              {/* LEFT CONTENT */}
              <div className="lg:col-span-7">

                {/* Badge */}
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full 
                  bg-amber-200/20 border border-amber-500/30 
                  text-amber-500 text-xs font-bold tracking-[0.2em] uppercase mb-6"
                >
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
                  </span>
                  Established Growth Partner
                </motion.div>

                {/* Heading */}
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight">
                  About <br />
                  <span className="text-gray-300">Bharatx Ventures</span>
                </h1>

                {/* Description */}
                <p className="text-gray-500 mt-6 max-w-xl leading-relaxed">
                  Empowering Indian SMEs to scale through institutionalized strategic 
                  partnerships and venture building. We bridge the gap between local 
                  industrial potential and global operational standards.
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4 mt-8">
                  <button className="bg-green-800 hover:bg-green-600 transition text-white hover:scale-105 duration-300 px-8 py-3 font-bold text-xs tracking-widest uppercase rounded-sm">
                    Our Methodology
                  </button>

                  <button className="border border-gray-300 hover:bg-green-600 hover:border-white hover:text-white transition hover:scale-105 duration-300 px-8 py-3 font-bold text-xs tracking-widest uppercase rounded-sm">
                    View Portfolio
                  </button>
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div className="lg:col-span-5 relative">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxiXMXjp1ysBRm7A1Hm0XwKPmZet7DVeJ3JW0Ek41K95pdOIKW5LPhLig-6nGahWh4ZpgXDo5lJbpz5ucf5hM6B51f92CALsh7CTTQuT22P4HUZUp4zEn-NuSNFlu6GELXoGm8ONfktMXRGlALzDeCzbQbtPZzLSNnxJwFSa14ntIybU2CgXTyj6djYvN63PFIAHyrEauT49aHbyiSENFc4PWJPJ27Vvg6l5QVQBte8mXT1r6sv7-N3L15UHidj-h-tHrSIiIpOgcJ"
                  alt="Bharatx Ventures"
                  className="w-full h-[400px] lg:h-[500px] object-cover grayscale rounded-xl"
                />

                {/* STAT CARD */}
                <div className="absolute bottom-[-30px] left-[-20px] lg:left-[-40px] bg-[#0A3D2E] text-white p-6 lg:p-8 w-[220px] lg:w-[260px] rounded-xl shadow-2xl">
                  <h3 className="text-3xl lg:text-4xl font-bold text-[#D4AF37]">
                    100Cr+
                  </h3>
                  <p className="text-xs mt-2 text-gray-300 leading-relaxed">
                    Target venture scale for high-impact industrial transformation
                  </p>
                </div>
              </div>

            </div>
        </section>

      {/* ================= VISION / MISSION ================= */}
      <section className="py-20 bg-gray-50 border-y">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16">

          <div>
            <h3 className="text-xs text-[#D4AF37] tracking-[0.3em] mb-4 uppercase">
              Our Vision
            </h3>
            <h2 className="text-3xl font-bold mb-4">
              Scaling local enterprises to global institutional standards.
            </h2>
            <p className="text-gray-500">
              We envision a future where Indian SMEs lead global markets through
              institutional frameworks and governance.
            </p>
          </div>

          <div className="lg:border-l lg:pl-16">
            <h3 className="text-xs text-[#D4AF37] tracking-[0.3em] mb-4 uppercase">
              Our Mission
            </h3>
            <h2 className="text-3xl font-bold mb-4">
              Building ₹100Cr+ enterprises through strategic excellence.
            </h2>
            <p className="text-gray-500">
              Our mission is to create scalable ventures through disciplined
              capital enablement and execution.
            </p>
          </div>
        </div>
      </section>

      {/* ================= LEADERSHIP PHILOSOPHY ================= */}
            <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">

                {/* Heading */}
                <h2 className="text-4xl font-extrabold text-[#0A3D2E] mb-4">
                Leadership Philosophy
                </h2>

                <p className="text-gray-500 max-w-2xl mb-16">
                Our leadership is anchored in the belief that institutional standards and
                unwavering integrity are the foundation of long-term sustainable growth.
                </p>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-12">

                {/* Card 1 */}
                <div className="group">
                    <div className="text-[#C5A059] text-3xl mb-4">verified_user</div>

                    <h3 className="font-bold text-sm tracking-widest uppercase mb-2">
                    Integrity First
                    </h3>

                    <p className="text-gray-500 text-sm leading-relaxed">
                    Adhering to the highest ethical standards in every transaction,
                    ensuring that our partners and stakeholders build on a foundation of
                    trust and transparency.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="group">
                    <div className="text-[#C5A059] text-3xl mb-4">account_balance</div>

                    <h3 className="font-bold text-sm tracking-widest uppercase mb-2">
                    Institutional Standards
                    </h3>

                    <p className="text-gray-500 text-sm leading-relaxed">
                    Implementing governance frameworks traditionally reserved for blue-chip
                    corporations into the SME ecosystem to drive professional excellence.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="group">
                    <div className="text-[#C5A059] text-3xl mb-4">trending_up</div>

                    <h3 className="font-bold text-sm tracking-widest uppercase mb-2">
                    Sustainable Growth
                    </h3>

                    <p className="text-gray-500 text-sm leading-relaxed">
                    Focusing on long-term value creation rather than short-term gains,
                    ensuring businesses are resilient to global changes.
                    </p>
                </div>

                </div>
            </div>
            </section>


            {/* ================= VENTURE BUILDING ================= */}
            <section className="py-28 bg-[#0A3D2E] text-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">

                {/* LEFT CONTENT */}
                <div>
                <h2 className="text-4xl font-extrabold leading-tight mb-12">
                    Venture Building <br />
                    <span className="text-[#C5A059]">Methodology</span>
                </h2>

                <div className="space-y-12">

                    {/* Stage 1 */}
                    <div className="relative pl-6 border-l border-white/20">
                    <div className="absolute left-[-1px] top-0 w-[2px] h-10 bg-[#C5A059]"></div>

                    <span className="text-[#C5A059] text-xs uppercase tracking-widest">
                        Stage 01
                    </span>

                    <h4 className="text-lg font-bold mt-2 mb-2">Incubate</h4>

                    <p className="text-gray-300 text-sm max-w-md">
                        Identifying high-potential SMEs and providing them with foundational
                        technology and institutional operational frameworks.
                    </p>
                    </div>

                    {/* Stage 2 */}
                    <div className="relative pl-6 border-l border-white/20">
                    <div className="absolute left-[-1px] top-0 w-[2px] h-10 bg-[#C5A059]"></div>

                    <span className="text-[#C5A059] text-xs uppercase tracking-widest">
                        Stage 02
                    </span>

                    <h4 className="text-lg font-bold mt-2 mb-2">Scale</h4>

                    <p className="text-gray-300 text-sm max-w-md">
                        Aggressive expansion through strategic marketing, talent acquisition,
                        and sophisticated market penetration strategies.
                    </p>
                    </div>

                    {/* Stage 3 */}
                    <div className="relative pl-6 border-l border-white/20">
                    <div className="absolute left-[-1px] top-0 w-[2px] h-10 bg-[#C5A059]"></div>

                    <span className="text-[#C5A059] text-xs uppercase tracking-widest">
                        Stage 03
                    </span>

                    <h4 className="text-lg font-bold mt-2 mb-2">Capitalize</h4>

                    <p className="text-gray-300 text-sm max-w-md">
                        Optimizing financial structures and unlocking capital to reach
                        institutional and global investment standards.
                    </p>
                    </div>

                </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="relative">

                {/* Image */}
                <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPHbeb5-fuR9P983SuzX_IPAyGDStxb_pPyspPcwAE2YzltcO910DlEIDuedxzUpEVxuqNSiV5Pwrg3BstLugNsDT5UbkdUPUBjuXqmsle7TOM27JvtgwJvT9uoay3sY2q27EPY9qw5iz9c6pjavCF4Qq4iz-oy4G4dyzEpIVfD1e4gPmHfFi3apoeGPtaLjPphx_mTA_sxe05saukmgyjs1LEndJU3mJhH7Ekndbp04xGYyF5azF6QxuD6fSWhzuLsGMawV0cmH9u"
                    className="w-full h-[420px] object-cover grayscale opacity-80"
                />

                {/* Border frame */}
                <div className="absolute inset-6 border border-[#C5A059]/30"></div>

                </div>

            </div>
            </section>

            {/* ================= EXECUTIVE + ADVISORY ================= */}
            <section className="py-28 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">

                {/* ================= EXECUTIVE ================= */}
                <div className="grid lg:grid-cols-12 gap-16 items-start mb-28">

                {/* IMAGE */}
                <div className="lg:col-span-5 relative">
                    <img
                    src=""
                    className="w-full h-[500px] object-cover grayscale"
                    />

                    {/* NAME CARD */}
                    <div className="absolute bottom-0 left-0 bg-[#0A3D2E] text-white px-6 py-5 w-[70%]">
                    <h3 className="text-lg font-bold"></h3>
                    <p className="text-xs tracking-widest text-gray-300 uppercase">
                        Founder & CEO
                    </p>
                    </div>
                </div>

                {/* CONTENT */}
                <div className="lg:col-span-7">

                    <span className="text-[#C5A059] text-xs uppercase tracking-[0.3em] font-bold">
                    Executive Stewardship
                    </span>

                    <h2 className="text-4xl lg:text-5xl font-extrabold mt-4 mb-8 leading-tight text-[#0A3D2E]">
                    Visionary Governance & Strategic Stewardship
                    </h2>

                    {/* QUOTE */}
                    <p className="text-xl italic text-gray-500 mb-8 leading-relaxed">
                    {`Bharatx Ventures was founded on the principle of institutionalizing
                    the Indian SME sector. We don't just provide capital; we provide the
                    strategic scaffolding required for homegrown businesses to evolve into
                    global titans.`}
                    </p>

                    {/* PARAGRAPHS */}
                    <div className="space-y-4 text-gray-500 text-sm leading-relaxed">
                    <p>
                        Naveen Kumar brings over two decades of experience in investment
                        banking and industrial restructuring. Under his leadership,
                        Bharatx Ventures has pioneered a unique hybrid model of venture
                        building.
                    </p>
                    <p>
                        His vision is to create a pan-India ecosystem where SMEs can leverage
                        institutional capital, governance standards, and technology.
                    </p>
                    </div>

                </div>
                </div>

                {/* ================= ADVISORY BOARD ================= */}
                <div className="text-center mb-16">
                <h2 className="text-3xl font-extrabold text-[#0A3D2E] mb-4">
                    Our Advisory Board
                </h2>

                <p className="text-gray-500 max-w-2xl mx-auto">
                    {`Seasoned industry veterans and policy experts committed to scaling
                    India's industrial landscape through institutional excellence.`}
                </p>
                </div>

                {/* GRID */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                {/* MEMBER 1 */}
                <div className="bg-white border">
                    <img
                    src=""
                    className="w-full h-[260px] object-cover grayscale"
                    />
                    <div className="p-6">
                    <h3 className="font-bold"></h3>
                    <p className="text-[#C5A059] text-xs uppercase mt-1 mb-3">
                        Managing Director
                    </p>
                    <p className="text-xs text-gray-500">
                        Industrial restructuring and consulting expert.
                    </p>
                    </div>
                </div>

                {/* MEMBER 2 */}
                <div className="bg-white border">
                    <img
                    src=""
                    className="w-full h-[260px] object-cover grayscale"
                    />
                    <div className="p-6">
                    <h3 className="font-bold"></h3>
                    <p className="text-[#C5A059] text-xs uppercase mt-1 mb-3">
                        Head of Automation
                    </p>
                    <p className="text-xs text-gray-500">
                        AI & Industry 4.0 integration leader.
                    </p>
                    </div>
                </div>

                {/* MEMBER 3 */}
                <div className="bg-white border">
                    <img
                    src=""
                    className="w-full h-[260px] object-cover grayscale"
                    />
                    <div className="p-6">
                    <h3 className="font-bold"></h3>
                    <p className="text-[#C5A059] text-xs uppercase mt-1 mb-3">
                        Director of Capital
                    </p>
                    <p className="text-xs text-gray-500">
                        Financial structuring and capital markets expert.
                    </p>
                    </div>
                </div>

                {/* MEMBER 4 */}
                <div className="bg-white border">
                    <img
                    src=""
                    className="w-full h-[260px] object-cover grayscale"
                    />
                    <div className="p-6">
                    <h3 className="font-bold"></h3>
                    <p className="text-[#C5A059] text-xs uppercase mt-1 mb-3">
                        Lead Initiatives
                    </p>
                    <p className="text-xs text-gray-500">
                        Agriculture & sustainability expert.
                    </p>
                    </div>
                </div>

                </div>
            </div>
            </section>
      {/* ================= PREMIUM CTA ================= */}
        <section className="relative py-28 bg-[#0A3D2E] text-white text-center overflow-hidden">

        {/* Background Accent Shape */}
        <div className="absolute top-0 right-0 w-[40%] h-full bg-[#1f5b46] skew-x-[-20deg] translate-x-1/3 opacity-70"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">

            {/* Top Label */}
            <span className="text-[#D4AF37] text-xs uppercase tracking-[0.4em] font-bold">
            Strategic Partnership
            </span>

            {/* Heading */}
            <h2 className="text-4xl md:text-6xl font-extrabold mt-6 leading-tight">
            Partner with <br />
            <span className="text-[#D4AF37]">Visionary Leadership</span>
            </h2>

            {/* Paragraph */}
            <p className="text-gray-300 max-w-2xl mx-auto mt-6 mb-12 leading-relaxed">
            Join forces with our seasoned experts to drive industrial transformation.
            Together, we can realize the full potential of your enterprise through
            strategic excellence and institutionalized growth.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-6">

            {/* Primary Button */}
            <button className="bg-[#D4AF37] text-[#0A3D2E] px-10 py-4 font-bold text-sm uppercase tracking-widest hover:scale-105 transition-all">
                Meet Our Team
            </button>

            {/* Outline Button */}
            <button className="border border-[#D4AF37] text-[#D4AF37] px-10 py-4 font-bold text-sm uppercase tracking-widest hover:bg-[#D4AF37] hover:text-[#0A3D2E] transition-all">
                Get in Touch
            </button>

            </div>
        </div>
        </section>

    </div>
  );
}