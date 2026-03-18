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
  Quote,
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
          className="relative w-full overflow-hidden py-10"
        >
          {/* ✅ Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="/hero1.png" // 👉 replace with your image path
              alt="Background"
              className="w-full h-full object-cover object-top"
            />
            
            {/* Optional dark overlay for better text visibility */}
            <div className="absolute inset-0 bg-white/60"></div>
          </div>

          {/* ✅ Content (kept above background) */}
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div variants={fadeInUp} className="flex flex-col gap-8">
                <motion.div
                  variants={fadeInUp}
                  transition={{ delay: 0.1 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-100 border border-green-100"
                >
                  <span className="w-2 h-2 rounded-full bg-green-600"></span>
                  <span className="text-xs font-bold text-green-700 uppercase tracking-wider">
                    {`India's Premier Venture Builder`} 
                  </span>
                </motion.div>

                <motion.h2
                  variants={fadeInUp}
                  transition={{ delay: 0.2 }}
                  className="text-5xl lg:text-7xl font-black text-gray-900 leading-[1.1] tracking-tight"
                >
                  Building Scalable{" "}
                  <span className="text-green-600 italic">Enterprises</span> for
                  the Future of India
                </motion.h2>

                <motion.p
                  variants={fadeInUp}
                  transition={{ delay: 0.3 }}
                  className="text-xl text-gray-600 font-bold leading-relaxed max-w-xl"
                >
                  We partner with entrepreneurs, industries, and institutions to build, fund, and scale businesses from 
                  idea to ₹100 Crore+ enterprises through capital enablement, strategic consulting, and technology-driven execution.
                </motion.p>

                <motion.div
                  variants={fadeInUp}
                  transition={{ delay: 0.4 }}
                  className="flex flex-wrap gap-4"
                >
                  <Link href="/service">
                    <motion.button
                      whileHover="hover"
                      whileTap="tap"
                      variants={buttonVariants}
                      className="px-8 py-4 bg-green-400 text-white rounded-xl font-bold text-lg shadow-lg shadow-green-200/50 hover:shadow-xl hover:shadow-green-300/40 hover:-translate-y-0.5 transition-all duration-300"
                    >
                      Explore Our Capabilities
                    </motion.button>
                  </Link>

                  <Link href="/contact-us">
                    <motion.button
                      whileHover="hover"
                      whileTap="tap"
                      variants={buttonVariants}
                      className="px-8 py-4 border-2 border-gray-200 text-gray-900 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all duration-300"
                    >
                      Partner With Us
                    </motion.button>
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div variants={imageReveal} className="relative">
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
          </div>
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
                title: "SME Growth Capital & Venture Building",
                desc: "Strategic capital solutions and operational venture building designed to scale small and medium enterprises into market leaders.",
              },
              {
                icon: Lightbulb,
                title: "Strategic Business Consulting",
                desc: "High-level advisory services focusing on long-term sustainability, organizational efficiency, and market entry strategies.",
              },
              {
                icon: Rocket,
                title: "Venture Development & Acceleration",
                desc: "Curated acceleration programs for high-growth potential startups and internal venture spin-offs across multiple sectors.",
              },
              {
                icon: Sprout,
                title: "Agri-Tech Manufacturing & Export",
                desc: "Leveraging technology for sustainable agricultural manufacturing and global supply chain operations.",
              },
              {
                icon: Cpu,
                title: "AI Tech Consultancy for Automation",
                desc: "Engineering intelligence for industrial automation through bespoke AI solutions and digital transformation roadmaps.",
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
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {vertical.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
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
              <p className="text-white/90 text-sm mb-6">
                Partner with us to redefine industrial standards across India.
              </p>
              <Link href="/contact-us">
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
        className="py-5 bg-green-600"
      >
        <div className="max-w-7xl mx-auto px-6">

          <motion.div
            variants={fadeInUp}
            className="mb-16 flex flex-col items-center text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Venture Development Framework
            </h2>
            <div className="h-1 w-120 bg-white rounded-full"></div>
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
                whileHover="hover"
                className="group p-10 rounded-2xl bg-white border border-gray-200 hover:border-green-500 transition-all duration-300 shadow-sm hover:shadow-xl"
              >
                <div className="size-14 bg-blue-50 rounded-xl flex items-center justify-center text-green-600 group-hover:bg-green-500 group-hover:text-white transition-all mb-6">
                  <step.icon size={28} />
                </div>

                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {step.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}

          </div>

        </div>
      </motion.section>

      {/* Our Approach */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={staggerContainer}
        className="py-5 bg-green-600">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={fadeInUp}
            className="mb-16 flex flex-col items-center text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Our Approach
            </h2>
            <div className="h-1 w-40 bg-white rounded-full"></div>
          </motion.div>

          <div className="flex flex-wrap items-center justify-center gap-6">
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
                whileHover="hover"
                className="group w-[150px] h-[160px] flex flex-col items-center justify-center rounded-full bg-white border border-gray-200 hover:border-green-500 transition-all duration-300 shadow-md hover:shadow-xl text-center font-bold"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center text-green-600 group-hover:bg-green-500 group-hover:text-white transition-all mb-3">
                  <step.icon size={26} />
                </div>

                {/* Title */}
                <h3 className="text-sm font-bold text-gray-700 leading-tight px-2">
                  {step.title}
                </h3>
              </motion.div>

              {/* Arrow */}
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
            className="text-center text-white font-bold mt-8"
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
                src="https://aixpertslabs.com/assets/pradeep_kumar-69a6af88.jpeg"
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
                className="relative"
              >
                <Quote className="absolute -top-4 -left-6 text-6xl text-gray-200 -z-10" />
                <p className="text-xl text-gray-600 leading-relaxed italic">
                  {`Our mission is to build the backbone of India's future economy by combining deep sector expertise with institutional rigor`}
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                transition={{ delay: 0.4 }}
                className="flex flex-col gap-1"
              >
                <p className="font-bold text-lg text-gray-900">Pradeep Kumar</p>
                <p className="text-gray-500 text-sm">
                  CEO & Data Product Leader
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                transition={{ delay: 0.5 }}
                className="flex gap-4"
              >
                <div className="h-20 w-1 bg-green-600"></div>
                <p className="text-sm text-gray-500 max-w-sm">
                  With over 15 years of experience in strategic consulting and industrial scale-up, Pradeep Kumar leads Bharatx Ventures with a vision for operational excellence and sustainable impact.
                </p>
              </motion.div>
              <a class="text-primary font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:text-accent transition-colors" href="#">
                  Our Core Team <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
        className="py-20 bg-gray-200 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-navy-600 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-navy-600 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <motion.div variants={fadeInUp} className="flex flex-col gap-4 border-l-2 border-primary pl-8">
              <p className="text-navy-600 text-sm font-bold tracking-widest uppercase">
                Cumulative Scale
              </p>
              <h3 className="text-5xl lg:text-6xl font-black text-green-400">
                100Cr+
              </h3>
              <p className="text-green-400 font-medium">
                Enterprise Value Generated
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col gap-4 border-l-2 border-primary pl-8"
            >
              <p className="text-navy-600 text-sm font-bold tracking-widest uppercase">
                Ecosystem Impact
              </p>
              <h3 className="text-5xl lg:text-6xl font-black text-green-400">
                50+
              </h3>
              <p className="text-green-400 font-medium">
                Ventures Supported Globally
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col gap-4 border-l-2 border-primary pl-8">
              <p className="text-navy-600 text-sm font-bold tracking-widest uppercase">
                Cross-Sector Expertise
              </p>
              <h3 className="text-5xl lg:text-6xl font-black text-green-400">
                10+
              </h3>
              <p className="text-green-400 font-medium">
                Core Industries Served
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>
      
    </main>
  );
}
