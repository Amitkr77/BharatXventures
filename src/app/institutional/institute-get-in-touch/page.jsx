"use client";
import React, { useState } from "react";

export default function GetInTouchPage() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    purpose: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data:", formData);

    // 👉 Replace this with API call later
    alert("Your inquiry has been submitted!");

    // Reset form
    setFormData({
      name: "",
      email: "",
      organization: "",
      purpose: "",
      message: ""
    });
  };

  return (
    <main className="bg-white text-black">

      {/* HERO */}
      <section className="bg-[#0A3D2E] text-white py-28 text-center px-6">
        <div className="max-w-4xl mx-auto">
          <div className="w-12 h-[4px] bg-[#C5A059] mx-auto mb-6"></div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Engage With Our <span className="text-[#C5A059]">Institution</span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl">
            We welcome meaningful conversations with investors, partners,
            and leaders committed to building long-term impact.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT */}
          <div>
            <h2 className="text-3xl font-bold text-[#0A3D2E] mb-6">
              Let’s Build Something Enduring
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Whether you represent an institution, investment firm, or
              strategic initiative, our leadership team is open to
              discussions that align with long-term value creation and
              nation-building.
            </p>

            <p className="text-gray-500 mb-10">
              We prioritize thoughtful engagement and meaningful partnerships.
            </p>

            <div className="space-y-4 text-gray-700">
              <p>📍 India</p>
              <p>📧 contact@yourdomain.com</p>
              <p>📞 +91 XXXXX XXXXX</p>
            </div>
          </div>

          {/* FORM */}
          <div className="bg-white border rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-semibold mb-6 text-[#0A3D2E]">
              Submit Your Inquiry
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#0A3D2E]"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#0A3D2E]"
              />

              <input
                type="text"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                placeholder="Organization / Institution"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#0A3D2E]"
              />

              <select
                name="purpose"
                value={formData.purpose}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#0A3D2E]"
              >
                <option value="">Purpose of Inquiry</option>
                <option value="Investment">Investment</option>
                <option value="Partnership">Partnership</option>
                <option value="Collaboration">Institutional Collaboration</option>
                <option value="Media">Media / Press</option>
              </select>

              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#0A3D2E]"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-[#0A3D2E] text-white py-3 rounded-lg font-semibold hover:bg-[#082c24] transition"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A3D2E] text-white py-16 text-center px-6">
        <h3 className="text-3xl font-bold mb-4">
          Building Institutions, Not Just Businesses
        </h3>

        <p className="text-gray-300 max-w-xl mx-auto">
          We look forward to engaging with individuals and organizations
          aligned with our long-term vision.
        </p>
      </section>

    </main>
  );
}