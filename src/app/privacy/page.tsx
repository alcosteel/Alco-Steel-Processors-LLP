import { Card, CardContent } from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Alco Steel Processor LLP",
  description: "Read our privacy policy to understand how Alco Steel Processor LLP collects, uses, and protects your information.",
};

export default function Privacy() {
  const sections = [
    {
      title: "1. Information We Collect",
      content: [
        {
          subtitle: "Personal Information",
          items: [
            "Name", "Email address", "Phone number", "Company name", "Designation",
            "Business address", "GST details, if provided", "Product enquiry details",
            "Any other information submitted through contact forms, enquiry forms, email, or direct communication"
          ]
        },
        {
          subtitle: "Usage and Technical Information",
          items: [
            "IP address", "Browser type", "Device information", "Pages visited on our website",
            "Time spent on the website", "Cookies and similar tracking data"
          ]
        }
      ],
    },
    {
      title: "2. How We Use Your Information",
      content: [
        "To respond to your enquiries, quotation requests, or service requirements",
        "To communicate regarding products, pricing, orders, dispatches, and business updates",
        "To provide customer support and improve our services",
        "To maintain internal business records",
        "To improve our website, products, and customer experience",
        "To send business updates, promotional communication, or newsletters, only where permitted",
        "To comply with legal, tax, regulatory, and statutory obligations",
        "To protect our business, rights, property, and legal interests"
      ],
    },
    {
      title: "3. Data Protection and Security",
      content: [
        "We take reasonable and industry-standard security measures to protect your personal information from unauthorized access, misuse, loss, alteration, or disclosure.",
        "However, no method of online data transmission or electronic storage is completely secure. Therefore, while we make reasonable efforts to protect your information, we cannot guarantee absolute security."
      ],
    },
    {
      title: "4. Sharing of Information",
      content: [
        "We do not sell, rent, or trade your personal information. Your information may be shared only in limited circumstances, including the following:",
        "With trusted service providers who assist us in website management, business operations, logistics, accounting, or communication",
        "With banks, auditors, consultants, legal advisors, or regulatory authorities where required for business or legal purposes",
        "When required by law, regulation, court order, or government authority",
        "To protect the rights, safety, property, or legal interests of Alco Steel Processor LLP",
        "All such sharing is done only to the extent necessary and in accordance with applicable laws."
      ],
    },
    {
      title: "5. Cookies and Tracking Technologies",
      content: [
        "Our website may use cookies and similar technologies to enhance user experience, analyze website traffic, and improve website functionality.",
        "You may choose to disable cookies through your browser settings. However, disabling cookies may affect certain features or functionality of the website."
      ],
    },
    {
      title: "6. Third-Party Links",
      content: [
        "Our website may contain links to third-party websites or external platforms.",
        "Alco Steel Processor LLP is not responsible for the privacy practices, content, security, or policies of such third-party websites. Users are encouraged to review the privacy policies of those websites before sharing any personal information."
      ],
    },
    {
      title: "7. Retention of Information",
      content: [
        "We retain your personal information only for as long as necessary to fulfill the purpose for which it was collected, including business, legal, accounting, tax, or regulatory requirements.",
        "Once the information is no longer required, we may securely delete, archive, or anonymize it as per applicable law and internal business practices."
      ],
    },
    {
      title: "8. Your Rights and Choices",
      content: [
        "Subject to applicable law, you may have the right to:",
        "Request access to the personal information we hold about you",
        "Request correction or updating of inaccurate information",
        "Request deletion of your personal data, where legally permissible",
        "Withdraw consent for marketing or promotional communication",
        "Opt out of non-essential communication",
        "For any such request, you may contact us using the details provided below."
      ],
    },
    {
      title: "9. Marketing Communication",
      content: [
        "We may use your contact details to send business updates, product information, offers, or promotional communication related to our products and services.",
        "You may opt out of receiving such communication at any time by contacting us or using the unsubscribe option, where available."
      ],
    },
    {
      title: "10. Children’s Privacy",
      content: [
        "Our website and services are intended for business and commercial users. We do not knowingly collect personal information from children or minors.",
        "If we become aware that any personal information of a minor has been collected, we will take reasonable steps to delete such information."
      ],
    },
    {
      title: "11. Changes to This Privacy Policy",
      content: [
        "Alco Steel Processor LLP may update or revise this Privacy Policy from time to time.",
        "Any changes will be posted on this page with the updated effective date. Users are encouraged to review this policy periodically to stay informed about how we protect their information."
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <section className="py-8 md:py-16 relative z-10 mb-20">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <Card className="border-none shadow-2xl shadow-industrial-navy/10 overflow-hidden">
            <div className="bg-industrial-navy p-8 md:p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Privacy Policy</h2>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <p className="text-white/70 text-lg">Alco Steel Processor LLP</p>
                <p className="text-white/50 text-sm font-medium px-4 py-1.5 bg-white/10 rounded-full border border-white/5 backdrop-blur-sm">
                  Effective Date: May 11, 2026
                </p>
              </div>
              <div className="w-16 h-1 bg-accent mt-6" />
            </div>
            <CardContent className="p-8 md:p-12 bg-white">
              <div className="prose prose-slate max-w-none">
                <p className="text-slate-600 mb-12 text-lg leading-relaxed italic border-l-4 border-accent pl-6 bg-slate-50 py-6 rounded-r-lg">
                  At Alco Steel Processor LLP, we respect your privacy and are committed to protecting the personal information you share with us through our website, enquiry forms, emails, phone calls, or any other communication channels. This Privacy Policy explains how we collect, use, store, protect, and disclose your information when you interact with our website or services.
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
                        {section.content.map((item, iIndex) => (
                          typeof item === "string" ? (
                            <p key={iIndex} className="text-slate-600 leading-relaxed text-lg">
                              {item}
                            </p>
                          ) : (
                            <div key={iIndex} className="mt-6 first:mt-0">
                              <h4 className="font-bold text-industrial-navy mb-3">{item.subtitle}</h4>
                              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                                {item.items.map((li, liIndex) => (
                                  <li key={liIndex} className="text-slate-600 flex items-start">
                                    <span className="text-accent mr-2 mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                                    <span>{li}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )
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
