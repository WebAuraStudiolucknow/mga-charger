"use client";

import { useState } from "react";
import Image from "next/image";
import { gallery, galleryCategories } from "@/data/gallery";
import { cn } from "@/lib/utils";
import { X, ZoomIn } from "lucide-react";

export function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredGallery = activeCategory === "All" 
    ? gallery 
    : gallery.filter(img => img.category === activeCategory);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredGallery.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredGallery.length) % filteredGallery.length);
    }
  };

  return (
    <>
      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {galleryCategories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={cn(
              "px-5 py-2.5 rounded-full text-sm font-semibold transition-colors duration-300",
              activeCategory === category
                ? "bg-accent text-white shadow-md"
                : "bg-white text-secondary-text border border-border hover:border-accent hover:text-accent"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredGallery.map((img, index) => (
          <div 
            key={index} 
            className="group relative aspect-square rounded-lg overflow-hidden bg-secondary-bg cursor-pointer border border-border hover:border-accent transition-colors"
            onClick={() => setLightboxIndex(index)}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
              <ZoomIn className="w-8 h-8 text-white mb-2 transform scale-50 group-hover:scale-100 transition-transform duration-300" />
              <div className="text-white font-medium px-4 text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{img.alt}</div>
              <div className="text-white/80 text-xs font-medium uppercase tracking-wider mt-1">{img.category}</div>
            </div>
          </div>
        ))}
        {filteredGallery.length === 0 && (
          <div className="col-span-full py-20 text-center text-secondary-text bg-white border border-border rounded-lg">
            No images found in this category.
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setLightboxIndex(null)}
        >
          <button 
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(null);
            }}
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="relative w-full max-w-5xl aspect-video p-4" onClick={e => e.stopPropagation()}>
            <Image
              src={filteredGallery[lightboxIndex].src}
              alt={filteredGallery[lightboxIndex].alt}
              fill
              className="object-contain"
              quality={100}
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium">
              {filteredGallery[lightboxIndex].alt}
            </div>
          </div>

          <button 
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors"
            onClick={handlePrev}
          >
            <span className="sr-only">Previous</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          
          <button 
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors"
            onClick={handleNext}
          >
            <span className="sr-only">Next</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>
      )}
    </>
  );
}
