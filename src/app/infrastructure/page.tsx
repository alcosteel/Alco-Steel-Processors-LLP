import PageHero from "@/components/layout/PageHero";
import Image from "next/image";
import { Factory, Truck, Settings, Warehouse, Zap, HardHat } from "lucide-react";

const facilities = [
  {
    icon: <Settings size={40} />,
    title: "Processing Lines",
    description: "Equipped with state-of-the-art slitting and cut-to-length lines capable of handling ultra-high strength steel with precision tolerances."
  },
  {
    icon: <Warehouse size={40} />,
    title: "Warehousing",
    description: "Massive indoor storage facility with over 50,000 sq. ft. capacity, ensuring all steel products are kept in optimal moisture-controlled conditions."
  },
  {
    icon: <Truck size={40} />,
    title: "Logistics Fleet",
    description: "Our dedicated logistics partner network ensures timely delivery across India, with real-time tracking for every industrial shipment."
  },
  {
    icon: <HardHat size={40} />,
    title: "Manufacturing Support",
    description: "24/7 manufacturing support with a dedicated team of engineers and technicians ensuring 100% plant uptime and delivery reliability."
  }
];

export default function Infrastructure() {
  return (
    <div className="flex flex-col ">
      {/* Hero */}
      <PageHero
        title="Our Infrastructure"
        subtitle="World-class processing facilities engineered for precision, scale, and uncompromising quality. Advanced machinery and sustainable operations define our production edge."
        imagePath="/images/infra_hero_v4.jpg"
      />

      {/* Facilities Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {facilities.map((facility, idx) => (
              <div key={idx} className="flex gap-8 p-10 bg-slate-50 border border-slate-100 rounded-sm hover:shadow-2xl transition-all duration-300">
                <div className="text-accent shrink-0">
                  {facility.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-industrial-navy mb-4 font-heading">{facility.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Industrial Section */}
      <section className="py-24 bg-industrial-navy text-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 font-heading leading-tight">Advanced Machinery & Technology</h2>
              <p className="text-white/60 mb-8 leading-relaxed">
                We invest in the latest European and Asian machinery to maintain our edge in the market. Our processing lines are fully automated, minimizing human error and maximizing throughput.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="border-l-4 border-accent pl-6">
                  <h4 className="text-3xl font-bold mb-2">150,000+</h4>
                  <p className="text-white/40 uppercase tracking-widest text-xs font-bold">Annual Tonnage Capacity</p>
                </div>
                <div className="border-l-4 border-accent pl-6">
                  <h4 className="text-3xl font-bold mb-2">0.05mm</h4>
                  <p className="text-white/40 uppercase tracking-widest text-xs font-bold">Processing Precision</p>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 relative h-[400px]">
              <Image
                src="/images/machinery_tech_v2.jpg"
                alt="Machinery Close-up"
                fill
                className="object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Logistics Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl font-bold text-industrial-navy mb-8 font-heading">Global Logistics & Storage</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Our Taloja-based facility serves as a central hub for nationwide distribution. We maintain a constant inventory of over 10,000 tons of prime steel coils, ready for immediate processing and dispatch.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-700">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span>Real-time shipment tracking for all orders</span>
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span>Moisture-controlled indoor storage for sensitive grades</span>
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span>Custom packaging options for overseas transit</span>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-1/2 relative h-[450px]">
              <Image
                src="/images/infra_facility_v2.jpg"
                alt="Warehousing Facility"
                fill
                className="object-cover rounded-sm shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sustainable Manufacturing */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-industrial-navy font-heading mb-6">Sustainable & Safe Operations</h2>
            <p className="text-slate-600">
              Our infrastructure is designed with a focus on safety and environmental sustainability. We employ energy-efficient lighting, solar power systems, and zero-waste processing protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <Zap className="mx-auto text-accent mb-4" size={48} />
              <h4 className="font-bold text-industrial-navy mb-2">Solar Powered</h4>
              <p className="text-slate-500 text-sm">30% of our plant energy is generated from on-site solar panels.</p>
            </div>
            <div className="text-center p-8">
              <Factory className="mx-auto text-accent mb-4" size={48} />
              <h4 className="font-bold text-industrial-navy mb-2">Zero Waste</h4>
              <p className="text-slate-500 text-sm">100% of steel scrap is recycled and fed back into the supply chain.</p>
            </div>
            <div className="text-center p-8">
              <HardHat className="mx-auto text-accent mb-4" size={48} />
              <h4 className="font-bold text-industrial-navy mb-2">Safety First</h4>
              <p className="text-slate-500 text-sm">OSHA compliant safety protocols with zero incident track record.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
