"use client";

import { useState, useRef, useEffect } from "react";
import { X, Send, Bot, User, ExternalLink, HelpCircle } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  whatsappLink?: boolean;
}

const faqs = [
  {
    id: "about_mga",
    question: "What is MGA Electronics?",
    keywords: ["what is mga", "mga", "mga electronics", "company", "who is mga", "about mga", "background", "history"],
    answer: "MGA Electronics is an ISO 9001:2015 certified manufacturer of heavy-duty industrial battery chargers, automotive chargers, EV power solutions, and battery load testers established in 2002 in Lucknow, India."
  },
  {
    id: "products",
    question: "What products does MGA manufacture?",
    keywords: ["product", "manufacture", "make", "types", "range", "charger", "catalog", "models", "big boss", "eco", "titanium", "active"],
    answer: "MGA Electronics manufactures Heavy-Duty Automotive Chargers (12V/24V), Industrial Automatic Battery Chargers, EV Charging Solutions (2W/3W/4W), Power Supplies, Battery Load Testers, and Inverter Battery Chargers."
  },
  {
    id: "custom_oem",
    question: "Can you build custom OEM specifications?",
    keywords: ["custom", "oem", "specification", "requirement", "voltage", "current", "tailor", "special", "design", "build"],
    answer: "Yes! We specialize in 100% custom OEM manufacturing. You can specify battery chemistry (Lead-Acid, Li-ion, Gel, Tubular), voltage (12V to 360V DC), current rating (3A to 30A+), and enclosure dimensions."
  },
  {
    id: "auto_cutoff",
    question: "Does MGA feature automatic cut-off?",
    keywords: ["auto", "automatic", "cut off", "cutoff", "overcharge", "float", "protection", "sulphation", "pulse"],
    answer: "Yes! Our chargers feature smart multi-stage charging (Bulk, Absorption, Float) with auto-cutoff, Fast Pulse desulphation technology, and reverse polarity protection."
  },
  {
    id: "warranty",
    question: "What is the warranty period?",
    keywords: ["warranty", "guarantee", "period", "years", "year", "support", "replacement"],
    answer: "All MGA Electronics products come with a 1-Year to 2-Year Comprehensive OEM Warranty backed by direct technical factory support."
  },
  {
    id: "iso_cert",
    question: "Are MGA chargers certified?",
    keywords: ["iso", "certificate", "certification", "certified", "quality", "safety", "rohs", "ce", "gst", "gstin"],
    answer: "Yes! MGA Electronics is ISO 9001:2015 certified (GSTIN: 09AFOPG9627E1Z4), and our products strictly adhere to RoHS and CE electrical safety compliance standards."
  },
  {
    id: "transformer",
    question: "What transformer material is used?",
    keywords: ["transformer", "copper", "winding", "wire", "material", "efficiency", "electrolytic"],
    answer: "We use 100% high-purity electrolytic copper winding transformers for high electrical efficiency, low heat dissipation, and long operational lifespan."
  },
  {
    id: "quote_price",
    question: "How can I get a price quote?",
    keywords: ["quote", "price", "cost", "bulk", "commercial", "order", "buy", "purchase", "inquiry", "rate"],
    answer: "You can click 'Request Instant Quote' on any product page, fill out our contact form, or chat directly with our sales engineering team on WhatsApp (+91-7499394690)."
  },
  {
    id: "delivery",
    question: "What is the delivery lead time?",
    keywords: ["delivery", "ship", "dispatch", "time", "lead time", "fast", "days", "shipping"],
    answer: "Standard catalog products are dispatched within 24–48 hours. Custom OEM batch orders are delivered within 7–14 business days across India."
  },
  {
    id: "contact_loc",
    question: "Where is MGA located & how to contact?",
    keywords: ["location", "address", "contact", "phone", "number", "email", "lucknow", "where", "call"],
    answer: "We are located in Lucknow, UP, India. You can call us at +91-7499394690 / +91-9076731251 or email mgacharger@yahoo.com."
  }
];

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "bot",
      text: "Hello! Welcome to MGA Electronics. How can I assist you today? Type your query below."
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleOpenChatbot = () => setIsOpen(true);
    window.addEventListener("open-chatbot", handleOpenChatbot);
    return () => window.removeEventListener("open-chatbot", handleOpenChatbot);
  }, []);

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isTyping, isOpen]);

  const handleSelectFAQ = (faq: typeof faqs[0]) => {
    handleSend(faq.question);
  };

  const handleSend = async (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: query,
    };

    const updatedMessages = [...messages, userMsg];
    setInput("");
    setMessages(updatedMessages);
    setIsTyping(true);

    try {
      // Call Gemini AI API Route
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: updatedMessages.map((m) => ({
            role: m.sender === "user" ? "user" : "assistant",
            content: m.text,
          })),
        }),
      });

      const data = await response.json();
      if (data.reply) {
        const botMsg: Message = {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          text: data.reply,
        };
        setMessages((prev) => [...prev, botMsg]);
      } else {
        throw new Error(data.error || "Gemini API error");
      }
    } catch {
      const fallbackMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: "For instant technical assistance, custom OEM specs, or bulk orders, please connect directly with our engineering team on WhatsApp!",
        whatsappLink: true,
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  const whatsappNumber = "917499394690";
  const getWhatsappUrl = (customText?: string) => {
    const encoded = encodeURIComponent(customText || "Hi MGA Electronics, I need information regarding your chargers.");
    return `https://wa.me/${whatsappNumber}?text=${encoded}`;
  };

  return (
    <>
      {/* Floating Toggle Button (Hidden on Mobile, Visible on Desktop) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="hidden lg:flex fixed bottom-6 right-6 z-50 bg-accent hover:bg-accent-dark text-white p-3.5 sm:p-4 rounded-full shadow-2xl hover:shadow-accent/40 transition-all duration-300 hover:scale-110 items-center justify-center cursor-pointer group"
        aria-label="Open Customer Support Chat"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <div className="relative flex items-center justify-center">
            <Bot className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 border-2 border-white rounded-full"></span>
          </div>
        )}
      </button>

      {/* Chat Modal Window */}
      {isOpen && (
        <div className="fixed bottom-[68px] lg:bottom-24 right-2 sm:right-6 z-50 w-[calc(100vw-16px)] sm:w-[400px] h-[520px] max-h-[78vh] bg-white rounded-2xl shadow-2xl border border-border/80 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-deep-navy to-accent-dark text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20 relative">
                <Bot className="w-5 h-5 text-accent-light" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-deep-navy"></span>
              </div>
              <div>
                <h3 className="font-bold text-sm leading-snug">MGA Technical Assistant</h3>
                <p className="text-[11px] text-white/75 flex items-center">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-1.5 animate-pulse"></span> Online | ISO Certified Support
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Feed */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-secondary-bg/40 text-xs sm:text-sm">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex items-start space-x-2 ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.sender === "bot" && (
                  <div className="w-7 h-7 rounded-full bg-accent text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-[82%] rounded-2xl p-3.5 ${
                    msg.sender === "user"
                      ? "bg-accent text-white rounded-tr-none shadow-xs"
                      : "bg-white text-primary-text border border-border/80 rounded-tl-none shadow-2xs"
                  }`}
                >
                  <p className="leading-relaxed whitespace-pre-wrap">{msg.text}</p>

                  {/* Fallback WhatsApp Direct Connect Button */}
                  {msg.whatsappLink && (
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <a
                        href={getWhatsappUrl(input)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold px-4 py-2.5 rounded-xl transition-all shadow-md text-xs group"
                      >
                        <BsWhatsapp className="w-4 h-4 mr-2 text-white shrink-0" />
                        <span>Chat on WhatsApp (+91-7499394690)</span>
                        <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                      </a>
                    </div>
                  )}
                </div>

                {msg.sender === "user" && (
                  <div className="w-7 h-7 rounded-full bg-secondary-text/20 text-secondary-text flex items-center justify-center shrink-0 mt-0.5">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center space-x-2 justify-start animate-fade-in">
                <div className="w-7 h-7 rounded-full bg-accent text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-white border border-border/80 rounded-2xl rounded-tl-none px-4 py-3 shadow-2xs flex items-center space-x-1.5">
                  <span className="w-2 h-2 bg-accent/60 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-accent/60 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-2 h-2 bg-accent/60 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}

            {/* Show Quick Questions ONLY on initial new chat (messages.length <= 1) */}
            {messages.length <= 1 && (
              <div className="pt-2">
                <p className="text-[11px] font-bold uppercase tracking-wider text-secondary-text mb-2 flex items-center">
                  <HelpCircle className="w-3.5 h-3.5 mr-1 text-accent" /> Quick Questions
                </p>
                <div className="flex flex-col gap-1.5">
                  {faqs.slice(0, 2).map((faq) => (
                    <button
                      key={faq.id}
                      onClick={() => handleSelectFAQ(faq)}
                      className="text-[11px] bg-white hover:bg-accent-light text-primary-text hover:text-accent border border-border/80 px-3 py-2 rounded-xl transition-all text-left font-medium shadow-2xs hover:border-accent/40 cursor-pointer flex items-center justify-between"
                    >
                      <span>{faq.question}</span>
                      <ExternalLink className="w-3 h-3 text-secondary-text opacity-60" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Footer Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-white border-t border-border/80 flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question or type query..."
              className="flex-1 text-xs sm:text-sm bg-secondary-bg px-3.5 py-2.5 rounded-xl border border-border/80 focus:outline-none focus:border-accent text-primary-text"
            />
            <button
              type="submit"
              disabled={isTyping}
              className="bg-accent hover:bg-accent-dark text-white p-2.5 rounded-xl transition-all shrink-0 cursor-pointer disabled:opacity-50"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}
    </>
  );
}
