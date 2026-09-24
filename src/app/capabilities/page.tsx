import PageHero from "@/components/layout/PageHero";
import Link from "next/link";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Layers, Ruler, Weight, Target, Gauge, PackageCheck } from "lucide-react";

const materialTypes = [
  "CRCA (Cold Rolled Close Annealed)",
  "HR (Hot Rolled)",
  "GP (Galvanized Plain)",
  "GI (Galvanized Iron)",
  "GPSP (Galvanized Plain Steel Sheet)",
  "PPGI (Pre-Painted Galvanized Iron)",
  "PPGL (Pre-Painted Galvalume)",
  "Stainless Steel",
];

const capabilitySpecs = [
  { param: "Thickness Range", value: "0.12mm - 3.00mm" },
  { param: "Width Range", value: "20mm - 1300mm" },
  { param: "Maximum Coil Weight", value: "Up to 15 Tons" },
  { param: "Processing Tolerance", value: "± 0.02mm - 0.05mm" },
  { param: "Monthly Processing Capacity", value: "12,000+ Tons" },
  { param: "Packaging Standard", value: "Export-Grade, Moisture-Protected Coil & Sheet Packing" },
];

const capabilityHighlights = [
  {
    icon: <Layers className="w-8 h-8" />,
    title: "Material Types",
    description: "CRCA, HR, GP, GI, GPSP, PPGI, PPGL, and Stainless Steel processed to spec.",
  },
  {
    icon: <Ruler className="w-8 h-8" />,
    title: "Thickness & Width",
    description: "Flexible processing across a wide thickness and width range for varied applications.",
  },
  {
    icon: <Weight className="w-8 h-8" />,
    title: "Coil Weight",
    description: "Handling capacity for coils up to 15 tons using dedicated EOT crane support.",
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Tight Tolerances",
    description: "Precision processing tolerances maintained across every production run.",
  },
  {
    icon: <Gauge className="w-8 h-8" />,
    title: "Processing Capacity",
    description: "High monthly throughput to support large and recurring processing orders.",
  },
  {
    icon: <PackageCheck className="w-8 h-8" />,
    title: "Packaging Standards",
    description: "Consistent, transit-ready packaging for coils, sheets, and slit strips.",
  },
];

export default function Capabilities() {
  return (
    <div className="flex flex-col">
      <PageHero
        title="Processing Capabilities"
        subtitle="A detailed look at the materials, dimensions, tolerances, and capacity that define our steel processing service center."
        imagePath="/images/service_ctl.jpg"
      />

      {/* Material Types */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-4 font-heading">
              Materials We Process
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-industrial-navy font-heading leading-tight">
              Material Types Processed
            </h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {materialTypes.map((material, idx) => (
              <div
                key={idx}
                className="p-6 bg-slate-50 border border-slate-100 rounded-sm text-center hover:shadow-lg hover:border-accent transition-all"
              >
                <span className="font-bold text-industrial-navy">{material}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capability Highlights */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilityHighlights.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-all border-t-4 border-accent"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-6 text-accent">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-industrial-navy mb-4">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Table */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-industrial-navy font-heading mb-6">
              Technical Processing Parameters
            </h2>
            <p className="text-slate-600">
              Key specifications that define our steel coil and sheet processing capabilities.
            </p>
          </div>

          <div className="w-full max-w-4xl mx-auto bg-white border border-slate-200 rounded-sm shadow-2xl overflow-hidden">
            <Table>
              <TableHeader className="bg-industrial-navy">
                <TableRow>
                  <TableHead className="text-white font-bold py-4 md:py-6 px-4 md:px-8 text-base md:text-lg">Parameter</TableHead>
                  <TableHead className="text-white font-bold py-4 md:py-6 px-4 md:px-8 text-base md:text-lg">Value / Specification</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {capabilitySpecs.map((spec, idx) => (
                  <TableRow key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                    <TableCell className="font-bold text-industrial-navy py-3.5 md:py-5 px-4 md:px-8 border-r border-slate-100 whitespace-normal md:whitespace-nowrap">
                      {spec.param}
                    </TableCell>
                    <TableCell className="text-slate-600 py-3.5 md:py-5 px-4 md:px-8 font-medium whitespace-normal">
                      {spec.value}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-industrial-navy text-white text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 font-heading">Need a Specific Processing Capability?</h2>
          <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
            Tell us your material, thickness, width, and quantity requirements and our technical team will confirm feasibility.
          </p>
          <Link
            href="/inquiry"
            className="px-12 py-5 bg-accent text-white font-bold rounded-sm text-lg hover:bg-orange-600 transition-all shadow-xl"
          >
            Request Processing Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
