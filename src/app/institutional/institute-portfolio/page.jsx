"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function PortfolioPage() {
  return (
    <main className="bg-white text-gray-900">

      {/* ================= HERO ================= */}
      <section className="py-28 px-6 bg-gradient-to-b from-[#F8F9FA] to-white text-center">
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-6xl font-extrabold text-[#0A3D2E] mb-6"
        >
          Our Portfolio of Impact
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-gray-600 max-w-2xl mx-auto text-lg"
        >
          Scaling ventures across industries through capital, strategy, and
          technology-led execution.
        </motion.p>
      </section>

      {/* ================= FEATURED CASE ================= */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible">
            <h2 className="text-green-600 text-sm font-bold uppercase tracking-widest mb-3">
              Featured Case
            </h2>

            <h3 className="text-3xl md:text-4xl font-bold text-[#0A3D2E] mb-6">
              AI-Driven Manufacturing Optimization
            </h3>

            <p className="text-gray-600 mb-6">
              Implemented predictive maintenance and industrial IoT systems
              leading to 32% reduction in downtime and significant cost savings.
            </p>

            <Link href="/project" className="inline-flex items-center gap-2 text-[#0A3D2E] font-semibold hover:gap-3 transition">
            <button className="flex items-center gap-2 text-[#0A3D2E] font-semibold hover:gap-3 transition">
              View Case Study <ArrowRight />
            </button>
            </Link>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            className="relative"
          >
            <Image
              src="/automation.png"
              alt="case"
              width={600}
              height={400}
              className="rounded-2xl shadow-2xl object-cover w-full h-[420px]"
            />
          </motion.div>

        </div>
      </section>

      {/* ================= PORTFOLIO GRID ================= */}
        <section className="py-24 bg-[#F8F9FA] px-6">
        <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0A3D2E]">
            Venture Portfolio
            </h2>
            <p className="text-gray-500 mt-3">
            Companies and initiatives we have scaled
            </p>
        </div>

        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
            {[
            {
                title: "Agriculture & Food Processing",
                desc: "Transforming agrarian backbones into global powerhouses through modernized value-chains.",
                tag: "",
                highlight: "",
                img: "/agro.png",
            },
            {
                title: "MSMEs",
                desc: "Empowering the engine of the Indian economy by scaling operations into resilient enterprises.",
                tag: "",
                highlight: "",
                img: "/msme.png",
            },
            {
                title: "Manufacturing",
                desc: "Driving industrial excellence through systematic improvements in productivity and quality.",
                tag: "",
                highlight: "",
                img: "/manuf.png",
            },
            {
                title: "Infrastructure",
                desc: "Laying foundations for national growth through expert management of complex developments.",
                tag: "",
                highlight: "",
                img: "/infra.png",
            },
            {
                title: "Technology Startups",
                desc: "Incubating high-growth ventures through mentorship, capital, and strategic access.",
                tag: "",
                highlight: "",
                img: "/tstar.png",
            },
            {
                title: "Industrial Automation",
                desc: "Bridging legacy industry and Industry 4.0 through AI and IoT integration.",
                tag: "",
                highlight: "",
                img: "/indauto.png",
            },
            ].map((item, i) => (
            <motion.div
                key={i}
                variants={fadeInUp}
                className="group relative rounded-2xl overflow-hidden shadow-lg"
            >
                {/* IMAGE */}
                <img
                src={item.img}
                alt={item.title}
                className="w-full h-[340px] object-cover group-hover:scale-110 transition duration-700"
                />

                {/* DARK GRADIENT OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A3D2E]/90 via-[#0A3D2E]/60 to-transparent" />

                {/* CONTENT */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                
                <h3 className="text-xl font-bold mb-2">
                    {item.title}
                </h3>

                <p className="text-sm text-gray-200 mb-3 leading-relaxed">
                    {item.desc}
                </p>

                {item.tag && (
                    <>
                    <p className="text-[11px] tracking-widest text-[#D4AF37] font-bold uppercase mb-1">
                        {item.tag}
                    </p>

                    <p className="text-xs text-gray-300 italic">
                        {item.highlight}
                    </p>
                    </>
                )}
                </div>
            </motion.div>
            ))}
        </motion.div>
        </section>

      {/* ================= IMPACT METRICS ================= */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">

          {[
            { value: "100Cr+", label: "Enterprise Value Created" },
            { value: "50+", label: "Ventures Scaled" },
            { value: "30%", label: "Avg Cost Reduction" },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              className="p-8 border rounded-2xl hover:shadow-xl transition"
            >
              <h3 className="text-3xl font-bold text-[#0A3D2E] mb-2">
                {item.value}
              </h3>
              <p className="text-gray-600">{item.label}</p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-28 bg-[#0A3D2E] text-white text-center px-6">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          className="text-4xl font-bold mb-6"
        >
          Build the Next Industry Leader With Us
        </motion.h2>

        <Link href="/institutional/institute-contact">
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-[#D4AF37] text-black px-8 py-3 rounded-full font-semibold"
        >
          Partner With Us
        </motion.button>
        </Link>
      </section>

    </main>
  );
}