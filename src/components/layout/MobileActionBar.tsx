import Link from "next/link";
import { MessageCircle, FileText } from "lucide-react";

export function MobileActionBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white border-t border-border shadow-[0_-4px_10px_rgba(0,0,0,0.05)] z-40 flex">
      <Link 
        href="https://wa.me/917499394690" 
        className="flex-1 flex flex-col items-center justify-center py-2 text-accent border-r border-border hover:bg-accent-light transition-colors"
      >
        <MessageCircle className="w-5 h-5 mb-1" />
        <span className="text-[11px] font-semibold uppercase tracking-wider">WhatsApp</span>
      </Link>
      <Link 
        href="/contact-us" 
        className="flex-1 flex flex-col items-center justify-center py-2 bg-accent text-white hover:bg-accent-dark transition-colors"
      >
        <FileText className="w-5 h-5 mb-1" />
        <span className="text-[11px] font-semibold uppercase tracking-wider">Request Quote</span>
      </Link>
    </div>
  );
}
