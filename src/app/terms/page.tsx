import { Card, CardContent } from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Alco Steel Processor LLP",
  description: "Read the terms and conditions for using Alco Steel Processor LLP's website and services.",
};

export default function Terms() {
  const sections = [
    {
      title: "1. Use of Website",
      content: [
        "The content available on this website is provided for general information and business communication purposes only.",
        "You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of Alco Steel Processor LLP or any third party.",
        "Unauthorized access, misuse, interference with website functionality, data extraction, or any attempt to compromise the security of this website is strictly prohibited.",
        "Alco Steel Processor LLP reserves the right to restrict or deny access to any user in case of misuse or suspected unlawful activity.",
      ],
    },
    {
      title: "2. Intellectual Property Rights",
      content: [
        "All content on this website, including text, images, graphics, logos, trade names, designs, layout, documents, and other materials, is the property of Alco Steel Processor LLP or is used with appropriate permission.",
        "No content from this website may be copied, reproduced, modified, republished, uploaded, posted, transmitted, distributed, or used for commercial purposes without prior written permission from Alco Steel Processor LLP.",
        "Any unauthorized use of the website content may give rise to legal action under applicable laws.",
      ],
    },
    {
      title: "3. Product and Service Information",
      content: [
        "Alco Steel Processor LLP makes reasonable efforts to ensure that product, service, processing, specification, and business information displayed on the website is accurate and updated.",
        "However, the information provided on the website should not be treated as a final offer, contract, warranty, or technical commitment unless confirmed in writing by the company.",
        "Product availability, specifications, dimensions, grades, tolerances, pricing, delivery timelines, and related commercial terms are subject to change without prior notice.",
        "Customers are requested to obtain written confirmation from Alco Steel Processor LLP before placing orders or relying on any product or service information.",
      ],
    },
    {
      title: "4. Quotations, Orders and Commercial Terms",
      content: [
        "Any enquiry submitted through the website does not automatically create a binding contract or obligation on Alco Steel Processor LLP.",
        "All quotations, offers, purchase orders, order confirmations, invoices, delivery schedules, credit terms, payment terms, taxes, duties, freight, and other commercial terms shall be governed by the specific written communication, quotation, purchase order acceptance, or agreement issued by Alco Steel Processor LLP.",
        "Alco Steel Processor LLP reserves the right to accept, reject, modify, or cancel any enquiry, quotation, or order at its discretion, subject to applicable contractual obligations.",
      ],
    },
    {
      title: "5. Limitation of Liability",
      content: [
        "Alco Steel Processor LLP shall not be liable for any direct, indirect, incidental, consequential, special, punitive, or business loss arising from the use of this website or reliance on any information available on the website.",
        "The company does not guarantee that the website will always be available, uninterrupted, error-free, virus-free, or free from technical defects.",
        "Users are responsible for taking adequate precautions to protect their systems, data, and devices while accessing the website.",
      ],
    },
    {
      title: "6. External Links",
      content: [
        "This website may contain links to third-party websites, platforms, or resources for user convenience.",
        "Alco Steel Processor LLP does not control, endorse, or take responsibility for the content, accuracy, privacy practices, security, or policies of any third-party websites.",
        "Users accessing third-party links do so at their own risk and are advised to review the terms and privacy policies of such websites.",
      ],
    },
    {
      title: "7. Privacy Policy",
      content: [
        "Use of this website is also governed by the Privacy Policy of Alco Steel Processor LLP.",
        "By using this website, you consent to the collection and use of information in accordance with the applicable Privacy Policy.",
      ],
    },
    {
      title: "8. Disclaimer",
      content: [
        "The information on this website is provided on an “as is” and “as available” basis without any express or implied warranty.",
        "Alco Steel Processor LLP does not make any representation or warranty regarding the completeness, reliability, suitability, or accuracy of the website content for any specific purpose.",
        "Nothing contained on this website shall be construed as professional, technical, legal, financial, or contractual advice.",
      ],
    },
    {
      title: "9. Indemnity",
      content: [
        "You agree to indemnify, defend, and hold harmless Alco Steel Processor LLP, its partners, employees, representatives, and affiliates from any claims, losses, liabilities, damages, costs, or expenses arising out of your misuse of the website, breach of these Terms & Conditions, or violation of any applicable law or third-party rights.",
      ],
    },
    {
      title: "10. Governing Law and Jurisdiction",
      content: [
        "These Terms & Conditions shall be governed by and interpreted in accordance with the laws of India.",
        "Any dispute arising out of or relating to the use of this website shall be subject to the exclusive jurisdiction of the competent courts at Mumbai, Maharashtra, India, unless otherwise specified in a written agreement.",
      ],
    },
    {
      title: "11. Changes to Terms & Conditions",
      content: [
        "Alco Steel Processor LLP reserves the right to update, modify, amend, or replace these Terms & Conditions at any time without prior notice.",
        "Continued use of the website after any changes are posted shall constitute acceptance of the revised Terms & Conditions.",
        "Users are encouraged to review this page periodically to stay informed about the applicable terms.",
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <section className="py-8 md:py-16 relative z-10 mb-20">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <Card className="border-none shadow-2xl shadow-industrial-navy/10 overflow-hidden">
            <div className="bg-industrial-navy p-8 md:p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Terms of Use</h2>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <p className="text-white/70 text-lg">Alco Steel Processor LLP</p>
                <p className="text-white/50 text-sm font-medium px-4 py-1.5 bg-white/10 rounded-full border border-white/5 backdrop-blur-sm">
                  Last Updated: May 11, 2026
                </p>
              </div>
              <div className="w-16 h-1 bg-accent mt-6" />
            </div>
            <CardContent className="p-8 md:p-12 bg-white">
              <div className="prose prose-slate max-w-none">
                <p className="text-slate-600 mb-12 text-lg leading-relaxed italic border-l-4 border-accent pl-6 bg-slate-50 py-6 rounded-r-lg">
                  Welcome to the website of Alco Steel Processor LLP. By accessing, browsing, or using this website, you agree to comply with and be bound by the following Terms & Conditions. If you do not agree with these terms, please do not use this website.
                </p>

                <div className="space-y-16">
                  {sections.map((section, index) => (
                    <div key={index} className="group">
                      <h3 className="text-2xl font-bold text-industrial-navy mb-6 font-heading group-hover:text-accent transition-colors flex items-center">
                        <span className="w-8 h-8 rounded-lg bg-industrial-navy text-white text-sm flex items-center justify-center mr-4 group-hover:bg-accent transition-colors">
                          {index + 1}
                        </span>
                        {section.title.split(". ")[1]}
                      </h3>
                      <div className="space-y-4 ml-12">
                        {section.content.map((para, pIndex) => (
                          <p key={pIndex} className="text-slate-600 leading-relaxed text-lg">
                            {para}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-24 pt-12 border-t border-slate-200">
                  <h3 className="text-2xl font-bold text-industrial-navy mb-8 font-heading flex items-center">
                    <span className="w-8 h-8 rounded-lg bg-industrial-navy text-white text-sm flex items-center justify-center mr-4">
                      12
                    </span>
                    Contact Us
                  </h3>
                  <div className="bg-industrial-navy/[0.02] p-8 md:p-10 rounded-3xl border border-industrial-navy/5 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700" />
                    
                    <p className="font-bold text-industrial-navy text-xl mb-6">Alco Steel Processor LLP</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-slate-600 relative z-10">
                      <div>
                        <p className="font-bold text-industrial-navy mb-2 text-sm uppercase tracking-widest text-accent">Office Address</p>
                        <p className="text-lg">
                          PLOT NO A-57, Taloja MIDC,<br />
                          TALOJA MIDC AREA, Taloja MIDC,<br />
                          Navi Mumbai, Raigad, Maharashtra, 410208
                        </p>
                      </div>
                      <div className="space-y-6">
                        <div>
                          <p className="font-bold text-industrial-navy mb-2 text-sm uppercase tracking-widest text-accent">Phone Number</p>
                          <p className="text-lg font-medium text-industrial-navy">9619819123</p>
                        </div>
                        <div>
                          <p className="font-bold text-industrial-navy mb-2 text-sm uppercase tracking-widest text-accent">Email Address</p>
                          <p className="text-lg font-medium text-industrial-navy">marketingalcosteel@gmail.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
