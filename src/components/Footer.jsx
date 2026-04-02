"use client";
import React from "react";
import { Globe, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-white to-green-50 text-gray-800 pt-20 pb-10 border-t border-green-100">
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.08),transparent_70%)] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          
          {/* ================= BRAND ================= */}
          <div className="lg:col-span-2 flex flex-col gap-6">
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

          {/* ================= REGULATORY ================= */}
          <div className="flex flex-col gap-6 bg-white/60 backdrop-blur-md p-6 rounded-2xl border border-green-100 shadow-sm hover:shadow-md transition">
            <h4 className="font-bold text-green-800 uppercase tracking-widest text-sm">
              Regulatory Identity
            </h4>

            <ul className="flex flex-col gap-4 text-sm">
              <li>
                <span className="block text-green-600 text-xs font-semibold uppercase">
                  CIN
                </span>
                <span className="font-medium text-gray-700">
                  U01139BR2026PTC083018
                </span>
              </li>

              <li>
                <span className="block text-green-600 text-xs font-semibold uppercase">
                  PAN
                </span>
                <span className="font-medium text-gray-700">
                  AAOCB4970H
                </span>
              </li>
            </ul>
          </div>

          {/* ================= ADDRESS ================= */}
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

        {/* ================= DIVIDER ================= */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-green-200 to-transparent mb-6"></div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Bharatx Ventures Private Limited. All
            Rights Reserved.
          </p>

          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="hover:text-green-700 transition font-medium"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="hover:text-green-700 transition font-medium"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}