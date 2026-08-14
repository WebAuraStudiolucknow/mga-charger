"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const slides = [
  {
    eyebrow: "ENGINEERED SINCE 2002",
    heading: "Reliable Power. Built for Real-World Performance.",
    description: "Advanced battery chargers and power solutions engineered for automotive, industrial and energy applications.",
    cta1: { label: "Explore Products", href: "/products" },
    image: "/extracted_assets/vt.webp"
  },
  {
    eyebrow: "ADVANCED TECHNOLOGY",
    heading: "Smart Charging Solutions for Modern Batteries",
    description: "Reliable charging solutions designed around efficiency, protection and dependable performance.",
    cta1: { label: "Explore Chargers", href: "/products" },
    image: "/products/Automatic-Batteries-Charger.jpeg"
  },
  {
    eyebrow: "OEM & CUSTOM",
    heading: "Power Solutions Built Around Your Requirements",
    description: "Customized charging and power solutions for specialized applications and industrial needs.",
    cta1: { label: "Talk to Our Team", href: "/contact-us" },
    image: "/products/ECO-18-Multy.jpeg"
  }
];

export function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 20 });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

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
    <section className="relative bg-white overflow-hidden border-b border-border group">
      
      {/* 
        INVISIBLE EMBLA SWIPE TRACK 
        We render this absolutely on top so users can swipe on mobile, 
        and so emblaApi binds to a real DOM node and runs its logic.
      */}
      <div className="absolute inset-0 z-30" ref={emblaRef}>
        <div className="flex touch-pan-y h-full">
          {slides.map((_, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 h-full" />
          ))}
        </div>
      </div>

      <div className="max-w-[1280px] xl:max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10 pointer-events-none">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[400px] md:min-h-[500px] lg:min-h-[700px] py-20 lg:py-0">
          
          {/* Text Content (Left Side) - 50% */}
          <div className="lg:col-span-6 z-10 flex flex-col justify-center h-full relative pointer-events-auto">
            
            {/* Text Cross-fade wrapper */}
            <div className="relative w-full min-h-[280px] md:min-h-[320px]">
              {slides.map((slide, index) => (
                <div 
                  key={index}
                  className={cn(
                    "absolute top-1/2 -translate-y-1/2 left-0 w-full transition-opacity duration-[1500ms] ease-in-out",
                    selectedIndex === index 
                      ? "opacity-100 z-10" 
                      : "opacity-0 z-0 pointer-events-none"
                  )}
                >
                  {slide.eyebrow && (
                    <div className="text-accent font-semibold tracking-wider text-xs lg:text-sm uppercase mb-6 flex items-center">
                      <span className="w-8 h-[2px] bg-accent mr-4"></span>
                      {slide.eyebrow}
                    </div>
                  )}
                  <h1 className="text-[34px] md:text-[42px] lg:text-[56px] font-bold tracking-tight text-primary-text leading-[1.15] lg:leading-[1.1] mb-6">
                    {slide.heading}
                  </h1>
                  <p className="text-base lg:text-lg text-secondary-text mb-10 max-w-md leading-relaxed">
                    {slide.description}
                  </p>
                  <div className="flex relative z-40">
                    <Link 
                      href={slide.cta1.href}
                      className="bg-accent text-white px-8 py-4 rounded-sm font-medium hover:bg-accent-dark transition-colors shadow-sm flex items-center justify-center text-[15px] lg:text-base"
                    >
                      {slide.cta1.label}
                      <ArrowRight className="w-4 h-4 ml-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Modern Progress Navigation */}
            <div className="mt-8 lg:mt-24 flex items-center space-x-4 z-40">
              <div className="flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollTo(index)}
                    className={cn(
                      "relative h-[3px] rounded-full overflow-hidden transition-all duration-500 cursor-pointer",
                      selectedIndex === index ? "w-12 bg-accent" : "w-6 bg-border"
                    )}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Carousel Image (Background on Mobile, Right Side on Desktop) - 50% */}
          <div className="absolute inset-0 z-0 opacity-[0.03] sm:opacity-5 lg:opacity-100 lg:relative lg:inset-auto lg:col-span-6 h-full lg:h-[600px] w-full">
            <div className="relative w-full h-full">
              {slides.map((slide, index) => (
                <div key={index} className={cn(
                  "absolute inset-0 flex items-center justify-center p-4 lg:p-8 transition-opacity duration-[1500ms] ease-in-out",
                  selectedIndex === index ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                )}>
                  <Image
                    src={slide.image}
                    alt={slide.heading}
                    fill
                    className="object-contain object-center lg:object-contain"
                    priority={index === 0}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
