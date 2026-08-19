"use client";

import { useState, useMemo } from "react";
import { Search, X, Filter, SlidersHorizontal, Check } from "lucide-react";
import { Product } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { AnimatedCard } from "../common/AnimatedCard";
import { cn } from "@/lib/utils";

const categories = [
  { id: "all", name: "All Products" },
  { id: "automotive", name: "Automotive Chargers" },
  { id: "industrial", name: "Industrial Chargers" },
  { id: "ev", name: "EV Chargers" },
  { id: "inverter", name: "Inverter Chargers" },
  { id: "power-supply", name: "Power Supply" },
  { id: "testing", name: "Testing Equipment" },
];

interface ProductCatalogViewProps {
  products: Product[];
  initialCategory?: string;
}

export function ProductCatalogView({ products, initialCategory = "all" }: ProductCatalogViewProps) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  // Filter products based on selected category & search query
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory = selectedCategory === "all" || p.category === selectedCategory;

      const query = searchQuery.trim().toLowerCase();
      if (!query) return matchesCategory;

      const matchesSearch =
        p.name.toLowerCase().includes(query) ||
        p.categoryName.toLowerCase().includes(query) ||
        p.shortDescription.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        (p.specifications && p.specifications.some((s) => s.value.toLowerCase().includes(query)));

      return matchesCategory && matchesSearch;
    });
  }, [products, selectedCategory, searchQuery]);

  return (
    <div className="space-y-8">
      {/* Top Search & Filter Bar Section */}
      <div className="bg-white rounded-2xl p-4 sm:p-6 border border-border/80 shadow-xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        
        {/* Search Input Box */}
        <div className="relative flex-1">
          <Search className="w-5 h-5 text-secondary-text absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products by name, voltage, amps (e.g. 12V, 30A, Big Boss)..."
            className="w-full pl-11 pr-10 py-3 bg-secondary-bg rounded-xl border border-border/80 focus:outline-none focus:border-accent text-sm text-primary-text font-medium transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary-text hover:text-primary-text p-1 cursor-pointer"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Filter Toggle Button */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => setIsFilterModalOpen(!isFilterModalOpen)}
            className={cn(
              "px-5 py-3 rounded-xl border text-sm font-bold flex items-center transition-all cursor-pointer shadow-xs",
              selectedCategory !== "all"
                ? "bg-accent text-white border-accent shadow-accent/20"
                : "bg-white text-primary-text border-border/80 hover:border-accent hover:text-accent"
            )}
          >
            <SlidersHorizontal className="w-4 h-4 mr-2" />
            <span>Filter Categories</span>
            {selectedCategory !== "all" && (
              <span className="ml-2 w-2 h-2 bg-white rounded-full animate-pulse"></span>
            )}
          </button>

          <span className="text-xs font-bold text-secondary-text uppercase tracking-wider bg-secondary-bg px-3 py-3 rounded-xl border border-border/60 shrink-0">
            {filteredProducts.length} {filteredProducts.length === 1 ? "Product" : "Products"}
          </span>
        </div>

      </div>

      {/* Horizontal Scrollable Quick Category Pills Bar */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={cn(
                "px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all border shrink-0 cursor-pointer",
                isSelected
                  ? "bg-accent text-white border-accent shadow-md shadow-accent/20"
                  : "bg-white text-secondary-text border-border/80 hover:border-accent/50 hover:text-primary-text"
              )}
            >
              {cat.name}
            </button>
          );
        })}
      </div>

      {/* Category Filter Drawer Modal (Popups cleanly when Filter button is clicked) */}
      {isFilterModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200"
            onClick={() => setIsFilterModalOpen(false)}
          />

          <div className="relative bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl border border-border/80 z-10 animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-4 border-b border-border/80 mb-4">
              <div className="flex items-center">
                <Filter className="w-5 h-5 text-accent mr-2" />
                <h3 className="text-lg font-bold text-primary-text">Select Category</h3>
              </div>
              <button
                onClick={() => setIsFilterModalOpen(false)}
                className="p-1.5 text-secondary-text hover:bg-secondary-bg rounded-lg cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-1.5 max-h-[60vh] overflow-y-auto pr-1">
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategory(cat.id);
                      setIsFilterModalOpen(false);
                    }}
                    className={cn(
                      "w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all flex items-center justify-between cursor-pointer",
                      isSelected
                        ? "bg-accent/10 text-accent border border-accent/30 font-bold"
                        : "text-primary-text hover:bg-secondary-bg"
                    )}
                  >
                    <span>{cat.name}</span>
                    {isSelected && <Check className="w-4 h-4 text-accent" />}
                  </button>
                );
              })}
            </div>

            <div className="mt-6 pt-4 border-t border-border/80 flex items-center justify-between">
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                  setIsFilterModalOpen(false);
                }}
                className="text-xs font-bold text-secondary-text hover:text-accent cursor-pointer"
              >
                Reset All Filters
              </button>
              <button
                onClick={() => setIsFilterModalOpen(false)}
                className="px-5 py-2.5 bg-accent text-white rounded-xl text-xs font-bold hover:bg-accent-dark transition-colors cursor-pointer"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Product Grid */}
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

        {/* Empty Search Result Fallback */}
        {filteredProducts.length === 0 && (
          <div className="col-span-full py-16 text-center bg-white border border-border/80 rounded-2xl p-8">
            <Search className="w-12 h-12 text-secondary-text/40 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-primary-text mb-2">No matching products found</h3>
            <p className="text-sm text-secondary-text max-w-md mx-auto mb-6">
              Try searching with different terms like "12V", "30A", or select "All Products" to browse our complete range.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="px-6 py-2.5 bg-accent text-white rounded-xl text-xs font-bold hover:bg-accent-dark transition-colors cursor-pointer"
            >
              Clear Search & Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
