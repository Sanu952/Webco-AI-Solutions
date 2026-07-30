import React, { useState } from "react";
import { Link } from "wouter";
import { portfolioProjects } from "@/lib/data";
import { SEOHead } from "@/components/SEOHead";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { ContactCTA } from "@/components/home/ContactCTA";
import { ArrowRight, Lock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Chatbots", "Websites", "Automation"];

export function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All" 
    ? portfolioProjects 
    : portfolioProjects.filter(p => p.category === activeFilter);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full pt-24"
    >
      <SEOHead 
        title="Case Studies & Portfolio" 
        description="Explore how Webco's AI chatbots and automation solutions have transformed businesses across various industries."
      />
      
      {/* Hero */}
      <section className="py-20 bg-background text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-5xl md:text-7xl font-bold font-serif tracking-tight mb-6">
            Proven <span className="text-primary">Results</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12">
            Real data from real deployments. See how our AI agents drive revenue and cut costs.
          </p>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-primary text-white shadow-md"
                    : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 pb-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={project.id}
                  className="bg-card border border-border rounded-3xl overflow-hidden group hover:border-primary/50 transition-colors flex flex-col"
                >
                  <div className="p-8 border-b border-border bg-gradient-to-br from-background to-muted/50">
                    <div className="flex justify-between items-start mb-6">
                      <Badge variant="outline" className="bg-background">{project.industry}</Badge>
                      <Badge className="bg-primary/10 text-primary">{project.category}</Badge>
                    </div>
                    <div className="text-5xl font-serif font-bold text-primary mb-2 tracking-tighter">{project.metric}</div>
                    <div className="text-sm font-bold text-muted-foreground uppercase tracking-widest">{project.metricLabel}</div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold mb-4">{project.name}</h3>
                    <p className="text-muted-foreground mb-8 leading-relaxed flex-1">
                      {project.description}
                    </p>
                    <button disabled className="mt-auto w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-muted text-muted-foreground rounded-xl font-medium cursor-not-allowed border border-border">
                      <Lock size={16} /> Full Study Coming Soon
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <ContactCTA />
    </motion.div>
  );
}

export default PortfolioPage;
