"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Lightbulb,
  CheckCircle2,
  Scale,
  HandCoins,
  Rocket,
  ArrowRight,
  Download,
  Briefcase,
  TrendingUp,
  FileText,
  Users,
} from "lucide-react";
import Link from "next/link";

// Animation Variants (consistent across your site)
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.25,
    },
  },
};

const cardHover = {
  rest: { scale: 1, y: 0, boxShadow: "0 10px 15px -3px rgba(0,0,0,0.08)" },
  hover: {
    scale: 1.04,
    y: -10,
    boxShadow: "0 25px 35px -5px rgba(0,0,0,0.12)",
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const imageReveal = {
  hidden: { opacity: 0, scale: 0.94, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

const buttonVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.06, transition: { duration: 0.35 } },
  tap: { scale: 0.97 },
};

export default function MethodologyPage() {
  return (
    <section className="bg-gray-50 text-gray-900 min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="relative py-16 md:py-24 px-6 md:px-20 overflow-hidden"
        >
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <motion.div variants={fadeInUp} className="flex-1 z-10">
              <motion.span
                variants={fadeInUp}
                transition={{ delay: 0.1 }}
                className="inline-block px-4 py-1.5 rounded-full bg-green-50 text-green-700 text-xs font-bold uppercase tracking-widest mb-6"
              >
                Our Methodology
              </motion.span>

              <motion.h1
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-6xl font-black text-gray-900 leading-[1.1] mb-6"
              >
                Venture Development{" "}
                <span className="text-amber-500 italic">Framework</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                transition={{ delay: 0.3 }}
                className="text-lg text-gray-600 max-w-xl leading-relaxed"
              >
                Our proprietary methodology transforms high-potential ideas into
                ₹100Cr+ institutional-grade enterprises through a rigorous
                six-stage lifecycle designed for Indian market dynamics.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                transition={{ delay: 0.4 }}
                className="mt-10 flex flex-wrap gap-4"
              >
                <motion.button
                  whileHover="hover"
                  whileTap="tap"
                  variants={buttonVariants}
                  className="bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-base shadow-xl hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-green-200/40 transition-all duration-300 flex items-center gap-2"
                >
                  Download Whitepaper
                  <Download size={18} />
                </motion.button>

                <Link href="/institutional/institute-framework">
                  <motion.button
                    whileHover="hover"
                    whileTap="tap"
                    variants={buttonVariants}
                    className="border-2 border-green-200 text-green-600 px-8 py-4 rounded-xl font-bold text-base hover:bg-green-50 transition-all duration-300"
                  >
                    Learn More
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              variants={imageReveal}
              className="flex-1 w-full relative"
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-green-600 to-green-900 p-1">
                <div className="w-full h-full rounded-[1.4rem] bg-white overflow-hidden relative">
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        "radial-gradient(#002466 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  />
                  <div className="h-full w-full flex items-center justify-center p-8">
                    <div className="grid grid-cols-2 gap-4 w-full h-full">
                      <div className="bg-green-50 rounded-xl border border-green-100 flex flex-col items-center justify-center p-4">
                        <Lightbulb className="text-green-600 mb-2" size={36} />
                        <span className="text-[10px] font-bold uppercase tracking-tighter text-gray-500">
                          Phase 01
                        </span>
                        <span className="font-bold text-gray-900">
                          Ideation
                        </span>
                      </div>

                      <div className="bg-amber-50 rounded-xl border border-amber-100 flex flex-col items-center justify-center p-4">
                        <CheckCircle2
                          className="text-amber-500 mb-2"
                          size={36}
                        />
                        <span className="text-[10px] font-bold uppercase tracking-tighter text-gray-500">
                          Phase 02
                        </span>
                        <span className="font-bold text-gray-900">
                          Validation
                        </span>
                      </div>

                      <div className="bg-green-50 rounded-xl border border-green-100 flex flex-col items-center justify-center p-4">
                        <Scale className="text-green-600 mb-2" size={36} />
                        <span className="text-[10px] font-bold uppercase tracking-tighter text-gray-500">
                          Phase 03
                        </span>
                        <span className="font-bold text-gray-900">
                          Structuring
                        </span>
                      </div>

                      <div className="bg-green-600 rounded-xl flex flex-col items-center justify-center p-4 shadow-2xl">
                        <TrendingUp className="text-white mb-2" size={36} />
                        <span className="text-[10px] font-bold uppercase tracking-tighter text-green-200">
                          Phase 04+
                        </span>
                        <span className="font-bold text-white">Scaling</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Venture Lifecycle */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={staggerContainer}
          className="bg-white py-20 px-6 md:px-20 border-y border-gray-200"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <motion.h2
                variants={fadeInUp}
                className="text-3xl font-bold text-gray-900 mb-4"
              >
                The Venture Lifecycle
              </motion.h2>
              <div className="h-1.5 w-24 bg-amber-500 mx-auto rounded-full"></div>
            </motion.div>

            <div className="relative flex flex-col md:flex-row justify-between items-start gap-8 md:gap-4">
              <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-200 z-0"></div>

              {[
                {
                  icon: Lightbulb,
                  num: "01",
                  title: "Idea",
                  desc: "Spark & Concept",
                },
                {
                  icon: CheckCircle2,
                  num: "02",
                  title: "Validation",
                  desc: "Testing Models",
                },
                {
                  icon: Scale,
                  num: "03",
                  title: "Structure",
                  desc: "Legal & Regulatory",
                },
                {
                  icon: HandCoins,
                  num: "04",
                  title: "Capital",
                  desc: "Funding Access",
                },
                {
                  icon: Rocket,
                  num: "05",
                  title: "Growth",
                  desc: "Scaling Ops",
                },
                {
                  icon: null,
                  num: "06",
                  title: "Exit/Scale",
                  desc: "Sustainability",
                  special: true,
                  value: "₹100Cr",
                },
              ].map((stage, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex-1 flex flex-col items-center text-center z-10 group"
                >
                  <motion.div
                    whileHover="hover"
                    variants={cardHover}
                    className={`size-${stage.special ? "20" : "20"} rounded-full ${
                      stage.special
                        ? "bg-green-600 border-4 border-amber-500/30"
                        : "bg-white border-4 border-green-500"
                    } flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}
                  >
                    {stage.special ? (
                      <div className="text-center">
                        <span className="text-white font-black text-xl leading-none italic">
                          {stage.value}
                        </span>
                        <span className="text-[8px] text-white uppercase font-bold tracking-tighter block">
                          Enterprise
                        </span>
                      </div>
                    ) : (
                      <stage.icon className="text-green-600" size={32} />
                    )}
                  </motion.div>

                  <h3 className="font-bold text-gray-900 mb-2">
                    {stage.num}. {stage.title}
                  </h3>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-widest leading-none">
                    {stage.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Stage-by-Stage Advantage */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={staggerContainer}
          className="py-24 px-6 md:px-20"
        >
          <div className="max-w-6xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-bold text-gray-900 mb-16 text-center"
            >
              Stage-by-Stage{" "}
              <span className="text-amber-500 italic">Bharatx Advantage</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  num: "1",
                  title: "Idea Generation",
                  desc: "We don’t just wait for ideas; we manufacture them. Using data-driven market gap analysis, we identify industrial inefficiencies.",
                  advantage:
                    "Access to proprietary sector intelligence and veteran industrial insights.",
                },
                {
                  num: "2",
                  title: "Market Validation",
                  desc: "Rigorous pressure testing of the business model through Pilot Launchpads and MVP deployments in real-world industrial environments.",
                  advantage:
                    "Direct sandbox access to 50+ corporate partners for instant feedback.",
                },
                {
                  num: "3",
                  title: "Structuring",
                  desc: "Professionalizing the venture from Day 1. We handle the heavy lifting of compliance, governance, and organizational design.",
                  advantage:
                    "In-house legal, accounting, and HR shared services ecosystem.",
                },
                {
                  num: "4",
                  title: "Capital Enablement",
                  desc: "Strategically matching the venture with institutional capital, sovereign funds, and high-impact strategic investors.",
                  advantage:
                    "Network of 200+ global VCs and PE firms ready for vetted pipelines.",
                },
                {
                  num: "5",
                  title: "Growth Execution",
                  desc: "Scaling at speed without breaking the core. We provide fractional leadership and performance marketing playbooks.",
                  advantage:
                    "Zero-to-One execution pods that accelerate market penetration.",
                },
                {
                  num: "6",
                  title: "The Exit Strategy",
                  desc: "Building for permanence or profitable exit. We ensure the venture is IPO-ready or attractive for global M&A.",
                  advantage:
                    "Institutional-grade enterprises valued at ₹100Cr and beyond.",
                 /* highlight: true,*/
                },
              ].map((stage, index) => (
                <motion.div
                  key={index}
                  variants={cardHover}
                  whileHover="hover"
                  className={`bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 border-l-4 ${
                    stage.highlight
                      ? "border-amber-500 bg-gradient-to-br from-green-50 to-white"
                      : "border-green-500"
                  } group`}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`size-12 rounded-xl ${
                        stage.highlight ? "bg-amber-100" : "bg-green-50"
                      } flex items-center justify-center text-${
                        stage.highlight ? "amber-600" : "green-600"
                      } font-bold`}
                    >
                      {stage.num}
                    </div>
                    <h3
                      className={`text-xl font-bold ${stage.highlight ? "text-amber-600" : "text-gray-900"}`}
                    >
                      {stage.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {stage.desc}
                  </p>

                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-xs font-bold text-amber-500 uppercase tracking-widest mb-2">
                      The Advantage
                    </p>
                    <p className="text-sm font-medium italic text-gray-700">
                      {stage.advantage}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="py-20 px-6 md:px-20 bg-green-600 relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10"></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.h2
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-black text-white mb-6"
            >
              Ready to scale your venture?
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-gray-200 text-lg mb-10 max-w-2xl mx-auto"
            >
              Partner with Bharatx Ventures to turn your institutional-grade
              idea into a market-leading reality. Let’s build the future of
              Indian industry together.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
              className="flex flex-col md:flex-row items-center justify-center gap-4"
            >
              <Link href="/contact-us">
                <motion.button
                  whileHover="hover"
                  whileTap="tap"
                  variants={buttonVariants}
                  className="w-full md:w-auto px-10 py-4 bg-amber-400 text-gray-900 font-bold rounded-xl hover:bg-amber-300 transition-all duration-300 shadow-xl"
                >
                  Connect with our Team
                </motion.button>
              </Link>

              <Link href="/project">
                <motion.button
                  whileHover="hover"
                  whileTap="tap"
                  variants={buttonVariants}
                  className="w-full md:w-auto px-10 py-4 border-2 border-white/20 text-white font-bold rounded-xl hover:text-gray-900 hover:bg-amber-300 transition-all duration-300 shadow-xl flex items-center justify-center gap-2"
                >
                  View Success Stories
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </section>
  );
}
