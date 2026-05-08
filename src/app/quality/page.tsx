import PageHero from "@/components/layout/PageHero";
import Image from "next/image";
import { ShieldCheck, Award, Microscope, Ruler, FlaskConical, FileCheck } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const qualityTests = [
  { test: "Coating Thickness", method: "Magnetic Induction", standard: "ASTM D7091" },
  { test: "T-Bend Test", method: "Mechanical Bend", standard: "ASTM D4145" },
  { test: "Salt Spray", method: "Corrosion Chamber", standard: "ASTM B117" },
  { test: "Pencil Hardness", method: "Gouge Resistance", standard: "ASTM D3363" },
  { test: "Impact Resistance", method: "Falling Weight", standard: "ASTM D2794" },
  { test: "Color Consistency", method: "Spectrophotometer", standard: "ISO 11664" },
];

export default function Quality() {
  return (
    <div className="flex flex-col ">
      {/* Page Header */}
      <PageHero
        title="Quality Assurance"
        subtitle="Our quality control protocols ensure every sheet delivered meets the highest global standards. Zero-compromise quality for mission-critical infrastructure."
        imagePath="/images/quality_hero_v3.jpg"
      />

      {/* Quality Philosophy */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2 relative">
              <div className="relative h-[500px] rounded-sm overflow-hidden shadow-2xl">
                <Image
                  src="/images/quality_testing_detail.jpg"
                  alt="Quality Testing"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-accent p-10 text-white shadow-xl hidden md:block">
                <ShieldCheck size={64} className="mb-4" />
                <h4 className="text-2xl font-bold font-heading">ISO 9001:2015</h4>
                <p className="text-white/80 font-medium">Certified Operations</p>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl font-bold text-industrial-navy mb-8 font-heading">The Alco Quality Promise</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-slate-100 rounded-sm flex items-center justify-center shrink-0 text-industrial-blue">
                    <Microscope size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-industrial-navy mb-2 font-heading">Microscopic Analysis</h4>
                    <p className="text-slate-600">Continuous surface monitoring for uniform coating distribution and zero-pinhole finish.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-slate-100 rounded-sm flex items-center justify-center shrink-0 text-industrial-blue">
                    <Ruler size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-industrial-navy mb-2 font-heading">Precision Profiling</h4>
                    <p className="text-slate-600">Profile accuracy maintained within 0.5mm tolerance to ensure perfect interlocking and leak-proof roofing.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-slate-100 rounded-sm flex items-center justify-center shrink-0 text-industrial-blue">
                    <FlaskConical size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-industrial-navy mb-2 font-heading">Chemical Resistance</h4>
                    <p className="text-slate-600">All pre-painted sheets are tested against industrial pollutants and saline environments.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testing Standards Table */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-industrial-navy font-heading mb-6">Rigorous Testing Protocol</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Every batch of steel processed at Alco Steel undergoes a series of mandatory tests before being cleared for shipment.
            </p>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-sm shadow-xl border border-slate-200 overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-b-2 border-industrial-navy hover:bg-transparent">
                  <TableHead className="text-industrial-navy font-bold text-lg py-6">Test Parameter</TableHead>
                  <TableHead className="text-industrial-navy font-bold text-lg py-6">Methodology</TableHead>
                  <TableHead className="text-industrial-navy font-bold text-lg py-6">Standard Followed</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {qualityTests.map((item, idx) => (
                  <TableRow key={idx} className="hover:bg-slate-50 transition-colors">
                    <TableCell className="font-bold text-slate-800 py-6">{item.test}</TableCell>
                    <TableCell className="text-slate-600 py-6">{item.method}</TableCell>
                    <TableCell className="py-6">
                      <span className="inline-block px-3 py-1 bg-slate-100 rounded text-xs font-bold text-industrial-blue border border-slate-200">
                        {item.standard}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* Certifications Banner */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center opacity-40 hover:opacity-100 transition-opacity duration-500">
            <div className="flex flex-col items-center">
              <Award size={64} className="mb-4" />
              <span className="font-bold text-sm text-center">ISO 9001:2015</span>
            </div>
            <div className="flex flex-col items-center">
              <ShieldCheck size={64} className="mb-4" />
              <span className="font-bold text-sm text-center">ISI MARKED</span>
            </div>
            <div className="flex flex-col items-center">
              <FileCheck size={64} className="mb-4" />
              <span className="font-bold text-sm text-center">CE CERTIFIED</span>
            </div>
            <div className="flex flex-col items-center">
              <Award size={64} className="mb-4" />
              <span className="font-bold text-sm text-center">MSME CERTIFIED</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
