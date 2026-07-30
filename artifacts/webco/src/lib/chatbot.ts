// Webco AI Chatbot Engine
// Smart keyword/intent-based engine trained on all Webco business data

export interface ChatMessage {
  id: string;
  role: "user" | "bot";
  text: string;
  timestamp: Date;
  quickReplies?: QuickReply[];
}

export interface QuickReply {
  label: string;
  value: string;
}

interface Intent {
  keywords: string[];
  response: string | ((input: string) => string);
  quickReplies?: QuickReply[];
}

// ─── Knowledge Base ───────────────────────────────────────────────────────────

const COMPANY = {
  name: "Webco",
  tagline: "AI Chatbot Solutions That Grow Your Business",
  email: "sanudiashi999@gmail.com",
  phones: ["+91 8101445973", "+91 7719253961"],
  address: "Godapiasal, Salboni, Paschim Medinipur, West Bengal, India",
  whatsapp: "https://wa.me/918101445973",
  deployTime: "14 days",
  stats: {
    chatbots: "200+",
    satisfaction: "98%",
    conversations: "50 million+",
    industries: "15+",
  },
};

const SERVICES = [
  { name: "AI Chatbot Development", desc: "Custom AI chatbots trained on your business data for intelligent, human-like conversations." },
  { name: "Business Website Development", desc: "High-converting, performance-optimized professional websites built to generate leads." },
  { name: "AI Customer Support", desc: "24/7 automated support that resolves up to 80% of customer queries instantly." },
  { name: "Lead Generation Chatbot", desc: "Capture, qualify, and route leads automatically around the clock." },
  { name: "Appointment Booking Bot", desc: "Smart booking system integrated with your calendar — no back-and-forth scheduling." },
  { name: "WhatsApp Chatbot", desc: "Reach customers on WhatsApp, the world's most popular messaging app." },
  { name: "AI FAQ Bot", desc: "Instantly answer common questions at any hour with precision." },
  { name: "Website Automation", desc: "Automate workflows, syncing, and repetitive digital tasks." },
  { name: "CRM Integration", desc: "Connect AI to your existing CRM (Salesforce, HubSpot, GoHighLevel, etc.)." },
  { name: "Business Automation", desc: "End-to-end operational automation for your entire business." },
];

const PRICING = [
  {
    name: "Starter",
    price: "$297/mo",
    desc: "Up to 500 conversations/mo, standard AI chatbot, website integration, email support, 1 CRM integration, basic analytics.",
  },
  {
    name: "Professional",
    price: "$697/mo",
    desc: "Unlimited conversations, advanced AI, website + WhatsApp integration, priority support, unlimited CRM integrations, advanced analytics, lead generation flows, custom brand voice.",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$1,497/mo",
    desc: "Everything in Professional plus custom model training, dedicated account manager, 99.9% SLA guarantee, custom API integrations, on-premise options, multi-agent orchestration.",
  },
  {
    name: "Custom Quote",
    price: "Contact us",
    desc: "HIPAA/SOC2 compliance, white-label options, multiple subsidiary rollouts, full source-code buyout. Contact us at sanudiashi999@gmail.com.",
  },
];

const INDUSTRIES = [
  "Solar Installers", "Real Estate", "Cleaning Services", "Plumbing", "HVAC",
  "Electrical Services", "Dental Clinics", "Medical Clinics", "Law Firms",
  "Restaurants", "Hotels", "Gyms", "Home Services", "Property Management", "Construction Companies",
];

