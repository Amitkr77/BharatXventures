import React from "react";
import { Building2, Globe, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Description */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="size-10 bg-blue-600 flex items-center justify-center rounded-lg shadow-md shadow-blue-900/30">
                <Building2 className="text-white" size={24} strokeWidth={1.8} />
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-white">
                  Bharatx Ventures
                </h2>
                <span className="text-xs text-blue-400 font-semibold tracking-widest uppercase block mt-0.5">
                  PRIVATE LIMITED
                </span>
              </div>
            </div>

            <p className="text-gray-400 max-w-md leading-relaxed">
              A premier venture development firm committed to institutional
              excellence and scaling India industrial backbone through
              strategic innovation and capital.
            </p>

            <div className="flex gap-4">
              <a
                className="size-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all duration-200"
                href="#"
                aria-label="Website"
              >
                <Globe size={18} />
              </a>
              <a
                className="size-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all duration-200"
                href="#"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a
                className="size-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all duration-200"
                href="#"
                aria-label="Location"
              >
                <MapPin size={18} />
              </a>
            </div>
          </div>

          {/* Regulatory Identity */}
          <div className="flex flex-col gap-6">
            <h4 className="font-bold text-blue-400 uppercase tracking-widest text-sm">
              Regulatory Identity
            </h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-400">
              <li>
                <span className="block text-white font-semibold">CIN</span>
                U01139BR2026PTC083018
              </li>
              <li>
                <span className="block text-white font-semibold">PAN</span>
                AAOCB4970H
              </li>
            </ul>
          </div>

          {/* Registered Office */}
          <div className="flex flex-col gap-6">
            <h4 className="font-bold text-blue-400 uppercase tracking-widest text-sm">
              Registered Office
            </h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-400">
              <li>
                <span className="block text-white font-semibold uppercase tracking-tighter mb-1">
                  Gaya, Bihar
                </span>
                <p className="leading-relaxed">
                  Bharatx Ventures Private Limited
                  <br />
                  Bihar Infrastructure Hub
                  <br />
                  Gaya, India
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} Bharatx Ventures Private Limited. All
            Rights Reserved.
          </p>

          <div className="flex gap-6">
            <Link
              className="hover:text-gray-200 transition-colors"
              href="/privacy"
            >
              Privacy Policy
            </Link>
            <Link
              className="hover:text-gray-200 transition-colors"
              href="/terms"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
