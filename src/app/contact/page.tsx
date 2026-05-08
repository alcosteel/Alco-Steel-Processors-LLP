"use client";

import React from "react";
import PageHero from "@/components/layout/PageHero";
import Link from "next/link";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would be an API call to a service like Resend or Nodemailer
    alert("Thank you! Your message has been sent to marketingalcosteel@gmail.com. Our team will contact you shortly.");
  };

  return (
    <div className="flex flex-col">
      <PageHero
        title="Get in Touch"
        subtitle="Quality Steel. Reliable Supply. Trusted Partnership. Have questions about our products or need a specialized quote? Our industrial experts are ready to assist you."
        imagePath="/get in touch image.jpg"
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <div className="p-8 bg-industrial-navy text-white rounded-sm shadow-xl">
                <h3 className="text-2xl font-bold font-heading mb-8">Contact Info</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                      <MapPin className="text-accent w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-lg">Address</p>
                      <p className="text-white/60 text-sm">PLOT NO A-57, Taloja MIDC, Navi Mumbai, Raigad, Maharashtra, 410208</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                      <Phone className="text-accent w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-lg">Call Us</p>
                      <p className="text-white/60 text-sm">+91 70394 20963</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                      <Mail className="text-accent w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-lg">Email Us</p>
                      <p className="text-white/60 text-sm">marketingalcosteel@gmail.com</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-12 border-t border-white/10">
                  <p className="font-bold mb-4">Business Hours</p>
                  <div className="flex justify-between text-sm text-white/60 mb-2">
                    <span>Mon - Fri:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between text-sm text-white/60">
                    <span>Sat:</span>
                    <span>10:00 AM - 2:00 PM</span>
                  </div>
                </div>
              </div>

              <div className="p-8 border border-slate-200 rounded-sm">
                <h4 className="font-bold text-industrial-navy mb-4 flex items-center">
                  <MessageSquare className="mr-2 w-5 h-5 text-accent" />
                  Quick WhatsApp Inquiry
                </h4>
                <p className="text-sm text-slate-500 mb-6">Connect with our sales team instantly on WhatsApp for quick pricing.</p>
                <Link
                  href="https://wa.me/917039420963"
                  className="block w-full text-center py-3 bg-green-600 text-white font-bold rounded-sm hover:bg-green-700 transition-all"
                >
                  Chat on WhatsApp
                </Link>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-2">
              <Card className="border-none shadow-2xl p-8 md:p-12">
                <h3 className="text-3xl font-bold text-industrial-navy mb-8 font-heading">Send an Inquiry</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-industrial-navy uppercase tracking-wider">Full Name</label>
                      <Input placeholder="Enter your name" className="bg-slate-50" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-industrial-navy uppercase tracking-wider">Company Name</label>
                      <Input placeholder="Enter your company" className="bg-slate-50" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-industrial-navy uppercase tracking-wider">Email Address</label>
                      <Input type="email" placeholder="email@company.com" className="bg-slate-50" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-industrial-navy uppercase tracking-wider">Phone Number</label>
                      <Input placeholder="+91 00000 00000" className="bg-slate-50" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-industrial-navy uppercase tracking-wider">Product Requirement</label>
                    <Input placeholder="e.g. 50 Tons of PPGI Coils" className="bg-slate-50" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-industrial-navy uppercase tracking-wider">Message / Details</label>
                    <Textarea placeholder="Tell us more about your project requirements..." className="min-h-[150px] bg-slate-50" required />
                  </div>
                  
                  <Button type="submit" className="w-full md:w-auto px-12 py-6 bg-accent hover:bg-orange-600 text-white font-bold text-lg shadow-lg">
                    Send Message
                    <Send className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[450px] relative overflow-hidden">
        <iframe
          src="https://maps.google.com/maps?q=PLOT%20NO%20A-57%2C%20Taloja%20MIDC%2C%20TALOJA%20MIDC%20AREA%2C%20Navi%20Mumbai%2C%20Raigad%2C%20Maharashtra%2C%20410208&t=&z=16&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale hover:grayscale-0 transition-all duration-500"
        ></iframe>
      </section>
    </div>
  );
}
