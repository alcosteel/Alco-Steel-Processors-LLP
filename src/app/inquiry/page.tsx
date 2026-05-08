"use client";

import React from "react";
import Link from "next/link";
import { Send, FileText, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PageHero from "@/components/layout/PageHero";

export default function Inquiry() {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="text-green-600 w-12 h-12" />
          </div>
          <h1 className="text-4xl font-bold text-industrial-navy font-heading mb-6">Inquiry Sent!</h1>
          <p className="text-xl text-slate-600 mb-10">
            Thank you! Your requirements have been sent to <span className="font-bold text-industrial-navy">marketingalcosteel@gmail.com</span>. Our technical team will review the specifications and get back to you within 24 hours.
          </p>
          <Link
            href="/"
            className="inline-block px-10 py-4 bg-industrial-navy text-white font-bold rounded-sm hover:bg-industrial-blue transition-all"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-slate-50">
      
    
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="border-none shadow-2xl overflow-hidden">
              <div className="bg-accent h-2 w-full" />
              <CardContent className="p-8 md:p-12 bg-white">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-industrial-navy font-heading flex items-center">
                      <FileText className="mr-3 text-accent" />
                      Project Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-industrial-navy uppercase tracking-widest">Product Type</label>
                        <select className="w-full h-10 px-3 py-2 bg-slate-50 border border-slate-200 rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-accent">
                          <option>PPGI Coils</option>
                          <option>PPGL Coils</option>
                          <option>Roofing Sheets</option>
                          <option>Industrial Sheets</option>
                          <option>Custom Requirement</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-industrial-navy uppercase tracking-widest">Estimated Quantity (Tons/Meters)</label>
                        <Input placeholder="e.g. 50 Tons" className="bg-slate-50" required />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-industrial-navy font-heading flex items-center pt-4 border-t border-slate-100">
                      <Send className="mr-3 text-accent" />
                      Contact Details
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-industrial-navy uppercase tracking-widest">Full Name</label>
                        <Input placeholder="Your Name" className="bg-slate-50" required />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-industrial-navy uppercase tracking-widest">Company Name</label>
                        <Input placeholder="Company Name" className="bg-slate-50" required />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-industrial-navy uppercase tracking-widest">Email Address</label>
                        <Input type="email" placeholder="email@company.com" className="bg-slate-50" required />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-industrial-navy uppercase tracking-widest">Phone Number</label>
                        <Input placeholder="+91 00000 00000" className="bg-slate-50" required />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-industrial-navy uppercase tracking-widest">Technical Specifications / Message</label>
                    <Textarea placeholder="Describe thickness, width, color (RAL), or any other specific requirements..." className="min-h-[150px] bg-slate-50" />
                  </div>

                  <div className="pt-6">
                    <Button type="submit" className="w-full py-8 bg-industrial-navy hover:bg-industrial-blue text-white font-bold text-xl shadow-xl transition-all transform hover:-translate-y-1">
                      Submit Detailed Inquiry
                    </Button>
                    <p className="text-center text-slate-400 text-xs mt-4">
                      By submitting this form, you agree to our Terms of Service and Privacy Policy.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
