"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowRight, Zap, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const slides = [
  {
    eyebrow: "ENGINEERED SINCE 2002",
    heading: "Reliable Power. Built for Real-World Performance.",
    description: "Advanced industrial battery chargers and power solutions engineered for automotive, industrial and energy applications.",
    cta1: { label: "Explore Products", href: "/products" },
    image: "/products/hero-slide-1.png"
  },
  {
    eyebrow: "ADVANCED TECHNOLOGY",
    heading: "Smart Charging Solutions for Modern Batteries",
    description: "Microprocessor controlled boost & float chargers designed for high efficiency, complete protection, and 24x7 continuous duty.",
    cta1: { label: "Explore Chargers", href: "/products" },
    image: "/products/hero-slide-2.png"
  },
  {
    eyebrow: "OEM & CUSTOM",
    heading: "Power Solutions Built Around Your Requirements",
    description: "Customized charging ratings and heavy-gauge industrial enclosures built precisely around specialized OEM specifications.",
    cta1: { label: "Talk to Our Team", href: "/contact-us" },
    image: "/products/hero-slide-3.png"
  }
];

export function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 25 });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (!emblaApi) return;
    emblaApi.scrollTo(index);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 7000);

    return () => clearInterval(autoplay);
  }, [emblaApi, onSelect]);

  return (
    <section className="relative overflow-hidden bg-white border-b border-border group">

      {/* Invisible Embla Touch Track */}
      <div className="absolute inset-0 z-0" ref={emblaRef}>
        <div className="flex touch-pan-y h-full">
          {slides.map((_, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 h-full cursor-grab active:cursor-grabbing" />
          ))}
        </div>
      </div>

      <div className="max-w-[1280px] xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pointer-events-none pt-8 pb-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[440px] md:min-h-[500px] lg:min-h-[540px]">

          {/* Text Content (Left 6 Columns) */}
          <div className="lg:col-span-6 flex flex-col justify-center h-full relative pointer-events-auto">

            <div className="relative w-full min-h-[280px] sm:min-h-[320px] lg:min-h-[360px]">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={cn(
                    "absolute top-0 left-0 w-full transition-all duration-[1200ms] ease-in-out",
                    selectedIndex === index
                      ? "opacity-100 translate-y-0 z-10"
                      : "opacity-0 translate-y-4 z-0 pointer-events-none"
                  )}
                >
                  {slide.eyebrow && (
                    <div className="inline-flex items-center text-accent font-bold tracking-widest text-xs uppercase mb-4 bg-accent-light/80 px-3.5 py-1.5 rounded-full border border-accent/20">
                      <Zap className="w-3.5 h-3.5 mr-2 text-accent" />
                      {slide.eyebrow}
                    </div>
                  )}

                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-primary-text leading-[1.15] mb-4 text-balance">
                    {slide.heading}
                  </h1>

                  <p className="text-sm sm:text-base lg:text-lg text-secondary-text mb-8 max-w-lg leading-relaxed font-light">
                    {slide.description}
                  </p>

                  {/* Desktop CTA Button */}
                  <div className="hidden lg:flex items-center space-x-4 relative z-50 pointer-events-auto">
                    <Link
                      href={slide.cta1.href}
                      className="bg-accent hover:bg-accent-dark text-white px-7 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg shadow-accent/25 flex items-center justify-center text-base cursor-pointer hover:scale-[1.02]"
                    >
                      <span>{slide.cta1.label}</span>
                      <ArrowRight className="w-4 h-4 ml-2.5" />
                    </Link>

                    <span className="text-xs font-semibold text-secondary-text flex items-center border border-border/80 px-4 py-3.5 rounded-xl bg-secondary-bg">
                      <ShieldCheck className="w-4 h-4 mr-2 text-emerald-600" /> ISO 9001:2015 Verified
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Image (Right 6 Columns) */}
          <div className="relative lg:col-span-6 h-[260px] sm:h-[340px] lg:h-[480px] w-full mt-4 lg:mt-0 pointer-events-auto">
            <div className="relative w-full h-full bg-white border border-border/80 rounded-3xl p-4 sm:p-8 shadow-sm flex items-center justify-center overflow-hidden">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={cn(
                    "absolute inset-0 flex items-center justify-center p-4 sm:p-8 transition-all duration-[1200ms] ease-in-out",
                    selectedIndex === index ? "opacity-100 scale-100 z-10" : "opacity-0 scale-95 z-0 pointer-events-none"
                  )}
                >
                  <Image
                    src={slide.image}
                    alt={slide.heading}
                    fill
                    className="object-contain p-2 hover:scale-105 transition-transform duration-700"
                    priority={index === 0}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Mobile CTA Button Container (Separated from indicators to prevent overlap!) */}
        <div className="lg:hidden mt-8 w-full pointer-events-auto z-40 relative">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={cn(
                "transition-all duration-[1000ms] ease-in-out",
                selectedIndex === index ? "block opacity-100" : "hidden opacity-0"
              )}
            >
              <Link
                href={slide.cta1.href}
                className="w-full bg-accent text-white py-3.5 rounded-xl font-bold hover:bg-accent-dark transition-all shadow-lg shadow-accent/25 flex items-center justify-center text-sm cursor-pointer"
              >
                <span>{slide.cta1.label}</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          ))}
        </div>

        {/* Centered Slide Progress Indicator Bar */}
        <div className="mt-8 lg:mt-12 flex items-center justify-center space-x-3 pointer-events-auto z-40">
          <span className="text-xs font-mono font-bold text-accent">
            0{selectedIndex + 1}
          </span>

          <div className="flex items-center space-x-2 bg-secondary-bg border border-border/80 px-3.5 py-2 rounded-full shadow-2xs">
            {slides.map((_, index) => {
              const isCurrent = selectedIndex === index;
              return (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-500 cursor-pointer",
                    isCurrent
                      ? "w-8 bg-accent shadow-xs shadow-accent/40"
                      : "w-2 bg-gray-300 hover:bg-gray-400"
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              );
            })}
          </div>

          <span className="text-xs font-mono text-secondary-text font-medium">
            0{slides.length}
          </span>
        </div>

      </div>
    </section>
  );
}
