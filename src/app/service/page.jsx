"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Rocket,
  HandCoins,
  Gavel,
  TreeDeciduous,
  Cpu,
  Briefcase,
  Globe,
  Scale,
  BarChart3,
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
      delayChildren: 0.2,
    },
  },
};

const cardHover = {
  rest: { scale: 1, y: 0, boxShadow: "0 10px 15px -3px rgba(0,0,0,0.08)" },
  hover: {
    scale: 1.03,
    y: -8,
    boxShadow: "0 20px 25px -5px rgba(0,0,0,0.12)",
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const imageReveal = {
  hidden: { opacity: 0, scale: 0.94, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 1.1, ease: "easeOut" },
  },
};

const buttonVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.06, transition: { duration: 0.3 } },
  tap: { scale: 0.97 },
};

export default function ServicesPage() {
  return (
    <section className="bg-gray-50 text-gray-900 min-h-screen">
      <main>
        {/* Hero Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="relative py-24 px-6 overflow-hidden"
        >
          <div className="absolute inset-0 bg-green-900 z-0">
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAQSVU-5rRlxrEUHgYaSkJ9-kp5p0lFE3eDHjVSBRrF98vW2yswWTcYMiwJEYyxFQxw5o64U1tXdzWfR1z0OVRTMkIEmykNDJk5aOB7WulpgbSUxEwitix8DyF58pGEmR9gfFecLg4XroWT1ccdKJiBdsB8cOZB-vO2RvpFNH4fd6W_MrDgBMa6rAXycnXFaaUjD9bDLv7bQ-0dR7outIHG4wPNfJqd4KXyi48uLk4x-9o20RgxBm6djPZdTyX569n0xxNa694KY-vk')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-green-900 via-green-900/90 to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp} className="flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 px-4 py-1 rounded-full w-fit">
                <Briefcase size={16} />
                <span className="text-xs font-bold uppercase tracking-widest">
                  Institutional Excellence
                </span>
              </div>

              <motion.h1
                variants={fadeInUp}
                className="text-white text-5xl md:text-6xl font-black leading-tight"
              >
                Our Strategic <br />
                <span className="text-amber-400">Services</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
                className="text-gray-200 text-lg leading-relaxed max-w-xl"
              >
                Enabling sustainable growth through SME capital, strategic
                consulting, and industrial innovation. We partner with ₹100Cr+
                enterprises to navigate complex regulatory and market
                landscapes.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <Link href="/industry" passHref>
                <motion.button
                  whileHover="hover"
                  whileTap="tap"
                  variants={buttonVariants}
                  className="bg-amber-500 text-gray-900 px-8 py-4 rounded-xl font-bold hover:bg-amber-300 transition-all duration-300 shadow-lg"
                >
                  Explore Industries
                </motion.button>
                </Link>

                <Link href="/project" passHref>
                <motion.button
                  whileHover="hover"
                  whileTap="tap"
                  variants={buttonVariants}
                  className="border border-white/30 bg-white text-gray-900 px-8 py-4 rounded-xl font-bold hover:bg-amber-300 hover:text-gray-900 transition-all duration-300"
                >
                  Our Impact
                </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Vertical 1: SME Growth Capital & Venture Building */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={staggerContainer}
          className="py-24 bg-white px-6"
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
            <motion.div
              variants={fadeInUp}
              className="w-full md:w-1/2 flex flex-col gap-8"
            >
              <div className="space-y-4">
                <motion.h2
                  variants={fadeInUp}
                  className="text-green-600 text-sm font-bold uppercase tracking-[0.2em]"
                >
                  01. Growth Capital
                </motion.h2>
                <motion.h3
                  variants={fadeInUp}
                  className="text-3xl md:text-4xl font-bold text-gray-900"
                >
                  SME Growth Capital & Venture Building
                </motion.h3>
                <motion.p
                  variants={fadeInUp}
                  className="text-gray-600 text-lg leading-relaxed"
                >
                  We bridge the gap between early-stage innovation and
                  institutional scale. Our focus is on nurturing high-potential
                  startups and transforming them into ₹100Cr+ market leaders
                  through capital infusion and strategic mentorship.
                </motion.p>
              </div>

              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              >
                <motion.div
                  variants={cardHover}
                  whileHover="hover"
                  className="flex gap-4 p-4 border border-gray-100 rounded-xl"
                >
                  <Rocket className="text-green-600" size={24} />
                  <div>
                    <h4 className="font-bold text-gray-900">
                      Startup Incubation
                    </h4>
                    <p className="text-sm text-gray-600">
                      End-to-end support for early stage growth.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={cardHover}
                  whileHover="hover"
                  className="flex gap-4 p-4 border border-gray-100 rounded-xl"
                >
                  <HandCoins className="text-green-600" size={24} />
                  <div>
                    <h4 className="font-bold text-gray-900">Capital Access</h4>
                    <p className="text-sm text-gray-600">
                      Connecting to institutional funding networks.
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-green-50 p-6 rounded-2xl border-l-4 border-amber-500"
              >
                <h4 className="text-green-700 font-bold mb-2">
                  Benefits to Clients
                </h4>
                <p className="text-gray-700 text-sm">
                  Access to premium debt and equity instruments, hands-on
                  operational scaling, and a roadmap to ₹100Cr+ valuation.
                </p>
              </motion.div>
            </motion.div>

            <motion.div variants={imageReveal} className="w-full md:w-1/2">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-amber-500"></div>
                <motion.img
                  variants={imageReveal}
                  alt="Executive team collaborating around a modern office table during strategic planning"
                  className="rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                  src="/ser-sme.png"
                />
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Vertical 2: Strategic Business Consulting */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={staggerContainer}
          className="py-24 bg-gray-50 px-6"
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse gap-16 items-center">
            <motion.div
              variants={fadeInUp}
              className="w-full md:w-1/2 flex flex-col gap-8"
            >
              <div className="space-y-4">
                <motion.h2
                  variants={fadeInUp}
                  className="text-green-600 text-sm font-bold uppercase tracking-[0.2em]"
                >
                  02. Advisory
                </motion.h2>
                <motion.h3
                  variants={fadeInUp}
                  className="text-3xl md:text-4xl font-bold text-gray-900"
                >
                  Strategic Business Consulting
                </motion.h3>
                <motion.p
                  variants={fadeInUp}
                  className="text-gray-600 text-lg leading-relaxed"
                >
                  Expertise in high-stakes regulatory advisory and complex
                  corporate structuring. We provide the institutional
                  intelligence required for large-scale industrial project
                  consulting.
                </motion.p>
              </div>

              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              >
                <motion.div
                  variants={cardHover}
                  whileHover="hover"
                  className="flex gap-4 p-4 bg-white rounded-xl shadow-sm"
                >
                  <Gavel className="text-green-600" size={24} />
                  <div>
                    <h4 className="font-bold text-gray-900">
                      Regulatory Advisory
                    </h4>
                    <p className="text-sm text-gray-600">
                      Compliance and policy navigation.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={cardHover}
                  whileHover="hover"
                  className="flex gap-4 p-4 bg-white rounded-xl shadow-sm"
                >
                  <Scale className="text-green-600" size={24} />
                  <div>
                    <h4 className="font-bold text-gray-900">
                      Corporate Structuring
                    </h4>
                    <p className="text-sm text-gray-600">
                      Optimizing organizational frameworks.
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-green-50 p-6 rounded-2xl border-l-4 border-amber-500"
              >
                <h4 className="text-green-700 font-bold mb-2">
                  Benefits to Clients
                </h4>
                <p className="text-gray-700 text-sm">
                  Mitigation of legal risks, streamlined industrial approvals,
                  and tax-efficient corporate frameworks for global operations.
                </p>
              </motion.div>
            </motion.div>

            <motion.div variants={imageReveal} className="w-full md:w-1/2">
              <div className="relative">
                <div className="absolute -bottom-10 -right-1 w-24 h-24 border-b-2 border-r-2 border-amber-500"></div>
                <motion.img
                  variants={imageReveal}
                  alt="Business professional analyzing financial charts and regulatory documents on a modern desk"
                  className="rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                  src="/strategic.png"
                />
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Vertical 3: Venture Development & Acceleration */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={staggerContainer}
          className="py-24 bg-white px-6"
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
            <motion.div
              variants={fadeInUp}
              className="w-full md:w-1/2 flex flex-col gap-8"
            >
              <div className="space-y-4">
                <motion.h2
                  variants={fadeInUp}
                  className="text-green-600 text-sm font-bold uppercase tracking-[0.2em]"
                >
                  03. Acceleration
                </motion.h2>
                <motion.h3
                  variants={fadeInUp}
                  className="text-3xl md:text-4xl font-bold text-gray-900"
                >
                  Venture Development & Acceleration
                </motion.h3>
                <motion.p
                  variants={fadeInUp}
                  className="text-gray-600 text-lg leading-relaxed"
                >
                  Accelerating digital transformation and market entry for
                  tech-first ventures. We build product strategies that resonate
                  with modern global markets.
                </motion.p>
              </div>

              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              >
                <motion.div
                  variants={cardHover}
                  whileHover="hover"
                  className="flex gap-4 p-4 border border-gray-100 rounded-xl"
                >
                  <Rocket className="text-green-600" size={24} />
                  <div>
                    <h4 className="font-bold text-gray-900">Market Entry</h4>
                    <p className="text-sm text-gray-600">
                      GTM strategies for complex markets.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={cardHover}
                  whileHover="hover"
                  className="flex gap-4 p-4 border border-gray-100 rounded-xl"
                >
                  <Cpu className="text-green-600" size={24} />
                  <div>
                    <h4 className="font-bold text-gray-900">
                      Digital Transformation
                    </h4>
                    <p className="text-sm text-gray-600">
                      Modernizing legacy business stacks.
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-green-50 p-6 rounded-2xl border-l-4 border-amber-500"
              >
                <h4 className="text-green-700 font-bold mb-2">
                  Benefits to Clients
                </h4>
                <p className="text-gray-700 text-sm">
                  Rapid speed-to-market, enhanced digital presence, and scalable
                  product architecture designed for longevity.
                </p>
              </motion.div>
            </motion.div>

            <motion.div variants={imageReveal} className="w-full md:w-1/2">
            <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-amber-500"></div>
              <motion.img
                  variants={imageReveal}
                  alt="Executive team collaborating around a modern office table during strategic planning"
                  className="w-[540px] h-[500px] rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                  src="/develop.png"
              />
            </div>  
            </motion.div>
          </div>
        </motion.section>

        {/* Vertical 4: Agri-Tech Manufacturing & Export */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={staggerContainer}
          className="py-24 bg-green-600 text-white px-6"
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse gap-16 items-center">
            <motion.div
              variants={fadeInUp}
              className="w-full md:w-1/2 flex flex-col gap-8"
            >
              <div className="space-y-4">
                <motion.h2
                  variants={fadeInUp}
                  className="text-amber-400 text-sm font-bold uppercase tracking-[0.2em]"
                >
                  04. Agri-Tech
                </motion.h2>
                <motion.h3
                  variants={fadeInUp}
                  className="text-3xl md:text-4xl font-bold"
                >
                  Agri-Tech Manufacturing & Export
                </motion.h3>
                <motion.p
                  variants={fadeInUp}
                  className="text-gray-200 text-lg leading-relaxed"
                >
                  Revitalizing the agricultural landscape through advanced food
                  processing and international value-chain development. We
                  bridge local production with global demand.
                </motion.p>
              </div>

              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              >
                <motion.div
                  variants={cardHover}
                  whileHover="hover"
                  className="flex gap-4 p-4 bg-white/10 rounded-xl border border-white/10"
                >
                  <TreeDeciduous className="text-amber-400" size={24} />
                  <div>
                    <h4 className="font-bold">Food Processing</h4>
                    <p className="text-sm text-gray-200">
                      Advanced value-addition tech.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={cardHover}
                  whileHover="hover"
                  className="flex gap-4 p-4 bg-white/10 rounded-xl border border-white/10"
                >
                  <Globe className="text-amber-400" size={24} />
                  <div>
                    <h4 className="font-bold">Global Export</h4>
                    <p className="text-sm text-gray-200">
                      International market linkages.
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-white/5 p-6 rounded-2xl border-l-4 border-amber-400"
              >
                <h4 className="text-amber-300 font-bold mb-2">
                  Benefits to Clients
                </h4>
                <p className="text-gray-200 text-sm">
                  Enhanced yield through tech, access to EU and North American
                  export markets, and sustainable industrial certifications.
                </p>
              </motion.div>
            </motion.div>

            <motion.div variants={imageReveal} className="w-full md:w-1/2">
              <div className="relative">
                <div className="absolute -bottom-10 right-0 w-24 h-24 border-b-2 border-r-2 border-amber-500"></div>
                <motion.img
                  variants={imageReveal}
                  alt="Business professional analyzing financial charts and regulatory documents on a modern desk"
                  className="w-[540px] rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                  src="/agritech.png"
              />
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Vertical 5: AI Tech Consultancy for Industrial Automation */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={staggerContainer}
          className="py-24 bg-gray-50 px-6"
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
            <motion.div
              variants={fadeInUp}
              className="w-full md:w-1/2 flex flex-col gap-8"
            >
              <div className="space-y-4">
                <motion.h2
                  variants={fadeInUp}
                  className="text-green-600 text-sm font-bold uppercase tracking-[0.2em]"
                >
                  05. Industry 4.0
                </motion.h2>
                <motion.h3
                  variants={fadeInUp}
                  className="text-3xl md:text-4xl font-bold text-gray-900"
                >
                  AI Tech for Industrial Automation
                </motion.h3>
                <motion.p
                  variants={fadeInUp}
                  className="text-gray-600 text-lg leading-relaxed"
                >
                  Implementing smart manufacturing through Industrial IoT and
                  AI-driven predictive maintenance. We turn industrial data into
                  actionable growth insights.
                </motion.p>
              </div>

              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              >
                <motion.div
                  variants={cardHover}
                  whileHover="hover"
                  className="flex gap-4 p-4 border border-gray-100 rounded-xl"
                >
                  <Cpu className="text-green-600" size={24} />
                  <div>
                    <h4 className="font-bold text-gray-900">Industrial IoT</h4>
                    <p className="text-sm text-gray-600">
                      Connected manufacturing ecosystems.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={cardHover}
                  whileHover="hover"
                  className="flex gap-4 p-4 border border-gray-100 rounded-xl"
                >
                  <BarChart3 className="text-green-600" size={24} />
                  <div>
                    <h4 className="font-bold text-gray-900">
                      Predictive Analytics
                    </h4>
                    <p className="text-sm text-gray-600">
                      Smart maintenance and downtime reduction.
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-green-50 p-6 rounded-2xl border-l-4 border-amber-500"
              >
                <h4 className="text-green-700 font-bold mb-2">
                  Benefits to Clients
                </h4>
                <p className="text-gray-700 text-sm">
                  Reduced operational costs by 30%, enhanced equipment lifespan,
                  and real-time production monitoring across global plants.
                </p>
              </motion.div>
            </motion.div>

            <motion.div variants={imageReveal} className="w-full md:w-1/2">
            <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-amber-500"></div>
              <motion.img
                  variants={imageReveal}
                  alt="Executive team collaborating around a modern office table during strategic planning"
                  className="w-[540px] h-[540px] rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                src="/automation.png"
              />
            </div>  
            </motion.div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="py-24 px-6"
        >
          <div className="max-w-5xl mx-auto bg-green-600 rounded-3xl p-12 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400 opacity-10 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -ml-24 -mb-24"></div>

            <div className="relative z-10 space-y-8">
              <motion.h2
                variants={fadeInUp}
                className="text-white text-4xl md:text-5xl font-black"
              >
                Ready to scale your enterprise?
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
                className="text-gray-200 text-lg max-w-2xl mx-auto"
              >
                Join hands with Bharatx Ventures to unlock institutional growth
                and industrial excellence. Our partners are waiting to build the
                next ₹100Cr legacy with you.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row justify-center gap-4 pt-4"
              >
                <Link href="/contact-us">
                  <motion.button
                    whileHover="hover"
                    whileTap="tap"
                    variants={buttonVariants}
                    className="bg-amber-500 text-gray-900 px-10 py-4 rounded-xl font-bold text-lg hover:bg-amber-400 hover:scale-100 transition-all duration-300 shadow-xl shadow-amber-400/20"
                  >
                    Book a Consultation
                  </motion.button>
                </Link>

                <motion.button
                  whileHover="hover"
                  whileTap="tap"
                  variants={buttonVariants}
                  className="bg-green-500 text-gray-900 border border-white/20 px-10 py-4 rounded-xl font-bold text-lg hover:bg-amber-400 hover:scale-100 transition-all duration-300"
                >
                  Download Services Brochure
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </main>
    </section>
  );
}
