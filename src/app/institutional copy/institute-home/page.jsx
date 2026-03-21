"use client";

import React from "react";
import { motion } from "framer-motion";

/* ================= ANIMATION VARIANTS ================= */
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
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function HomePage() {
  return (
    <main className="bg-white text-[#1A3C34] font-sans overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center pt-24 md:pt-20">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="max-w-7xl mx-auto px-6 md:px-8 w-full grid md:grid-cols-12 gap-10 items-center"
        >

          {/* LEFT */}
          <motion.div variants={fadeUp} className="md:col-span-7">
            <div className="w-10 h-[2px] bg-[#C5A059] mb-6 md:mb-8"></div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] mb-6 md:mb-8">
              Building Scalable <br />
              Enterprises for the <br />
              <span className="text-[#C5A059]">Future of India.</span>
            </h1>

            <p className="text-base md:text-xl text-gray-600 max-w-lg mb-8 md:mb-10 font-light">
              {`Operational excellence, institutional capital, and strategic governance at the core of India's growth story.`}
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-6 md:px-8 py-3 md:py-4 border border-[#1A3C34] text-[#1A3C34] font-semibold hover:bg-[#1A3C34] hover:text-white transition text-xs md:text-sm uppercase tracking-widest"
            >
              Discover Our Impact
            </motion.button>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            variants={fadeUp}
            className="md:col-span-5 h-[300px] sm:h-[400px] md:h-[600px] bg-gray-100 relative overflow-hidden rounded-lg md:rounded-none"
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkeHPwLFXRhdRdtuC6VXNB1aLBSLsHUASN4gtRZj90zUuZxBH-qQrm9dYf4La3LeTlOwh3gDW941oAYXuazQF89wXaVViFASCQtYGaGZcDBBg9Xdoc0e_4Q7XkwwPGo8mxZd8yrQpVr4OfjVT6aqoxpoBG2t_n264lHspe7pWDOMNhJmc2FOh-ZW8sU30KocmjcfeyCIfoXwagrQwk9wAyc53jlLBrCC7fbXDGRlX7tdlMOhPxVkgci5nMaZwuJz5LJa-_KpowNzoj"
              alt="Industrial"
              className="w-full h-full object-cover grayscale opacity-80"
            />
            <div className="absolute inset-0 bg-[#1A3C34]/10"></div>
          </motion.div>

        </motion.div>
      </section>

      {/* ================= VERTICALS ================= */}
      <section className="py-20 md:py-28 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-12 md:mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C5A059] block mb-4">
              Core Focus
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Strategic Verticals
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8"
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
                whileHover={{ y: -8 }}
                className="bg-white p-6 md:p-10 border hover:border-[#C5A059] transition"
              >
                <div className="mb-8 h-10 w-10 flex items-center justify-center border border-[#C5A059]/30">
                  <span className="text-[#C5A059]">{`0${i + 1}`}</span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-500 mb-6 text-sm md:text-base">
                  {item.desc}
                </p>

                <div className="h-[1px] bg-gray-100"></div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ================= FRAMEWORK ================= */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center mb-16 md:mb-20">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" className="text-2xl md:text-3xl font-bold mb-4">
            Venture Development Framework
          </motion.h2>
          <p className="text-gray-500 text-sm md:text-base">
            Our systematic approach to building value from inception to scale.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 border-y">
          {["Identify", "Incubate", "Scale", "Institutionalize"].map(
            (step, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                className="p-6 md:p-8 border-r hover:bg-gray-50"
              >
                <div className="text-xs text-gray-400 mb-4 uppercase">
                  Phase {i + 1}
                </div>
                <h4 className="text-lg md:text-xl font-bold mb-2">{step}</h4>
                <p className="text-sm text-gray-500">
                  Strategic execution for growth.
                </p>
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* ================= METRICS ================= */}
      <section className="bg-[#1A3C34] text-white py-20 md:py-28 text-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        >
          {["$2.5B+", "14", "250k+", "20+"].map((val, i) => (
            <motion.div key={i} variants={fadeUp}>
              <div className="text-[#C5A059] text-3xl md:text-5xl font-bold mb-2 md:mb-4">
                {val}
              </div>
              <div className="text-[10px] md:text-xs uppercase opacity-70">
                Metric {i + 1}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-[#1A3C34] text-white py-20 md:py-24 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="max-w-4xl mx-auto px-6 md:px-8"
        >
          <div className="w-10 h-[2px] bg-[#C5A059] mx-auto mb-8"></div>

          <h2 className="text-3xl md:text-6xl font-bold mb-6 md:mb-8">
            Ready to Scale Your <br />
            <span className="text-[#C5A059]">Institutional Impact?</span>
          </h2>

          <p className="text-gray-300 mb-10 text-sm md:text-lg">
            Partner with Bharatx Ventures to leverage world-class expertise.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
            <button className="px-8 py-4 bg-[#C5A059] text-[#1A3C34] font-bold uppercase text-xs md:text-sm">
              Contact Partnership
            </button>
            <button className="px-8 py-4 border border-[#C5A059] text-[#C5A059] uppercase text-xs md:text-sm">
              Download Capabilities
            </button>
          </div>
        </motion.div>
      </section>

    </main>
  );
}