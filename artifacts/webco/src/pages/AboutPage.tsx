import React from "react";
import { SEOHead } from "@/components/SEOHead";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactCTA } from "@/components/home/ContactCTA";
import { motion } from "framer-motion";
import { Target, Lightbulb, Shield, TrendingUp, CheckCircle2 } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We constantly push the boundaries of what's possible with LLMs, turning complex AI research into practical business tools."
  },
  {
    icon: Shield,
    title: "Reliability",
    description: "Enterprise software demands enterprise stability. We build robust systems that stay online and perform accurately under pressure."
  },
  {
    icon: Target,
    title: "Transparency",
    description: "No black boxes. We provide clear analytics, readable transcripts, and honest guidance about what AI can and cannot do."
  },
  {
    icon: TrendingUp,
    title: "Results-Driven",
    description: "We don't build tech for tech's sake. Every project is measured by its impact on your bottom line: leads generated, hours saved, revenue increased."
  }
];

const techStack = [
  "OpenAI GPT-4", "Anthropic Claude 3", "LangChain", "Pinecone Vector DB", 
  "React", "TypeScript", "Node.js", "AWS", "Stripe", "Twilio", "WhatsApp Business API"
];

export function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full pt-24"
    >
      <SEOHead 
        title="About Us" 
        description="Learn about Webco, the premium AI agency dedicated to transforming businesses through intelligent automation and conversational AI."
      />
      
      {/* Hero */}
      <section className="py-20 md:py-32 bg-background relative overflow-hidden border-b border-border">
        <div className="absolute top-0 left-0 w-full h-full bg-primary/5 rounded-full blur-[150px] -z-10 mix-blend-multiply dark:mix-blend-screen opacity-50 translate-y-[-50%]"></div>
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold font-serif tracking-tight mb-6">
              Pioneering the Future of <span className="text-primary">Business Operations</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              We are a team of AI engineers and business strategists dedicated to making enterprise-grade automation accessible to companies ready to scale.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading title="Our Story" alignment="left" />
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mt-8">
                <p>
                  Webco was founded with a singular observation: brilliant businesses were losing millions simply because they couldn't be everywhere at once. Phones rang unanswered during dinner rushes. Weekend web traffic bounced without converting. Support tickets piled up, burning out staff.
                </p>
                <p>
                  While large tech conglomerates were using early AI to solve these problems, the solutions were priced out of reach for the vast majority of the market.
                </p>
                <p>
                  We built Webco to bridge that gap. We construct the same high-caliber, secure, and intelligent AI agents used by Fortune 500 companies, tailored specifically for mid-market and scaling businesses. Our mission is to give your business an unfair operational advantage.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden bg-muted border border-border flex items-center justify-center relative">
                {/* Abstract visualization instead of hardcoded image */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-background z-0"></div>
                <div className="w-full h-full flex items-center justify-center z-10 relative">
                  <div className="grid grid-cols-3 gap-4 p-8 w-full h-full">
                    {[...Array(9)].map((_, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0.2 }}
                        animate={{ opacity: [0.2, 0.8, 0.2] }}
                        transition={{ duration: 3, delay: i * 0.2, repeat: Infinity }}
                        className={`rounded-lg ${i === 4 ? 'bg-primary' : 'bg-primary/20 border border-primary/30'}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            title="Our Core Values" 
            subtitle="The principles that guide every line of code we write and every bot we deploy."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-5xl mx-auto">
            {values.map((value, idx) => (
              <div key={idx} className="bg-card border border-border p-8 rounded-2xl flex gap-6 hover:border-primary/50 transition-colors">
                <div className="shrink-0">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    <value.icon size={28} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <SectionHeading 
            title="Powered By Industry-Leading Tech" 
            subtitle="We build on the shoulders of giants to deliver uncompromised performance."
          />
          
          <div className="flex flex-wrap justify-center gap-4 mt-12 max-w-4xl mx-auto">
            {techStack.map((tech, idx) => (
              <div key={idx} className="px-6 py-3 bg-background border border-border rounded-full text-sm font-medium hover:border-primary hover:text-primary transition-colors cursor-default">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </motion.div>
  );
}

export default AboutPage;
