import PageHero from "@/components/layout/PageHero";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ScissorsLineDashed, Ruler, Layers, RotateCw, PackageCheck, Settings2, Gauge } from "lucide-react";

const services = [
  {
    title: "Slitting Services",
    description: "High-precision slitting of steel coils into narrower widths, tailored to your exact production requirements with tight tolerances.",
    icon: <ScissorsLineDashed className="w-10 h-10" />,
    image: "/images/service_slitting.jpg",
    ctaLabel: "Get Slitting Quote",
    ctaHref: "/inquiry?service=Coil%20Slitting",
  },
  {
    title: "Cut-to-Length (CTL) Processing",
    description: "Converting coils into precise flat sheets of specified length, ideal for stamping, fabrication, and OEM production lines.",
    icon: <Ruler className="w-10 h-10" />,
    image: "/images/service_ctl.jpg",
    ctaLabel: "Get CTL Quote",
    ctaHref: "/inquiry?service=Cut-to-Length%20(CTL)",
  },
  {
    title: "Sheet Shearing",
    description: "Accurate shearing services for clean, burr-free edges on flat steel sheets, matched to your dimensional specifications.",
    icon: <Layers className="w-10 h-10" />,
    image: "/images/service_shearing.jpg",
  },
  {
    title: "Coil Processing",
    description: "Heavy industrial coil processing, uncoiling, recoiling, and toll processing with full traceability and overhead crane handling.",
    icon: <Layers className="w-10 h-10" />,
    image: "/images/service_coil_processing.jpg",
  },
  {
    title: "Custom Steel Conversion Solutions",
    description: "Custom coil-to-sheet and coil-to-strip processing designed for specialized manufacturing and OEM fabrication needs.",
    icon: <Settings2 className="w-10 h-10" />,
    image: "/images/service_custom_conversion.jpg",
  },
  {
    title: "Toll Processing",
    description: "Toll processing of customer-owned material, with full traceability and quality assurance throughout.",
    icon: <Settings2 className="w-10 h-10" />,
    image: "/images/surface_inspection.png",
  },
  {
    title: "Job Work Processing",
    description: "Dedicated job-work processing runs handled to your exact specification, timeline, and quantity.",
    icon: <Settings2 className="w-10 h-10" />,
    image: "/images/infra_facility_v2.jpg",
  },
  {
    title: "Packaging & Dispatch Support",
    description: "Industry-standard packaging and reliable logistics coordination to ensure your processed material arrives safely and on time.",
    icon: <PackageCheck className="w-10 h-10" />,
    image: "/images/warehouse_roofing.png",
  },
];

export default function Services() {
  return (
    <div className="flex flex-col">
      <PageHero
        title="Our Processing Services"
        subtitle="Precision steel processing services for manufacturing industries — slitting, cut-to-length, shearing, and custom coil conversion solutions."
        imagePath="/images/machinery_tech_v2.jpg"
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-4 font-heading">
              Steel Processing Services
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-industrial-navy font-heading leading-tight">
              Built for Manufacturers, OEMs, and Fabricators
            </h3>
            <p className="text-lg text-slate-500 mt-6">
              Alco Steel Processors LLP operates dedicated processing lines to convert steel coils into precise, ready-to-use material for your production floor. As a steel service center in Mumbai, we offer coil slitting services, cut-to-length services, CRCA slitting, GPSP processing, toll processing services, and job work steel processing for manufacturers across India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="flex flex-col bg-slate-50 rounded-sm border-l-4 border-accent shadow-lg hover:shadow-xl transition-all overflow-hidden group"
              >
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="mb-6 text-industrial-navy group-hover:text-accent transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-industrial-navy mb-4">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  {service.ctaLabel && service.ctaHref && (
                    <Link
                      href={service.ctaHref}
                      className="mt-auto inline-flex items-center text-industrial-blue font-bold hover:text-accent transition-colors"
                    >
                      {service.ctaLabel}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Highlight */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2 relative h-[350px] md:h-[450px]">
              <Image
                src="/images/infra_hero_v4.jpg"
                alt="Alco Steel Processing Facility"
                fill
                className="object-cover rounded-sm shadow-xl"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl font-bold text-industrial-navy mb-8 font-heading">
                Operational Facility Built for Precision
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Our Taloja MIDC facility runs modern slitting and cut-to-length lines, backed by EOT cranes, coil storage, and dedicated quality inspection to ensure every batch meets your specification before dispatch.
              </p>
              <Link
                href="/plant-infrastructure"
                className="inline-flex items-center text-industrial-blue font-bold hover:text-accent transition-colors"
              >
                Explore Our Plant & Infrastructure
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-industrial-navy text-white text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 font-heading">Have a Custom Processing Requirement?</h2>
          <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
            Share your material type, thickness, width, and quantity — our technical team will get back with a processing quote.
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
