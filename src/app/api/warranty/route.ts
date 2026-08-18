import { NextResponse } from "next/server";

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
    const file = formData.get("warrantyBill") as File | null;

    if (!fullName || !email || !phone || !serialNumber || !invoiceNumber) {
      return NextResponse.json(
        { error: "Please fill in all mandatory fields." },
        { status: 400 }
      );
    }

    let fileName = null;
    let fileSize = null;
    let fileType = null;

    if (file && file.size > 0) {
      fileName = file.name;
      fileSize = file.size;
      fileType = file.type;

      // Validate file size limit (10MB)
      if (file.size > 10 * 1024 * 1024) {
        return NextResponse.json(
          { error: "File size exceeds the 10MB limit." },
          { status: 400 }
        );
      }
    }

    // Generate unique reference number
    const randomNum = Math.floor(100000 + Math.random() * 900000);
    const referenceId = `MGA-WRN-${new Date().getFullYear()}-${randomNum}`;

    // Return success response
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
        hasBillAttachment: !!fileName,
        fileName,
      },
    });
  } catch (error) {
    console.error("Warranty submission error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your request." },
      { status: 500 }
    );
  }
}
