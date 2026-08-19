export function ClientLogos() {
  const clients = [
    "Exide", "Luminous", "Amaron", "Microtek", "Okaya", "Livguard", "SF Sonic", "Eastman", "Exide", "Luminous"
  ];

  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden border-y border-border">
      <div className="max-w-[1280px] xl:max-w-[1400px] mx-auto px-6 lg:px-8 mb-8 text-center">
        <h3 className="text-sm font-bold text-secondary-text uppercase tracking-wider">
          Trusted by industry leaders
        </h3>
      </div>
      
      <div className="relative w-full overflow-hidden flex bg-white before:absolute before:left-0 before:top-0 before:w-24 before:h-full before:bg-gradient-to-r before:from-white before:to-transparent before:z-10 after:absolute after:right-0 after:top-0 after:w-24 after:h-full after:bg-gradient-to-l after:from-white after:to-transparent after:z-10">
        <div className="flex animate-[marquee_30s_linear_infinite] hover:[animation-play-state:paused] whitespace-nowrap">
          {clients.map((client, index) => (
            <div key={index} className="mx-8 lg:mx-16 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default">
              {/* Using text placeholder for logos. In a real app, use next/image here */}
              <span className="text-2xl md:text-3xl font-black tracking-tighter text-primary-text/80">{client}</span>
            </div>
          ))}
          {/* Duplicate for seamless looping */}
          {clients.map((client, index) => (
            <div key={`dup-${index}`} className="mx-8 lg:mx-16 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default">
              <span className="text-2xl md:text-3xl font-black tracking-tighter text-primary-text/80">{client}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
