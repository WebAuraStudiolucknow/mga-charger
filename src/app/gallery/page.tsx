import { Metadata } from "next";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Take a glimpse into our manufacturing facility, events, and company culture.",
};

export default function GalleryPage() {
  return (
    <div className="bg-secondary-bg min-h-screen pb-20">
      <div className="bg-white border-b border-border py-12 lg:py-16">
        <div className="max-w-[1280px] xl:max-w-[1400px] mx-auto px-6 lg:px-8 text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center text-sm text-secondary-text mb-6">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-primary-text font-medium">Gallery</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-primary-text mb-4 tracking-tight">
            Our Gallery
          </h1>
          <p className="text-lg text-secondary-text">
            A visual tour of our state-of-the-art manufacturing facility, advanced product lineups, and the team behind MGA Electronics.
          </p>
        </div>
      </div>

      <div className="max-w-[1280px] xl:max-w-[1400px] mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <GalleryGrid />
      </div>
    </div>
  );
}
