import PageHero from "@/components/layout/PageHero";
import Image from "next/image";
import Link from "next/link";
import { Factory, Settings, Warehouse, ShieldCheck, PackageCheck, Truck, ConciergeBell } from "lucide-react";

const facilities = [
  {
    icon: <Factory size={40} />,
    title: "Factory Overview",
    description: "Our Taloja MIDC facility is a dedicated steel processing service center, purpose-built for high-speed coil slitting, cut-to-length, and precision shearing operations.",
    image: "/images/infra_hero_v4.jpg",
  },
  {
    icon: <Settings size={40} />,
    title: "Processing Lines",
    description: "Modern automated slitting and cut-to-length lines capable of processing a wide range of sheet thicknesses and coil widths with tight tolerances.",
    image: "/images/service_slitting.jpg",
  },
  {
    icon: <ConciergeBell size={40} />,
    title: "EOT Cranes",
    description: "Heavy 35-ton overhead EOT crane systems ensuring safe, damage-free lifting and smooth movement of heavy steel coils across our processing lines.",
    image: "/images/service_coil_processing.jpg",
  },
  {
    icon: <Warehouse size={40} />,
    title: "Coil Storage Area",
    description: "Dedicated indoor, moisture-controlled coil storage area ensuring raw coil inventory and slit coils are protected against rust and damage.",
    image: "/images/service_custom_conversion.jpg",
  },
  {
    icon: <Truck size={40} />,
    title: "Material Handling Equipment",
    description: "Advanced heavy forklift fleet, coil lifters, and sheet transfer carts supporting uninterrupted material flow across the factory floor.",
    image: "/images/ind_storage_racking.jpg",
  },
  {
    icon: <ShieldCheck size={40} />,
    title: "Quality Inspection Facilities",
    description: "Comprehensive in-house quality inspection station equipped for micrometer width checks, thickness measurement, and edge burr verification.",
    image: "/images/quality_testing_detail.jpg",
  },
  {
    icon: <PackageCheck size={40} />,
    title: "Packaging Area",
    description: "Dedicated packaging bay providing waterproof wrapping, corner edge protectors, and steel strapping to ensure transit-safe deliveries.",
    image: "/images/surface_inspection.png",
  },
  {
    icon: <Truck size={40} />,
    title: "Dispatch Area",
    description: "Organized dispatch docks enabling fast loading onto logistics trucks for reliable, on-time delivery to manufacturing hubs across India.",
    image: "/images/warehouse_roofing.png",
  },
];

export default function PlantInfrastructure() {
  return (
    <div className="flex flex-col">
      <PageHero
        title="Plant & Infrastructure"
        subtitle="A state-of-the-art steel processing facility in Taloja MIDC engineered for precision, scale, and fast turnaround for OEMs across India."
        imagePath="/images/service_coil_processing.jpg"
      />

      {/* Facilities Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-4 font-heading">
              Facility Infrastructure
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-industrial-navy font-heading leading-tight">
              Built for Scale & High Precision
            </h3>
            <p className="text-lg text-slate-500 mt-6">
              Explore the 8 core operational zones of our Taloja MIDC plant designed for safety, coil handling capacity, and flawless processing quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {facilities.map((facility, idx) => (
              <div
                key={idx}
                className="flex flex-col bg-slate-50 border border-slate-100 rounded-sm hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative w-full h-64 overflow-hidden">
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-industrial-navy text-white px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-sm">
                    Zone 0{idx + 1}
                  </div>
                </div>
                <div className="flex gap-6 p-8 md:p-10">
                  <div className="text-accent shrink-0">{facility.icon}</div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-industrial-navy mb-3 font-heading">
                      {facility.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                      {facility.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capacity Stats */}
      <section className="py-24 bg-industrial-navy text-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 font-heading leading-tight">
                Advanced Machinery & Processing Technology
              </h2>
              <p className="text-white/60 mb-8 leading-relaxed">
                Our processing lines are equipped with precision slitting and cut-to-length technology, backed by EOT cranes and material handling systems that keep throughput high and turnaround fast.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="border-l-4 border-accent pl-6">
                  <h4 className="text-3xl font-bold mb-2">12,000+</h4>
                  <p className="text-white/40 uppercase tracking-widest text-xs font-bold">Tons Processed Monthly</p>
                </div>
                <div className="border-l-4 border-accent pl-6">
                  <h4 className="text-3xl font-bold mb-2">15 Tons</h4>
                  <p className="text-white/40 uppercase tracking-widest text-xs font-bold">Max Coil Handling Weight</p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 relative h-[400px]">
              <Image
                src="/images/service_slitting.jpg"
                alt="Processing Machinery"
                fill
                className="object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Sustainability */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-industrial-navy font-heading mb-6">Safe & Reliable Operations</h2>
            <p className="text-slate-600">
              Our facility is built around safety, consistency, and dependable dispatch — ensuring every processing order is handled with care from coil intake to final delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <ShieldCheck className="mx-auto text-accent mb-4" size={48} />
              <h4 className="font-bold text-industrial-navy mb-2">Safety First</h4>
              <p className="text-slate-500 text-sm">Strict safety protocols across all processing and material handling operations.</p>
            </div>
            <div className="text-center p-8">
              <Factory className="mx-auto text-accent mb-4" size={48} />
              <h4 className="font-bold text-industrial-navy mb-2">Consistent Quality</h4>
              <p className="text-slate-500 text-sm">Every batch inspected before packaging to ensure it meets agreed tolerances.</p>
            </div>
            <div className="text-center p-8">
              <Truck className="mx-auto text-accent mb-4" size={48} />
              <h4 className="font-bold text-industrial-navy mb-2">Reliable Dispatch</h4>
              <p className="text-slate-500 text-sm">Organized logistics coordination for timely delivery across India.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 industrial-gradient text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
                Visit Our Processing Facility
              </h2>
              <p className="text-white/70 text-lg">
                Located at Taloja MIDC, Navi Mumbai — reach out to our processing team to discuss your requirements or schedule a facility visit.
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
                Submit Processing Requirement
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
