export function CompanyStats() {
  const stats = [
    { value: "10k+", label: "Clients Served" },
    { value: "50+", label: "Product Models" },
    { value: "100%", label: "Quality Assured" },
  ];

  return (
    <section className="py-20 lg:py-32 bg-off-white text-primary-text border-y border-border">
      <div className="max-w-[1280px] xl:max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div>
            <div className="text-6xl md:text-8xl font-black text-accent tracking-tighter mb-4 leading-none">
              20+
            </div>
            <div className="text-lg font-bold uppercase tracking-widest text-primary-text mb-6">
              Years of Experience
            </div>
            <p className="text-xl md:text-2xl text-secondary-text leading-relaxed font-light">
              Building intelligent charging and power solutions for real-world industrial and automotive applications.
            </p>
          </div>

          <div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 border-t sm:border-t-0 sm:border-l border-border pt-8 sm:pt-0 sm:pl-12">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col">
                  <div className="text-4xl lg:text-5xl font-bold mb-2 tracking-tight text-primary-text">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold uppercase tracking-wider text-secondary-text">
                    {stat.label}
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
