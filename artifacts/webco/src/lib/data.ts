import {
  Bot,
  Globe,
  HeadphonesIcon,
  MessageSquare,
  CalendarCheck,
  Smartphone,
  HelpCircle,
  Zap,
  Network,
  Cog,
  Sun,
  Home,
  Sparkles,
  Wrench,
  Thermometer,
  Zap as Power,
  Stethoscope,
  Cross,
  Scale,
  Utensils,
  Hotel,
  Dumbbell,
  Wrench as Tools,
  Building2,
  HardHat
} from "lucide-react";

export const services = [
  {
    id: "ai-chatbot-development",
    icon: Bot,
    name: "AI Chatbot Development",
    shortDescription: "Custom AI chatbots trained on your business data for intelligent interactions.",
    description: "We build bespoke AI conversational agents trained specifically on your company's knowledge base, website, and documentation. These aren't just scripted bots—they understand context, intent, and nuance, providing human-like responses to complex queries.",
    benefits: [
      "Trained on your specific business data",
      "Natural language understanding",
      "Seamless human handoff when needed",
      "Continuous learning from interactions"
    ]
  },
  {
    id: "business-website-development",
    icon: Globe,
    name: "Business Website Development",
    shortDescription: "High-converting, performance-optimized professional websites.",
    description: "Your digital storefront needs to perform. We develop enterprise-grade websites that combine stunning aesthetics with rigorous conversion rate optimization. Fast, accessible, and designed to generate leads.",
    benefits: [
      "Lightning-fast load times",
      "Mobile-first responsive design",
      "Conversion rate optimized",
      "Enterprise-grade security"
    ]
  },
  {
    id: "ai-customer-support",
    icon: HeadphonesIcon,
    name: "AI Customer Support",
    shortDescription: "24/7 automated support that resolves 80% of customer queries instantly.",
    description: "Transform your support operations with AI that never sleeps. Our support chatbots handle tier-1 inquiries, process returns, track orders, and answer product questions, reducing your support ticket volume dramatically.",
    benefits: [
      "Instant response times 24/7",
      "Reduces support costs by up to 60%",
      "Consistent, accurate brand voice",
      "Scales infinitely during traffic spikes"
    ]
  },
  {
    id: "lead-generation-chatbot",
    icon: MessageSquare,
    name: "Lead Generation Chatbot",
    shortDescription: "Capture, qualify, and route leads automatically around the clock.",
    description: "Stop losing leads who visit your site after hours. Our lead generation bots engage visitors, ask qualifying questions, collect contact information, and route high-value prospects directly to your sales team.",
    benefits: [
      "24/7 lead capture",
      "Automated prospect qualification",
      "Instant CRM data entry",
      "Higher conversion rates than static forms"
    ]
  },
  {
    id: "appointment-booking",
    icon: CalendarCheck,
    name: "Appointment Booking Bot",
    shortDescription: "Smart booking system seamlessly integrated with your calendar.",
    description: "Eliminate the back-and-forth of scheduling. Our booking bots check real-time availability, schedule appointments, send confirmations, and handle rescheduling—all through a conversational interface.",
    benefits: [
      "Frictionless scheduling experience",
      "Reduces no-shows with automated reminders",
      "Syncs across Google, Outlook, and CRM calendars",
      "Handles timezone conversions automatically"
    ]
  },
  {
    id: "whatsapp-chatbot",
    icon: Smartphone,
    name: "WhatsApp Chatbot",
    shortDescription: "Reach and support customers where they already spend their time.",
    description: "Bring your AI directly to the world's most popular messaging app. We build verified WhatsApp business bots that handle sales, support, and marketing on the platform your customers prefer.",
    benefits: [
      "Higher open and engagement rates",
      "Rich media support (images, documents)",
      "Secure end-to-end encryption",
      "Proactive notification capabilities"
    ]
  },
  {
    id: "ai-faq-bot",
    icon: HelpCircle,
    name: "AI FAQ Bot",
    shortDescription: "Instantly answer common questions at any hour with precision.",
    description: "Turn your static FAQ page into an interactive concierge. The AI FAQ bot understands the intent behind customer questions, delivering precise answers rather than forcing users to scroll through long lists.",
    benefits: [
      "Eliminates repetitive support questions",
      "Multilingual support capabilities",
      "Rich formatting with links and images",
      "Analytics on most-asked questions"
    ]
  },
  {
    id: "website-automation",
    icon: Zap,
    name: "Website Automation",
    shortDescription: "Automate workflows, syncing, and repetitive digital tasks.",
    description: "Connect your website to your operational tools. We build intelligent bridges between your site and your business software, ensuring data flows seamlessly without manual entry.",
    benefits: [
      "Eliminates manual data entry",
      "Reduces human error",
      "Real-time data synchronization",
      "Frees team for high-value work"
    ]
  },
  {
    id: "crm-integration",
    icon: Network,
    name: "CRM Integration",
    shortDescription: "Connect AI capabilities to your existing CRM infrastructure seamlessly.",
    description: "Make your CRM smarter. We integrate AI capabilities directly into Salesforce, HubSpot, Zoho, and others, ensuring every interaction is logged and every insight is captured in your system of record.",
    benefits: [
      "Centralized customer data",
      "Automated interaction logging",
      "Enriched lead profiles",
      "Trigger-based workflow automation"
    ]
  },
  {
    id: "business-automation",
    icon: Cog,
    name: "Business Automation",
    shortDescription: "End-to-end operational automation leveraging the latest AI models.",
    description: "Transform how your business operates. We analyze your workflows and deploy custom AI agents to handle document processing, data extraction, report generation, and other time-consuming operational tasks.",
    benefits: [
      "Massive operational efficiency gains",
      "Predictable, scalable processes",
      "Cost reduction across departments",
      "Faster turnaround times for clients"
    ]
  }
];

