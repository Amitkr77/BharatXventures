"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  ArrowRight,
  Eye,
  Gavel,
  TrendingUp,
  Settings,
  CheckCircle2,
  FileText,
  Megaphone,
  Users,
  BarChart3,
  Scale,
  Download,
  Handshake,
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

export default function GovernancePage() {
  return (
    <section className="bg-gray-50 text-gray-900 font-sans antialiased min-h-screen">
      <main>
        {/* Hero Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="relative py-20 lg:py-32 overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp} className="z-10">
              <motion.div
                variants={fadeInUp}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 border border-green-100 text-green-700 text-xs font-bold uppercase tracking-wider mb-6"
              >
                <ShieldCheck size={16} />
                Institutional Standards
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
                className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] mb-6"
              >
                Institutional <span className="text-green-600">Governance</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                transition={{ delay: 0.3 }}
                className="text-lg text-gray-600 leading-relaxed mb-10 max-w-xl"
              >
                Our unwavering commitment to transparency, ethical leadership,
                and regulatory excellence at Bharatx Ventures Private Limited
                ensures sustainable growth and stakeholder protection.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <Link href="/framework">
                  <motion.button
                    whileHover="hover"
                    whileTap="tap"
                    variants={buttonVariants}
                    className="bg-green-600 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-green-200/40 transition-all duration-300"
                  >
                    View Framework
                    <ArrowRight size={18} />
                  </motion.button>
                </Link>

                <motion.button
                  whileHover="hover"
                  whileTap="tap"
                  variants={buttonVariants}
                  className="border border-gray-200 bg-white text-gray-700 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all duration-300"
                >
                  Policy Documents
                </motion.button>
              </motion.div>
            </motion.div>

            <motion.div
              variants={imageReveal}
              className="relative lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 bg-green-600/10 mix-blend-multiply"></div>
              <motion.img
                variants={imageReveal}
                alt="Modern high-rise corporate architecture symbolizing institutional stability and trust"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGI9HIs9A9FmTClpQ8aK2aR893UnQ4eGHBgb710J8lQJHxPXSFwhFgYopAvmnvZf3-dbdnBFhb9VzXtUwXlmV0BEHnmANmURm6we4TiVzzQ6g910bvW2jk8yA2knUVGup0anJ1DvCZ5I_CUPX2OcQbfroKGOkz9EkiwiasJ9yGEdoFiNSjLSnOTqLwrp93QtHGNIC-FCyrdQzdR-lXuz53ap2_KudRtVej1vrNuNgwPeMfCPK9cjaSk7DA6kEfSwvpscjyI8zVZGpl"
              />
            </motion.div>
          </div>

          <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-100 -z-10 translate-x-1/4 skew-x-12"></div>
        </motion.section>

        {/* Statutory Information Bar */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-white border-y border-gray-200 py-8"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                variants={fadeInUp}
                className="flex flex-col border-l-4 border-amber-500 pl-4"
              >
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                  Company Name
                </span>
                <p className="text-sm font-semibold text-green-600">
                  Bharatx Ventures Private Limited
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col border-l-4 border-amber-500 pl-4"
              >
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                  CIN
                </span>
                <p className="text-sm font-semibold text-green-600">
                  U01139BR2026PTC083018
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col border-l-4 border-amber-500 pl-4"
              >
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                  PAN
                </span>
                <p className="text-sm font-semibold text-green-600">
                  AAOCB4970H
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Core Governance Principles */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={staggerContainer}
          className="py-24 bg-gray-50"
        >
          <div className="max-w-7xl mx-auto px-6">
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <motion.h2
                variants={fadeInUp}
                className="text-3xl font-bold text-gray-900 mb-4"
              >
                Core Governance Principles
              </motion.h2>
              <div className="h-1 w-20 bg-amber-500 mx-auto rounded-full"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                variants={cardHover}
                whileHover="hover"
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="size-12 rounded-xl bg-blue-50 flex items-center justify-center text-green-600 mb-6">
                  <Eye size={28} strokeWidth={1.6} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Transparency
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Open reporting mechanisms and clear communication channels
                  with all institutional stakeholders.
                </p>
              </motion.div>

              <motion.div
                variants={cardHover}
                whileHover="hover"
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="size-12 rounded-xl bg-green-50 flex items-center justify-center text-green-600 mb-6">
                  <Gavel size={28} strokeWidth={1.6} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Ethical Leadership
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Guided by unwavering integrity and high standards of
                  professional accountability in all ventures.
                </p>
              </motion.div>

              <motion.div
                variants={cardHover}
                whileHover="hover"
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="size-12 rounded-xl bg-green-50 flex items-center justify-center text-green-600 mb-6">
                  <TrendingUp size={28} strokeWidth={1.6} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Strategic Oversight
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  A long-term vision focused on value creation through rigorous
                  board-level supervision.
                </p>
              </motion.div>

              <motion.div
                variants={cardHover}
                whileHover="hover"
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="size-12 rounded-xl bg-green-50 flex items-center justify-center text-green-600 mb-6">
                  <Settings size={28} strokeWidth={1.6} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Risk Management
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Proactive identification, assessment, and mitigation of
                  institutional and market risks.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Corporate Compliance Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={staggerContainer}
          className="py-24 bg-white"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <motion.div variants={fadeInUp} className="lg:w-1/2">
                <motion.h2
                  variants={fadeInUp}
                  transition={{ delay: 0.1 }}
                  className="text-3xl font-bold text-gray-900 mb-6"
                >
                  Corporate Compliance Framework
                </motion.h2>
                <motion.p
                  variants={fadeInUp}
                  transition={{ delay: 0.2 }}
                  className="text-gray-600 mb-8 text-lg"
                >
                  Bharatx Ventures adheres to the highest levels of statutory
                  compliance as per the Indian Companies Act and relevant
                  regulatory bodies. Our framework ensures timely filings and
                  adherence to SEBI guidelines where applicable.
                </motion.p>

                <motion.div variants={staggerContainer} className="space-y-4">
                  <motion.div
                    variants={cardHover}
                    whileHover="hover"
                    className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100"
                  >
                    <CheckCircle2 className="text-amber-500 mt-1" size={20} />
                    <div>
                      <h4 className="font-bold text-gray-900">
                        Statutory Filings
                      </h4>
                      <p className="text-sm text-gray-600">
                        Regular submission of annual returns, financial
                        statements, and compliance certificates.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={cardHover}
                    whileHover="hover"
                    className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100"
                  >
                    <CheckCircle2 className="text-amber-500 mt-1" size={20} />
                    <div>
                      <h4 className="font-bold text-gray-900">
                        Regulatory Standards
                      </h4>
                      <p className="text-sm text-gray-600">
                        Alignment with MCA and SEBI guidelines to maintain
                        institutional integrity.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={cardHover}
                    whileHover="hover"
                    className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100"
                  >
                    <CheckCircle2 className="text-amber-500 mt-1" size={20} />
                    <div>
                      <h4 className="font-bold text-gray-900">
                        Auditing Excellence
                      </h4>
                      <p className="text-sm text-gray-600">
                        Rigorous internal and external audits by reputed
                        statutory firms.
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                className="lg:w-1/2 grid grid-cols-2 gap-4"
              >
                <motion.div
                  variants={fadeInUp}
                  className="bg-green-50 rounded-2xl p-6 flex flex-col items-center justify-center text-center aspect-square"
                >
                  <FileText className="text-green-600 mb-4" size={36} />
                  <span className="text-sm font-bold text-gray-800">
                    MCA Compliance
                  </span>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="bg-amber-50 rounded-2xl p-6 flex flex-col items-center justify-center text-center aspect-square"
                >
                  <Scale className="text-amber-600 mb-4" size={36} />
                  <span className="text-sm font-bold text-gray-800">
                    Legal Audit
                  </span>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="bg-amber-50 rounded-2xl p-6 flex flex-col items-center justify-center text-center aspect-square"
                >
                  <Users className="text-amber-600 mb-4" size={36} />
                  <span className="text-sm font-bold text-gray-800">
                    Board Filings
                  </span>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="bg-green-50 rounded-2xl p-6 flex flex-col items-center justify-center text-center aspect-square"
                >
                  <ShieldCheck className="text-green-600 mb-4" size={36} />
                  <span className="text-sm font-bold text-gray-800">
                    Data Protection
                  </span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Investor & Partner Trust */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="py-24 bg-green-600 text-white"
        >
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div variants={fadeInUp} transition={{ delay: 0.1 }}>
              <Handshake
                className="text-amber-400 mb-6 mx-auto"
                size={64}
                strokeWidth={1.2}
              />
              <h2 className="text-4xl font-bold mb-6">
                Investor & Partner Trust
              </h2>
              <p className="text-lg text-green-100 opacity-90 leading-relaxed mb-10">
                Our governance standards are designed to protect the interests
                of our stakeholders. By implementing rigorous oversight and
                ethical frameworks, we ensure that Bharatx Ventures remains a
                trusted partner for institutional investors and global
                collaborators.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="flex flex-wrap justify-center gap-12 text-sm font-semibold tracking-widest uppercase opacity-90"
            >
              <motion.div variants={fadeInUp} className="flex flex-col gap-2">
                <span className="text-3xl text-amber-400">100%</span>
                Compliance Record
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-col gap-2">
                <span className="text-3xl text-amber-400">Zero</span>
                Material Defaults
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-col gap-2">
                <span className="text-3xl text-amber-400">Board</span>
                Driven Oversight
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Policy Framework / Compliance Downloads */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={staggerContainer}
          className="py-24 bg-white"
        >
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              variants={fadeInUp}
              className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"
            >
              <div>
                <motion.h2
                  variants={fadeInUp}
                  className="text-3xl font-bold text-gray-900 mb-4"
                >
                  Policy Framework
                </motion.h2>
                <motion.p
                  variants={fadeInUp}
                  transition={{ delay: 0.1 }}
                  className="text-gray-600"
                >
                  Access our fundamental policy documents and governing
                  charters.
                </motion.p>
              </div>

              <motion.button
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
                className="text-green-600 font-bold flex items-center gap-2 group hover:text-green-800 transition-colors"
              >
                View All Archives
                <ArrowRight
                  className="group-hover:translate-x-1 transition-transform"
                  size={18}
                />
              </motion.button>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {[
                { icon: FileText, title: "Code of Conduct" },
                { icon: Megaphone, title: "Whistleblower Policy" },
                { icon: Users, title: "Board Charters" },
                { icon: BarChart3, title: "Risk Policy" },
                { icon: Scale, title: "CSR Policy" },
                { icon: FileText, title: "Statutory Reports" },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  variants={cardHover}
                  whileHover="hover"
                  className="group flex items-center justify-between p-6 bg-gray-50 rounded-xl hover:bg-green-600 hover:text-white transition-all duration-300"
                  href="#"
                >
                  <div className="flex items-center gap-4">
                    <item.icon
                      className="text-gray-500 group-hover:text-white"
                      size={24}
                    />
                    <span className="font-bold text-gray-800 group-hover:text-white">
                      {item.title}
                    </span>
                  </div>
                  <Download
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                    size={20}
                  />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.section>
      </main>
    </section>
  );
}
