import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
}

export function SEOHead({ title, description }: SEOHeadProps) {
  useEffect(() => {
    document.title = `${title} | Webco AI Agency`;
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);
    
    return () => {
      document.title = "Webco | AI Chatbot Solutions";
    };
  }, [title, description]);

  return null;
}
