import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Chatbot from "@/components/ui/Chatbot";
import { cn } from "@/lib/utils";
import { MessageCircle } from "lucide-react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alco Steel Processors LLP | Premium Steel & Roofing Solutions",
  description: "Alco Steel Processors LLP is a leading manufacturer and processor of high-quality PPGI, PPGL, and color-coated steel products for modern infrastructure.",
  keywords: ["Steel", "PPGI", "PPGL", "Color Coated Steel", "Industrial Manufacturing", "Roofing", "Cladding", "Alco Steel"],
  openGraph: {
    title: "Alco Steel Processors LLP",
    description: "Strength. Durability. Excellence. Premium industrial steel solutions.",
    type: "website",
    locale: "en_IN",
    siteName: "Alco Steel Processors LLP",
  },
  icons: {
    icon: "/alco-brand-icon.png",
    apple: "/alco-brand-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("scroll-smooth", inter.variable, outfit.variable)}>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased"
        )}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        
        {/* Chatbot & WhatsApp CTA */}
        <Chatbot />
        <a
          href="https://wa.me/917039420963"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110 flex items-center justify-center group"
          aria-label="Contact on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 font-bold">
            Chat with us
          </span>
        </a>
      </body>
    </html>
  );
}
