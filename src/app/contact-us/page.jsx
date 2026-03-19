"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  ArrowRight,
  Pin,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

// Animation Variants (consistent with your other pages)
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

export default function ContactPage() {
  return (
    <section className="bg-gray-50 text-gray-900 min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="relative bg-white pt-16 pb-24 overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-1/3 h-full bg-green-50 -skew-x-12 translate-x-1/2"></div>

          <div className="max-w-7xl mx-auto px-6 lg:px-20 relative z-10">
            <motion.div variants={fadeInUp} className="max-w-3xl">
              <motion.span
                variants={fadeInUp}
                transition={{ delay: 0.1 }}
                className="inline-block px-4 py-1.5 bg-green-50 text-green-700 text-xs font-bold uppercase tracking-widest rounded-full mb-6"
              >
                Connect with us
              </motion.span>

              <motion.h1
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
                className="text-5xl lg:text-7xl font-black text-gray-900 leading-tight tracking-tight mb-8"
              >
                Get in <span className="text-green-600 italic">Touch</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                transition={{ delay: 0.3 }}
                className="text-lg text-gray-600 leading-relaxed mb-10"
              >
                Partner with Bharatx Ventures to drive institutional innovation.
                We welcome strategic inquiries regarding private equity,
                corporate partnerships, and venture capital opportunities in the
                emerging Bharat landscape.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <motion.a
                  whileHover="hover"
                  whileTap="tap"
                  variants={buttonVariants}
                  className="bg-green-600 text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl hover:shadow-green-200/40 hover:-translate-y-0.5 transition-all duration-300"
                  href="#contact-form"
                >
                  Submit Inquiry
                </motion.a>

                <motion.a
                  whileHover="hover"
                  whileTap="tap"
                  variants={buttonVariants}
                  className="border border-gray-200 bg-white text-gray-700 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all duration-300"
                  href="#office-locations"
                >
                  Office Locations
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Contact Grid */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={staggerContainer}
          className="py-20 bg-gray-50"
          id="office-locations"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Registered Office */}
              <motion.div
                variants={cardHover}
                whileHover="hover"
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-6 group hover:border-green-400/50 transition-colors duration-300"
              >
                <div className="size-14 rounded-xl bg-green-50 text-green-600 flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                  <MapPin size={28} strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Registered Office
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    H. No. 136, Beladih, Cherki Bazar,
                    <br />
                    Gaya, Bihar – 824237, India
                  </p>
                </div>
                <motion.a
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.3 }}
                  className="mt-auto text-green-600 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all duration-200"
                  href="#"
                >
                  View on Map
                  <ArrowRight size={16} />
                </motion.a>
              </motion.div>

              {/* Institutional Inquiries */}
              <motion.div
                variants={cardHover}
                whileHover="hover"
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-6 group hover:border-green-400/50 transition-colors duration-300"
              >
                <div className="size-14 rounded-xl bg-green-50 text-green-600 flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                  <Mail size={28} strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Institutional Inquiries
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    For general queries and partnerships:
                  </p>
                  <p className="text-green-600 font-bold mt-2">
                    hello@bharatx.vc
                  </p>
                </div>
                <motion.a
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.3 }}
                  className="mt-auto text-green-600 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all duration-200"
                  href="mailto:hello@bharatx.vc"
                >
                  Send Email
                  <ArrowRight size={16} />
                </motion.a>
              </motion.div>

              {/* Corporate Support */}
              <motion.div
                variants={cardHover}
                whileHover="hover"
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-6 group hover:border-green-400/50 transition-colors duration-300"
              >
                <div className="size-14 rounded-xl bg-green-50 text-green-600 flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                  <Phone size={28} strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Corporate Support
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Available Mon-Fri, 9:00 AM - 6:00 PM IST:
                  </p>
                  <p className="text-green-600 font-bold mt-2">
                    +91 22 4567 8900
                  </p>
                </div>
                <motion.a
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.3 }}
                  className="mt-auto text-green-600 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all duration-200"
                  href="tel:+912245678900"
                >
                  Call Now
                  <ArrowRight size={16} />
                </motion.a>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Form & Map Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={staggerContainer}
          className="py-24 bg-white"
          id="contact-form"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-20">
            <div className="flex flex-col lg:flex-row gap-16">
              {/* Contact Form */}
              <motion.div variants={fadeInUp} className="lg:w-1/2">
                <motion.h2
                  variants={fadeInUp}
                  className="text-3xl font-black text-gray-900 mb-2"
                >
                  Send a Message
                </motion.h2>
                <motion.p
                  variants={fadeInUp}
                  transition={{ delay: 0.1 }}
                  className="text-gray-600 mb-10"
                >
                  Complete the form below and our strategic partnership team
                  will contact you within 24-48 business hours.
                </motion.p>

                <form
                  action="#"
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="fullName"
                      className="text-xs font-bold text-gray-700 uppercase tracking-wider"
                    >
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition-all duration-200"
                      placeholder="John Doe"
                      type="text"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="organization"
                      className="text-xs font-bold text-gray-700 uppercase tracking-wider"
                    >
                      Organization
                    </label>
                    <input
                      id="organization"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition-all duration-200"
                      placeholder="Company Name"
                      type="text"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="email"
                      className="text-xs font-bold text-gray-700 uppercase tracking-wider"
                    >
                      Official Email
                    </label>
                    <input
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition-all duration-200"
                      placeholder="john@company.com"
                      type="email"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="phone"
                      className="text-xs font-bold text-gray-700 uppercase tracking-wider"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition-all duration-200"
                      placeholder="+91 00000 00000"
                      type="tel"
                    />
                  </div>

                  <div className="flex flex-col gap-2 md:col-span-2">
                    <label
                      htmlFor="message"
                      className="text-xs font-bold text-gray-700 uppercase tracking-wider"
                    >
                      Brief Message
                    </label>
                    <textarea
                      id="message"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition-all duration-200 resize-none"
                      placeholder="How can we collaborate?"
                      rows={4}
                    />
                  </div>

                  <div className="md:col-span-2">
                    <motion.button
                      whileHover="hover"
                      whileTap="tap"
                      variants={buttonVariants}
                      type="submit"
                      className="w-full md:w-auto px-10 py-4 bg-green-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-green-200/40 hover:bg-green-700 transition-all duration-300"
                    >
                      Submit Institutional Inquiry
                    </motion.button>
                  </div>
                </form>
              </motion.div>

              {/* Map & Trust Note */}
              <motion.div
                variants={fadeInUp}
                className="lg:w-1/2 flex flex-col gap-6"
              >
                <motion.div
                  variants={imageReveal}
                  className="h-full min-h-[400px] w-full bg-gray-100 rounded-2xl overflow-hidden relative border border-gray-200"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-all duration-700"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDafdwKL6Jy0ARmryrqOn3zJv3Ey1Wx5T3bAXG4nnW6zTdgMHjY9p_fIyGMxJ_SsRAiuBN-mwBLpWiohTiuGfRvMGESyfkbweGLmv8Ukulw-Ag0S4cpsAPzA7pi-bP6Ly-pIZX7u7CsRHwRgx6nc3b7rUoLGzv7X9WcMyW5IM4J6xH5uKZZo9VDXahmVCsEcsKw3LVVXflZB4FIu3T8Az5aJjlKPcX1oWCatUckz0tb0PdYlKtq7UwUFHrsFNs2u3YRWhK12QPGgSZ8')",
                    }}
                  />

                  <motion.div
                    variants={fadeInUp}
                    transition={{ delay: 0.3 }}
                    className="absolute bottom-6 left-6 right-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4 border-l-4 border-green-500"
                  >
                    <Pin className="text-green-600" size={20} />
                    <div>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-tighter">
                        Office Location
                      </p>
                      <p className="text-sm font-bold text-gray-900">
                        Cherki Bazar, Gaya, Bihar
                      </p>
                    </div>
                  </motion.div>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  transition={{ delay: 0.4 }}
                  className="bg-green-50 p-6 rounded-xl border border-green-100"
                >
                  <h4 className="text-green-700 font-bold mb-2 flex items-center gap-2">
                    <ShieldCheck size={18} />
                    Compliance & Trust
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Bharatx Ventures operates with the highest standards of
                    corporate governance. All inquiries are subject to our
                    regulatory compliance protocols.
                  </p>
                  <Link href="/governance">
                    <motion.span
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.3 }}
                      className="text-green-600 text-xs font-bold mt-3 inline-block hover:underline"
                    >
                      View Governance Highlights →
                    </motion.span>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </main>
    </section>
  );
}
