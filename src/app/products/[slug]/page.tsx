import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Download, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const productData: Record<string, {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  infoSection?: {
    title: string;
    content: string;
    points: string[];
  };
  specs: { param: string; value: string }[];
  benefits: string[];
  applications: string[];
  features?: { title: string; desc: string }[];
}> = {
  "ppgl": {
    title: "Pre-Painted Galvalume Steel (PPGL)",
    subtitle: "Advanced Aluminum-Zinc Alloy Coating",
    description: "Premium galvalume steel featuring the high-strength JSW Steel base. Coated with an alloy of 55% Aluminum, 43.4% Zinc, and 1.6% Silicon, providing a dual-layered barrier against atmospheric corrosion and extreme weather.",
    image: "/images/product_ppgl.png",
    specs: [
      { param: "Yield Strength", value: "550 MPA (G550)" },
      { param: "Tensile Strength", value: "560 - 620 MPa" },
      { param: "AZ Coating Mass", value: "AZ70 - AZ150 g/m²" },
      { param: "Thickness", value: "0.12mm - 1.00mm" },
      { param: "Width", value: "914mm - 1220mm" },
      { param: "Coating Type", value: "Regular Modified Polyester (RMP) / Silicon Modified Polyester (SMP)" },
      { param: "Solar Reflectance", value: "> 0.65 SRI (Cool Roof Technology)" },
    ],
    benefits: [
      "4 Times Longer Life vs Conventional Galvanized Steel",
      "Superior Heat Reflectivity - Reduces Internal Temperature by up to 6°C",
      "Exceptional Edge Protection and Cut-Edge Corrosion Resistance",
      "Uniform Coating Thickness with Precision Process Control",
      "Available in High-Strength G550 Grade for Structural Stability"
    ],
    applications: [
      "High-End Industrial Roofing",
      "Coastal & Marine Infrastructure",
      "Pre-Engineered Buildings (PEB)",
      "Agricultural Storage Facilities",
      "Modular Cold Storage Panels"
    ]
  },
  "prisma": {
    title: "Prisma® Architectural Steel",
    subtitle: "Premium Pre-Finished Steel by Tata Steel",
    description: "Colorcoat Prisma® represents the ultimate in aesthetics and durability. Utilizing Galvalloy® metallic coating (95% Zinc / 5% Aluminum), it offers unparalleled corrosion resistance and a life expectancy of up to 40 years.",
    image: "/images/prisma_architectural.png",
    specs: [
      { param: "Metallic Coating", value: "Galvalloy® (95% Zn / 5% Al)" },
      { param: "Coating Thickness", value: "50 - 70 Microns (Nominal)" },
      { param: "Corrosion Resistance", value: "RC5+ (Highest European Standard)" },
      { param: "UV Resistance", value: "RUV5 (Excellent Gloss & Color Retention)" },
      { param: "Fire Rating", value: "Class A1 (Non-Combustible)" },
      { param: "Guarantee", value: "Up to 40 Years Confidex® Guarantee" },
    ],
    benefits: [
      "Superior 3-Layer Coating Technology (Chrome-Free)",
      "Unrivalled Color Stability and Gloss Retention",
      "Suitable for Photovoltaic (PV) Installations",
      "Extreme Resistance to Industrial Pollutants and Saline Environments",
      "Available in Solid, Metallic, Matt, and Sparkle Finishes"
    ],
    applications: [
      "Architectural Building Envelopes",
      "Public Sector Infrastructure",
      "Premium Commercial Complexes",
      "High-Performance Roof & Wall Cladding",
      "Modern Facade Systems"
    ]
  },
  "color-coated": {
    title: "Color Coated Steel Coils & Sheets",
    subtitle: "Premium Painted Steel Solutions",
    description: "Our color-coated steel combines high-grade JSW steel with advanced paint technology. Available in a wide spectrum of RAL colors, these sheets offer excellent color retention, corrosion resistance, and aesthetic appeal for modern architecture.",
    image: "/images/product_sheets.png",
    specs: [
      { param: "Base Material", value: "Cold Rolled / Galvanized / Galvalume" },
      { param: "Paint Systems", value: "RMP / SMP / PVDF / SDP" },
      { param: "Top Coat Thickness", value: "18 - 25 Microns" },
      { param: "Back Coat Thickness", value: "5 - 10 Microns" },
      { param: "Gloss Levels", value: "30% - 80% (Customizable)" },
      { param: "Width Range", value: "900mm - 1250mm" },
      { param: "RAL Colors", value: "Complete Classic Range Available" },
    ],
    benefits: [
      "Superior Aesthetic Finish with Uniform Color Distribution",
      "Enhanced Weather Resistance with Multi-Layer Coating",
      "Flexible and Easy to Fabricate without Cracking",
      "Low Maintenance and High Resistance to Scratching",
      "Environmentally Friendly and Fully Recyclable"
    ],
    applications: [
      "Modern Building Facades",
      "Industrial Wall Cladding",
      "Interior Decoration Panels",
      "Automotive Components",
      "Electrical Appliance Enclosures"
    ]
  },
  "peb": {
    title: "Pre-Engineered Buildings (PEB)",
    subtitle: "Complete Structural Steel Solutions",
    description: "Modern, high-efficiency building systems designed for rapid construction and long-term durability. Our PEB solutions utilize high-strength structural steel and precision engineering to deliver cost-effective buildings for industrial and commercial use.",
    image: "/images/peb_application.png",
    specs: [
      { param: "Primary Frame", value: "High Strength Steel (Yield 345 MPa)" },
      { param: "Secondary Members", value: "Z & C Purlins (G550 Grade)" },
      { param: "Roofing/Cladding", value: "PPGL / Color Coated Sheets" },
      { param: "Design Standards", value: "IS 800 / MBMA / AISC" },
      { param: "Clear Span", value: "Up to 60 Meters (Column-Free)" },
      { param: "Connection Type", value: "High-Strength Bolted Connections" },
    ],
    benefits: [
      "30-50% Faster Construction vs Conventional Buildings",
      "Significant Cost Savings on Foundation and Labor",
      "Large Column-Free Spans for Maximum Space Utility",
      "Easily Expandable and Relocatable Design",
      "Highly Resistant to Seismic and Wind Forces"
    ],
    applications: [
      "Industrial Warehouses & Sheds",
      "Manufacturing Units",
      "Commercial Showrooms",
      "Sports Complexes & Hangars",
      "Cold Storage Facilities"
    ]
  }
};

