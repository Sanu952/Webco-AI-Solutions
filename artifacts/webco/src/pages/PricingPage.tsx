import React, { useState } from "react";
import { SEOHead } from "@/components/SEOHead";
import { pricingTiers, faqs } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ContactCTA } from "@/components/home/ContactCTA";
import { Check, X } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full pt-24"
    >
      <SEOHead 
        title="Pricing Plans" 
        description="Transparent pricing for enterprise-grade AI chatbot solutions. Choose the plan that fits your growth stage."
      />
      
      {/* Hero */}
      <section className="py-20 bg-background text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-5xl md:text-6xl font-bold font-serif tracking-tight mb-6">
            Simple, Transparent <span className="text-primary">Pricing</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12">
            No hidden fees. No surprise overages. Just powerful automation that delivers ROI from day one.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mb-16">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>Monthly</span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-14 h-7 rounded-full bg-primary/20 relative p-1 cursor-pointer transition-colors"
            >
              <div className={`w-5 h-5 rounded-full bg-primary absolute top-1 transition-all ${isAnnual ? 'left-8' : 'left-1'}`}></div>
            </button>
            <span className={`text-sm font-medium flex items-center gap-2 ${isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
              Annually <Badge variant="glow" className="bg-green-500/10 text-green-600 border-green-500/20">Save 20%</Badge>
            </span>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left max-w-7xl mx-auto">
            {pricingTiers.map((tier, idx) => {
              const numericPrice = tier.price !== "Custom" ? parseInt(tier.price.replace('$', '').replace(',', '')) : 0;
              const displayPrice = tier.price === "Custom" 
                ? "Custom" 
                : isAnnual 
                  ? `$${Math.round(numericPrice * 0.8)}` 
                  : tier.price;

              return (
                <motion.div
                  key={tier.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`bg-card border rounded-3xl p-8 flex flex-col relative ${
                    tier.popular 
                      ? 'border-primary shadow-2xl shadow-primary/10 z-10 scale-105' 
                      : 'border-border'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className="px-3 py-1 uppercase tracking-widest font-bold">Most Popular</Badge>
                    </div>
                  )}
                  
                  <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                  <p className="text-sm text-muted-foreground mb-6 min-h-[40px]">{tier.description}</p>
                  
                  <div className="mb-8 border-b border-border pb-8">
                    <span className="text-4xl lg:text-5xl font-bold font-serif">{displayPrice}</span>
                    {tier.period && <span className="text-muted-foreground">{tier.period}</span>}
                    {isAnnual && tier.price !== "Custom" && (
                      <div className="text-sm text-green-600 font-medium mt-2">Billed annually</div>
                    )}
                  </div>
                  
                  <ul className="space-y-4 mb-8 flex-1">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <Check size={16} className="text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    asChild 
                    size="lg"
                    variant={tier.popular ? "default" : "outline"} 
                    className="w-full mt-auto"
                  >
                    <Link href={tier.id === "custom" ? "/contact" : `/contact?plan=${tier.id}`}>
                      {tier.cta}
                    </Link>
                  </Button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-card border-t border-border hidden md:block">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <SectionHeading title="Compare Features" />
          
          <div className="mt-12 bg-background border border-border rounded-2xl overflow-hidden">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="p-6 font-semibold w-1/3">Feature</th>
                  <th className="p-6 font-semibold text-center">Starter</th>
                  <th className="p-6 font-semibold text-center text-primary">Professional</th>
                  <th className="p-6 font-semibold text-center">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="p-6 text-foreground">Monthly Conversations</td>
                  <td className="p-6 text-center text-muted-foreground">500</td>
                  <td className="p-6 text-center text-muted-foreground">Unlimited</td>
                  <td className="p-6 text-center text-muted-foreground">Unlimited</td>
                </tr>
                <tr>
                  <td className="p-6 text-foreground">AI Model</td>
                  <td className="p-6 text-center text-muted-foreground">GPT-3.5 Turbo</td>
                  <td className="p-6 text-center text-muted-foreground">GPT-4 Omni</td>
                  <td className="p-6 text-center text-muted-foreground">Custom fine-tuned</td>
                </tr>
                <tr>
                  <td className="p-6 text-foreground">Website Integration</td>
                  <td className="p-6 text-center"><Check className="mx-auto text-primary" size={20} /></td>
                  <td className="p-6 text-center"><Check className="mx-auto text-primary" size={20} /></td>
                  <td className="p-6 text-center"><Check className="mx-auto text-primary" size={20} /></td>
                </tr>
                <tr>
                  <td className="p-6 text-foreground">WhatsApp Integration</td>
                  <td className="p-6 text-center"><X className="mx-auto text-muted-foreground" size={20} /></td>
                  <td className="p-6 text-center"><Check className="mx-auto text-primary" size={20} /></td>
                  <td className="p-6 text-center"><Check className="mx-auto text-primary" size={20} /></td>
                </tr>
                <tr>
                  <td className="p-6 text-foreground">CRM Integrations</td>
                  <td className="p-6 text-center text-muted-foreground">1 Included</td>
                  <td className="p-6 text-center text-muted-foreground">Unlimited</td>
                  <td className="p-6 text-center text-muted-foreground">Custom Built</td>
                </tr>
                <tr>
                  <td className="p-6 text-foreground">Support Level</td>
                  <td className="p-6 text-center text-muted-foreground">Email (48h)</td>
                  <td className="p-6 text-center text-muted-foreground">Priority (12h)</td>
                  <td className="p-6 text-center text-muted-foreground">Dedicated Manager (1h)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <SectionHeading title="Pricing FAQs" />
          <Accordion type="single" collapsible className="w-full mt-12">
            {faqs.slice(1, 5).map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border">
                <AccordionTrigger className="text-left text-lg font-medium hover:text-primary">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <ContactCTA />
    </motion.div>
  );
}

export default PricingPage;
