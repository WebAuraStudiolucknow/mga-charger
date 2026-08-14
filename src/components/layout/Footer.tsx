import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-deep-navy text-white/80 pt-20 pb-10">
      <div className="max-w-[1280px] xl:max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">MGA Electronics</h3>
            <p className="mb-4 leading-relaxed text-sm">
              Advanced battery chargers and power solutions engineered for automotive, industrial and energy applications since 2002.
            </p>
            <div className="mb-6 space-y-1 text-xs text-white/90 bg-white/5 p-3 rounded-lg border border-white/10">
              <div><strong className="text-accent">GSTIN:</strong> 09AFOPG9627E1Z4</div>
              <div><strong className="text-accent">Est. Year:</strong> 2002</div>
              <div><strong className="text-accent">Quality:</strong> ISO 9001:2015 Certified</div>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-accent mr-3 mt-0.5 shrink-0" />
                <span>Lucknow, Uttar Pradesh, India</span>
              </div>
              <div className="flex items-center hover:text-white transition-colors">
                <Phone className="w-5 h-5 text-accent mr-3 shrink-0" />
                <a href="tel:+917499394690">+91-7499394690, +91-9076731251</a>
              </div>
              <div className="flex items-center hover:text-white transition-colors">
                <Mail className="w-5 h-5 text-accent mr-3 shrink-0" />
                <a href="mailto:mgacharger@yahoo.com">mgacharger@yahoo.com</a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link href="/about-us" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/products" className="hover:text-accent transition-colors">Products</Link></li>
              <li><Link href="/gallery" className="hover:text-accent transition-colors">Gallery</Link></li>
              <li><Link href="/contact-us" className="hover:text-accent transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Products</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/products?category=automotive" className="hover:text-accent transition-colors">Automotive Chargers</Link></li>
              <li><Link href="/products?category=industrial" className="hover:text-accent transition-colors">Industrial Chargers</Link></li>
              <li><Link href="/products?category=ev" className="hover:text-accent transition-colors">EV Chargers</Link></li>
              <li><Link href="/products?category=testing" className="hover:text-accent transition-colors">Testing Equipment</Link></li>
              <li><Link href="/products?category=power-supply" className="hover:text-accent transition-colors">Power Supply</Link></li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Stay Updated</h4>
            <p className="text-sm mb-4">
              Subscribe to our newsletter for the latest product updates and technical insights.
            </p>
            <form className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/10 border border-white/20 text-white px-4 py-3 rounded-sm focus:outline-none focus:border-accent w-full text-sm placeholder:text-white/40"
              />
              <button 
                type="button"
                className="bg-accent text-white px-4 py-3 rounded-sm font-semibold hover:bg-accent-dark transition-colors w-full text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; {new Date().getFullYear()} MGA Electronics. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
