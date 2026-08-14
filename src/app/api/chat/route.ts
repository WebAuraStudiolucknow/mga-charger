import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey || apiKey === "your_gemini_api_key_here") {
      return NextResponse.json(
        { 
          answer: null, 
          error: "API_KEY_NOT_CONFIGURED" 
        }, 
        { status: 200 }
      );
    }

    const systemInstruction = `You are MGA Assistant, the official AI technical sales agent for MGA Electronics (Established 2002, GSTIN: 09AFOPG9627E1Z4, Lucknow, India).
MGA manufactures heavy-duty industrial battery chargers, 12V/24V automotive chargers, EV chargers, battery load testers, and custom OEM power supplies.
Always provide helpful, concise (2-3 sentences), professional answers. 
For bulk quotes or custom specs, guide users to contact our sales team via WhatsApp (+91-7499394690) or email mgacharger@yahoo.com.`;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [
                { text: `${systemInstruction}\n\nUser Question: ${message}` }
              ]
            }
          ]
        })
      }
    );

    if (!response.ok) {
      const errText = await response.text();
      console.error("Gemini API Error:", errText);
      return NextResponse.json({ answer: null, error: "API_ERROR" }, { status: 200 });
    }

    const data = await response.json();
    const candidateText = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (candidateText) {
      return NextResponse.json({ answer: candidateText.trim() });
    }

    return NextResponse.json({ answer: null, error: "NO_RESPONSE" });
  } catch (error) {
    console.error("Chat API Exception:", error);
    return NextResponse.json({ answer: null, error: "SERVER_ERROR" }, { status: 500 });
  }
}