export const industries = [
  {
    name: "Solar Installers",
    slug: "solar",
    icon: Sun,
    tagline: "Accelerate your solar sales pipeline with AI.",
    heroDescription: "In the competitive solar market, speed to lead is everything. Our AI chatbots qualify homeowners, calculate estimates, and book site visits instantly.",
    problems: ["High volume of unqualified leads wasting sales time", "Complex qualification process for solar eligibility", "Losing leads to competitors who respond faster"],
    solutions: ["Automated pre-qualification chat flows based on location and bill size", "Instant preliminary ROI estimates delivered via chat", "24/7 automated site survey scheduling"],
    benefits: [
      "300% increase in lead response speed",
      "40% reduction in unqualified appointments",
      "24/7 lead capture capability",
      "Seamless CRM integration for sales teams"
    ],
    faqs: [
      { q: "Can the bot calculate solar estimates?", a: "Yes, by asking for zip code and average power bill, the bot can provide preliminary estimates using integrated APIs." },
      { q: "Does it integrate with our CRM?", a: "Absolutely. We integrate directly with HubSpot, Salesforce, GoHighLevel, and specialized solar CRMs." },
      { q: "Can it book site surveys?", a: "Yes, the bot connects to your team's calendar to schedule initial calls or site surveys automatically." }
    ]
  },
  {
    name: "Real Estate",
    slug: "real-estate",
    icon: Home,
    tagline: "Never miss a property inquiry again.",
    heroDescription: "Real estate moves fast. Our AI agents handle property inquiries, schedule viewings, and capture lead details 24/7, keeping your pipeline full.",
    problems: ["Inquiries coming in at all hours", "Agents bogged down answering basic property details", "Inconsistent lead follow-up"],
    solutions: ["24/7 instant response to property inquiries", "Automated answers about pricing, specs, and availability", "Smart scheduling for property viewings"],
    benefits: [
      "Zero missed leads after hours",
      "Agents save 15+ hours weekly on basic inquiries",
      "Higher conversion rate on web traffic",
      "Automated lead nurturing sequences"
    ],
    faqs: [
      { q: "Can the bot show specific properties?", a: "Yes, it can pull listings directly from your MLS or website database to show relevant properties based on user criteria." },
      { q: "How does it handle agent routing?", a: "High-value leads or users requesting a human are instantly routed to the available agent via SMS or email." },
      { q: "Does it work on WhatsApp?", a: "Yes, our real estate bots work seamlessly across your website, WhatsApp, and Facebook Messenger." }
    ]
  },
  {
    name: "Cleaning Services",
    slug: "cleaning",
    icon: Sparkles,
    tagline: "Automate quotes and bookings for your cleaning business.",
    heroDescription: "Stop calculating quotes over the phone. Let AI handle pricing inquiries, schedule cleanings, and manage recurring appointments automatically.",
    problems: ["Time wasted giving standard quotes over the phone", "Back-and-forth required to schedule cleanings", "Managing reschedules and cancellations"],
    solutions: ["Instant AI-driven quoting based on square footage and requirements", "Direct calendar integration for instant booking", "Automated management of recurring appointments"],
    benefits: [
      "Instant quoting 24/7",
      "Frictionless booking experience",
      "Reduced administrative overhead",
      "Automated review requests post-cleaning"
    ],
    faqs: [
      { q: "Can it handle custom quoting rules?", a: "Yes, we program the bot with your exact pricing matrix based on size, condition, and service type." },
      { q: "Does it handle payments?", a: "We can integrate Stripe to collect deposits or full payments directly within the chat interface." },
      { q: "Can customers reschedule through the bot?", a: "Yes, verified customers can modify their appointments through the bot, updating your calendar instantly." }
    ]
  },
  {
    name: "Plumbing",
    slug: "plumbing",
    icon: Wrench,
    tagline: "Triage emergencies and book service calls automatically.",
    heroDescription: "When a pipe bursts at 2 AM, customers need immediate reassurance. Our AI agents triage emergencies, book standard calls, and dispatch information instantly.",
    problems: ["High volume of emergency calls after hours", "Difficulty prioritizing urgent vs non-urgent jobs", "Lost revenue from missed calls while on the job"],
    solutions: ["Intelligent triage system distinguishing emergencies from routine maintenance", "Automated dispatch alerts for on-call technicians", "Direct calendar booking for standard service calls"],
    benefits: [
      "Capture 100% of after-hours emergency leads",
      "Automated job prioritization",
      "Zero missed opportunities while technicians are busy",
      "Professional, instant communication"
    ],
    faqs: [
      { q: "How does it handle real emergencies?", a: "The bot uses keyword analysis to identify emergencies (e.g., 'burst pipe') and instantly SMS alerts your on-call technician." },
      { q: "Can it provide estimates?", a: "It can provide your standard diagnostic fee or hourly rate, while clarifying that final quotes require on-site inspection." },
      { q: "Does it integrate with ServiceTitan?", a: "Yes, we integrate with ServiceTitan, Housecall Pro, and other field service management software." }
    ]
  },
  {
    name: "HVAC",
    slug: "hvac",
    icon: Thermometer,
    tagline: "Streamline dispatching and seasonal maintenance bookings.",
    heroDescription: "Beat the seasonal rush with AI. Automate your maintenance scheduling, troubleshoot basic issues, and capture installation leads around the clock.",
    problems: ["Overwhelming call volume during extreme weather", "Inefficient scheduling of seasonal maintenance", "Time wasted on basic troubleshooting steps"],
    solutions: ["Automated high-volume booking during peak seasons", "Proactive outreach for seasonal maintenance", "Step-by-step AI troubleshooting before dispatch"],
    benefits: [
      "Handle infinite simultaneous inquiries during heatwaves",
      "Higher contract renewal rates",
      "Reduced unnecessary truck rolls",
      "Automated financing applications"
    ],
    faqs: [
      { q: "Can the bot help customers troubleshoot?", a: "Yes, it can guide users through basic checks (filters, thermostat batteries) before booking a costly service call." },
      { q: "How does it handle seasonal rushes?", a: "The AI scales infinitely, meaning whether you have 5 or 500 people asking for service simultaneously, everyone gets an instant response." },
      { q: "Does it offer financing options?", a: "Yes, it can introduce financing options for new installs and link directly to your credit application." }
    ]
  },
  {
    name: "Electrical Services",
    slug: "electrical",
    icon: Power,
    tagline: "Spark growth with automated electrical service bookings.",
    heroDescription: "Modernize your electrical contracting business. Use AI to collect project details, triage urgent faults, and schedule estimates efficiently.",
    problems: ["Incomplete information provided by customers", "Safety risks with delayed responses to faults", "Administrative burden of scheduling estimates"],
    solutions: ["Guided intake process capturing necessary project details", "Urgent fault triage and escalation", "Automated calendar synchronization for estimators"],
    benefits: [
      "Technicians arrive with full project context",
      "Faster response to critical safety issues",
      "Reduced office administrative time",
      "Professional digital storefront"
    ],
    faqs: [
      { q: "Can it ask for photos of the electrical panel?", a: "Yes, the bot can instruct users to upload photos of their panel or the issue, attaching them to the work order." },
      { q: "How does it route commercial vs residential?", a: "Through intelligent questioning, it routes commercial bids to specific estimators and residential calls to service technicians." },
      { q: "Is it difficult to set up?", a: "We handle the entire setup process. We just need your service list, pricing structure, and team calendars." }
    ]
  },
  {
    name: "Dental Clinics",
    slug: "dental",
    icon: Cross,
    tagline: "Fill your chairs with automated patient scheduling.",
    heroDescription: "Reduce front desk overwhelm. Our HIPAA-compliant AI agents schedule cleanings, answer insurance questions, and send appointment reminders.",
    problems: ["Front desk overwhelmed with calls", "High appointment no-show rates", "Complex insurance queries taking up staff time"],
    solutions: ["Automated scheduling integrated with practice management software", "AI-driven insurance verification assistance", "Smart automated reminders and waitlist management"],
    benefits: [
      "Reduced front-desk phone volume by 40%",
      "Significantly lower no-show rates",
      "Filled last-minute cancellations automatically",
      "24/7 patient booking capability"
    ],
    faqs: [
      { q: "Is the chatbot HIPAA compliant?", a: "Yes, we use HIPAA-compliant infrastructure and ensure no sensitive PHI is stored improperly." },
      { q: "Can it integrate with Dentrix or Eaglesoft?", a: "We utilize API bridges to connect with major dental practice management systems." },
      { q: "How does it handle dental emergencies?", a: "Emergency keywords trigger an immediate escalation protocol, instructing the patient and alerting the on-call dentist." }
    ]
  },
  {
    name: "Medical Clinics",
    slug: "medical",
    icon: Stethoscope,
    tagline: "Enhance patient access with AI-driven front desk operations.",
    heroDescription: "Provide a modern patient experience. Automate appointment booking, provide clinic information, and direct non-clinical queries instantly.",
    problems: ["Long hold times frustrating patients", "Staff burnt out by repetitive administrative questions", "Inefficient intake processes"],
    solutions: ["24/7 conversational booking and rescheduling", "Instant answers to clinic hours, policies, and locations", "Automated distribution of digital intake forms"],
    benefits: [
      "Zero patient hold times",
      "Staff freed to focus on in-clinic patients",
      "Streamlined intake workflow",
      "Improved patient satisfaction scores"
    ],
    faqs: [
      { q: "Does the AI give medical advice?", a: "No. The AI is strictly programmed to handle administrative tasks and explicitly states it cannot provide medical advice." },
      { q: "Is it secure?", a: "We employ enterprise-grade security and strict data processing agreements to ensure compliance." },
      { q: "Can it handle prescription refill requests?", a: "It can collect the necessary information and route the request securely to your clinical team for approval." }
    ]
  },
  {
    name: "Law Firms",
    slug: "law",
    icon: Scale,
    tagline: "Automate client intake and qualify leads 24/7.",
    heroDescription: "Secure high-value clients before your competitors. Our AI performs initial intake, checks for conflicts, and schedules consultations securely.",
    problems: ["High cost of manual client intake", "Losing potential clients after business hours", "Time wasted on cases outside firm's practice areas"],
    solutions: ["Intelligent, conversational intake questionnaires", "24/7 instant response to inquiries", "Automated practice area qualification and routing"],
    benefits: [
      "Standardized, thorough intake data",
      "Zero missed opportunities after hours",
      "Attorneys only speak with qualified prospects",
      "Professional, empathetic initial contact"
    ],
    faqs: [
      { q: "How does it maintain confidentiality?", a: "All conversations are encrypted, and we can configure data retention policies to meet legal ethics requirements." },
      { q: "Can it schedule consultations?", a: "Yes, it can integrate with your calendar, collect consultation fees via Stripe, and book the appointment." },
      { q: "What happens if a user asks for legal advice?", a: "The bot is trained to provide legal information, not advice, and will appropriately direct the user to schedule a consultation." }
    ]
  },
  {
    name: "Restaurants",
    slug: "restaurant",
    icon: Utensils,
    tagline: "Automate reservations and answer menu questions instantly.",
    heroDescription: "Stop letting the phone ring during the dinner rush. Let AI handle reservations, dietary questions, and takeout orders seamlessly.",
    problems: ["Phone ringing unanswered during peak hours", "Staff distracted by basic menu or hours questions", "Inefficient reservation management"],
    solutions: ["Automated table booking integrated with your reservation system", "Instant answers regarding menu items, allergens, and hours", "Integration with online ordering platforms"],
    benefits: [
      "Staff focus entirely on present guests",
      "Maximized table utilization",
      "Clear communication of dietary options",
      "Capture every takeout inquiry"
    ],
    faqs: [
      { q: "Does it integrate with OpenTable or Resy?", a: "Yes, we integrate with major reservation platforms to show real-time availability." },
      { q: "Can it handle large party requests?", a: "It can process standard reservations directly and collect detailed requirements for private events to send to your event manager." },
      { q: "Can it answer allergy questions?", a: "Yes, we train the AI on your specific menu and ingredient lists to accurately answer dietary restriction queries." }
    ]
  },
  {
    name: "Hotels",
    slug: "hotel",
    icon: Hotel,
    tagline: "Provide a 24/7 AI concierge for your guests.",
    heroDescription: "Elevate the guest experience. An AI concierge handles pre-arrival questions, room service requests, and local recommendations instantly.",
    problems: ["Front desk overwhelmed with routine guest questions", "Missed upsell opportunities pre-arrival", "Language barriers with international guests"],
    solutions: ["24/7 digital concierge for amenities and local info", "Automated pre-stay upsell campaigns via WhatsApp", "Real-time multilingual translation"],
    benefits: [
      "Higher guest satisfaction scores",
      "Increased revenue from amenity upsells",
      "Reduced strain on front desk staff",
      "Seamless communication in any language"
    ],
    faqs: [
      { q: "Can guests use it without downloading an app?", a: "Yes, guests can access the AI via WhatsApp, SMS, or scanning a QR code in their room." },
      { q: "Can it handle room service orders?", a: "It can display the menu, take the order, and route it directly to the kitchen or POS system." },
      { q: "Does it connect to our PMS?", a: "We integrate with leading Property Management Systems to verify guests and access booking details." }
    ]
  },
  {
    name: "Gyms",
    slug: "gym",
    icon: Dumbbell,
    tagline: "Automate membership sales and class bookings.",
    heroDescription: "Turn website traffic into members. Our AI agents answer facility questions, offer trial passes, and book personal training sessions.",
    problems: ["High volume of repetitive questions about hours and pricing", "Friction in the trial sign-up process", "Managing class cancellations and waitlists"],
    solutions: ["Instant answers to facility, class, and pricing queries", "Frictionless digital trial pass generation", "Automated class booking and waitlist management"],
    benefits: [
      "Increased conversion of website visitors to trials",
      "Reduced administrative work for front desk",
      "Higher class attendance rates",
      "24/7 membership inquiry handling"
    ],
    faqs: [
      { q: "Can it sell memberships directly?", a: "Yes, it can guide users to your membership portal or process sign-ups directly within the chat." },
      { q: "Does it integrate with Mindbody?", a: "Yes, we integrate fully with Mindbody, Zen-Planner, and other fitness management software." },
      { q: "Can members use it to cancel classes?", a: "Yes, members can manage their schedule through the bot, automatically advancing the waitlist." }
    ]
  },
  {
    name: "Home Services",
    slug: "home-services",
    icon: Tools,
    tagline: "Streamline dispatch and quoting for your service business.",
    heroDescription: "Landscapers, painters, and general contractors: use AI to qualify leads, gather project scopes, and schedule estimates automatically.",
    problems: ["Wasting time driving to unqualified estimates", "Incomplete project details from initial inquiries", "Losing leads due to slow response times"],
    solutions: ["AI-driven project scope qualification", "Automated photo collection for remote estimating", "Instant scheduling for on-site visits"],
    benefits: [
      "Only visit highly qualified, serious leads",
      "Detailed project briefs before you arrive",
      "Win more jobs with instant responses",
      "Professionalize your initial customer contact"
    ],
    faqs: [
      { q: "Can the bot collect project photos?", a: "Yes, the bot instructs leads to upload photos of their yard, walls, or project area for better quoting." },
      { q: "How do I update my pricing?", a: "You have access to a dashboard where you can adjust the knowledge base the AI uses for its answers." },
      { q: "Does it work via text message?", a: "Yes, we can deploy the AI on an SMS number, allowing customers to text you directly." }
    ]
  },
  {
    name: "Property Management",
    slug: "property-management",
    icon: Building2,
    tagline: "Automate tenant support and maintenance requests.",
    heroDescription: "Manage more doors with less stress. Let AI handle routine tenant questions, process maintenance tickets, and coordinate viewings.",
    problems: ["High volume of non-urgent tenant communications", "Inefficient maintenance ticket intake", "Time wasted scheduling prospect viewings"],
    solutions: ["24/7 automated answers to lease and policy questions", "Guided maintenance triage and ticket creation", "Automated viewing scheduling for available units"],
    benefits: [
      "Significant reduction in property manager workload",
      "Standardized, complete maintenance requests",
      "Faster leasing cycles",
      "Improved tenant satisfaction"
    ],
    faqs: [
      { q: "How does it handle emergency maintenance?", a: "The AI triages requests based on urgency. True emergencies immediately alert the on-call team, while standard issues create a ticket." },
      { q: "Can it integrate with Buildium or AppFolio?", a: "Yes, we integrate with major property management software to access tenant records and create work orders." },
      { q: "Can it help collect rent?", a: "It can send automated reminders and provide secure links for tenants to pay their balance online." }
    ]
  },
  {
    name: "Construction",
    slug: "construction",
    icon: HardHat,
    tagline: "Qualify commercial bids and automate sub-contractor intake.",
    heroDescription: "Streamline your pre-construction process. Use AI to handle preliminary bid qualifications, manage vendor inquiries, and capture high-value project leads.",
    problems: ["Sifting through unqualified project inquiries", "Managing communications with numerous subcontractors", "Delays in responding to high-value RFPs"],
    solutions: ["Automated preliminary qualification of incoming projects", "Standardized vendor/subcontractor intake flows", "Instant routing of critical documents and plans"],
    benefits: [
      "Estimators focus only on viable projects",
      "Organized subcontractor database",
      "Professional corporate image",
      "Faster initial response to major bids"
    ],
    faqs: [
      { q: "Can it handle document uploads?", a: "Yes, it can accept initial project briefs, RFPs, and basic plans securely." },
      { q: "Is it suitable for commercial or residential?", a: "We customize the logic for both. For commercial, it focuses on scope and timeline; for residential, it focuses on budget and design intent." },
      { q: "Can it integrate with Procore?", a: "We can build custom integrations with Procore and other construction management platforms." }
    ]
  }
];

