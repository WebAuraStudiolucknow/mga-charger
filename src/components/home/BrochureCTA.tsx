import { Download, FileText } from "lucide-react";
import Link from "next/link";

export function BrochureCTA() {
  return (
    <section className="py-20 lg:py-32 bg-accent-light border-y border-border overflow-hidden">
      <div className="max-w-[1280px] xl:max-w-[1400px] mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-5xl font-bold text-primary-text tracking-tight leading-[1.1] mb-6">
              Explore the complete MGA product range.
            </h2>
            <p className="text-lg text-secondary-text mb-10 max-w-lg leading-relaxed">
              Download our latest catalog for detailed specifications, application guides, and our full capability matrix.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/brochure"
                className="bg-accent text-white px-8 py-4 rounded-sm font-bold hover:bg-accent-dark transition-all shadow-sm flex items-center justify-center group"
              >
                <Download className="w-5 h-5 mr-3 group-hover:-translate-y-1 transition-transform" />
                Download Brochure
              </Link>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            {/* Elegant Brochure Mockup presentation */}
            <div className="relative w-64 h-80 sm:w-80 sm:h-96 md:w-96 md:h-[450px] bg-white rounded-r-2xl rounded-l-md shadow-2xl border border-border transform rotate-[-5deg] hover:rotate-0 hover:-translate-y-2 transition-all duration-500 ease-out flex flex-col p-8 lg:p-12 before:absolute before:inset-y-0 before:left-0 before:w-4 before:bg-gradient-to-r before:from-black/10 before:to-transparent before:z-10">
              <div className="w-16 h-1 bg-accent mb-12"></div>
              <h3 className="text-3xl lg:text-4xl font-bold text-primary-text leading-tight mb-2">MGA<br/>Electronics</h3>
              <p className="text-secondary-text font-medium tracking-widest uppercase text-xs">Product Catalog</p>
              
              <div className="mt-auto">
                <FileText className="w-16 h-16 text-border" strokeWidth={1} />
              </div>
            </div>
          </div>

        </div>
        
      </div>
    </section>
  );
}
