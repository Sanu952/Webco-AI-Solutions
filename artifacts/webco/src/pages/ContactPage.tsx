import React from "react";
import { SEOHead } from "@/components/SEOHead";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Clock, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  company: z.string().min(1, "Company name is required"),
  interest: z.string().min(1, "Please select an interest"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export function ContactPage() {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      interest: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // Simulate API call
    console.log(values);
    toast({
      title: "Message Sent Successfully!",
      description: "Our team will get back to you within 24 hours.",
    });
    form.reset();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full pt-24"
    >
      <SEOHead 
        title="Contact Us | Book a Demo" 
        description="Get in touch with Webco to discuss how our AI solutions can transform your business operations and capture more leads."
      />
      
      {/* Hero */}
      <section className="py-20 bg-background text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-5xl md:text-7xl font-bold font-serif tracking-tight mb-6">
            Let's Talk <span className="text-primary">Automation</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto text-balance">
            Book a free discovery call to see how a custom AI agent can transform your business operations.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 pb-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-card border border-border p-8 rounded-3xl">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Headquarters</h4>
                      <p className="text-muted-foreground leading-relaxed">Godapiasal, Salboni<br/>Paschim Medinipur<br/>West Bengal, India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Call Us</h4>
                      <div className="flex flex-col gap-1">
                        <a href="tel:+918101445973" className="text-muted-foreground hover:text-primary transition-colors">+91 8101445973</a>
                        <a href="tel:+917719253961" className="text-muted-foreground hover:text-primary transition-colors">+91 7719253961</a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Email</h4>
                      <a href="mailto:sanudiashi999@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">sanudiashi999@gmail.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Business Hours</h4>
                      <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM (IST)<br/>Support: 24/7 for Enterprise Clients</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Map Placeholder */}
              <div className="bg-muted border border-border p-8 rounded-3xl h-64 flex flex-col items-center justify-center text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 to-transparent"></div>
                <MapPin size={48} className="text-muted-foreground/30 mb-4" />
                <h3 className="font-bold text-foreground">Interactive Map Coming Soon</h3>
                <p className="text-muted-foreground text-sm">Location mapping integration pending.</p>
              </div>
            </div>

            {/* Form */}
            <div className="bg-card border border-border p-8 md:p-10 rounded-3xl shadow-lg">
              <h3 className="text-3xl font-bold font-serif mb-2">Send us a message</h3>
              <p className="text-muted-foreground mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>
              
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Full Name</label>
                    <input 
                      {...form.register("name")}
                      className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                    {form.formState.errors.name && <p className="text-destructive text-sm">{form.formState.errors.name.message}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email Address</label>
                    <input 
                      {...form.register("email")}
                      className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="john@company.com"
                    />
                    {form.formState.errors.email && <p className="text-destructive text-sm">{form.formState.errors.email.message}</p>}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Phone Number</label>
                    <input 
                      {...form.register("phone")}
                      className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="+1 (555) 000-0000"
                    />
                    {form.formState.errors.phone && <p className="text-destructive text-sm">{form.formState.errors.phone.message}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Company Name</label>
                    <input 
                      {...form.register("company")}
                      className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Acme Corp"
                    />
                    {form.formState.errors.company && <p className="text-destructive text-sm">{form.formState.errors.company.message}</p>}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Service of Interest</label>
                  <select 
                    {...form.register("interest")}
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none"
                  >
                    <option value="">Select a service...</option>
                    <option value="chatbot">AI Chatbot Development</option>
                    <option value="website">Website Development</option>
                    <option value="automation">Workflow Automation</option>
                    <option value="whatsapp">WhatsApp Integration</option>
                    <option value="other">Other</option>
                  </select>
                  {form.formState.errors.interest && <p className="text-destructive text-sm">{form.formState.errors.interest.message}</p>}
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">How can we help?</label>
                  <textarea 
                    {...form.register("message")}
                    rows={4}
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your operational bottlenecks..."
                  />
                  {form.formState.errors.message && <p className="text-destructive text-sm">{form.formState.errors.message.message}</p>}
                </div>
                
                <Button type="submit" size="lg" className="w-full h-14 text-lg">
                  <Send className="mr-2 w-5 h-5" /> Send Message
                </Button>
              </form>
            </div>
            
          </div>
        </div>
      </section>

    </motion.div>
  );
}

export default ContactPage;
