"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";

export function FeaturedProduct() {
  const product = products.find(p => p.slug === "intelligent-hawk") || products[0];

  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden border-b border-border">
      <div className="max-w-[1280px] xl:max-w-[1400px] mx-auto px-6 lg:px-8 text-center">
        
        <div className="text-accent font-semibold tracking-wider text-xs uppercase mb-6 flex justify-center items-center">
          <span className="w-6 h-[2px] bg-accent mr-3"></span>
          FEATURED PRODUCT
          <span className="w-6 h-[2px] bg-accent ml-3"></span>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-bold text-primary-text tracking-tight leading-[1.1] mb-16 lg:mb-24">
          {product.name}
        </h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Central Product Image */}
          <div className="relative aspect-[4/3] md:aspect-video z-10 bg-off-white rounded-xl">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain p-8 md:p-16 mix-blend-multiply drop-shadow-xl hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Floating Spec Markers (Desktop Only for clean mobile UX) */}
          <div className="hidden lg:block absolute top-[15%] -left-12 bg-white border border-border shadow-lg p-4 rounded-lg z-20 animate-in fade-in slide-in-from-left-8 duration-1000 delay-300 fill-mode-both">
            <div className="text-2xl font-bold text-primary-text mb-1">Micro</div>
            <div className="text-xs font-semibold text-secondary-text uppercase tracking-wider">Processor Control</div>
          </div>
          
          <div className="hidden lg:block absolute bottom-[25%] -right-12 bg-white border border-border shadow-lg p-4 rounded-lg z-20 animate-in fade-in slide-in-from-right-8 duration-1000 delay-500 fill-mode-both">
            <div className="text-2xl font-bold text-primary-text mb-1">Auto</div>
            <div className="text-xs font-semibold text-secondary-text uppercase tracking-wider">Charging Curve</div>
          </div>
          
          <div className="hidden lg:block absolute -top-8 right-[20%] bg-white border border-border shadow-lg p-4 rounded-lg z-20 animate-in fade-in slide-in-from-top-8 duration-1000 delay-700 fill-mode-both">
            <div className="text-2xl font-bold text-accent mb-1">Li-ion</div>
            <div className="text-xs font-semibold text-secondary-text uppercase tracking-wider">Ready</div>
          </div>
        </div>

        <div className="mt-16 lg:mt-20 max-w-2xl mx-auto">
          <p className="text-xl text-secondary-text leading-relaxed mb-10">
            {product.description}
          </p>
          <Link
            href={`/products/${product.slug}`}
            className="inline-flex items-center bg-primary-text text-white px-8 py-4 rounded-sm font-semibold hover:bg-accent transition-colors group text-base"
          >
            View Product Specifications
            <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