const FAQS: Record<string, string> = {
  "what is an ai chatbot": "An AI chatbot is software powered by Large Language Models that simulates human conversation. Unlike old rule-based bots, our AI understands natural language, context, and intent — providing highly accurate, conversational answers.",
  "how long to deploy": `Most standard implementations go from discovery call to live in just ${COMPANY.deployTime}. Complex enterprise integrations may take 4–6 weeks.`,
  "technical skills needed": "Not at all. We handle the entire build, training, and deployment. You get a simple dashboard to view analytics and update information if things change.",
  "crm integration": "Yes — we specialize in deep integrations with Salesforce, HubSpot, GoHighLevel, ServiceTitan, Zoho, and custom internal tools via API.",
  "whatsapp": "Your AI agent can live simultaneously on your website, WhatsApp Business, Facebook Messenger, Instagram, and even SMS.",
  "data security": "We use enterprise-grade security. Your data is never used to train public models. HIPAA-compliant setups are available for healthcare clients.",
  "ai doesnt know answer": "We build seamless fallback protocols. If the AI can't answer, it gracefully admits it and routes the conversation to a human agent or collects contact info.",
  "roi": "Clients typically see a 30–40% increase in lead capture and 50–70% reduction in tier-1 support costs. ROI is usually realized within the first 60 days.",
};

// ─── Intent Definitions ───────────────────────────────────────────────────────

