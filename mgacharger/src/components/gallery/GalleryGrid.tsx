"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { X, ZoomIn, ZoomOut, RotateCw, RefreshCw, ChevronLeft, ChevronRight, CheckCircle2, Star, ShieldCheck, Cpu } from "lucide-react";

interface GalleryItem {
  id: string;
  slug?: string;
  title: string;
  category: string;
  src: string;
  modelGrade?: string;
  rating?: number;
  reviews?: number;
  shortDescription?: string;
  description?: string;
  features?: string[];
  specifications?: Array<{ label: string; value: string }>;
}

interface Props {
  initialItems?: GalleryItem[];
}

export function GalleryGrid({ initialItems = [] }: Props) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [rotation, setRotation] = useState<number>(0);

  const categories = ["All", ...Array.from(new Set(initialItems.map((item) => item.category || "Products")))];

  const filteredGallery = activeCategory === "All"
    ? initialItems
    : initialItems.filter(img => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setZoomLevel(1);
    setRotation(0);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    setZoomLevel(1);
    setRotation(0);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null && filteredGallery.length > 0) {
      setLightboxIndex((lightboxIndex + 1) % filteredGallery.length);
      setZoomLevel(1);
      setRotation(0);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null && filteredGallery.length > 0) {
      setLightboxIndex((lightboxIndex - 1 + filteredGallery.length) % filteredGallery.length);
      setZoomLevel(1);
      setRotation(0);
    }
  };

  const handleZoomIn = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomLevel((prev) => Math.min(prev + 0.25, 3.0));
  };

  const handleZoomOut = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomLevel((prev) => Math.max(prev - 0.25, 0.5));
  };

  const handleRotate = (e: React.MouseEvent) => {
    e.stopPropagation();
    setRotation((prev) => (prev + 90) % 360);
  };

  const handleResetZoom = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomLevel(1);
    setRotation(0);
  };

  const currentItem = lightboxIndex !== null ? filteredGallery[lightboxIndex] : null;

  return (
    <>
      {/* Category Filter Pills */}
      <div className="flex flex-wrap justify-center gap-2.5 mb-12">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={cn(
              "px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 shadow-2xs",
              activeCategory === category
                ? "bg-accent text-white shadow-md shadow-accent/20 scale-105"
                : "bg-white text-secondary-text border border-border/80 hover:border-accent hover:text-accent"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Responsive Gallery Uniform Product Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredGallery.map((item, index) => {
          const specSummary = item.specifications && item.specifications.length > 0
            ? item.specifications.slice(0, 2).map((s) => `${s.label}: ${s.value}`).join(" • ")
            : item.shortDescription || item.category;

          return (
            <div
              key={item.id || index}
              className="group bg-white border border-border/80 rounded-[24px] overflow-hidden shadow-xs hover:shadow-2xl hover:shadow-accent/15 transition-all duration-500 hover:-translate-y-1.5 flex flex-col h-full relative cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              {/* Uniform Fixed Aspect-Square Image Showcase Area */}
              <div className="relative aspect-square w-full bg-white border-b border-border/60 p-6 flex flex-col justify-between items-center overflow-hidden">
                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-[10px] font-bold tracking-wider uppercase bg-white/95 backdrop-blur-md text-secondary-text px-3 py-1 rounded-full shadow-2xs border border-border/50">
                    {item.category}
                  </span>
                </div>

                {/* Rating Badge */}
                <div className="absolute top-4 right-4 z-10 inline-flex items-center text-xs font-semibold text-accent bg-accent-light/80 border border-accent/20 px-2.5 py-0.5 rounded-full shadow-2xs">
                  <Star className="w-3.5 h-3.5 fill-accent text-accent mr-1" />
                  <span>{item.rating || 4.9}</span>
                </div>

                {/* Centered Transparent Image */}
                <div className="relative w-full h-full my-auto flex items-center justify-center p-2">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-contain p-3 group-hover:scale-108 transition-transform duration-700 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Hover Overlay Prompt */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center backdrop-blur-[2px]">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-3 transform scale-75 group-hover:scale-100 transition-transform duration-300 border border-white/30 shadow-lg">
                    <ZoomIn className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs font-bold text-white uppercase tracking-wider bg-accent/90 px-3.5 py-1 rounded-full border border-white/20 shadow-md">
                    Inspect Specifications
                  </span>
                </div>
              </div>

              {/* Card Footer Details */}
              <div className="p-5 sm:p-6 bg-white flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-primary-text group-hover:text-accent transition-colors line-clamp-1 mb-1.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-secondary-text font-normal line-clamp-1 mb-4">
                    {specSummary}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-border/40">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider text-secondary-text font-medium">Model Grade</span>
                    <span className="text-xs sm:text-sm font-bold text-primary-text flex items-center">
                      <ShieldCheck className="w-3.5 h-3.5 mr-1 text-accent" /> {item.modelGrade || "OEM Grade"}
                    </span>
                  </div>

                  <div className="px-4 py-2 rounded-xl bg-accent/10 text-accent font-semibold text-xs group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    View Specs
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {filteredGallery.length === 0 && (
          <div className="col-span-full py-20 text-center text-secondary-text bg-white border border-border rounded-lg">
            No gallery items found in this category.
          </div>
        )}
      </div>

      {/* Fullscreen Interactive Lightbox Modal with Specs Panel */}
      {currentItem && (
        <div 
          className="fixed inset-0 z-[99999] bg-black/95 flex flex-col items-center justify-between backdrop-blur-md animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          {/* Top Control Toolbar */}
          <div className="w-full px-6 py-4 flex items-center justify-between z-20 bg-black/50 border-b border-white/10" onClick={(e) => e.stopPropagation()}>
            <div className="text-white font-semibold text-sm sm:text-base truncate max-w-md">
              {currentItem.title}
              <span className="text-xs text-white/60 font-normal ml-3">
                ({lightboxIndex! + 1} of {filteredGallery.length})
              </span>
            </div>

            {/* Interactive Zoom & Rotate Controls */}
            <div className="flex items-center space-x-2 sm:space-x-3 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
              <button
                type="button"
                onClick={handleZoomIn}
                title="Zoom In (+)"
                className="p-1.5 text-white/80 hover:text-white hover:bg-white/20 rounded-full transition-colors"
              >
                <ZoomIn className="w-5 h-5" />
              </button>

              <span className="text-xs font-mono font-bold text-white px-1">
                {Math.round(zoomLevel * 100)}%
              </span>

              <button
                type="button"
                onClick={handleZoomOut}
                title="Zoom Out (-)"
                className="p-1.5 text-white/80 hover:text-white hover:bg-white/20 rounded-full transition-colors"
              >
                <ZoomOut className="w-5 h-5" />
              </button>

              <div className="w-px h-4 bg-white/20"></div>

              <button
                type="button"
                onClick={handleRotate}
                title="Rotate 90°"
                className="p-1.5 text-white/80 hover:text-white hover:bg-white/20 rounded-full transition-colors"
              >
                <RotateCw className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={handleResetZoom}
                title="Reset Zoom (100%)"
                className="p-1.5 text-white/80 hover:text-white hover:bg-white/20 rounded-full transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
              </button>

              <div className="w-px h-4 bg-white/20"></div>

              <button
                type="button"
                onClick={closeLightbox}
                title="Close Modal (Esc)"
                className="p-1.5 text-rose-400 hover:text-rose-300 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Main Content Area: Image + Product Specifications */}
          <div className="relative flex-1 w-full flex flex-col md:flex-row items-center justify-between overflow-hidden p-4 md:p-8 gap-6" onClick={(e) => e.stopPropagation()}>
            
            {/* Left: Transparent Product Image Stage */}
            <div className="relative flex-1 w-full h-full flex items-center justify-center min-h-[300px]">
              <div 
                style={{
                  transform: `scale(${zoomLevel}) rotate(${rotation}deg)`,
                  transition: 'transform 0.25s ease-out',
                  maxWidth: '85vw',
                  maxHeight: '75vh',
                }}
                className="relative aspect-square w-full h-full flex items-center justify-center p-4"
              >
                <Image
                  src={currentItem.src}
                  alt={currentItem.title}
                  fill
                  className="object-contain select-none filter drop-shadow-2xl"
                  quality={100}
                  priority
                />
              </div>
            </div>

            {/* Right: Technical Specifications Drawer */}
            <div className="w-full md:w-[420px] bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-white overflow-y-auto max-h-[75vh] shadow-2xl shrink-0">
              <div className="flex items-center space-x-2 text-xs uppercase tracking-wider text-accent-light font-bold mb-2">
                <Cpu className="w-4 h-4" />
                <span>{currentItem.category} • {currentItem.modelGrade || "OEM Grade"}</span>
              </div>

              <h2 className="text-xl font-bold text-white mb-3 leading-snug">
                {currentItem.title}
              </h2>

              <p className="text-xs text-white/70 leading-relaxed mb-6">
                {currentItem.description || currentItem.shortDescription}
              </p>

              {/* Specifications Table */}
              {currentItem.specifications && currentItem.specifications.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white/90 mb-3 border-b border-white/10 pb-2">
                    Technical Specifications
                  </h4>
                  <div className="space-y-2">
                    {currentItem.specifications.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-center justify-between text-xs bg-white/5 px-3 py-2 rounded-lg border border-white/5">
                        <span className="text-white/60 font-medium">{spec.label}</span>
                        <span className="text-white font-semibold text-right">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Features Checklist */}
              {currentItem.features && currentItem.features.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white/90 mb-3 border-b border-white/10 pb-2">
                    Key Capabilities
                  </h4>
                  <div className="space-y-2">
                    {currentItem.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start text-xs text-white/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent mr-2 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

          </div>

          {/* Prev/Next Navigation Controls */}
          <button 
            type="button"
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors border border-white/20 shadow-lg z-20"
            onClick={handlePrev}
            title="Previous Item"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            type="button"
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors border border-white/20 shadow-lg z-20"
            onClick={handleNext}
            title="Next Item"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Bottom Title & Counter Bar */}
          <div className="w-full text-center py-3 bg-black/70 backdrop-blur-md text-white/90 text-sm font-medium border-t border-white/10 z-20">
            {currentItem.title}
          </div>
        </div>
      )}
    </>
  );
}
