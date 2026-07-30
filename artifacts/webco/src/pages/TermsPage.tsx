import React from "react";
import { SEOHead } from "@/components/SEOHead";
import { motion } from "framer-motion";

export function TermsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full pt-32 pb-24 bg-background"
    >
      <SEOHead title="Terms of Service" description="Webco Terms of Service and legal agreements." />
      
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold font-serif mb-8 text-foreground">Terms of Service</h1>
        <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-foreground mt-8 mb-4 font-bold text-2xl">1. Acceptance of Terms</h2>
          <p>
            By accessing and using Webco's services, website, or AI products, you accept and agree to be bound by the terms and provision of this agreement.
          </p>

          <h2 className="text-foreground mt-8 mb-4 font-bold text-2xl">2. Description of Services</h2>
          <p>
            Webco provides AI automation solutions, including but not limited to custom chatbot development, workflow automation, website development, and CRM integration services. The specific deliverables, timelines, and costs for each project are governed by individual Statements of Work (SOW) signed by the client.
          </p>

          <h2 className="text-foreground mt-8 mb-4 font-bold text-2xl">3. AI Service Limitations and Liability</h2>
          <p>
            While we strive for the highest accuracy, Artificial Intelligence systems, including Large Language Models (LLMs), may occasionally produce incorrect, inaccurate, or hallucinated outputs.
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Webco implements robust prompt engineering and guardrails to minimize errors.</li>
            <li>However, the Client acknowledges that AI outputs cannot be guaranteed 100% accurate.</li>
            <li>Webco shall not be held liable for any damages, lost profits, or legal repercussions resulting from automated responses provided by the AI agents we deploy.</li>
            <li>The Client is responsible for regularly reviewing chat transcripts and reporting consistent errors for retraining.</li>
          </ul>

          <h2 className="text-foreground mt-8 mb-4 font-bold text-2xl">4. Intellectual Property Rights</h2>
          <p>
            Unless otherwise agreed upon in a custom Enterprise SOW, Webco retains the intellectual property rights to the underlying codebase, proprietary prompts, orchestration layers, and software architecture used to deliver the AI services. The Client retains all rights to their proprietary business data, brand assets, and the output generated specifically for their customers.
          </p>

          <h2 className="text-foreground mt-8 mb-4 font-bold text-2xl">5. Payment Terms</h2>
          <p>
            Subscription services are billed in advance on a monthly or annual basis. Setup fees for custom development are billed according to the milestones outlined in the SOW. Failure to remit payment may result in the suspension of automated services.
          </p>

          <h2 className="text-foreground mt-8 mb-4 font-bold text-2xl">6. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of India. Any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of the courts of West Bengal, India.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default TermsPage;
