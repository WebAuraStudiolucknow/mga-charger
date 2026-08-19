import { Metadata } from "next";
import Link from "next/link";
import { 
  ShieldCheck, 
  ChevronRight, 
  FileCheck, 
  Clock, 
  Wrench, 
  Award, 
  HelpCircle, 
  PhoneCall, 
  FileText 
} from "lucide-react";
import { WarrantyForm } from "@/components/forms/WarrantyForm";

export const metadata: Metadata = {
  title: "Warranty Registration & Support | MGA Electronics",
  description: "Register your MGA charger warranty or submit a warranty claim with purchase bill upload. Fast factory-backed technical support and replacement.",
};

export default function WarrantyPage() {
  return (
    <div className="bg-secondary-bg min-h-screen pb-20">
      {/* Hero Banner */}
      <div className="bg-white border-b border-border py-12 lg:py-16">
        <div className="max-w-[1280px] xl:max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="flex items-center text-sm text-secondary-text mb-6">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-primary-text font-medium">Warranty Registration & Claim</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center text-xs font-bold text-accent bg-accent/10 px-3 py-1 rounded-full mb-4">
                <ShieldCheck className="w-4 h-4 mr-1.5" /> Official Warranty Service Portal
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold text-primary-text mb-4 tracking-tight leading-tight">
                MGA Electronics Warranty Care
              </h1>
              <p className="text-base md:text-lg text-secondary-text leading-relaxed">
                Register your purchase or submit a warranty claim online. Upload your purchase bill (Image or PDF) along with your product serial number for fast verification and factory technical support.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 shrink-0 lg:w-80">
              <div className="bg-secondary-bg p-4 rounded-xl border border-border text-center">
                <Award className="w-6 h-6 text-accent mx-auto mb-2" />
                <div className="text-xl font-extrabold text-primary-text">100%</div>
                <div className="text-xs text-secondary-text">Genuine Spares Guarantee</div>
              </div>
              <div className="bg-secondary-bg p-4 rounded-xl border border-border text-center">
                <Clock className="w-6 h-6 text-accent mx-auto mb-2" />
                <div className="text-xl font-extrabold text-primary-text">24-48 hrs</div>
                <div className="text-xs text-secondary-text">Claim Review Window</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-[1280px] xl:max-w-[1400px] mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Warranty Form Column */}
          <div className="lg:col-span-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-primary-text tracking-tight mb-2">
                Submit Warranty Details & Bill Receipt
              </h2>
              <p className="text-sm text-secondary-text">
                Please complete the form below. Ensure all details match your purchase tax invoice for prompt approval.
              </p>
            </div>

            <WarrantyForm />
          </div>

          {/* Sidebar / Info Column */}
          <div className="lg:col-span-4 space-y-8">
            {/* Process Steps Card */}
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-border shadow-sm">
              <h3 className="text-lg font-bold text-primary-text mb-6 pb-4 border-b border-border flex items-center">
                <Wrench className="w-5 h-5 text-accent mr-2" /> How Warranty Claims Work
              </h3>

              <ol className="relative border-l border-accent/30 ml-3 space-y-8">
                <li className="ml-6">
                  <span className="absolute flex items-center justify-center w-7 h-7 bg-accent text-white rounded-full -left-3.5 ring-4 ring-white text-xs font-bold">
                    1
                  </span>
                  <h4 className="font-bold text-sm text-primary-text mb-1">Fill Form & Upload Bill</h4>
                  <p className="text-xs text-secondary-text leading-relaxed">
                    Provide customer details, product serial number, and upload bill photo or PDF.
                  </p>
                </li>

                <li className="ml-6">
                  <span className="absolute flex items-center justify-center w-7 h-7 bg-accent text-white rounded-full -left-3.5 ring-4 ring-white text-xs font-bold">
                    2
                  </span>
                  <h4 className="font-bold text-sm text-primary-text mb-1">Document & Serial Check</h4>
                  <p className="text-xs text-secondary-text leading-relaxed">
                    Our technical support desk verifies invoice authenticity and warranty duration.
                  </p>
                </li>

                <li className="ml-6">
                  <span className="absolute flex items-center justify-center w-7 h-7 bg-accent text-white rounded-full -left-3.5 ring-4 ring-white text-xs font-bold">
                    3
                  </span>
                  <h4 className="font-bold text-sm text-primary-text mb-1">Repair / Part Replacement</h4>
                  <p className="text-xs text-secondary-text leading-relaxed">
                    Genuine MGA components are dispatched or unit is serviced under factory warranty terms.
                  </p>
                </li>
              </ol>
            </div>

            {/* Assistance Card */}
            <div className="bg-deep-navy p-6 rounded-xl text-white shadow-md">
              <h4 className="text-lg font-bold mb-3 flex items-center">
                <PhoneCall className="w-5 h-5 text-accent-light mr-2" /> Direct Warranty Hotline
              </h4>
              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                Have urgent questions about your charger or invoice verification? Speak directly with our support desk.
              </p>
              <div className="space-y-2 text-xs font-medium bg-white/10 p-4 rounded-lg border border-white/15">
                <div>Phone: <a href="tel:+917499394690" className="text-accent-light font-bold hover:underline">+91 74993 94690</a></div>
                <div>Alternative: <a href="tel:+919076731251" className="text-accent-light font-bold hover:underline">+91 90767 31251</a></div>
                <div>Email: <a href="mailto:warranty@mgacharger.com" className="text-accent-light font-bold hover:underline">warranty@mgacharger.com</a></div>
              </div>
            </div>

            {/* Document Tips */}
            <div className="bg-amber-50/70 border border-amber-200/80 p-6 rounded-xl text-amber-900 text-xs leading-relaxed space-y-2">
              <div className="font-bold text-amber-950 flex items-center">
                <FileText className="w-4 h-4 text-amber-700 mr-2" /> Important Upload Guidelines
              </div>
              <ul className="list-disc list-inside space-y-1 text-[11px] text-amber-900">
                <li>Ensure the dealer name and tax invoice number are clearly legible.</li>
                <li>The serial number on the bill must match the unit back sticker.</li>
                <li>Supported upload formats: JPG, PNG, WEBP, or PDF.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Warranty FAQs Section */}
        <div className="mt-20 border-t border-border pt-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-primary-text mb-3 tracking-tight">
              Frequently Asked Warranty Questions
            </h2>
            <p className="text-secondary-text text-sm">
              Clear answers regarding MGA Electronics warranty policies, coverage, and claim procedure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
              <h3 className="text-base font-bold text-primary-text mb-2 flex items-center">
                <HelpCircle className="w-4 h-4 text-accent mr-2 shrink-0" />
                What is covered under the MGA Warranty?
              </h3>
              <p className="text-xs text-secondary-text leading-relaxed">
                MGA Electronics warranty covers manufacturing defects, transformer failures, internal PCB components, and digital displays occurring during normal operating conditions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
              <h3 className="text-base font-bold text-primary-text mb-2 flex items-center">
                <HelpCircle className="w-4 h-4 text-accent mr-2 shrink-0" />
                Why is the Warranty Bill / Invoice mandatory?
              </h3>
              <p className="text-xs text-secondary-text leading-relaxed">
                The purchase bill validates the date of purchase, dealer authorization, and warranty validity period. Uploading a clear photo or PDF speeds up your claim processing.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
              <h3 className="text-base font-bold text-primary-text mb-2 flex items-center">
                <HelpCircle className="w-4 h-4 text-accent mr-2 shrink-0" />
                What if my charger serial number sticker is damaged?
              </h3>
              <p className="text-xs text-secondary-text leading-relaxed">
                If the serial sticker is partially damaged, please mention the serial number listed on your original purchase tax invoice or contact our support line with your bill details.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
              <h3 className="text-base font-bold text-primary-text mb-2 flex items-center">
                <HelpCircle className="w-4 h-4 text-accent mr-2 shrink-0" />
                What is the typical turnaround time for warranty service?
              </h3>
              <p className="text-xs text-secondary-text leading-relaxed">
                Once approved, replacement components or serviced units are processed within 24-48 hours and shipped directly back to your registered service address.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
