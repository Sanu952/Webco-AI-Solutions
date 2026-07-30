import React from "react";
import { Link } from "wouter";
import { services } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function ServicesOverview() {
  return (
    <section className="py-24 bg-card border-y border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeading 
            title="Comprehensive AI Solutions" 
            subtitle="From lead generation to complex workflow automation, we provide end-to-end AI services tailored to your operations."
            alignment="left"
            className="mb-0 max-w-2xl"
          />
          <Link href="/services" className="text-primary font-medium hover:underline inline-flex items-center gap-2 whitespace-nowrap">
            View All Services <ArrowRight size={16} />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 6).map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-background border border-border rounded-2xl p-8 hover:border-primary/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:hover:shadow-[0_8px_30px_rgba(37,99,235,0.1)] transition-all duration-300 group"
            >
              <div className="mb-6 inline-flex p-3 rounded-xl bg-muted text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.name}</h3>
              <p className="text-muted-foreground mb-6 line-clamp-3">
                {service.shortDescription}
              </p>
              <Link href={`/services#${service.id}`} className="inline-flex items-center text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                Learn more <ArrowRight size={14} className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
