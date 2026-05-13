import PageHero from "@/components/layout/PageHero";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

const productCategories = [
  {
    id: "ppgl",
    title: "Pre-Painted Galvalume Steel (PPGL)",
    subtitle: "Advanced Aluminum-Zinc Alloy Coating",
    description: "Premium high-strength galvalume steel with a dual-layered barrier against atmospheric corrosion. Featuring high-grade base material from JSW Steel, these coils offer up to 4 times the life of conventional galvanized steel.",
    image: "/images/product_ppgl.png",
    specs: ["Yield Strength: 550 MPA (G550)", "AZ Coating: AZ70 - AZ150 g/m²", "Thickness: 0.12mm - 1.00mm", "Width: 914mm - 1220mm", "Solar Reflectance: > 0.65 SRI"]
  },
  {
    id: "prisma",
    title: "Prisma® Architectural Steel",
    subtitle: "Premium Pre-Finished Steel",
    description: "Colorcoat Prisma® by Tata Steel offers the ultimate in aesthetics and durability. Utilizing Galvalloy® metallic coating, it provides unparalleled corrosion resistance (RC5+) and a life expectancy of up to 40 years.",
    image: "/images/prisma_architectural.png",
    specs: ["Substrate: Galvalloy® (95% Zn / 5% Al)", "Coating: 50-70 Microns Nominal", "Resistance: RC5+ Corrosion / RUV5 UV", "Guarantee: Up to 40 Years", "Fire Rating: Class A1"]
  },
  {
    id: "color-coated",
    title: "Color Coated Steel Coils & Sheets",
    subtitle: "Versatile Industrial Solutions",
    description: "Wide range of RAL colors and custom finishes for diverse industrial and architectural needs. Our color-coated steel combines structural strength with advanced paint technology for maximum longevity and color retention.",
    image: "/images/product_sheets.png",
    specs: ["RAL Color Palette", "Custom Length Sheets", "UV Resistant Coatings", "Anti-Fading Technology"]
  },
  {
    id: "peb",
    title: "Pre-Engineered Buildings (PEB)",
    subtitle: "Complete Structural Solutions",
    description: "High-efficiency building systems designed for rapid construction. Our PEB solutions offer large column-free spans and significant cost savings over conventional construction methods.",
    image: "/images/peb_application.png",
    specs: ["Yield Strength: 345 MPa", "Design: IS 800 / MBMA", "Span: Up to 60m Clear", "Assembly: Fully Bolted", "Time: 30-50% Faster"]
  }
];

export default function Products() {
  return (
    <div className="flex flex-col ">
      <PageHero
        title="Our Product Portfolio"
        subtitle="We offer a comprehensive range of premium steel products processed with precision to meet the demanding requirements of modern industrial projects."
        imagePath="/images/product_coils.png"
      />

      {/* Products List */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-24">
            {productCategories.map((product, idx) => (
              <div key={product.id} className={`flex flex-col ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-16 items-center`}>
                <div className="w-full lg:w-1/2">
                  <div className="relative h-[400px] rounded-sm overflow-hidden shadow-2xl group">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-industrial-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                
                <div className="w-full lg:w-1/2">
                  <span className="text-sm font-bold tracking-widest text-accent uppercase mb-4 block font-heading">
                    {product.subtitle}
                  </span>
                  <h2 className="text-4xl font-bold text-industrial-navy mb-6 font-heading">
                    {product.title}
                  </h2>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="mb-10">
                    <h4 className="text-sm font-bold text-industrial-navy uppercase tracking-wider mb-4">Key Specifications:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                      {product.specs.map((spec, i) => (
                        <div key={i} className="flex items-center text-slate-600">
                          <span className="w-2 h-2 bg-accent mr-3 rounded-full" />
                          {spec}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <Link
                      href={`/products/${product.id}`}
                      className="inline-flex items-center justify-center px-8 py-3 bg-industrial-navy text-white font-bold rounded-sm transition-all hover:bg-industrial-blue shadow-lg"
                    >
                      View Details
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                    <a 
                      href="/Prisma 4 Pager Brochure_FINAL_compressed.pdf" 
                      download
                      className="inline-flex items-center justify-center px-8 py-3 border-2 border-industrial-navy text-industrial-navy font-bold rounded-sm transition-all hover:bg-industrial-navy hover:text-white"
                    >
                      <Download className="mr-2 w-4 h-4" />
                      Brochure
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global CTA */}
      <section className="py-24 bg-industrial-navy text-white text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 font-heading">Need Custom Specifications?</h2>
          <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
            Our processing facility can handle custom thickness and width requirements. Contact our technical team for a consultation.
          </p>
          <Link
            href="/inquiry"
            className="px-12 py-5 bg-accent text-white font-bold rounded-sm text-lg hover:bg-orange-600 transition-all shadow-xl"
          >
            Request Custom Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
