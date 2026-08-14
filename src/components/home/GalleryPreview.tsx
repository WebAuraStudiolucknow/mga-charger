import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Eye } from "lucide-react";
import { gallery } from "@/data/gallery";
import { cn } from "@/lib/utils";

export function GalleryPreview() {
  const images = gallery.slice(0, 4);

  return (
    <section className="py-20 lg:py-32 bg-white text-primary-text">
      <div className="max-w-[1280px] xl:max-w-[1400px] mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <div className="text-accent font-semibold tracking-wider text-xs uppercase mb-4 flex items-center">
              <span className="w-6 h-[2px] bg-accent mr-3"></span>
              GALLERY
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-primary-text tracking-tight leading-[1.1]">
              Inside MGA Electronics.
            </h2>
          </div>
          <Link
            href="/gallery"
            className="hidden md:flex items-center text-primary-text font-bold hover:text-accent transition-colors group"
          >
            View Full Gallery
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[250px] lg:auto-rows-[300px]">
          {images.map((img, i) => {
            // Assign specific grid spans to create the asymmetrical look
            let gridClass = "";
            if (i === 0) gridClass = "md:col-span-2 lg:col-span-2 row-span-1 md:row-span-2"; // Large Left
            else if (i === 1) gridClass = "md:col-span-1 lg:col-span-2 row-span-1"; // Wide Top Right
            else if (i === 2) gridClass = "md:col-span-1 lg:col-span-1 row-span-1"; // Small Bottom Right 1
            else if (i === 3) gridClass = "md:col-span-2 lg:col-span-1 row-span-1"; // Small Bottom Right 2

            return (
              <Link 
                href="/gallery"
                key={i} 
                className={cn(
                  "relative rounded-lg overflow-hidden group block bg-off-white",
                  gridClass
                )}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-deep-navy/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white transform scale-50 group-hover:scale-100 transition-transform duration-500">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
