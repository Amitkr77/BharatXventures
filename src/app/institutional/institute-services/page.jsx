"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/* ================= ANIMATIONS ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 80 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

const imageReveal = {
  hidden: { scale: 1.2, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

const stagger = {
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

export default function ServicesPage() {
  const services = [
    /*{
      id: "01",
      title: "SME Growth Capital",
      desc: "Strategic capital partnerships to scale high-potential enterprises.",
      points: [
        "Structured Debt & Equity Financing",
        "Working Capital Optimization",
        "Exit Readiness & M&A Advisory",
      ],
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVvmXkg0OrMVmw3aTggvkuT1Ipe_TepSFnszkfzpMsVILizmM4kXjfy6Lsf557JbCjt3Wcq83xbTek4SvBzwkvcse9RS0YXmYX08QRnQFjQRud-SERb0yrNNYehuT8RiyQc-O0hOopolfFNSEMPJe0HSNhVECaNgTkA9n7YrpRjzE4rK9xz8_r_3iSzUxzZYqo90YKkq6f_S2FD_KjgT8NYEdsTBAuybTYzwE-z11mbVSD3W6qLy86wPSntMc_EmNek_HX9uQ-D-Ul",
    },*/
    {
      id: "01",
      title: "Strategic Consulting",
      desc: "Data-driven frameworks for transformation and operational excellence.",
      points: ["Market Intelligence", "Operational Excellence"],
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4_rgLMOnii1gq3w6hR2bHRgREjUydPpTBjhgVLAchm5k_Xg3j6xMZY7BG1yO7ct_js7iZnG1THiSv1995RPSrizkBcArycFkpAKEHtVOOD-HytKHn-l4y8mswcKmeRSVj-2_3rXbBKSsDrk2vZUzTd0Hjn8SD33oI4wM0EJMOqZkXGgikLSdZT0t86GmHzqm7UrN1xXa6Dsl-nrTeuawMcdRYctI_cTynymJ3GFG2z-INzIUppM5IJerEDFtGG-1WcpZX-MhNAa_N",
    },
    {
      id: "02",
      title: "Venture Development",
      desc: "From concept to commercialization with institutional execution.",
      points: [
        "Feasibility & Site Selection",
        "Governance Frameworks",
        "Go-to-Market Orchestration",
      ],
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCAu1aiCpRbpOtvtQYs1cJ3DfwMlDPoHXxW3wb1lyrhn0cEOlJg31REruDrhtL8m5eHkKjwiGUVPFkhdusawS6kizv7dcE1O8J0YuAVBEzJjUbt0HJkicSROyjVE9bRYZbQgkmxVzGbd5V7mbXsIhOnatAId_vRVgRKge9X_TGZfcSDJmgkOg5cDF_HH9k8L-kw1hIG7mrXngBwbQq0qBv0Vmypy02DRxalmm9tEHVCEtwf6Aqa-PSpCtjR7tfQtEetEUFjTFsMPq9",
    },
    {
      id: "03",
      title: "Agri-Tech Manufacturing",
      desc: "Industrial-scale manufacturing powered by precision engineering.",
      points: ["Yield Optimization", "Mechanized Solutions"],
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuARwC1h8X2Z7ff8uTsuHNoLlLUxNtNCIwfMKlCp5wYLJIl2TAPYgqsc2k9rEC5LSNt8Se5EekBoovt08-TobJ3KPC8ibsY72eFne2uUEhsVvmIVdIWkJNQuW7UcxOLAl9PP6X3efCYd_pEAqUisbK_LD1ra4EYQm1_xeKKvtd7JLWdy__uX0PIgIWUmFFC7oGVWa2mTyOX694DfHjN89M5DzgXcwQ7A1ZbXVBdUE55KklYaWt5QFnpd6Q6SCcPgyrwecooH72UDBFMl",
    },
    {
      id: "04",
      title: "AI Industrial Automation",
      desc: "AI-powered systems for next-generation industrial efficiency.",
      points: [
        "Predictive Logistics",
        "Computer Vision QC",
        "Edge Computing",
        "Robotic Processes",
      ],
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7yGP--6UbPz7G2zjQHjig2LwaV0SZz33ZhCVy3apVBcGAcJyfUYsq4earX46f5F-HcjicZjDyZUgkge6mfjAlklSGR_8AE2-mxMCM-mvNp7y_8l3QNrFkZI5hIlVtjSKGYfia3IhS3uFNqvYRPIg3xM6fmQrsVp9fWsbPt3bN349nabiu9kWa-R6doK2g6H3gRsX0mesGS2MfFyUMOwC0IHGm4dc7m7W73q3FwegieAQjIX0ODKFkae6mYvQU-gYkAcVdrwCRAq-c",
    },
  ];

  return (
    <main className="bg-white text-[#1A3C34] overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-center bg-[#0A192F] overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Image */}
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5nHa1VMoPx4V4_oq7Zbll8BU5m4TSNekw9OwqJJJnC-QPB8g2oKsXIuutcBwIEhW4AZJMRPFWgyDR0J6nnogsNPL2X9UjK8uZpOexQq2w78-0lNLn8Du_Vp_IN9wM-M1GFEYExl4iziCIciJPqBgUbd_deH1UyvE6Psctol1TJlE1HLdoC8z5mR4zQVghqKRTUZnPiuWnkEoAmie1zPTCihzyVvIx5iR-u4pu24pr3O_zbIFxjDv8moRXv4TGxSjWj0P3cXr3eo31"
            className="w-full h-full object-cover scale-105"
          />

          {/* Softer color overlay */}
          <div className="absolute inset-0 bg-green-900/50"></div>

          {/* Subtle gradient for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-900/40 to-green-900/70"></div>
        </div>

        <motion.div initial="hidden" animate="show" variants={fadeUp} className="relative max-w-7xl mx-auto px-6 md:px-10">
          <motion.div
            variants={fadeUp}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-amber-200/20 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-[0.2em] uppercase mb-8"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-85"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400"></span>
            </span>
               Precision. Scale. Impact.
          </motion.div>

          <h1 className="text-5xl md:text-7xl text-white mt-6 leading-tight font-semibold">
            Institutional Excellence for High-Growth Landscapes
          </h1>

          <p className="text-gray-300 mt-6 border-l-2 border-[#C5A059] pl-6 max-w-xl">
            Strategic scaffolding and capital architecture for industrial transformation.
          </p>
        </motion.div>
      </section>

      {/* SERVICES */}
      <section className="py-32 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-40">

          {services.map((s, i) => (
            <motion.div
              key={i}
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-2 gap-16 items-center"
            >
              {i % 2 === 0 ? (
                <>
                  {/* TEXT */}
                  <motion.div variants={fadeUp} className="relative">
                    <span className="absolute -top-10 left-0 text-[100px] font-bold text-gray-200 opacity-20">
                      {s.id}
                    </span>

                    <div className="flex items-center gap-4 mb-6 relative z-10">
                      <span className="text-[#C5A059] font-bold">{s.id}.</span>
                      <div className="w-12 h-[1px] bg-[#C5A059]" />
                    </div>

                    <h2 className="text-3xl md:text-4xl text-green-800 font-semibold mb-6 relative z-10">
                      {s.title}
                    </h2>

                    <p className="text-green-700 mb-6 relative z-10">
                      {s.desc}
                    </p>

                    <ul className="space-y-2 mb-8 text-green-600 relative z-10">
                      {s.points.map((p, idx) => (
                        <li key={idx}>■ {p}</li>
                      ))}
                    </ul>

                    {/*<button className="group flex items-center gap-2 text-sm text-green-500 font-bold uppercase tracking-widest relative z-10">
                      Learn More
                      <ArrowRight className="group-hover:translate-x-2 transition duration-300" />
                    </button>*/}
                  </motion.div>

                  {/* IMAGE */}
                  <motion.div variants={imageReveal} className="group relative overflow-hidden rounded shadow-xl">
                    <img src={s.img} className="w-full h-[420px] object-cover transition duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
                  </motion.div>
                </>
              ) : (
                <>
                  {/* IMAGE */}
                  <motion.div variants={imageReveal} className="group relative overflow-hidden rounded shadow-xl">
                    <img src={s.img} className="w-full h-[420px] object-cover transition duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
                  </motion.div>

                  {/* TEXT */}
                  <motion.div variants={fadeUp} className="relative">
                    <span className="absolute -top-10 left-0 text-[100px] font-bold text-gray-200 opacity-20">
                      {s.id}
                    </span>

                    <div className="flex items-center gap-4 mb-6 relative z-10">
                      <span className="text-[#C5A059] font-bold">{s.id}.</span>
                      <div className="w-12 h-[1px] bg-[#C5A059]" />
                    </div>

                    <h2 className="text-3xl md:text-4xl text-green-800 font-semibold mb-6 relative z-10">
                      {s.title}
                    </h2>

                    <p className="text-green-700 mb-6 relative z-10">
                      {s.desc}
                    </p>

                    <ul className="space-y-2 mb-8 text-green-600 relative z-10">
                      {s.points.map((p, idx) => (
                        <li key={idx}>■ {p}</li>
                      ))}
                    </ul>

                    {/*<button className="group flex items-center gap-2 text-sm text-green-500 font-bold uppercase tracking-widest relative z-10">
                      Learn More
                      <ArrowRight className="group-hover:translate-x-2 transition duration-300" />
                    </button>*/}
                  </motion.div>
                </>
              )}
            </motion.div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-900 py-28 text-center">
        <motion.div initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
          <h2 className="text-4xl md:text-5xl text-white font-semibold mb-6">
            Ready to Scale Your Institutional Impact?
          </h2>

          <p className="text-gray-200 mb-10">
            Speak with our partners regarding capital allocation.
          </p>

          <div className="flex justify-center gap-6 flex-wrap">
            <Link href="/institutional/institute-contact">
            <button className="bg-[#C5A059] text-white px-10 py-4 font-bold uppercase tracking-widest hover:text-gray-800 hover:bg-amber-300 hover:scale-105 transition duration-300">
              Contact Partnership
            </button>
            </Link>

            <Link href="/institutional/institute-about#core-team">
              <button className="border border-white text-white px-10 py-4 font-bold uppercase tracking-widest hover:text-gray-800 hover:bg-amber-300 hover:scale-105 transition duration-300">
                Our Core Members
              </button>
            </Link>
          </div>
        </motion.div>
      </section>

    </main>
  );
}