import React from "react";
import { Link } from "wouter";
import { industries } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function IndustriesGrid() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-l-full blur-3xl -z-10 mix-blend-multiply dark:mix-blend-screen opacity-50"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Built For Your Industry" 
          subtitle="We engineer specialized AI solutions that understand the specific terminology, workflows, and pain points of your sector."
        />
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-16">
          {industries.map((industry, idx) => (
            <motion.div
              key={industry.slug}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (idx % 5) * 0.05 }}
            >
              <Link href={`/industries/${industry.slug}`}>
                <div className="bg-card border border-border p-6 rounded-2xl flex flex-col items-center justify-center text-center h-full group hover:border-primary hover:bg-primary/5 transition-all duration-300 cursor-pointer">
                  <industry.icon className="w-10 h-10 mb-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  <h3 className="font-semibold text-sm md:text-base group-hover:text-primary transition-colors duration-300">{industry.name}</h3>
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="inline-flex items-center text-xs font-medium text-primary">
                      View Solutions <ArrowUpRight size={12} className="ml-1" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
