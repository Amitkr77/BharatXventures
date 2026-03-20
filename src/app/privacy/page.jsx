// pages/privacy.tsx  (or app/privacy/page.tsx)
"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  FileText,
  Users,
  Clock,
  ArrowRight,
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function PrivacyPolicy() {
  return (
    <section className="bg-gray-50 text-gray-900 min-h-screen">
      <main className="max-w-4xl mx-auto px-6 py-16 lg:py-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-green-50 text-green-700 text-sm font-semibold mb-6">
            <ShieldCheck size={18} />
            Your Privacy Matters
          </div>
          <h1 className="text-4xl lg:text-5xl font-black mb-6 leading-tight">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600">Last updated: March 7, 2026</p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="prose prose-lg max-w-none text-gray-700"
        >
          <motion.p variants={fadeInUp}>
            Bharatx Ventures Private Limited (“we”, “us”, “our”) is committed to
            protecting your privacy. This Privacy Policy explains how we
            collect, use, disclose, and safeguard your information when you
            visit our website <strong>bharatx.vc</strong>, use our services, or
            interact with us in any way.
          </motion.p>

          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3"
          >
            <Lock className="text-green-600" size={28} /> 1. Information We
            Collect
          </motion.h2>

          <motion.p variants={fadeInUp}>
            We may collect the following types of information:
          </motion.p>

          <motion.ul
            variants={fadeInUp}
            className="list-disc pl-6 space-y-2 mt-4"
          >
            <li>
              <strong>Personal Information</strong>: name, email address, phone
              number, company name, job title (when you submit forms, inquiries,
              or partnership requests)
            </li>
            <li>
              <strong>Business Information</strong>: company CIN, GSTIN, PAN,
              registered address (only when required for compliance or due
              diligence)
            </li>
            <li>
              <strong>Technical Data</strong>: IP address, browser type, device
              information, pages visited, time spent, referral source
            </li>
            <li>
              <strong>Cookies & Tracking</strong>: session cookies, analytics
              cookies (Google Analytics), preference cookies
            </li>
          </motion.ul>

          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3"
          >
            <FileText className="text-green-600" size={28} /> 2. How We Use Your
            Information
          </motion.h2>

          <motion.ul variants={fadeInUp} className="list-disc pl-6 space-y-2">
            <li>
              Respond to inquiries, partnership requests, and investor outreach
            </li>
            <li>Perform KYC / due diligence (where legally required)</li>
            <li>Improve website functionality and user experience</li>
            <li>
              Send service updates, newsletters, or legal notices (you can
              unsubscribe)
            </li>
            <li>
              Comply with Indian laws (Companies Act, IT Act, DPDP Act 2023,
              SEBI regulations where applicable)
            </li>
          </motion.ul>

          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3"
          >
            <Users className="text-green-600" size={28} /> 3. Sharing Your
            Information
          </motion.h2>

          <motion.p variants={fadeInUp}>
            We do <strong>not</strong> sell your personal data. We may share
            information only:
          </motion.p>

          <motion.ul
            variants={fadeInUp}
            className="list-disc pl-6 space-y-2 mt-4"
          >
            <li>
              With service providers (cloud hosting, analytics, email service)
              under strict confidentiality
            </li>
            <li>
              With legal & financial advisors during due diligence / fundraising
            </li>
            <li>When required by law, court order, or government authority</li>
            <li>
              In case of merger, acquisition, or sale of assets (with notice
              where feasible)
            </li>
          </motion.ul>

          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3"
          >
            <Clock className="text-green-600" size={28} /> 4. Data Retention
          </motion.h2>

          <motion.p variants={fadeInUp}>
            We retain personal information only for as long as necessary to
            fulfill the purposes outlined in this policy or as required by law
            (typically 5–7 years for financial / compliance records).
          </motion.p>

          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3"
          >
            <ShieldCheck className="text-green-600" size={28} /> 5. Your Rights
          </motion.h2>

          <motion.p variants={fadeInUp} className="mb-4">
            Subject to applicable law (including the Digital Personal Data
            Protection Act, 2023), you may have the right to:
          </motion.p>

          <motion.ul variants={fadeInUp} className="list-disc pl-6 space-y-2">
            <li>Access, correct, or delete your personal data</li>
            <li>Withdraw consent (where processing is consent-based)</li>
            <li>Grieve / complain to the Data Protection Board of India</li>
          </motion.ul>

          <motion.p variants={fadeInUp} className="mt-6">
            To exercise these rights, contact us at{" "}
            <strong>privacy@bharatx.vc</strong>.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            transition={{ delay: 0.4 }}
            className="mt-16 p-6 bg-green-50 rounded-2xl border border-green-100"
          >
            <p className="text-green-800 font-medium">
              Questions or concerns? Reach out to our Grievance Officer:
            </p>
            <p className="mt-3 text-gray-700">
              Email: <strong>grievance@bharatx.vc</strong>
              <br />
              Address: H. No. 136, Beladih, Cherki Bazar, Gaya, Bihar – 824237
            </p>
          </motion.div>
        </motion.div>
      </main>
    </section>
  );
}
