import React from "react";
import { faqs } from "@/lib/data";
import { SEOHead } from "@/components/SEOHead";
import { ContactCTA } from "@/components/home/ContactCTA";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full pt-24"
    >
      <SEOHead 
        title="Frequently Asked Questions" 
        description="Get answers to common questions about Webco's AI chatbot development, deployment timelines, pricing, and integrations."
      />
      
      {/* Hero */}
      <section className="py-20 bg-background border-b border-border text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-5xl md:text-7xl font-bold font-serif tracking-tight mb-6">
            Frequently Asked <span className="text-primary">Questions</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto text-balance">
            Everything you need to know about implementing AI in your business.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="bg-background border border-border rounded-3xl p-6 md:p-12 shadow-sm">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-border">
                  <AccordionTrigger className="text-left text-lg md:text-xl font-medium hover:text-primary py-6">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base md:text-lg leading-relaxed pb-6">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <ContactCTA />
    </motion.div>
  );
}

export default FAQPage;
