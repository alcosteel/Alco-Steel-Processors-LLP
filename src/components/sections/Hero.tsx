"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero_steel_factory_1778165098150.png"
          alt="Alco Steel Factory"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-industrial-navy/60 via-transparent to-industrial-navy/80" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-accent uppercase bg-white/10 backdrop-blur-sm border-l-2 border-accent">
              Established Excellence in Steel
            </span>
            <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 leading-tight font-heading tracking-tighter">
              Strength. Durability.<br />
              <span className="text-accent italic">Excellence.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed max-w-3xl mx-auto font-light">
              Trusted supplier and processor of high-quality PPGI, PPGL, and color-coated steel products. Engineered for modern industrial infrastructure and sustainable growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/products"
                className="group flex items-center justify-center px-10 py-5 bg-accent text-white font-black uppercase tracking-widest rounded-sm transition-all hover:bg-orange-600 shadow-2xl"
              >
                Explore Products
                <ChevronRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/inquiry"
                className="flex items-center justify-center px-10 py-5 bg-white/10 backdrop-blur-md text-white border border-white/20 font-black uppercase tracking-widest rounded-sm transition-all hover:bg-white/20"
              >
                Request Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Industrial Texture Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
      
      {/* Subtle Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
