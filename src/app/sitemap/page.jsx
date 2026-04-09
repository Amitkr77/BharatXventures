"use client";
import React from "react";

export default function SitemapPage() {
  return (
    <div className="p-10 bg-gray-100 min-h-screen flex flex-col items-center">

      {/* TITLE */}
      <h1 className="text-4xl font-bold mb-12 text-gray-800">
        Website Sitemap
      </h1>

      {/* HOME */}
      <div className="bg-[#0A1F3D] text-white px-8 py-4 rounded-xl shadow-lg font-semibold">
        Home (/)
      </div>

      {/* VERTICAL LINE */}
      <div className="w-px h-10 bg-gray-400"></div>

      {/* MAIN BRANCH */}
      <div className="relative w-full flex justify-center">

        {/* HORIZONTAL LINE */}
        <div className="absolute top-0 left-10 right-10 h-px bg-gray-400"></div>

        <div className="flex gap-20">

          {/* MAIN WEBSITE */}
          <div className="flex flex-col items-center">
            <div className="w-px h-10 bg-gray-400"></div>

            <div className="bg-white px-6 py-3 rounded-xl shadow font-semibold">
              Main Website
            </div>

            <div className="w-px h-6 bg-gray-400"></div>

            <div className="flex flex-col gap-3">
              <Box text="about-us" />
              <Box text="contact-us" />
              <Box text="framework" />
              <Box text="governance" />
              <Box text="industry" />
              <Box text="partnership" />
              <Box text="project" />
              <Box text="service" />
              <Box text="privacy" />
              <Box text="terms" />
            </div>
          </div>

          {/* INSTITUTIONAL */}
          <div className="flex flex-col items-center">
            <div className="w-px h-10 bg-gray-400"></div>

            <div className="bg-white px-6 py-3 rounded-xl shadow font-semibold">
              Institutional
            </div>

            <div className="w-px h-6 bg-gray-400"></div>

            <div className="flex flex-col gap-3 items-center">
              <Box text="institute-home" />
              <Box text="institute-about" />
              <Box text="institute-services" />
              <Box text="institute-framework" />
              <Box text="institute-portfolio" />
              <Box text="institute-contact" />
              <Box text="institute-get-in-touch" />
            </div>
          </div>

          {/* COMPONENT SYSTEM */}
          <div className="flex flex-col items-center">
            <div className="w-px h-10 bg-gray-400"></div>

            <div className="bg-white px-6 py-3 rounded-xl shadow font-semibold">
              Components
            </div>

            <div className="w-px h-6 bg-gray-400"></div>

            <div className="flex flex-col gap-3">
              <Box text="Header" />
              <Box text="Footer" />
              <Box text="GoToTop" />
            </div>
          </div>

          {/* GLOBAL */}
          <div className="flex flex-col items-center">
            <div className="w-px h-10 bg-gray-400"></div>

            <div className="bg-white px-6 py-3 rounded-xl shadow font-semibold">
              Global
            </div>

            <div className="w-px h-6 bg-gray-400"></div>

            <div className="flex flex-col gap-3">
              <Box text="layout.js" />
              <Box text="globals.css" />
              <Box text="page.jsx" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

/* REUSABLE BOX */
function Box({ text }) {
  return (
    <div className="bg-white px-5 py-2 rounded-lg shadow text-sm text-gray-700 whitespace-nowrap">
      {text}
    </div>
  );
}