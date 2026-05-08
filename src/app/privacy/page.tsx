import PageHero from "@/components/layout/PageHero";

export default function Privacy() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PageHero
        title="Privacy Policy"
        subtitle="We respect your privacy and are committed to protecting it through our compliance with this policy."
        imagePath="/images/surface_inspection.png"
      />

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="prose prose-slate lg:prose-lg">
            <h2 className="text-2xl font-bold text-industrial-navy mb-4 font-heading">1. Introduction</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              At Alco Steel Processors LLP, we respect your privacy and are committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you visit the website alcosteel.com.
            </p>

            <h2 className="text-2xl font-bold text-industrial-navy mb-4 font-heading">2. Information We Collect</h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              We collect several types of information from and about users of our Website, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-8">
              <li>Information by which you may be personally identified, such as name, postal address, e-mail address, and telephone number.</li>
              <li>Information about your internet connection, the equipment you use to access our Website, and usage details.</li>
            </ul>

            <h2 className="text-2xl font-bold text-industrial-navy mb-4 font-heading">3. How We Use Your Information</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              We use information that we collect about you or that you provide to us to present our Website and its contents to you, to provide you with information, products, or services that you request from us, and to fulfill any other purpose for which you provide it.
            </p>

            <h2 className="text-2xl font-bold text-industrial-navy mb-4 font-heading">4. Data Security</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
