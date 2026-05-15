"use client";

import React, { useState } from "react";
import { motion , AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  TrendingUp,
  Lightbulb,
  Rocket,
  Sprout,
  CheckCircle,
  Settings,
  DollarSign,
  ChevronDown,
  Cpu,
  Building2,
  Wheat,
  Quote,
  HardHat,
  Factory,
  Truck,
  ArrowRight,
  ArrowDown,
  BarChart3,
  Globe,
  Sparkles,
  Hexagon,
  Target,
  ChevronRight,
} from "lucide-react";

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
  rest: { scale: 1, y: 0, boxShadow: "0 4px 15px -3px rgba(0,0,0,0.08)" },
  hover: {
    scale: 1.03,
    y: -8,
    boxShadow: "0 15px 30px -5px rgba(0,0,0,0.12)",
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const imageReveal = {
  hidden: { opacity: 0, scale: 0.94, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 1.1, ease: "easeOut" },
  },
};

const buttonVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.06, transition: { duration: 0.35 } },
  tap: { scale: 0.97 },
};
const float = {
  hover: { y: -5, transition: { duration: 0.3, ease: "easeInOut" } },
};

// --- Sub-component: Glassmorphism Stat Card ---
const StatCard = ({ icon, value, label }) => {
  return (
    <motion.div
      whileHover={float.hover}
      className="relative group p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg overflow-hidden"
    >
      {/* Hover Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative flex items-start gap-4">
        <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
          {icon}
        </div>
        <div>
          <h3 className="text-3xl font-bold text-white mb-1">{value}</h3>
          <p className="text-sm text-gray-400 font-medium leading-tight">
            {label}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default function Home() {
  const videos = [
    "/video1.mp4",
    "/video2.mp4",
    "/video3.mp4",
  ];

  const [currentVideo, setCurrentVideo] = useState(0);

  const handleVideoEnd = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };
  return (
    <main className="flex-1 bg-gray-50 text-gray-900 min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* 1. Video Background */}
        <div className="absolute inset-0 z-0 bg-black overflow-hidden">
          <AnimatePresence mode="sync">
            <motion.video
              key={currentVideo}
              src={videos[currentVideo]}
              autoPlay
              muted
              playsInline
              preload="auto"
              onEnded={handleVideoEnd}

              initial={
                currentVideo === 1
                  ? { x: "100%", opacity: 1 }
                  : currentVideo === 2
                  ? { clipPath: "inset(100% 100% 0 0)" }
                  : { opacity: 1, scale: 1.05 } // default
              }

              animate={
                currentVideo === 1
                  ? { x: "0%", opacity: 1 }
                  : currentVideo === 2
                  ? { clipPath: "inset(0 0% 0 0)" }
                  : { opacity: 1, scale: 1 }
              }

              exit={
                currentVideo === 1
                  ? { x: "-100%", opacity: 1 }
                  : currentVideo === 2
                  ? { clipPath: "inset(0 0 0 100%)" }
                  : { opacity: 0 }
              }

              transition={{
                duration: 1.2,
                ease: "easeInOut",
              }}

              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </AnimatePresence>
          {/* Cinematic Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />{" "}
          {/* Darkens bottom for text contrast */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* 2. Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col items-center justify-center text-center">
            {/* Badge */}
            <motion.div variants={fadeInUp} className="mb-8">
              <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-xl">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-sm font-medium text-white/90 tracking-wide">
                  {`India's Premier Venture Builder`}
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight mb-6 max-w-5xl"
            >
              Building the <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
                Next Generation
              </span>{" "}
              of Indian Companies
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mb-10 font-light"
            >
              BharatX Ventures partners with startups and SMEs to design, build,
              and scale high-impact businesses using AI, strategy, and
              execution.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <Link
                href="/service"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-emerald-600 rounded-xl hover:bg-emerald-500 hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-600 ring-offset-gray-900"
              >
                Explore Capabilities
                <ArrowRight className="ml-2 -mr-1 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/partnership"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-white/10 border border-white/20 backdrop-blur-md rounded-xl hover:bg-white/20 hover:border-white/40 focus:outline-none"
              >
                Partner With Us
              </Link>
            </motion.div>

            {/* 3. Floating Stats (Trust Indicators) - Desktop */}
            {/* <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
              className="hidden lg:grid grid-cols-3 gap-6 mt-20 w-full max-w-4xl"
            >
              <StatCard
                icon={<BarChart3 size={24} className="text-emerald-400" />}
                value="50+"
                label="Startups Funded"
              />
              <StatCard
                icon={<TrendingUp size={24} className="text-emerald-400" />}
                value="2B+"
                label="Valuation Generated"
              />
              <StatCard
                icon={<Globe size={24} className="text-emerald-400" />}
                value="100%"
                label="ROI Focused"
              />
            </motion.div> */}
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs font-medium text-white/50 uppercase tracking-widest">
              Scroll
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <ArrowDown size={20} className="text-white/70" />
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      {/* Verticals Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={staggerContainer}
        className="py-24 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={fadeInUp}
            className="mb-16 flex flex-col items-center text-center"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
            >
              Our Core Verticals
            </motion.h2>
            <div className="h-1.5 w-24 bg-green-500 rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Lightbulb,
                title: "SME Growth Capital ",
                desc: "Enabling businesses with capital and scaling strategy.",
              },
              {
                icon: Lightbulb,
                title: "Strategic Consulting",
                desc: "Legal, operational, and growth advisory.",
              },
              {
                icon: Rocket,
                title: "Venture Development",
                desc: "Building ventures from concept to scale.",
              },
              {
                icon: Sprout,
                title: "Agri-Tech Manufacturing",
                desc: "Export-grade food processing and value chains.",
              },
              {
                icon: Cpu,
                title: "AI Industrial Automation",
                desc: "Smart manufacturing and AI-driven operations.",
              },
            ].map((vertical, index) => (
              <motion.div
                key={index}
                variants={cardHover}
                whileHover="hover"
                className="group p-8 rounded-2xl bg-white border border-gray-200 hover:border-green-500 transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                <div className="size-14 bg-blue-50 rounded-xl flex items-center justify-center text-green-600 group-hover:bg-green-500 group-hover:text-white transition-all mb-6">
                  <vertical.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                  {vertical.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {vertical.desc}
                </p>
              </motion.div>
            ))}

            {/* CTA Card */}
            <motion.div
              variants={cardHover}
              whileHover="hover"
              className="group p-8 rounded-2xl bg-green-600 text-white flex flex-col justify-center items-center text-center shadow-xl hover:bg-green-500 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-4">Ready to Innovate?</h3>
              <p className="text-white/90 text-lg mb-6">
                Partner with Bharatx Ventures to build and scale the next
                generation of enterprises.
              </p>
              <Link href="/partnership">
                <motion.button
                  whileHover="hover"
                  whileTap="tap"
                  variants={buttonVariants}
                  className="px-6 py-3 bg-white text-green-700 rounded-lg font-bold text-sm hover:bg-gray-100 transition-colors"
                >
                  Become a Partner
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Venture Development Framework */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
        className="relative py-24 lg:py-32 overflow-hidden bg-slate-950"
      >
        {/* Background Image & Green Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/h1.png"
            alt="Background"
            className="w-full h-full object-cover object-top mix-blend-overlay opacity-40"
          />
          {/* Rich Green Gradient Overlay - Defines the Theme */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/90 via-slate-900/95 to-emerald-900/90"></div>

          {/* Grid Pattern Texture */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: "radial-gradient(#10b981 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* --- SECTION 1: THE GRID (Framework) --- */}
          <motion.div variants={fadeInUp} className="mb-28">
            <div className="flex flex-col items-center text-center mb-12">
              <span className="inline-block px-4 py-1 mb-6 text-xs font-bold tracking-[0.2em] text-emerald-400 uppercase bg-emerald-500/10 rounded-full border border-emerald-500/30 backdrop-blur-sm">
                Framework
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Venture Development Framework
              </h2>
              <div className="h-[2px] w-24 bg-gradient-to-r from-emerald-500 via-emerald-400 to-transparent rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Lightbulb,
                  title: "Identification",
                  desc: "Market gap analysis and thesis development",
                },
                {
                  icon: Settings,
                  title: "Architecting",
                  desc: "Strategic blueprinting and team formation",
                },
                {
                  icon: DollarSign,
                  title: "Capitalization",
                  desc: "Direct investment and institutional funding",
                },
                {
                  icon: TrendingUp,
                  title: "Scale-Up",
                  desc: "Operational excellence and market dominance",
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="group relative p-8 rounded-2xl bg-emerald-950/40 backdrop-blur-md border border-emerald-500/20 hover:border-emerald-400 hover:bg-emerald-900/50 transition-all duration-300 shadow-xl hover:shadow-emerald-500/20"
                >
                  {/* Step Number */}
                  <span className="absolute top-4 right-4 text-xs font-mono font-bold text-emerald-500/30 group-hover:text-emerald-400 transition-colors">
                    0{index + 1}
                  </span>

                  <div className="w-14 h-14 mb-6 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400 border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all duration-300">
                    <step.icon size={28} strokeWidth={2} />
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-emerald-300 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-sm text-emerald-100/70 leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* --- SECTION 2: THE FLOW (Approach) --- */}
          <motion.div variants={fadeInUp} className="relative">
            <div className="flex flex-col items-center text-center mb-16">
              <span className="inline-block px-4 py-1 mb-6 text-xs font-bold tracking-[0.2em] text-emerald-400 uppercase bg-emerald-500/10 rounded-full border border-emerald-500/30 backdrop-blur-sm">
                Approach
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Our Approach
              </h2>
              <div className="h-[2px] w-24 bg-gradient-to-r from-emerald-500 via-emerald-400 to-transparent rounded-full"></div>
            </div>

            {/* Flow Container */}
            <div className="relative w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
              {/* Connecting Line (Desktop) */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent -z-10 -translate-y-1/2" />

              {/* Mobile Connector Line */}
              <div className="md:hidden absolute left-[50%] top-0 bottom-0 w-[2px] bg-gradient-to-b from-emerald-500/30 to-transparent -z-10" />

              {[
                { title: "Idea", icon: Lightbulb },
                { title: "Validation", icon: CheckCircle },
                { title: "Structuring", icon: Settings },
                { title: "Capital", icon: DollarSign },
                { title: "Scale", icon: TrendingUp },
              ].map((step, index) => (
                <React.Fragment key={index}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative group flex flex-col items-center justify-center w-[160px] h-[160px] text-center z-10"
                  >
                    {/* Connector Dots on Line (Desktop Only) */}
                    {index !== 4 && (
                      <div className="hidden md:block absolute top-1/2 right-0 w-2 h-2 bg-emerald-500 rounded-full translate-x-1/2 -translate-y-1/2 opacity-50" />
                    )}
                    {index !== 0 && (
                      <div className="hidden md:block absolute top-1/2 left-0 w-2 h-2 bg-emerald-500 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50" />
                    )}

                    {/* The Circle */}
                    <div className="absolute inset-0 rounded-full border-2 border-emerald-500/30 bg-slate-900/80 backdrop-blur-md transition-all duration-500 group-hover:border-emerald-400 group-hover:shadow-[0_0_40px_rgba(16,185,129,0.2)] group-hover:scale-105" />

                    {/* Inner Content */}
                    <div className="relative z-10 flex flex-col items-center">
                      <div className="w-14 h-14 mb-3 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                        <step.icon size={24} strokeWidth={2.5} />
                      </div>

                      <h3 className="text-sm font-bold text-emerald-100 tracking-wide uppercase group-hover:text-white transition-colors">
                        {step.title}
                      </h3>
                    </div>
                  </motion.div>

                  {/* Spacer / Arrow for Mobile */}
                  {index !== 4 && (
                    <div className="md:hidden text-emerald-500/50">
                      <ChevronDown size={20} />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Bottom Statement */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-12 text-center"
            >
              <div className="inline-block px-6 py-3 rounded-lg border border-emerald-500/20 bg-emerald-500/5 backdrop-blur-sm">
                <p className="text-sm font-medium text-emerald-300 tracking-wide">
                  Delivering measurable, scalable outcomes through a structured
                  model.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Leadership Message */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={staggerContainer}
        className="py-24 bg-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div
              variants={imageReveal}
              className="lg:col-span-5 relative"
            >
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-green-100 rounded-full blur-2xl"></div>

              <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-2xl max-w-[420px] w-full mx-auto">
                <motion.img
                  variants={imageReveal}
                  alt="Pradeep Kumar, Founder & CEO of Bharatx Ventures"
                  className="w-full h-[460px] object-cover object-top"
                  src="pradeep.jpeg"
                />

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t to-transparent p-6 text-white">
                  <h3 className="text-2xl font-bold">Pradeep Kumar</h3>
                  <p className="text-green-300 text-sm font-bold uppercase tracking-widest">
                    Founder & CEO
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="lg:col-span-7 flex flex-col gap-8"
            >
              <motion.div
                variants={fadeInUp}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-2"
              >
                <span className="h-px w-12 bg-green-600"></span>
                <span className="text-sm font-bold text-green-600 uppercase tracking-[0.2em]">
                  Leadership Message
                </span>
              </motion.div>

              <motion.h2
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
                className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight"
              >
                Driving Industrial Excellence Through Strategic Venture Building
              </motion.h2>

              <motion.div
                variants={fadeInUp}
                transition={{ delay: 0.3 }}
                className="flex gap-4"
              >
                <div className="h-20 w-1 bg-green-600"></div>
                <Quote className="absolute -top-4 -left-6 text-6xl text-gray-200 -z-10" />
                <p className="text-xl text-gray-600 leading-relaxed italic">
                  {`❝ Our mission is to build the backbone of India's future economy by combining deep sector expertise with institutional rigor ❞`}
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                transition={{ delay: 0.5 }}
                className="flex gap-4"
              >
                <p className="text-sm text-gray-500 leading-relaxed">
                  With over 15 years of experience in strategic consulting and
                  industrial scale-up, Pradeep Kumar leads Bharatx Ventures with
                  a vision for operational excellence and sustainable impact.
                </p>
              </motion.div>
              <a
                href="/about-us#core-team"
                className="text-primary font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:text-accent transition-colors"
              >
                Our Core Team
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14M13 6l6 6-6 6"
                  />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
       <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={staggerContainer}
      className="relative py-20 lg:py-24 bg-emerald-950 overflow-hidden border-y border-emerald-900"
    >
      {/* Atmospheric Gold Glows */}
      <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-yellow-500 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-emerald-600 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-emerald-900/50">
          
          {/* Stat 1 */}
          <motion.div variants={fadeInUp} className="flex flex-col items-center justify-center gap-4 px-4 py-6 md:py-0 group">
            <div className="w-14 h-14 rounded-full bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center mb-2 group-hover:bg-yellow-500/20 group-hover:scale-110 transition-all duration-500">
              <TrendingUp className="text-yellow-400" size={28} />
            </div>
            
            <div className="flex flex-col">
              <p className="text-emerald-300/80 text-xs font-bold tracking-[0.2em] uppercase mb-2">
                Cumulative Scale
              </p>
              {/* Metallic Gold Gradient Text */}
              <h3 className="text-5xl lg:text-6xl font-black font-sans leading-none bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-700 text-transparent bg-clip-text drop-shadow-sm">
                100Cr+
              </h3>
            </div>
            
            <p className="text-slate-300 font-medium text-sm mt-2">
              Enterprise Value Generated
            </p>
          </motion.div>

          {/* Stat 2 */}
          <motion.div variants={fadeInUp} className="flex flex-col items-center justify-center gap-4 px-4 py-6 md:py-0 group">
            <div className="w-14 h-14 rounded-full bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center mb-2 group-hover:bg-yellow-500/20 group-hover:scale-110 transition-all duration-500">
              <Globe className="text-yellow-400" size={28} />
            </div>
            
            <div className="flex flex-col">
              <p className="text-emerald-300/80 text-xs font-bold tracking-[0.2em] uppercase mb-2">
                Ecosystem Impact
              </p>
              <h3 className="text-5xl lg:text-6xl font-black font-sans leading-none bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-700 text-transparent bg-clip-text drop-shadow-sm">
                50+
              </h3>
            </div>
            
            <p className="text-slate-300 font-medium text-sm mt-2">
              Ventures Supported Globally
            </p>
          </motion.div>

          {/* Stat 3 */}
          <motion.div variants={fadeInUp} className="flex flex-col items-center justify-center gap-4 px-4 py-6 md:py-0 group">
            <div className="w-14 h-14 rounded-full bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center mb-2 group-hover:bg-yellow-500/20 group-hover:scale-110 transition-all duration-500">
              <Building2 className="text-yellow-400" size={28} />
            </div>
            
            <div className="flex flex-col">
              <p className="text-emerald-300/80 text-xs font-bold tracking-[0.2em] uppercase mb-2">
                Cross-Sector
              </p>
              <h3 className="text-5xl lg:text-6xl font-black font-sans leading-none bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-700 text-transparent bg-clip-text drop-shadow-sm">
                10+
              </h3>
            </div>
            
            <p className="text-slate-300 font-medium text-sm mt-2">
              Core Industries Served
            </p>
          </motion.div>

        </div>
      </div>
    </motion.section>

      {/* We Serve Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        className="py-32 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={fadeInUp}
            className="mb-16 flex flex-col items-center text-center"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
            >
              Industries We Serve
            </motion.h2>
            <div className="h-1 w-50 bg-green-500 rounded-full"></div>
          </motion.div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {/* Agriculture & Food Processing */}
              <motion.div
                variants={cardHover}
                whileHover="hover"
                className="group relative h-[500px] overflow-hidden group p-8 rounded-2xl border border-white hover:border-green-500 transition-all duration-300 shadow-sm hover:shadow-xl"
              >
                <motion.img
                  variants={imageReveal}
                  alt="Modern agriculture and food processing facility showcasing sustainable value chains"
                  className="absolute inset-0 h-full w-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-110"
                  src="/agro.png"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <Wheat
                    className="text-amber-400 group-hover:text-green-500 mb-4"
                    size={48}
                    strokeWidth={1.5}
                  />
                  <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                    Agriculture & Food Processing
                  </h3>
                  <p className="text-gray-200 text-sm mb-4 leading-relaxed">
                    Transforming agrarian backbones into global powerhouses
                    through modernized value-chains.
                  </p>
                  <div className="pt-4 border-t border-white/15">
                    <p className="text-[14px] text-amber-400 uppercase font-black tracking-widest group-hover:text-green-600 mb-2">
                      Market Context
                    </p>
                    <p className="text-sm text-gray-200 italic font-light">
                      {`Leveraging India's position as a global food basket through
                        tech-driven export readiness.`}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* MSMEs */}
              <motion.div
                variants={cardHover}
                whileHover="hover"
                className="group relative h-[500px] overflow-hidden group p-8 rounded-2xl border border-white hover:border-green-500 transition-all duration-300 shadow-sm hover:shadow-xl"
              >
                <motion.img
                  variants={imageReveal}
                  alt="Modern office hub empowering MSMEs with scalable operations and institutional support"
                  className="absolute inset-0 h-full w-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-110"
                  src="msme.png"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <Building2
                    className="text-amber-400 group-hover:text-green-400 mb-4"
                    size={48}
                    strokeWidth={1.5}
                  />
                  <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                    MSMEs
                  </h3>
                  <p className="text-gray-200 text-sm mb-4 leading-relaxed">
                    Empowering the engine of the Indian economy by scaling
                    operations into resilient enterprises.
                  </p>
                  <div className="pt-4 border-t border-white/15">
                    <p className="text-[14px] text-amber-400 uppercase font-black tracking-widest group-hover:text-green-600 mb-2">
                      Impact Statement
                    </p>
                    <p className="text-sm text-gray-200 italic font-light">
                      Bridging the institutional credit gap to unlock massive
                      latent economic potential.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Manufacturing */}
              <motion.div
                variants={cardHover}
                whileHover="hover"
                className="group relative h-[500px] overflow-hidden rounded-2xl shadow-2xl border border-white hover:border-green-500 transition-all duration-300"
              >
                <motion.img
                  variants={imageReveal}
                  alt="Advanced manufacturing facility driving industrial excellence and productivity"
                  className="absolute inset-0 h-full w-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-110"
                  src="manuf.png"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <Factory
                    className="text-amber-400 group-hover:text-green-400 mb-4"
                    size={48}
                    strokeWidth={1.5}
                  />
                  <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                    Manufacturing
                  </h3>
                  <p className="text-gray-200 text-sm mb-4 leading-relaxed">
                    Driving industrial excellence through systematic
                    improvements in productivity and quality.
                  </p>
                  <div className="pt-4 border-t border-white/15">
                    <p className="text-[14px] text-amber-400 uppercase font-black tracking-widest group-hover:text-green-600 mb-2">
                      Market Context
                    </p>
                    <p className="text-sm text-gray-200 italic font-light">
                      {`Transitioning towards 'Make in India' excellence with global
                        supply chain resiliency.`}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Infrastructure */}
              <motion.div
                variants={cardHover}
                whileHover="hover"
                className="group relative h-[500px] overflow-hidden rounded-2xl shadow-2xl border border-white hover:border-green-500 transition-all duration-300"
              >
                <motion.img
                  variants={imageReveal}
                  alt="Urban infrastructure development project symbolizing national growth foundations"
                  className="absolute inset-0 h-full w-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-110"
                  src="/infra.png"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <HardHat
                    className="text-amber-400 group-hover:text-green-400 mb-4"
                    size={48}
                    strokeWidth={1.5}
                  />
                  <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                    Infrastructure
                  </h3>
                  <p className="text-gray-200 text-sm mb-4 leading-relaxed">
                    Laying foundations for national growth through expert
                    management of complex developments.
                  </p>
                  <div className="pt-4 border-t border-white/15">
                    <p className="text-[14px] text-amber-400 uppercase font-black tracking-widest group-hover:text-green-600 mb-2">
                      Impact Statement
                    </p>
                    <p className="text-sm text-gray-200 italic font-light">
                      Navigating Public-Private Synergy to build sustainable
                      urban and rural assets.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Technology Startups */}
              <motion.div
                variants={cardHover}
                whileHover="hover"
                className="group relative h-[500px] overflow-hidden rounded-2xl shadow-2xl border border-white hover:border-green-500 transition-all duration-300"
              >
                <motion.img
                  variants={imageReveal}
                  alt="Modern tech startup workspace fostering high-growth innovation"
                  className="absolute inset-0 h-full w-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-110"
                  src="tstar.png"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <Rocket
                    className="text-amber-400 group-hover:text-green-400 mb-4"
                    size={48}
                    strokeWidth={1.5}
                  />
                  <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                    Technology Startups
                  </h3>
                  <p className="text-gray-200 text-sm mb-4 leading-relaxed">
                    Incubating high-growth ventures through mentorship, capital,
                    and strategic access.
                  </p>
                  <div className="pt-4 border-t border-white/15">
                    <p className="text-[14px] text-amber-400 uppercase font-black tracking-widest group-hover:text-green-600 mb-2">
                      Impact Statement
                    </p>
                    <p className="text-sm text-gray-200 italic font-light">
                      Fueling innovation that solves uniquely Indian problems
                      for a global audience.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Industrial Automation */}
              <motion.div
                variants={cardHover}
                whileHover="hover"
                className="group relative h-[500px] overflow-hidden rounded-2xl shadow-2xl border border-white hover:border-green-500 transition-all duration-300"
              >
                <motion.img
                  variants={imageReveal}
                  alt="Precision engineering and industrial automation in a high-tech factory setting"
                  className="absolute inset-0 h-full w-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-110"
                  src="indauto.png"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <Cpu
                    className="text-amber-400 group-hover:text-green-400 mb-4"
                    size={48}
                    strokeWidth={1.5}
                  />
                  <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                    Industrial Automation
                  </h3>
                  <p className="text-gray-200 text-sm mb-4 leading-relaxed">
                    Bridging legacy industry and Industry 4.0 through AI and IoT
                    integration.
                  </p>
                  <div className="pt-4 border-t border-white/15">
                    <p className="text-[14px] text-amber-400 uppercase font-black tracking-widest group-hover:text-green-600 mb-2">
                      Market Context
                    </p>
                    <p className="text-sm text-gray-200 italic font-light">
                      Optimizing workflow and efficiency through data-driven
                      factory solutions.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
      {/* We Serve Section 
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={staggerContainer}
        className="py-24 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={fadeInUp}
            className="mb-16 flex flex-col items-center text-center"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
            >
              Industries We Serve
            </motion.h2>
            <div className="h-1.5 w-24 bg-green-500 rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Sprout,
                title: "Agriculture ",
                desc: " ",
              },
              {
                icon: Factory,
                title: "Manufacturing",
                desc: " ",
              },
              {
                icon: Rocket,
                title: "MSMEs",
                desc: " ",
              },
              {
                icon: HardHat,
                title: "Infrastructure",
                desc: " ",
              },
              {
                icon: Cpu,
                title: "Technology",
                desc: " ",
              },
              {
                icon: Truck,
                title: "Export Businesses",
                desc: " ",
              },
            ].map((vertical, index) => (
              <motion.div
                key={index}
                variants={cardHover}
                whileHover="hover"
                className="group p-8 rounded-2xl bg-white border border-gray-200 hover:border-green-500 transition-all duration-300 shadow-sm hover:shadow-xl"
              >
                <div className="size-14 bg-blue-50 rounded-xl flex items-center justify-center text-green-600 group-hover:bg-green-500 group-hover:text-white transition-all mb-6">
                  <vertical.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                  {vertical.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {vertical.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>*/}

      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="relative w-full min-h-screen flex items-center overflow-hidden"
      >
        {/* 🔥 Background Image 
            <div className="absolute inset-0 z-0">
              <img
                src="/h2.webp" // 👉 your background image
                alt="Background"
                className="w-full h-full object-cover"
              />*/}
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-green-900/85"></div>
        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center text-white">
          {/* LEFT — TEXT CONTENT */}
          <div>
            {/* Heading */}
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Why Bharatx Ventures
            </h2>
            {/* Description */}
            <p className="text-white/80 text-lg leading-relaxed mb-10">
              Transforming SMEs, enabling industrial efficiency, and building
              scalable ventures across sectors.
            </p>
            {/* Cards */}
            <div className="space-y-3">
              {[
                "Structured execution frameworks",
                "Multi-sector expertise",
                "Focus on scalable outcomes",
                "Integrated capital + consulting approach",
              ].map((item, index) => (
                <motion.div
                  variants={cardHover}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover="hover"
                  className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-md rounded-lg shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                  key={index}
                >
                  {/* Number */}
                  <div className="w-10 h-10 flex items-center justify-center bg-[var(--color-accent)] text-[var(--color-primary)] font-bold rounded-md">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  {/* Text */}
                  <p className="text-base font-medium">{item}</p>
                </motion.div>
              ))}
            </div>
            {/* Featured Work */}
            <div className="mt-10">
              <h3 className="text-xl font-bold mb-2">Featured Work</h3>
              <p className="text-white/70 text-[12px] leading-relaxed">
                Transforming SMEs, enabling industrial efficiency & building
                scalable ventures across sectors.
              </p>
            </div>
          </div>
          {/* RIGHT — IMAGE */}
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-green-400/20 rounded-full blur-3xl"></div>
            {/* Image Card */}
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src="/h4.png" // 👉 can be same or different image
                alt="Why Bharatx Ventures"
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA Card */}
      <div className="flex justify-center ">
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="relative py-12 w-450 overflow-hidden rounded-sm bg-green-900/85 text-white"
        >
          {/* Background Decorative Element 
              <div className="absolute right-0 bottom-0 opacity-10 translate-x-1/4 translate-y-1/4 pointer-events-none">
                <svg width="600" height="600" viewBox="0 0 100 100" fill="none">
                  <rect width="100" height="100" fill="white" />
                </svg>
              </div>*/}
          {/* ✅ Background Image */}
          {/* <div className="absolute inset-0 z-0">
            <motion.img
              variants={imageReveal}
              src="/h2.webp"
              alt="Background"
              className="w-full h-full object-cover scale-105"
            />
          </div> */}

          {/* ✅ Content */}
          <section className="relative py-24 lg:py-32 overflow-hidden bg-[#0B0F19]/50 text-white border-y border-white/10">
            {/* 1. Technical Grid Background Pattern */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(#22c55e 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            {/* 2. Subtle Diagonal Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-emerald-900/10" />

            {/* 3. Decorative Top Line */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />

            <div className="relative z-10 max-w-5xl mx-auto px-6">
              {/* Label / Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-3 mb-8"
              >
                <div className="h-px w-10 bg-emerald-500"></div>
                <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest font-semibold">
                  Partnership Opportunity
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-[1.1]"
              >
                Ready to Scale Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-white">
                  Institutional Impact?
                </span>
              </motion.h2>

              {/* Description with Icon */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12 max-w-3xl"
              >
                <p className="text-lg md:text-xl text-slate-300 font-normal leading-relaxed flex-1">
                  Partner with Bharatx Ventures to leverage world-class
                  operational expertise, strategic capital, and a legacy of
                  governance excellence.
                </p>

                {/* Decorative Stat/Icon */}
                <div className="hidden md:flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded backdrop-blur-sm">
                  <Target className="text-emerald-500" size={20} />
                  <div className="text-xs font-mono text-emerald-300 uppercase">
                    High ROI Focus
                  </div>
                </div>
              </motion.div>

              {/* Buttons - Block Style */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
              >
                {/* Primary - Solid Green, Sharp Edges */}
                <motion.a
                  href="/contact-us"
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative inline-flex items-center justify-center w-full sm:w-auto px-10 py-4 text-base font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-all duration-300 clip-corner-sm"
                  style={{
                    clipPath:
                      "polygon(0 0, 100% 0, 100% 85%, 95% 100%, 0 100%)",
                  }} /* Techy corner cut */
                >
                  <span className="relative z-10 flex items-center gap-2">
                    CONTACT PARTNERSHIP
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </motion.a>

                {/* Secondary - Transparent with Solid Border */}
                <motion.a
                  href="/service"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative inline-flex items-center justify-center w-full sm:w-auto px-10 py-4 text-base font-bold text-white border border-emerald-500/50 hover:border-emerald-400 hover:bg-emerald-500/10 transition-all duration-300"
                >
                  VIEW CAPABILITIES
                </motion.a>
              </motion.div>
            </div>

            {/* Decorative Bottom Graphic */}
            <div className="absolute bottom-[-50px] right-[-50px] w-64 h-64 border border-white/5 rounded-full flex items-center justify-center opacity-30">
              <Hexagon
                size={120}
                strokeWidth={1}
                className="text-emerald-500/20"
              />
            </div>
          </section>
        </motion.section>
      </div>
    </main>
  );
}
