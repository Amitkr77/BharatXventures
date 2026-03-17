"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Wheat,
  Building2,
  Factory,
  HardHat,
  Rocket,
  Cpu,
  Globe,
  ArrowRight,
  BarChart3,
  Handshake,
} from "lucide-react";
import Link from "next/link";

// Animation Variants
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

export default function IndustriesPage() {
  return (
    <main className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="relative py-32 md:py-48 overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            alt="Professional boardroom meeting representing institutional expertise and strategic collaboration"
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&auto=format&fit=crop"
          />
          <div className="absolute inset-0 bg-blue-900/85 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-blue-900/70 to-blue-900"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={fadeInUp}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-[0.2em] uppercase mb-8"
          >
            <span className="size-2.5 rounded-full bg-amber-400"></span>
            Institutional Grade Sector Expertise
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight tracking-tight"
          >
            Industries We <span className="text-amber-400">Empower</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            transition={{ delay: 0.3 }}
            className="max-w-3xl mx-auto text-xl text-gray-200 font-light leading-relaxed tracking-wide"
          >
            Strategic partnership and institutional-grade support across India
            core economic sectors. We drive growth through capital, network, and
            operational excellence.
          </motion.p>
        </div>
      </motion.section>

      {/* Industry Grid */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="py-32 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Agriculture & Food Processing */}
            <motion.div
              variants={cardHover}
              whileHover="hover"
              className="group relative h-[500px] overflow-hidden rounded-2xl shadow-2xl"
            >
              <motion.img
                variants={imageReveal}
                alt="Modern agriculture and food processing facility showcasing sustainable value chains"
                className="absolute inset-0 h-full w-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-110"
                src="https://images.unsplash.com/photo-1500384066616-8a8d547abfc9?w=800&auto=format&fit=crop"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent"></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <Wheat
                  className="text-amber-400 mb-4"
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
                  <p className="text-[10px] text-amber-400 uppercase font-black tracking-widest mb-2">
                    Market Context
                  </p>
                  <p className="text-xs text-gray-200 italic font-light">
                    Leveraging India position as a global food basket through
                    tech-driven export readiness.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* MSMEs */}
            <motion.div
              variants={cardHover}
              whileHover="hover"
              className="group relative h-[500px] overflow-hidden rounded-2xl shadow-2xl"
            >
              <motion.img
                variants={imageReveal}
                alt="Modern office hub empowering MSMEs with scalable operations and institutional support"
                className="absolute inset-0 h-full w-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-110"
                src="https://images.unsplash.com/photo-1497366811353-11d2b7b3d0e5?w=800&auto=format&fit=crop"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent"></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <Building2
                  className="text-amber-400 mb-4"
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
                  <p className="text-[10px] text-amber-400 uppercase font-black tracking-widest mb-2">
                    Impact Statement
                  </p>
                  <p className="text-xs text-gray-200 italic font-light">
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
              className="group relative h-[500px] overflow-hidden rounded-2xl shadow-2xl"
            >
              <motion.img
                variants={imageReveal}
                alt="Advanced manufacturing facility driving industrial excellence and productivity"
                className="absolute inset-0 h-full w-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-110"
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent"></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <Factory
                  className="text-amber-400 mb-4"
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
                  <p className="text-[10px] text-amber-400 uppercase font-black tracking-widest mb-2">
                    Market Context
                  </p>
                  <p className="text-xs text-gray-200 italic font-light">
                    Transitioning towards `Make in India` excellence with global
                    supply chain resiliency.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Infrastructure */}
            <motion.div
              variants={cardHover}
              whileHover="hover"
              className="group relative h-[500px] overflow-hidden rounded-2xl shadow-2xl"
            >
              <motion.img
                variants={imageReveal}
                alt="Urban infrastructure development project symbolizing national growth foundations"
                className="absolute inset-0 h-full w-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-110"
                src="https://images.unsplash.com/photo-1486406146926-c627a92c91f9?w=800&auto=format&fit=crop"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent"></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <HardHat
                  className="text-amber-400 mb-4"
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
                  <p className="text-[10px] text-amber-400 uppercase font-black tracking-widest mb-2">
                    Impact Statement
                  </p>
                  <p className="text-xs text-gray-200 italic font-light">
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
              className="group relative h-[500px] overflow-hidden rounded-2xl shadow-2xl"
            >
              <motion.img
                variants={imageReveal}
                alt="Modern tech startup workspace fostering high-growth innovation"
                className="absolute inset-0 h-full w-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-110"
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent"></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <Rocket
                  className="text-amber-400 mb-4"
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
                  <p className="text-[10px] text-amber-400 uppercase font-black tracking-widest mb-2">
                    Impact Statement
                  </p>
                  <p className="text-xs text-gray-200 italic font-light">
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
              className="group relative h-[500px] overflow-hidden rounded-2xl shadow-2xl"
            >
              <motion.img
                variants={imageReveal}
                alt="Precision engineering and industrial automation in a high-tech factory setting"
                className="absolute inset-0 h-full w-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-110"
                src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?w=800&auto=format&fit=crop"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent"></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <Cpu
                  className="text-amber-400 mb-4"
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
                  <p className="text-[10px] text-amber-400 uppercase font-black tracking-widest mb-2">
                    Market Context
                  </p>
                  <p className="text-xs text-gray-200 italic font-light">
                    Optimizing workflow and efficiency through data-driven
                    factory solutions.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Export Businesses – wider card */}
            <motion.div
              variants={cardHover}
              whileHover="hover"
              className="group md:col-span-2 lg:col-span-3 relative h-[400px] overflow-hidden rounded-2xl shadow-2xl"
            >
              <motion.img
                variants={imageReveal}
                alt="Shipping port and global trade logistics facilitating Indian export businesses"
                className="absolute inset-0 h-full w-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-110"
                src="https://images.unsplash.com/photo-1569449568416-7e6e11b0e4c3?w=1600&auto=format&fit=crop"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent"></div>
              <div className="absolute inset-0 p-12 flex flex-col justify-end">
                <div className="flex items-center gap-6">
                  <Globe
                    className="text-amber-400"
                    size={64}
                    strokeWidth={1.5}
                  />
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">
                      Export Businesses
                    </h3>
                    <p className="text-gray-200 text-base max-w-2xl leading-relaxed">
                      Facilitating global market entry for Indian brands through
                      trade network access and international compliance support.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/15 flex flex-wrap gap-12">
                  <div>
                    <p className="text-[10px] text-amber-400 uppercase font-black tracking-widest mb-1">
                      Strategic Focus
                    </p>
                    <p className="text-sm text-white font-medium">
                      Global Compliance & Trade Financing
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] text-amber-400 uppercase font-black tracking-widest mb-1">
                      Target Impact
                    </p>
                    <p className="text-sm text-white font-medium">
                      Empowering Homegrown Brands for Global Dominance
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Strategic Impact Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={staggerContainer}
        className="py-32 bg-gray-50 relative overflow-hidden"
      >
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-stretch gap-20">
            <motion.div variants={imageReveal} className="w-full lg:w-1/2">
              <div className="relative h-full min-h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <motion.img
                  variants={imageReveal}
                  alt="Modern architectural detail symbolizing cross-sector synergy and institutional growth"
                  className="w-full h-full object-cover"
                  src="https://blog.architizer.com/wp-content/uploads/171625278127920201220_FJMT_Nunawading_Community_JG_0992_WAF_hi_res.jpg"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 to-transparent"></div>
               
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="w-full lg:w-1/2 flex flex-col justify-center py-10"
            >
              <div className="mb-12">
                <motion.h2
                  variants={fadeInUp}
                  className="text-4xl md:text-5xl font-black mb-8 leading-[1.1] text-gray-900 tracking-tight"
                >
                  The Bharatx <br />
                  <span className="text-amber-500">Synergy Advantage</span>
                </motion.h2>
                <motion.p
                  variants={fadeInUp}
                  transition={{ delay: 0.1 }}
                  className="text-gray-600 leading-relaxed text-xl font-light"
                >
                  We add value through cross-sector synergy, combining
                  institutional knowledge with cutting-edge innovation. By
                  leveraging our deep understanding of regulatory frameworks and
                  operational challenges across these seven pillars, we create
                  integrated growth strategies that traditional consultants
                  cannot replicate.
                </motion.p>
              </div>

              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-12"
              >
                <motion.div
                  variants={cardHover}
                  whileHover="hover"
                  className="flex gap-5 group"
                >
                  <div className="size-12 rounded-xl bg-blue-50 flex items-center justify-center text-amber-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <BarChart3 size={24} />
                  </div>
                  <div>
                    <h4 className="font-black text-sm uppercase tracking-widest text-gray-900 mb-2">
                      Institutional Data
                    </h4>
                    <p className="text-sm text-gray-600 font-medium">
                      Evidence-based decision making powered by proprietary
                      datasets.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={cardHover}
                  whileHover="hover"
                  className="flex gap-5 group"
                >
                  <div className="size-12 rounded-xl bg-blue-50 flex items-center justify-center text-amber-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Handshake size={24} />
                  </div>
                  <div>
                    <h4 className="font-black text-sm uppercase tracking-widest text-gray-900 mb-2">
                      Government Liaising
                    </h4>
                    <p className="text-sm text-gray-600 font-medium">
                      Navigating policy with precision and institutional
                      transparency.
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              <motion.a
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3 }}
                className="group inline-flex items-center gap-3 text-blue-600 font-black uppercase text-xs tracking-[0.2em] hover:text-blue-800 transition-colors"
                href="#"
              >
                Discover our Strategic Methodology
                <ArrowRight
                  className="group-hover:translate-x-1 transition-transform"
                  size={18}
                />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="py-20 bg-blue-600 text-white"
      >
        <div className="max-w-5xl mx-auto px-4 text-center">
          <motion.h2
            variants={fadeInUp}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black mb-10 tracking-tight"
          >
            Ready to Scale Your Industry?
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-gray-200 text-lg mb-12 max-w-2xl mx-auto"
          >
            Partner with us in your industry. Bharatx Ventures provides the
            capital, expertise, and networks required to turn ambitious visions
            into national benchmarks.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/contact-us">
              <motion.button
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
                className="w-full sm:w-auto px-10 py-4 bg-amber-400 text-gray-900 font-black rounded-xl hover:bg-amber-300 transition-colors uppercase tracking-widest text-sm shadow-xl shadow-black/20"
              >
                Get in Touch
              </motion.button>
            </Link>

            <Link href="/project">
              <motion.button
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
                className="w-full sm:w-auto px-10 py-4 bg-white/10 hover:bg-white/20 text-white font-black rounded-xl transition-colors uppercase tracking-widest text-sm border border-white/20"
              >
                View Portfolio
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}
