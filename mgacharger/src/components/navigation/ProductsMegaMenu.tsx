"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { productsMegaMenu } from "@/data/navigation";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface ProductsMegaMenuProps {
  isOpen: boolean;
}

export function ProductsMegaMenu({ isOpen }: ProductsMegaMenuProps) {
  if (!isOpen) return null;

  return (
    <div
      className="absolute top-full left-0 w-full bg-white border-b border-border shadow-md animate-in fade-in slide-in-from-top-2 duration-200"
    >
      <div className="max-w-[1280px] xl:max-w-[1400px] mx-auto px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 gap-12">
          {/* Column 1 */}
          <div>
            <h3 className="text-lg font-semibold text-primary-text mb-6 pb-2 border-b border-border">
              {productsMegaMenu.column1.title}
            </h3>
            <ul className="space-y-3">
              {productsMegaMenu.column1.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-secondary-text hover:text-accent transition-colors text-sm font-medium flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-semibold text-primary-text mb-6 pb-2 border-b border-border">
              {productsMegaMenu.column2.title}
            </h3>
            <ul className="space-y-3">
              {productsMegaMenu.column2.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-secondary-text hover:text-accent transition-colors text-sm font-medium flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex justify-end">
          <Link
            href="/products"
            className="text-accent font-semibold flex items-center hover:text-accent-dark transition-colors group"
          >
            View All Products
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
