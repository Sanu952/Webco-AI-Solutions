import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { AnimatePresence } from 'framer-motion';

import { ThemeProvider } from '@/lib/theme';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { ChatbotWidget } from '@/components/ChatbotWidget';

import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ServicesPage from '@/pages/ServicesPage';
import IndustriesPage from '@/pages/IndustriesPage';
import IndustryDetailPage from '@/pages/IndustryDetailPage';
import PricingPage from '@/pages/PricingPage';
import PortfolioPage from '@/pages/PortfolioPage';
import FAQPage from '@/pages/FAQPage';
import ContactPage from '@/pages/ContactPage';
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage';
import TermsPage from '@/pages/TermsPage';
import NotFoundPage from '@/pages/NotFoundPage';

const queryClient = new QueryClient();

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <ScrollToTop />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Switch>
            <Route path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/services" component={ServicesPage} />
            <Route path="/industries" component={IndustriesPage} />
            <Route path="/industries/:slug" component={IndustryDetailPage} />
            <Route path="/pricing" component={PricingPage} />
            <Route path="/portfolio" component={PortfolioPage} />
            <Route path="/faq" component={FAQPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/privacy-policy" component={PrivacyPolicyPage} />
            <Route path="/terms" component={TermsPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </AnimatePresence>
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ChatbotWidget />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="webco-theme">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
            <Router />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
