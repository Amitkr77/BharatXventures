"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function GoToTop() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Scroll progress (0 → 1)
  const { scrollYProgress } = useScroll();

  // Smooth animation
  const progress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

const size = 64; // w-16 h-16
const strokeWidth = 3;

  // Show button after scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Circle settings
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  // ✅ Progress ring animation (FIXED)
  const dashOffset = useTransform(
    progress,
    [0, 1],
    [circumference, 0]
  );

  // ✅ Background color changes with scroll
  const bgColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["rgba(138, 234, 121, 0.56)", "rgb(13, 197, 28)"]
  );

   // 🌗 Glass background intensity (scroll based)
 /* const glassBg = useTransform(
    scrollYProgress,
    [0, 1],
    ["rgba(255,255,255,0.1)", "rgba(255,255,255,0.25)"]
  );*/

  return (
    <motion.button
      onClick={scrollToTop}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: showBackToTop ? 1 : 0,
        scale: showBackToTop ? 1 : 0.8,
      }}
      transition={{ duration: 0.1 }}
      style={{ backgroundColor: bgColor }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full shadow-lg focus:outline-none"
      aria-label="Back to top"
    >
      {/* SVG Progress Ring */}
      <svg className="absolute top-0 left-0 w-full h-full rotate-[-90deg]">
        {/* Background circle */}
        <circle
          cx="50%"
          cy="50%"
          r={radius}
          stroke="rgba(255, 255, 255, 0.99)"
          strokeWidth="4"
          fill="transparent"
        />

        {/* Animated progress */}
        <motion.circle
          cx="50%"
          cy="50%"
          r={radius}
          stroke="rgb(8, 199, 33)"
          strokeWidth="4"
          fill="transparent"
          strokeDasharray={circumference}
          style={{ strokeDashoffset: dashOffset }}
          strokeLinecap="round"
        />
      </svg>

      {/* Arrow Icon */}
      <ArrowUp size={24} className="text-white relative z-10" />
    </motion.button>
  );
}