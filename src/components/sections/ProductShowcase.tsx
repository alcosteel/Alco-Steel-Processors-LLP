"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const products = [
  {
    title: "PPGL Coils",
    description: "Advanced aluminum-zinc alloy coated steel from JSW, offering 4x longer life and superior heat reflectivity.",
    image: "/images/product_ppgl.png",
    href: "/products/ppgl",
    features: ["Yield 550 MPA", "Solar Reflective", "AZ70-AZ150 Coating"]
  },
  {
    title: "Prisma® Architectural",
    description: "Premium pre-finished steel by Tata Steel with Galvalloy® coating for extreme durability and aesthetics.",
    image: "/images/prisma_architectural.png",
    href: "/products/prisma",
    features: ["40 Year Guarantee", "RC5+ Corrosion Resistance", "Galvalloy® Technology"]
  },
  {
    title: "Color Coated Sheets",
    description: "Versatile industrial solutions in a wide range of RAL colors with advanced UV resistant coatings.",
    image: "/images/product_sheets.png",
    href: "/products/color-coated",
    features: ["RAL Color Palette", "UV Resistant", "Custom Profiling"]
  },
  {
    title: "PEB Solutions",
    description: "Modern pre-engineered building systems designed for rapid construction and structural efficiency.",
    image: "/images/peb_application.png",
    href: "/products/peb",
    features: ["345 MPa Primary Frame", "Rapid Assembly", "MBMA Standards"]
  }
];

export default function ProductShowcase() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-4">
              Premium Solutions
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-industrial-navy font-heading leading-tight">
              Our Core Steel Products
            </h3>
          </div>
          <Link 
            href="/products" 
            className="group flex items-center text-industrial-navy font-bold border-b-2 border-accent pb-1 hover:text-accent transition-colors"
          >
            View All Products
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="overflow-hidden border-none shadow-lg group">
                <CardContent className="p-0 flex flex-col lg:flex-row h-full">
                  <div className="relative w-full lg:w-2/5 min-h-[250px] overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="w-full lg:w-3/5 p-8 flex flex-col justify-between bg-white">
                    <div>
                      <h4 className="text-2xl font-bold text-industrial-navy mb-4 font-heading">
                        {product.title}
                      </h4>
                      <p className="text-slate-600 mb-6 leading-relaxed">
                        {product.description}
                      </p>
                      <ul className="space-y-2 mb-8">
                        {product.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-sm text-slate-500">
                            <span className="w-1.5 h-1.5 bg-accent mr-2 rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link
                      href={product.href}
                      className="inline-flex items-center text-industrial-blue font-bold hover:text-accent transition-colors"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
