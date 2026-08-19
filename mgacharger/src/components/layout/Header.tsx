"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TopBar } from "./TopBar";
import { ProductsMegaMenu } from "../navigation/ProductsMegaMenu";
import { MobileMenu } from "./MobileMenu";
import { navigation } from "@/data/navigation";
import { Menu, X, ChevronDown, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus when route changes
  useEffect(() => {
    setIsMegaMenuOpen(false);
    setIsMobileMenuOpen(false);
    setIsContactOpen(false);
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
        <div className="max-w-[1280px] xl:max-w-[1400px] mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center shrink-0 py-1 focus:outline-none border-none outline-none">
            <Image
              src="/logo.png"
              alt="MGA Electronics Logo"
              width={160}
              height={45}
              className="h-8 sm:h-10 w-auto object-contain"
              priority
            />
          </Link>

          <nav className="hidden lg:flex h-full items-center">
            <ul className="flex items-center space-x-8 h-full">
              {navigation.map((item) => {
                const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                const isProducts = item.megaMenu;
                const hasSubMenu = Boolean(item.subMenu && item.subMenu.length > 0);

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
                          "text-sm font-medium transition-colors flex items-center h-full outline-none focus:outline-none cursor-pointer",
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

                if (hasSubMenu) {
                  return (
                    <li
                      key={item.href}
                      className="h-full flex items-center relative"
                      onMouseEnter={() => setIsContactOpen(true)}
                      onMouseLeave={() => setIsContactOpen(false)}
                    >
                      <button
                        className={cn(
                          "text-sm font-medium transition-colors flex items-center h-full outline-none focus:outline-none cursor-pointer",
                          isActive ? "text-accent font-semibold" : "text-primary-text hover:text-accent"
                        )}
                        onClick={() => setIsContactOpen(!isContactOpen)}
                      >
                        {item.label}
                        <ChevronDown className={cn("ml-1 w-4 h-4 transition-transform duration-200", isContactOpen ? "rotate-180" : "")} />
                      </button>

                      {/* Dropdown Menu */}
                      {isContactOpen && (
                        <div className="absolute top-full right-0 w-48 bg-white border border-border shadow-xl rounded-b-xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                          {item.subMenu?.map((sub) => {
                            if (sub.external) {
                              return (
                                <a
                                  key={sub.label}
                                  href={sub.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center justify-between px-4 py-2.5 text-xs font-semibold text-primary-text hover:bg-secondary-bg hover:text-accent transition-colors"
                                >
                                  {sub.label}
                                  <ExternalLink className="w-3.5 h-3.5 text-accent ml-2" />
                                </a>
                              );
                            }
                            return (
                              <Link
                                key={sub.label}
                                href={sub.href}
                                className="block px-4 py-2.5 text-xs font-semibold text-primary-text hover:bg-secondary-bg hover:text-accent transition-colors"
                              >
                                {sub.label}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </li>
                  );
                }

                return (
                  <li key={item.href} className="h-full flex items-center">
                    <Link
                      href={item.href}
                      className={cn(
                        "text-sm font-medium transition-colors h-full flex items-center relative outline-none focus:outline-none",
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

          <div className="hidden lg:flex items-center shrink-0 space-x-3">
            <Link
              href="/contact-us"
              className="bg-accent text-white px-6 py-2.5 rounded-sm font-medium text-sm hover:bg-accent-dark transition-colors shadow-sm"
            >
              Enquiry
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
