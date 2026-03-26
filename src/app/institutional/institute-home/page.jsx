"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";  

/* ================= ANIMATION ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const stagger = {
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

export default function HomePage() {
  return (
    <main className="bg-white text-[#1A3C34] overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="min-h-screen flex items-center pt-24">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12 items-center"
        >
          {/* LEFT */}
          <motion.div variants={fadeUp} className="md:col-span-7">
            <div className="w-10 h-[2px] bg-[#C5A059] mb-8"></div>

            <h1 className="text-5xl sm:text-6xl md:text-[72px] font-semibold leading-[1.05] tracking-tight mb-8">
              Building Scalable <br />
              Enterprises for the <br />
              <span className="text-[#C5A059]">Future of India.</span>
            </h1>

            <p className="text-lg text-gray-600 max-w-lg mb-10 font-light">
             {`Operational excellence, institutional capital, and strategic
              governance at the core of India's growth story.`}
            </p>

            <button className="px-8 py-4 border border-[#1A3C34] text-[#1A3C34] font-semibold hover:bg-green-700 hover:text-white transition text-sm uppercase tracking-widest">
              Discover Our Impact
            </button>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            variants={fadeUp}
            className="group md:col-span-5 h-[350px] md:h-[600px] overflow-hidden"
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkeHPwLFXRhdRdtuC6VXNB1aLBSLsHUASN4gtRZj90zUuZxBH-qQrm9dYf4La3LeTlOwh3gDW941oAYXuazQF89wXaVViFASCQtYGaGZcDBBg9Xdoc0e_4Q7XkwwPGo8mxZd8yrQpVr4OfjVT6aqoxpoBG2t_n264lHspe7pWDOMNhJmc2FOh-ZW8sU30KocmjcfeyCIfoXwagrQwk9wAyc53jlLBrCC7fbXDGRlX7tdlMOhPxVkgci5nMaZwuJz5LJa-_KpowNzoj"
              alt="Industrial"
              className="w-full h-full object-cover grayscale 
                            group-hover:grayscale-0 group-hover:scale-101 transition duration-500 contrast-110"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* ================= VERTICALS ================= */}
      <section className="py-24 bg-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeUp}
            className="mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C5A059] block mb-4">
              Core Focus
            </span>
            <h2 className="text-4xl font-semibold">Strategic Verticals</h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Industrial Infrastructure",
                desc: "Building the physical foundation for a modern economy through logistics and manufacturing hubs.",
              },
              {
                title: "Digital Transformation",
                desc: "Deploying enterprise-grade technology to streamline traditional supply chains.",
              },
              {
                title: "Consumer Platforms",
                desc: "Scaling high-growth consumer brands through integrated operations.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -10 }}
                className="group relative bg-white p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden rounded-sm"
              >
                {/* ✅ Gradient Overlay */}
                <div className="absolute inset-0 rounded-sm bg-gradient-to-br from-amber-200 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />

                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-8 h-10 w-10 flex items-center justify-center border border-[#C5A059]/30">
                    <span className="text-[#C5A059]">{`0${i + 1}`}</span>
                  </div>

                  <h3 className="text-xl font-semibold mb-4">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 text-sm">
                    {item.desc}
                  </p>
                </div>
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-amber-500 group-hover:w-full transition-all duration-300 rounded-sm" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= FRAMEWORK ================= */}
      <section className="py-24 bg-green-100">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0B2A5B] mb-4">
            Venture Development Framework
          </h2>
          <p className="text-gray-500 text-sm md:text-base">
            Our systematic approach to building value from inception to institutional scale.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-10">
           <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            className="grid md:grid-cols-4 gap-8"
          >
            {[
              {
                phase: "PHASE I",
                title: "Identify",
                desc: "Rigorous market analysis to find underserved high-potential niches.",
              },
              {
                phase: "PHASE II",
                title: "Incubate",
                desc: "Rapid operational prototyping and minimum viable commercial proof.",
              },
              {
                phase: "PHASE III",
                title: "Scale",
                desc: "Deployment of capital and management expertise for aggressive growth.",
              },
              {
                phase: "PHASE IV",
                title: "Institutionalize",
                desc: "Establishing world-class governance and professional leadership.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -10 }}
                className="group relative bg-white rounded-sm p-8 md:p-10 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105"
              >
                {/* Subtle gradient accent */}
                <div className="absolute inset-0 rounded-sm bg-gradient-to-br from-green-300 to-transparent opacity-0 group-hover:opacity-100 transition" />

                {/* Content */}
                <div className="relative z-10">
                  <div className="text-[11px] tracking-[0.2em] text-gray-400 mb-4 font-semibold">
                    {item.phase}
                  </div>

                  <h4 className="text-xl font-semibold text-[#0B2A5B] mb-3">
                    {item.title}
                  </h4>

                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-green-500 group-hover:w-full transition-all duration-300 rounded-sm" />
              </motion.div>
            ))}
          </motion.div>   

          
        </div>
      </section>

      {/* ================= FOUNDER ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 items-center">
          
          <div className="bg-gradient-to-tr from-green-300 to-green-700 p-4">
            <img
              src="https://aixpertslabs.com/assets/pradeep_kumar-69a6af88.jpeg"
              alt="Founder"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <div className="w-10 h-[2px] bg-[#C5A059] mb-6"></div>

            <p className="text-xl md:text-2xl italic text-gray-700 mb-6 leading-relaxed">
              {`"Our vision is not just to build businesses, but to build
              institutions that redefine the Indian economic landscape for
              generations to come."`}
            </p>

            <h4 className="font-semibold text-[#1A3C34]">
              Pradeep Kumar
            </h4>

            <p className="text-sm text-[#C5A059] uppercase tracking-widest">
              Founder & CEO
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6 text-sm text-gray-500">
              <div>
                <strong className="block text-gray-800">Philosophy</strong>
                Integrity and execution above all else.
              </div>
              <div>
                <strong className="block text-gray-800">Strategy</strong>
                Deep integration across the value chain.
              </div>
            </div>
          </div>

        </div>
      </section>
      {/* ================= COMPLIANCE STRIP ================= */}
<section className="w-full bg-gray-200 border-b border-gray-200">
  <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs tracking-[0.15em] uppercase">

    {/* Left Side */}
    <div className="flex flex-wrap items-center gap-6 text-gray-500">
      <span className="font-semibold text-gray-400">
        Institutional Governance:
      </span>
      <span>SEC Compliant</span>
      <span>SEBI Registered</span>
      <span>ESG Certified</span>
    </div>

    {/* Right Side */}
    <div>
  <button className="group text-green-700 font-extrabold flex items-center gap-2 transition-all hover:scale-105">
    Compliance Reports

    <span className="flex items-center justify-center w-8 h-8 transition-all duration-300">
      <ArrowRight
        size={18}
        className="text-green-700 group-hover:text-green-500 transform group-hover:translate-x-1 transition-all duration-300"
      />
    </span>
  </button>
</div>

  </div>
</section>

    </main>
  );
}