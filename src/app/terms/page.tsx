import PageHero from "@/components/layout/PageHero";

export default function Terms() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PageHero
        title="Terms & Conditions"
        subtitle="Standard operating procedures and commercial terms for our steel processing and supply services."
        imagePath="/images/surface_inspection.png"
      />

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="prose prose-slate lg:prose-lg">
            <h2 className="text-2xl font-bold text-industrial-navy mb-4 font-heading">1. Acceptance of Terms</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
            </p>

            <h2 className="text-2xl font-bold text-industrial-navy mb-4 font-heading">2. Industrial Specifications</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              All technical specifications provided on this website are for informational purposes only. Actual product specifications may vary based on processing tolerances and specific batch testing. Please refer to your final commercial invoice and technical test report for binding specifications.
            </p>

            <h2 className="text-2xl font-bold text-industrial-navy mb-4 font-heading">3. Intellectual Property</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              The Website and its original content, features, and functionality are owned by Alco Steel Processors LLP and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>

            <h2 className="text-2xl font-bold text-industrial-navy mb-4 font-heading">4. Limitation of Liability</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              In no event shall Alco Steel Processors LLP, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
