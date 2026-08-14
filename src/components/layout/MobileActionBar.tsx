"use client";

import Link from "next/link";
import { MessageCircle, Bot } from "lucide-react";

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
        <svg className="w-5 h-5 fill-current mr-2 shrink-0" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.157 4.228 4.228-1.158zm7.135-4.14c-.286-.143-1.691-.835-1.953-.93-.262-.095-.453-.143-.644.143-.191.286-.739.93-.906 1.12-.167.191-.334.215-.62.072-.286-.143-1.208-.445-2.301-1.42-.85-.758-1.424-1.694-1.591-1.98-.167-.286-.018-.441.125-.583.129-.128.286-.334.429-.501.143-.167.191-.286.286-.477.095-.191.048-.358-.024-.501-.072-.143-.644-1.552-.882-2.122-.231-.555-.466-.48-.644-.488-.167-.008-.358-.008-.549-.008-.191 0-.501.072-.763.358-.262.286-1.002.978-1.002 2.386 0 1.408 1.026 2.769 1.169 2.96.143.191 2.019 3.084 4.892 4.325 2.873 1.241 2.873.827 3.398.774.525-.053 1.691-.692 1.93-1.36.239-.668.239-1.241.167-1.36-.072-.119-.263-.191-.549-.334z"/>
        </svg>
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
