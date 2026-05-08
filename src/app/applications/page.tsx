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
  Shield 
} from "lucide-react";

const applications = [
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {applications.map((app, index) => (
              <div 
                key={index} 
                className="group relative h-[400px] overflow-hidden rounded-sm shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <Image
                  src={app.image}
                  alt={app.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 brightness-50 group-hover:brightness-75"
                />
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white z-10">
                  <div className="mb-4 text-accent transition-transform duration-500 group-hover:-translate-y-2">
                    {app.icon}
                  </div>
                  <h3 className="text-2xl font-bold font-heading mb-3 transition-transform duration-500 group-hover:-translate-y-2">
                    {app.title}
                  </h3>
                  <p className="text-sm text-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 leading-relaxed">
                    {app.description}
                  </p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-industrial-navy via-transparent to-transparent opacity-80" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Quote */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold text-industrial-navy font-heading italic">
            &quot;Delivering Strength, Durability, and Excellence in Steel.&quot;
          </h2>
        </div>
      </section>
    </div>
  );
}
