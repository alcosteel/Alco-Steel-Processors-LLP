import PageHero from "@/components/layout/PageHero";
import Image from "next/image";

const galleryItems = [
  { title: "Precision Steel Coil Slitting", category: "Slitting", image: "/images/service_slitting.jpg" },
  { title: "Cut-to-Length (CTL) Line", category: "Cut-to-Length", image: "/images/service_ctl.jpg" },
  { title: "Heavy Sheet Shearing Machine", category: "Shearing", image: "/images/service_shearing.jpg" },
  { title: "Industrial Coil Processing Facility", category: "Coil Processing", image: "/images/service_coil_processing.jpg" },
  { title: "Custom Steel Conversion Workshop", category: "Custom Conversion", image: "/images/service_custom_conversion.jpg" },
  { title: "ISO Certified Testing Facility", category: "Quality", image: "/images/quality_testing_detail.jpg" },
  { title: "Surface Inspection & Quality Control", category: "Quality", image: "/images/surface_inspection.png" },
];

export default function Gallery() {
  return (
    <div className="flex flex-col ">
      <PageHero
        title="Visual Showcase"
        subtitle="Visualizing our processing excellence, plant operations, and quality standards. A glimpse into the world of Alco Steel."
        imagePath="/images/gallery_hero_v2.png"
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, idx) => (
              <div key={idx} className="group relative aspect-[4/3] overflow-hidden rounded-sm shadow-lg hover:shadow-2xl transition-all duration-500">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-industrial-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-8 text-center">
                  <span className="text-accent font-bold text-xs uppercase tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {item.category}
                  </span>
                  <h3 className="text-white text-xl font-bold font-heading transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {item.title}
                  </h3>
                  <div className="w-12 h-1 bg-accent mt-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 delay-150" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grid Highlight */}
      <section className="py-24 bg-industrial-navy text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl font-bold font-heading mb-8">Capturing Scale & Precision</h2>
              <p className="text-white/60 mb-8 leading-relaxed text-lg">
                Our gallery showcases the tangible results of our &quot;Precision. Reliability. Excellence.&quot; philosophy. From the scale of our processing plant to the precision of every slit coil, we take pride in every visual aspect of our operations.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-accent text-3xl font-bold mb-2">12,000+</h4>
                  <p className="text-white/40 text-sm">Tons Processed Monthly</p>
                </div>
                <div>
                  <h4 className="text-accent text-3xl font-bold mb-2">500+</h4>
                  <p className="text-white/40 text-sm">Industrial Customers</p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="relative aspect-square rounded-sm overflow-hidden border border-white/10">
                <Image src="/images/product_ppgl.png" alt="Gallery" fill className="object-cover opacity-50 hover:opacity-100 transition-opacity" />
              </div>
              <div className="relative aspect-square rounded-sm overflow-hidden border border-white/10 mt-8">
                <Image src="/images/infrastructure_new.png" alt="Gallery" fill className="object-cover opacity-50 hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
