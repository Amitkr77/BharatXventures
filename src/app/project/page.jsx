"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Globe,
  Bolt,
  ArrowRight,
  Briefcase,
  Scale,
  Share2,
  Twitter,
  Linkedin,
  Mail,
  ArrowUp,
} from "lucide-react";
import Head from "next/head";
import Link from "next/link";

// Animation variants (unchanged)
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const scaleHover = {
  rest: { scale: 1 },
  hover: { scale: 1.04, transition: { duration: 0.4 } },
};

export default function FeaturedInitiativesPage() {
  // useEffect(() => {
  //   const handleScroll = () => {
  //     setShowBackToTop(window.scrollY > 400);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // const scrollToTop = () => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };

  const caseStudies = [
    {
      category: "SME Growth",
      title: "Scaling a Regional Manufacturer to ₹100Cr+",
      challenge:
        "Fragmented supply chains, limited institutional capital access, and sub-optimal production capacity limiting regional presence.",
      approach:
        "Implemented institutional credit frameworks, standardized quality controls, and deployed a modern digital ERP system for real-time tracking.",
      impact: [
        { value: "400%", label: "Revenue Growth" },
        { value: "₹100Cr+", label: "Annual Valuation" },
      ],
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBZDgiZCe2ukmXapiMJUfFnIOYPi43QYSUm71VIvKZe_yCuQ-Zl9MVaccY5ni8rZ-jO0F-dfwNXDcI8TGVHQeWRPOpteO-rAVvqrCKmG_50ni3xdnlwBy6WEEb1MXFL_z_2hPK92nRKszKw9KYZuYcpB_G-7VaS-6715LI6CU0WHLKTFO92E5OYIH1xlK2k4EDqJF3CWohQSLr9XrjyOuzawHJDJZqHXahAXiqYCvgSPn1FCFyiFW4O0Jo0DzlpW3Der_1DWL0Ij_Ns",
      metricsSource: "Internal performance audit 2024–2025",
    },
    {
      category: "Industrial AI",
      title: "AI-Driven Production Optimization",
      challenge:
        "Large-scale plant suffering from 12% annual downtime and significant energy inefficiencies in the cooling cycle.",
      approach:
        "Deployment of IoT sensors coupled with predictive maintenance AI models to preemptively identify component failure.",
      impact: [
        { value: "35%", label: "Efficiency Increase" },
        { value: "85%", label: "Reduction in Downtime" },
      ],
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCH0sXw9HA9bojFDSJVT6yyG3oOKdzbAFrV2mMhBYZBOn1hSv1hEIczQCtDa8y5ux9w4Ll-SPwl6YMHk2l4J0fm2y0YOiQQMgCDTB7RrLg3PEfp8g-zv5e0M3kE0PqG73o269MuCjdIrjeSWl5o49kJl1i2ZH8wssA40BIDPY1s5CSUaBFB879EHpxG3rn4U9h8WClwliDEe6czQHb4_RJ4-_TQuVQIJpAIrC1UAL5M0ftsGElPwc9ttq15ev07YRc_BKwwZcg8SwwI",
      metricsSource: "Client plant performance dashboard 2025",
    },
    {
      category: "Agri-Value Chain",
      title: "Export-Grade Organic Value Chain",
      challenge:
        "Smallholder farmers unable to meet international phytosanitary standards, leading to 40% post-harvest losses.",
      approach:
        "Established integrated cold-chain logistics and certification hubs for organic produce compliant with EU/US standards.",
      impact: [
        { value: "2.5x", label: "Farmer Income Increase" },
        { value: "15+", label: "Export Markets Opened" },
      ],
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBUcTzX9V46007GOtMZ2IvgGzB4CgL0_QsA_uSr8qHLkTanRgM52IOTm8d1nyhHanfvWZtIPlCHV3nLeeJute9iZFS8rCGWCM4NckDO_jHV1i2IIJQGQtFDiG0zezjWkZuYnx_1x-a62WHKau6-xhqc1eMUHJO_jP4GZlokbNs_JnhkQoqSImRFG1OtWs_yh7HnJp5HgM4Vi32NrR67ESjVnlkCq_GX1EwAMW5ugeMHbBLxGQL-DbGRz3J_nIVi0-87zTd_27QG2Ags",
      metricsSource: "Third-party impact assessment 2025",
    },
  ];

  return (
    <>
      {/* SEO Meta Tags (add to layout or _document if using pages router) */}
      {/* For App Router, place this in layout.tsx or page metadata export */}
      {/**/}
      <Head>
        <title>Featured Initiatives | Bharatx Ventures</title>
        <meta
          name="description"
          content="Showcasing high-impact projects and measurable results across SME growth, industrial AI, and agri-value chains."
        />
        <meta
          name="keywords"
          content="Bharatx Ventures, SME growth, industrial AI, agri-tech export, institutional impact"
        />
        <meta
          property="og:title"
          content="Featured Initiatives - Bharatx Ventures"
        />
        <meta
          property="og:description"
          content="Driving measurable impact and sustainable growth across India's industrial landscape."
        />
        <meta property="og:image" content="/og-featured.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <section className="bg-gray-50 text-gray-900">
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative py-20 overflow-hidden bg-blue-900">
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(#C5A059 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="max-w-3xl"
              >
                <span className="inline-block py-1.5 px-4 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest mb-4">
                  Strategic Impact
                </span>

                <h1 className="text-white text-5xl md:text-6xl font-black mb-6 leading-[1.1]">
                  Featured Initiatives
                </h1>

                <p className="text-gray-200 text-lg md:text-xl leading-relaxed">
                  Driving measurable impact and sustainable growth across
                  India diverse industrial landscape through strategic
                  intervention, institutional capital, and technological
                  excellence.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Filter Tabs (static for now - add filtering logic here later) */}
          {/* <div className="bg-white border-b border-gray-200 sticky top-0 z-20">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex overflow-x-auto gap-8 no-scrollbar py-2">
                <button className="py-6 border-b-2 border-blue-600 text-blue-600 font-bold text-sm whitespace-nowrap">
                  All Projects
                </button>
                <button className="py-6 border-b-2 border-transparent text-gray-500 font-bold text-sm whitespace-nowrap hover:text-blue-600 transition-colors">
                  SME Growth
                </button>
                <button className="py-6 border-b-2 border-transparent text-gray-500 font-bold text-sm whitespace-nowrap hover:text-blue-600 transition-colors">
                  Industrial AI
                </button>
                <button className="py-6 border-b-2 border-transparent text-gray-500 font-bold text-sm whitespace-nowrap hover:text-blue-600 transition-colors">
                  Agri-Value Chain
                </button>
                <button className="py-6 border-b-2 border-transparent text-gray-500 font-bold text-sm whitespace-nowrap hover:text-blue-600 transition-colors">
                  Infrastructure
                </button>
              </div>
            </div>
          </div> */}

          <div className="max-w-7xl mx-auto px-4 py-6 text-center mt-8">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Our Featured Projects
            </h2>
          </div>

          {/* Case Study Grid */}
          <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col gap-24"
            >
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="grid lg:grid-cols-2 gap-12 items-center"
                >
                  {/* Image */}
                  <motion.div
                    variants={scaleHover}
                    whileHover="hover"
                    className="relative rounded-2xl overflow-hidden shadow-2xl group aspect-[4/3]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 to-transparent z-10" />
                    <img
                      alt={`${study.title} - Bharatx Ventures project showcase`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      src={study.image}
                    />
                  </motion.div>

                  {/* Content */}
                  <div className="flex flex-col gap-6">
                    <span className="text-amber-500 font-bold tracking-widest text-sm uppercase">
                      {study.category}
                    </span>

                    <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                      {study.title}
                    </h2>

                    <div className="space-y-6">
                      <div className="border-l-4 border-amber-500 pl-6">
                        <h4 className="font-bold text-gray-900">
                          The Challenge
                        </h4>
                        <p className="text-gray-600 mt-1">{study.challenge}</p>
                      </div>

                      <div className="border-l-4 border-amber-500 pl-6">
                        <h4 className="font-bold text-gray-900">
                          Our Strategic Approach
                        </h4>
                        <p className="text-gray-600 mt-1">{study.approach}</p>
                      </div>

                      <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                        <h4 className="font-bold text-blue-700 mb-3 flex items-center gap-2">
                          <TrendingUp size={20} />
                          The Impact
                        </h4>
                        <div className="grid grid-cols-2 gap-4">
                          {study.impact.map((item, i) => (
                            <div key={i}>
                              <p className="text-3xl font-black text-blue-700">
                                {item.value}
                              </p>
                              <p className="text-xs text-gray-600 uppercase font-bold tracking-tight">
                                {item.label}
                              </p>
                            </div>
                          ))}
                        </div>
                        <p className="text-xs text-gray-500 mt-4 italic">
                          Source: {study.metricsSource}
                        </p>
                      </div>
                    </div>

                    {/* Share Icons */}
                    <div className="flex gap-4 mt-4">
                      <button
                        type="button"
                        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                        aria-label="Share on X"
                      >
                        <Twitter size={18} />
                      </button>
                      <button
                        type="button"
                        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                        aria-label="Share on LinkedIn"
                      >
                        <Linkedin size={18} />
                      </button>
                      <button
                        type="button"
                        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                        aria-label="Share via Email"
                      >
                        <Mail size={18} />
                      </button>
                      <button
                        type="button"
                        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors ml-auto"
                        aria-label="Print this case study"
                      >
                        <Share2 size={18} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Call to Action */}
          <section className="py-24 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-black text-gray-900 mb-6"
              >
                Ready to write your success story?
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-gray-600 mb-10 leading-relaxed"
              >
                Partner with Bharatx Ventures to transform your industrial
                vision into a scalable, high-impact reality.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Link href="/contact-us">
                  <button
                    type="button"
                    onClick={() =>
                      document
                        .getElementById("contact-form")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="w-full sm:w-auto bg-blue-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg"
                  >
                    Start Your Partnership
                  </button>
                </Link>

                <button
                  type="button"
                  onClick={() =>
                    (window.location.href =
                      "mailto:hello@bharatx.vc?subject=Request%20Case%20Study%20Details")
                  }
                  className="w-full sm:w-auto border-2 border-blue-600 text-blue-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all duration-300"
                >
                  Request Case Detail
                </button>
              </motion.div>
            </div>
          </section>
        </main>
      </section>
    </>
  );
}
