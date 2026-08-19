import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, MapPin, Phone, Mail, Clock, ExternalLink, ShieldCheck } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | MGA Electronics",
  description: "Get in touch with MGA Electronics for standard battery chargers or custom power solutions.",
};

const officialEmails = [
  { label: "General Info", email: "info@mgacharger.com" },
  { label: "Sales & Enquiry", email: "enquiry@mgacharger.com" },
  { label: "Warranty Support", email: "warranty@mgacharger.com" },
  { label: "Direct Contact", email: "contact@mgacharger.com" },
];

export default function ContactPage() {
  return (
    <div className="bg-secondary-bg min-h-screen pb-20">
      <div className="bg-white border-b border-border py-12 lg:py-16">
        <div className="max-w-[1280px] xl:max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="flex items-center text-sm text-secondary-text mb-6">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-primary-text font-medium">Contact Us</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-primary-text mb-4 tracking-tight">
            Contact Our Engineering Team
          </h1>
          <p className="text-lg text-secondary-text max-w-2xl font-light">
            Whether you need standard charging equipment or a customized power solution, our team is ready to assist you.
          </p>
        </div>
      </div>

      <div className="max-w-[1280px] xl:max-w-[1400px] mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-2xl border border-border shadow-sm">
              <h3 className="text-xl font-bold text-primary-text mb-6 pb-4 border-b border-border">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-accent mr-4 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-primary-text mb-1 uppercase tracking-wider">Manufacturing Plant Address</h4>
                    <p className="text-secondary-text leading-relaxed text-sm">
                      Lucknow, Uttar Pradesh,<br />
                      India (Pin: 226001)
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-accent mr-4 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-primary-text mb-1 uppercase tracking-wider">Phone Lines</h4>
                    <p className="text-secondary-text text-sm">
                      <a href="tel:+917499394690" className="hover:text-accent transition-colors block mb-1">+91 74993 94690</a>
                      <a href="tel:+919076731251" className="hover:text-accent transition-colors block">+91 90767 31251</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-accent mr-4 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-primary-text mb-2 uppercase tracking-wider">Official Email Desks</h4>
                    <div className="space-y-1.5 text-xs">
                      {officialEmails.map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between">
                          <span className="text-slate-500 font-medium">{item.label}:</span>
                          <a href={`mailto:${item.email}`} className="text-primary-text font-bold hover:text-accent transition-colors ml-2">
                            {item.email}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-accent mr-4 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-primary-text mb-1 uppercase tracking-wider">Working Hours</h4>
                    <p className="text-secondary-text text-sm leading-relaxed">
                      Monday - Saturday<br />
                      9:00 AM - 6:00 PM (IST)
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Staff Mail Login Portal Box */}
            <div className="bg-white p-6 rounded-2xl border border-border shadow-sm flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold text-primary-text flex items-center">
                  <ShieldCheck className="w-4 h-4 text-accent mr-1.5" />
                  MGA Staff Mail Portal
                </h4>
                <p className="text-xs text-secondary-text mt-0.5">Access official webmail inbox</p>
              </div>
              <a
                href="https://s3744.bom1.stableserver.net:2096/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent/10 text-accent font-bold text-xs px-3.5 py-2 rounded-lg hover:bg-accent hover:text-white transition-colors flex items-center shrink-0"
              >
                Mail Login
                <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
              </a>
            </div>

            <div className="bg-accent p-8 rounded-2xl text-white shadow-lg shadow-accent/20">
              <h3 className="text-xl font-bold mb-3 tracking-tight">Need a Custom OEM Solution?</h3>
              <p className="text-white/90 mb-6 leading-relaxed text-sm font-light">
                We specialize in designing and manufacturing custom battery chargers based on your specific voltage, current, and battery chemistry.
              </p>
              <ul className="space-y-2 text-xs font-medium">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-white mr-3"></div>
                  Specific voltage & current profiles
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-white mr-3"></div>
                  Specialized connectors & casing
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-white mr-3"></div>
                  Custom OEM branding & firmware
                </li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 lg:p-12 rounded-2xl border border-border shadow-sm h-full">
              <h2 className="text-2xl md:text-3xl font-bold text-primary-text mb-2 tracking-tight">Send an Enquiry</h2>
              <p className="text-secondary-text mb-8">Please fill out the form below and our technical team will respond within 24 hours.</p>
              
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
