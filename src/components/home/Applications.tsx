import Link from "next/link";
import { ArrowUpRight, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const applications = [
  {
    id: "automotive",
    title: "Automotive & Fleet",
    desc: "Passenger cars, commercial trucks, garages, and workshop charging stations.",
    image: "/products/prod_car_charger.png",
    className: "col-span-1 md:col-span-2 lg:col-span-2 row-span-1 md:row-span-2 h-[320px] md:h-auto"
  },
  {
    id: "industrial",
    title: "Industrial Machinery",
    desc: "Forklifts, material handling, and factory heavy equipment banks.",
    image: "/products/prod_automatic_charger.png",
    className: "col-span-1 md:col-span-1 lg:col-span-1 h-[260px] md:h-[320px]"
  },
  {
    id: "ev",
    title: "Electric Vehicles (EV)",
    desc: "2-wheelers, 3-wheelers (E-Rickshaw), and custom EV packs.",
    image: "/products/hero-slide-2.png",
    className: "col-span-1 md:col-span-1 lg:col-span-1 h-[260px] md:h-[320px]"
  },
  {
    id: "inverter",
    title: "Power Backup & Inverters",
    desc: "Telecom infrastructure, battery banks, and critical power backup.",
    image: "/products/prod_big_boss_titanium.png",
    className: "col-span-1 md:col-span-2 lg:col-span-2 h-[260px] md:h-[320px]"
  }
];

export function Applications() {
  return (
    <section className="py-20 lg:py-28 bg-[#0B1528] text-white relative overflow-hidden border-b border-white/10">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-[1280px] xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 lg:mb-16">
          <div className="max-w-2xl">
            <div className="text-accent-light font-bold tracking-widest text-xs uppercase mb-3 flex items-center bg-accent/15 px-3 py-1 rounded-full w-max border border-accent/30">
              <Zap className="w-3.5 h-3.5 mr-1.5 text-accent" />
              INDUSTRY APPLICATIONS
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.1]">
              Engineered for Every Sector.
            </h2>
          </div>
          <p className="text-sm text-slate-300 max-w-md mt-4 md:mt-0 font-light">
            MGA heavy-duty chargers are custom built to withstand demanding industrial environments with 24x7 operational reliability.
          </p>
        </div>

        {/* Industrial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 auto-rows-fr">
          {applications.map((app) => (
            <Link 
              key={app.id}
              href={`/products?category=${app.id}`}
              className={cn(
                "group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 block hover:border-accent/50 transition-all duration-500 hover:-translate-y-1 shadow-xl",
                app.className
              )}
            >
              {/* Radial Texture Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1528] via-[#0B1528]/60 to-transparent z-10 opacity-90 group-hover:opacity-80 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="absolute inset-0 p-6 sm:p-8 lg:p-10 flex flex-col justify-end z-20">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="text-[10px] font-bold text-accent-light uppercase tracking-wider block mb-1">MGA Sector</span>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white mb-2 group-hover:text-accent-light transition-colors">{app.title}</h3>
                    <p className="text-slate-300 max-w-[90%] text-xs sm:text-sm font-light leading-relaxed">
                      {app.desc}
                    </p>
                  </div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-accent text-white flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