export async function generateStaticParams() {
  return Object.keys(productData).map((slug) => ({
    slug,
  }));
}

export default async function ProductDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = productData[slug] || productData["ppgl"];

  return (
    <div className="flex flex-col">
      {/* Product Hero */}
      <section className="min-h-screen bg-slate-50 border-b border-slate-200 flex items-center py-20">
        <div className="container mx-auto px-4 md:px-6">
          <Link href="/products" className="inline-flex items-center text-sm font-bold text-slate-500 hover:text-accent mb-8 transition-colors">
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Products
          </Link>
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-2xl">
                <Image src={product.image} alt={product.title} fill className="object-cover" />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <span className="text-sm font-bold tracking-widest text-accent uppercase mb-4 block font-heading">
                {product.subtitle}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-industrial-navy mb-6 font-heading leading-tight">
                {product.title}
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                {product.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/inquiry"
                  className="px-8 py-4 bg-accent text-white font-bold rounded-sm shadow-lg hover:bg-orange-600 transition-all"
                >
                  Get a Customized Quote
                </Link>
                <a 
                  href="/Prisma 4 Pager Brochure_FINAL_compressed.pdf" 
                  download
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-industrial-navy text-industrial-navy font-bold rounded-sm transition-all hover:bg-industrial-navy hover:text-white h-auto"
                >
                  <Download className="mr-2 w-4 h-4" />
                  Product Catalog
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detail Info (Only for Color Coated or if infoSection exists) */}
      {product.infoSection && (
        <section className="py-24 bg-white border-b border-slate-100">
          <div className="container mx-auto px-4 md:px-6">
            <div className="bg-slate-50 p-10 md:p-16 rounded-sm shadow-sm flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold text-industrial-navy font-heading mb-6 flex items-center">
                  <Info className="mr-3 text-accent" />
                  {product.infoSection.title}
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  {product.infoSection.content}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {product.infoSection.points.map((point: string, i: number) => (
                    <div key={i} className="flex items-center text-industrial-navy font-bold">
                      <CheckCircle2 className="text-accent w-5 h-5 mr-3" />
                      {point}
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:w-1/3">
                <div className="relative aspect-square w-full rounded-full border-8 border-white shadow-xl overflow-hidden">
                  <Image src="/images/product_coils.png" alt="Detail" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Brochure Download Section (Specific to Prisma) */}
      {slug === "prisma" && (
        <section className="py-16 bg-industrial-navy text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <h2 className="text-3xl font-bold font-heading mb-4">Complete Technical Brochure</h2>
                <p className="text-white/70 text-lg max-w-xl">
                  Download the full 4-page technical brochure for Colorcoat Prisma® including detailed color charts, performance data, and standard compliance details.
                </p>
              </div>
              <a 
                href="/Prisma 4 Pager Brochure_FINAL_compressed.pdf" 
                download
                className="inline-flex items-center justify-center px-10 py-5 bg-accent text-white font-bold rounded-sm shadow-2xl hover:bg-orange-600 transition-all text-lg group"
              >
                <Download className="mr-3 w-6 h-6 group-hover:animate-bounce" />
                Download PDF Brochure
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Product Details Tabs */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <Tabs defaultValue="specifications" className="w-full">
            <div className="flex flex-col items-center mb-16">
              <TabsList className="inline-flex h-14 items-center justify-center rounded-full bg-slate-100 p-1.5 shadow-inner">
                <TabsTrigger 
                  value="specifications" 
                  className="px-8 py-3 text-base font-bold rounded-full transition-all data-[active]:bg-white data-[active]:text-accent data-[active]:shadow-sm text-slate-500"
                >
                  Specifications
                </TabsTrigger>
                <TabsTrigger 
                  value="benefits" 
                  className="px-8 py-3 text-base font-bold rounded-full transition-all data-[active]:bg-white data-[active]:text-accent data-[active]:shadow-sm text-slate-500"
                >
                  Key Benefits
                </TabsTrigger>
                <TabsTrigger 
                  value="applications" 
                  className="px-8 py-3 text-base font-bold rounded-full transition-all data-[active]:bg-white data-[active]:text-accent data-[active]:shadow-sm text-slate-500"
                >
                  Applications
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="specifications" className="mt-0 focus-visible:outline-none">
              <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-sm shadow-2xl overflow-hidden">
                <Table>
                  <TableHeader className="bg-industrial-navy">
                    <TableRow>
                      <TableHead className="text-white font-bold py-6 px-8 text-lg">Technical Parameter</TableHead>
                      <TableHead className="text-white font-bold py-6 px-8 text-lg">Value / Specification</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {product.specs.map((spec, idx: number) => (
                      <TableRow key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                        <TableCell className="font-bold text-industrial-navy py-5 px-8 border-r border-slate-100">{spec.param}</TableCell>
                        <TableCell className="text-slate-600 py-5 px-8 font-medium">{spec.value}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
            
            <TabsContent value="benefits" className="mt-0 focus-visible:outline-none">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {product.benefits.map((benefit: string, idx: number) => (
                  <div key={idx} className="flex flex-col p-8 bg-slate-50 rounded-sm border-t-4 border-accent shadow-lg hover:-translate-y-1 transition-transform">
                    <CheckCircle2 className="text-accent w-8 h-8 mb-4" />
                    <span className="text-lg font-bold text-industrial-navy leading-snug">{benefit}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="applications" className="mt-0 focus-visible:outline-none">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {product.applications.map((app: string, idx: number) => (
                  <div key={idx} className="flex items-center space-x-4 p-6 bg-white border border-slate-100 rounded-sm shadow-sm hover:shadow-md transition-all">
                    <div className="w-2 h-10 bg-accent shrink-0 rounded-full" />
                    <span className="text-lg font-bold text-industrial-navy leading-snug">{app}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Related Products Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-industrial-navy font-heading mb-12">Other Premium Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.keys(productData).filter(key => key !== slug).map(key => {
              const p = productData[key];
              return (
                <Link key={key} href={`/products/${key}`} className="group bg-white rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                  <div className="relative h-48">
                    <Image src={p.image} alt={p.title} fill className="object-cover transition-transform group-hover:scale-110" />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-industrial-navy mb-2 font-heading">{p.title}</h4>
                    <p className="text-slate-500 text-sm mb-4 line-clamp-2">{p.description}</p>
                    <span className="text-accent font-bold flex items-center">
                      View Details
                      <ArrowLeft className="ml-2 w-4 h-4 rotate-180" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
