import { NextResponse } from "next";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const userPrompt = body.message || (Array.isArray(body.messages) ? body.messages[body.messages.length - 1]?.content : "");

    if (!userPrompt) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey || apiKey === "your_gemini_api_key_here") {
      return NextResponse.json(
        {
          reply: "I am MGA Electronics Technical Assistant. For custom specifications, OEM bulk pricing, or technical inquiries, please connect with our team on WhatsApp at +91-7499394690 or email enquiry@mgacharger.com.",
        },
        { status: 200 }
      );
    }

    const systemInstruction = `You are MGA Assistant, the official AI technical sales & engineering expert for MGA Electronics (Est. 2002, GSTIN: 09AFOPG9627E1Z4, India).
MGA manufactures heavy-duty industrial battery chargers, 12V/24V automotive chargers, BIG BOSS Titanium series, EV chargers, battery load testers, and custom OEM power supplies.
Always provide helpful, concise, polite, and professional answers (2-4 sentences max).
For custom quotes or exact pricing, guide users to contact our sales team on WhatsApp (+91-7499394690) or email enquiry@mgacharger.com.`;

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
              parts: [{ text: `${systemInstruction}\n\nUser Question: ${userPrompt}` }],
            },
          ],
        }),
      }
    );

    if (!response.ok) {
      const errText = await response.text();
      console.error("Gemini API Error:", errText);
      return NextResponse.json({
        reply: "Thank you for asking! For detailed technical specifications or custom OEM orders, please reach our technical sales team directly on WhatsApp (+91-7499394690).",
      });
    }

    const data = await response.json();
    const candidateText = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (candidateText) {
      return NextResponse.json({ reply: candidateText.trim() });
    }

    return NextResponse.json({
      reply: "Thank you for reaching out! For custom product inquiries, please contact our team on WhatsApp +91-7499394690.",
    });
  } catch (error) {
    console.error("Chat API Exception:", error);
    return NextResponse.json({
      reply: "For direct assistance with MGA chargers, please connect with us on WhatsApp +91-7499394690.",
    });
  }
}
