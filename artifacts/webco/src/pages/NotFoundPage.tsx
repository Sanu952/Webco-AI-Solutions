import React from "react";
import { Link } from "wouter";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { ContactCTA } from "@/components/home/ContactCTA";
import { motion } from "framer-motion";
import { FileQuestion, Home } from "lucide-react";

export function NotFoundPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-[100dvh] w-full flex flex-col items-center justify-center pt-24 pb-12 bg-background"
    >
      <SEOHead title="Page Not Found" description="The page you are looking for does not exist." />
      
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
          <FileQuestion size={48} className="text-primary" />
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold font-serif mb-6 text-foreground">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Page Not Found</h2>
        
        <p className="text-xl text-muted-foreground mb-10 leading-relaxed text-balance">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" asChild className="w-full sm:w-auto h-12 px-8">
            <Link href="/">
              <Home className="mr-2 w-5 h-5" /> Back to Home
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="w-full sm:w-auto h-12 px-8">
            <Link href="/contact">
              Contact Support
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

export default NotFoundPage;
