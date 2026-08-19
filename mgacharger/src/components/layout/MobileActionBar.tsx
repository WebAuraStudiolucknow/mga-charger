"use client";

import Link from "next/link";
import { Bot } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";

export function MobileActionBar() {
  const openChatbot = () => {
    window.dispatchEvent(new Event("open-chatbot"));
  };

  return (
    <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white border-t border-border shadow-[0_-4px_12px_rgba(0,0,0,0.1)] z-40 flex items-center h-[58px]">
      {/* Left Tab: WhatsApp */}
      <a 
        href="https://wa.me/917499394690?text=Hello%20MGA%20Electronics%2C%20I%20have%20an%20inquiry." 
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center h-full text-[#25D366] font-bold text-xs border-r border-border hover:bg-emerald-50 transition-colors"
      >
        <BsWhatsapp className="w-5 h-5 mr-2 shrink-0 text-[#25D366]" />
        <span className="uppercase tracking-wider">WhatsApp</span>
      </a>

      {/* Right Tab: Chatbot */}
      <button 
        onClick={openChatbot} 
        className="flex-1 flex items-center justify-center h-full bg-accent text-white font-bold text-xs hover:bg-accent-dark transition-colors cursor-pointer"
      >
        <Bot className="w-5 h-5 mr-2 shrink-0" />
        <span className="uppercase tracking-wider">AI Assistant</span>
      </button>
    </div>
  );
}
