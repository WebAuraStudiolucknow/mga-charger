import { Metadata } from "next";
import Link from "next/link";
import { Download, FileText, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Brochure",
  description: "Download the latest product brochure from MGA Electronics.",
};

export default function BrochurePage() {
  return (
    <div className="bg-secondary-bg min-h-screen flex items-center justify-center py-20">
      <div className="max-w-4xl w-full mx-auto px-6 lg:px-8">
        <div className="bg-white rounded-lg border border-border overflow-hidden shadow-sm flex flex-col md:flex-row">
          
          {/* Visual Side */}
          <div className="md:w-2/5 bg-accent p-12 text-white flex flex-col justify-center items-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/4"></div>
            <FileText className="w-24 h-24 mb-6 opacity-90 relative z-10" strokeWidth={1} />
            <div className="text-center relative z-10">
              <div className="font-bold text-2xl mb-1 tracking-tight">MGA Electronics</div>
              <div className="text-white/80 font-medium uppercase tracking-wider text-sm">Product Catalog 2024</div>
            </div>
          </div>

          {/* Content Side */}
          <div className="md:w-3/5 p-10 lg:p-16 flex flex-col justify-center">
            <h1 className="text-3xl font-bold text-primary-text mb-4 tracking-tight">
              Download Brochure
            </h1>
            <p className="text-secondary-text mb-8 leading-relaxed">
              Explore our complete range of battery chargers, testing equipment, and power solutions in our latest digital catalog.
            </p>

            <ul className="space-y-3 mb-10">
              {["Full product specifications", "Application guides", "Custom OEM capabilities", "Company certifications"].map((item, i) => (
                <li key={i} className="flex items-center text-sm font-medium text-primary-text">
                  <CheckCircle2 className="w-5 h-5 text-accent mr-3" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/MGA-Catalog.pdf"
                className="bg-accent text-white px-8 py-3.5 rounded-sm font-bold hover:bg-accent-dark transition-colors shadow-sm flex items-center justify-center group"
              >
                <Download className="w-5 h-5 mr-3 group-hover:-translate-y-1 transition-transform" />
                Download PDF
              </a>
              <Link
                href="/contact-us"
                className="bg-secondary-bg border border-border text-primary-text px-8 py-3.5 rounded-sm font-bold hover:bg-gray-100 transition-colors flex items-center justify-center text-center"
              >
                Request Physical Copy
              </Link>
            </div>
            
            <p className="text-xs text-secondary-text mt-6">
              PDF Format • ~4.2 MB • Updated Jan 2024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
