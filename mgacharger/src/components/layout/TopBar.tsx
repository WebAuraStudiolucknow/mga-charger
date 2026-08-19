import { Mail, Phone, Clock, ExternalLink } from "lucide-react";

export function TopBar() {
  return (
    <div className="bg-accent-dark text-white/90 text-xs sm:text-sm py-2 hidden lg:block border-b border-white/10">
      <div className="max-w-[1280px] xl:max-w-[1400px] mx-auto px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <span className="font-bold text-white tracking-wide">MGA Electronics</span>
          <span className="opacity-40">|</span>
          <span className="text-white/90 font-medium bg-white/10 px-2 py-0.5 rounded text-xs">GST: 09AFOPG9627E1Z4</span>
          <span className="opacity-40">|</span>
          <span className="text-white/80 text-xs">Est. 2002</span>
          <span className="opacity-40">|</span>
          <div className="flex items-center">
            <Clock className="w-3.5 h-3.5 mr-1.5 opacity-80" />
            <span className="text-xs">Mon - Sat: 9AM - 6PM</span>
          </div>
        </div>
        <div className="flex items-center space-x-5 text-xs sm:text-sm">
          <div className="flex items-center hover:text-white transition-colors">
            <Phone className="w-3.5 h-3.5 mr-1.5 opacity-80" />
            <a href="tel:+917499394690">+91-7499394690</a>
          </div>
          <div className="flex items-center hover:text-white transition-colors">
            <Phone className="w-3.5 h-3.5 mr-1.5 opacity-80" />
            <a href="tel:+919076731251">+91-9076731251</a>
          </div>
          <div className="flex items-center hover:text-white transition-colors">
            <Mail className="w-3.5 h-3.5 mr-1.5 opacity-80" />
            <a href="mailto:info@mgacharger.com">info@mgacharger.com</a>
          </div>
          <span className="opacity-40">|</span>
          <a 
            href="https://s3744.bom1.stableserver.net:2096/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-accent-light font-semibold hover:underline flex items-center"
          >
            Mail Login
            <ExternalLink className="w-3 h-3 ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
}
