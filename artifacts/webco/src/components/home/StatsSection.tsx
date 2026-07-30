import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "200+", label: "Chatbots Deployed" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "50M+", label: "Conversations Handled" },
  { value: "15+", label: "Industries Served" },
];

export function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-card border-y border-border" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary font-serif mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground font-medium text-sm md:text-base uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
