import React from "react";
import { Link } from "wouter";
import { portfolioProjects } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function PortfolioPreview() {
  return (
    <section className="py-24 bg-card border-y border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeading 
            title="Real Results for Real Businesses" 
            subtitle="See how our AI solutions are transforming operations across different industries."
            alignment="left"
            className="mb-0 max-w-2xl"
          />
          <Button asChild variant="outline">
            <Link href="/portfolio">View All Case Studies</Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioProjects.slice(0, 3).map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-background border border-border rounded-2xl overflow-hidden group hover:border-primary/30 transition-colors"
            >
              <div className="p-8 border-b border-border bg-muted/30">
                <div className="flex justify-between items-start mb-6">
                  <Badge variant="outline" className="bg-background">{project.industry}</Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20">{project.category}</Badge>
                </div>
                <div className="text-4xl font-serif font-bold text-primary mb-1">{project.metric}</div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{project.metricLabel}</div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{project.name}</h3>
                <p className="text-muted-foreground mb-6 line-clamp-3">
                  {project.description}
                </p>
                <div className="inline-flex items-center text-sm font-bold text-foreground">
                  Read Case Study <ArrowRight size={14} className="ml-2 text-primary" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
