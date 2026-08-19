import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Cog, Zap, Award, Sparkles, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | MGA Electronics",
  description: "Learn about MGA Electronics, India's leading manufacturer and exporter of advanced battery chargers, custom hardware & software solutions since 2002.",
};

const prestigiousClients = [
  "LUMINOUS", "EXIDE", "TERRA MOTOR", "GOLDSTAR", 
  "MASSIMO", "EASTMAN", "TUFFBULL", "GENUS", "LIVFAST", "HI POWER"
];

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-secondary-bg overflow-hidden border-b border-border">
        <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
          <Image
            src="/images/about-facility.png"
            alt="MGA Electronics Facility"
            fill
            className="object-cover opacity-90"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary-bg via-secondary-bg/80 to-transparent"></div>
        </div>
        <div className="max-w-[1280px] xl:max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <div className="text-accent font-semibold tracking-wider text-sm uppercase mb-4 flex items-center">
              <span className="w-8 h-[2px] bg-accent mr-4"></span>
              WELCOME TO MGA ELECTRONICS
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-text mb-6 tracking-tight leading-[1.1]">
              Innovation & Passion Since 2002
            </h1>
            <p className="text-lg md:text-xl text-secondary-text leading-relaxed font-light mb-8">
              Incepted in the year 2002 at Lucknow (Uttar Pradesh, India), MGA Electronics is India's leading brand in custom software, hardware, design, and battery charger manufacturing.
            </p>
          </div>
        </div>
      </section>

      {/* Main Narrative Content */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1280px] xl:max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="text-xs font-bold text-accent uppercase tracking-widest bg-accent-light px-3 py-1 rounded-full mb-4 inline-block">
                  About Our Vision
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-primary-text mb-6 leading-tight">
                  Leading Manufacturers & Exporters of Advanced Battery Chargers
                </h2>
              </div>

              <div className="prose prose-lg text-secondary-text space-y-6 leading-relaxed">
                <p>
                  We, <strong>MGA Electronics</strong>, provide custom software, hardware, design, and manufacturing solutions to meet the precise needs of our clients. Furthermore, we are leading manufacturers and exporters of a wide range of Battery Chargers.
                </p>

                <p>
                  MGA Electronics is the leading <strong>BRAND</strong> in the manufacturing of almost all types of Battery chargers in <strong>INDIA</strong>, and we feel honoured to supply our chargers to the greatest, prestigious clients in the battery world like <strong>LUMINOUS</strong>, <strong>EXIDE</strong>, <strong>TERRA MOTOR</strong>, <strong>GOLDSTAR</strong>, <strong>MASSIMO</strong>, <strong>EASTMAN</strong>, <strong>TUFFBULL</strong>, <strong>GENUS</strong>, <strong>LIVFAST</strong>, <strong>HI POWER</strong>, and more.
                </p>

                <p>
                  Modern Battery chargers which are applicable to charge all <em>Automotive batteries, SMPS Batteries, VRLA Batteries, TUBULAR Batteries, Inverter Batteries</em> etc. with automatic cutoff and inbuilt Turbo charge features.
                </p>

                <p className="border-l-4 border-accent pl-6 py-2 italic font-medium text-primary-text bg-accent-light/40 rounded-r-lg">
                  "Our motto has always been Customer Delight through Innovation & Passion with the focus on Execution & Teamwork. At MGA, we passionately innovate to make life comfortable and efficient."
                </p>
              </div>

              {/* Prestigious Clients Strip */}
              <div className="pt-8 border-t border-border/80">
                <h3 className="text-sm font-bold uppercase tracking-wider text-primary-text mb-4 flex items-center">
                  <Award className="w-4 h-4 text-accent mr-2" />
                  Trusted by Prestigious Industry Leaders
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {prestigiousClients.map((client, idx) => (
                    <span 
                      key={idx}
                      className="px-3.5 py-1.5 rounded-lg bg-secondary-bg text-primary-text font-bold text-xs border border-border shadow-2xs hover:border-accent hover:text-accent transition-colors"
                    >
                      {client}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Right Value Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-secondary-bg p-8 rounded-2xl border border-border shadow-sm">
                <Building2 className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-xl font-bold text-primary-text mb-2">Established 2002</h3>
                <p className="text-secondary-text text-sm leading-relaxed">
                  Headquartered at Lucknow, Uttar Pradesh, India with 20+ years of dedicated engineering and manufacturing excellence.
                </p>
              </div>

              <div className="bg-secondary-bg p-8 rounded-2xl border border-border shadow-sm">
                <Zap className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-xl font-bold text-primary-text mb-2">Automatic & Turbo Charge</h3>
                <p className="text-secondary-text text-sm leading-relaxed">
                  Engineered with smart auto-cutoff, multi-stage charge profiles, and high-speed Turbo Charge features.
                </p>
              </div>

              <div className="bg-secondary-bg p-8 rounded-2xl border border-border shadow-sm">
                <Sparkles className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-xl font-bold text-primary-text mb-2">Custom R&D Solutions</h3>
                <p className="text-secondary-text text-sm leading-relaxed">
                  Complete end-to-end custom hardware design, embedded software programming, and manufacturing for OEM requirements.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-text text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Partner With MGA Electronics</h2>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            Discover how our custom battery charging & power electronics solutions can power your next industrial project.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center bg-accent text-white px-8 py-4 rounded-xl font-semibold hover:bg-accent-dark transition-all duration-300 shadow-lg shadow-accent/20 text-lg"
          >
            Contact Our Team
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
