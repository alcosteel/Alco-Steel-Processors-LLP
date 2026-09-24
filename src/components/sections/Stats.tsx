"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2, Globe2, Factory, Users2, PackageCheck } from "lucide-react";

const stats = [
  {
    icon: <Factory className="w-8 h-8 text-accent" />,
    value: "1,44,000+",
    label: "Annual Processing Capacity (Tons)",
    description: "Scaled to support large recurring orders"
  },
  {
    icon: <Users2 className="w-8 h-8 text-accent" />,
    value: "500+",
    label: "Industrial Customers Served",
    description: "Trusted by manufacturers and OEMs"
  },
  {
    icon: <Building2 className="w-8 h-8 text-accent" />,
    value: "25+",
    label: "Years of Experience",
    description: "Deep roots in the steel processing industry"
  },
  {
    icon: <PackageCheck className="w-8 h-8 text-accent" />,
    value: "1,44,000+",
    label: "Tons Processed Annually",
    description: "Consistent throughput across our processing lines"
  },
  {
    icon: <Globe2 className="w-8 h-8 text-accent" />,
    value: "50+",
    label: "Cities Served",
    description: "Processing dispatch network across India"
  }
];

export default function Stats() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-8 bg-slate-50 border border-slate-100 rounded-sm hover:shadow-xl transition-all group"
            >
              <div className="mb-4 transform transition-transform group-hover:scale-110 duration-300">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-bold text-industrial-navy mb-2 font-heading">
                {stat.value}
              </h3>
              <p className="text-lg font-black text-industrial-navy mb-2">
                {stat.label}
              </p>
              <p className="text-sm font-medium text-slate-600">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
