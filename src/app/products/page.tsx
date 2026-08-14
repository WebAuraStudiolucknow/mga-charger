import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { products } from "@/data/products";
import { ProductCatalogView } from "@/components/products/ProductCatalogView";

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

  return (
    <div className="bg-secondary-bg min-h-screen pb-20 overflow-hidden">
      {/* Page Header */}
      <div className="bg-white border-b border-border py-8 lg:py-12">
        <div className="max-w-[1280px] xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center text-xs sm:text-sm text-secondary-text mb-3">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 mx-2 text-secondary-text/60" />
            <span className="text-primary-text font-bold">Products Catalog</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-primary-text tracking-tight mb-2">
            Industrial Chargers & Power Solutions
          </h1>
          <p className="text-sm sm:text-base text-secondary-text max-w-2xl font-normal">
            Explore MGA's complete range of heavy-duty battery chargers, automatic boost chargers, and testing equipment.
          </p>
        </div>
      </div>

      {/* Main Catalog View Container */}
      <div className="max-w-[1280px] xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ProductCatalogView products={products} initialCategory={currentCategory} />
      </div>
    </div>
  );
}
