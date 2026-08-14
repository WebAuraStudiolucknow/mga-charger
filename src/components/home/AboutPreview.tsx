"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

export function AboutPreview() {
  const { ref, isInView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section className="py-24 lg:py-40 bg-white overflow-hidden relative border-y border-border">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-off-white z-0 hidden lg:block"></div>

      <div className="max-w-[1280px] xl:max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

          {/* Text Content (Left Side) */}
          <div className={cn(
            "lg:col-span-6 flex flex-col justify-center transition-all duration-1000",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}>
            <div className="text-accent font-semibold tracking-wider text-xs uppercase mb-8 flex items-center">
              <span className="w-8 h-[2px] bg-accent mr-4"></span>
              ABOUT MGA ELECTRONICS
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-text mb-8 tracking-tight leading-[1.1]">
              Powering industries <br className="hidden md:block" />since 2002.
            </h2>

            <p className="text-lg md:text-xl text-secondary-text mb-12 leading-relaxed font-light max-w-lg">
              Based in Lucknow, India, we engineer advanced battery chargers and customized power solutions that serve as critical infrastructure for the automotive and industrial sectors.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-12">
              <div className="border-l-2 border-accent pl-6">
                <div className="text-4xl lg:text-5xl font-black text-primary-text mb-2 tracking-tighter">20<span className="text-accent">+</span></div>
                <div className="text-xs font-bold uppercase tracking-widest text-secondary-text">Years of Engineering</div>
              </div>
              <div className="border-l-2 border-border pl-6">
                <div className="text-4xl lg:text-5xl font-black text-primary-text mb-2 tracking-tighter">100<span className="text-accent">%</span></div>
                <div className="text-xs font-bold uppercase tracking-widest text-secondary-text">OEM Custom Solutions</div>
              </div>
            </div>

            <Link
              href="/about-us"
              className="inline-flex items-center text-primary-text font-bold text-lg hover:text-accent transition-colors group w-max border-b-2 border-transparent hover:border-accent pb-1"
            >
              Discover Our Capabilities
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          {/* Image Content (Right Side) */}
          <div className={cn(
            "lg:col-span-6 relative transition-all duration-[1500ms] ease-out delay-300",
            isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          )}>
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl border border-border/50">
              <Image
                src="/images/about-facility.png"
                alt="MGA Electronics Manufacturing Facility"
                fill
                className={cn(
                  "object-cover transition-transform duration-[2000ms] ease-out",
                  isInView ? "scale-100" : "scale-105"
                )}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
