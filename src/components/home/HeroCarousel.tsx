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
    image: "/products/hero-slide-1.png"
  },
  {
    eyebrow: "ADVANCED TECHNOLOGY",
    heading: "Smart Charging Solutions for Modern Batteries",
    description: "Reliable charging solutions designed around efficiency, protection and dependable performance.",
    cta1: { label: "Explore Chargers", href: "/products" },
    image: "/products/hero-slide-2.png"
  },
  {
    eyebrow: "OEM & CUSTOM",
    heading: "Power Solutions Built Around Your Requirements",
    description: "Customized charging and power solutions for specialized applications and industrial needs.",
    cta1: { label: "Talk to Our Team", href: "/contact-us" },
    image: "/products/hero-slide-3.png"
  }
];

export function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 20 });
  const [selectedIndex, setSelectedIndex] = useState(0);

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
    <section className="relative overflow-hidden border-b border-border group">

      {/* 
        INVISIBLE EMBLA SWIPE TRACK 
        We render this absolutely on top so users can swipe on mobile, 
        and so emblaApi binds to a real DOM node and runs its logic.
      */}
      {/* 
        INVISIBLE EMBLA SWIPE TRACK 
        Rendered at z-0 behind content so links & CTA buttons at z-10 are 100% clickable.
      */}
      <div className="absolute inset-0 z-0" ref={emblaRef}>
        <div className="flex touch-pan-y h-full">
          {slides.map((_, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 h-full cursor-grab active:cursor-grabbing" />
          ))}
        </div>
      </div>

      <div className="max-w-7xl xl:max-w-350 mx-auto px-6 lg:px-8 relative z-10 pointer-events-none">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center min-h-[380px] md:min-h-[460px] lg:min-h-[580px] py-6 sm:py-10 lg:py-0">

          {/* Text Content (Left Side) - 50% */}
          <div className="lg:col-span-6 z-10 flex flex-col justify-center h-full relative pointer-events-auto">

            {/* Text Cross-fade wrapper */}
            <div className="relative w-full min-h-[300px] sm:min-h-[340px] lg:min-h-[380px]">
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
                  <p className="text-base lg:text-lg text-secondary-text mb-6 lg:mb-10 max-w-md leading-relaxed">
                    {slide.description}
                  </p>

                  {/* Desktop CTA Button (Hidden on Mobile) */}
                  <div className="hidden lg:flex relative z-50 pointer-events-auto">
                    <Link
                      href={slide.cta1.href}
                      className="bg-accent text-white px-8 py-4 rounded-sm font-medium hover:bg-accent-dark transition-colors shadow-md flex items-center justify-center text-[15px] lg:text-base cursor-pointer"
                    >
                      {slide.cta1.label}
                      <ArrowRight className="w-4 h-4 ml-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Image (Below Text on Mobile, Right Side on Desktop) */}
          <div className="relative lg:col-span-6 h-[260px] sm:h-[360px] lg:h-[600px] w-full mt-2 lg:mt-0">
            <div className="relative w-full h-full">
              {slides.map((slide, index) => (
                <div key={index} className={cn(
                  "absolute inset-0 flex items-center justify-center p-2 sm:p-4 lg:p-8 transition-opacity duration-[1500ms] ease-in-out",
                  selectedIndex === index ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                )}>
                  <Image
                    src={slide.image}
                    alt={slide.heading}
                    fill
                    className="object-contain object-center"
                    priority={index === 0}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile CTA Button (Below Image on Mobile, Hidden on Desktop) */}
          <div className="relative w-full h-[52px] lg:hidden mt-2 pointer-events-auto z-50">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={cn(
                  "absolute top-0 left-0 w-full flex justify-center transition-opacity duration-[1500ms] ease-in-out",
                  selectedIndex === index
                    ? "opacity-100 z-10"
                    : "opacity-0 z-0 pointer-events-none"
                )}
              >
                <Link
                  href={slide.cta1.href}
                  className="bg-accent text-white px-8 py-3.5 rounded-sm font-medium hover:bg-accent-dark transition-colors shadow-md flex items-center justify-center text-[15px] w-full sm:w-auto cursor-pointer"
                >
                  {slide.cta1.label}
                  <ArrowRight className="w-4 h-4 ml-3" />
                </Link>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
