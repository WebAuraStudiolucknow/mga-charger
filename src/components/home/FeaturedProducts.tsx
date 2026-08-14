import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { products } from "@/data/products";

export function FeaturedProducts() {
  const featuredList = products.filter(p => p.featured).slice(0, 6);

  return (
    <section className="py-20 lg:py-32 bg-white border-b border-border">
      <div className="max-w-[1280px] xl:max-w-[1400px] mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <div className="text-accent font-semibold tracking-wider text-xs uppercase mb-4 flex items-center">
              <span className="w-6 h-[2px] bg-accent mr-3"></span>
              FEATURED PRODUCTS
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-primary-text tracking-tight leading-[1.1]">
              Explore our charging <br className="hidden md:block"/>and power solutions.
            </h2>
          </div>
          <Link
            href="/products"
            className="hidden md:flex items-center text-primary-text font-bold hover:text-accent transition-colors group"
          >
            Explore All Products
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </div>

        {/* Row-wise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredList.map((product) => (
            <Link 
              key={product.id} 
              href={`/products/${product.slug}`}
              className="group flex flex-col bg-white border border-border rounded-lg overflow-hidden hover:border-accent hover:shadow-2xl hover:shadow-accent/15 transition-all duration-500 relative"
            >
              {/* Image Section */}
              <div className="aspect-[4/3] bg-white relative p-6 md:p-8 flex items-center justify-center overflow-hidden border-b border-border/50">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-6 mix-blend-multiply group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Content Section */}
              <div className="p-6 md:p-8 flex flex-col flex-grow bg-white">
                <span className="text-[10px] font-bold text-secondary-text uppercase tracking-wider mb-2 group-hover:text-accent transition-colors">
                  {product.categoryName}
                </span>
                <h3 className="text-lg md:text-xl font-bold text-primary-text mb-3 group-hover:text-accent transition-colors line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-sm text-secondary-text line-clamp-2 mb-6">
                  {product.shortDescription}
                </p>
                
                {/* Responsive View Details Button */}
                <div className="mt-auto pt-2">
                  <div className="w-full px-4 py-3.5 rounded font-semibold text-sm flex items-center justify-center transition-all duration-300 shadow-sm bg-accent text-white border border-accent md:bg-transparent md:text-accent md:shadow-none group-hover:bg-accent group-hover:text-white group-hover:shadow-sm">
                    View Details
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Mobile View All CTA */}
        <div className="mt-10 flex justify-center md:hidden">
          <Link
            href="/products"
            className="flex items-center text-accent font-semibold hover:text-accent-dark transition-colors group"
          >
            Explore All Products
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
