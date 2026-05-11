"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Applications", href: "/applications" },
  { name: "Infrastructure", href: "/infrastructure" },
  { name: "Quality", href: "/quality" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isSolidPage = pathname === "/inquiry" || pathname === "/terms" || pathname === "/privacy";
  const isSolid = isScrolled || isSolidPage;

  return (
    <header
      className={cn(
        "z-50 transition-all duration-300",
        isSolidPage ? "sticky top-0 bg-white shadow-md py-1" : "fixed top-0 left-0 right-0",
        !isSolidPage && (isSolid ? "bg-white shadow-lg py-1" : "bg-transparent py-5")
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center">
          {/* Left: Logo */}
          <div className="flex-1 flex justify-start">
            <Link href="/" className="flex items-center">
              <div className="relative h-5 w-10 md:h-10 md:w-20 lg:h-10 lg:w-20 transition-all duration-300 transform hover:scale-105 overflow-visible">
                <Image
                  src="/alco-logo-transparent.png"
                  alt="Alco Steel Processors LLP Logo"
                  fill
                  className={cn(
                    "object-contain transition-all duration-300 scale-125 md:scale-150",
                    !isSolid && "brightness-0 invert"
                  )}
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Center: Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center space-x-6 xl:space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-[15px] font-bold transition-colors hover:text-accent tracking-tight whitespace-nowrap",
                  isSolid
                    ? pathname === link.href ? "text-accent" : "text-industrial-navy"
                    : pathname === link.href ? "text-white" : "text-white/90"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right: Actions */}
          <div className="flex-1 flex justify-end items-center gap-4">
            <Link
              href="/inquiry"
              className={cn(
                "hidden lg:block px-8 py-3 rounded-sm font-black uppercase tracking-tighter transition-all duration-300 transform hover:scale-105",
                isSolid
                  ? "bg-industrial-navy text-white hover:bg-industrial-blue shadow-xl"
                  : "bg-white text-industrial-navy hover:bg-gray-100"
              )}
            >
              Get Quote
            </Link>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className={isSolid ? "text-industrial-navy" : "text-white"} size={28} />
              ) : (
                <Menu className={isSolid ? "text-industrial-navy" : "text-white"} size={28} />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-industrial-navy border-t border-white/10"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white/90 text-lg font-medium hover:text-accent"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/inquiry"
                className="bg-accent text-white px-6 py-3 rounded-sm font-bold text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Quote
              </Link>
              <div className="pt-4 border-t border-white/10 flex flex-col space-y-2">
                <div className="flex items-center text-white/70 text-sm">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>+91 70394 20963</span>
                </div>
                <div className="flex items-center text-white/70 text-sm">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>marketingalcosteel@gmail.com</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
