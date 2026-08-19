import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products as staticProducts } from "@/data/products";
import { getProducts } from "@/lib/payloadApi";
import { ProductCard } from "@/components/products/ProductCard";
import { AnimatedCard } from "@/components/common/AnimatedCard";

interface Props {
  initialProducts?: any[];
}

export async function FeaturedProducts({ initialProducts }: Props) {
  const productsData = initialProducts && initialProducts.length > 0
    ? initialProducts
    : await getProducts({ featured: true });

  const featuredList = productsData && productsData.length > 0
    ? productsData.slice(0, 6)
    : staticProducts.filter(p => p.featured).slice(0, 6);

  return (
    <section className="py-20 lg:py-32 bg-white border-b border-border overflow-hidden">
      <div className="max-w-[1280px] xl:max-w-[1400px] mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 lg:mb-16">
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

        {/* Row-wise Grid with Smooth Bottom-to-Top Animated Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredList.map((product: any, index: number) => (
            <AnimatedCard
              key={product.id || index}
              direction="up"
              index={index % 3}
            >
              <ProductCard product={product} />
            </AnimatedCard>
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