export const pricingTiers = [
  {
    id: "starter",
    name: "Starter",
    price: "$297",
    period: "/mo",
    description: "Perfect for small businesses looking to automate basic inquiries.",
    features: [
      "Up to 500 conversations/mo",
      "Standard AI Chatbot model",
      "Website Integration",
      "Email Support",
      "1 CRM Integration",
      "Basic Analytics"
    ],
    popular: false,
    cta: "Start Free Trial"
  },
  {
    id: "professional",
    name: "Professional",
    price: "$697",
    period: "/mo",
    description: "For growing businesses needing omnichannel AI automation.",
    features: [
      "Unlimited conversations",
      "Advanced AI (GPT-4 tier)",
      "Website + WhatsApp Integration",
      "Priority Support",
      "Unlimited Integrations",
      "Advanced Analytics Dashboard",
      "Lead Generation Flows",
      "Custom Brand Voice"
    ],
    popular: true,
    cta: "Book Demo"
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "$1,497",
    period: "/mo",
    description: "For scaling companies requiring deep customization and high volume.",
    features: [
      "Everything in Professional",
      "Custom Model Training",
      "Dedicated Account Manager",
      "SLA Guarantee (99.9% Uptime)",
      "Custom API Integrations",
      "On-premise deployment options",
      "Multi-agent orchestration",
      "Quarterly strategy reviews"
    ],
    popular: false,
    cta: "Contact Sales"
  },
  {
    id: "custom",
    name: "Custom Quote",
    price: "Custom",
    period: "",
    description: "For complex enterprise requirements and global deployments.",
    features: [
      "Custom security requirements",
      "HIPAA / SOC2 compliance",
      "Multiple subsidiary rollouts",
      "White-label options",
      "Full source-code buyout options"
    ],
    popular: false,
    cta: "Talk to Expert"
  }
];

