"use client";

import Link from "next/link";
import { Mail, MapPin, Phone, ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#070D18] text-slate-300 pt-16 pb-12 border-t border-white/10">
      <div className="max-w-[1280px] xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-extrabold text-white mb-4 tracking-tight">MGA Electronics</h3>
            <p className="mb-6 leading-relaxed text-xs sm:text-sm font-light text-slate-300">
              Advanced industrial battery chargers and power solutions engineered for automotive, industrial, and energy applications since 2002.
            </p>
            <div className="mb-6 space-y-1.5 text-xs text-slate-200 bg-white/5 p-4 rounded-xl border border-white/10 shadow-inner">
              <div className="flex items-center"><strong className="text-accent mr-1.5">GSTIN:</strong> 09AFOPG9627E1Z4</div>
              <div className="flex items-center"><strong className="text-accent mr-1.5">Established:</strong> 2002</div>
              <div className="flex items-center text-emerald-400 font-semibold mt-1">
                <ShieldCheck className="w-3.5 h-3.5 mr-1" /> ISO 9001:2015 Certified
              </div>
            </div>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start text-slate-300">
                <MapPin className="w-4 h-4 text-accent mr-3 mt-0.5 shrink-0" />
                <span>Lucknow, Uttar Pradesh, India</span>
              </div>
              <div className="flex items-center hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-accent mr-3 shrink-0" />
                <a href="tel:+917499394690">+91-7499394690, +91-9076731251</a>
              </div>
              <div className="flex items-center hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-accent mr-3 shrink-0" />
                <a href="mailto:mgacharger@yahoo.com">mgacharger@yahoo.com</a>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-base font-bold text-white mb-5 uppercase tracking-wider text-xs">Navigation</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><Link href="/" className="hover:text-accent-light transition-colors">Home</Link></li>
              <li><Link href="/about-us" className="hover:text-accent-light transition-colors">About Us</Link></li>
              <li><Link href="/products" className="hover:text-accent-light transition-colors">Products Catalog</Link></li>
              <li><Link href="/gallery" className="hover:text-accent-light transition-colors">Manufacturing Plant</Link></li>
              <li><Link href="/blogs" className="hover:text-accent-light transition-colors">Technical Blogs</Link></li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-base font-bold text-white mb-5 uppercase tracking-wider text-xs">Categories</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><Link href="/products?category=automotive" className="hover:text-accent-light transition-colors">Automotive Chargers</Link></li>
              <li><Link href="/products?category=industrial" className="hover:text-accent-light transition-colors">Industrial Chargers</Link></li>
              <li><Link href="/products?category=ev" className="hover:text-accent-light transition-colors">EV Battery Chargers</Link></li>
              <li><Link href="/products?category=inverter" className="hover:text-accent-light transition-colors">BIG BOSS Boosters</Link></li>
              <li><Link href="/products?category=testing" className="hover:text-accent-light transition-colors">Digital Testers</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-bold text-white mb-5 uppercase tracking-wider text-xs">Quick Links</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><Link href="/warranty" className="hover:text-accent-light transition-colors">Warranty Claim & Reg.</Link></li>
              <li><Link href="/brochure" className="hover:text-accent-light transition-colors">Download Brochure</Link></li>
              <li><Link href="/contact-us" className="hover:text-accent-light transition-colors">Contact Sales</Link></li>
              <li><Link href="#" className="hover:text-accent-light transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-accent-light transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-base font-bold text-white mb-5 uppercase tracking-wider text-xs">Stay Connected</h4>
            <p className="text-xs text-slate-300 mb-4 font-light">
              Subscribe for industrial charger updates & datasheets.
            </p>
            <form className="flex flex-col space-y-2.5" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your work email address" 
                className="bg-white/10 border border-white/20 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-accent w-full text-xs placeholder:text-slate-400"
              />
              <button 
                type="submit"
                className="bg-accent text-white px-4 py-3 rounded-xl font-bold hover:bg-accent-dark transition-colors w-full text-xs shadow-md shadow-accent/25 cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 gap-4">
          <p>&copy; {new Date().getFullYear()} MGA Electronics. All rights reserved.</p>
          <p className="text-slate-400">
            Designed & Developed by{" "}
            <a 
              href="https://webaurastudio.in/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-200 hover:text-accent-light font-medium transition-colors underline underline-offset-2"
            >
              WebAuro Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
