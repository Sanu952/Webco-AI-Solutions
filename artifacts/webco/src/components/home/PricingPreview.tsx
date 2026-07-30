import React from "react";
import { Link } from "wouter";
import { pricingTiers } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

export function PricingPreview() {
  return (
    <section className="py-24 bg-card border-y border-border">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Transparent, Value-Driven Pricing" 
          subtitle="Choose the tier that matches your growth phase. No hidden fees."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
          {pricingTiers.map((tier, idx) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`bg-background border rounded-3xl p-8 flex flex-col relative ${
                tier.popular 
                  ? 'border-primary shadow-xl shadow-primary/10' 
                  : 'border-border'
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Badge variant="default" className="px-3 py-1 text-xs uppercase tracking-widest font-bold">Most Popular</Badge>
                </div>
              )}
              
              <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
              <p className="text-sm text-muted-foreground mb-6 min-h-[40px]">{tier.description}</p>
              
              <div className="mb-8">
                <span className="text-4xl font-bold font-serif">{tier.price}</span>
                {tier.period && <span className="text-muted-foreground">{tier.period}</span>}
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {tier.features.slice(0, 6).map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Check size={16} className="text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                asChild 
                variant={tier.popular ? "default" : "outline"} 
                className="w-full mt-auto"
              >
                <Link href={tier.id === "custom" ? "/contact" : "/pricing"}>
                  {tier.cta}
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
