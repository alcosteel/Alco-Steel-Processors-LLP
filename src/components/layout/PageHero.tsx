import React from "react";
import Image from "next/image";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  imagePath: string;
}

export default function PageHero({ title, subtitle, imagePath }: PageHeroProps) {
  return (
    <section className="relative min-h-screen bg-industrial-navy overflow-hidden flex items-center justify-center text-center pt-20">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imagePath}
          alt={title}
          fill
          priority
          className="object-cover brightness-[0.35] grayscale-[0.3]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-industrial-navy/60 via-transparent to-industrial-navy/80" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter font-heading">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-2xl mx-auto font-light">
              {subtitle}
            </p>
          )}
          <div className="w-24 h-1 bg-accent mx-auto mt-8" />
        </div>
      </div>
    </section>
  );
}
