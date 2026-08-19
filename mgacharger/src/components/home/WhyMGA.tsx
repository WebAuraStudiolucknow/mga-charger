import { ShieldCheck, Cog, Headset, Zap } from "lucide-react";

export function WhyMGA() {
  const reasons = [
    {
      id: "01",
      title: "Engineered Solutions",
      desc: "Designed ground-up for maximum efficiency, thermal stability, and long-term reliability in harsh environments.",
      icon: Zap
    },
    {
      id: "02",
      title: "Custom Manufacturing",
      desc: "Full OEM capabilities to design and manufacture charging solutions precisely matching your battery chemistry.",
      icon: Cog
    },
    {
      id: "03",
      title: "Technical Expertise",
      desc: "Over two decades of deep domain knowledge in power electronics and battery charging algorithms.",
      icon: ShieldCheck
    },
    {
      id: "04",
      title: "Reliable Support",
      desc: "Direct access to our engineering and support team for seamless integration and troubleshooting.",
      icon: Headset
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-accent-light border-y border-border overflow-hidden">
      <div className="max-w-[1280px] xl:max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Statement */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="text-accent font-semibold tracking-wider text-xs uppercase mb-6 flex items-center">
              <span className="w-6 h-[2px] bg-accent mr-3"></span>
              WHY MGA
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-primary-text tracking-tight leading-[1.1] mb-8">
              Engineering reliability for real-world applications.
            </h2>
            <p className="text-lg text-secondary-text leading-relaxed">
              We don&apos;t just assemble components. We engineer power solutions that protect your battery investments and ensure operational continuity when it matters most.
            </p>
          </div>

          {/* Interactive List */}
          <div className="lg:col-span-7">
            <div className="flex flex-col">
              {reasons.map((reason, index) => (
                <div 
                  key={reason.id} 
                  className="group flex flex-col sm:flex-row items-start sm:items-center py-8 border-b border-border/60 last:border-0 cursor-pointer"
                >
                  <div className="text-accent font-bold text-lg w-12 shrink-0 mb-4 sm:mb-0 transition-transform group-hover:-translate-y-1">
                    {reason.id}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl md:text-2xl font-bold text-primary-text group-hover:text-accent transition-colors mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-secondary-text leading-relaxed sm:max-w-md sm:opacity-0 sm:h-0 sm:overflow-hidden group-hover:opacity-100 group-hover:h-auto group-hover:mt-3 transition-all duration-300 ease-in-out lg:text-base text-sm opacity-100 h-auto">
                      {reason.desc}
                    </p>
                  </div>
                  <div className="hidden sm:flex w-12 h-12 rounded-full border border-border items-center justify-center text-primary-text group-hover:border-accent group-hover:bg-accent group-hover:text-white transition-all ml-4 shrink-0">
                    <reason.icon className="w-5 h-5" />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
