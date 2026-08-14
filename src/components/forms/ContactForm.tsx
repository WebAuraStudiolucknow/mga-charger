"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      // Simulate network request without backend API
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log("Form Data Submitted:", data);
      
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "An error occurred");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center animate-in fade-in">
        <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent Successfully</h3>
        <p className="text-green-700 mb-6">Thank you for your enquiry. Our technical team will get back to you within 24 hours.</p>
        <button 
          onClick={() => setStatus("idle")}
          className="bg-green-600 text-white px-6 py-2 rounded-sm font-medium hover:bg-green-700 transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status === "error" && (
        <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-md flex items-center">
          <AlertCircle className="w-5 h-5 mr-2 shrink-0" />
          <p>{errorMessage}</p>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-bold text-primary-text">Full Name <span className="text-accent">*</span></label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            required 
            className="w-full px-4 py-3 bg-white border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
            placeholder="John Doe"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="company" className="text-sm font-bold text-primary-text">Company / Organization</label>
          <input 
            type="text" 
            id="company" 
            name="company" 
            className="w-full px-4 py-3 bg-white border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
            placeholder="ABC Industries Ltd."
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-bold text-primary-text">Email Address <span className="text-accent">*</span></label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            required 
            className="w-full px-4 py-3 bg-white border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
            placeholder="john@example.com"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-bold text-primary-text">Phone Number <span className="text-accent">*</span></label>
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            required 
            className="w-full px-4 py-3 bg-white border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
            placeholder="+91 98765 43210"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="requirement" className="text-sm font-bold text-primary-text">Product / Requirement Category <span className="text-accent">*</span></label>
        <select 
          id="requirement" 
          name="requirement" 
          required 
          className="w-full px-4 py-3 bg-white border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors appearance-none"
        >
          <option value="">Select a category...</option>
          <option value="automotive">Automotive Battery Chargers</option>
          <option value="industrial">Industrial Battery Chargers</option>
          <option value="ev">Electric Vehicle (EV) Chargers</option>
          <option value="inverter">Inverter Chargers</option>
          <option value="testing">Testing Equipment</option>
          <option value="custom">Custom OEM Solution</option>
          <option value="other">Other Inquiry</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-bold text-primary-text">Your Message / Specifications <span className="text-accent">*</span></label>
        <textarea 
          id="message" 
          name="message" 
          required 
          rows={5}
          className="w-full px-4 py-3 bg-white border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors resize-y"
          placeholder="Please describe your charging requirements, battery capacity, application, etc."
        ></textarea>
      </div>

      <button 
        type="submit" 
        disabled={status === "loading"}
        className="w-full bg-accent text-white px-8 py-4 rounded-sm font-bold hover:bg-accent-dark transition-colors flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed shadow-md text-lg"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-5 h-5 mr-2" />
            Send Enquiry
          </>
        )}
      </button>
      
      <p className="text-xs text-secondary-text text-center mt-4">
        Your information is secure and will only be used to respond to your enquiry.
      </p>
    </form>
  );
}
