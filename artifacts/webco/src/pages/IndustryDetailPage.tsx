import React from "react";
import { useRoute } from "wouter";
import { industries } from "@/lib/data";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactCTA } from "@/components/home/ContactCTA";
import NotFoundPage from "@/pages/NotFoundPage";
import { CheckCircle2, XCircle, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export function IndustryDetailPage() {
  const [, params] = useRoute("/industries/:slug");
  const slug = params?.slug;
  
  const industry = industries.find((i) => i.slug === slug);
  
  if (!industry) {
    return <NotFoundPage />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full pt-24"
    >
      <SEOHead 
        title={`AI Solutions for ${industry.name}`} 
        description={industry.heroDescription}
      />
      
      {/* Hero */}
      <section className="py-20 md:py-32 bg-background relative overflow-hidden border-b border-border">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-l-full blur-3xl -z-10 mix-blend-multiply dark:mix-blend-screen opacity-50"></div>
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                <industry.icon size={24} />
              </div>
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">Industry Solution</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold font-serif tracking-tight mb-6">
              AI Chatbots For <span className="text-primary">{industry.name}</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-10 max-w-3xl">
              {industry.heroDescription}
            </p>
            <Button size="lg" asChild>
              <Link href={`/contact?industry=${industry.slug}`}>
                Book Industry Demo <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Problems vs Solutions */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            title="The Old Way vs. The AI Way" 
            subtitle={`How we solve the biggest operational bottlenecks in ${industry.name.toLowerCase()}.`}
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16 max-w-6xl mx-auto">
            <div className="bg-background border border-border rounded-3xl p-8 md:p-12">
              <div className="flex items-center gap-3 mb-8">
                <XCircle className="text-destructive w-8 h-8" />
                <h3 className="text-2xl font-bold">The Problems</h3>
              </div>
              <ul className="space-y-6">
                {industry.problems.map((problem, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-muted-foreground text-lg">
                    <span className="w-6 h-6 rounded-full bg-destructive/10 text-destructive flex items-center justify-center shrink-0 text-sm font-bold mt-1">{idx + 1}</span>
                    {problem}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-primary/5 border border-primary/20 rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -z-10"></div>
              <div className="flex items-center gap-3 mb-8">
                <CheckCircle2 className="text-primary w-8 h-8" />
                <h3 className="text-2xl font-bold">Webco Solutions</h3>
              </div>
              <ul className="space-y-6">
                {industry.solutions.map((solution, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-foreground font-medium text-lg">
                    <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center shrink-0 text-sm font-bold mt-1"><CheckCircle2 size={14} /></span>
                    {solution}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Demo UI Section */}
      <section className="py-24 bg-background border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">See How It Works</h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Our AI agents are trained on your exact business parameters. They engage prospects, answer specific questions, and drive them toward your conversion goal—whether that's a booking, a phone call, or a lead form.
              </p>
              
              <div className="space-y-6">
                <h4 className="font-semibold text-xl border-b border-border pb-2">Expected Results</h4>
                {industry.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary shrink-0"></div>
                    <span className="text-foreground font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-card border border-border rounded-3xl p-6 md:p-8 shadow-xl max-w-md mx-auto w-full">
              <div className="flex items-center justify-between mb-6 border-b border-border pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
                    <industry.icon size={20} />
                  </div>
                  <div>
                    <div className="font-bold">{industry.name} Assistant</div>
                    <div className="text-xs text-primary">Online</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="bg-muted p-3 rounded-2xl rounded-tl-sm text-sm w-[85%]">
                  Hello! Welcome to our {industry.name.toLowerCase()} business. How can I assist you today?
                </div>
                <div className="bg-primary text-white p-3 rounded-2xl rounded-tr-sm text-sm w-[85%] ml-auto">
                  I need help regarding {industry.tagline.split(' ').slice(-2).join(' ').toLowerCase().replace('.', '')}.
                </div>
                <div className="bg-muted p-3 rounded-2xl rounded-tl-sm text-sm w-[85%]">
                  I can certainly help with that. {industry.solutions[0]} Would you like to proceed?
                </div>
              </div>
              
              <div className="border border-border rounded-full px-4 py-3 text-sm text-muted-foreground flex justify-between">
                Type your message...
                <div className="w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center">
                  <ArrowRight size={12} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <SectionHeading title={`Common Questions in ${industry.name}`} />
          <div className="mt-12 space-y-6">
            {industry.faqs.map((faq, idx) => (
              <div key={idx} className="bg-background border border-border p-6 rounded-2xl">
                <h4 className="text-lg font-bold mb-3 text-foreground">{faq.q}</h4>
                <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </motion.div>
  );
}

export default IndustryDetailPage;
