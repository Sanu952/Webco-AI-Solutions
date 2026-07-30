import React from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const featuresList = [
  "24/7 AI Support capabilities",
  "Human-like Conversational Flow",
  "Automated Lead Capture",
  "Direct Calendar Appointment Booking",
  "Seamless CRM Integration",
  "WhatsApp & SMS Support",
  "Real-time Analytics Dashboard",
  "Sub-second Response Times",
  "SEO Friendly Implementation",
  "Enterprise-grade Data Security",
  "Infinitely Scalable Architecture"
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-card border-y border-border overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading 
              title="Everything You Need to Automate Growth" 
              subtitle="A complete suite of tools designed to convert traffic into revenue while reducing administrative overhead."
              alignment="left"
            />
            
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
              {featuresList.map((feature, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="font-medium text-muted-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Stylized Chat UI Mockup */}
            <div className="bg-background border border-border rounded-3xl shadow-2xl overflow-hidden max-w-md mx-auto aspect-[9/16] md:aspect-[4/5] flex flex-col relative z-10">
              {/* Header */}
              <div className="bg-card border-b border-border p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">W</div>
                <div>
                  <div className="font-semibold text-sm">Webco AI Assistant</div>
                  <div className="text-xs text-primary flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span> Always Active
                  </div>
                </div>
              </div>
              
              {/* Body */}
              <div className="flex-1 p-4 flex flex-col gap-4 overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 to-transparent">
                <div className="self-start max-w-[85%] bg-card border border-border p-3 rounded-2xl rounded-tl-sm text-sm shadow-sm">
                  Hi there! 👋 I'm the Webco AI assistant. How can I help you grow your business today?
                </div>
                
                <div className="self-end max-w-[85%] bg-primary text-primary-foreground p-3 rounded-2xl rounded-tr-sm text-sm shadow-sm">
                  I'm losing leads because my team can't answer calls after 6 PM. Can you help?
                </div>
                
                <div className="self-start max-w-[85%] bg-card border border-border p-3 rounded-2xl rounded-tl-sm text-sm shadow-sm">
                  Absolutely. We can deploy a lead generation chatbot that operates 24/7. It will capture contact info, qualify the lead, and even book an appointment directly on your team's calendar for the next morning.
                </div>
                
                <div className="self-start max-w-[85%] bg-card border border-border p-3 rounded-2xl rounded-tl-sm text-sm shadow-sm">
                  Would you like to see a live demo of how this works?
                </div>
                
                {/* Options */}
                <div className="self-start flex flex-wrap gap-2 mt-2">
                  <span className="border border-primary text-primary text-xs px-3 py-1.5 rounded-full bg-primary/5 cursor-pointer">Yes, show me</span>
                  <span className="border border-border text-muted-foreground text-xs px-3 py-1.5 rounded-full bg-card cursor-pointer">See Pricing</span>
                </div>
              </div>
              
              {/* Input area */}
              <div className="p-4 border-t border-border bg-card">
                <div className="bg-background border border-border rounded-full px-4 py-2 text-sm text-muted-foreground flex justify-between items-center">
                  <span>Type your message...</span>
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements behind mockup */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 blur-[100px] rounded-full -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
