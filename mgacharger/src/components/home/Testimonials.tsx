import { Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      quote: "MGA Electronics has provided us with reliable and efficient battery chargers for our fleet. Their industrial chargers perform exceptionally well under heavy usage.",
      author: "Technical Director",
      company: "Leading EV Manufacturer",
    },
    {
      quote: "The custom charging solution developed by MGA perfectly matched our specific battery chemistry requirements. Excellent engineering support throughout the process.",
      author: "Operations Manager",
      company: "Industrial Equipment Co.",
    },
    {
      quote: "We've deployed over 500 MGA chargers across our warehousing network. The failure rate is virtually zero, and the thermal management is top-tier.",
      author: "Fleet Supervisor",
      company: "National Logistics Hub",
    },
    {
      quote: "Finding a manufacturer capable of meeting strict OEM tolerances was tough until we found MGA. Their microprocessor-controlled chargers are industry-leading.",
      author: "Procurement Head",
      company: "Automotive Solutions Ltd.",
    },
    {
      quote: "Incredible build quality. The aluminum extrusion casings and heavy-duty transformers mean these chargers can survive our harshest deployment environments.",
      author: "Lead Engineer",
      company: "Telecom Infrastructure",
    },
    {
      quote: "Their team didn't just sell us a product, they engineered a specific charging profile for our new Li-ion packs. That level of technical partnership is rare.",
      author: "R&D Director",
      company: "NextGen Energy Storage",
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-off-white overflow-hidden border-y border-border">
      <div className="max-w-[1280px] xl:max-w-[1400px] mx-auto px-6 lg:px-8 mb-16">
        <div className="text-accent font-semibold tracking-wider text-xs uppercase mb-4 flex items-center justify-center">
          <span className="w-6 h-[2px] bg-accent mr-3"></span>
          CLIENT FEEDBACK
          <span className="w-6 h-[2px] bg-accent ml-3"></span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-primary-text tracking-tight text-center">
          Trusted by engineers <br className="hidden sm:block"/>and industry leaders.
        </h2>
      </div>

      <div className="relative w-full overflow-hidden flex bg-off-white before:absolute before:left-0 before:top-0 before:w-32 before:h-full before:bg-gradient-to-r before:from-off-white before:to-transparent before:z-10 after:absolute after:right-0 after:top-0 after:w-32 after:h-full after:bg-gradient-to-l after:from-off-white after:to-transparent after:z-10 pb-8">
        <div className="flex animate-[marquee_40s_linear_infinite] hover:[animation-play-state:paused] items-stretch">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-[320px] md:w-[450px] mx-4 shrink-0 flex flex-col bg-white p-8 md:p-10 rounded-lg shadow-sm border border-border hover:border-accent hover:shadow-lg transition-all duration-300 relative group">
              <Quote className="absolute top-8 right-8 w-10 h-10 text-off-white group-hover:text-accent-light transition-colors duration-300" />
              <p className="text-base md:text-lg text-primary-text leading-relaxed mb-8 relative z-10 flex-grow font-medium">
                "{testimonial.quote}"
              </p>
              <div className="mt-auto">
                <div className="font-bold text-primary-text text-sm md:text-base">{testimonial.author}</div>
                <div className="text-accent text-xs md:text-sm font-bold uppercase tracking-wider mt-1">{testimonial.company}</div>
              </div>
            </div>
          ))}
          {/* Duplicate set for seamless looping */}
          {testimonials.map((testimonial, index) => (
            <div key={`dup-${index}`} className="w-[320px] md:w-[450px] mx-4 shrink-0 flex flex-col bg-white p-8 md:p-10 rounded-lg shadow-sm border border-border hover:border-accent hover:shadow-lg transition-all duration-300 relative group">
              <Quote className="absolute top-8 right-8 w-10 h-10 text-off-white group-hover:text-accent-light transition-colors duration-300" />
              <p className="text-base md:text-lg text-primary-text leading-relaxed mb-8 relative z-10 flex-grow font-medium">
                "{testimonial.quote}"
              </p>
              <div className="mt-auto">
                <div className="font-bold text-primary-text text-sm md:text-base">{testimonial.author}</div>
                <div className="text-accent text-xs md:text-sm font-bold uppercase tracking-wider mt-1">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
