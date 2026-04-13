"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  TrendingUp,
  Lightbulb,
  Rocket,
  Sprout,
  CheckCircle, 
  Settings, 
  DollarSign,
  Cpu,
  Building2,
  Wheat,
  Quote,
  HardHat,
  Factory,
  Truck,
  ArrowRight,
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

export default function Home() {
  return (
    <main className="flex-1 bg-gray-50 text-gray-900 min-h-screen">
      {/* Hero Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="relative w-full min-h-screen flex items-center overflow-hidden"
        >
          {/* ✅ Background Image
          <div className="absolute inset-0 z-0">
            <img
              src="/hero.png" // 👉 replace with your image path
              alt="Background"
              className="w-full h-full object-cover object-top"
            />
            
            {/* Optional dark overlay for better text visibility 
            <div className="absolute inset-0 bg-black/20"></div>
          </div> */}

          {/* ✅ Background Video */}
          <div className="absolute inset-0 z-0">
            <video
              src="/bharatx hero.mp4"  // 👉 replace with your video path
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover object-top will-change-transform"
              style={{ minWidth: "100%", minHeight: "100%" }}
            />

            {/* Optional dark overlay 
            <div className="absolute inset-0 bg-black/20"></div>*/}
          </div>

          {/* ✅ Content (kept above background) 
          <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
            <div className="grid justify-center">
              <motion.div variants={fadeInUp} className="flex flex-col gap-1">
                <motion.div
                  variants={fadeInUp}
                  transition={{ delay: 0.1 }}
                  className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-green-50 border border-green-100 mx-auto opacity-75"
                >
                  <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-600"></span>
                </span> {`India's Premier Venture Builder`}
                </motion.div>

                <motion.h2
                  variants={fadeInUp}
                  transition={{ delay: 0.2 }}
                  className="text-4xl lg:text-7xl font-black text-gray-100 leading-[1.2] tracking-tight item-center mb-15"
                >
                  Building the{" "}
                  <span className="text-green-500 italic"> Next Generation</span> of Indian Companies
                  
                </motion.h2>

                <motion.p
                  variants={fadeInUp}
                  transition={{ delay: 0.3 }}
                  className="text-2xl text-white font-bold leading-relaxed max-w-4xl item-center mx-auto mb-10"
                >
                  BharatX Ventures partners with startups and SMEs to design, build, and scale high-impact businesses across India using AI, strategy, and execution
                </motion.p>

                <motion.div
                  variants={fadeInUp}
                  transition={{ delay: 0.4 }}
                  className="flex flex-wrap gap-4 justify-center items-center"
                >
                  <Link href="/service">
                    <motion.button
                      whileHover="hover"
                      whileTap="tap"
                      variants={buttonVariants}
                      className="px-8 py-4 bg-white text-gray-900 rounded-xl font-bold text-lg shadow-lg shadow-green-200/50 hover:bg-green-500 hover:shadow-xl hover:shadow-green-300/40 hover:-translate-y-0.5 transition-all duration-300"
                    >
                      Explore Our Capabilities
                    </motion.button>
                  </Link>

                  <Link href="/partnership">
                    <motion.button
                      whileHover="hover"
                      whileTap="tap"
                      variants={buttonVariants}
                      className="px-8 py-4 bg-white text-gray-900 rounded-xl font-bold text-lg shadow-lg shadow-green-200/50 hover:bg-green-500 hover:shadow-xl hover:shadow-green-300/40 hover:-translate-y-0.5 transition-all duration-300"
                    >
                      Partner With Us
                    </motion.button>
                  </Link>
                </motion.div>
              </motion.div>

              {/*<motion.div variants={imageReveal} className="relative">
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-green-100/40 rounded-full blur-3xl"></div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white"
                >
                  <motion.img
                    variants={imageReveal}
                    alt="Modern high-end glass office building symbolizing institutional growth and innovation"
                    className="w-full aspect-[4/5] object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkrkWWCfxoDZz8Nmguty2texTmWEicNiLRxw3MRAN3k1ieeu0ssWiH9B6mCY4C4On6iKIMcwd8iwNNRDYRRIYFAiVajuvlNzAXADvoxTuQbGox8_1AuP_Bcfmgt_etBE3DZQUxDMuH-UEpribC-h7Jzc96BpFdomCqR2jloAJI0Olg9u3BPyy0z__NB1p5ypjNM2cghJgePfcyeftshZjYQX_VF1-M2DFl2v8BB7YIcUxj8elEgJ9eW9kpPloEU_mgpb8zpXAwfZzj"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-gray-900/85 to-transparent text-white">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-green-600 rounded-lg">
                        <TrendingUp size={24} />
                      </div>
                      <div>
                        <p className="text-xs uppercase font-bold tracking-widest text-green-300">
                          Excellence
                        </p>
                        <p className="text-lg font-bold">
                          Institutional Standards
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>*/}
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

            {/* CTA Card */}
            <motion.div
              variants={cardHover}
              whileHover="hover"
              className="group p-8 rounded-2xl bg-green-600 text-white flex flex-col justify-center items-center text-center shadow-xl hover:bg-green-500 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-4">Ready to Innovate?</h3>
              <p className="text-white/90 text-lg mb-6">
                Partner with Bharatx Ventures to build and scale the next generation of enterprises.
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
        viewport={{ once: true, amount: 0.25 }}
        variants={staggerContainer}
        className="relative py-2 overflow-hidden"
      >
        {/* ✅ Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/h1.png"
            alt="Background"
            className="w-full h-full object-cover scale-105"
          />

          {/* ✅ Better Overlay (more premium) */}
          <div className="absolute inset-0 bg-green-900/40 backdrop-blur-[2px]"></div>
        </div>

        {/* ✅ Content */}
        <div className="relative z-10 pt-10 pb-5 max-w-7xl mx-auto px-6">

          <motion.div
            variants={fadeInUp}
            className="mb-8 flex flex-col items-center text-center"
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl lg:text-4xl font-bold text-white mb-4"
            >
              Venture Development Framework
            </motion.h2>

            {/* ✅ FIXED width */}
            <div className="h-1 w-40 bg-white/80 rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                variants={cardHover}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover="hover"
                className="group p-10 rounded-2xl bg-white/90 backdrop-blur-md border border-gray-200 hover:border-green-500 transition-all duration-300 shadow-md hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="size-14 bg-blue-50 rounded-xl flex items-center justify-center text-green-600 group-hover:bg-green-500 group-hover:text-white group-hover:rotate-6 transition-all mb-6">
                  <step.icon size={28} />
                </div>

                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {step.title}
                </h3>

                <p className="text-gray-600 text-lg leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Our Approach */}
        <div className="relative z-10 pt-10 pb-5 max-w-7xl mx-auto px-6">
          <motion.div
            variants={fadeInUp}
            className="mb-6 flex flex-col items-center text-center"
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl lg:text-4xl font-bold text-white mb-4"
            >
              Our Approach
            </motion.h2>

            <div className="h-1 w-40 bg-white/80 rounded-full"></div>
          </motion.div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              { title: "Idea", icon: Lightbulb },
              { title: "Validation", icon: CheckCircle },
              { title: "Structuring", icon: Settings },
              { title: "Capital", icon: DollarSign },
              { title: "Scale", icon: TrendingUp },
            ].map((step, index) => (
              <React.Fragment key={index}>

                {/* Card */}
                <motion.div
                  variants={cardHover}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover="hover"
                  className="group w-[180px] h-[180px] flex flex-col items-center justify-center rounded-full bg-white border border-gray-200 hover:border-green-500 transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 text-center font-bold"
                >
                  <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center text-green-600 group-hover:bg-green-500 group-hover:text-white transition-all mb-3">
                    <step.icon size={26} />
                  </div>

                  <h3 className="text-xl font-extrabold text-green-600 leading-tight px-2">
                    {step.title}
                  </h3>
                </motion.div>

                {/* ✅ Modern Arrow */}
                {index !== 4 && (
                  <span className="text-gray-100 text-2xl font-bold hidden md:block mx-4">
                    →
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
          {/* Bottom Text */}
          <motion.p
            variants={fadeInUp}
            className="text-center text-white font-bold mt-4"
          >
            Delivering measurable, scalable outcomes through a structured model.
          </motion.p>
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
                <span className="text-xs font-bold text-green-600 uppercase tracking-[0.2em]">
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
                  With over 15 years of experience in strategic consulting and industrial scale-up, Pradeep Kumar leads Bharatx Ventures with a vision for operational excellence and sustainable impact.
                </p>
              </motion.div>
             <a href="/about-us#core-team" className="text-primary font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:text-accent transition-colors">
                Our Core Team
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
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
            className="py-6 bg-green-800 relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                <motion.div variants={fadeInUp} className="flex flex-col gap-4 border-l-2 border-primary pl-8">
                  <p className="text-gold text-sm font-bold tracking-widest uppercase">
                    Cumulative Scale
                  </p>
                  <h3 className="text-5xl lg:text-6xl font-black text-gold">
                    100Cr+
                  </h3>
                  <p className="text-gold font-medium">
                    Enterprise Value Generated
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="flex flex-col gap-4 border-l-2 border-primary pl-8"
                >
                  <p className="text-gold text-sm font-bold tracking-widest uppercase">
                    Ecosystem Impact
                  </p>
                  <h3 className="text-5xl lg:text-6xl font-black text-gold">
                    50+
                  </h3>
                  <p className="text-gold font-medium">
                    Ventures Supported Globally
                  </p>
                </motion.div>

                <motion.div variants={fadeInUp} className="flex flex-col gap-4 border-l-2 border-primary pl-8 last:border-r-2">
                  <p className="text-gold text-sm font-bold tracking-widest uppercase">
                    Cross-Sector Expertise
                  </p>
                  <h3 className="text-5xl lg:text-6xl font-black text-gold">
                    10+
                  </h3>
                  <p className="text-gold font-medium">
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
                      Driving industrial excellence through systematic improvements
                      in productivity and quality.
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
                        Navigating Public-Private Synergy to build sustainable urban
                        and rural assets.
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
                        Fueling innovation that solves uniquely Indian problems for
                        a global audience.
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
          className="relative w-full min-h-screen flex items-center overflow-hidden">
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
                  Transforming SMEs, enabling industrial efficiency, and building scalable ventures across sectors.
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
                      <p className="text-base font-medium">
                        {item}
                      </p>
                    </motion.div>
                  ))}
                </div>
                {/* Featured Work */}
                <div className="mt-10">
                  <h3 className="text-xl font-bold mb-2">
                    Featured Work
                  </h3>
                  <p className="text-white/70 text-[12px] leading-relaxed">
                    Transforming SMEs, enabling industrial efficiency & building scalable ventures across sectors.
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
          <div className="flex justify-center mt-8">
            <motion.section 
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="relative py-12 w-450 overflow-hidden rounded-2xl bg-green-800 text-white"
            >
              {/* Background Decorative Element 
              <div className="absolute right-0 bottom-0 opacity-10 translate-x-1/4 translate-y-1/4 pointer-events-none">
                <svg width="600" height="600" viewBox="0 0 100 100" fill="none">
                  <rect width="100" height="100" fill="white" />
                </svg>
              </div>*/}
        {/* ✅ Background Image */}
          <div className="absolute inset-0 z-0">
           <motion.img
            variants={imageReveal}
            src="/h2.webp"
            alt="Background"
            className="w-full h-full object-cover scale-105"
           />
          </div>

        {/* ✅ Content */}
        <div className="relative z-10 pt-10 pb-5 max-w-7xl mx-auto px-6"></div>
              {/* Content */}
              <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
                {/* Accent Line */}
                <div className="w-12 h-[2px] bg-[var(--color-accent)] mx-auto mb-10"></div>
                {/* Heading */}
                <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight tracking-tight">
                  Ready to Scale Your <br />
                  <span className="text-[var(--color-accent)]">
                    Institutional Impact?
                  </span>
                </h2>
                {/* Description */}
                <p className="text-lg md:text-xl text-gray-300 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
                  Partner with Bharatx Ventures to leverage world-class operational
                  expertise, strategic capital, and a legacy of governance excellence.
                </p>
                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                  {/* Primary CTA */}
                  <a
                    href="/contact-us"
                    className="px-10 py-4 border border-green-500 bg-green-400 text-[var(--color-primary)] font-extrabold text-xs uppercase tracking-[0.2em] rounded-md hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] hover:scale-105 transition-all duration-300"
                  >
                    Contact Partnership
                  </a>
                  {/* Secondary CTA */}
                  <a
                    href="/service"
                    className="px-10 py-4 border border-green-500 bg-green-400 text-[var(--color-primary)] font-extrabold text-xs uppercase tracking-[0.2em] rounded-md hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] hover:scale-105 transition-all duration-300"
                  >
                    View Capabilities
                  </a>
                </div>
              </div>
            </motion.section>  
          </div>
             
    </main>
  );
}
