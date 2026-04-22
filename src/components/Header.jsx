"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Globe, MapPin, Mail, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Routes that typically have dark hero images (White text initially)
  const lightTextRoutes = ["/service", "/project", "/industry", "/"];
  const requiresLightText = lightTextRoutes.includes(pathname);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger slightly earlier for smoother transition
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isInstitutional = pathname.startsWith("/institutional");
  if (isInstitutional) return null;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about-us" },
    { name: "Services", path: "/service" },
    { name: "Industries", path: "/industry" },
    { name: "Projects", path: "/project" },
    { name: "Partnership", path: "/partnership" },
  ];

  const extraLinks = [
    { name: "Governance", path: "/governance", icon: Globe },
    {
      name: "Institutions",
      path: "/institutional/institute-home",
      icon: MapPin,
    },
  ];

  const isActive = (path) =>
    pathname === path || (path !== "/" && pathname.startsWith(path));

  // --- Dynamic Styles ---

  // Text Color: White if on hero & not scrolled, else Dark
  const getNavTextColor = (active = false) => {
    if (active) return "text-green-500"; // Active is always green for consistency
    if (scrolled || !requiresLightText) return "text-slate-800";
    return "text-slate-100/90 hover:text-white"; // White on dark hero
  };

  const getNavLineClass = (active = false) => {
    if (active) return "bg-green-500";
    if (scrolled || !requiresLightText)
      return "bg-slate-800 group-hover:bg-green-500";
    return "bg-white group-hover:bg-green-500";
  };

  // Button Background Logic
  const getBtnBg = (primary = false) => {
    if (primary) {
      // Primary CTA is always Green (or White if strictly needed, but Green pops better)
      return "bg-green-600 text-white hover:bg-green-700 hover:shadow-[0_0_20px_rgba(22,163,74,0.4)]";
    }
    // Secondary Button
    if (scrolled || !requiresLightText) {
      return "bg-white text-slate-700 border-slate-200 hover:border-green-500 hover:text-green-600";
    }
    return "bg-white/10 backdrop-blur-md text-white border-white/30 hover:bg-white hover:text-slate-900";
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
          scrolled
            ? "h-18 bg-white/90 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.05)] border-b border-slate-100/50"
            : "h-28 bg-transparent border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-50 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="flex items-center gap-3"
            >
              {/* White bg container ensures logo is always visible on hero images */}
              <div
                className={`p-2.5 rounded-xl transition-colors duration-300 ${scrolled || !requiresLightText ? "bg-transparent" : "bg-white/10 backdrop-blur-sm"}`}
              >
                <img
                  src="/vlogo.png"
                  alt="Bharatx Logo"
                  className={`h-18 w-auto object-contain ${scrolled ? "h-10" : "h-8"} ${scrolled || !requiresLightText ? "" : "brightness-0 invert"}`} // Invert color if on dark hero
                  width={100}
                  height={100}
                />
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className="group relative px-5 py-2 overflow-hidden"
                >
                  <span
                    className={`relative z-10 text-sm font-semibold tracking-tight transition-colors duration-300 ${getNavTextColor(active)}`}
                  >
                    {link.name}
                  </span>
                  {/* Animated Underline */}
                  <motion.span
                    className={`absolute bottom-1 left-0 h-[2px] w-0 rounded-full transition-all duration-300 ease-out group-hover:w-full ${getNavLineClass(active)}`}
                    initial={false}
                    animate={{ width: active ? "100%" : "0%" }}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {extraLinks.map((link) => {
              const active = isActive(link.path);
              const Icon = link.icon;
              return (
                <Link key={link.name} href={link.path}>
                  <button
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold scale-100 hover:scale-105 transition-all duration-300 border ${
                      active
                        ? "bg-green-600 text-white border-green-600 shadow-md"
                        : getBtnBg()
                    }`}
                  >
                    <Icon size={16} />
                    <span>{link.name}</span>
                  </button>
                </Link>
              );
            })}

            <Link href="/contact-us">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 shadow-lg border ${
                  pathname === "/contact-us"
                    ? "bg-green-600 text-white shadow-md"
                    : getBtnBg(false)
                }`}
              >
                Contact Us{" "}
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`lg:hidden relative z-50 p-2 rounded-full transition-colors ${scrolled || !requiresLightText ? "text-slate-800" : "text-white"}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={26} strokeWidth={2.5} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={26} strokeWidth={2.5} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      {/* Mobile Slide-in Glass Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 lg:hidden"
              onClick={toggleMobileMenu}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", ease: "anticipate", duration: 0.5 }}
              className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-50 lg:hidden overflow-hidden flex flex-col shadow-2xl"
            >
              {/* Decor Header */}
              <div className="bg-slate-900 p-8 pb-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                      <img
                        src="/vlogo.png"
                        alt="Logo"
                        className="h-6 w-auto brightness-0 invert"
                      />
                    </div>
                    <div>
                      <h1 className="text-white font-bold text-xl tracking-tight">
                        BHARATX
                      </h1>
                      <p className="text-slate-400 text-xs uppercase tracking-widest">
                        Ventures
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={toggleMobileMenu}
                    className="p-2 -mr-2 text-white/80 hover:text-white"
                  >
                    <X size={28} strokeWidth={2} />
                  </button>
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto px-6 py-6 bg-white">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-6">
                  Menu
                </p>

                <div className="flex flex-col gap-2">
                  {navLinks.map((link, index) => {
                    const active = isActive(link.path);
                    return (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 + 0.1 }}
                      >
                        <Link
                          href={link.path}
                          onClick={toggleMobileMenu}
                          className={`flex items-center justify-between p-4 rounded-xl transition-all group ${
                            active
                              ? "bg-green-50 text-green-700 font-bold border border-green-100"
                              : "text-slate-600 hover:bg-slate-50 border border-transparent hover:border-slate-100"
                          }`}
                        >
                          <span>{link.name}</span>
                          {active && (
                            <ArrowRight size={18} className="text-green-600" />
                          )}
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Quick Actions Grid */}
                <div className="mt-10 pt-8 border-t border-slate-100">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                    Quick Access
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {extraLinks.map((link, index) => {
                      const Icon = link.icon;
                      return (
                        <motion.div
                          key={link.name}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 + index * 0.1 }}
                        >
                          <Link
                            href={link.path}
                            onClick={toggleMobileMenu}
                            className="block"
                          >
                            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex flex-col items-center justify-center gap-2 hover:border-green-200 hover:bg-green-50/50 transition-all group">
                              <Icon
                                size={24}
                                className="text-slate-400 group-hover:text-green-600 transition-colors"
                              />
                              <span className="text-xs font-semibold text-slate-600 group-hover:text-green-700">
                                {link.name}
                              </span>
                            </div>
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Bottom Footer inside Menu */}
              <div className="p-6 bg-slate-50 border-t border-slate-100">
                <Link href="/contact-us" onClick={toggleMobileMenu}>
                  <button className="w-full bg-slate-900 text-white font-bold py-3.5 rounded-xl hover:bg-green-600 transition-colors shadow-lg shadow-slate-200 flex items-center justify-center gap-2">
                    Start a Conversation <ArrowRight size={18} />
                  </button>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
