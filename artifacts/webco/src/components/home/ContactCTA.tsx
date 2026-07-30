import React from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export function ContactCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary"></div>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent bg-[length:20px_20px]"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-white mb-6 tracking-tight">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10 leading-relaxed text-balance">
            Stop losing leads after hours. Start automating your operations. Book a discovery call today to see how AI can scale your revenue.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="secondary" asChild className="w-full sm:w-auto h-14 px-8 text-lg bg-white text-primary hover:bg-gray-100">
              <Link href="/contact">
                <Calendar className="mr-2 w-5 h-5" /> Book Free Demo
              </Link>
            </Button>
            <Button size="lg" asChild className="w-full sm:w-auto h-14 px-8 text-lg bg-primary-foreground/10 text-white border-white/20 hover:bg-primary-foreground/20 border backdrop-blur-sm">
              <a href="tel:+918101445973">
                <Phone className="mr-2 w-5 h-5" /> Talk to Expert
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
