"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Star, ArrowRight } from "lucide-react";
import { Product } from "@/data/products";
import { useLoading } from "@/context/LoadingContext";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const router = useRouter();
  const { startLoading, stopLoading } = useLoading();

  // Extract main specification text for subtitle line
  const specText = product.specifications && product.specifications.length > 0
    ? product.specifications.map((s) => `${s.label}: ${s.value}`).join(" • ")
    : product.shortDescription;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    startLoading();
    router.push(`/products/${product.slug}`);
  };

  return (
    <div
      onClick={handleClick}
      className="group bg-white border border-border/80 rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-xs hover:shadow-2xl hover:shadow-accent/15 transition-all duration-500 hover:-translate-y-1.5 flex flex-col h-full relative cursor-pointer"
    >
      {/* Top Image Showcase Section */}
      <div className="relative aspect-square bg-white border-b border-border/60 p-6 flex flex-col justify-between items-center overflow-hidden">
        {/* Category Tag (Top Left Badge) */}
        <div className="absolute top-4 left-4 z-10">
          <span className="text-[10px] font-bold tracking-wider uppercase bg-white/90 backdrop-blur-md text-secondary-text px-3 py-1 rounded-full shadow-xs border border-border/50">
            {product.categoryName}
          </span>
        </div>

        {/* Product Image */}
        <div className="relative w-full h-full my-auto flex items-center justify-center">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-4 group-hover:scale-108 transition-transform duration-700 ease-out"
          />
        </div>

        {/* Slide Dots Indicator */}
        <div className="flex items-center justify-center space-x-1.5 mt-auto pt-2 z-10">
          <span className="w-5 h-1.5 bg-accent rounded-full transition-all duration-300 group-hover:w-7"></span>
          <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
          <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
        </div>
      </div>

      {/* Bottom Content & Action Section */}
      <div className="p-5 sm:p-6 bg-white flex flex-col flex-grow justify-between">
        <div>
          {/* Header Row: Title & Rating */}
          <div className="flex items-start justify-between gap-2 mb-1.5">
            <h3 className="text-base sm:text-lg font-bold text-primary-text group-hover:text-accent transition-colors line-clamp-1 leading-snug">
              {product.name}
            </h3>
            
            {/* Rating Badge */}
            <div className="inline-flex items-center text-xs font-semibold text-accent bg-accent-light/80 border border-accent/20 px-2.5 py-0.5 rounded-full shrink-0">
              <Star className="w-3.5 h-3.5 fill-accent text-accent mr-1" />
              <span>4.9</span>
              <span className="text-secondary-text font-normal ml-1">(2k)</span>
            </div>
          </div>

          {/* Subtitle / Spec Line */}
          <p className="text-xs sm:text-sm text-secondary-text font-normal line-clamp-1 mb-5">
            {specText}
          </p>
        </div>

        {/* Bottom Row: Specs/Tag + Buy Now/Explore Button */}
        <div className="flex items-center justify-between pt-2">
          {/* Main Spec Badge */}
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-wider text-secondary-text font-medium">Model Grade</span>
            <span className="text-sm sm:text-base font-bold text-primary-text">OEM Grade</span>
          </div>

          {/* Action Button */}
          <div className="px-5 py-2.5 rounded-xl bg-accent text-white font-medium text-xs sm:text-sm hover:bg-accent-dark transition-all duration-300 shadow-md shadow-accent/20 group-hover:shadow-lg group-hover:shadow-accent/30 flex items-center group-hover:scale-102">
            <span>Explore</span>
            <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
}
