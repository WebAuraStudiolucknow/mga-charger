"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TopBar } from "./TopBar";
import { ProductsMegaMenu } from "../navigation/ProductsMegaMenu";
import { MobileMenu } from "./MobileMenu";
import { navigation } from "@/data/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mega menu when route changes
  useEffect(() => {
    setIsMegaMenuOpen(false);
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <TopBar />
      <header
        className={cn(
          "sticky top-0 z-50 w-full bg-white transition-all duration-200 border-b",
          isScrolled ? "shadow-sm border-transparent" : "border-border"
        )}
      >
        <div className="max-w-[1280px] xl:max-w-[1400px] mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tight shrink-0">
            MGA<span className="text-accent">Electronics</span>
          </Link>

          <nav className="hidden lg:flex h-full items-center">
            <ul className="flex items-center space-x-8 h-full">
              {navigation.map((item) => {
                const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                const isProducts = item.megaMenu;

                if (isProducts) {
                  return (
                    <li
                      key={item.href}
                      className="h-full flex items-center"
                      onMouseEnter={() => setIsMegaMenuOpen(true)}
                      onMouseLeave={() => setIsMegaMenuOpen(false)}
                    >
                      <button
                        className={cn(
                          "text-sm font-medium transition-colors flex items-center h-full",
                          isActive ? "text-accent font-semibold" : "text-primary-text hover:text-accent"
                        )}
                        onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                        aria-expanded={isMegaMenuOpen}
                      >
                        {item.label}
                        <ChevronDown className={cn("ml-1 w-4 h-4 transition-transform duration-200", isMegaMenuOpen ? "rotate-180" : "")} />
                      </button>
                      <ProductsMegaMenu isOpen={isMegaMenuOpen} />
                    </li>
                  );
                }

                return (
                  <li key={item.href} className="h-full flex items-center">
                    <Link
                      href={item.href}
                      className={cn(
                        "text-sm font-medium transition-colors h-full flex items-center relative",
                        isActive ? "text-accent font-semibold" : "text-primary-text hover:text-accent"
                      )}
                    >
                      {item.label}
                      {isActive && (
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent rounded-t-md" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="hidden lg:flex items-center shrink-0">
            <Link
              href="/contact-us"
              className="bg-accent text-white px-6 py-2.5 rounded-sm font-medium text-sm hover:bg-accent-dark transition-colors shadow-sm"
            >
              Request a Quote
            </Link>
          </div>

          <button
            className="lg:hidden p-2 text-primary-text"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open mobile menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navigation={navigation}
        pathname={pathname}
      />
    </>
  );
}
