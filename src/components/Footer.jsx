import React from "react";
import { Globe, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-white py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Description */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-3">
               <img
                  src="/vlogo.png"   //  logo in public folder
                  alt="Logo"
                  width={80}
                  height={80}
                  className="object-contain"
                />
            </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-green-900">
                  Bharatx Ventures
                </h2>
                <span className="text-sm text-green-700 font-bold tracking-widest uppercase block mt-0.5">
                  PRIVATE LIMITED
                </span>
              </div>
            </div>

            <p className="text-green-600 font-bold text-sm max-w-md leading-relaxed">
              {`A premier venture development firm committed to institutional
              excellence and scaling India's industrial backbone through
              strategic innovation and capital.`}
            </p>

            <div className="flex gap-4">
              <a
                className="size-15 rounded-full border border-blue-300 flex items-center justify-center text-green-300 hover:bg-green-400 hover:border-green-400 hover:text-white transition-all duration-200"
                href="#"
                aria-label="Website"
              >
                <Globe size={18} />
              </a>
              <a
                className="size-15 rounded-full border border-blue-300 flex items-center justify-center text-green-300 hover:bg-green-400 hover:border-green-400 hover:text-white transition-all duration-200"
                href="#"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a
                className="size-15 rounded-full border border-blue-300 flex items-center justify-center text-green-300 hover:bg-green-400 hover:border-green-400 hover:text-white transition-all duration-200"
                href="#"
                aria-label="Location"
              >
                <MapPin size={18} />
              </a>
            </div>
          </div>

          {/* Regulatory Identity */}
          <div className="flex flex-col gap-6">
            <h4 className="font-bold text-green-600 uppercase tracking-widest text-lg">
              Regulatory Identity
            </h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-400">
              <li>
                <span className="block text-green-400 text-lg font-semibold">CIN :</span>
                U01139BR2026PTC083018
              </li>
              <li>
                <span className="block text-green-400 text-lg font-semibold">PAN : </span>
                AAOCB4970H
              </li>
            </ul>
          </div>

          {/* Registered Office */}
          <div className="flex flex-col gap-6">
            <h4 className="font-bold text-green-600 uppercase tracking-widest text-lg">
              Registered Office
            </h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-400">
              <li>
                <span className="block text-green-400 font-semibold uppercase tracking-tighter mb-1">
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
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-500">
          <p>

            © {new Date().getFullYear()} Bharatx Ventures Private Limited. All
            Rights Reserved.
          </p>

          <div className="flex gap-6">
            <Link
              className="hover:text-gray-100 transition-colors"
              href="/privacy"
            >
              Privacy Policy
            </Link>
            <Link
              className="hover:text-gray-100 transition-colors"
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