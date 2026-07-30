import React from "react";
import { Link } from "wouter";
import { industries } from "@/lib/data";
import { SEOHead } from "@/components/SEOHead";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactCTA } from "@/components/home/ContactCTA";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function IndustriesPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full pt-24"
    >
      <SEOHead 
        title="Industries We Serve" 
        description="Specialized AI solutions for Real Estate, Healthcare, Solar, Home Services, and 10+ other industries."
      />
      
      {/* Hero */}
      <section className="py-20 md:py-32 bg-background border-b border-border">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold font-serif tracking-tight mb-6 max-w-4xl mx-auto">
            AI Engineered For <span className="text-primary">Your Vertical</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto text-balance">
            Generic AI fails because it doesn't understand your business context. We build industry-specific agents trained on sector terminology and operational workflows.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, idx) => (
              <motion.div
                key={industry.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (idx % 3) * 0.1 }}
              >
                <Link href={`/industries/${industry.slug}`}>
                  <div className="bg-background border border-border p-8 rounded-2xl h-full flex flex-col group hover:border-primary hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <div className="w-14 h-14 bg-muted rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <industry.icon size={28} />
                    </div>
                    <h2 className="text-2xl font-bold mb-3">{industry.name}</h2>
                    <p className="text-muted-foreground mb-8 flex-1">{industry.tagline}</p>
                    
                    <div className="flex items-center text-sm font-bold text-foreground group-hover:text-primary transition-colors mt-auto">
                      View Solutions <ArrowUpRight size={16} className="ml-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </motion.div>
  );
}

export default IndustriesPage;
