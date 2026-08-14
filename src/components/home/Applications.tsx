import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const applications = [
  {
    id: "auto",
    title: "Automotive",
    desc: "Passenger cars, commercial vehicles, and fleet charging.",
    size: "large",
    className: "col-span-1 md:col-span-2 lg:col-span-2 row-span-1 md:row-span-2 h-[300px] md:h-auto"
  },
  {
    id: "ind",
    title: "Industrial",
    desc: "Forklifts, material handling, and heavy machinery.",
    size: "small",
    className: "col-span-1 md:col-span-1 lg:col-span-1 h-[250px] md:h-[300px]"
  },
  {
    id: "ev",
    title: "Electric Vehicles",
    desc: "2-wheelers, 3-wheelers, and custom EV packs.",
    size: "small",
    className: "col-span-1 md:col-span-1 lg:col-span-1 h-[250px] md:h-[300px]"
  },
  {
    id: "power",
    title: "Power Backup",
    desc: "Inverters, telecom, and critical infrastructure.",
    size: "wide",
    className: "col-span-1 md:col-span-2 lg:col-span-2 h-[250px] md:h-[300px]"
  }
];

export function Applications() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-[1280px] xl:max-w-[1400px] mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 lg:mb-16">
          <div className="max-w-2xl">
            <div className="text-accent font-semibold tracking-wider text-xs uppercase mb-4 flex items-center">
              <span className="w-6 h-[2px] bg-accent mr-3"></span>
              APPLICATIONS
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-primary-text tracking-tight leading-[1.1]">
              Engineered for every industry.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 auto-rows-fr">
          {applications.map((app) => (
            <Link 
              key={app.id}
              href={`/products?category=${app.id}`}
              className={cn(
                "group relative overflow-hidden rounded-lg bg-off-white block",
                app.className
              )}
            >
              {/* Fake Background Pattern for Industrial Feel */}
              <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-50"></div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/80 via-deep-navy/20 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-accent/90 opacity-0 group-hover:opacity-80 transition-opacity duration-500 z-20 mix-blend-multiply"></div>
              
              <div className="absolute inset-0 p-8 lg:p-10 flex flex-col justify-end z-30 transform group-hover:-translate-y-2 transition-transform duration-500">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">{app.title}</h3>
                    <p className="text-white/80 max-w-[80%] text-sm lg:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {app.desc}
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <ArrowUpRight className="w-6 h-6" />
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
