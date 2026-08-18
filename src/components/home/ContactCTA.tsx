import Link from "next/link";
import { ArrowRight, MapPin, Phone, Mail, Zap } from "lucide-react";

export function ContactCTA() {
  return (
    <section className="py-20 lg:py-28 bg-[#0B1528] text-white relative overflow-hidden border-b border-white/10">
      {/* Ambient Radial Lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-[1280px] xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div>
            <div className="inline-flex items-center text-accent-light font-bold tracking-widest text-xs uppercase mb-4 bg-accent/15 px-3.5 py-1.5 rounded-full border border-accent/30">
              <Zap className="w-3.5 h-3.5 mr-2 text-accent" />
              GET IN TOUCH WITH ENGINEERS
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              Let&apos;s Build the Right Power Solution.
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light mb-10">
              Have a standard battery charger requirement or need custom OEM manufacturing according to exact voltage/ampere specs? Our engineering team is ready to assist.
            </p>

            <div className="space-y-5 mb-8">
              <div className="flex items-center text-slate-200">
                <div className="w-10 h-10 rounded-xl bg-white/10 text-accent-light flex items-center justify-center mr-4 border border-white/10">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">DIRECT CALL</span>
                  <a href="tel:+917499394690" className="text-base font-bold text-white hover:text-accent-light transition-colors">+91-7499394690</a>
                </div>
              </div>

              <div className="flex items-center text-slate-200">
                <div className="w-10 h-10 rounded-xl bg-white/10 text-accent-light flex items-center justify-center mr-4 border border-white/10">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">EMAIL INQUIRY</span>
                  <a href="mailto:mgacharger@yahoo.com" className="text-base font-bold text-white hover:text-accent-light transition-colors">mgacharger@yahoo.com</a>
                </div>
              </div>

              <div className="flex items-center text-slate-200">
                <div className="w-10 h-10 rounded-xl bg-white/10 text-accent-light flex items-center justify-center mr-4 border border-white/10">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">MANUFACTURING PLANT</span>
                  <span className="text-base font-bold text-white">Lucknow, Uttar Pradesh, India (GSTIN: 09AFOPG9627E1Z4)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center lg:justify-end">
            <div className="bg-white/5 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-white/15 w-full max-w-lg shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-2">Request Technical Quote</h3>
              <p className="text-slate-300 text-xs sm:text-sm mb-6 font-light">Fill out your requirements for instant engineer consultation.</p>
              
              <div className="space-y-4">
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-300 block mb-1.5">Your Name / Organization</label>
                  <input type="text" className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-accent text-sm" placeholder="e.g. Acme Motors / Garages" />
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-300 block mb-1.5">Charger Specification Required</label>
                  <input type="text" className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-accent text-sm" placeholder="e.g. 12V 30A Charger / EV Pack" />
                </div>
                <Link
                  href="/contact-us"
                  className="bg-accent text-white px-6 py-4 rounded-xl font-bold hover:bg-accent-dark transition-all shadow-lg shadow-accent/25 flex items-center justify-center text-sm cursor-pointer w-full mt-6"
                >
                  <span>Continue to Full Inquiry Form</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
