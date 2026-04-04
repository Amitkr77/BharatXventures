// pages/terms.tsx  (or app/terms/page.tsx)
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Scale, AlertTriangle, CheckCircle2, ArrowRight } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
  
};

export default function TermsOfService() {
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
            <FileText size={18} />
            Legal Agreement
          </div>
          <h1 className="text-4xl lg:text-5xl font-black mb-6 leading-tight">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-600">
            Last updated: March 7, 2026
          </p>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="prose prose-lg max-w-none text-gray-700">
          <motion.p variants={fadeInUp}>
            These Terms of Service (“Terms”) govern your access to and use of the website <strong>bharatx.vc</strong> and any related services provided by Bharatx Ventures Private Limited (“we”, “us”, “our”). By accessing or using the Site, you agree to be bound by these Terms.
          </motion.p>

          <motion.h2 variants={fadeInUp} className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
            <Scale className="text-green-600" size={28} /> 1. Use of the Site
          </motion.h2>

          <motion.p variants={fadeInUp}>
            You may use the Site only for lawful purposes and in accordance with these Terms. You agree not to:
          </motion.p>

          <motion.ul variants={fadeInUp} className="list-disc pl-6 space-y-2 mt-4">
            <li>Use the Site in any way that violates any applicable Indian or international law</li>
            <li>Attempt to gain unauthorized access to any part of the Site</li>
            <li>Interfere with or disrupt the Site or servers</li>
            <li>Copy, reproduce, distribute, or create derivative works without permission</li>
            <li>Engage in data mining, scraping, or automated collection of content</li>
          </motion.ul>

          <motion.h2 variants={fadeInUp} className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
            <AlertTriangle className="text-green-600" size={28} /> 2. No Financial Advice
          </motion.h2>

          <motion.p variants={fadeInUp}>
            Nothing on the Site constitutes financial, investment, legal, tax, or other professional advice. Any information provided is for general informational purposes only. You should consult your own qualified advisors before making any investment or business decision.
          </motion.p>

          <motion.p variants={fadeInUp} className="mt-4 font-medium">
            We do not guarantee the accuracy, completeness, or timeliness of any content on the Site.
          </motion.p>

          <motion.h2 variants={fadeInUp} className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
            <CheckCircle2 className="text-green-600" size={28} /> 3. Intellectual Property
          </motion.h2>

          <motion.p variants={fadeInUp}>
            All content on the Site (text, graphics, logos, images, software) is owned by Bharatx Ventures or its licensors and protected by copyright, trademark, and other intellectual property laws.
          </motion.p>

          <motion.p variants={fadeInUp} className="mt-4">
            You are granted a limited, non-exclusive, non-transferable license to view and use the Site for personal, non-commercial purposes only.
          </motion.p>

          <motion.h2 variants={fadeInUp} className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
            <FileText className="text-green-600" size={28} /> 4. Limitation of Liability
          </motion.h2>

          <motion.p variants={fadeInUp}>
            To the fullest extent permitted by law, Bharatx Ventures shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Site, even if advised of the possibility of such damages.
          </motion.p>

          <motion.h2 variants={fadeInUp} className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
            <ArrowRight className="text-green-600" size={28} /> 5. Contact Us
          </motion.h2>

          <motion.p variants={fadeInUp}>
            If you have any questions about these Terms, please contact:
          </motion.p>

          <motion.div
            variants={fadeInUp}
            transition={{ delay: 0.4 }}
            className="mt-6 p-6 bg-green-50 rounded-2xl border border-green-100"
          >
            <p className="text-green-800 font-medium">
              Email: legal@bharatx.vc<br />
              Address: H. No. 136, Beladih, Cherki Bazar, Gaya, Bihar – 824237, India
            </p>
          </motion.div>

          <motion.p variants={fadeInUp} className="mt-12 text-sm text-gray-500 text-center">
            © 2026 Bharatx Ventures Private Limited. All rights reserved.
          </motion.p>
        </motion.div>
      </main>
    </section>
  );
}