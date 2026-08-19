"use client";

import React, { useState, useRef } from "react";
import { 
  Upload, 
  FileText, 
  Image as ImageIcon, 
  X, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  ShieldCheck, 
  Copy, 
  Check, 
  Calendar,
  User,
  Mail,
  Phone,
  MapPin,
  Tag,
  Hash,
  Store,
  FileCheck
} from "lucide-react";

interface WarrantySuccessData {
  referenceId: string;
  submittedAt: string;
  fullName: string;
  email: string;
  phone: string;
  productName: string;
  serialNumber: string;
  invoiceNumber: string;
  fileName?: string | null;
}

export function WarrantyForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [filePreviewUrl, setFilePreviewUrl] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [successData, setSuccessData] = useState<WarrantySuccessData | null>(null);
  const [copiedRef, setCopiedRef] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (file: File | null) => {
    if (!file) {
      setSelectedFile(null);
      setFilePreviewUrl(null);
      return;
    }

    // Validate size limit: 10MB
    if (file.size > 10 * 1024 * 1024) {
      setErrorMessage("File size exceeds 10MB limit. Please choose a smaller file.");
      setStatus("error");
      return;
    }

    // Validate file type
    const validTypes = [
      "image/jpeg", 
      "image/png", 
      "image/webp", 
      "image/jpg", 
      "application/pdf"
    ];

    if (!validTypes.includes(file.type) && !file.name.match(/\.(jpg|jpeg|png|webp|pdf)$/i)) {
      setErrorMessage("Invalid file format. Please upload a PDF or Image file (.jpg, .png, .webp).");
      setStatus("error");
      return;
    }

    setErrorMessage("");
    if (status === "error") setStatus("idle");

    setSelectedFile(file);

    if (file.type.startsWith("image/")) {
      const url = URL.createObjectURL(file);
      setFilePreviewUrl(url);
    } else {
      setFilePreviewUrl(null);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    if (filePreviewUrl) {
      URL.revokeObjectURL(filePreviewUrl);
      setFilePreviewUrl(null);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    if (selectedFile) {
      formData.set("warrantyBill", selectedFile);
    }

    try {
      const response = await fetch("/api/warranty", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit warranty claim");
      }

      setSuccessData({
        referenceId: data.referenceId,
        submittedAt: data.submittedAt,
        fullName: formData.get("fullName") as string,
        email: formData.get("email") as string,
        phone: formData.get("phone") as string,
        productName: formData.get("productName") as string,
        serialNumber: formData.get("serialNumber") as string,
        invoiceNumber: formData.get("invoiceNumber") as string,
        fileName: selectedFile ? selectedFile.name : null,
      });

      setStatus("success");
      form.reset();
      setSelectedFile(null);
      setFilePreviewUrl(null);
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "An error occurred during submission. Please try again.");
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedRef(true);
    setTimeout(() => setCopiedRef(false), 2000);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  if (status === "success" && successData) {
    return (
      <div className="bg-white border border-border rounded-xl p-8 lg:p-12 shadow-xl animate-in fade-in duration-300">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
            <CheckCircle2 className="w-12 h-12" />
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-primary-text mb-3 tracking-tight">
            Warranty Claim Submitted Successfully!
          </h2>
          <p className="text-secondary-text text-base leading-relaxed">
            Thank you for registering your warranty claim with MGA Electronics. Your claim details and invoice copy have been safely recorded.
          </p>
        </div>

        {/* Claim Reference Badge */}
        <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8 text-center relative overflow-hidden">
          <div className="text-xs font-bold text-accent uppercase tracking-widest mb-1">Claim Reference ID</div>
          <div className="flex items-center justify-center gap-3">
            <span className="text-2xl sm:text-3xl font-black text-deep-navy tracking-wider font-mono">
              {successData.referenceId}
            </span>
            <button
              type="button"
              onClick={() => copyToClipboard(successData.referenceId)}
              className="p-2 rounded-lg bg-white border border-border hover:bg-slate-50 transition-colors text-primary-text focus:outline-none"
              title="Copy Reference ID"
            >
              {copiedRef ? <Check className="w-5 h-5 text-emerald-600" /> : <Copy className="w-5 h-5 text-secondary-text" />}
            </button>
          </div>
          <p className="text-xs text-secondary-text mt-2">Please retain this reference ID for tracking and support inquiries.</p>
        </div>

        {/* Details Summary Grid */}
        <div className="bg-secondary-bg rounded-xl p-6 border border-border mb-8 space-y-4">
          <h4 className="text-sm font-bold text-primary-text uppercase tracking-wider border-b border-border pb-3 flex items-center">
            <ShieldCheck className="w-4 h-4 text-accent mr-2" /> Summary of Registered Claim
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-secondary-text block text-xs">Customer Name:</span>
              <strong className="text-primary-text font-semibold">{successData.fullName}</strong>
            </div>
            <div>
              <span className="text-secondary-text block text-xs">Email / Phone:</span>
              <strong className="text-primary-text font-semibold">{successData.email} ({successData.phone})</strong>
            </div>
            <div>
              <span className="text-secondary-text block text-xs">Product Model:</span>
              <strong className="text-primary-text font-semibold">{successData.productName}</strong>
            </div>
            <div>
              <span className="text-secondary-text block text-xs">Serial Number:</span>
              <strong className="text-primary-text font-semibold">{successData.serialNumber}</strong>
            </div>
            <div>
              <span className="text-secondary-text block text-xs">Invoice / Bill Number:</span>
              <strong className="text-primary-text font-semibold">{successData.invoiceNumber}</strong>
            </div>
            <div>
              <span className="text-secondary-text block text-xs">Uploaded Bill Attachment:</span>
              <strong className="text-emerald-700 font-semibold flex items-center">
                <FileCheck className="w-4 h-4 mr-1 text-emerald-600" />
                {successData.fileName || "Uploaded successfully"}
              </strong>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8 text-xs text-blue-900 leading-relaxed flex items-start">
          <AlertCircle className="w-5 h-5 text-accent mr-3 shrink-0 mt-0.5" />
          <div>
            <strong>Next Steps:</strong> Our technical warranty evaluation team will inspect your details and bill receipt. You will receive an email update within 24 to 48 business hours regarding service or component replacement dispatch.
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="bg-accent text-white px-8 py-3.5 rounded-lg font-bold hover:bg-accent-dark transition-colors shadow-md text-sm cursor-pointer"
          >
            Register Another Warranty / Submit Claim
          </button>
          <a
            href="tel:+917499394690"
            className="bg-white border border-border text-primary-text px-6 py-3.5 rounded-lg font-semibold hover:bg-secondary-bg transition-colors text-center text-sm"
          >
            Contact Warranty Desk (+91 74993 94690)
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-border rounded-xl p-6 sm:p-8 lg:p-10 shadow-lg space-y-8">
      {status === "error" && (
        <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-lg flex items-start animate-in fade-in">
          <AlertCircle className="w-5 h-5 mr-3 shrink-0 mt-0.5 text-red-600" />
          <div className="text-sm font-medium">{errorMessage}</div>
        </div>
      )}

      {/* SECTION 1: CUSTOMER DETAILS */}
      <div className="space-y-6">
        <div className="border-b border-border pb-3 flex items-center justify-between">
          <h3 className="text-lg font-bold text-primary-text flex items-center tracking-tight">
            <User className="w-5 h-5 text-accent mr-2" /> 1. Customer & Contact Information
          </h3>
          <span className="text-xs font-semibold text-accent bg-accent/10 px-2.5 py-1 rounded-full">Required</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="fullName" className="text-sm font-semibold text-primary-text flex items-center">
              Full Name <span className="text-accent ml-1">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                className="w-full pl-10 pr-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors text-sm"
                placeholder="e.g. Rajesh Kumar"
              />
              <User className="w-4 h-4 text-secondary-text absolute left-3.5 top-3.5" />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-semibold text-primary-text flex items-center">
              Email Address <span className="text-accent ml-1">*</span>
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full pl-10 pr-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors text-sm"
                placeholder="e.g. rajesh@example.com"
              />
              <Mail className="w-4 h-4 text-secondary-text absolute left-3.5 top-3.5" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-semibold text-primary-text flex items-center">
              Phone / Mobile Number <span className="text-accent ml-1">*</span>
            </label>
            <div className="relative">
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full pl-10 pr-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors text-sm"
                placeholder="e.g. +91 98765 43210"
              />
              <Phone className="w-4 h-4 text-secondary-text absolute left-3.5 top-3.5" />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="address" className="text-sm font-semibold text-primary-text flex items-center">
              Service / Delivery Address <span className="text-accent ml-1">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                id="address"
                name="address"
                required
                className="w-full pl-10 pr-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors text-sm"
                placeholder="Street address, City, Pincode, State"
              />
              <MapPin className="w-4 h-4 text-secondary-text absolute left-3.5 top-3.5" />
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: PRODUCT & PURCHASE DETAILS */}
      <div className="space-y-6 pt-4">
        <div className="border-b border-border pb-3 flex items-center justify-between">
          <h3 className="text-lg font-bold text-primary-text flex items-center tracking-tight">
            <Tag className="w-5 h-5 text-accent mr-2" /> 2. Product & Purchase Specifications
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="productName" className="text-sm font-semibold text-primary-text flex items-center">
              Product Category / Model <span className="text-accent ml-1">*</span>
            </label>
            <select
              id="productName"
              name="productName"
              required
              className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors text-sm appearance-none cursor-pointer"
            >
              <option value="">Select MGA product category...</option>
              <option value="Automotive Battery Charger">Automotive Battery Charger (12V/24V)</option>
              <option value="Automatic SMPS Battery Charger">Automatic SMPS Battery Charger</option>
              <option value="Industrial Heavy Duty Charger">Industrial Heavy Duty Charger (24V/48V/110V)</option>
              <option value="EV Battery Charger">EV Battery Charger (E-Rickshaw/2W/4W)</option>
              <option value="Battery Load Tester">Digital Battery Load Tester</option>
              <option value="Big Boss Titanium Booster">BIG BOSS Titanium Booster</option>
              <option value="Prince Series Battery Charger">Prince Series Battery Charger</option>
              <option value="Custom OEM Power Supply">Custom OEM Power Supply Unit</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="serialNumber" className="text-sm font-semibold text-primary-text flex items-center">
              Product Serial Number / Batch Code <span className="text-accent ml-1">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                id="serialNumber"
                name="serialNumber"
                required
                className="w-full pl-10 pr-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors text-sm font-mono"
                placeholder="e.g. MGA-2025-88492"
              />
              <Hash className="w-4 h-4 text-secondary-text absolute left-3.5 top-3.5" />
            </div>
            <p className="text-[11px] text-secondary-text">Found on the rear sticker or rating plate of your charger unit.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label htmlFor="purchaseDate" className="text-sm font-semibold text-primary-text flex items-center">
              Purchase Date <span className="text-accent ml-1">*</span>
            </label>
            <div className="relative">
              <input
                type="date"
                id="purchaseDate"
                name="purchaseDate"
                required
                max={new Date().toISOString().split("T")[0]}
                className="w-full pl-10 pr-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors text-sm cursor-pointer"
              />
              <Calendar className="w-4 h-4 text-secondary-text absolute left-3.5 top-3.5" />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="invoiceNumber" className="text-sm font-semibold text-primary-text flex items-center">
              Invoice / Bill Number <span className="text-accent ml-1">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                id="invoiceNumber"
                name="invoiceNumber"
                required
                className="w-full pl-10 pr-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors text-sm"
                placeholder="e.g. INV-98421"
              />
              <FileText className="w-4 h-4 text-secondary-text absolute left-3.5 top-3.5" />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="dealerName" className="text-sm font-semibold text-primary-text flex items-center">
              Dealer / Store Name
            </label>
            <div className="relative">
              <input
                type="text"
                id="dealerName"
                name="dealerName"
                className="w-full pl-10 pr-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors text-sm"
                placeholder="e.g. MGA Authorized Dealer / Direct"
              />
              <Store className="w-4 h-4 text-secondary-text absolute left-3.5 top-3.5" />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="issueDescription" className="text-sm font-semibold text-primary-text flex items-center">
            Issue Description / Reason for Claim <span className="text-accent ml-1">*</span>
          </label>
          <textarea
            id="issueDescription"
            name="issueDescription"
            required
            rows={3}
            className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors text-sm resize-y"
            placeholder="Please detail the issue you are experiencing (e.g. No power output, LED indicator blinking, fuse trip, charging cutoff error)..."
          ></textarea>
        </div>
      </div>

      {/* SECTION 3: WARRANTY BILL ATTACHMENT */}
      <div className="space-y-6 pt-4">
        <div className="border-b border-border pb-3 flex items-center justify-between">
          <h3 className="text-lg font-bold text-primary-text flex items-center tracking-tight">
            <FileCheck className="w-5 h-5 text-accent mr-2" /> 3. Upload Warranty Bill / Purchase Receipt
          </h3>
          <span className="text-xs font-semibold text-accent bg-accent/10 px-2.5 py-1 rounded-full">Required</span>
        </div>

        {!selectedFile ? (
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all duration-200 ${
              isDragging
                ? "border-accent bg-accent/5 scale-[1.01]"
                : "border-border hover:border-accent/60 hover:bg-slate-50/50"
            }`}
          >
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              accept="image/jpeg,image/png,image/webp,image/jpg,application/pdf"
              onChange={(e) => {
                if (e.target.files && e.target.files.length > 0) {
                  handleFileChange(e.target.files[0]);
                }
              }}
            />
            <div className="w-14 h-14 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <Upload className="w-7 h-7" />
            </div>
            <h4 className="text-base font-bold text-primary-text mb-1">
              Click to upload or drag & drop your Warranty Bill
            </h4>
            <p className="text-xs text-secondary-text max-w-sm mx-auto mb-3">
              Upload clear copy of purchase tax invoice, cash receipt, or warranty card.
            </p>
            <div className="inline-flex items-center gap-3 text-[11px] font-medium text-secondary-text bg-secondary-bg px-3 py-1.5 rounded-md border border-border">
              <span className="flex items-center"><ImageIcon className="w-3.5 h-3.5 mr-1 text-accent" /> JPG, PNG, WEBP</span>
              <span className="text-border">|</span>
              <span className="flex items-center"><FileText className="w-3.5 h-3.5 mr-1 text-accent" /> PDF</span>
              <span className="text-border">|</span>
              <span>Max 10 MB</span>
            </div>
          </div>
        ) : (
          <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-5 flex items-center justify-between animate-in fade-in">
            <div className="flex items-center gap-4 min-w-0">
              {filePreviewUrl ? (
                <div className="relative w-16 h-16 rounded-lg overflow-hidden border border-emerald-300 shrink-0 bg-white">
                  {/* eslint-disable-next-html-element-suppression */}
                  <img
                    src={filePreviewUrl}
                    alt="Bill Preview"
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-lg flex items-center justify-center shrink-0">
                  <FileText className="w-8 h-8" />
                </div>
              )}

              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider flex items-center">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-1" /> Bill Attached
                  </span>
                </div>
                <h5 className="text-sm font-bold text-primary-text truncate max-w-xs sm:max-w-md">
                  {selectedFile.name}
                </h5>
                <p className="text-xs text-secondary-text">
                  {formatFileSize(selectedFile.size)} • {selectedFile.type.includes("pdf") ? "PDF Document" : "Image File"}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={removeFile}
              className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors ml-4 shrink-0"
              title="Remove file"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>

      <div className="pt-4 border-t border-border">
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-accent text-white py-4 rounded-lg font-bold hover:bg-accent-dark transition-all duration-200 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed shadow-md text-base sm:text-lg cursor-pointer"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="w-5 h-5 mr-3 animate-spin" />
              Submitting Warranty Claim...
            </>
          ) : (
            <>
              <ShieldCheck className="w-6 h-6 mr-2" />
              Submit Warranty Claim & Upload Bill
            </>
          )}
        </button>
        <p className="text-xs text-secondary-text text-center mt-3">
          By submitting this form, you confirm that the purchase bill uploaded is authentic and matches the product serial number provided.
        </p>
      </div>
    </form>
  );
}