export const portfolioProjects = [
  {
    id: "solarbot-pro",
    name: "SolarBot Pro",
    industry: "Solar Energy",
    category: "Chatbots",
    metric: "2 mins",
    metricLabel: "Response Time",
    description: "Lead generation chatbot for a leading regional solar installation company. Reduced average response time from 2 days to 2 minutes, increasing qualified leads by 145%.",
  },
  {
    id: "dentabook-ai",
    name: "DentaBook AI",
    industry: "Healthcare",
    category: "Automation",
    metric: "340%",
    metricLabel: "Increase in Bookings",
    description: "End-to-end appointment booking chatbot integrated directly with Eaglesoft for a multi-location dental chain. Eliminated hold times entirely.",
  },
  {
    id: "lawfirm-assistant",
    name: "Legal Intake Agent",
    industry: "Legal Services",
    category: "Chatbots",
    metric: "200+",
    metricLabel: "Daily Inquiries",
    description: "Secure, confidential AI client intake chatbot for a national personal injury law firm. Processes inquiries 24/7 and instantly flags high-value cases to partners.",
  },
  {
    id: "hotel-concierge",
    name: "LuxeStay Concierge",
    industry: "Hospitality",
    category: "Websites",
    metric: "94%",
    metricLabel: "Guest Satisfaction",
    description: "Multilingual 24/7 hotel guest support chatbot available via WhatsApp and in-room QR codes. Handles room service, maintenance requests, and local recommendations.",
  },
  {
    id: "realestate-bot",
    name: "PropertyGenius",
    industry: "Real Estate",
    category: "Chatbots",
    metric: "280%",
    metricLabel: "More Qualified Leads",
    description: "Dynamic property inquiry chatbot connected to MLS data. Answers specific property questions and schedules viewings directly on agent calendars.",
  },
  {
    id: "restaurant-bot",
    name: "Bistro AI",
    industry: "Food & Beverage",
    category: "Automation",
    metric: "1,000+",
    metricLabel: "Weekly Conversations",
    description: "Table booking and FAQ chatbot for a high-volume restaurant group. Manages reservations, waitlists, and answers complex dietary questions instantly.",
  }
];

