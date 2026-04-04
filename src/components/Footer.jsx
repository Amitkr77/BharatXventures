"use client";
import React from "react";
import { Globe, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden 
    bg-[linear-gradient(135deg,#dff5ec,#c7eadb,#eafaf4,#d7f3e7)] 
    text-gray-800 pt-20 pb-10 border-t border-green-100">

      {/* ✅ Animated Gradient (optional smooth effect) */}
      <div className="absolute inset-0 opacity-60 bg-[linear-gradient(135deg,#e6f7f0,#cdeee0,#f2fbf7,#dff5ec)] animate-[pulse_8s_ease-in-out_infinite]"></div>

      {/* ✅ Glass Floating Shapes (NEW BACKGROUND DESIGN) */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-10 left-10 w-40 h-40 rounded-2xl 
        bg-white/20 backdrop-blur-xl border border-white/30 shadow-lg"></div>

        {/*<div className="absolute top-32 left-1/3 w-52 h-52 rounded-2xl 
        bg-white/20 backdrop-blur-xl border border-white/30 shadow-lg"></div>*/}

        <div className="absolute top-16 right-20 w-44 h-44 rounded-2xl 
        bg-white/20 backdrop-blur-xl border border-white/30 shadow-lg"></div>

        <div className="absolute bottom-16 left-24 w-48 h-48 rounded-2xl 
        bg-white/20 backdrop-blur-xl border border-white/30 shadow-lg"></div>

        <div className="absolute bottom-20 right-32 w-40 h-40 rounded-2xl 
        bg-white/20 backdrop-blur-xl border border-white/30 shadow-lg"></div>
      </div>

      {/* ✅ Your Original Glow (kept) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.08),transparent_70%)] pointer-events-none"></div>

      {/* ================= ORIGINAL CONTENT (UNCHANGED) ================= */}
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          
          {/* ================= BRAND ================= */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <img
                src="/vlogo.png"
                alt="Logo"
                width={70}
                height={70}
                className="object-contain drop-shadow-md"
              />

              <div>
                <h2 className="text-2xl font-extrabold tracking-tight text-green-900">
                  Bharatx Ventures
                </h2>
                <span className="text-xs text-green-700 font-semibold tracking-widest uppercase block">
                  PRIVATE LIMITED
                </span>
              </div>
            </div>

            <p className="text-green-700 text-sm max-w-md leading-relaxed font-medium">
              {`A premier venture development firm committed to institutional
              excellence and scaling India's industrial backbone through
              strategic innovation and capital.`}
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 mt-2">
              {[Globe, Mail, MapPin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="group w-12 h-12 rounded-xl bg-white/60 backdrop-blur-md border border-green-100 flex items-center justify-center shadow-sm hover:shadow-md hover:bg-green-500 transition-all duration-300"
                >
                  <Icon
                    size={18}
                    className="text-green-700 group-hover:text-white transition"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* FAST LINKS */}
          <div className="flex flex-col gap-6 bg-white/60 backdrop-blur-md p-6 rounded-2xl border border-green-100 shadow-sm hover:shadow-md transition">
            <h4 className="font-bold text-green-800 uppercase tracking-widest text-sm">
              Fast Links
            </h4>

            <ul className="flex flex-col gap-3 text-sm font-medium text-gray-700">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about-us">About Us</Link></li>
              <li><Link href="/service">Services</Link></li>
              <li><Link href="/contact-us">Contact</Link></li>
            </ul>
          </div>

          {/* REGULATORY */}
          <div className="flex flex-col gap-6 bg-white/60 backdrop-blur-md p-6 rounded-2xl border border-green-100 shadow-sm hover:shadow-md transition">
            <h4 className="font-bold text-green-800 uppercase tracking-widest text-sm">
              Regulatory Identity
            </h4>

            <ul className="flex flex-col gap-4 text-sm">
              <li>
                <span className="block text-green-600 text-xs font-semibold uppercase">CIN</span>
                <span className="font-medium text-gray-700">U01139BR2026PTC083018</span>
              </li>
              <li>
                <span className="block text-green-600 text-xs font-semibold uppercase">PAN</span>
                <span className="font-medium text-gray-700">AAOCB4970H</span>
              </li>
            </ul>
          </div>

          {/* ADDRESS */}
          <div className="flex flex-col gap-6 bg-white/60 backdrop-blur-md p-6 rounded-2xl border border-green-100 shadow-sm hover:shadow-md transition">
            <h4 className="font-bold text-green-800 uppercase tracking-widest text-sm">
              Registered Office
            </h4>

            <div className="text-sm text-gray-700 leading-relaxed">
              <span className="block text-green-600 font-semibold uppercase text-xs mb-1">
                Gaya, Bihar
              </span>

              Bharatx Ventures Private Limited
              <br />
              Bihar Infrastructure Hub
              <br />
              Gaya, India
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-green-200 to-transparent mb-6"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} Bharatx Ventures Private Limited. All Rights Reserved.
          </p>

          <div className="flex gap-6">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}