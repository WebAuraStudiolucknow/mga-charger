import { Metadata } from "next";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { getGalleryItems } from "@/lib/payloadApi";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Gallery | MGA Charger",
  description: "Take a visual tour of our manufacturing facility, events, and company culture.",
};

export default async function GalleryPage() {
  const galleryItems = await getGalleryItems();

  return (
    <div className="bg-secondary-bg min-h-screen pb-20">
      <div className="bg-white border-b border-border py-12 lg:py-16">
        <div className="max-w-[1280px] xl:max-w-[1400px] mx-auto px-6 lg:px-8 text-center max-w-3xl">
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
        <GalleryGrid initialItems={galleryItems} />
      </div>
    </div>
  );
}
