import React from "react";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] bg-industrial-navy flex flex-col items-center justify-center">
      <div className="mb-8 relative h-12 w-40 md:h-16 md:w-56 lg:h-20 lg:w-64 overflow-visible">
        <Image
          src="/alco-logo-transparent.png"
          alt="Alco Steel Logo"
          fill
          className="object-contain brightness-0 invert scale-125 md:scale-150"
          priority
        />
      </div>
      <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden relative">
        <div className="absolute inset-0 bg-accent w-1/3 animate-loading" />
      </div>
      <p className="mt-4 text-white/40 text-xs font-bold uppercase tracking-[0.2em]">
        Forging Excellence
      </p>
    </div>
  );
}