const INTENTS: Intent[] = [
  // Greeting
  {
    keywords: ["hello", "hi", "hey", "good morning", "good afternoon", "good evening", "howdy", "greetings", "start"],
    response: `Hello! 👋 Welcome to ${COMPANY.name}. I'm the Webco assistant — I can help you with information about our AI chatbot services, pricing, industries we serve, and more.\n\nWhat would you like to know?`,
    quickReplies: [
      { label: "Our Services", value: "What services do you offer?" },
      { label: "Pricing", value: "What are your pricing plans?" },
      { label: "Book a Demo", value: "How can I book a free demo?" },
      { label: "Industries", value: "What industries do you serve?" },
    ],
  },

  // Services
  {
    keywords: ["service", "services", "what do you do", "what do you offer", "offer", "provide", "solutions", "products"],
    response: `We offer **10 core AI & automation services**:\n\n${SERVICES.map((s, i) => `${i + 1}. **${s.name}** — ${s.desc}`).join("\n\n")}\n\nWould you like to know more about any specific service?`,
    quickReplies: [
      { label: "AI Chatbot Dev", value: "Tell me about AI Chatbot Development" },
      { label: "WhatsApp Bot", value: "Tell me about WhatsApp chatbots" },
      { label: "Lead Generation", value: "Tell me about lead generation chatbots" },
      { label: "Pricing", value: "What are your pricing plans?" },
    ],
  },

  // AI Chatbot Development
  {
    keywords: ["ai chatbot development", "custom chatbot", "build a chatbot", "chatbot development", "develop a bot"],
    response: `**AI Chatbot Development** is our flagship service.\n\nWe build bespoke AI conversational agents trained specifically on your company's knowledge base, website, and documentation. These aren't scripted bots — they understand context, intent, and nuance.\n\n✅ Trained on your specific business data\n✅ Natural language understanding\n✅ Seamless human handoff when needed\n✅ Continuous learning from interactions\n\nDeployment time: as fast as ${COMPANY.deployTime}.`,
    quickReplies: [
      { label: "How long to build?", value: "How long does it take to deploy?" },
      { label: "Pricing", value: "What are your pricing plans?" },
      { label: "Book a Demo", value: "How can I book a free demo?" },
    ],
  },

  // WhatsApp
  {
    keywords: ["whatsapp", "whats app", "whatsapp bot", "whatsapp chatbot", "whatsapp integration"],
    response: `**WhatsApp Chatbot** — reach customers where they already are.\n\nWe build verified WhatsApp Business bots that handle sales, support, and marketing directly in WhatsApp.\n\n✅ Higher open and engagement rates vs email\n✅ Rich media support (images, documents)\n✅ Secure end-to-end encryption\n✅ Proactive notification capabilities\n\nAvailable on our **Professional** ($697/mo) and **Enterprise** ($1,497/mo) plans.`,
    quickReplies: [
      { label: "See Pricing", value: "What are your pricing plans?" },
      { label: "Book a Demo", value: "How can I book a free demo?" },
    ],
  },

  // Lead Generation
  {
    keywords: ["lead", "leads", "lead generation", "lead capture", "generate leads", "qualify leads"],
    response: `**Lead Generation Chatbot** — never lose another lead.\n\nOur lead gen bots engage visitors, ask qualifying questions, collect contact information, and route high-value prospects to your sales team — 24/7, even on weekends.\n\n✅ 24/7 lead capture\n✅ Automated prospect qualification\n✅ Instant CRM data entry\n✅ Higher conversion than static forms\n\nTypical result: **30–40% increase in lead capture** from existing web traffic.`,
    quickReplies: [
      { label: "Get Pricing", value: "What are your pricing plans?" },
      { label: "Book a Demo", value: "How can I book a free demo?" },
    ],
  },

  // Appointment Booking
  {
    keywords: ["appointment", "booking", "schedule", "calendar", "book appointment", "scheduling"],
    response: `**Appointment Booking Bot** — frictionless scheduling for your business.\n\nOur booking bots check real-time availability, schedule appointments, send confirmations, and handle rescheduling — all through a conversational interface.\n\n✅ Eliminates back-and-forth scheduling\n✅ Reduces no-shows with automated reminders\n✅ Syncs with Google Calendar, Outlook, and CRM\n✅ Handles timezone conversions automatically\n\nPopular with dental clinics, medical practices, law firms, and gyms.`,
    quickReplies: [
      { label: "Industries", value: "What industries do you serve?" },
      { label: "Book a Demo", value: "How can I book a free demo?" },
    ],
  },

  // Pricing
  {
    keywords: ["price", "pricing", "cost", "how much", "plans", "plan", "package", "packages", "fee", "fees", "rate", "rates", "charge"],
    response: `Here are our **4 pricing plans**:\n\n💼 **Starter — $297/mo**\n${PRICING[0].desc}\n\n⭐ **Professional — $697/mo** *(Most Popular)*\n${PRICING[1].desc}\n\n🏢 **Enterprise — $1,497/mo**\n${PRICING[2].desc}\n\n🎯 **Custom Quote**\n${PRICING[3].desc}\n\nAll plans include setup, training, and ongoing support. Annual billing available with 20% discount.`,
    quickReplies: [
      { label: "Book Free Demo", value: "How can I book a free demo?" },
      { label: "Talk to Expert", value: "How can I contact you?" },
      { label: "What's included?", value: "What is included in the Professional plan?" },
    ],
  },

  // Professional plan details
  {
    keywords: ["professional plan", "697", "what is included", "whats included", "plan details", "plan features"],
    response: `**Professional Plan — $697/mo** *(Most Popular)*\n\nIncludes everything you need to scale:\n\n✅ Unlimited conversations\n✅ Advanced AI (GPT-4 tier)\n✅ Website + WhatsApp Integration\n✅ Priority Support\n✅ Unlimited CRM Integrations\n✅ Advanced Analytics Dashboard\n✅ Lead Generation Flows\n✅ Custom Brand Voice\n\n**Annual plan: $558/mo** (save 20%).\n\nReady to get started?`,
    quickReplies: [
      { label: "Book Free Demo", value: "How can I book a free demo?" },
      { label: "Compare Plans", value: "What are your pricing plans?" },
    ],
  },

  // Industries
  {
    keywords: ["industry", "industries", "sector", "business type", "type of business", "who do you work with", "clients", "niche"],
    response: `We serve **${INDUSTRIES.length} industries**:\n\n${INDUSTRIES.map(i => `• ${i}`).join("\n")}\n\nEach solution is fully customized for the specific needs, terminology, and workflows of that industry. Which industry are you in?`,
    quickReplies: [
      { label: "Solar", value: "Tell me about chatbots for solar installers" },
      { label: "Real Estate", value: "Tell me about chatbots for real estate" },
      { label: "Healthcare", value: "Tell me about chatbots for dental or medical clinics" },
      { label: "Restaurants", value: "Tell me about chatbots for restaurants" },
    ],
  },

  // Solar
  {
    keywords: ["solar", "solar installer", "solar company", "solar leads", "solar energy"],
    response: `**AI Chatbots for Solar Installers**\n\nIn the competitive solar market, speed to lead is everything. Our AI qualifies homeowners, calculates preliminary estimates, and books site visits — 24/7.\n\n**Key results:**\n✅ 300% increase in lead response speed\n✅ 40% reduction in unqualified appointments\n✅ 24/7 lead capture (even nights & weekends)\n✅ Seamless CRM integration for your sales team\n\nThe bot pre-qualifies leads by asking for zip code and average power bill, then routes high-quality prospects directly to your closers.`,
    quickReplies: [
      { label: "Book Demo", value: "How can I book a free demo?" },
      { label: "Pricing", value: "What are your pricing plans?" },
    ],
  },

  // Real Estate
  {
    keywords: ["real estate", "property", "realtor", "agent", "realty", "property management", "housing"],
    response: `**AI Chatbots for Real Estate**\n\nNever miss a property inquiry again. Our AI agents handle inquiries, schedule viewings, and capture lead details 24/7.\n\n**Key results:**\n✅ Zero missed leads after hours\n✅ Agents save 15+ hours/week on basic inquiries\n✅ 280% more qualified leads reported by clients\n✅ Automated lead nurturing sequences\n\nThe bot can pull listings from your MLS or website database to show relevant properties based on user criteria.`,
    quickReplies: [
      { label: "Book Demo", value: "How can I book a free demo?" },
      { label: "Pricing", value: "What are your pricing plans?" },
    ],
  },

  // Medical / Dental / Healthcare
  {
    keywords: ["dental", "dentist", "medical", "clinic", "doctor", "healthcare", "hospital", "hipaa", "health", "patient"],
    response: `**AI Chatbots for Healthcare Clinics**\n\nWe build HIPAA-compliant AI agents for dental and medical practices that handle scheduling, FAQs, and patient intake.\n\n**Dental Clinics:**\n✅ 40% reduction in front-desk phone volume\n✅ Significantly lower no-show rates with automated reminders\n✅ Fills last-minute cancellations automatically\n✅ Integrates with Dentrix, Eaglesoft & more\n\n**Medical Clinics:**\n✅ Zero patient hold times\n✅ Automates distribution of digital intake forms\n✅ Staff freed to focus on in-clinic patients\n\n*Note: Our healthcare bots are strictly for administrative tasks and never provide medical advice.*`,
    quickReplies: [
      { label: "Book Demo", value: "How can I book a free demo?" },
      { label: "Is it HIPAA compliant?", value: "Is your chatbot HIPAA compliant?" },
    ],
  },

  // HIPAA
  {
    keywords: ["hipaa", "compliant", "compliance", "data privacy", "gdpr", "secure", "security"],
    response: `**Data Security & Compliance**\n\nSecurity is a top priority at Webco:\n\n✅ Enterprise-grade encryption in transit and at rest\n✅ HIPAA-compliant infrastructure available for healthcare clients\n✅ Your data is never used to train public AI models\n✅ Strict data processing agreements (DPA) provided\n✅ SOC2-ready configurations for enterprise\n✅ Custom data retention policies\n\nFor healthcare clients, we sign a Business Associate Agreement (BAA) to ensure full HIPAA compliance.`,
    quickReplies: [
      { label: "Book Demo", value: "How can I book a free demo?" },
      { label: "Contact Us", value: "How can I contact you?" },
    ],
  },

  // Restaurant
  {
    keywords: ["restaurant", "food", "dining", "cafe", "cafe", "reservation", "menu", "table"],
    response: `**AI Chatbots for Restaurants**\n\nStop letting the phone ring during the dinner rush. Our AI handles reservations, menu questions, and takeout orders seamlessly.\n\n✅ Automated table booking (integrates with OpenTable, Resy)\n✅ Instantly answers menu, allergen & hours questions\n✅ Staff stay focused on present guests\n✅ Handles 1,000+ conversations per week (client result)\n\nThe bot is trained on your specific menu, ingredient lists, and dietary options for accurate allergen responses.`,
    quickReplies: [
      { label: "Book Demo", value: "How can I book a free demo?" },
      { label: "Pricing", value: "What are your pricing plans?" },
    ],
  },

  // Law Firm
  {
    keywords: ["law", "lawyer", "attorney", "legal", "law firm", "intake", "legal advice"],
    response: `**AI Chatbots for Law Firms**\n\nSecure high-value clients before your competitors. Our AI performs initial intake, screens for conflicts, and schedules consultations 24/7.\n\n✅ Standardized, thorough intake data collection\n✅ Zero missed opportunities after business hours\n✅ Attorneys only speak with qualified prospects\n✅ Professional, empathetic initial contact\n\n*The bot provides legal information, not advice, and always directs users to schedule a consultation.*\n\nAll conversations are encrypted with configurable data retention policies to meet legal ethics requirements.`,
    quickReplies: [
      { label: "Book Demo", value: "How can I book a free demo?" },
      { label: "Security Info", value: "How secure is your chatbot?" },
    ],
  },

  // Hotel / Hospitality
  {
    keywords: ["hotel", "hospitality", "guest", "concierge", "accommodation", "resort", "stay"],
    response: `**AI Chatbots for Hotels**\n\nProvide a 24/7 AI concierge experience for your guests — available via WhatsApp, SMS, or in-room QR codes.\n\n✅ Higher guest satisfaction scores (94% in client results)\n✅ Increased revenue from pre-arrival amenity upsells\n✅ Reduced strain on front desk staff\n✅ Real-time multilingual translation for international guests\n\nGuests don't need to download any app — they just scan a QR code or message on WhatsApp.`,
    quickReplies: [
      { label: "Book Demo", value: "How can I book a free demo?" },
      { label: "Pricing", value: "What are your pricing plans?" },
    ],
  },

  // Gym / Fitness
  {
    keywords: ["gym", "fitness", "workout", "membership", "personal training", "class"],
    response: `**AI Chatbots for Gyms & Fitness Centers**\n\nTurn website traffic into paying members. Our AI answers facility questions, offers trial passes, and books personal training sessions.\n\n✅ Increased conversion of website visitors to trials\n✅ Reduced administrative work for front desk\n✅ Higher class attendance rates\n✅ Integrates with Mindbody, Zen-Planner & more\n\nMembers can also manage their schedules (book/cancel classes, advance waitlist) directly through the bot.`,
    quickReplies: [
      { label: "Book Demo", value: "How can I book a free demo?" },
      { label: "Pricing", value: "What are your pricing plans?" },
    ],
  },

  // How it works / Process
  {
    keywords: ["how does it work", "how it works", "process", "steps", "workflow", "implementation", "onboarding", "setup"],
    response: `Here's **how we work with you**:\n\n**Step 1 — Discovery Call** *(Day 1)*\nWe learn your business, goals, and current pain points. Free, no commitment.\n\n**Step 2 — Custom Build** *(Days 2–10)*\nOur team builds and trains your AI agent on your specific data, brand voice, and workflows.\n\n**Step 3 — Testing & Review** *(Days 11–13)*\nYou test everything. We refine until it's perfect. Unlimited revisions.\n\n**Step 4 — Launch & Support** *(Day 14)*\nWe go live and provide ongoing monitoring and updates.\n\n⏱️ **Total: 14 days from discovery to live deployment.**`,
    quickReplies: [
      { label: "Book Discovery Call", value: "How can I book a free demo?" },
      { label: "Pricing", value: "What are your pricing plans?" },
    ],
  },

  // ROI / Results
  {
    keywords: ["roi", "return on investment", "results", "benefit", "benefits", "value", "worth it", "why", "why chatbot", "revenue"],
    response: `**Typical ROI from a Webco AI chatbot:**\n\n📈 30–40% increase in lead capture from existing traffic\n💰 50–70% reduction in tier-1 support costs\n⏰ ROI usually realized within the first 60 days\n\n**Real client results:**\n• SolarBot Pro: Lead response time reduced from 2 days → 2 minutes\n• DentaBook AI: 340% increase in appointment bookings\n• Legal Intake Agent: Processes 200+ inquiries per day\n• PropertyGenius: 280% more qualified leads\n\nA chatbot on the Professional plan ($697/mo) that captures just 3–5 additional clients per month typically pays for itself 10x over.`,
    quickReplies: [
      { label: "See Pricing", value: "What are your pricing plans?" },
      { label: "Book Free Demo", value: "How can I book a free demo?" },
    ],
  },

  // Demo / Get started
  {
    keywords: ["demo", "free demo", "book demo", "get started", "start", "begin", "trial", "test", "try"],
    response: `**Book Your Free Demo — No Commitment**\n\nHere's how to get started:\n\n📧 **Email:** ${COMPANY.email}\n📞 **Call/WhatsApp:** ${COMPANY.phones[0]}\n📞 **Alternate:** ${COMPANY.phones[1]}\n📍 **Location:** ${COMPANY.address}\n\nOr visit our **Contact page** for a direct inquiry form.\n\nDuring the demo, we'll show you exactly how the AI would work for *your* specific business — live, with your own data. It's free and takes about 30 minutes.`,
    quickReplies: [
      { label: "WhatsApp Us", value: "What is your WhatsApp number?" },
      { label: "Pricing", value: "What are your pricing plans?" },
    ],
  },

  // Contact / Location
  {
    keywords: ["contact", "reach you", "email", "phone", "call", "address", "location", "where are you", "office"],
    response: `**Contact Webco:**\n\n📧 **Email:** ${COMPANY.email}\n📞 **Phone 1:** ${COMPANY.phones[0]}\n📞 **Phone 2:** ${COMPANY.phones[1]}\n📍 **Address:** ${COMPANY.address}\n\nYou can also reach us on WhatsApp for the fastest response. We typically reply within a few hours during business hours (IST).`,
    quickReplies: [
      { label: "WhatsApp", value: "What is your WhatsApp number?" },
      { label: "Book Demo", value: "How can I book a free demo?" },
    ],
  },

  // WhatsApp number
  {
    keywords: ["whatsapp number", "whatsapp contact", "message you", "chat on whatsapp"],
    response: `📱 **WhatsApp us directly:**\n\n**+91 8101445973**\n\nClick the green WhatsApp button in the bottom-right corner of the page to open a chat instantly, or tap the number above on your phone.\n\nWe respond to WhatsApp messages during business hours (IST, 9 AM – 7 PM, Mon–Sat).`,
    quickReplies: [
      { label: "Book a Demo", value: "How can I book a free demo?" },
      { label: "Our Services", value: "What services do you offer?" },
    ],
  },

  // Deployment time
  {
    keywords: ["how long", "time to deploy", "deployment time", "how fast", "timeline", "weeks", "days"],
    response: `⚡ **Deployment Timeline:**\n\nFor most standard implementations:\n**14 days** from discovery call to live deployment.\n\nHere's the breakdown:\n• Day 1: Discovery & scoping call\n• Days 2–10: Build & AI training on your data\n• Days 11–13: Testing & revisions with you\n• Day 14: Go live!\n\nComplex enterprise integrations or highly customized workflows typically take 4–6 weeks.\n\nWant to see your timeline? Book a free demo call.`,
    quickReplies: [
      { label: "Book Free Demo", value: "How can I book a free demo?" },
      { label: "Pricing", value: "What are your pricing plans?" },
    ],
  },

  // About Webco
  {
    keywords: ["about", "who are you", "company", "about webco", "who is webco", "team", "founded", "story"],
    response: `**About Webco**\n\n${COMPANY.name} is an AI automation agency specializing in custom chatbot development for businesses across 15+ industries worldwide.\n\n📊 **By the numbers:**\n• ${COMPANY.stats.chatbots} chatbots deployed\n• ${COMPANY.stats.satisfaction} client satisfaction rate\n• ${COMPANY.stats.conversations} conversations handled\n• ${COMPANY.stats.industries} industries served\n\nWe believe every business — from a local plumber to a nationwide hotel chain — deserves enterprise-grade AI automation at a fair price. That's why we exist.\n\n📍 Based in West Bengal, India. Serving clients globally.`,
    quickReplies: [
      { label: "Our Services", value: "What services do you offer?" },
      { label: "Book Demo", value: "How can I book a free demo?" },
    ],
  },

  // CRM / Integrations
  {
    keywords: ["crm", "salesforce", "hubspot", "gohighlevel", "zoho", "integration", "connect", "integrate"],
    response: `**CRM & Integration Capabilities:**\n\nWe specialize in deep integrations with virtually any CRM or business tool:\n\n✅ Salesforce\n✅ HubSpot\n✅ GoHighLevel\n✅ Zoho CRM\n✅ ServiceTitan (field service)\n✅ Mindbody (fitness)\n✅ Dentrix / Eaglesoft (dental)\n✅ Custom REST APIs\n\nEvery lead captured by the chatbot is automatically logged in your CRM — with full conversation history, contact details, and qualification data.`,
    quickReplies: [
      { label: "Book Demo", value: "How can I book a free demo?" },
      { label: "Pricing", value: "What are your pricing plans?" },
    ],
  },

  // Technical / No technical skills
  {
    keywords: ["technical", "tech skills", "coding", "developer", "do i need", "manage it", "maintain"],
    response: `**No technical skills required.**\n\nWe handle 100% of the build, AI training, and deployment.\n\nWhat you get access to:\n✅ A simple dashboard to view analytics & transcripts\n✅ Easy knowledge base updates (no coding)\n✅ Ongoing support from our team\n\nIf your business information changes (new service, new pricing), just message us and we update the AI — usually within 24 hours.`,
    quickReplies: [
      { label: "Book Demo", value: "How can I book a free demo?" },
      { label: "Pricing", value: "What are your pricing plans?" },
    ],
  },

  // Plumbing / HVAC / Home Services
  {
    keywords: ["plumber", "plumbing", "hvac", "electrical", "electrician", "contractor", "home service", "cleaning"],
    response: `**AI Chatbots for Home Services & Trades**\n\nPerfect for plumbers, HVAC, electricians, cleaners, and general contractors:\n\n✅ Capture 100% of after-hours emergency leads\n✅ Automated job prioritization (emergency vs routine)\n✅ Zero missed opportunities while technicians are on the job\n✅ Integrates with ServiceTitan, Housecall Pro & more\n\n**For emergencies:** The bot uses keyword analysis to detect urgent situations (e.g., "burst pipe") and instantly SMS-alerts your on-call technician.\n\nAverage time saved: **15+ hours/week** of admin and phone work.`,
    quickReplies: [
      { label: "Book Demo", value: "How can I book a free demo?" },
      { label: "Pricing", value: "What are your pricing plans?" },
    ],
  },

  // Thank you
  {
    keywords: ["thank", "thanks", "thank you", "great", "awesome", "perfect", "helpful", "good"],
    response: `You're very welcome! 😊 I'm glad I could help.\n\nIs there anything else you'd like to know about Webco's AI chatbot solutions? We're here to help your business grow.`,
    quickReplies: [
      { label: "Book Free Demo", value: "How can I book a free demo?" },
      { label: "See Pricing", value: "What are your pricing plans?" },
    ],
  },

  // Goodbye
  {
    keywords: ["bye", "goodbye", "see you", "later", "done", "no thanks", "that's all"],
    response: `Thank you for visiting Webco! 👋\n\nWhenever you're ready to transform your business with AI, we're just a message away.\n\n📧 ${COMPANY.email}\n📞 ${COMPANY.phones[0]}\n\nHave a great day!`,
    quickReplies: [
      { label: "Book Demo Before You Go", value: "How can I book a free demo?" },
    ],
  },
];

