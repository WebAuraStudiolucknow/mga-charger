import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, Filter } from "lucide-react";
import { products } from "@/data/products";
import { ProductFilters } from "@/components/products/ProductFilters";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore our comprehensive range of battery chargers, testing equipment, and power solutions.",
};

export default function ProductsPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const currentCategory = searchParams.category || "all";
  
  const filteredProducts = currentCategory === "all" 
    ? products 
    : products.filter(p => p.category === currentCategory);

  return (
    <div className="bg-secondary-bg min-h-screen pb-20">
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
            <div className="bg-white p-6 rounded-lg border border-border sticky top-28">
              <div className="flex items-center text-lg font-bold text-primary-text mb-6 pb-4 border-b border-border">
                <Filter className="w-5 h-5 mr-2 text-accent" />
                Categories
              </div>
              <ProductFilters currentCategory={currentCategory} />
            </div>
          </div>

          {/* Product Grid */}
          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="group bg-white rounded-lg overflow-hidden border border-border hover:border-accent transition-colors duration-300 flex flex-col h-full">
                  <div className="aspect-square bg-secondary-bg relative p-6 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-8 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="text-xs font-semibold text-secondary-text uppercase tracking-wider mb-2">
                      {product.categoryName}
                    </div>
                    <h3 className="text-lg font-bold text-primary-text mb-2 line-clamp-2 hover:text-accent transition-colors">
                      <Link href={`/products/${product.slug}`}>
                        {product.name}
                      </Link>
                    </h3>
                    <p className="text-sm text-secondary-text mb-6 line-clamp-2">
                      {product.shortDescription}
                    </p>
                    
                    <div className="mt-auto flex items-center justify-between pt-4 border-t border-border">
                      <Link
                        href={`/products/${product.slug}`}
                        className="text-sm font-semibold text-primary-text hover:text-accent transition-colors group/link flex items-center"
                      >
                        View Details
                        <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                      <Link
                        href={`/contact-us?product=${product.slug}`}
                        className="text-sm font-semibold text-accent hover:text-accent-dark transition-colors"
                      >
                        Request Quote
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
              
              {filteredProducts.length === 0 && (
                <div className="col-span-full py-20 text-center bg-white border border-border rounded-lg">
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
