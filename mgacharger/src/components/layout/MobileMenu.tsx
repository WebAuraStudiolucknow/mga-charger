"use client";

import { useState } from "react";
import Link from "next/link";
import { X, ChevronDown, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { productsMegaMenu } from "@/data/navigation";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navigation: any[];
  pathname: string;
}

export function MobileMenu({ isOpen, onClose, navigation, pathname }: MobileMenuProps) {
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 lg:hidden transition-all duration-300",
        isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      )}
    >
      {/* Backdrop */}
      <div 
        className={cn(
          "fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0"
        )}
        onClick={onClose}
      />
      
      {/* Drawer Panel - Smooth Right to Left Slide */}
      <div 
        className={cn(
          "fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl flex flex-col transform transition-transform duration-500 ease-in-out z-10",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-6 border-b border-border">
          <Link href="/" className="text-xl font-bold tracking-tight" onClick={onClose}>
            MGA<span className="text-accent">Electronics</span>
          </Link>
          <button
            onClick={onClose}
            className="p-2 text-secondary-text hover:bg-secondary-bg rounded-full transition-colors cursor-pointer"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-6 px-6">
          <nav className="space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              const isProducts = item.megaMenu;

              if (isProducts) {
                return (
                  <div key={item.href} className="mb-2">
                    <button
                      onClick={() => setIsProductsOpen(!isProductsOpen)}
                      className={cn(
                        "flex items-center justify-between w-full py-3 text-lg font-medium border-b border-border transition-colors cursor-pointer",
                        isActive ? "text-accent" : "text-primary-text"
                      )}
                    >
                      {item.label}
                      <ChevronDown className={cn("w-5 h-5 transition-transform duration-200", isProductsOpen ? "rotate-180" : "")} />
                    </button>
                    
                    {/* Products Accordion */}
                    <div
                      className={cn(
                        "overflow-hidden transition-all duration-300",
                        isProductsOpen ? "max-h-[1000px] mt-4 mb-2" : "max-h-0"
                      )}
                    >
                      <div className="space-y-6 pl-4 border-l-2 border-border ml-2 pb-2">
                        <div>
                          <div className="font-semibold text-primary-text mb-3 text-sm text-muted-foreground uppercase tracking-wider">{productsMegaMenu.column1.title}</div>
                          <ul className="space-y-3">
                            {productsMegaMenu.column1.links.slice(0, 5).map((link) => (
                              <li key={link.href}>
                                <Link 
                                  href={link.href} 
                                  className="text-secondary-text hover:text-accent block text-sm"
                                  onClick={onClose}
                                >
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <div className="font-semibold text-primary-text mb-3 text-sm text-muted-foreground uppercase tracking-wider">{productsMegaMenu.column2.title}</div>
                          <ul className="space-y-3">
                            {productsMegaMenu.column2.links.slice(0, 5).map((link) => (
                              <li key={link.href}>
                                <Link 
                                  href={link.href} 
                                  className="text-secondary-text hover:text-accent block text-sm"
                                  onClick={onClose}
                                >
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <Link 
                          href="/products" 
                          className="text-accent font-medium block pt-2"
                          onClick={onClose}
                        >
                          View All Products →
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    "block py-3 text-lg font-medium border-b border-border transition-colors",
                    isActive ? "text-accent" : "text-primary-text hover:text-accent"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="p-6 border-t border-border bg-secondary-bg">
          <Link
            href="/contact-us"
            onClick={onClose}
            className="w-full bg-accent text-white py-3 rounded-sm font-medium text-center flex justify-center hover:bg-accent-dark transition-colors mb-6 shadow-sm"
          >
            Request a Quote
          </Link>
          
          <div className="space-y-3 text-sm text-secondary-text">
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-3 text-accent shrink-0" />
              <a href="tel:+917499394690">+91-7499394690</a>
            </div>
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-3 text-accent shrink-0" />
              <a href="mailto:contact@mgacharger.com">contact@mgacharger.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
