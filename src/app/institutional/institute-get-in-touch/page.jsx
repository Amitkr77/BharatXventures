"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function GetInTouchPage() {

  /* ================= STATE ================= */
  const [formData, setFormData] = useState({
    fullName: "",
    organization: "",
    email: "",
    phone: "",
    purpose: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [shake, setShake] = useState(false);
  const [success, setSuccess] = useState(false);

  /* ================= HANDLE CHANGE ================= */
  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [id]: "",
    }));
  };

  /* ================= VALIDATION ================= */
  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim())
      newErrors.fullName = "Full name is required";

    if (!formData.organization.trim())
      newErrors.organization = "Organization is required";

    if (!formData.email.trim())
      newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email))
      newErrors.email = "Invalid email";

    if (!formData.phone.trim())
      newErrors.phone = "Phone is required";
    else if (!/^[0-9+\s-]{10,15}$/.test(formData.phone))
      newErrors.phone = "Invalid phone";

    if (!formData.purpose.trim())
      newErrors.purpose = "Purpose of inquiry is required";

    if (!formData.message.trim())
      newErrors.message = "Message is required";

    return newErrors;
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setShake(true);
      setTimeout(() => setShake(false), 400);
      return;
    }

    setSuccess(true);

    setFormData({
      fullName: "",
      organization: "",
      email: "",
      phone: "",
      purpose: "",
      message: "",
    });
  };

  return (
    <main className="bg-white text-black">

      {/* ================= HERO ================= */}
      <section className="bg-[#0A3D2E] text-white py-28 text-center px-6">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="w-12 h-[4px] bg-[#C5A059] mx-auto"></div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Engage With Our <span className="text-[#C5A059]">Institution</span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl">
            We welcome meaningful conversations with investors, partners,
            and leaders committed to building long-term impact.
          </p>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-16 items-start">

          {/* ================= LEFT CONTENT ================= */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#0A3D2E]">
              Let’s Build Something Enduring
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Whether you represent an institution, investment firm, or
              strategic initiative, our leadership team is open to
              discussions that align with long-term value creation and
              nation-building.
            </p>

            <p className="text-gray-500">
              We prioritize thoughtful engagement and meaningful partnerships.
            </p>

            <div className="space-y-3 text-gray-700 pt-4">
              <p>📍 India</p>
              <p>📧 partner@bharatxventures.com</p>
              <p>📞 +91 98 1126 3046</p>
            </div>
            {/* MAP */}
            <div className="group relative h-[400px] rounded-2xl overflow-hidden hover:scale-105 transition border duration-500">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d14500.572781252877!2d84.87052132909884!3d24.687603797273283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sH.%20No.%20136%2C%20Beladih%2C%20Cherki%20Bazar%2C%20Gaya%2C%20Bihar%20%E2%80%93%20824237%2C%20India!5e0!3m2!1sen!2sin!4v1774260705837!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500"
              />

              <div className="absolute bottom-4 left-16 right-2 bg-white p-4 rounded-xl shadow flex gap-3 items-center border-l-4 border-gray-200 group-hover:border-green-400 duration-500">
                <MapPin size={18} />
                <div>
                  <p className="text-xs text-gray-400 uppercase">
                    Office Location
                  </p>
                  <p className="font-bold">
                    Cherki Bazar, Gaya, Bihar
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* ================= FORM CARD ================= */}
          <div className="bg-white border rounded-2xl shadow-xl p-8">

            <motion.div
              animate={shake ? { x: [-10, 10, -6, 6, 0] } : {}}
              className="w-full"
            >
              <h2 className="text-2xl font-extrabold text-green-800 mb-2">
                Send a Message
              </h2>

              <p className="text-green-600 mb-6">
                Our team will contact you within 24–48 hours.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                {/* FULL NAME */}
                <div className="flex flex-col gap-1">
                  <input
                    id="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className={`px-4 py-3 rounded-lg border ${
                      errors.fullName ? "border-red-500" : "border-gray-200"
                    } focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none`}
                  />
                  {errors.fullName && (
                    <span className="text-red-500 text-xs">{errors.fullName}</span>
                  )}
                </div>

                {/* ORGANIZATION */}
                <div className="flex flex-col gap-1">
                  <input
                    id="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="Organization"
                    className={`px-4 py-3 rounded-lg border ${
                      errors.organization ? "border-red-500" : "border-gray-200"
                    } focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none`}
                  />
                  {errors.organization && (
                    <span className="text-red-500 text-xs">
                      {errors.organization}
                    </span>
                  )}
                </div>

                {/* EMAIL */}
                <div className="flex flex-col gap-1">
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Official Email"
                    className={`px-4 py-3 rounded-lg border ${
                      errors.email ? "border-red-500" : "border-gray-200"
                    } focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none`}
                  />
                  {errors.email && (
                    <span className="text-red-500 text-xs">{errors.email}</span>
                  )}
                </div>

                {/* PHONE */}
                <div className="flex flex-col gap-1">
                  <input
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 00000 00000"
                    className={`px-4 py-3 rounded-lg border ${
                      errors.phone ? "border-red-500" : "border-gray-200"
                    } focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none`}
                  />
                  {errors.phone && (
                    <span className="text-red-500 text-xs">{errors.phone}</span>
                  )}
                </div>
                {/* PURPOSE */}
                <div className="flex flex-col gap-2 hover:scale-[1.02] transition duration-300">
                  <select
                    id="purpose"
                    value={formData.purpose}
                    onChange={handleChange}
                    placeholder="Purpose of Inquiry"
                    className={`px-4 py-3 rounded-lg border ${
                      errors.purpose ? "border-red-500" : "border-gray-200"
                    } focus:border-[#0A3D2E] focus:ring-2 focus:ring-green-100 outline-none`}
                  >
                    <option value="">Purpose of Inquiry</option>
                    <option value="Investment">Investment</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Collaboration">Institutional Collaboration</option>
                    <option value="Media">Media / Press</option>
                  </select>
                  {errors.purpose && (
                    <span className="text-red-500 text-xs">{errors.purpose}</span>
                  )}
                </div>

                {/* MESSAGE */}
                <div className="flex flex-col gap-1">
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Brief Message"
                    rows={4}
                    className={`px-4 py-3 rounded-lg border ${
                      errors.message ? "border-red-500" : "border-gray-200"
                    } focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none`}
                  />
                  {errors.message && (
                    <span className="text-red-500 text-xs">{errors.message}</span>
                  )}
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  className="bg-green-700 text-white py-4 rounded-xl font-bold 
                  hover:bg-green-500 hover:scale-105 transition duration-300"
                >
                  Submit Institutional Inquiry
                </button>

              </form>

              {/* SUCCESS MESSAGE */}
              {success && (
                <div className="mt-6 bg-green-100 text-green-700 px-6 py-4 rounded-xl font-semibold">
                  ✅ Your inquiry has been submitted!
                </div>
              )}
            </motion.div>
          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
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