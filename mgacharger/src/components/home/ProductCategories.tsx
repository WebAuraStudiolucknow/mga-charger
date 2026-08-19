import Link from "next/link";
import { ArrowRight, ArrowUpRight, Battery, Zap, Car, Settings, Activity, Cpu } from "lucide-react";

const categories = [
  { id: "automotive", name: "Automotive", count: "12+ Products", icon: Car, color: "from-blue-500/10 to-accent/10" },
  { id: "industrial", name: "Industrial", count: "8+ Products", icon: Settings, color: "from-indigo-500/10 to-blue-500/10" },
  { id: "ev", name: "Electric Vehicle", count: "15+ Products", icon: Zap, color: "from-sky-500/10 to-cyan-500/10" },
  { id: "power-supply", name: "Power Supply", count: "10+ Products", icon: Battery, color: "from-teal-500/10 to-accent/10" },
  { id: "testing", name: "Testing Equipment", count: "6+ Products", icon: Activity, color: "from-accent/10 to-indigo-500/10" },
  { id: "inverter", name: "Inverters", count: "14+ Products", icon: Cpu, color: "from-blue-600/10 to-accent/10" },
];

export function ProductCategories() {
  return (
    <section className="py-12 md:py-20 bg-secondary-bg/60 border-b border-border/60">
      <div className="max-w-[1280px] xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex justify-between items-end mb-8 md:mb-12">
          <div>
            <div className="text-accent font-semibold tracking-wider text-xs uppercase mb-2 flex items-center">
              <span className="w-5 h-[2px] bg-accent mr-2"></span>
              EXPLORE RANGE
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-text tracking-tight">
              Browse by Category
            </h2>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center text-xs sm:text-sm font-semibold text-accent hover:text-accent-dark transition-colors group shrink-0"
          >
            <span>View All</span>
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Responsive Grid Layout: 2 Columns on Mobile, 3 on Tablet, 6 on Desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/products?category=${cat.id}`}
              className="group relative bg-white border border-border/80 rounded-xl p-4 sm:p-6 flex flex-col justify-between hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 active:scale-[0.98] hover:-translate-y-1 overflow-hidden"
            >
              {/* Top Right Arrow */}
              <div className="absolute top-3 right-3 text-secondary-text/40 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                <ArrowUpRight className="w-4 h-4" />
              </div>

              {/* Icon Container */}
              <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 flex items-center justify-center mb-4 shadow-xs group-hover:scale-105">
                <cat.icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>

              {/* Content */}
              <div>
                <h3 className="font-bold text-primary-text group-hover:text-accent transition-colors text-sm sm:text-base leading-snug mb-1">
                  {cat.name}
                </h3>
                <p className="text-[11px] sm:text-xs text-secondary-text font-medium">
                  {cat.count}
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

