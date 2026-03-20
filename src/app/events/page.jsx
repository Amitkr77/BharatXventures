"use client";

import { React, useState } from "react";
import{ Share2,Mail } from "lucide-react";

const filters = ["All Content","SME Growth","Industrial AI","Agri-Tech","FinTech"];

const cardsData = [
  {
    img: "card1.jpg",
    tag: "Industrial AI",
    title: "Optimizing Supply Chains with Deep Learning",
    time: "45:20",
  },
  {
    img: "card2.jpg",
    tag: "Agri-Tech",
    title: "Sustainable Farming: The IoT Revolution",
    time: "32:15",
  },
  {
    img: "card3.jpg",
    tag: "SME Growth",
    title: "Micro-Financing Strategies for 2024",
    time: "58:40",
  },
];
export default function EventsPage() {
    const [activeFilter, setActiveFilter] = useState("All Content");

    const filteredCards =
    activeFilter === "All Content"
      ? cardsData
      : cardsData.filter((card) => card.tag === activeFilter);
  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-white">

      {/* HERO */}
      <section className="relative h-[520px] flex items-center justify-center overflow-hidden">

        <img
          src="/hero.webp"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-green-600/40"></div>

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-green-600/10 via-green-500/60 to-transparent"></div>

        <div className="relative z-20 text-center max-w-4xl px-6">
          <span className="inline-block px-4 py-1.5 mb-5 rounded-full bg-accent/20 border border-accent/40 text-accent text-xs font-bold tracking-widest uppercase">
            Global Network
          </span>

          <h1 className="text-white text-5xl md:text-7xl font-black mb-6 tracking-tight">
            Events & Insights
          </h1>

          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Sharing strategic knowledge and driving innovation across the industrial ecosystem through curated thought leadership.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-green-400 hover:bg-green-900 text-white px-8 py-4 rounded-xl font-bold">
              View Upcoming
            </button>

            <button className="bg-white/10 backdrop-blur text-white border border-white/30 px-8 py-4 rounded-xl font-bold hover:bg-white/20">
              Explore Archive
            </button>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-20 py-16">

        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-extrabold text-green-600 dark:text-white flex items-center gap-2">
            Featured Upcoming Webinar
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
          </h2>

          <span className="text-sm font-bold text-green-600 cursor-pointer">
            View All →
          </span>
        </div>

        <div className="flex flex-col lg:flex-row bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-xl border border-slate-100">

          {/* LEFT IMAGE */}
          <div className="lg:w-1/2 relative">
            <span className="absolute top-4 left-4 bg-green-600 text-white px-4 py-1 rounded-lg text-xs font-bold uppercase">
              Live Workshop
            </span>

            <img
              src="/hero.png"
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT */}
          <div className="lg:w-1/2 p-10 flex flex-col justify-center">

            <div className="flex items-center gap-4 mb-4 text-accent text-sm font-bold">
              <span>Oct 24, 2023 • 4:00 PM IST</span>
              <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
              <span>ONLINE EVENT</span>
            </div>

            <h3 className="text-3xl font-black mb-4">
              The Future of Industrial AI: Scaling Beyond Pilot
            </h3>

            <p className="text-slate-500 mb-8">
              Join us for an exclusive session on integrating AI into core manufacturing processes. Learn how top industrial giants are transitioning from prototypes to full-scale AI deployment.
            </p>

            {/* Speaker */}
            <div className="flex items-center gap-4 mb-8">
              <img
                src="/images/speaker.jpg"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-bold">Dr. Arpan Ghosh</p>
                <p className="text-sm text-slate-500">
                  Chief AI Officer, Bharatx Ventures
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="bg-green-600 text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg">
                Register Now
              </button>

              <button className="bg-green-100 p-4 rounded-xl">
                <Share2 size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ON DEMAND */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-20 pb-20">

        <h2 className="text-3xl font-extrabold text-green-600 mb-6">
          On-Demand Webinars
        </h2>

         {/* FILTERS */}
        <div className="flex gap-2 mb-10 flex-wrap">
            {filters.map((f, i) => (
            <button
                key={i}
                onClick={() => setActiveFilter(f)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                activeFilter === f
                    ? "bg-green-600 text-white"
                    : "bg-white border text-slate-600 hover:bg-green-600 hover:text-white"
                }`}
            >
                {f}
            </button>
            ))}
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCards.map((c, i) => (
            <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            >
                <div className="relative">
                <img
                    src={`/images/${c.img}`}
                    className="w-full h-48 object-cover"
                />
                <span className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                    {c.time}
                </span>
                </div>

                <div className="p-6">
                <p className="text-xs text-accent font-bold uppercase">
                    {c.tag}
                </p>

                <h4 className="text-lg font-bold mt-2 mb-2">
                    {c.title}
                </h4>

                <p className="text-sm text-slate-500 mb-4">
                    Explore the latest breakthroughs in predictive logistics and automation.
                </p>

                <span className="text-green-600 font-bold text-sm cursor-pointer">
                    WATCH NOW →
                </span>
                </div>
            </div>
            ))}
        </div>

        {/* EMPTY STATE (optional but pro) */}
        {filteredCards.length === 0 && (
            <p className="text-center text-slate-500 mt-10">
            No webinars found.
            </p>
        )}
      </section>
      {/* ================= PHYSICAL EVENTS ================= */}
        <section className="max-w-[1280px] mx-auto px-6 lg:px-20 pb-20">
        <div className="bg-green-900 rounded-[3rem] p-8 lg:p-16 text-white relative overflow-hidden">

            {/* Glow Effects */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-green-600/20 rounded-full blur-[100px]"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber/10 rounded-full blur-[100px]"></div>

            {/* Header */}
            <div className="relative z-10 flex flex-col lg:flex-row items-end justify-between mb-12 gap-6">
            <div className="max-w-xl">
                <h2 className="text-4xl font-black mb-4">
                Physical Events & Summits
                </h2>
                <p className="text-slate-300 text-lg">
                Experience thought leadership in person. We host flagship summits that bring together industry titans and innovators.
                </p>
            </div>

            <button className="bg-accent text-slate-900 px-8 py-3 rounded-xl font-bold hover:bg-white transition-all shadow-lg">
                Past Events Archive
            </button>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">

            {/* CARD 1 */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-sm p-8 rounded-3xl group hover:border-amber/40 transition-all transfrorm hover:scale-[1.02]">

                <div className="flex justify-between items-start mb-6">
                <div className="bg-amber/20 text-amber px-3 py-1 rounded text-xs font-bold uppercase">
                    Upcoming
                </div>
                <span className="text-amber text-xl">✦</span>
                </div>

                <h3 className="text-2xl font-bold mb-2">
                Bharatx Industrial Summit 2024
                </h3>

                <div className="flex items-center gap-4 text-slate-400 mb-6 text-sm">
                <span>📍 Mumbai, India</span>
                <span>📅 Dec 12-14</span>
                </div>

                <p className="text-slate-400 mb-8">
                {`The flagship event focusing on 'India at 100' and the role of MSMEs in global supply chains.`}
                </p>

                <button className="w-full border border-white/20 py-3 rounded-xl font-bold group-hover:bg-white group-hover:text-slate-900 transition-all">
                Get Invitation
                </button>
            </div>

            {/* CARD 2 */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-sm p-8 rounded-3xl group hover:border-blue-400/40 transition-all transfrorm hover:scale-[1.02]">

                <div className="flex justify-between items-start mb-6">
                <div className="bg-blue-400/20 text-blue-400 px-3 py-1 rounded text-xs font-bold uppercase">
                    Future
                </div>
                <span className="text-blue-400 text-xl">⚙️</span>
                </div>

                <h3 className="text-2xl font-bold mb-2">
                Smart Factory Expo & Forum
                </h3>

                <div className="flex items-center gap-4 text-slate-400 mb-6 text-sm">
                <span>📍 Bangalore, India</span>
                <span>📅 Mar 2025</span>
                </div>

                <p className="text-slate-400 mb-8">
                Showcasing the next generation of automation, robotics, and circular economy solutions.
                </p>

                <button className="w-full border border-white/20 py-3 rounded-xl font-bold group-hover:bg-white group-hover:text-slate-900 transition-all">
                Stay Updated
                </button>
            </div>

            </div>
        </div>
        </section>


        {/* ================= REQUEST + NEWSLETTER ================= */}
        <section className="max-w-[1280px] mx-auto px-6 lg:px-20 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* REQUEST SPEAKER */}
            <div className="bg-green-700 text-white p-10 lg:p-14 rounded-3xl relative overflow-hidden">

            <span className="absolute -bottom-10 -right-10 text-[200px] text-white/5">
                📣
            </span>

            <div className="relative z-10">
                <h2 className="text-3xl font-black mb-4">
                Request a Speaker
                </h2>

                <p className="text-green-100 mb-8 text-lg">
                Looking for an industry expert to share insights at your university, summit, or corporate meeting?
                </p>

                <form className="space-y-4 max-w-md">
                <input
                    placeholder="Organization Name"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-3 text-white placeholder:text-green-200 focus:bg-white/20 focus:outline-none"
                />

                <div className="flex gap-4">
                    <input
                    placeholder="Topic"
                    className="w-1/2 bg-white/10 border border-white/20 rounded-xl px-5 py-3 text-white placeholder:text-green-200 focus:bg-white/20"
                    />
                    <input
                    type="date"
                    className="w-1/2 bg-white/10 border border-white/20 rounded-xl px-5 py-3 text-white"
                    />
                </div>

                <button className="w-full bg-amber-500 text-slate-900 py-4 rounded-xl font-bold hover:shadow-xl transition-all">
                    Submit Request
                </button>
                </form>
            </div>
            </div>

            {/* NEWSLETTER */}
            <div className="bg-slate-100 dark:bg-slate-900 p-10 lg:p-14 rounded-3xl border border-slate-200 dark:border-slate-800">

            <div className="mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                <Mail size={18} />
                </div>

                <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-4">
                Event Newsletter
                </h2>

                <p className="text-slate-600 dark:text-slate-400 text-lg">
                {`Don't miss out. Get early-bird registration links and exclusive webinar summaries delivered to your inbox weekly.`}
                </p>
            </div>

            <div className="flex flex-col gap-4">
                <label>
                <span className="text-sm font-bold text-slate-500 mb-2 block uppercase">
                    Email Address
                </span>

                <input
                    placeholder="john.doe@company.com"
                    className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-5 py-4 focus:ring-2 focus:ring-green-500 outline-none"
                />
                </label>

                <button className="bg-green-600 text-white py-4 rounded-xl font-bold hover:bg-green-400 transition-all">
                Subscribe Now
                </button>

                <p className="text-[10px] text-slate-400 text-center uppercase">
                 @ By subscribing you agree to our privacy policy and event terms.
                </p>
            </div>
            </div>

        </div>
        </section>

    </div>
  );
}