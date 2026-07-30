import React from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Clock, TrendingUp, Zap, Settings, UserCheck, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Clock,
    title: "Always-On AI",
    description: "Your business never sleeps. Neither do our AI agents. Capture leads and support customers 24/7/365 without paying overtime."
  },
  {
    icon: TrendingUp,
    title: "Proven ROI",
    description: "Stop bleeding website traffic. Our clients see an average 3x increase in qualified lead capture within the first 60 days."
  },
  {
    icon: Zap,
    title: "Quick Deployment",
    description: "No months-long IT projects. We build, train, and deploy your custom AI agent in just 14 days."
  },
  {
    icon: Settings,
    title: "Custom-Built",
    description: "No generic templates. Your bot is trained specifically on your data, documents, and unique brand voice."
  },
  {
    icon: UserCheck,
    title: "Human-Like Conversations",
    description: "Powered by advanced LLMs, our bots understand nuance, context, and intent—providing a frictionless user experience."
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description: "Your data remains yours. We use secure, isolated environments and never use your private business data to train public models."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Why Enterprise Leaders Choose Webco" 
          subtitle="We don't just build chatbots; we build intelligent operational assets that directly drive revenue and reduce costs."
        />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="bg-card border border-border p-8 rounded-2xl hover-elevate transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
