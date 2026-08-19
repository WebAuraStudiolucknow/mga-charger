import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, MapPin, Phone, Mail, Clock } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with MGA Electronics for standard battery chargers or custom power solutions.",
};

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
            Contact Our Team
          </h1>
          <p className="text-lg text-secondary-text max-w-2xl">
            Whether you need standard charging equipment or a customized power solution, our engineering team is ready to assist you.
          </p>
        </div>
      </div>

      <div className="max-w-[1280px] xl:max-w-[1400px] mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-lg border border-border shadow-sm">
              <h3 className="text-xl font-bold text-primary-text mb-6 pb-4 border-b border-border">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-accent mr-4 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-primary-text mb-1 uppercase tracking-wider">Address</h4>
                    <p className="text-secondary-text leading-relaxed">
                      Lucknow, Uttar Pradesh,<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-accent mr-4 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-primary-text mb-1 uppercase tracking-wider">Phone</h4>
                    <p className="text-secondary-text">
                      <a href="tel:+917499394690" className="hover:text-accent transition-colors block mb-1">+91 74993 94690</a>
                      <a href="tel:+919076731251" className="hover:text-accent transition-colors block">+91 90767 31251</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-accent mr-4 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-primary-text mb-1 uppercase tracking-wider">Email</h4>
                    <p className="text-secondary-text">
                      <a href="mailto:mgacharger@yahoo.com" className="hover:text-accent transition-colors">mgacharger@yahoo.com</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-accent mr-4 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-primary-text mb-1 uppercase tracking-wider">Business Hours</h4>
                    <p className="text-secondary-text leading-relaxed">
                      Monday - Saturday<br />
                      9:00 AM - 6:00 PM (IST)
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-accent p-8 rounded-lg text-white">
              <h3 className="text-xl font-bold mb-3 tracking-tight">Need a Custom OEM Solution?</h3>
              <p className="text-white/90 mb-6 leading-relaxed text-sm">
                We specialize in designing and manufacturing custom charging solutions based on your specific requirements and battery chemistry.
              </p>
              <ul className="space-y-2 text-sm font-medium">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-white mr-3"></div>
                  Specific voltage/current
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-white mr-3"></div>
                  Specialized connectors
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-white mr-3"></div>
                  Custom branding/casing
                </li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 lg:p-12 rounded-lg border border-border shadow-sm h-full">
              <h2 className="text-2xl md:text-3xl font-bold text-primary-text mb-2 tracking-tight">Send an Enquiry</h2>
              <p className="text-secondary-text mb-8">Please fill out the form below and we will get back to you promptly.</p>
              
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
