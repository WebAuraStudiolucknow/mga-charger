"use client";

import { BsWhatsapp } from "react-icons/bs";

export function WhatsAppButton() {
  const whatsappUrl = "https://wa.me/917499394690?text=Hello%20MGA%20Electronics%2C%20I%20am%20interested%20in%20your%20industrial%20battery%20chargers%20and%20power%20solutions.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="hidden lg:flex fixed bottom-6 left-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-2xl hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-110 items-center justify-center cursor-pointer group"
      aria-label="Connect on WhatsApp"
    >
      <BsWhatsapp className="w-7 h-7 text-white shrink-0 group-hover:rotate-12 transition-transform duration-300" />
    </a>
  );
}
