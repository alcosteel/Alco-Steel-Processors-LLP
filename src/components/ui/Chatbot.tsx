"use client";

import React, { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send, User, Bot, ArrowRight, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface Message {
  role: "user" | "bot";
  content: string;
  timestamp: Date;
  isAction?: boolean;
  actionLabel?: string;
  actionLink?: string;
}

const KNOWLEDGE_BASE = {
  company: {
    name: "Alco Steel Processor LLP",
    address: "PLOT NO A-57, Taloja MIDC, Navi Mumbai, Raigad, Maharashtra, 410208",
    phone: "+91 70394 20963",
    email: "marketingalcosteel@gmail.com",
    hours: "Mon-Fri: 9 AM - 6 PM, Sat: 10 AM - 2 PM",
  },
  products: [
    {
      name: "PPGI (Pre-Painted Galvanized Iron)",
      specs: "Thickness: 0.12mm - 1.21mm, Width: 900mm - 1250mm, Coating: 60 - 275 GSM",
      desc: "High-quality galvanized steel coated with advanced paint technology.",
    },
    {
      name: "PPGL (Pre-Painted Galvalume Steel)",
      specs: "Thickness: 0.12mm - 1.00mm, Width: 914mm - 1220mm, AZ Coating: AZ70 - AZ150",
      desc: "Advanced corrosion resistance with superior heat reflectivity.",
    },
    {
      name: "Color Coated Steel",
      specs: "Available in RAL Colors, Custom Length Sheets, Anti-Fading Technology",
      desc: "Versatile industrial solutions for architectural applications.",
    },
  ],
};

const SIMULATED_RESPONSES: { [key: string]: string } = {
  greeting: "Hello! Welcome to Alco Steel Processor LLP. How can I help you today with your steel requirements?",
  address: `Our facility is located at: ${KNOWLEDGE_BASE.company.address}`,
  contact: `You can reach us at ${KNOWLEDGE_BASE.company.phone} or email us at ${KNOWLEDGE_BASE.company.email}.`,
  products: "We specialize in PPGI, PPGL, and Color Coated Steel Coils and Sheets. Which one are you interested in?",
  ppgi: `Our PPGI (Pre-Painted Galvanized Iron) specs: ${KNOWLEDGE_BASE.products[0].specs}. It's known for durability and aesthetic appeal.`,
  ppgl: `Our PPGL (Pre-Painted Galvalume) specs: ${KNOWLEDGE_BASE.products[1].specs}. It offers superior corrosion resistance.`,
  color: `Our Color Coated steel is available in various RAL colors with anti-fading technology.`,
  thickness: "We process steel with thickness ranging from 0.12mm up to 1.21mm depending on the product type.",
  quality: "We are ISO 9001:2015 certified. Our products undergo rigorous testing including Salt Spray (ASTM B117), T-Bend (ASTM D4145), and Coating Thickness tests.",
  certifications: "Alco Steel products are ISO 9001:2015 certified, ISI Marked, and CE Certified, ensuring the highest industrial standards.",
  default: "I'm not sure I understand that exactly. Could you please clarify? You can also ask about our products, quality standards, or location.",
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      content: SIMULATED_RESPONSES.greeting,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [repeatCount, setRepeatCount] = useState(0);
  const [lastQuestion, setLastQuestion] = useState("");
  
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);

    // Logic for tracking repeat questions
    if (input.toLowerCase().trim() === lastQuestion.toLowerCase().trim()) {
      setRepeatCount(prev => prev + 1);
    } else {
      setRepeatCount(1);
      setLastQuestion(input);
    }

    const userInput = input.toLowerCase();
    setInput("");

    // Simulate Bot Response delay
    setTimeout(() => {
      let botContent = SIMULATED_RESPONSES.default;

      if (userInput.includes("hello") || userInput.includes("hi")) botContent = SIMULATED_RESPONSES.greeting;
      else if (userInput.includes("address") || userInput.includes("location") || userInput.includes("where")) botContent = SIMULATED_RESPONSES.address;
      else if (userInput.includes("contact") || userInput.includes("phone") || userInput.includes("email")) botContent = SIMULATED_RESPONSES.contact;
      else if (userInput.includes("product") || userInput.includes("what do you sell")) botContent = SIMULATED_RESPONSES.products;
      else if (userInput.includes("ppgi")) botContent = SIMULATED_RESPONSES.ppgi;
      else if (userInput.includes("ppgl")) botContent = SIMULATED_RESPONSES.ppgl;
      else if (userInput.includes("color") || userInput.includes("sheet")) botContent = SIMULATED_RESPONSES.color;
      else if (userInput.includes("thickness") || userInput.includes("size") || userInput.includes("width")) botContent = SIMULATED_RESPONSES.thickness;
      else if (userInput.includes("quality") || userInput.includes("test") || userInput.includes("iso")) botContent = SIMULATED_RESPONSES.quality;
      else if (userInput.includes("cert") || userInput.includes("isi") || userInput.includes("ce")) botContent = SIMULATED_RESPONSES.certifications;

      const botMessage: Message = {
        role: "bot",
        content: botContent,
        timestamp: new Date(),
      };

      const finalMessages = [...newMessages, botMessage];

      // Check for 3rd repeat
      if (repeatCount >= 2) { // Already 2, this is the 3rd time
        finalMessages.push({
          role: "bot",
          content: "It seems you have a specific inquiry. Would you like to fill out our official quotation form or contact us directly for a faster response?",
          timestamp: new Date(),
          isAction: true,
          actionLabel: "Get a Quote",
          actionLink: "/inquiry",
        });
        setRepeatCount(0); // Reset after action
      }

      setMessages(finalMessages);
    }, 600);
  };

  return (
    <div className="fixed bottom-24 right-8 z-[60] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-4 w-[350px] md:w-[400px] h-[500px] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-slate-200"
          >
            {/* Header */}
            <div className="bg-industrial-navy p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Alco Steel Assistant</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-[10px] text-white/60 uppercase tracking-widest font-bold">Online</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50"
            >
              {messages.map((msg, idx) => (
                <div 
                  key={idx}
                  className={cn(
                    "flex flex-col max-w-[85%]",
                    msg.role === "user" ? "ml-auto items-end" : "mr-auto items-start"
                  )}
                >
                  <div className={cn(
                    "p-3 rounded-2xl text-sm leading-relaxed shadow-sm",
                    msg.role === "user" 
                      ? "bg-accent text-white rounded-tr-none" 
                      : "bg-white text-industrial-navy border border-slate-100 rounded-tl-none"
                  )}>
                    {msg.content}
                  </div>
                  {msg.isAction && (
                    <Link
                      href={msg.actionLink || "#"}
                      className="mt-3 flex items-center gap-2 px-4 py-2 bg-industrial-navy text-white text-xs font-bold rounded-full hover:bg-industrial-blue transition-all shadow-md group"
                    >
                      {msg.actionLabel}
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  )}
                  <span className="text-[10px] text-slate-400 mt-1 px-1">
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              ))}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-slate-100">
              <div className="relative flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Ask about products, specs, or contact info..."
                  className="w-full pl-4 pr-12 py-3 bg-slate-100 border-none rounded-full text-sm focus:ring-2 focus:ring-accent transition-all outline-none"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="absolute right-1.5 p-2 bg-industrial-navy text-white rounded-full hover:bg-industrial-blue disabled:opacity-50 transition-all"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <p className="text-[10px] text-center text-slate-400 mt-3">
                Powered by Alco Steel Digital Assistant
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 relative",
          isOpen ? "bg-white text-industrial-navy" : "bg-industrial-navy text-white"
        )}
      >
        {isOpen ? <X className="w-8 h-8" /> : <MessageCircle className="w-8 h-8" />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white">
            1
          </span>
        )}
      </motion.button>
    </div>
  );
}
