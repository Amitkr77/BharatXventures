"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  TrendingUp,
  Lightbulb,
  Rocket,
  Sprout,
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
        className="relative w-full overflow-hidden bg-white py-10"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeInUp} className="flex flex-col gap-8">
              <motion.div
                variants={fadeInUp}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100"
              >
                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
                  India Premier Venture Builder
                </span>
              </motion.div>

              <motion.h2
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
                className="text-5xl lg:text-7xl font-black text-gray-900 leading-[1.1] tracking-tight"
              >
                Building Scalable{" "}
                <span className="text-blue-600 italic">Enterprises</span> for
                the Future of India
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                transition={{ delay: 0.3 }}
                className="text-xl text-gray-600 leading-relaxed max-w-xl"
              >
                Bharatx Ventures partners with entrepreneurs, industries, and
                institutions to build, fund, and scale high-growth ventures.
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
                    className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-blue-200/50 hover:shadow-xl hover:shadow-blue-300/40 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Explore Services
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
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-100/40 rounded-full blur-3xl"></div>

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
                    <div className="p-3 bg-blue-600 rounded-lg">
                      <TrendingUp size={24} />
                    </div>
                    <div>
                      <p className="text-xs uppercase font-bold tracking-widest text-blue-300">
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
              Our Strategic Verticals
            </motion.h2>
            <div className="h-1.5 w-24 bg-blue-600 rounded-full"></div>
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
                className="group p-8 rounded-2xl bg-white border border-gray-200 hover:border-blue-500 transition-all duration-300 shadow-sm hover:shadow-xl"
              >
                <div className="size-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all mb-6">
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
              className="group p-8 rounded-2xl bg-blue-600 text-white flex flex-col justify-center items-center text-center shadow-xl hover:bg-blue-700 transition-all duration-300"
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
                  className="px-6 py-3 bg-white text-blue-700 rounded-lg font-bold text-sm hover:bg-gray-100 transition-colors"
                >
                  Become a Partner
                </motion.button>
              </Link>
            </motion.div>
          </div>
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
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-100 rounded-full blur-2xl"></div>

              <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-2xl max-w-[420px] w-full mx-auto">

    <motion.img
      variants={imageReveal}
      alt="Pradeep Kumar, Founder & CEO of Bharatx Ventures"
      className="w-full h-[460px] object-cover object-top"
      src="https://aixpertslabs.com/assets/pradeep_kumar-69a6af88.jpeg"
    />

    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-700/90 to-transparent p-6 text-white">
      <h3 className="text-2xl font-bold">Pradeep Kumar</h3>
      <p className="text-blue-200 text-sm font-bold uppercase tracking-widest">
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
                <span className="h-px w-12 bg-blue-600"></span>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-[0.2em]">
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
                  At Bharatax Ventures, our mission is to empower businesses through data, technology, and innovation. With over a decade of experience in building enterprise data platforms and AI-driven solutions, we focus on transforming complex data into actionable insights that drive business growth.
                  Our vision is to help organizations unlock the true potential of data by combining advanced analytics, scalable technology, and strategic thinking. We believe that the future belongs to companies that can harness data intelligently and turn it into competitive advantage..
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
                <div className="h-12 w-0.5 bg-blue-600"></div>
                <p className="text-sm text-gray-500 max-w-sm">
                  Over 10 years of experience in building scalable data platforms, AI-powered products, and enterprise analytics solutions.
                </p>
              </motion.div>
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
        className="py-20 bg-blue-600 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <motion.div variants={fadeInUp} className="flex flex-col gap-2">
              <p className="text-blue-200 text-sm font-bold tracking-widest uppercase">
                Cumulative Scale
              </p>
              <h3 className="text-5xl lg:text-6xl font-black text-white">
                100Cr+
              </h3>
              <p className="text-white/80 font-medium">
                Enterprise Value Generated
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col gap-2 border-x border-white/15 px-6"
            >
              <p className="text-blue-200 text-sm font-bold tracking-widest uppercase">
                Ecosystem Impact
              </p>
              <h3 className="text-5xl lg:text-6xl font-black text-white">
                50+
              </h3>
              <p className="text-white/80 font-medium">
                Ventures Supported Globally
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col gap-2">
              <p className="text-blue-200 text-sm font-bold tracking-widest uppercase">
                Cross-Sector Expertise
              </p>
              <h3 className="text-5xl lg:text-6xl font-black text-white">
                10+
              </h3>
              <p className="text-white/80 font-medium">
                Core Industries Served
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
