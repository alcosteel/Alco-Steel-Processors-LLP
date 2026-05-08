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
}> = {
  "ppgi": {
    title: "Pre-Painted Galvanized Iron (PPGI)",
    subtitle: "Premium Coated Steel",
    description: "High-quality galvanized steel coated with advanced paint technology, ensuring durability, corrosion resistance, and aesthetic appeal. Our PPGI coils are manufactured using the highest grade cold-rolled steel and premium paint systems to ensure long-lasting performance.",
    image: "/images/product_ppgi.png",
    specs: [
      { param: "Thickness", value: "0.12mm - 1.20mm" },
      { param: "Width", value: "900mm - 1250mm" },
      { param: "Base Material", value: "Hot-Dip Galvanized Steel (GI)" },
      { param: "Coating Mass", value: "60 - 275 GSM" },
      { param: "Paint Coating", value: "Top: 15-35 Microns, Back: 5-12 Microns" },
      { param: "Paint Types", value: "RMP, SMP, PVDF, SDP" },
      { param: "T-Bend", value: "0T - 3T" },
    ],
    benefits: [
      "Excellent Corrosion Resistance",
      "Superior Surface Finish",
      "Long-lasting Durability",
      "Enhanced Aesthetic Appeal",
      "Low Maintenance Requirements"
    ],
    applications: [
      "Roofing & Cladding Systems",
      "Industrial Infrastructure",
      "Electrical Panels",
      "HVAC Systems",
      "Appliances Manufacturing"
    ]
  },
  "ppgl": {
    title: "Pre-Painted Galvalume Steel (PPGL)",
    subtitle: "Superior Protection & Long Life",
    description: "Premium galvalume steel with aluminum-zinc coating (55% Al, 43.4% Zn) combined with paint layers for superior protection and long life. This unique coating provides exceptional heat reflectivity and atmospheric corrosion resistance.",
    image: "/images/product_ppgl.png",
    specs: [
      { param: "Thickness", value: "0.12mm - 1.00mm" },
      { param: "Width", value: "914mm - 1220mm" },
      { param: "Base Material", value: "55% Al-Zn Coated Steel" },
      { param: "AZ Coating Mass", value: "AZ70 - AZ150" },
      { param: "Heat Reflectivity", value: "Excellent (> 0.65 SRI)" },
      { param: "Tensile Strength", value: "240 - 550 MPa" },
    ],
    benefits: [
      "2-4 Times Life vs Galvanized Steel",
      "Superior Corrosion Resistance",
      "High Heat Reflectivity (Cooler Interiors)",
      "Modern Aesthetic Appeal",
      "Lightweight and Durable"
    ],
    applications: [
      "Coastal Construction",
      "Industrial Sheds",
      "Pre-Engineered Buildings",
      "Warehouse Roofing",
      "Fabrication Products"
    ]
  },
  "color-coated": {
    title: "Color Coated Steel Coils & Sheets",
    subtitle: "Versatile & Aesthetic Solutions",
    description: "Available in a wide range of colors, thicknesses, and finishes to suit different industrial and architectural applications. Our color-coated steel provides the perfect balance of performance and appearance.",
    image: "/images/product_sheets.png",
    infoSection: {
      title: "What is Color-Coated Steel?",
      content: "Color-coated steel, also known as pre-painted steel, is produced by applying layers of protective paint and coating over galvanized or galvalume steel. This process creates a material that is not only strong and durable but also visually striking.",
      points: [
        "Excellent corrosion resistance",
        "Superior surface finish",
        "Long-lasting durability",
        "Enhanced aesthetic appeal",
        "Low maintenance requirements"
      ]
    },
    specs: [
      { param: "Standard Colors", value: "RAL Classic Range & Custom" },
      { param: "Available Form", value: "Coils, Plain Sheets, Profiled Sheets" },
      { param: "Thickness Range", value: "0.12mm to 1.5mm" },
      { param: "Width Options", value: "Up to 1250mm" },
      { param: "Finish Options", value: "Glossy, Semi-Gloss, Matte, Texture" },
    ],
    benefits: [
      "Instant Aesthetic Enhancement",
      "UV Resistance for Color Retention",
      "Tailored Specifications",
      "Eco-Friendly and Recyclable",
      "Easy Fabrication"
    ],
    applications: [
      "Residential Buildings",
      "Commercial Complexes",
      "Automobile Components",
      "Interior Decor Panels",
      "Industrial Engineering"
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
  const product = productData[slug] || productData["ppgi"];

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
                <Button variant="outline" className="px-8 py-4 border-2 border-industrial-navy text-industrial-navy font-bold h-auto">
                  <Download className="mr-2 w-4 h-4" />
                  Product Catalog
                </Button>
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

      {/* Product Details Tabs */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <Tabs defaultValue="specifications" className="w-full">
            <TabsList className="w-full justify-start border-b border-slate-200 bg-transparent rounded-none h-auto p-0 mb-12">
              <TabsTrigger 
                value="specifications" 
                className="px-8 py-4 text-lg font-bold data-[state=active]:border-b-4 data-[state=active]:border-accent data-[state=active]:bg-transparent rounded-none border-b-4 border-transparent"
              >
                Specifications
              </TabsTrigger>
              <TabsTrigger 
                value="benefits" 
                className="px-8 py-4 text-lg font-bold data-[state=active]:border-b-4 data-[state=active]:border-accent data-[state=active]:bg-transparent rounded-none border-b-4 border-transparent"
              >
                Key Benefits
              </TabsTrigger>
              <TabsTrigger 
                value="applications" 
                className="px-8 py-4 text-lg font-bold data-[state=active]:border-b-4 data-[state=active]:border-accent data-[state=active]:bg-transparent rounded-none border-b-4 border-transparent"
              >
                Applications
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="specifications" className="mt-0">
              <div className="max-w-4xl border border-slate-100 rounded-sm shadow-xl overflow-hidden">
                <Table>
                  <TableHeader className="bg-industrial-navy">
                    <TableRow>
                      <TableHead className="text-white font-bold py-6">Technical Parameter</TableHead>
                      <TableHead className="text-white font-bold py-6">Value / Specification</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {product.specs.map((spec, idx: number) => (
                      <TableRow key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <TableCell className="font-bold text-industrial-navy py-4">{spec.param}</TableCell>
                        <TableCell className="text-slate-600 py-4">{spec.value}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
            
            <TabsContent value="benefits" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {product.benefits.map((benefit: string, idx: number) => (
                  <div key={idx} className="flex items-start space-x-4 p-6 bg-slate-50 rounded-sm border-l-4 border-accent">
                    <CheckCircle2 className="text-accent w-6 h-6 shrink-0" />
                    <span className="text-lg font-bold text-industrial-navy">{benefit}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="applications" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {product.applications.map((app: string, idx: number) => (
                  <div key={idx} className="group relative h-48 rounded-sm overflow-hidden shadow-md">
                    <Image src="/images/app_infrastructure_new.png" alt={app} fill className="object-cover opacity-80" />
                    <div className="absolute inset-0 bg-industrial-navy/60 flex items-center justify-center p-4">
                      <h4 className="text-white font-bold text-center text-lg">{app}</h4>
                    </div>
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
