"use client";

import React from "react";
import { motion } from "framer-motion";

/* ================= ANIMATION ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const stagger = {
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

export default function FrameworkPage() {
  const steps = [
    {
      id: "01.",
      title: "Idea / Visualization",
      desc: "High-conviction synthesis of market gaps and technological moats.",
      phase: "Phase: Inception",
    },
    {
      id: "02.",
      title: "Market Validation",
      desc: "Rigorous testing of unit economics and product-market resonance.",
      phase: "Phase: Proof",
    },
    {
      id: "03.",
      title: "Business Structuring",
      desc: "Establishing the governance, legal, and operational foundation.",
      phase: "Phase: Foundation",
    },
    {
      id: "04.",
      title: "Capital Enablement",
      desc: "Strategic deployment of early-stage capital and resource allocation.",
      phase: "Phase: Fuel",
    },
    {
      id: "05.",
      title: "Growth Execution",
      desc: "Aggressive scaling through distribution and network advantages.",
      phase: "Phase: Scale",
    },
  ];

  return (
    <main className="bg-white text-[#0A192F] font-sans">

      {/* ================= HERO ================= */}
      <section className="py-32 bg-gray-100 text-center">
        {/* BACKGROUND 
        <div className="absolute inset-0 z-0">
            <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVvmXkg0OrMVmw3aTggvkuT1Ipe_TepSFnszkfzpMsVILizmM4kXjfy6Lsf557JbCjt3Wcq83xbTek4SvBzwkvcse9RS0YXmYX08QRnQFjQRud-SERb0yrNNYehuT8RiyQc-O0hOopolfFNSEMPJe0HSNhVECaNgTkA9n7YrpRjzE4rK9xz8_r_3iSzUxzZYqo90YKkq6f_S2FD_KjgT8NYEdsTBAuybTYzwE-z11mbVSD3W6qLy86wPSntMc_EmNek_HX9uQ-D-Ul"
            className="w-full h-full object-cover scale-105 brightness-110 contrast-110"
            />
            {/* LIGHTER OVERLAY 
            <div className="absolute inset-0 bg-green-900/40"></div>
            {/* GRADIENT FOR TEXT VISIBILITY 
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green/30 to-green/60"></div>
        </div> */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="max-w-5xl mx-auto px-6"
        >
          <span className="inline-block py-1 px-3 mb-6 border border-[#C5A059] text-[#C5A059] text-[10px] uppercase tracking-[0.3em] font-bold">
            Institutional Protocol
          </span>

          <h1 className="font-serif text-5xl md:text-7xl mb-8 leading-tight">
            The Venture Development <br />
            <span className="italic text-[#C5A059]">Framework.</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg text-gray-600 font-light">
            A structured execution engine designed to transform high-conviction
            ideas into institutional-grade enterprises through disciplined
            capital enablement and growth execution.
          </p>
        </motion.div>
      </section>

      {/* ================= FRAMEWORK STEPS ================= */}
      <section className="py-28">
        <div className="max-w-[1400px] mx-auto px-6">

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative"
          >

            {steps.map((step, i) => (
              <motion.div key={i} variants={fadeUp} className="relative">

                <div className="p-8 bg-[#F8FAFC] border border-gray-100 hover:border-[#C5A059] hover:scale-105 transition-all duration-500 h-full flex flex-col justify-between">

                  <div>
                    <span className="text-[#C5A059] font-serif text-3xl mb-4 block">
                      {step.id}
                    </span>

                    <h3 className="font-bold text-lg uppercase tracking-wider mb-3">
                      {step.title}
                    </h3>

                    <p className="text-sm text-gray-500 font-light leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="mt-8 border-t border-gray-200 pt-4">
                    <span className="text-[10px] uppercase font-bold text-gray-400">
                      {step.phase}
                    </span>
                  </div>

                </div>

                {/* CONNECTOR LINE */}
                {i !== steps.length  && (
                  <div className="hidden lg:block absolute top-1/2 right-[-1.5rem] w-6 h-[2px] bg-[#C5A059]" />
                )}

              </motion.div>
            ))}

            {/* FINAL CARD */}
            <motion.div variants={fadeUp}>
              <div className="p-8 bg-green-800 text-white h-full flex flex-col justify-center items-center text-center shadow-2xl hover:bg-green-700 hover:scale-105 transition-all duration-500">

                <h4 className="text-[#C5A059] font-serif text-4xl mb-2">
                  ₹100Cr
                </h4>

                <span className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-80 mb-4">
                  Enterprise Value
                </span>

                <div className="w-12 h-[2px] bg-[#C5A059] mb-4"></div>

                <p className="text-[11px] uppercase tracking-widest">
                  Institutional Credibility Established
                </p>

              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* ================= LOWER SECTION ================= */}
      <section className="py-28 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="show">
            <h2 className="font-serif text-4xl md:text-5xl mb-8">
              Structured execution capability is our{" "}
              <span className="text-[#C5A059] italic underline underline-offset-8">
                competitive edge.
              </span>
            </h2>

            <p className="text-gray-600 mb-8 font-light">
              Bharatx Ventures does not just provide capital; we provide the
              blueprint. Our framework is designed to mitigate risks while
              maximizing scale.
            </p>

            <div className="space-y-4">
              {[
                "De-risking through multi-stage validation protocols.",
                "Standardized structuring for governance.",
                "Proprietary growth playbooks.",
              ].map((item, i) => (
                <div key={i} className="flex items-start">
                  <div className="mt-2 mr-4 w-2 h-2 rounded-full bg-[#C5A059]" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="bg-green-800 p-12 text-white relative hover:scale-105 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A059]/5 rounded-full -mr-32 -mt-32" />

            <div className="relative z-10">
              <h4 className="text-[#C5A059] text-[10px] font-bold uppercase tracking-[0.4em] mb-6">
                Institutional Credibility
              </h4>

              <p className="text-2xl font-serif italic mb-8">
                Building for Bharat requires more than capital; it requires
                structural understanding and execution discipline.
              </p>

              <div className="flex items-center">
                <div className="w-10 h-[1px] bg-[#C5A059] mr-4"></div>
                <span className="text-xs uppercase tracking-widest">
                  The Managing Partners, Bharatx
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

    </main>
  );
}