// ─── Engine ───────────────────────────────────────────────────────────────────

function normalize(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9 ]/g, " ").replace(/\s+/g, " ").trim();
}

function scoreIntent(input: string, intent: Intent): number {
  const normalized = normalize(input);
  let score = 0;
  for (const kw of intent.keywords) {
    if (normalized.includes(kw)) {
      // Longer keyword matches score higher
      score += kw.split(" ").length * 2;
    }
  }
  return score;
}

const FALLBACK_RESPONSES = [
  `I'm not sure I fully understood that. Could you rephrase? You can ask me about:\n\n• Our **services** (AI chatbots, websites, automation)\n• **Pricing** (Starter, Professional, Enterprise)\n• **Industries** we serve (15+ sectors)\n• How to **book a free demo**\n• Our **contact information**`,
  `I don't have a specific answer for that, but I can help with questions about our services, pricing, industries, or how to get in touch. What would you like to know?`,
  `That's outside what I can help with right now. For detailed questions, please reach out to our team directly:\n\n📧 ${COMPANY.email}\n📞 ${COMPANY.phones[0]}\n\nOr I can answer questions about our services, pricing, and how AI chatbots work.`,
];
let fallbackIndex = 0;

export function getBotResponse(userInput: string): { text: string; quickReplies?: QuickReply[] } {
  const trimmed = userInput.trim();
  if (!trimmed) {
    return { text: "Please type a message and I'll do my best to help!" };
  }

  // Find best matching intent
  let bestScore = 0;
  let bestIntent: Intent | null = null;

  for (const intent of INTENTS) {
    const score = scoreIntent(trimmed, intent);
    if (score > bestScore) {
      bestScore = score;
      bestIntent = intent;
    }
  }

  // Minimum confidence threshold
  if (bestIntent && bestScore >= 2) {
    const text = typeof bestIntent.response === "function"
      ? bestIntent.response(trimmed)
      : bestIntent.response;
    return { text, quickReplies: bestIntent.quickReplies };
  }

  // Fallback
  const fallback = FALLBACK_RESPONSES[fallbackIndex % FALLBACK_RESPONSES.length];
  fallbackIndex++;
  return {
    text: fallback,
    quickReplies: [
      { label: "Our Services", value: "What services do you offer?" },
      { label: "Pricing", value: "What are your pricing plans?" },
      { label: "Book a Demo", value: "How can I book a free demo?" },
      { label: "Contact Us", value: "How can I contact you?" },
    ],
  };
}

export function getWelcomeMessage(): ChatMessage {
  return {
    id: "welcome",
    role: "bot",
    text: `👋 Hi! I'm **Webco's AI assistant**.\n\nI can answer questions about our AI chatbot services, pricing, the industries we serve, and how to get started.\n\nWhat can I help you with today?`,
    timestamp: new Date(),
    quickReplies: [
      { label: "Our Services", value: "What services do you offer?" },
      { label: "Pricing Plans", value: "What are your pricing plans?" },
      { label: "Book Free Demo", value: "How can I book a free demo?" },
      { label: "Industries We Serve", value: "What industries do you serve?" },
    ],
  };
}

export function generateId(): string {
  return Math.random().toString(36).slice(2, 9);
}