export const testimonials = [
  {
    id: 1,
    quote: "Webco transformed our lead intake. Before, we were losing solar leads who submitted forms at night. Now, the AI qualifies them and books appointments while we sleep. It's paid for itself 100x over.",
    name: "Michael Chen",
    title: "CEO",
    company: "SunPeak Energy",
    rating: 5
  },
  {
    id: 2,
    quote: "The WhatsApp bot Webco built for our clinic handles 80% of routine questions. Our front desk staff finally has time to actually focus on the patients sitting in front of them.",
    name: "Dr. Sarah Jenkins",
    title: "Lead Practitioner",
    company: "Westside Dental Group",
    rating: 5
  },
  {
    id: 3,
    quote: "We were skeptical about AI sounding robotic. Webco trained it perfectly on our brand voice. Customers literally think they are talking to a highly knowledgeable human.",
    name: "Marcus Rodriguez",
    title: "Director of Operations",
    company: "Elite Property Management",
    rating: 5
  },
  {
    id: 4,
    quote: "Implementation took less than two weeks. The transition was flawless, and the analytics dashboard gives us insights into customer needs we never had before.",
    name: "Jessica Thorne",
    title: "CMO",
    company: "Boutique Hotel Collection",
    rating: 5
  }
];

export const faqs = [
  {
    q: "What exactly is an AI chatbot?",
    a: "An AI chatbot is a software application powered by Large Language Models (like GPT-4) that can simulate human conversation. Unlike old rule-based bots that forced users to click buttons, our AI understands natural language context, nuance, and intent to provide highly accurate, conversational answers."
  },
  {
    q: "How long does it take to deploy a custom bot?",
    a: "For most standard business implementations, we go from discovery call to live deployment in 14 days. Complex enterprise integrations or highly customized workflows may take 4-6 weeks."
  },
  {
    q: "Do I need technical skills to manage it?",
    a: "Not at all. We handle the entire build, training, and deployment. You receive access to a simple dashboard to view analytics, read transcripts, and update your business information if things change."
  },
  {
    q: "Can the chatbot integrate with my existing CRM?",
    a: "Yes. We specialize in deep integrations. We routinely connect our AI agents with Salesforce, HubSpot, GoHighLevel, ServiceTitan, and custom internal tools via API."
  },
  {
    q: "Does it work on WhatsApp or just my website?",
    a: "We build omnichannel solutions. Your AI agent can live simultaneously on your website, WhatsApp Business account, Facebook Messenger, Instagram, and even SMS."
  },
  {
    q: "Is my business data secure?",
    a: "Absolutely. We employ enterprise-grade security protocols. Your proprietary business data is used strictly for generating answers for your users—it is never used to train public foundation models. We offer HIPAA-compliant setups for healthcare clients."
  },
  {
    q: "What if the AI doesn't know the answer?",
    a: "We build seamless fallback protocols. If the AI encounters a question outside its training parameters, it gracefully admits it doesn't know and immediately routes the conversation to a human agent or collects contact info for follow-up."
  },
  {
    q: "What is the typical ROI?",
    a: "While it varies by industry, our clients typically see a 30-40% increase in lead capture from existing web traffic and a 50-70% reduction in tier-1 support costs. The ROI is usually realized within the first 60 days."
  }
];
