import { Mail, Phone, Clock } from "lucide-react";

export function TopBar() {
  return (
    <div className="bg-accent-dark text-white/90 text-sm py-2 hidden lg:block">
      <div className="max-w-[1280px] xl:max-w-[1400px] mx-auto px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <span className="font-semibold text-white tracking-wide">MGA Electronics</span>
          <span className="opacity-50">|</span>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2 opacity-80" />
            <span>Mon - Sat: 9AM - 6PM</span>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="flex items-center hover:text-white transition-colors">
            <Phone className="w-4 h-4 mr-2 opacity-80" />
            <a href="tel:+917499394690">+91-7499394690</a>
          </div>
          <div className="flex items-center hover:text-white transition-colors">
            <Phone className="w-4 h-4 mr-2 opacity-80" />
            <a href="tel:+919076731251">+91-9076731251</a>
          </div>
          <div className="flex items-center hover:text-white transition-colors">
            <Mail className="w-4 h-4 mr-2 opacity-80" />
            <a href="mailto:mgacharger@yahoo.com">mgacharger@yahoo.com</a>
          </div>
        </div>
      </div>
    </div>
  );
}
