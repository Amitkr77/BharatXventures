"use client";

import React from "react";

export default function EventsPage() {
  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">  
      {/* HERO */}
      <section className="relative h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 bg-primary/40 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent z-10"></div>

        <img
          src="/images/events-hero.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative z-20 text-center max-w-4xl px-6">
          <span className="badge">Global Network</span>

          <h1 className="hero-title">Events & Insights</h1>

          <p className="hero-sub">
            Sharing strategic knowledge and driving innovation across the
            industrial ecosystem through curated thought leadership.
          </p>

          <div className="flex justify-center gap-4">
            <button className="btn-primary">View Upcoming</button>
            <button className="btn-outline">Explore Archive</button>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="container-section">
        <h2 className="section-title">
          Featured Upcoming Webinar
          <span className="pulse-dot"></span>
        </h2>

        <div className="featured-card">
          
          <div className="lg:w-1/2">
            <img
              src="/images/webinar.jpg"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="lg:w-1/2 p-10">
            <p className="text-accent-gold font-bold mb-3">
              Oct 24, 2023 • Online Event
            </p>

            <h3 className="text-3xl font-black mb-4">
              The Future of Industrial AI: Scaling Beyond Pilot
            </h3>

            <p className="text-slate-500 mb-6">
              Join us for an exclusive session on integrating AI into core
              manufacturing processes.
            </p>

            <button className="btn-primary w-full">
              Register Now
            </button>
          </div>
        </div>
      </section>

      {/* ON DEMAND */}
      <section className="container-section">
        <h2 className="section-title">On-Demand Webinars</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {[1,2,3].map((i) => (
            <div key={i} className="card">
              <img src={`/images/card${i}.jpg`} className="card-img" />

              <div className="p-6">
                <h4 className="card-title">
                  Webinar Title {i}
                </h4>
                <p className="card-desc">
                  Explore insights on industrial innovation and growth.
                </p>
              </div>
            </div>
          ))}

        </div>
      </section>

    </div>
  );
}