"use client";

import { React, useState }  from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Building2, ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";



export default function InstitutionalHeader() {
  const pathname = usePathname(); // ✅ DEFINE HERE
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // ✅ MOVE INSIDE COMPONENT
  const isActive = (path) =>
    pathname === path || (path !== "/" && pathname.startsWith(path));

  const toggleMobileMenu = () =>
    setIsMobileMenuOpen(!isMobileMenuOpen);

  const navItems = [
  { name: "Home", path: "/institutional/institute-home" },
  { name: "Services", path: "/institutional/services" },
  { name: "Framework", path: "/institutional/framework" },
  { name: "Portfolio", path: "/institutional/portfolio" },
  { name: "About Us", path: "/institutional/about" },
  { name: "Contact Us", path: "/institutional/contact" },
];
  
   const extraItems = [
    { name: "BACK TO MAIN", path: "/" },
    { name: "GET IN TOUCH", path: "/institutional/contact" },
  ];

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-0 flex items-center justify-between">
        
        {/* 🔹 Logo */}
        <Link href="/institutional/institute-home" className="flex items-center gap-3">
            <div className="flex items-center gap-3">
               <img
                  src="/vlogo.png"   //  logo in public folder
                  alt="Logo"
                  width={80}
                  height={80}
                  className="object-contain"
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
                  className={`relative text-sm font-bold transition-colors duration-200 ${
                    active
                      ? "text-green-700 font-bold"
                      : "text-gray-700 hover:text-green-500"
                  }`}
                >
                  {item.name}
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

        {/* 🔹 CTA Buttons */}
        <div className="flex items-center gap-4">
          
          {/* Back to Main Website */}
          <Link href="/">
              <button
                className={`flex items-center justify-center px-6 h-10 rounded-lg text-sm font-bold transition-all duration-200 ${
                  pathname === "/"
                    ? "bg-green-600 text-white shadow-md shadow-green-200/40"
                    : "bg-white text-gray-700 hover:bg-green-500"
                }`}
              >
                BACK TO MAIN
              </button>
            </Link>

          {/* Primary CTA */}
          <Link href="/institutional/contact">
              <button
                className={`flex items-center justify-center px-6 h-10 rounded-lg text-sm font-bold transition-all duration-200 ${
                  pathname === "/"
                    ? "bg-green-600 text-white shadow-md shadow-green-200/40"
                    : "bg-white text-gray-700 hover:bg-green-500"
                }`}
              >
                GET IN TOUCH
              </button>
            </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
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
                {navItems.map((item) => {
                  const active = isActive(item.path);
                  return (
                    <Link
                      key={item.name}
                      href={item.path}
                      onClick={toggleMobileMenu}
                      className={`flex items-center justify-between text-lg font-medium ${
                        active ? "text-green-600" : "text-gray-800"
                      }`}
                    >
                      {item.name}
                      {active && <ArrowRight size={20} />}
                    </Link>
                  );
                })}

                <div className="h-px bg-gray-200 my-4" />

                {/* Extra Items */}
                {extraItems.map((item) => {
                  const active = isActive(item.path);
                  return (
                    <Link
                      key={item.name}
                      href={item.path}
                      onClick={toggleMobileMenu}
                      className={`flex items-center justify-between text-lg font-medium ${
                        active ? "text-green-600" : "text-gray-800"
                      }`}
                    >
                      {item.name}
                      {active && <ArrowRight size={20} />}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
    
  );
}