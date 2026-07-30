import React from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { PhoneCall, Code2, Beaker, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: PhoneCall,
    title: "1. Discovery Call",
    description: "We analyze your current operations, identify bottlenecks, and define exactly where AI can generate the highest ROI."
  },
  {
    icon: Code2,
    title: "2. Custom Build",
    description: "Our engineers build your AI agent, training it securely on your specific business data, FAQs, and brand voice guidelines."
  },
  {
    icon: Beaker,
    title: "3. Rigorous Testing",
    description: "We run comprehensive edge-case scenarios to ensure the bot handles complex queries gracefully and escalates appropriately."
  },
  {
    icon: Rocket,
    title: "4. Launch & Optimize",
    description: "We deploy the agent across your chosen channels and continually optimize its responses based on real-world interactions."
  }
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="From Idea to Automation in 14 Days" 
          subtitle="Our streamlined deployment process ensures minimal disruption to your operations while maximizing speed to value."
        />
        
        <div className="mt-20 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-border z-0">
            <div className="absolute top-0 left-0 h-full bg-primary w-full origin-left opacity-30"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 bg-card border-2 border-border rounded-full flex items-center justify-center mb-6 group-hover:border-primary group-hover:bg-primary/5 transition-colors duration-300 shadow-sm relative z-10">
                  <step.icon size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
