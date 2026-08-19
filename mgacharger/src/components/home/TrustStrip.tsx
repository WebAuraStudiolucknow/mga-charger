import { ShieldCheck, Settings, Headset, Globe2, Zap } from "lucide-react";

export function TrustStrip() {
  const trusts = [
    { label: "20+ Years Experience", icon: ShieldCheck },
    { label: "Indian Manufacturer", icon: Globe2 },
    { label: "OEM Solutions", icon: Settings },
    { label: "Technical Support", icon: Headset },
    { label: "Multiple Applications", icon: Zap },
  ];

  return (
    <div className="border-b border-border bg-accent-light py-6">
      <div className="max-w-[1280px] xl:max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 text-sm font-medium text-secondary-text">
          {trusts.map((item, index) => (
            <div key={index} className="flex items-center space-x-2 group">
              <item.icon className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
