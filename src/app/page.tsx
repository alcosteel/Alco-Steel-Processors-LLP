import React from "react";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import ProductShowcase from "@/components/sections/ProductShowcase";
import { ArrowRight, ShieldCheck, Zap, Globe, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Hero />

      {/* Trust/Stats Section */}
      <Stats />

      {/* About Preview Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 relative">
              <div className="relative z-10 rounded-sm overflow-hidden shadow-2xl">
                <Image
                  src="/images/surface_inspection.png"
                  alt="Industrial Infrastructure"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-slate-100 -z-0 hidden md:block" />
              <div className="absolute -top-8 -left-8 w-32 h-32 border-l-4 border-t-4 border-accent -z-0 hidden md:block" />
            </div>
            
            <div className="w-full lg:w-1/2">
              <span className="text-sm font-bold tracking-widest text-accent uppercase mb-4 block font-heading">
                About Alco Steel
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-industrial-navy mb-8 font-heading leading-tight">
                Quality Steel. Reliable Supply. <br />
                <span className="text-accent">Trusted Partnership.</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Alco Steel Processors LLP is a trusted supplier and processor of high-quality flat steel products. With a strong focus on reliability, quality, and customer satisfaction, we provide premium Pre-Painted Steel (PPGI / PPGL) and Color Coated Steel solutions to a wide range of industries.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                <div className="flex items-start space-x-3">
                  <ShieldCheck className="text-accent w-6 h-6 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-industrial-navy">Quality Assurance</h4>
                    <p className="text-sm text-slate-500">Products from reputed manufacturers</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Globe className="text-accent w-6 h-6 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-industrial-navy">Reliable Supply</h4>
                    <p className="text-sm text-slate-500">Strong distribution network</p>
                  </div>
                </div>
              </div>

              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-4 bg-industrial-navy text-white font-bold rounded-sm transition-all hover:bg-industrial-blue shadow-lg"
              >
                Explore Our Strengths
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <ProductShowcase />

      {/* Why Choose Us */}
      <section className="py-24 bg-industrial-navy text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-4 font-heading">
              Our Commitment
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
              Why Industry Leaders Trust Us
            </h3>
            <p className="text-white/60 text-lg">
              At Alco Steel Processors LLP, our mission is to provide customers with high-quality steel products, dependable service, and long-term business relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 border border-white/10 bg-white/5 backdrop-blur-sm rounded-sm hover:border-accent transition-colors">
              <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                <ShieldCheck className="text-accent w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold mb-4 font-heading">Quality Assurance</h4>
              <p className="text-white/60 text-sm leading-relaxed">
                Products sourced from reputed steel manufacturers and tested for consistency and durability.
              </p>
            </div>
            <div className="p-8 border border-white/10 bg-white/5 backdrop-blur-sm rounded-sm hover:border-accent transition-colors">
              <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                <Globe className="text-accent w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold mb-4 font-heading">Reliable Supply</h4>
              <p className="text-white/60 text-sm leading-relaxed">
                Strong distribution network ensuring timely delivery across markets and segments.
              </p>
            </div>
            <div className="p-8 border border-white/10 bg-white/5 backdrop-blur-sm rounded-sm hover:border-accent transition-colors">
              <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                <Users className="text-accent w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold mb-4 font-heading">Customer-Centric</h4>
              <p className="text-white/60 text-sm leading-relaxed">
                We work closely with customers to provide solutions that match their exact requirements.
              </p>
            </div>
            <div className="p-8 border border-white/10 bg-white/5 backdrop-blur-sm rounded-sm hover:border-accent transition-colors">
              <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                <Zap className="text-accent w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold mb-4 font-heading">Industry Expertise</h4>
              <p className="text-white/60 text-sm leading-relaxed">
                Deep understanding of steel products and their applications across diverse industrial sectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold text-industrial-navy font-heading">
                Diverse Applications
              </h2>
              <p className="text-lg text-slate-500 mt-6">
                Our products are widely used across various industries, from construction to high-end manufacturing.
              </p>
            </div>
            <Link 
              href="/applications" 
              className="px-8 py-3 bg-industrial-navy text-white font-bold rounded-sm hover:bg-industrial-blue transition-all"
            >
              View All Applications
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Roofing & Cladding Systems", image: "/images/warehouse_roofing.png" },
              { name: "Industrial Infrastructure", image: "/images/app_infrastructure.png" },
              { name: "Automobile Components", image: "/images/app_automobile.png" },
              { name: "HVAC Systems", image: "/images/app_hvac.png" },
              { name: "Electrical Panels", image: "/images/app_electrical.png" },
              { name: "Appliances Manufacturing", image: "/images/app_appliances.png" },
              { name: "Fabrication Products", image: "/images/app_fabrication.png" },
              { name: "Commercial Buildings", image: "/images/commercial_shed.png" }
            ].map((app, idx) => (
              <div key={idx} className="relative aspect-square group overflow-hidden bg-slate-900 rounded-sm">
                <Image
                  src={app.image}
                  alt={app.name}
                  fill
                  className="object-cover opacity-50 transition-all duration-700 group-hover:scale-110 group-hover:opacity-70"
                />
                <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                  <h4 className="text-white font-bold text-lg font-heading group-hover:text-accent transition-colors">
                    {app.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 industrial-gradient text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
                Experience the Alco Steel Quality
              </h2>
              <p className="text-white/70 text-lg">
                Connect with our experts today for a technical consultation and a competitive quote for your next industrial project.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="px-10 py-4 bg-accent text-white font-bold rounded-sm hover:bg-orange-600 transition-all text-center"
              >
                Contact Sales
              </Link>
              <Link
                href="/inquiry"
                className="px-10 py-4 bg-white text-industrial-navy font-bold rounded-sm hover:bg-gray-100 transition-all text-center"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
