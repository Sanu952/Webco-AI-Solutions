import React from "react";
import { SEOHead } from "@/components/SEOHead";
import { services } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ContactCTA } from "@/components/home/ContactCTA";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export function ServicesPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full pt-24"
    >
      <SEOHead 
        title="AI Services & Solutions" 
        description="Comprehensive AI automation services including chatbot development, workflow automation, and custom web development."
      />
      
      {/* Hero */}
      <section className="py-20 md:py-32 bg-background relative overflow-hidden border-b border-border">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <Badge className="mb-6">Our Capabilities</Badge>
          <h1 className="text-5xl md:text-7xl font-bold font-serif tracking-tight mb-6 max-w-4xl mx-auto">
            Intelligent Solutions For <span className="text-primary">Modern Business</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto text-balance">
            We don't just sell software; we deploy intelligent systems that take over the repetitive, high-volume tasks that slow your business down.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-24">
            {services.map((service, idx) => (
              <div 
                key={service.id} 
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={idx % 2 !== 0 ? 'lg:order-2' : ''}>
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                    <service.icon size={32} />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">{service.name}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    {service.description}
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <h4 className="font-semibold text-foreground">Key Benefits:</h4>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 size={20} className="text-primary shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button asChild>
                    <Link href={`/contact?service=${service.id}`}>
                      Discuss This Service <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </Button>
                </div>
                
                <div className={`relative ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-[4/3] rounded-3xl bg-background border border-border shadow-2xl p-8 relative overflow-hidden flex flex-col justify-center">
                    {/* Decorative UI element based on service */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -z-10"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] -z-10"></div>
                    
                    <div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-4">
                      <div className="h-4 w-1/3 bg-muted rounded mb-4"></div>
                      <div className="space-y-2">
                        <div className="h-2 w-full bg-muted/50 rounded"></div>
                        <div className="h-2 w-5/6 bg-muted/50 rounded"></div>
                        <div className="h-2 w-4/6 bg-muted/50 rounded"></div>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="bg-primary border border-primary text-primary-foreground rounded-xl p-4 shadow-sm flex-1">
                        <div className="h-2 w-2/3 bg-white/30 rounded mb-2"></div>
                        <div className="h-2 w-1/2 bg-white/30 rounded"></div>
                      </div>
                      <div className="bg-card border border-border rounded-xl p-4 shadow-sm flex-1">
                        <div className="h-2 w-2/3 bg-muted rounded mb-2"></div>
                        <div className="h-2 w-1/2 bg-muted rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </motion.div>
  );
}

export default ServicesPage;
