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
                Precision Processing. <br />
                <span className="text-accent">Trusted Partnership.</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Alco Steel Processors LLP is a dedicated steel processing service provider based in Taloja MIDC, Navi Mumbai. We specialize in converting steel coils into customized sheets, strips, slit coils, and cut-to-length sheets as per customer specifications.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                <div className="flex items-start space-x-3">
                  <ShieldCheck className="text-accent w-6 h-6 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-industrial-navy">Precision Processing</h4>
                    <p className="text-sm text-slate-500">Tight tolerances on every batch</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Globe className="text-accent w-6 h-6 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-industrial-navy">Reliable Delivery</h4>
                    <p className="text-sm text-slate-500">Consistent turnaround across India</p>
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

      {/* Why Choose Alco */}
      <section className="py-24 bg-industrial-navy text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-4 font-heading">
              Our Commitment
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
              Why Choose Alco
            </h3>
            <p className="text-white/60 text-lg">
              At Alco Steel Processors LLP, our focus is on precision processing, quality assurance, timely deliveries, and supporting OEMs, manufacturers, fabricators, and industrial customers across India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 border border-white/10 bg-white/5 backdrop-blur-sm rounded-sm hover:border-accent transition-colors">
              <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                <ShieldCheck className="text-accent w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold mb-4 font-heading">Precision Processing</h4>
              <p className="text-white/60 text-sm leading-relaxed">
                Consistent quality standards maintained on every slit coil, sheared sheet, and CTL sheet we process.
              </p>
            </div>
            <div className="p-8 border border-white/10 bg-white/5 backdrop-blur-sm rounded-sm hover:border-accent transition-colors">
              <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                <Zap className="text-accent w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold mb-4 font-heading">Modern Machinery</h4>
              <p className="text-white/60 text-sm leading-relaxed">
                Advanced processing lines that keep throughput high and quality consistent on every run.
              </p>
            </div>
            <div className="p-8 border border-white/10 bg-white/5 backdrop-blur-sm rounded-sm hover:border-accent transition-colors">
              <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                <ShieldCheck className="text-accent w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold mb-4 font-heading">Consistent Quality Standards</h4>
              <p className="text-white/60 text-sm leading-relaxed">
                Every batch inspected against agreed tolerances before it leaves our facility.
              </p>
            </div>
            <div className="p-8 border border-white/10 bg-white/5 backdrop-blur-sm rounded-sm hover:border-accent transition-colors">
              <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                <Zap className="text-accent w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold mb-4 font-heading">Fast Turnaround Time</h4>
              <p className="text-white/60 text-sm leading-relaxed">
                Streamlined processing lines built to keep your production schedule on track.
              </p>
            </div>
            <div className="p-8 border border-white/10 bg-white/5 backdrop-blur-sm rounded-sm hover:border-accent transition-colors">
              <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                <Users className="text-accent w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold mb-4 font-heading">Experienced Team</h4>
              <p className="text-white/60 text-sm leading-relaxed">
                Skilled operators and technical staff with deep expertise in steel processing.
              </p>
            </div>
            <div className="p-8 border border-white/10 bg-white/5 backdrop-blur-sm rounded-sm hover:border-accent transition-colors">
              <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                <Users className="text-accent w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold mb-4 font-heading">Customized Processing Solutions</h4>
              <p className="text-white/60 text-sm leading-relaxed">
                Processing solutions built around your exact material and delivery requirements.
              </p>
            </div>
            <div className="p-8 border border-white/10 bg-white/5 backdrop-blur-sm rounded-sm hover:border-accent transition-colors">
              <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                <Globe className="text-accent w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold mb-4 font-heading">Strategic Location at Taloja MIDC</h4>
              <p className="text-white/60 text-sm leading-relaxed">
                Centrally located in Navi Mumbai for efficient dispatch across India.
              </p>
            </div>
            <div className="p-8 border border-white/10 bg-white/5 backdrop-blur-sm rounded-sm hover:border-accent transition-colors">
              <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                <Globe className="text-accent w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold mb-4 font-heading">Reliable Delivery Support</h4>
              <p className="text-white/60 text-sm leading-relaxed">
                Dependable dispatch coordination ensuring your processed material arrives on schedule.
              </p>
            </div>
            <div className="p-8 border border-white/10 bg-white/5 backdrop-blur-sm rounded-sm hover:border-accent transition-colors">
              <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                <ShieldCheck className="text-accent w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold mb-4 font-heading">Customer-Centric Service</h4>
              <p className="text-white/60 text-sm leading-relaxed">
                We work closely with every customer to meet their exact processing specifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold text-industrial-navy font-heading">
                Industries We Serve
              </h2>
              <p className="text-lg text-slate-500 mt-6">
                Our processed steel supports manufacturers and fabricators across a wide range of industrial sectors.
              </p>
            </div>
            <Link
              href="/applications"
              className="px-8 py-3 bg-industrial-navy text-white font-bold rounded-sm hover:bg-industrial-blue transition-all"
            >
              View All Industries
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { name: "Automobile Components", image: "/images/ind_automobile.jpg" },
              { name: "Electrical Panels & Enclosures", image: "/images/ind_electrical_panels.jpg" },
              { name: "White Goods & Appliances", image: "/images/ind_white_goods.jpg" },
              { name: "HVAC Equipment", image: "/images/ind_hvac.jpg" },
              { name: "Cable Trays", image: "/images/ind_cable_trays.jpg" },
              { name: "Solar Structures", image: "/images/ind_solar_structures.jpg" },
              { name: "Storage Systems & Racking", image: "/images/ind_storage_racking.jpg" },
              { name: "Furniture Manufacturing", image: "/images/ind_furniture_mfg.jpg" },
              { name: "Tube & Pipe Manufacturers", image: "/images/product_coils.png" },
              { name: "Roll Forming Companies", image: "/images/service_ctl.jpg" },
              { name: "Engineering Industries", image: "/images/service_shearing.jpg" },
              { name: "Construction & Infrastructure", image: "/images/service_custom_conversion.jpg" }
            ].map((app, idx) => (
              <div key={idx} className="relative aspect-square group overflow-hidden bg-slate-900 rounded-sm shadow-md hover:shadow-xl transition-all duration-300">
                <Image
                  src={app.image}
                  alt={app.name}
                  fill
                  className="object-cover opacity-60 transition-all duration-700 group-hover:scale-110 group-hover:opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-5 text-left">
                  <h4 className="text-white font-bold text-base md:text-lg font-heading group-hover:text-accent transition-colors leading-tight">
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
                Experience Alco Steel Processing Quality
              </h2>
              <p className="text-white/70 text-lg">
                Connect with our processing team today for a technical consultation and a competitive quote for your next order.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="px-10 py-4 bg-accent text-white font-bold rounded-sm hover:bg-orange-600 transition-all text-center"
              >
                Contact Processing Team
              </Link>
              <Link
                href="/inquiry"
                className="px-10 py-4 bg-white text-industrial-navy font-bold rounded-sm hover:bg-gray-100 transition-all text-center"
              >
                Request Processing Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
