"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Building2, Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 50); // trigger after 50px scroll
  };

  window.addEventListener("scroll", handleScroll);
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
    /*{ name: "Events", path: "/events" },
    { name: "Insights", path: "/insights" },*/
  ];

  const extraLinks = [
    { name: "Governance", path: "/governance" },
    { name: "Contact", path: "/contact-us" },
    { name: "Institutions", path: "/institutional/institute-home" },
  ];

  const isActive = (path) =>
    pathname === path || (path !== "/" && pathname.startsWith(path));

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-md border-b border-gray-200 t"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3">
            <div className="flex items-center gap-3">
               <img
                  src="/vlogo.png"   //  logo in public folder
                  alt="Logo"
                  width={80}
                  height={80}
                  className="object-contain obejc-top"
                />
            </div>
        </Link>

            {/*<div className="flex flex-col">
              <h1 className="text-green-700 text-xl font-bold leading-none tracking-tight">
                Bharatx Ventures
              </h1>
              <span className="text-[10px] text-green-700 font-bold tracking-[0.25em] uppercase mt-0.5">
                Private Limited
              </span>
            </div>*/}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`relative text-lg font-bold transition-colors text-shadow-sm duration-200 ${
                    active
                       ? "text-green-700"
                        : pathname === "/"
                          ? (scrolled ? "text-gray-400 hover:text-green-500" : "text-white hover:text-green-500")
                          : "text-gray-400 hover:text-green-500"
                    }`}
                >
                  {link.name}
                  {active && (
                    <motion.span
                      layoutId="underline"
                      className="absolute left-0 bottom-[-6px] w-full h-0.5 bg-green-700 rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          {/* <div className="hidden lg:flex items-center gap-4">
            {extraLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link key={link.name} href={link.path}>
                  <button
                    className={`px-5 h-10 rounded-lg text-sm font-semibold transition-all duration-200 ${
                      active
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-200/40'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {link.name}
                  </button>
                </Link>
              );
            })}
          </div> */}

          <div className="flex items-center gap-3"> 
            <Link href="/governance">
              <button
                className={`hidden md:flex items-center justify-center px-5 h-10 rounded-lg text-lg transition-colors duration-200 ${
                  pathname === "/governance"
                    ? "bg-green-600 text-white"
                    : "bg-white text-gray-400 hover:bg-green-500 hover:text-white"
                }`}
              >
                Governance
              </button>
            </Link>
            <Link href="/contact-us">
              <button
                className={`flex items-center justify-center px-6 h-10 rounded-lg text-lg transition-all duration-200 ${
                  pathname === "/contact-us"
                    ? "bg-green-600 text-white shadow-md shadow-green-200/40"
                    : "bg-white text-gray-400 hover:bg-green-500 hover:text-white"
                }`}
              >
                Contact
              </button>
            </Link>
            <Link href="/institutional/institute-home">
              <button
                className={`flex items-center justify-center px-6 h-10 rounded-lg text-lg transition-all duration-200 ${
                  pathname === "/institutional/institute-home"
                    ? "bg-green-600 text-white shadow-md shadow-green-200/40"
                    : "bg-white text-gray-400 hover:bg-green-500 hover:text-white"
                }`}
              >
                Institutions
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
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
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
              onClick={toggleMobileMenu}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="size-10 bg-green-600 flex items-center justify-center rounded-lg">
                      <Building2 className="text-white" size={24} />
                    </div>
                    <h1 className="text-green-700 text-xl font-bold">Bharatx</h1>
                  </div>
                  <button onClick={toggleMobileMenu} aria-label="Close menu">
                    <X size={28} className="text-gray-700" />
                  </button>
                </div>
              </div>

              <div className="p-6 flex flex-col gap-6">
                {/* Main Nav */}
                {navLinks.map((link) => {
                  const active = isActive(link.path);
                  return (
                    <Link
                      key={link.name}
                      href={link.path}
                      onClick={toggleMobileMenu}
                      className={`flex items-center justify-between text-lg font-medium ${
                        active ? "text-green-600" : "text-gray-800"
                      }`}
                    >
                      {link.name}
                      {active && <ArrowRight size={20} />}
                    </Link>
                  );
                })}

                <div className="h-px bg-gray-200 my-4" />

                {/* Extra Links */}
                {extraLinks.map((link) => {
                  const active = isActive(link.path);
                  return (
                    <Link
                      key={link.name}
                      href={link.path}
                      onClick={toggleMobileMenu}
                      className={`flex items-center justify-between text-lg font-medium ${
                        active ? "text-green-600" : "text-gray-800"
                      }`}
                    >
                      {link.name}
                      {active && <ArrowRight size={20} />}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
