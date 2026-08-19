"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { X, ZoomIn, ZoomOut, RotateCw, Maximize, RefreshCw, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  src: string;
}

interface Props {
  initialItems?: GalleryItem[];
}

export function GalleryGrid({ initialItems = [] }: Props) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [rotation, setRotation] = useState<number>(0);

  const categories = ["All", ...Array.from(new Set(initialItems.map((item) => item.category || "Manufacturing")))];

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
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map(category => (
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

      {/* Responsive Gallery Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
        {filteredGallery.map((img, index) => (
          <div
            key={img.id || index}
            className="group relative aspect-square rounded-2xl overflow-hidden bg-white cursor-pointer border border-border/80 p-5 sm:p-6 hover:border-accent transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 flex flex-col items-center justify-center"
            onClick={() => openLightbox(index)}
          >
            {/* Image Container with Padding */}
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={img.src}
                alt={img.title}
                fill
                className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              />
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center backdrop-blur-[2px] rounded-2xl">
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-3 transform scale-75 group-hover:scale-100 transition-transform duration-300 border border-white/30">
                <ZoomIn className="w-5 h-5 text-white" />
              </div>
              <div className="text-white font-semibold text-sm sm:text-base line-clamp-2 leading-snug mb-2">
                {img.title}
              </div>
              <span className="text-[11px] font-bold text-white/90 uppercase tracking-wider bg-accent/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                {img.category}
              </span>
            </div>
          </div>
        ))}

        {filteredGallery.length === 0 && (
          <div className="col-span-full py-20 text-center text-secondary-text bg-white border border-border rounded-lg">
            No gallery images found in this category.
          </div>
        )}
      </div>

      {/* Fullscreen Lightbox Modal with Zoom & Pan Controls */}
      {currentItem && (
        <div
          className="fixed inset-0 z-[99999] bg-black/95 flex flex-col items-center justify-between backdrop-blur-md animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          {/* Top Control Toolbar */}
          <div className="w-full px-6 py-4 flex items-center justify-between z-20 bg-black/40 border-b border-white/10" onClick={(e) => e.stopPropagation()}>
            <div className="text-white font-semibold text-sm sm:text-base truncate max-w-md">
              {currentItem.title}
              <span className="text-xs text-white/60 font-normal ml-3">
                ({lightboxIndex! + 1} of {filteredGallery.length})
              </span>
            </div>

            {/* Interactive Zoom Controls */}
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
                title="Close Lightbox (Esc)"
                className="p-1.5 text-rose-400 hover:text-rose-300 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Main Interactive Zoomable Image Stage */}
          <div className="relative flex-1 w-full flex items-center justify-center overflow-hidden p-4" onClick={(e) => e.stopPropagation()}>
            <div
              style={{
                transform: `scale(${zoomLevel}) rotate(${rotation}deg)`,
                transition: 'transform 0.25s ease-out',
                maxWidth: '90vw',
                maxHeight: '80vh',
              }}
              className="relative aspect-video w-full h-full flex items-center justify-center"
            >
              <Image
                src={currentItem.src}
                alt={currentItem.title}
                fill
                className="object-contain select-none"
                quality={100}
                priority
              />
            </div>
          </div>

          {/* Navigation Controls */}
          <button
            type="button"
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors border border-white/20 shadow-lg z-20"
            onClick={handlePrev}
            title="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            type="button"
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors border border-white/20 shadow-lg z-20"
            onClick={handleNext}
            title="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Bottom Title Bar */}
          <div className="w-full text-center py-3 bg-black/60 backdrop-blur-md text-white/90 text-sm font-medium border-t border-white/10 z-20">
            {currentItem.title}
          </div>
        </div>
      )}
    </>
  );
}
