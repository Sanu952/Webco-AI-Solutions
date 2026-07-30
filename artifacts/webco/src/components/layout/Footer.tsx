import React from 'react';
import { Link } from 'wouter';
import { Bot, MapPin, Mail, Phone, ArrowRight } from 'lucide-react';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <div className="bg-primary p-1.5 rounded-lg text-primary-foreground">
                <Bot size={24} />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight">Webco</span>
            </Link>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Transforming businesses globally with intelligent AI chatbots, automated workflows, and high-performance digital experiences.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 bg-muted rounded-full text-muted-foreground hover:bg-primary hover:text-white transition-colors">
                <FaLinkedin size={18} />
              </a>
              <a href="#" className="p-2 bg-muted rounded-full text-muted-foreground hover:bg-primary hover:text-white transition-colors">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="p-2 bg-muted rounded-full text-muted-foreground hover:bg-primary hover:text-white transition-colors">
                <FaFacebook size={18} />
              </a>
              <a href="#" className="p-2 bg-muted rounded-full text-muted-foreground hover:bg-primary hover:text-white transition-colors">
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2"><ArrowRight size={14} className="text-primary"/> About Us</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2"><ArrowRight size={14} className="text-primary"/> Services</Link></li>
              <li><Link href="/portfolio" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2"><ArrowRight size={14} className="text-primary"/> Case Studies</Link></li>
              <li><Link href="/pricing" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2"><ArrowRight size={14} className="text-primary"/> Pricing</Link></li>
              <li><Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2"><ArrowRight size={14} className="text-primary"/> FAQ</Link></li>
            </ul>
          </div>

          {/* Top Industries */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Industries</h3>
            <ul className="space-y-4">
              <li><Link href="/industries/solar" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2"><ArrowRight size={14} className="text-primary"/> Solar</Link></li>
              <li><Link href="/industries/real-estate" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2"><ArrowRight size={14} className="text-primary"/> Real Estate</Link></li>
              <li><Link href="/industries/healthcare" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2"><ArrowRight size={14} className="text-primary"/> Healthcare</Link></li>
              <li><Link href="/industries/home-services" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2"><ArrowRight size={14} className="text-primary"/> Home Services</Link></li>
              <li><Link href="/industries" className="text-primary font-medium hover:underline transition-colors mt-2 block">View all 15+ industries</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin size={20} className="text-primary shrink-0 mt-1" />
                <span>Godapiasal, Salboni, Paschim Medinipur, West Bengal, India</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail size={20} className="text-primary shrink-0" />
                <a href="mailto:sanudiashi999@gmail.com" className="hover:text-primary transition-colors">sanudiashi999@gmail.com</a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone size={20} className="text-primary shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+918101445973" className="hover:text-primary transition-colors">+91 8101445973</a>
                  <a href="tel:+917719253961" className="hover:text-primary transition-colors">+91 7719253961</a>
                </div>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground mt-4">
                <FaWhatsapp size={20} className="text-[#25D366] shrink-0" />
                <a href="https://wa.me/918101445973" target="_blank" rel="noreferrer" className="hover:text-[#25D366] transition-colors font-medium text-foreground">Chat on WhatsApp</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            &copy; {new Date().getFullYear()} Webco AI Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
