"use client";

import React, { useState, useEffect }  from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Building2, ArrowRight, Phone } from "lucide-react";
import { usePathname } from "next/navigation";



export default function InstitutionalHeader() {
  const pathname = usePathname(); 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isSpecialPage =
  pathname === "/institutional/institute-services" ||
  pathname === "/institutional/institute-get-in-touch";

  const isActive = (path) =>
    pathname === path || (path !== "/" && pathname.startsWith(path));

  const toggleMobileMenu = () =>
    setIsMobileMenuOpen(!isMobileMenuOpen);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
  if (isMobileMenuOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [isMobileMenuOpen]);

  const navItems = [
  { name: "Home", path: "/institutional/institute-home" },
  { name: "Services", path: "/institutional/institute-services" },
  { name: "Framework", path: "/institutional/institute-framework" },
  { name: "Portfolio", path: "/institutional/institute-portfolio" },
  { name: "About Us", path: "/institutional/institute-about" },
  { name: "Contact Us", path: "/institutional/institute-contact" },
];
  
   const extraItems = [
  { name: "BACK TO MAIN", path: "/", icon: Building2, primary: false },
  { name: "GET IN TOUCH", path: "/institutional/institute-get-in-touch", icon: Phone, primary: true },
];

  return (
    <>
   <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "h-[80px] bg-white/90 backdrop-blur-md shadow-md border-b border-slate-100"
          : "h-[80px] bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-1 flex items-center justify-between">
        
        {/* 🔹 Logo */}
        <Link href="/institutional/institute-home" className="flex items-center gap-3">
            <div className="flex items-center gap-3">
               <img
                  src="/vlogo.png"   //  logo in public folder
                  alt="Logo"
                  width={80}
                  height={80}
                  className={`object-contain ${
                     scrolled || !isSpecialPage
                      ? ""
                      : "brightness-0 invert"
                  }`}
                />
            </div>
        </Link>    

        {/* 🔹 Nav Links */}
        <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`relative text-2sm font-bold transition-colors duration-100 ${
                    active
                      ? "text-green-500"
                      : isSpecialPage && !scrolled
                      ? "text-white hover:text-green-400"
                      : "text-gray-700 hover:text-green-400"
                  }`}
                >
                  {item.name}
                  {active && (
                    <motion.span
                      layoutId="underline"
                      className="absolute left-0 bottom-[-2px] w-full h-0.5 bg-green-500 rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

        {/* 🔹 CTA Buttons */}
        <div className="flex items-center gap-4">
          
          {/* Back to Main Website */}
          <Link href="/">
              <button
                className={`hidden lg:flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
                  pathname === "/"
                    ? "bg-green-600 text-white shadow-md"
                    : "bg-white text-slate-700 border-slate-200 hover:border-white hover:text-white hover:bg-green-500 hover:scale-105"
                }`}
              >
                <Building2 size={16} />
                <span>BACK TO MAIN</span>
              </button>
            </Link>

          {/* Primary CTA */}
          <Link href="/institutional/institute-get-in-touch">
              <button
                className={`hidden lg:flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
                  pathname === "/institutional/institute-get-in-touch"
                    ? "bg-green-600 text-white shadow-md shadow-green-200/40"
                    : "bg-white text-gray-700 border-slate-200 hover:border-white hover:text-white hover:bg-green-500 hover:scale-105"
                }`}
              >
                <Phone size={16} />
                <span>GET IN TOUCH</span>
              </button>
            </Link>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden focus:outline-none transition-colors ${
                isSpecialPage && !scrolled
                  ? "text-white"
                  : "text-gray-700"
              }`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </header>

    {/* Mobile Slide-in Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[90] lg:hidden"
              onClick={toggleMobileMenu}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-[100] lg:hidden overflow-y-auto"
            >
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="size-10 flex items-center justify-center rounded-lg">
                      <img
                        src="/vlogo.png"
                        alt="Logo"
                        className="h-6 w-auto object-contain"
                      />
                    </div>
                    <h1 className="text-green-700 text-xl font-bold">Bharatx</h1>
                  </div>
                  <button onClick={toggleMobileMenu} aria-label="Close menu">
                    <X size={28} className="text-gray-700" />
                  </button>
                </div>
              </div>

              <div className="p-6 flex flex-col gap-6">
                <div className="flex justify-center">
                  <p className="text-xs font-semibold text-green-600 uppercase tracking-wider px-4 py-1.5 bg-green-50 rounded-full border border-green-200">
                    Menu
                  </p>
                </div>
                <div className="flex justify-center mb-6">
                  <div className="w-60 h-[2px] bg-gradient-to-r from-transparent via-slate-300 to-transparent rounded-full" />
                </div>
                {/* Main Nav */}
                {navItems.map((item) => {
                  const active = isActive(item.path);
                  return (
                    <Link
                      key={item.name}
                      href={item.path}
                      onClick={toggleMobileMenu}
                      className={`flex items-center justify-between p-2 text-lg font-medium ${
                        active ? "text-green-600 border rounded-full bg-green-100 border-transparent" : "text-gray-800 border-transparent hover:bg-gray-300 rounded-full"
                      }`}
                    >
                      {item.name}
                      {active && <ArrowRight size={20} />}
                    </Link>
                  );
                })}

                <div className="h-px bg-gray-200 my-4" />

                {/* Extra Items */}
                <div className="border-t border-slate-100">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                    Quick Access
                  </p>

                  <div className="grid grid-cols-2 gap-3">
                    {extraItems.map((item, index) => {
                      const active = isActive(item.path);
                      const Icon = item.icon;

                      return (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 + index * 0.1 }}
                        >
                          <Link
                            href={item.path}
                            onClick={toggleMobileMenu}
                            className="block"
                          >
                            <div
                              className={`p-4 rounded-xl border flex flex-col items-center justify-center gap-2 transition-all group
                              ${
                                active
                                  ? "bg-green-50 border-green-200"
                                  : "bg-slate-50 border-slate-100 hover:border-green-200 hover:bg-green-50/50"
                              }`}
                            >
                              {/* Optional Icon */}
                              <Icon
                                size={22}
                                className={`transition-colors ${
                                  active
                                    ? "text-green-600"
                                    : "text-slate-400 group-hover:text-green-600"
                                }`}
                              />

                              <span
                                className={`text-xs font-semibold text-center ${
                                  active
                                    ? "text-green-700"
                                    : "text-slate-600 group-hover:text-green-700"
                                }`}
                              >
                                {item.name}
                              </span>
                            </div>
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}