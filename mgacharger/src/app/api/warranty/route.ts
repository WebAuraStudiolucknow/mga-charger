import { NextResponse } from "next/server";
import { submitWarrantyToCMS } from "@/lib/payloadApi";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const address = formData.get("address") as string;
    const productName = formData.get("productName") as string;
    const serialNumber = formData.get("serialNumber") as string;
    const purchaseDate = formData.get("purchaseDate") as string;
    const invoiceNumber = formData.get("invoiceNumber") as string;
    const issueDescription = formData.get("issueDescription") as string;
    const dealerName = formData.get("dealerName") as string;
    const file = formData.get("warrantyBill") as File | null;

    if (!fullName || !email || !phone || !serialNumber || !invoiceNumber) {
      return NextResponse.json(
        { error: "Please fill in all mandatory fields." },
        { status: 400 }
      );
    }

    // Generate unique reference number
    const randomNum = Math.floor(100000 + Math.random() * 900000);
    const referenceId = `MGA-WRN-${new Date().getFullYear()}-${randomNum}`;

    // Submit to Payload CMS
    await submitWarrantyToCMS({
      referenceId,
      fullName,
      email,
      phone,
      address,
      productName,
      serialNumber,
      purchaseDate,
      invoiceNumber,
      dealerName: dealerName || "",
      issueDescription: issueDescription || "",
      status: "NEW",
    });

    return NextResponse.json({
      success: true,
      message: "Warranty claim submitted successfully",
      referenceId,
      submittedAt: new Date().toISOString(),
      details: {
        fullName,
        email,
        phone,
        productName,
        serialNumber,
        purchaseDate,
        invoiceNumber,
        hasBillAttachment: !!file?.name,
        fileName: file?.name || null,
      },
    });
  } catch (error) {
    console.error("Warranty submission error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your warranty claim." },
      { status: 500 }
    );
  }
}
