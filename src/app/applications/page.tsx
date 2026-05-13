import PageHero from "@/components/layout/PageHero";
import Image from "next/image";
import { 
  Home, 
  Factory, 
  Car, 
  Cpu, 
  Wind, 
  Smartphone, 
  Settings, 
  Shield, 
  Link
} from "lucide-react";

const applications = [
  {
    title: "Pre-Engineered Buildings (PEB)",
    description: "Modern structural steel solutions for industrial sheds, warehouses, and complex commercial buildings.",
    icon: <Settings className="w-10 h-10" />,
    image: "/images/peb_application.png"
  },
  {
    title: "Roofing & Cladding Systems",
    description: "High-durability color coated sheets for modern roofing and wall cladding solutions.",
    icon: <Home className="w-10 h-10" />,
    image: "/images/warehouse_roofing.png"
  },
  {
    title: "Residential & Commercial Buildings",
    description: "Aesthetic and long-lasting steel solutions for modern architectural designs.",
    icon: <Shield className="w-10 h-10" />,
    image: "/images/commercial_shed.png"
  },
  {
    title: "Industrial Infrastructure",
    description: "Robust steel products for warehouses, factories, and large-scale industrial sheds.",
    icon: <Factory className="w-10 h-10" />,
    image: "/images/infrastructure_new.png"
  },
  {
    title: "Automobile Components",
    description: "Precision-coated steel for durable and corrosion-resistant automotive parts.",
    icon: <Car className="w-10 h-10" />,
    image: "/images/app_automobile.png"
  },
  {
    title: "Electrical Panels",
    description: "High-performance coated steel for switchgear and control panel housing.",
    icon: <Cpu className="w-10 h-10" />,
    image: "/images/app_electrical.png"
  },
  {
    title: "HVAC Systems",
    description: "Corrosion-resistant steel sheets for ducting, units, and cooling systems.",
    icon: <Wind className="w-10 h-10" />,
    image: "/images/app_hvac.png"
  },
  {
    title: "Appliances Manufacturing",
    description: "Premium surface finish steel for white goods and household appliances.",
    icon: <Smartphone className="w-10 h-10" />,
    image: "/images/app_appliances.png"
  },
  {
    title: "Fabrication & Engineering",
    description: "Versatile steel products for a wide range of engineering and fabrication needs.",
    icon: <Settings className="w-10 h-10" />,
    image: "/images/app_fabrication.png"
  }
];

export default function Applications() {
  return (
    <div className="flex flex-col">
      <PageHero
        title="Industrial Applications"
        subtitle="Our high-quality steel products are the foundation of excellence across diverse sectors, providing strength and durability where it matters most."
        imagePath="/images/about_hero_new.png"
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <div 
                key={index} 
                className="flex flex-col p-8 bg-slate-50 rounded-sm border-l-4 border-accent shadow-lg hover:shadow-xl transition-all group"
              >
                <div className="mb-6 text-industrial-navy group-hover:text-accent transition-colors">
                  {app.icon}
                </div>
                <h3 className="text-2xl font-bold font-heading text-industrial-navy mb-4">
                  {app.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {app.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global CTA */}
      <section className="py-24 bg-industrial-navy text-white text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 font-heading">Designing a Mission-Critical Structure?</h2>
          <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
            Our technical team provides end-to-end support for architectural and industrial projects, from material selection to custom profiling.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/inquiry"
              className="px-12 py-5 bg-accent text-white font-bold rounded-sm text-lg hover:bg-orange-600 transition-all shadow-xl"
            >
              Get Technical Consultation
            </Link>
            <a
              href="/Prisma 4 Pager Brochure_FINAL_compressed.pdf"
              download
              className="px-12 py-5 border-2 border-white text-white font-bold rounded-sm text-lg hover:bg-white hover:text-industrial-navy transition-all"
            >
              Download Prisma® Brochure
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
