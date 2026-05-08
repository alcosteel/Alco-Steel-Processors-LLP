import PageHero from "@/components/layout/PageHero";
import Image from "next/image";
import { ShieldCheck, Globe, Zap, Users } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col ">
      <PageHero
        title="About Alco Steel"
        subtitle="A trusted supplier and processor of high-quality flat steel products, committed to reliability, quality, and modern infrastructure solutions."
        imagePath="/images/about_hero_new.png"
      />

      {/* Corporate Profile */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-bold tracking-widest text-accent uppercase mb-4 block font-heading">
                Our Profile
              </span>
              <h2 className="text-4xl font-bold text-industrial-navy mb-8 font-heading">
                Quality Steel. Reliable Supply. <br />
                <span className="text-accent">Trusted Partnership.</span>
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Alco Steel Processors LLP is a trusted supplier and processor of high-quality flat steel products. With a strong focus on reliability, quality, and customer satisfaction, we provide premium Pre-Painted Steel (PPGI / PPGL) and Color Coated Steel solutions to a wide range of industries.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Our products are sourced from leading steel manufacturers and processed to meet the highest industry standards. We are committed to delivering durable, aesthetically superior, and performance-driven steel products for modern infrastructure and industrial applications.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square relative rounded-sm overflow-hidden shadow-2xl">
                <Image
                  src="/images/about_profile.png"
                  alt="Alco Steel Facility"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-accent text-white p-8 rounded-sm shadow-xl hidden md:block">
                <p className="text-4xl font-bold mb-1">25+</p>
                <p className="text-sm font-bold uppercase tracking-widest">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strengths Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-industrial-navy font-heading mb-4">Our Strengths</h2>
            <div className="w-24 h-1 bg-accent mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-all border-t-4 border-accent">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                <ShieldCheck className="text-accent w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-industrial-navy mb-4">Quality Assurance</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Products sourced from reputed steel manufacturers and tested for consistency and durability to meet the highest industry standards.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-all border-t-4 border-industrial-navy">
              <div className="w-12 h-12 bg-industrial-navy/10 rounded-full flex items-center justify-center mb-6">
                <Globe className="text-industrial-navy w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-industrial-navy mb-4">Reliable Supply</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Strong distribution network ensuring timely delivery across markets, backed by efficient logistics and massive inventory.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-all border-t-4 border-accent">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                <Users className="text-accent w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-industrial-navy mb-4">Customer-Centric</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                We work closely with customers to provide solutions that match their exact requirements, offering customized sizes and specs.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-all border-t-4 border-industrial-navy">
              <div className="w-12 h-12 bg-industrial-navy/10 rounded-full flex items-center justify-center mb-6">
                <Zap className="text-industrial-navy w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-industrial-navy mb-4">Industry Expertise</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Deep understanding of steel products and their applications across sectors, providing technical guidance to our partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Commitment */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-industrial-navy rounded-sm overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 lg:p-20 text-white">
              <span className="text-sm font-bold tracking-widest text-accent uppercase mb-6 block font-heading">
                Our Commitment
              </span>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 font-heading leading-tight">
                Building Long-Term Partnerships Through Performance
              </h3>
              <p className="text-xl text-white/70 leading-relaxed italic mb-8">
                &quot;At Alco Steel Processors LLP, our mission is to provide customers with high-quality steel products, dependable service, and long-term business relationships built on trust and performance.&quot;
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-1 bg-accent" />
                <p className="font-bold uppercase tracking-widest text-sm">Our Core Mission</p>
              </div>
            </div>
            <div className="lg:w-1/2 relative min-h-[400px]">
              <Image
                src="/images/about_mission_new.png"
                alt="Quality Commitment"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
