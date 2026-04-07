'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Cpu,
  Rocket,
  Factory,
  Globe,
  Mail,
  Phone,
  Send,
  Building2,
  CheckCircle2,
  MapPin,
} from 'lucide-react';
import Link from 'next/link';


// Animation Variants (reused & slightly adjusted for this page)
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.3,
    },
  },
};

const cardHover = {
  rest: { scale: 1, y: 0, boxShadow: '0 10px 15px -3px rgba(0,0,0,0.08)' },
  hover: {
    scale: 1.04,
    y: -10,
    boxShadow: '0 25px 35px -5px rgba(0,0,0,0.12)',
    transition: { duration: 0.45, ease: 'easeOut' },
  },
};

const imageReveal = {
  hidden: { opacity: 0, scale: 0.94, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 1.2, ease: 'easeOut' },
  },
};

const buttonVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.06, transition: { duration: 0.35 } },
  tap: { scale: 0.97 },
};

export default function EcosystemPage({ fadeInUp, buttonVariants }) {
  const [formData, setFormData] = useState({
    companyName: '',
    partnerType: 'Select Type',
    collaborationArea: 'Select Area',
    phone: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const [shake, setShake] = useState(false);

  // 🔹 Handle Input Change
  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));

    // remove error while typing
    setErrors((prev) => ({
      ...prev,
      [id]: '',
    }));
  };

  // 🔹 Validation
  const validate = () => {
    let newErrors = {};

    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required';
    }

    if(!formData.partnerType || formData.partnerType === 'Select Type') { 
      newErrors.partnerType = 'Please select a partner type';
    }

    if(!formData.collaborationArea || formData.collaborationArea === 'Select Area') { 
      newErrors.collaborationArea = 'Please select a collaboration area';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/\s+/g, ''))) {
      newErrors.phone = 'Enter valid Indian phone number';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message cannot be empty';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 🔹 Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      // ❌ trigger shake on error
      setShake(true);
      setTimeout(() => setShake(false), 400);
    return;
  }

    if (validate()) {
      console.log('Submitted:', formData);
      alert('Form submitted successfully!');

      setFormData({
        companyName: '',
        partnerType: 'Select Type',
        collaborationArea: 'Select Area',
        phone: '',
        email: '',
        message: '',
      });

      setErrors({});
    }
  };

  // 🔹 Dynamic input border
  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-xl border ${
      errors[field] ? 'border-red-500' : 'border-gray-200'
    } focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none transition-all`;
  return (
    <section className="bg-gray-50 text-gray-900 antialiased">
      <main>
        {/* Hero Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="relative overflow-hidden pt-16 pb-24"
        >
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeInUp} className="relative z-10">
              <motion.div
                variants={fadeInUp}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 border border-green-100 text-green-700 text-xs font-bold uppercase tracking-wider mb-6"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-600"></span>
                </span>
                Strategic Collaboration
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
                className="text-5xl lg:text-7xl font-black text-gray-900 leading-[1.1] mb-8"
              >
                Our Strategic{' '}
                <span className="text-amber-500 underline decoration-blue-100 underline-offset-8 decoration-4">
                  Ecosystem
                </span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                transition={{ delay: 0.3 }}
                className="text-lg text-gray-600 leading-relaxed mb-10 max-w-xl"
              >
                Driving collective growth through institutional collaboration and venture building expertise. We
                bridge the gap between global capital, industry leaders, and high-impact founders.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <Link href="/partnership#network" passHref>
                <motion.button
                  whileHover="hover"
                  whileTap="tap"
                  variants={buttonVariants}
                  className="bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:-translate-y-0.5 hover:shadow-xl hover:shadow-green-200/40 hover:bg-green-400 transition-all duration-300"
                >
                  Explore Network
                </motion.button>
                </Link>

                <Link href="/framework" passHref>
                  <motion.button
                    whileHover="hover"
                    whileTap="tap"
                    variants={buttonVariants}
                    className="border border-gray-200 bg-white text-gray-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 hover:-translate-y-0.5 hover:bg-green-400 transition-all duration-300"
                >
                  View Methodology
                </motion.button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div variants={imageReveal} className="relative">
              <div
                className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDALLK1ZWdhsDtG032CsDRicRe-WhjpPb8vbc86jESwVPDJfweh0WZMjmCtAhkHoW_Ga_deAsqh3tcyOnHvLgLa6WaqHleluxm288pEa535QnlQZIkbGmxZei4dSG8SyoobSfMEVXXjRQUPekco3uLHWcje954Ug1-pi_HmTGhR6fOF5d_dhjERRZtSPyarnJ5nFTGe0DpQgmP_3isoWHb41s2SOgv1iH35NZ7MynHZVojBNJnB2iOTb-tmfvViV93ck006sTe7kMds')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="absolute inset-0 bg-green-600/10"></div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.7 }}
                className="absolute -bottom-10 -left-10 bg-white p-8 rounded-2xl shadow-xl max-w-[280px] border border-gray-100"
              >
                <p className="text-amber-500 font-bold text-3xl mb-1">50+</p>
                <p className="text-sm font-semibold text-gray-600 uppercase tracking-tighter">
                  Institutional Partners Globally
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Partner Categories */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={staggerContainer}
          className="py-24 bg-white"
        >
          <div className="max-w-7xl mx-auto px-6">
            <motion.div variants={fadeInUp} className="text-center mb-20">
              <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-gray-900 mb-4">
                Partner Categories
              </motion.h2>
              <motion.p variants={fadeInUp} transition={{ delay: 0.1 }} className="text-gray-600 max-w-2xl mx-auto">
                Our ecosystem is built on four pillars of collaboration, each essential to the lifecycle of venture
                development.
              </motion.p>
            </motion.div>

            <motion.div variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Technology Partners */}
              <motion.div
                variants={cardHover}
                whileHover="hover"
                className="group p-8 rounded-2xl border border-gray-100 bg-white hover:border-green-300/50 transition-all duration-300 hover:shadow-xl hover:shadow-green-100/40"
              >
                <div className="size-14 rounded-xl bg-green-50 flex items-center justify-center text-green-600 mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                  <Cpu size={28} strokeWidth={1.6} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Technology Partners</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Providing advanced infrastructure, AI modeling, and digital transformation toolkits to accelerate R&D.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-xs font-semibold text-gray-500">
                    <CheckCircle2 className="text-green-500" size={16} />
                    Cloud Infrastructure
                  </li>
                  <li className="flex items-center gap-2 text-xs font-semibold text-gray-500">
                    <CheckCircle2 className="text-green-500" size={16} />
                    R&D Collaboration
                  </li>
                </ul>
              </motion.div>

              {/* Startup Ecosystem */}
              <motion.div
                variants={cardHover}
                whileHover="hover"
                className="group p-8 rounded-2xl border border-gray-100 bg-white hover:border-green-300/50 transition-all duration-300 hover:shadow-xl hover:shadow-green-100/40"
              >
                <div className="size-14 rounded-xl bg-green-50 flex items-center justify-center text-green-600 mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                  <Rocket size={28} strokeWidth={1.6} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Startup Ecosystem</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Incubators, accelerators, and VC networks that funnel talent and disruptive ideas into our pipeline.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-xs font-semibold text-gray-500">
                    <CheckCircle2 className="text-green-500" size={16} />
                    Deal Flow Sharing
                  </li>
                  <li className="flex items-center gap-2 text-xs font-semibold text-gray-500">
                    <CheckCircle2 className="text-green-500" size={16} />
                    Mentorship Access
                  </li>
                </ul>
              </motion.div>

              {/* Industry Partners */}
              <motion.div
                variants={cardHover}
                whileHover="hover"
                className="group p-8 rounded-2xl border border-gray-100 bg-white hover:border-green-300/50 transition-all duration-300 hover:shadow-xl hover:shadow-green-100/40"
              >
                <div className="size-14 rounded-xl bg-green-50 flex items-center justify-center text-green-600 mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                  <Factory size={28} strokeWidth={1.6} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Industry Partners</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Market leaders and manufacturing hubs providing real-world testing grounds and industrial scale.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-xs font-semibold text-gray-500">
                    <CheckCircle2 className="text-green-500" size={16} />
                    Supply Chain Integration
                  </li>
                  <li className="flex items-center gap-2 text-xs font-semibold text-gray-500">
                    <CheckCircle2 className="text-green-500" size={16} />
                    Pilot Programs
                  </li>
                </ul>
              </motion.div>

              {/* Export Ecosystem */}
              <motion.div
                variants={cardHover}
                whileHover="hover"
                className="group p-8 rounded-2xl border border-gray-100 bg-white hover:border-green-300/50 transition-all duration-300 hover:shadow-xl hover:shadow-green-100/40"
              >
                <div className="size-14 rounded-xl bg-green-50 flex items-center justify-center text-green-600 mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                  <Globe size={28} strokeWidth={1.6} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Export Ecosystem</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Global trade bodies and cross-border logistics partners facilitating international market entry.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-xs font-semibold text-gray-500">
                    <CheckCircle2 className="text-green-500" size={16} />
                    Global Compliance
                  </li>
                  <li className="flex items-center gap-2 text-xs font-semibold text-gray-500">
                    <CheckCircle2 className="text-green-500" size={16} />
                    Trade Facilitation
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Global Reach */}
        <motion.section
          id="network"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={staggerContainer}
          className="py-24 bg-gray-50"
        >
          <div className="max-w-7xl mx-auto px-6">
            <motion.div variants={fadeInUp} className="flex flex-col lg:flex-row gap-16 items-center">
              <motion.div variants={fadeInUp} className="lg:w-1/2">
                <motion.h2
                  variants={fadeInUp}
                  transition={{ delay: 0.1 }}
                  className="text-4xl font-bold text-gray-900 mb-6 leading-tight"
                >
                  Global Network Reach
                </motion.h2>
                <motion.p variants={fadeInUp} transition={{ delay: 0.2 }} className="text-gray-600 mb-8 leading-relaxed">
                  Our presence extends across major industrial and technology hubs. We leverage local insights with
                  global standards to ensure our portfolio companies can scale without borders.
                </motion.p>

                <motion.div variants={staggerContainer} className="grid grid-cols-2 gap-6">
                  <motion.div variants={fadeInUp} className="flex items-start gap-3">
                    <MapPin className="text-amber-500 mt-1" size={20} />
                    <div>
                      <h4 className="font-bold text-gray-900">Mumbai</h4>
                      <p className="text-xs text-gray-600 uppercase tracking-widest font-semibold">Financial HQ</p>
                    </div>
                  </motion.div>

                  <motion.div variants={fadeInUp} className="flex items-start gap-3">
                    <MapPin className="text-amber-500 mt-1" size={20} />
                    <div>
                      <h4 className="font-bold text-gray-900">Singapore</h4>
                      <p className="text-xs text-gray-600 uppercase tracking-widest font-semibold">Global Trade</p>
                    </div>
                  </motion.div>

                  <motion.div variants={fadeInUp} className="flex items-start gap-3">
                    <MapPin className="text-amber-500 mt-1" size={20} />
                    <div>
                      <h4 className="font-bold text-gray-900">Bangalore</h4>
                      <p className="text-xs text-gray-600 uppercase tracking-widest font-semibold">Tech & R&D Hub</p>
                    </div>
                  </motion.div>

                  <motion.div variants={fadeInUp} className="flex items-start gap-3">
                    <MapPin className="text-amber-500 mt-1" size={20} />
                    <div>
                      <h4 className="font-bold text-gray-900">Dubai</h4>
                      <p className="text-xs text-gray-600 uppercase tracking-widest font-semibold">
                        Logistics Corridor
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>

              <motion.div variants={imageReveal} className="lg:w-1/2 w-full h-[400px] rounded-3xl overflow-hidden bg-gray-200 relative group border-4 border-white shadow-2xl shadow-green-100/30">
                <div className="absolute inset-0 bg-green-600/10 mix-blend-multiply transition-opacity group-hover:opacity-5 duration-500"></div>
                <motion.img
                  variants={imageReveal}
                  alt="World map highlighting global industrial and tech hubs connected digitally"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXaDRmtZi4CadVGXSB6iGquSOnVeH7onrcg5KOepMKhlFQgTDna6p_Yb2PmJjmVvkFyNDMndllo1iJ8o8YEtdxa2c1iQBwpkSU0a4RRXVPh-Gu1FOVt76E8IRa_0GtrdjPzc2g5DerX-wACAGl83PsCI-tARAGGpk3mTXbhTadOO4G6OpVkginQwWidzXsVc_qQ-fH3yp-Wcdy1MD_OadTu_0b6_7c66UKZJXJojDQS_sFqQarbjr1Dek2rE7-i72zMj0cVOp8nm4b"
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* CTA / Partnership Form */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeInUp}
          className="py-24 bg-white overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-green-600 rounded-[2.5rem] p-8 lg:p-16 flex flex-col lg:flex-row gap-16 items-center relative overflow-hidden">
              {/* Decorative blur */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/10 blur-[100px] rounded-full -mr-48 -mt-48"></div>

              <motion.div variants={fadeInUp} className="relative z-10 lg:w-1/2">
                <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-white mb-6">
                  Become a Strategic Partner
                </motion.h2>
                <motion.p
                  variants={fadeInUp}
                  transition={{ delay: 0.1 }}
                  className="inline-block bg-white/15 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6"
                >
                  Collaboration Form
                </motion.p>
                <motion.p
                  variants={fadeInUp}
                  transition={{ delay: 0.2 }}
                  className="text-gray-100 text-lg leading-relaxed mb-8"
                >
                  Are you looking to co-build the next generation of industrial powerhouses? Join our network of
                  leaders, visionaries, and institutional builders.
                </motion.p>

                <motion.div variants={fadeInUp} transition={{ delay: 0.3 }} className="flex flex-col gap-4 text-gray-100">
                  <div className="flex items-center gap-4">
                    <Mail size={20} />
                    <span>partner@bharatxventures.com</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone size={20} />
                    <span>+91 (981) 1263 046</span>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                key={shake ? 'shake' : 'rest'}
                animate={shake ? { x: [-10, 10, -6, 6, 0] } : { x: 0 }}
                transition={{ duration: 0.4 }}
                variants={fadeInUp}
                className="relative z-10 lg:w-1/2 w-full bg-white p-6 md:p-8 lg:p-10 rounded-3xl shadow-2xl border border-gray-100"
              >
                <form className="space-y-6" onSubmit={handleSubmit}>

                  {/* 🔹 Grid Section */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                    {/* Company Name */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Company/Organization Name
                      </label>
                      <input
                        id="companyName"
                        type="text"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="Company Name"
                        className={inputClass('companyName')}
                      />
                      {errors.companyName && (
                        <p className="text-red-500 text-sm">{errors.companyName}</p>
                      )}
                    </div>

                    {/* Partner Type */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Partner Type
                      </label>
                      <select
                        id="partnerType"
                        value={formData.partnerType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none transition-all bg-white"
                      >
                        <option value="">Select Type</option>
                        <option value="Technology">Technology</option>
                        <option value="Industry">Industry</option>
                        <option value="Venture/VC">Venture/VC</option>
                        <option value="Other">Other</option>
                      </select>
                      {errors.partnerType && (
                        <p className="text-red-500 text-sm">{errors.partnerType}</p>
                      )}
                    </div>

                    {/* Collaboration Area */}
                    <div className="md:col-span-2 flex flex-col gap-2">
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Preferred Collaboration Area
                      </label>
                      <select
                        id="collaborationArea"
                        value={formData.collaborationArea}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none transition-all bg-white"
                      >
                        <option value="">Select Area</option>
                        <option value="SME Growth">SME Growth</option>
                        <option value="Industrial AI">Industrial AI</option>
                        <option value="Agri-Export">Agri-Export</option>
                        <option value="Strategic Consulting">Strategic Consulting</option>
                      </select>
                      {errors.collaborationArea && (
                        <p className="text-red-500 text-sm">{errors.collaborationArea}</p>
                      )}
                    </div>
                  </div>

                  {/* 🔹 Contact Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                    {/* Phone */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 00000 00000"
                        className={inputClass('phone')}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm">{errors.phone}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Official Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="contact@company.com"
                        className={inputClass('email')}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* 🔹 Message */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      How can we collaborate?
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Briefly describe your objectives..."
                      className={inputClass('message')}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm">{errors.message}</p>
                    )}
                  </div>

                  {/* 🔹 Button */}
                  <motion.button
                    whileHover="hover"
                    whileTap="tap"
                    variants={buttonVariants}
                    type="submit"
                    className="w-full bg-green-600 text-white py-4 rounded-xl font-semibold text-lg 
                    flex items-center justify-center gap-2
                    hover:bg-green-700 hover:shadow-lg hover:shadow-green-200/40 
                    transition-all duration-300"
                  >
                    Send Inquiry
                    <Send size={18} />
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </main>
    </section>
  );
}