"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Home,
  Info,
  Phone,
  Layers,
  Shield,
  Building,
  Users,
  Folder,
  Briefcase,
} from "lucide-react";

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center pt-20 px-4">

      {/* TITLE */}
      <h1 className="text-4xl font-bold mb-10 text-gray-800">
        Website Sitemap
      </h1>

      {/* HOME NODE */}
      <motion.div whileHover={{ scale: 1.08 }}>
        <Link
          href="/"
          className="flex items-center gap-2 bg-[#0A1F3D] text-white px-8 py-4 rounded-2xl shadow-xl font-semibold text-lg"
        >
          <Home size={20} />
          Home
        </Link>
      </motion.div>

      {/* Vertical Line from Home */}
      <div className="w-[2px] h-12 bg-gray-400"></div>

      {/* TREE WRAPPER */}
      <div className="relative w-full max-w-6xl flex flex-col items-center">

        {/* Horizontal Line */}
        <div className="absolute top-0 w-full h-[2px] bg-gray-400"></div>

        {/* BRANCH GRID */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-10 w-full px-4">

          {/* MAIN WEBSITE */}
          <Column
            title="Main Website"
            icon={<Layers size={18} />}
            items={[
              { name: "About", path: "/about-us", icon: <Info size={16} /> },
              { name: "Contact", path: "/contact-us", icon: <Phone size={16} /> },
              { name: "Framework", path: "/framework", icon: <Layers size={16} /> },
              { name: "Governance", path: "/governance", icon: <Shield size={16} /> },
              { name: "Industry", path: "/industry", icon: <Building size={16} /> },
              { name: "Partnership", path: "/partnership", icon: <Users size={16} /> },
              { name: "Project", path: "/project", icon: <Folder size={16} /> },
              { name: "Service", path: "/service", icon: <Briefcase size={16} /> },
              { name: "Privacy", path: "/privacy", icon: <Shield size={16} /> },
              { name: "Terms", path: "/terms", icon: <Shield size={16} /> },
            ]}
          />

          {/* INSTITUTIONAL */}
          <Column
            title="Institutional"
            icon={<Building size={18} />}
            items={[
              { name: "Institute Home", path: "/institutional/institute-home" },
              { name: "Institute About", path: "/institutional/institute-about" },
              { name: "Institute Services", path: "/institutional/institute-services" },
              { name: "Institute Framework", path: "/institutional/institute-framework" },
              { name: "Institute Portfolio", path: "/institutional/institute-portfolio" },
              { name: "Institute Contact", path: "/institutional/institute-contact" },
              { name: "Institute Get In Touch", path: "/institutional/institute-get-in-touch" },
            ]}
          />

        </div>
      </div>
    </div>
  );
}

/* COLUMN COMPONENT */
function Column({ title, items, icon }) {
  return (
    <div className="flex flex-col items-center relative">

      {/* Line from top */}
      <div className="w-[2px] h-12 bg-gray-400"></div>

      {/* Title */}
      <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-xl shadow-md font-semibold mb-6">
        {icon}
        {title}
      </div>

      {/* Items */}
      <div className="flex flex-col items-center mb-8">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center">

            {/* Node */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={item.path}
                className="flex items-center gap-2 bg-white px-5 py-3 rounded-xl shadow text-sm text-gray-700 hover:shadow-lg transition"
              >
                {item.icon}
                {item.name}
              </Link>
            </motion.div>

            {/* Connector line (except last) */}
            {index !== items.length - 1 && (
              <div className="w-[2px] h-6 bg-gray-400"></div>
            )}

          </div>
        ))}
      </div>
    </div>
  );
}