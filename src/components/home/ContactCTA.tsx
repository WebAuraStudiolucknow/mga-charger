import Link from "next/link";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";

export function ContactCTA() {
  return (
    <section className="py-20 lg:py-32 bg-white border-b border-border">
      <div className="max-w-[1280px] xl:max-w-[1400px] mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          <div>
            <div className="text-accent font-semibold tracking-wider text-xs uppercase mb-6 flex items-center">
              <span className="w-6 h-[2px] bg-accent mr-3"></span>
              GET IN TOUCH
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-text tracking-tight leading-[1.05] mb-8">
              Let&apos;s build the right power solution.
            </h2>
            <p className="text-lg lg:text-xl text-secondary-text leading-relaxed font-light mb-12">
              Have a standard product requirement or need custom OEM manufacturing? Our engineering team is ready to discuss your specific applications.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-center text-primary-text">
                <Phone className="w-6 h-6 text-accent mr-4 shrink-0" />
                <a href="tel:+917499394690" className="text-lg font-medium hover:text-accent transition-colors">+91-7499394690</a>
              </div>
              <div className="flex items-center text-primary-text">
                <Mail className="w-6 h-6 text-accent mr-4 shrink-0" />
                <a href="mailto:mgacharger@yahoo.com" className="text-lg font-medium hover:text-accent transition-colors">mgacharger@yahoo.com</a>
              </div>
              <div className="flex items-center text-primary-text">
                <MapPin className="w-6 h-6 text-accent mr-4 shrink-0" />
                <span className="text-lg font-medium">Lucknow, Uttar Pradesh, India</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center lg:justify-end">
            <div className="bg-off-white p-10 lg:p-12 rounded-lg border border-border w-full max-w-lg hover:shadow-lg transition-shadow duration-500">
              <h3 className="text-2xl font-bold text-primary-text mb-2">Send an Enquiry</h3>
              <p className="text-secondary-text mb-8 text-sm">Fill out the form and our technical team will contact you.</p>
              
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-secondary-text block mb-2">Name</label>
                  <input type="text" className="w-full bg-white border border-border px-4 py-3 rounded-sm focus:outline-none focus:border-accent transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-secondary-text block mb-2">Requirement</label>
                  <input type="text" className="w-full bg-white border border-border px-4 py-3 rounded-sm focus:outline-none focus:border-accent transition-colors" placeholder="e.g., 12V 10A Charger" />
                </div>
                <Link
                  href="/contact-us"
                  className="bg-primary-text text-white px-6 py-4 rounded-sm font-bold hover:bg-accent transition-colors shadow-sm flex items-center justify-center group w-full mt-6"
                >
                  Continue to Full Form
                  <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
