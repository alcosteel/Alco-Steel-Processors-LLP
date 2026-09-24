"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "Slitting Services",
    description: "High-precision slitting of steel coils into narrower strip widths with exact tight tolerances and clean burr-free edges.",
    image: "/images/service_slitting.jpg",
    href: "/services",
    features: ["Tight Width Tolerances", "CRCA, HR, GP, GI & PPGL", "High-Speed Slitting Lines"]
  },
  {
    title: "Cut-to-Length (CTL)",
    description: "Automated cut-to-length processing converting coils into flat, precision-leveled steel sheets tailored to length requirements.",
    image: "/images/service_ctl.jpg",
    href: "/services",
    features: ["Custom Sheet Lengths", "Precision Levelling & Flatness", "Burr-Free Sheared Edges"]
  },
  {
    title: "Shearing Services",
    description: "Accurate heavy-duty sheet shearing delivering crisp, square cuts for fabrication, stamping, and OEM manufacturing.",
    image: "/images/service_shearing.jpg",
    href: "/services",
    features: ["Heavy Hydraulic Shearing", "Square Cut Clean Edges", "Quality Inspection Verified"]
  },
  {
    title: "Coil Processing",
    description: "Complete industrial coil handling, uncoiling, recoiling, and toll processing supported by overhead EOT crane capacity.",
    image: "/images/service_coil_processing.jpg",
    href: "/services",
    features: ["Full Material Traceability", "Up to 15-Ton Coil Handling", "Toll & Job Work Processing"]
  },
  {
    title: "Custom Steel Conversion Solutions",
    description: "Tailored coil-to-sheet and coil-to-strip conversion engineered around your exact manufacturing and production schedules.",
    image: "/images/service_custom_conversion.jpg",
    href: "/services",
    features: ["Custom Widths & Pack Sizes", "OEM Specific Specifications", "Protective Packaging & Dispatch"]
  }
];

export default function ProductShowcase() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-4 font-heading">
              Specialized Services
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-industrial-navy font-heading leading-tight">
              Our Specialized Processing Services
            </h3>
          </div>
          <Link
            href="/services"
            className="group flex items-center text-industrial-navy font-bold border-b-2 border-accent pb-1 hover:text-accent transition-colors"
          >
            View All Services
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={index === 3 || index === 4 ? "lg:col-span-1" : ""}
            >
              <Card className="overflow-hidden border-none shadow-lg group h-full flex flex-col hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-0 flex flex-col h-full">
                  <div className="relative w-full h-56 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="w-full p-6 flex flex-col justify-between flex-grow bg-white">
                    <div>
                      <h4 className="text-xl font-bold text-industrial-navy mb-3 font-heading">
                        {service.title}
                      </h4>
                      <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-xs text-slate-500 font-medium">
                            <span className="w-1.5 h-1.5 bg-accent mr-2 rounded-full shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link
                      href={service.href}
                      className="inline-flex items-center text-sm text-industrial-blue font-bold hover:text-accent transition-colors mt-auto pt-4 border-t border-slate-100"
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
