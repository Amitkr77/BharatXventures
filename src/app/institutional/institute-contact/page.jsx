"use client";

import { React, useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

/* ================= ANIMATION ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

export default function ContactPage() {
   const [formData, setFormData] = useState({
    fullName: "",
    organization: "",
    email: "",
    phone: "",
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

    // remove error while typing
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

      // trigger shake
      setShake(true);
      setTimeout(() => setShake(false), 400);
      return;
    }

    setSuccess(true);

    // reset form
    setFormData({
      fullName: "",
      organization: "",
      email: "",
      phone: "",
      message: "",
    });
  };
  return (
    <main className="bg-[#f5f6f8] text-[#1A3C34]">

      {/* ================= HERO ================= */}
      <section className="relative bg-white pt-20 pb-28 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#1A3C34]/5 -skew-x-12 translate-x-1/2"></div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="max-w-7xl mx-auto px-6 lg:px-20 relative z-10"
        >
          <div className="max-w-3xl">
            <motion.div
              variants={fadeUp}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-amber-200/20 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-[0.2em] uppercase mb-8"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-85"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400"></span>
              </span>
                 Connect with us
            </motion.div>

            <h1 className="text-5xl lg:text-7xl text-green-800 font-extrabold leading-tight mb-8">
              Get in <span className="text-[#C5A059] italic">Touch</span>
            </h1>

            <p className="text-lg text-slate-600 mb-10">
              Partner with Bharatx Ventures to drive institutional innovation.
              We welcome strategic inquiries regarding private equity,
              corporate partnerships, and venture capital opportunities.
            </p>

            <div className="flex gap-4 flex-wrap">
              <a
                href="#contact-form"
                className="bg-green-800 text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl hover:bg-green-600 hover:scale-105 transition duration-400"
              >
                Submit Inquiry
              </a>

              <a
                href="#office"
                className="border border-gray-500 text-gray-800 px-8 py-4 rounded-xl font-bold hover:bg-green-600 hover:text-white hover:scale-105 transition duration-400"
              >
                Office Locations
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ================= CARDS ================= */}
      <section id="office" className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 grid md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="group bg-white p-8 rounded-2xl border border-[#C5A059] hover:border-green-500 transition hover:scale-105 flex flex-col gap-6 duration-500">
            <div className="w-14 h-14 rounded-xl bg-[#1A3C34]/10 flex items-center group-hover:bg-green-400 group-hover:text-white justify-center">
              <MapPin />
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">Registered Office</h3>
              <p className="text-sm text-gray-500">
                H. No. 136, Beladih, Cherki Bazar,
                <br /> Gaya, Bihar – 824237, India
              </p>
            </div>

            <a className="text-[#C5A059] font-bold text-sm flex items-center group-hover:text-green-400 gap-2 mt-auto">
              View on Map <ArrowRight size={16} />
            </a>
          </div>

          {/* CARD 2 */}
          <div className="group bg-white p-8 rounded-2xl border border-[#C5A059] hover:border-green-500 transition hover:scale-105 flex flex-col gap-6 duration-500">
            <div className="w-14 h-14 rounded-xl bg-[#1A3C34]/10 flex items-center group-hover:bg-green-400 group-hover:text-white justify-center">
              <Mail />
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">Institutional Inquiries</h3>
              <p className="text-sm text-gray-500">
                For general queries and partnerships:
              </p>
              <p className="font-bold mt-2">hello@bharatx.vc</p>
            </div>

            <a className="text-[#C5A059] font-bold text-sm flex items-center group-hover:text-green-400 gap-2 mt-auto">
              Send Email <ArrowRight size={16} />
            </a>
          </div>

          {/* CARD 3 */}
          <div className="group bg-white p-8 rounded-2xl border border-[#C5A059] hover:border-green-500 transition hover:scale-105 flex flex-col gap-6 duration-500">
            <div className="w-14 h-14 rounded-xl bg-[#1A3C34]/10 flex items-center group-hover:bg-green-400 group-hover:text-white justify-center">
              <Phone />
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">Corporate Support</h3>
              <p className="text-sm text-gray-500">
                Mon-Fri, 9:00 AM - 6:00 PM IST
              </p>
              <p className="font-bold mt-2">+91 22 4567 8900</p>
            </div>

            <a className="text-[#C5A059] font-bold text-sm flex items-center group-hover:text-green-400 gap-2 mt-auto">
              Call Now <ArrowRight size={16} />
            </a>
          </div>

        </div>
      </section>

      {/* ================= FORM + MAP ================= */}
      <section id="contact-form" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 grid lg:grid-cols-2 gap-16">

         <motion.div
            animate={shake ? { x: [-10, 10, -6, 6, 0] } : {}}
            className="w-full"
          >
            <h2 className="text-3xl font-extrabold text-green-800 mb-2">
              Send a Message
            </h2>

            <p className="text-green-600 mb-8">
              Our team will contact you within 24–48 hours.
            </p>

            <form
              onSubmit={handleSubmit}
              className="grid md:grid-cols-2 gap-6"
            >
              {/* FULL NAME */}
              <div className="flex flex-col gap-2 hover:scale-105 hover:border-green-500 duration-300">
                <input
                  id="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className={`w-full px-4 py-3 rounded-lg border ${
                              errors.fullName ? "border-red-500" : "border-gray-200"
                            } focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none transition-all`}
                          />
                          {errors.fullName && (
                            <span className="text-red-500 text-xs">{errors.fullName}</span>
                          )}
              </div>

              {/* ORGANIZATION */}
              <div className="flex flex-col gap-2 hover:scale-105 duration-300">
                <input
                  id="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  placeholder="Organization"
                  className={`w-full px-4 py-3 rounded-lg border ${
                              errors.organization ? "border-red-500" : "border-gray-200"
                            } focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none transition-all`}
                          />
                          {errors.organization && (
                            <span className="text-red-500 text-xs">
                              {errors.organization}
                            </span>
                          )}
              </div>

              {/* EMAIL */}
              <div className="flex flex-col gap-2 hover:scale-105 duration-300">
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Official Email"
                  className={`w-full px-4 py-3 rounded-lg border ${
                              errors.email ? "border-red-500" : "border-gray-200"
                            } focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none transition-all`}
                          />
                          {errors.email && (
                            <span className="text-red-500 text-xs">{errors.email}</span>
                          )}
              </div>

              {/* PHONE */}
              <div className="flex flex-col gap-2 hover:scale-105 duration-300"> 
                <input
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 00000 00000"
                  className={`w-full px-4 py-3 rounded-lg border ${
                              errors.phone ? "border-red-500" : "border-gray-200"
                            } focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none transition-all`}
                          />
                          {errors.phone && (
                            <span className="text-red-500 text-xs">{errors.phone}</span>
                          )}
              </div>

              {/* MESSAGE */}
              <div className="flex flex-col gap-2 md:col-span-2 hover:scale-105 duration-300">
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Brief Message"
                  rows={4}
                  className={`w-full px-4 py-3 rounded-lg border ${
                              errors.message ? "border-red-500" : "border-gray-200"
                            } focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none transition-all`}
                          />
                          {errors.message && (
                            <span className="text-red-500 text-xs">{errors.message}</span>
                          )}
              </div>

              {/* BUTTON */}
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="bg-green-700 text-white px-8 py-4 rounded-xl hover:bg-green-500 hover:scale-105 duration-500 font-bold"
                >
                  Submit Institutional Inquiry
                </button>
              </div>
            </form>

            {/* SUCCESS MESSAGE */}
            {success && (
              <div className="mt-6 bg-green-100 text-green-700 px-6 py-4 rounded-xl font-semibold">
                ✅ Message sent successfully!
              </div>
            )}
          </motion.div>

          {/* MAP + BOX */}
          <div className="flex flex-col gap-6">

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

            {/* TRUST BOX */}
            <div className="group bg-green-500/5 p-6 rounded-xl border border-green-600 hover:scale-105 duration-500">
              <h4 className="font-bold mb-2 flex items-center gap-2">
                <CheckCircle size={16} /> Compliance & Trust
              </h4>

              <p className="text-sm text-gray-600">
                Bharatx Ventures operates with the highest standards of
                governance. All inquiries are subject to compliance protocols.
              </p>

              <a className="text-[#C5A059] text-xs font-bold mt-3 group-hover:text-green-500 inline-block">
                View Governance Highlights →
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* INPUT STYLE */}
      <style jsx>{`
        .input {
          width: 100%;
          padding: 12px 16px;
          border-radius: 10px;
          border: 1px solid #e2e8f0;
          outline: none;
        }
        .input:focus {
          border-color: #1a3c34;
          box-shadow: 0 0 0 1px #1a3c34;
        }
      `}</style>

    </main>
  );
}