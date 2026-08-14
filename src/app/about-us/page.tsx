import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Cog, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about MGA Electronics, a leading manufacturer and exporter of advanced battery chargers and customized power solutions since 2002.",
};

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-secondary-bg overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
          <Image
            src="/images/about-facility.png"
            alt="MGA Electronics Facility"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary-bg to-transparent"></div>
        </div>
        <div className="max-w-[1280px] xl:max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <div className="text-accent font-semibold tracking-wider text-sm uppercase mb-4 flex items-center">
              <span className="w-8 h-[2px] bg-accent mr-4"></span>
              COMPANY STORY
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-text mb-6 tracking-tight leading-[1.1]">
              Powering Industries Since 2002
            </h1>
            <p className="text-xl text-secondary-text leading-relaxed mb-8">
              Based in Lucknow, India, MGA Electronics is a leading manufacturer and exporter of advanced battery chargers and customized power solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1280px] xl:max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold text-primary-text mb-6">Our Journey & Expertise</h2>
              <div className="prose prose-lg text-secondary-text">
                <p>
                  Established in 2002, MGA Electronics began with a vision to provide reliable and efficient power solutions for the rapidly growing industrial sector in India. Over two decades, we have evolved from a small assembly unit into a full-scale manufacturing facility.
                </p>
                <p>
                  Our expertise spans across various battery chemistries, including traditional Lead-Acid and modern Lithium-Ion systems. We understand that in industrial environments, a charger is not just an accessory; it is a critical piece of infrastructure.
                </p>
                <p>
                  Today, our products are trusted by some of the most recognized names in the battery and automotive industries, including Luminous, Exide, and many more.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "20+ Years", desc: "Of manufacturing excellence", icon: ShieldCheck },
                { title: "OEM Solutions", desc: "Customized to specific needs", icon: Cog },
                { title: "Wide Range", desc: "From Automotive to EV", icon: Zap },
                { title: "Quality Focus", desc: "Stringent testing protocols", icon: CheckCircle2 }
              ].map((item, i) => (
                <div key={i} className="bg-secondary-bg p-8 rounded-lg border border-border">
                  <item.icon className="w-8 h-8 text-accent mb-4" />
                  <h3 className="text-xl font-bold text-primary-text mb-2">{item.title}</h3>
                  <p className="text-secondary-text text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-text text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to work with us?</h2>
          <p className="text-gray-400 text-lg mb-10">
            Discuss your standard or custom charging requirements with our engineering team today.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center bg-accent text-white px-8 py-4 rounded-sm font-semibold hover:bg-accent-dark transition-colors text-lg"
          >
            Contact Our Team
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
