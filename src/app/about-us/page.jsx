"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Eye,
  Target,
  ShieldCheck,
  Building2,
  TrendingUp,
  Quote,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import pradeep from "./image/pradeepkumar.png";
import khushi from "./image/khushikumari.png";
import vandana from "./image/vandana.png";

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

export default function AboutPage() {
  return (
    <main className="flex-grow bg-gray-50 text-gray-900 min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="relative py-20 lg:py-24 overflow-hidden bg-white"
      >
        

        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeInUp} className="relative z-10">
              <motion.span
                variants={fadeInUp}
                transition={{ delay: 0.1 }}
                className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 font-bold text-xs uppercase tracking-widest rounded-full mb-6"
              >
                Established Growth Partner
              </motion.span>

              <motion.h1
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
                className="text-5xl lg:text-7xl font-black text-gray-900 leading-tight tracking-tight mb-8"
              >
                About <br />
                <span className="text-blue-600">Bharatx Ventures</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                transition={{ delay: 0.3 }}
                className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-10 max-w-xl"
              >
                Empowering Indian SMEs to scale through strategic partnership
                and venture building. We bridge the gap between local potential
                and global standards.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <motion.button
                  whileHover="hover"
                  whileTap="tap"
                  variants={buttonVariants}
                  className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform duration-200"
                >
                  Our Methodology
                </motion.button>

                <motion.button
                  whileHover="hover"
                  whileTap="tap"
                  variants={buttonVariants}
                  className="border-2 border-gray-200 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-colors duration-200"
                >
                  View Portfolio
                </motion.button>
              </motion.div>
            </motion.div>

            <motion.div variants={imageReveal} className="relative">
              <motion.div
                whileHover={{ rotate: 0, scale: 1.02 }}
                initial={{ rotate: 3 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="aspect-square rounded-3xl overflow-hidden shadow-2xl rotate-3 relative group"
              >
                <motion.img
                  variants={imageReveal}
                  className="w-full h-full object-cover transition-all duration-500"
                  alt="Modern high-end office teamwork meeting representing collaborative growth strategy"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxiXMXjp1ysBRm7A1Hm0XwKPmZet7DVeJ3JW0Ek41K95pdOIKW5LPhLig-6nGahWh4ZpgXDo5lJbpz5ucf5hM6B51f92CALsh7CTTQuT22P4HUZUp4zEn-NuSNFlu6GELXoGm8ONfktMXRGlALzDeCzbQbtPZzLSNnxJwFSa14ntIybU2CgXTyj6djYvN63PFIAHyrEauT49aHbyiSENFc4PWJPJ27Vvg6l5QVQBte8mXT1r6sv7-N3L15UHidj-h-tHrSIiIpOgcJ"
                />
                <div className="absolute inset-0 bg-blue-600/20 mix-blend-multiply"></div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="absolute -bottom-10 -left-10 bg-white p-8 rounded-2xl shadow-xl hidden md:block max-w-[240px]"
              >
                <p className="text-4xl font-black text-blue-600 mb-2">100Cr+</p>
                <p className="text-sm font-semibold text-gray-500">
                  Pioneering sustainable industrial practices, Ananya has over
                  15 years of experience in transforming the agriculture and
                  food processing sectors through technology-driven resource
                  management and eco-friendly manufacturing standards.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Vision & Mission */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={staggerContainer}
        className="py-24 bg-blue-600 text-white"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              variants={cardHover}
              whileHover="hover"
              className="bg-white/10 border border-white/20 p-12 rounded-3xl hover:bg-white/15 transition-colors duration-300"
            >
              <Eye className="text-blue-200 mb-6" size={48} strokeWidth={1.5} />
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-blue-100 text-lg leading-relaxed">
                To be India`s leading venture developer scaling local
                enterprises to global standards. We envision a future where
                Indian SMEs lead global market innovations.
              </p>
            </motion.div>

            <motion.div
              variants={cardHover}
              whileHover="hover"
              className="bg-white/10 border border-white/20 p-12 rounded-3xl hover:bg-white/15 transition-colors duration-300"
            >
              <Target
                className="text-blue-200 mb-6"
                size={48}
                strokeWidth={1.5}
              />
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-blue-100 text-lg leading-relaxed">
                Building ₹100Cr+ enterprises through capital, technology, and
                strategic excellence. Our commitment lies in creating
                sustainable, high-impact growth for every venture we touch.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Leadership Philosophy */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={staggerContainer}
        className="py-24"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-black text-gray-900 mb-6"
            >
              Leadership Philosophy
            </motion.h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto mb-8 rounded-full"></div>
            <motion.p
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
              className="text-gray-600 text-lg"
            >
              Our leadership is anchored in the belief that institutional
              standards and unwavering integrity are the foundations of
              long-term sustainable growth.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            <motion.div
              variants={cardHover}
              whileHover="hover"
              className="text-center group p-4 rounded-xl shadow-2xl"
            >
              <div className="size-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <ShieldCheck size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Integrity First
              </h3>
              <p className="text-gray-600">
                Pioneering sustainable industrial practices, Ananya has over 15
                years of experience in transforming the agriculture and food
                processing sectors through technology-driven resource management
                and eco-friendly manufacturing standards.
              </p>
            </motion.div>

            <motion.div
              variants={cardHover}
              whileHover="hover"
              className="text-center group p-4 rounded-xl shadow-2xl"
            >
              <div className="size-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <Building2 size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Institutional Standards
              </h3>
              <p className="text-gray-600">
                Pioneering sustainable industrial practices, Ananya has over 15
                years of experience in transforming the agriculture and food
                processing sectors through technology-driven resource management
                and eco-friendly manufacturing standards.
              </p>
            </motion.div>

            <motion.div
              variants={cardHover}
              whileHover="hover"
              className="text-center group p-4 rounded-xl shadow-2xl"
            >
              <div className="size-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <TrendingUp size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Sustainable Growth
              </h3>
              <p className="text-gray-600">
                Pioneering sustainable industrial practices,Pradeep kumar has over 15
                years of experience in transforming the agriculture and food
                processing sectors through technology-driven resource management
                and eco-friendly manufacturing standards.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Venture Building Methodology */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={staggerContainer}
        className="py-24 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <motion.div variants={fadeInUp} className="lg:w-1/2">
              <motion.h2
                variants={fadeInUp}
                className="text-4xl font-black text-gray-900 mb-8 leading-tight"
              >
                Our Venture Building <br />
                <span className="text-blue-600">Methodology</span>
              </motion.h2>

              <div className="space-y-10">
                <motion.div variants={fadeInUp} className="flex gap-6 group">
                  <div className="text-blue-600 font-black text-5xl opacity-30 group-hover:opacity-100">
                    01
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      Incubate
                    </h4>
                    <p className="text-gray-600">
                      Identifying high-potential SMEs and providing them with
                      foundational technology and operational frameworks.
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="flex gap-6 group">
                  <div className="text-blue-600 font-black text-5xl opacity-30 group-hover:opacity-100">
                    02
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      Scale
                    </h4>
                    <p className="text-gray-600">
                      Aggressive expansion through strategic marketing, talent
                      acquisition, and market penetration strategies.
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="flex gap-6 group">
                  <div className="text-blue-600 font-black text-5xl opacity-30 group-hover:opacity-100 transition-colors duration-300">
                    03
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      Capitalize
                    </h4>
                    <p className="text-gray-600">
                      Optimizing financial structures and unlocking capital to
                      reach institutional and global investment standards.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div variants={imageReveal} className="lg:w-1/2">
              <div className="relative p-2 bg-gradient-to-tr from-blue-500 to-blue-700 rounded-[2.5rem]">
                <motion.img
                  variants={imageReveal}
                  className="rounded-[2.2rem] w-full object-cover aspect-[4/5] shadow-inner"
                  alt="Professional team discussing growth strategy in modern boardroom"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPHbeb5-fuR9P983SuzX_IPAyGDStxb_pPyspPcwAE2YzltcO910DlEIDuedxzUpEVxuqNSiV5Pwrg3BstLugNsDT5UbkdUPUBjuXqmsle7TOM27JvtgwJvT9uoay3sY2q27EPY9qw5iz9c6pjavCF4Qq4iz-oy4G4dyzEpIVfD1e4gPmHfFi3apoeGPtaLjPphx_mTA_sxe05saukmgyjs1LEndJU3mJhH7Ekndbp04xGYyF5azF6QxuD6fSWhzuLsGMawV0cmH9u"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Founder Spotlight */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={staggerContainer}
        className="py-24 bg-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <motion.div
              variants={imageReveal}
              className="lg:col-span-5 relative"
            >
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"></div>
              <div className="relative rounded-3xl overflow-hidden border-8 border-white shadow-2xl">
                <motion.img
                  variants={imageReveal}
                  alt="Pradeep Kumar, Founder & CEO of Bharatx Ventures"
                  className="w-full aspect-[4/5] object-cover"
                  src="https://aixpertslabs.com/assets/pradeep_kumar-69a6af88.jpeg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-600/95 to-transparent p-8 text-white">
                  <h3 className="text-2xl font-bold">Pradeep Kumar</h3>
                  <p className="text-blue-200 text-sm font-bold uppercase tracking-[0.2em]">
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
                className="inline-flex items-center gap-3"
              >
                <span className="h-px w-12 bg-blue-600"></span>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-[0.3em]">
                  Executive Leadership
                </span>
              </motion.div>

              <motion.h2
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
                className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight"
              >
                Visionary Governance & Strategic Stewardship
              </motion.h2>

              <motion.div
                variants={fadeInUp}
                transition={{ delay: 0.3 }}
                className="relative"
              >
                <Quote className="absolute -top-6 -left-8 text-7xl text-gray-200 -z-10" />
                <p className="text-xl text-gray-600 leading-relaxed italic">
                  Bharatx Ventures was founded on the principle of
                  institutionalizing the Indian SME sector. We don`t just
                  provide capital; we provide the strategic scaffolding required
                  for homegrown businesses to evolve into global titans.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                transition={{ delay: 0.4 }}
                className="flex flex-col gap-2"
              >
                <p className="font-bold text-lg text-gray-900">Pradeep Kumar</p>
                <p className="text-gray-500 text-sm">
                  Pioneering sustainable industrial practices,Pradeep kumar  has over
                  15 years of experience in transforming the agriculture and
                  food processing sectors through technology-driven resource
                  management and eco-friendly manufacturing standards.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                transition={{ delay: 0.5 }}
                className="flex gap-4 mt-4"
              >
                <div className="h-16 w-0.5 bg-blue-600"></div>
                <p className="text-sm text-gray-500 max-w-md leading-relaxed">
                  Pioneering sustainable industrial practices, Ananya has over
                  15 years of experience in transforming the agriculture and
                  food processing sectors through technology-driven resource
                  management and eco-friendly manufacturing standards.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Leadership & Advisory Board */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={staggerContainer}
        className="py-24 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-black text-gray-900 mb-6"
            >
              Our Leadership & Advisory Board
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
              className="text-gray-600 text-lg"
            >
              Our leadership is comprised of seasoned industry veterans,
              strategic consultants, and policy experts committed to scaling
              India`s industrial landscape.
            </motion.p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Pradeep kumar",
                role: "Founder & CEO",
                src: pradeep,
              },
              {
                name: "Kushi kumari",
                role: "Co-Founder & Head of Business Operation",
                src: khushi,
              },
              {
                name: "Vandana Bharti",
                role: "Co-Founder & MD",
                src: vandana,
              },
            ].map((leader, index) => (
              <motion.div
                key={index}
                variants={cardHover}
                whileHover="hover"
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-200"
              >
                <div className="aspect-[4/5] bg-gray-200">
                  <img
                    src={leader.src.src}
                    alt={leader.name}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {leader.name}
                  </h3>
                  <p className="text-blue-600 text-xs font-bold uppercase tracking-wider mb-4">
                    {leader.role}
                  </p>
                  
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Commitment CTA */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeInUp}
        className="py-24"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="bg-blue-600 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 bg-gradient-to-r from-blue-400 via-transparent to-transparent"></div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <motion.h2
                  variants={fadeInUp}
                  transition={{ delay: 0.1 }}
                  className="text-4xl lg:text-5xl font-black text-white mb-8"
                >
                  Commitment to <br />
                  <span className="text-blue-200">SME Growth in India</span>
                </motion.h2>

                <motion.p
                  variants={fadeInUp}
                  transition={{ delay: 0.2 }}
                  className="text-blue-100 text-lg mb-8 leading-relaxed"
                >
                  We are more than just investors; we are builders. Our
                  impact-driven initiatives focus on transforming the landscape
                  of Indian SMEs by providing access to the resources
                  traditionally reserved for large-scale corporations.
                </motion.p>

                <motion.ul
                  variants={staggerContainer}
                  className="space-y-4 mb-10"
                >
                  <motion.li
                    variants={fadeInUp}
                    className="flex items-center gap-3 text-white font-medium"
                  >
                    <CheckCircle2 className="text-blue-200" size={24} />
                    Technological Modernization
                  </motion.li>
                  <motion.li
                    variants={fadeInUp}
                    className="flex items-center gap-3 text-white font-medium"
                  >
                    <CheckCircle2 className="text-blue-200" size={24} />
                    Strategic Talent Pipeline
                  </motion.li>
                  <motion.li
                    variants={fadeInUp}
                    className="flex items-center gap-3 text-white font-medium"
                  >
                    <CheckCircle2 className="text-blue-200" size={24} />
                    Global Market Readiness
                  </motion.li>
                </motion.ul>

                <Link href="/contact-us">
                  <motion.button
                    whileHover="hover"
                    whileTap="tap"
                    variants={buttonVariants}
                    className="bg-white text-blue-700 px-10 py-4 rounded-xl font-black hover:bg-gray-100 transition-colors duration-200 uppercase tracking-wider text-sm"
                  >
                    Join Our Ecosystem
                  </motion.button>
                </Link>
              </div>

              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-2 gap-6"
              >
                {[
                  { value: "50+", label: "SMEs Targeted" },
                  { value: "15+", label: "Expert Advisors" },
                  { value: "10+", label: "States Impacted" },
                  { value: "100%", label: "Local Focus" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20"
                  >
                    <p className="text-4xl font-black text-blue-200 mb-2">
                      {stat.value}
                    </p>
                    <p className="text-blue-100 text-sm font-bold uppercase tracking-tighter">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
