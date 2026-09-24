import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-industrial-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="relative h-5 w-10 md:h-10 md:w-20 lg:h-10 lg:w-20 mb-6 overflow-visible">
              <Image
                src="/alco-logo-transparent.png"
                alt="Alco Steel Processors LLP Logo"
                fill
                className="object-contain brightness-0 invert scale-125 md:scale-150"
              />
            </div>
            <p className="text-white/70 mb-4 leading-relaxed text-[15px]">
              A dedicated steel processing service provider delivering precision slitting, cut-to-length, shearing, and customized coil processing solutions for manufacturers, OEMs, and industrial customers.
            </p>
            <p className="text-accent text-[10px] uppercase font-black tracking-[0.3em] mb-6">
              Precision Processing. Reliable Delivery. Trusted Partnership.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-accent transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="hover:text-accent transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="hover:text-accent transition-colors">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="hover:text-accent transition-colors">
                <Instagram size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold font-heading mb-6 border-l-2 border-accent pl-3">
              Quick Links
            </h4>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-white/80 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/services" className="text-white/80 hover:text-white transition-colors">Processing Services</Link>
              </li>
              <li>
                <Link href="/applications" className="text-white/80 hover:text-white transition-colors">Industries We Serve</Link>
              </li>
              <li>
                <Link href="/plant-infrastructure" className="text-white/80 hover:text-white transition-colors">Plant & Infrastructure</Link>
              </li>
              <li>
                <Link href="/quality" className="text-white/80 hover:text-white transition-colors">Quality Assurance</Link>
              </li>
            </ul>
          </div>

          {/* Processing Services */}
          <div>
            <h4 className="text-lg font-bold font-heading mb-6 border-l-2 border-accent pl-3">
              Processing Services
            </h4>
            <ul className="space-y-4">
              <li>
                <Link href="/services" className="text-white/80 hover:text-white transition-colors">Coil Slitting</Link>
              </li>
              <li>
                <Link href="/services" className="text-white/80 hover:text-white transition-colors">Cut-to-Length Processing</Link>
              </li>
              <li>
                <Link href="/capabilities" className="text-white/80 hover:text-white transition-colors">Processing Capabilities</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold font-heading mb-6 border-l-2 border-accent pl-3">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="text-accent shrink-0 mt-1" size={18} />
                <span className="text-white/80 text-sm">
                  PLOT NO A-57, Taloja MIDC, TALOJA MIDC AREA, Taloja MIDC, Navi Mumbai, Raigad, Maharashtra, 410208
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-accent shrink-0" size={18} />
                <span className="text-white/80 text-sm">+91 70394 20963</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-accent shrink-0" size={18} />
                <span className="text-white/80 text-sm">marketingalcosteel@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-white/80">
          <p>© {currentYear} Alco Steel Processors LLP. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
