import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Filter } from "lucide-react";
import { products } from "@/data/products";
import { ProductFilters } from "@/components/products/ProductFilters";
import { ProductCard } from "@/components/products/ProductCard";
import { AnimatedCard } from "@/components/common/AnimatedCard";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore our comprehensive range of battery chargers, testing equipment, and power solutions.",
};

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const currentCategory = category || "all";
  
  const filteredProducts = currentCategory === "all" 
    ? products 
    : products.filter(p => p.category === currentCategory);

  return (
    <div className="bg-secondary-bg min-h-screen pb-20 overflow-hidden">
      {/* Page Header */}
      <div className="bg-white border-b border-border py-12 lg:py-16">
        <div className="max-w-[1280px] xl:max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="flex items-center text-sm text-secondary-text mb-4">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-primary-text font-medium">Products</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-primary-text mb-4 tracking-tight">
            Our Products
          </h1>
          <p className="text-lg text-secondary-text max-w-2xl">
            Explore MGA's complete range of industrial battery chargers, power supplies, and testing equipment engineered for reliability.
          </p>
        </div>
      </div>

      <div className="max-w-[1280px] xl:max-w-[1400px] mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4 shrink-0">
            <div className="bg-white p-6 rounded-2xl border border-border sticky top-28 shadow-xs">
              <div className="flex items-center text-lg font-bold text-primary-text mb-6 pb-4 border-b border-border">
                <Filter className="w-5 h-5 mr-2 text-accent" />
                Categories
              </div>
              <ProductFilters currentCategory={currentCategory} />
            </div>
          </div>

          {/* Product Grid */}
          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product, index) => (
                <AnimatedCard
                  key={product.id}
                  direction="up"
                  index={index % 3}
                >
                  <ProductCard product={product} />
                </AnimatedCard>
              ))}
              
              {filteredProducts.length === 0 && (
                <div className="col-span-full py-20 text-center bg-white border border-border rounded-2xl">
                  <p className="text-lg text-secondary-text mb-4">No products found in this category.</p>
                  <Link href="/products" className="text-accent font-semibold hover:underline">
                    View all products
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
