import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function CustomSolutions() {
  return (
    <section className="py-24 lg:py-32 bg-accent-dark text-white relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent rounded-full blur-[120px] opacity-20 translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
      
      <div className="max-w-[1280px] xl:max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 tracking-tight leading-[1.05]">
              Need a charger<br className="hidden lg:block"/> built for your<br className="hidden lg:block"/> application?
            </h2>
            <p className="text-lg lg:text-xl text-white/80 mb-12 max-w-lg leading-relaxed font-light">
              We specialize in full OEM manufacturing. Specify your battery chemistry, voltage, current, and enclosure requirements, and our engineers will build it.
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center text-accent-light font-bold text-lg hover:text-white transition-colors group border-b-2 border-accent-light hover:border-white pb-1"
            >
              Tell us what you need
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="aspect-square relative rounded-full border border-white/10 flex items-center justify-center p-12 lg:p-20 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm">
              <div className="absolute inset-4 rounded-full border border-white/5 border-dashed animate-[spin_60s_linear_infinite]"></div>
              <Image
                src="/products/BIG-BOSS-30.jpeg"
                alt="Custom Charger Solution"
                fill
                className="object-contain p-12 lg:p-24 drop-shadow-2xl mix-blend-screen opacity-90"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
