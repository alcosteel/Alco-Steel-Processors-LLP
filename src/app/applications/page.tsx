import PageHero from "@/components/layout/PageHero";
import Image from "next/image";
import Link from "next/link";

import {
  Car,
  Cpu,
  Wind,
  Smartphone,
  Settings,
  Cable,
  Sun,
  Warehouse,
  Sofa,
  Milestone,
  Factory,
  Building2,
} from "lucide-react";

const industries = [
  {
    title: "Automobile Components",
    description: "Precision-processed steel for durable and corrosion-resistant automotive parts and assemblies.",
    icon: <Car className="w-10 h-10" />,
    image: "/images/ind_automobile.jpg"
  },
  {
    title: "Electrical Panels & Enclosures",
    description: "Custom-processed sheets and slit coils for switchgear, control panels, and enclosure manufacturing.",
    icon: <Cpu className="w-10 h-10" />,
    image: "/images/ind_electrical_panels.jpg"
  },
  {
    title: "White Goods & Appliances",
    description: "Precision cut-to-length and slit steel for household appliance and white goods manufacturing.",
    icon: <Smartphone className="w-10 h-10" />,
    image: "/images/ind_white_goods.jpg"
  },
  {
    title: "HVAC Equipment",
    description: "Processed steel sheets and coils for ducting, units, and cooling system manufacturing.",
    icon: <Wind className="w-10 h-10" />,
    image: "/images/ind_hvac.jpg"
  },
  {
    title: "Cable Trays",
    description: "Custom width slit coils and cut-to-length sheets for cable tray fabrication.",
    icon: <Cable className="w-10 h-10" />,
    image: "/images/ind_cable_trays.jpg"
  },
  {
    title: "Solar Structures",
    description: "Processed steel components supporting solar mounting structures and renewable energy infrastructure.",
    icon: <Sun className="w-10 h-10" />,
    image: "/images/ind_solar_structures.jpg"
  },
  {
    title: "Storage Systems & Racking",
    description: "Precision slit and sheared steel for industrial racking, shelving, and storage system manufacturing.",
    icon: <Warehouse className="w-10 h-10" />,
    image: "/images/ind_storage_racking.jpg"
  },
  {
    title: "Furniture Manufacturing",
    description: "Cut-to-length and slit steel processed to spec for steel furniture and fixture manufacturing.",
    icon: <Sofa className="w-10 h-10" />,
    image: "/images/ind_furniture_mfg.jpg"
  },
  {
    title: "Tube & Pipe Manufacturers",
    description: "Custom width slit coils supplied as feedstock for tube and pipe manufacturing lines.",
    icon: <Milestone className="w-10 h-10" />,
    image: "/images/product_coils.png"
  },
  {
    title: "Roll Forming Companies",
    description: "Precision slit coils processed to the exact width and tolerance required for roll forming operations.",
    icon: <Settings className="w-10 h-10" />,
    image: "/images/service_ctl.jpg"
  },
  {
    title: "Engineering Industries",
    description: "Versatile processed steel supporting a wide range of engineering and fabrication needs.",
    icon: <Factory className="w-10 h-10" />,
    image: "/images/service_shearing.jpg"
  },
  {
    title: "Construction & Infrastructure",
    description: "Processed steel sheets and coils supporting construction and industrial infrastructure projects.",
    icon: <Building2 className="w-10 h-10" />,
    image: "/images/service_custom_conversion.jpg"
  }
];

export default function Applications() {
  return (
    <div className="flex flex-col">
      <PageHero
        title="Industries We Serve"
        subtitle="Our precision steel processing services support manufacturers, OEMs, and fabricators across a wide range of industrial sectors."
        imagePath="/images/ind_automobile.jpg"
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="flex flex-col bg-slate-50 rounded-sm border-l-4 border-accent shadow-lg hover:shadow-xl transition-all overflow-hidden group"
              >
                <div className="relative w-full h-48 overflow-hidden">
                  <Image src={industry.image} alt={industry.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="mb-6 text-industrial-navy group-hover:text-accent transition-colors">
                    {industry.icon}
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-industrial-navy mb-4">
                    {industry.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global CTA */}
      <section className="py-24 bg-industrial-navy text-white text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 font-heading">Have a Processing Requirement in Mind?</h2>
          <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
            Our technical team provides end-to-end support, from material selection to custom slitting and cut-to-length processing.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/inquiry"
              className="px-12 py-5 bg-accent text-white font-bold rounded-sm text-lg hover:bg-orange-600 transition-all shadow-xl"
            >
              Submit Processing Requirement
            </Link>
            <Link
              href="/capabilities"
              className="px-12 py-5 border-2 border-white text-white font-bold rounded-sm text-lg hover:bg-white hover:text-industrial-navy transition-all"
            >
              View Processing Capabilities
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
