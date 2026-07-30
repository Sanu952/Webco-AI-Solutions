import React from "react";
import { Link } from "wouter";
import { faqs } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQPreview() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <SectionHeading 
              title="Frequently Asked Questions" 
              subtitle="Everything you need to know about implementing AI in your business."
              alignment="left"
            />
            <p className="text-muted-foreground mb-8 text-lg">
              Still have questions? We're here to help you navigate the AI landscape.
            </p>
            <Button asChild variant="outline" size="lg">
              <Link href="/faq">View All FAQs</Link>
            </Button>
          </div>
          
          <div className="lg:col-span-7">
            <Accordion type="single" collapsible className="w-full">
              {faqs.slice(0, 4).map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-border">
                  <AccordionTrigger className="text-left text-lg font-medium hover:text-primary transition-colors">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
