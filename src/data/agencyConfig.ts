export type PortfolioCategory =
  | 'ALL'
  | 'BUSINESS'
  | 'SCHOOL'
  | 'E-COMMERCE'
  | 'HEALTHCARE'
  | 'ORGANIZATION'
  | 'TECHNOLOGY'
  | 'PORTFOLIO';

export interface StatItem {
  id: string;
  value: string;
  label: string;
  note: string;
  isEditablePlaceholder?: boolean;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  iconKey:
    | 'building'
    | 'graduation'
    | 'cart'
    | 'heart'
    | 'globe'
    | 'utensils'
    | 'user'
    | 'truck'
    | 'home'
    | 'code';
  highlights: string[];
  whatsappMessage: string;
}

export interface PortfolioProject {
  id: string;
  name: string;
  url: string;
  domain: string;
  category: Exclude<PortfolioCategory, 'ALL'>;
  description: string;
  featured?: boolean;
  preview: {
    accentFrom: string;
    accentTo: string;
    surfaceBg: string;
    layoutStyle: 'corporate' | 'academy' | 'storefront' | 'clinic' | 'foundation' | 'webapp' | 'portfolio';
    headline: string;
    subline: string;
    primaryLabel: string;
  };
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  iconKey:
    | 'layout'
    | 'smartphone'
    | 'zap'
    | 'wallet'
    | 'search'
    | 'shield'
    | 'headphones'
    | 'sliders'
    | 'message'
    | 'wrench';
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  organization: string;
  role: string;
  rating: number;
  review: string;
  projectUrl?: string;
  projectLabel?: string;
  avatarUrl?: string;
  isPlaceholder: boolean;
}

export interface PricingPackage {
  id: string;
  name: string;
  subtitle: string;
  priceNgn: string;
  priceNote: string;
  deliveryTimeline: string;
  recommended?: boolean;
  features: string[];
  whatsappMessage: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

/**
 * CENTRAL AGENCY CONFIGURATION
 * Edit agency details, WhatsApp number, statistics, portfolio entries,
 * testimonials, and Nigerian Naira pricing packages directly in this file.
 */
export const AGENCY_CONFIG = {
  brandName: 'Madu Digital',
  shortTagline: 'Building Digital Experiences. Empowering Businesses. Creating Opportunities.',
  shortDescription:
    'An international-grade digital studio crafting fast, mobile-friendly, conversion-focused websites and custom web applications for businesses, schools, hospitals, and organizations.',
  heroTrustIndicator: 'Professional Website Solutions for Businesses, Schools and Organizations.',
  locationLabel: 'Lagos & Nationwide, Nigeria · Serving Clients Worldwide',
  /**
   * Configurable WhatsApp number in international format without '+' sign.
   * Local 08129041919 -> 2348129041919
   */
  whatsappNumber: '2348129041919',
  defaultWhatsappGreeting:
    "Hello! I visited your website and I'm interested in building a professional website for my business. Please tell me more about your services and pricing.",
  contactEmailPlaceholder: 'hello@madudigital.example.com',
  contactPhonePlaceholder: '+234 812 904 1919',
  socialLinks: [
    { label: 'WhatsApp', href: 'https://wa.me/2348129041919' },
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'X (Twitter)', href: 'https://x.com' },
  ],
};

export function buildWhatsAppUrl(customMessage?: string): string {
  const message = customMessage?.trim() || AGENCY_CONFIG.defaultWhatsappGreeting;
  return `https://wa.me/${AGENCY_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Editable Trust & Credibility Statistics
 * Update labels/values as agency milestones evolve.
 */
export const TRUST_STATS: StatItem[] = [
  {
    id: 'projects',
    value: '40+',
    label: 'Website Projects',
    note: '42 verified live deployments in our showcase',
    isEditablePlaceholder: false,
  },
  {
    id: 'industries',
    value: '7+ Sectors',
    label: 'Multiple Industries Served',
    note: 'Business, Education, Healthcare, Retail, NGOs & Tech',
    isEditablePlaceholder: true,
  },
  {
    id: 'responsive',
    value: '100%',
    label: 'Mobile-Friendly Designs',
    note: 'Built for Android, iPhone, tablet, and desktop viewports',
    isEditablePlaceholder: true,
  },
  {
    id: 'support',
    value: 'Direct',
    label: 'Customer-Focused Solutions',
    note: 'Tailored around your exact goals and handover needs',
    isEditablePlaceholder: true,
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'business',
    number: '01',
    title: 'Business Websites',
    description:
      'Professional websites for companies, startups, shops, and entrepreneurs designed to earn trust and convert visitors into inquiries.',
    iconKey: 'building',
    highlights: ['Company profile & services', 'WhatsApp & lead forms', 'Google-ready structure'],
    whatsappMessage:
      'Hello! I am interested in getting a Business Website for my company. Please share your process and pricing.',
  },
  {
    id: 'school',
    number: '02',
    title: 'School Websites',
    description:
      'School websites featuring admissions information, announcements, academic programs, photo galleries, portals, and parent contact details.',
    iconKey: 'graduation',
    highlights: ['Admissions & enrollment info', 'Academic calendar & gallery', 'Optional student/CBT portals'],
    whatsappMessage:
      'Hello! I want to build a School Website with admissions and academic features. Please tell me more.',
  },
  {
    id: 'ecommerce',
    number: '03',
    title: 'E-Commerce Websites',
    description:
      'Online stores with structured product catalogs, shopping carts, smooth checkout flows, order tracking, and online payment integration.',
    iconKey: 'cart',
    highlights: ['Product catalog & categories', 'Cart & checkout experience', 'Paystack / Flutterwave ready'],
    whatsappMessage:
      'Hello! I would like to launch an E-Commerce Website for selling products online. Please share details.',
  },
  {
    id: 'hospital',
    number: '04',
    title: 'Hospital & Clinic Websites',
    description:
      'Professional healthcare websites with medical service directories, doctor profiles, appointment booking requests, and clinic contact details.',
    iconKey: 'heart',
    highlights: ['Medical departments & services', 'Appointment request workflow', 'Emergency & clinic directions'],
    whatsappMessage:
      'Hello! I need a Hospital and Clinic Website with appointment requests and service pages. Please advise on getting started.',
  },
  {
    id: 'organization',
    number: '05',
    title: 'Organization & NGO Websites',
    description:
      'Credible websites for foundations, charities, churches, associations, and nonprofit organizations to share impact, events, and outreach.',
    iconKey: 'globe',
    highlights: ['Mission & programs showcase', 'Events & sermons/updates', 'Donation & volunteer inquiries'],
    whatsappMessage:
      'Hello! I am looking for an Organization or NGO Website. Please share your package options.',
  },
  {
    id: 'hospitality',
    number: '06',
    title: 'Hotel & Restaurant Websites',
    description:
      'Inviting websites for hotels, restaurants, catering brands, and culinary storefronts showcasing menus, rooms, and direct bookings.',
    iconKey: 'utensils',
    highlights: ['Menus & catering packages', 'Table or room inquiries', 'Location & event highlights'],
    whatsappMessage:
      'Hello! I want a Hotel or Restaurant Website for my hospitality brand. Can we discuss requirements?',
  },
  {
    id: 'portfolio',
    number: '07',
    title: 'Portfolio & Personal Websites',
    description:
      'Clean personal branding websites for freelancers, consultants, creatives, educators, and executives who want to stand out.',
    iconKey: 'user',
    highlights: ['Work showcase & case studies', 'Bio, services & credentials', 'Direct booking & WhatsApp CTA'],
    whatsappMessage:
      'Hello! I need a Portfolio and Personal Website to showcase my work and attract clients. Please share pricing.',
  },
  {
    id: 'logistics',
    number: '08',
    title: 'Logistics & Transportation Websites',
    description:
      'Reliable websites for logistics, shipping, cargo sourcing, delivery, and transportation companies with clear rate and quote requests.',
    iconKey: 'truck',
    highlights: ['Shipping routes & services', 'Quote & pickup requests', 'Shipment support channels'],
    whatsappMessage:
      'Hello! I need a Logistics and Transportation Website for my delivery/shipping business. Please share details.',
  },
  {
    id: 'realestate',
    number: '09',
    title: 'Real Estate Websites',
    description:
      'Property listing platforms for real estate agencies, developers, and property managers to display verified lands, homes, and inspections.',
    iconKey: 'home',
    highlights: ['Property listings & filters', 'Land/home detail galleries', 'Inspection booking & agent chat'],
    whatsappMessage:
      'Hello! I am interested in a Real Estate Website with property listings and inspection requests. Please tell me more.',
  },
  {
    id: 'custom',
    number: '10',
    title: 'Custom Web Applications',
    description:
      'Interactive web applications, admin dashboards, management systems, member portals, and tailored digital tools built around your workflow.',
    iconKey: 'code',
    highlights: ['Admin & client portals', 'Document / PDF generators', 'Custom databases & workflows'],
    whatsappMessage:
      'Hello! I need a Custom Web Application or portal tailored to my business workflow. Let us discuss the scope.',
  },
];

export const PORTFOLIO_CATEGORIES: { id: PortfolioCategory; label: string }[] = [
  { id: 'ALL', label: 'ALL' },
  { id: 'BUSINESS', label: 'BUSINESS' },
  { id: 'SCHOOL', label: 'SCHOOL' },
  { id: 'E-COMMERCE', label: 'E-COMMERCE' },
  { id: 'HEALTHCARE', label: 'HEALTHCARE' },
  { id: 'ORGANIZATION', label: 'ORGANIZATION' },
  { id: 'TECHNOLOGY', label: 'TECHNOLOGY' },
  { id: 'PORTFOLIO', label: 'PORTFOLIO' },
];

/**
 * Verified, deduplicated live portfolio entries.
 * Every URL below returned HTTP 200 OK upon verification and duplicate deployments were removed.
 */
export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'destiny-fountain',
    name: 'Destiny Fountain Schools',
    url: 'https://destinyfountainschools.com',
    domain: 'destinyfountainschools.com',
    category: 'SCHOOL',
    featured: true,
    description:
      'Premier primary and secondary school website in Ejigbo, Lagos featuring admissions guidance, academic highlights, and parent inquiries.',
    preview: {
      accentFrom: '#1D4ED8',
      accentTo: '#4338CA',
      surfaceBg: '#0F172A',
      layoutStyle: 'academy',
      headline: 'Inspiring Excellence in Ejigbo, Lagos',
      subline: 'Admissions · Academics · Student Life',
      primaryLabel: 'Apply for Admission',
    },
  },
  {
    id: 'glozen',
    name: 'GLOZEN',
    url: 'https://Glozen.vercel.app',
    domain: 'glozen.vercel.app',
    category: 'E-COMMERCE',
    featured: true,
    description:
      'Modern fashion, fragrance, and lifestyle storefront designed with editorial product displays and streamlined shopping navigation.',
    preview: {
      accentFrom: '#7C3AED',
      accentTo: '#2563EB',
      surfaceBg: '#090D1F',
      layoutStyle: 'storefront',
      headline: 'Fashion, Fragrance & Lifestyle',
      subline: 'Curated Collections · Fragrances · Apparel',
      primaryLabel: 'Shop Collection',
    },
  },
  {
    id: 'lionshead-africa',
    name: 'Lionshead Africa Ltd',
    url: 'https://llionsheadafrica.netlify.app',
    domain: 'llionsheadafrica.netlify.app',
    category: 'BUSINESS',
    featured: true,
    description:
      'Nigerian real estate and verified property reservation platform showcasing curated land and residential listings with inspection inquiries.',
    preview: {
      accentFrom: '#0F172A',
      accentTo: '#2563EB',
      surfaceBg: '#0B132B',
      layoutStyle: 'corporate',
      headline: 'Verified Real Estate & Property Reservations',
      subline: 'Lands · Luxury Homes · Verified Titles',
      primaryLabel: 'Explore Properties',
    },
  },
  {
    id: 'mardeeyah-hospital',
    name: 'Mardeeyah Hospital',
    url: 'https://mardeeyahhospital.netlify.app',
    domain: 'mardeeyahhospital.netlify.app',
    category: 'HEALTHCARE',
    featured: true,
    description:
      'Healthcare website and patient portal featuring clinical appointment scheduling, schedule tracking, and automated SMS pass notifications.',
    preview: {
      accentFrom: '#0284C7',
      accentTo: '#1E40AF',
      surfaceBg: '#0A192F',
      layoutStyle: 'clinic',
      headline: 'Patient Care & Clinical Scheduling',
      subline: 'Book Appointment · EHR SMS Pass · Care History',
      primaryLabel: 'Schedule Appointment',
    },
  },
  {
    id: 'rozay-kitchen',
    name: 'Rozay Kitchen',
    url: 'https://rozaykitchen.com.ng',
    domain: 'rozaykitchen.com.ng',
    category: 'E-COMMERCE',
    featured: true,
    description:
      'E-commerce storefront in Lagos specializing in luxury chafing dishes, cookware sets, coolers, and commercial catering equipment.',
    preview: {
      accentFrom: '#2563EB',
      accentTo: '#6D28D9',
      surfaceBg: '#111827',
      layoutStyle: 'storefront',
      headline: 'Premium Kitchenware & Catering Equipment',
      subline: 'Chafing Dishes · Cookware · Commercial Pots',
      primaryLabel: 'Browse Catalog',
    },
  },
  {
    id: 'axson-integrated',
    name: 'Axson Integrated Services',
    url: 'https://www.axsonintegrated.com',
    domain: 'axsonintegrated.com',
    category: 'BUSINESS',
    featured: true,
    description:
      'Corporate engineering website presenting solar energy, CCTV security, UPS power backup, and multi-sector engineering solutions in Nigeria.',
    preview: {
      accentFrom: '#1E3A8A',
      accentTo: '#3B82F6',
      surfaceBg: '#081226',
      layoutStyle: 'corporate',
      headline: 'Solar, CCTV, UPS & Engineering Nigeria',
      subline: 'Power Backup · Surveillance · Engineering',
      primaryLabel: 'Request Engineering Quote',
    },
  },
  {
    id: 'taxidpdf',
    name: 'TaxIDPDF Portal',
    url: 'https://Taxidpdf.com',
    domain: 'taxidpdf.com',
    category: 'TECHNOLOGY',
    featured: true,
    description:
      'Specialized web application converting 13-digit Tax Identification Numbers into structured, bank-ready PDF certificates and slips.',
    preview: {
      accentFrom: '#4F46E5',
      accentTo: '#2563EB',
      surfaceBg: '#090F24',
      layoutStyle: 'webapp',
      headline: '13-Digit TIN to Bank-Ready PDF Generator',
      subline: 'Instant Formatting · Certificate & Slip Export',
      primaryLabel: 'Generate Document',
    },
  },
  {
    id: 'go-empower',
    name: 'GoEmpower Children Initiative',
    url: 'https://goempowerinitiative.org',
    domain: 'goempowerinitiative.org',
    category: 'ORGANIZATION',
    featured: true,
    description:
      'Non-profit organization website sharing educational outreach initiatives, impact programs, and community partnership opportunities.',
    preview: {
      accentFrom: '#2563EB',
      accentTo: '#7C3AED',
      surfaceBg: '#0C1631',
      layoutStyle: 'foundation',
      headline: "Together, for Every Child's Future",
      subline: 'Education Access · Learning Resources · Outreach',
      primaryLabel: 'Support the Mission',
    },
  },
  {
    id: 'binnas-logistics',
    name: "Binna's Logistics Global",
    url: 'https://Binnaslogisticsglobal.com.ng',
    domain: 'binnaslogisticsglobal.com.ng',
    category: 'BUSINESS',
    featured: true,
    description:
      'International freight and procurement website for China–Nigeria shipping, air/sea cargo, and supplier sourcing services.',
    preview: {
      accentFrom: '#1D4ED8',
      accentTo: '#0EA5E9',
      surfaceBg: '#0A152C',
      layoutStyle: 'corporate',
      headline: 'China–Nigeria Shipping & Sourcing',
      subline: 'Air & Sea Cargo · Procurement · Delivery',
      primaryLabel: 'Ship With Us',
    },
  },
  {
    id: 'henrand-nig',
    name: 'Henrand Nigeria Ltd',
    url: 'https://www.henrandnig.com',
    domain: 'henrandnig.com',
    category: 'BUSINESS',
    description:
      'Corporate website for precision land surveying, civil engineering, and construction project delivery across Nigeria.',
    preview: {
      accentFrom: '#1E40AF',
      accentTo: '#4338CA',
      surfaceBg: '#0B1325',
      layoutStyle: 'corporate',
      headline: 'Precision Surveying & Construction',
      subline: 'Geomatics · Civil Works · Infrastructure',
      primaryLabel: 'View Capabilities',
    },
  },
  {
    id: 'winning-gate',
    name: 'Winning Gate Seminary',
    url: 'https://www.winninggateseminary.com.ng',
    domain: 'winninggateseminary.com.ng',
    category: 'SCHOOL',
    description:
      'Theological seminary website highlighting online and on-campus diploma and degree programs, admissions, and leadership training.',
    preview: {
      accentFrom: '#312E81',
      accentTo: '#2563EB',
      surfaceBg: '#0D132B',
      layoutStyle: 'academy',
      headline: 'Christian Theological Seminary',
      subline: 'Online & Campus Programs · Diplomas · Degrees',
      primaryLabel: 'Explore Programs',
    },
  },
  {
    id: 'els-delight',
    name: "El's Delight Treats",
    url: 'https://elsdelighttreats.vercel.app',
    domain: 'elsdelighttreats.vercel.app',
    category: 'E-COMMERCE',
    description:
      'Bakery and celebration treats storefront in Lagos showcasing bento cakes, wedding cakes, pastries, and direct ordering.',
    preview: {
      accentFrom: '#7C3AED',
      accentTo: '#4F46E5',
      surfaceBg: '#120F26',
      layoutStyle: 'storefront',
      headline: 'Handcrafted Celebration Cakes & Treats',
      subline: 'Bento Cakes · Wedding Cakes · Lagos Delivery',
      primaryLabel: 'Order Treats',
    },
  },
  {
    id: 'careplus',
    name: 'CarePlus Cosmetics',
    url: 'https://carepluscosmestics.com.ng',
    domain: 'carepluscosmestics.com.ng',
    category: 'E-COMMERCE',
    description:
      'Natural skincare and haircare e-commerce website featuring facial cleansers, treatment lines, and guided product shopping.',
    preview: {
      accentFrom: '#2563EB',
      accentTo: '#6366F1',
      surfaceBg: '#0B162C',
      layoutStyle: 'storefront',
      headline: 'Natural Skincare & Haircare Solutions',
      subline: 'Facial Cleansers · Serums · Haircare',
      primaryLabel: 'Shop Skincare',
    },
  },
  {
    id: 'kingsdome',
    name: 'The Kingsdome Church',
    url: 'https://Kingsdome.org',
    domain: 'kingsdome.org',
    category: 'ORGANIZATION',
    description:
      'Ministry and church community website in Egbeda, Lagos with service schedules, online worship links, and outreach programs.',
    preview: {
      accentFrom: '#4338CA',
      accentTo: '#7C3AED',
      surfaceBg: '#0E1028',
      layoutStyle: 'foundation',
      headline: 'The Kingsdome Church · Lagos',
      subline: 'Sunday Celebration · Online Worship · Community',
      primaryLabel: 'Join Worship',
    },
  },
  {
    id: 'dohtech-academy',
    name: 'Dohtech Academy',
    url: 'https://dohtech-academy-2.vercel.app',
    domain: 'dohtech-academy-2.vercel.app',
    category: 'SCHOOL',
    description:
      'Digital skills training academy with structured online courses, student learning dashboard features, and cohort registration.',
    preview: {
      accentFrom: '#2563EB',
      accentTo: '#4F46E5',
      surfaceBg: '#091127',
      layoutStyle: 'academy',
      headline: 'Practical Online Digital Skills Training',
      subline: 'Tech Cohorts · Student Dashboard · Certification',
      primaryLabel: 'Enroll Now',
    },
  },
  {
    id: 'hope-xavier',
    name: 'Hope Xavier First Academy',
    url: 'https://hopexavierfirstacademy.netlify.app',
    domain: 'hopexavierfirstacademy.netlify.app',
    category: 'SCHOOL',
    description:
      'School portal featuring academic information alongside integrated student registration, admission number search, and class records.',
    preview: {
      accentFrom: '#1D4ED8',
      accentTo: '#6D28D9',
      surfaceBg: '#0B132A',
      layoutStyle: 'academy',
      headline: 'Academic Portal & Student Records',
      subline: 'Admissions · Class Assignment · Student Registry',
      primaryLabel: 'Open School Portal',
    },
  },
  {
    id: 'kismet-pillars',
    name: 'Kismet Pillars School',
    url: 'https://kismetpillarsschool.netlify.app',
    domain: 'kismetpillarsschool.netlify.app',
    category: 'SCHOOL',
    description:
      'School platform equipped with an interactive question bank, student assessment tracking, and administrative user management.',
    preview: {
      accentFrom: '#3B82F6',
      accentTo: '#6366F1',
      surfaceBg: '#0A1328',
      layoutStyle: 'academy',
      headline: 'School Assessment & Learning Platform',
      subline: 'Question Bank · Attempt Tracking · Scores',
      primaryLabel: 'Explore Platform',
    },
  },
  {
    id: 'alameen-clinic',
    name: 'Al-Ameen Clinic & Maternity Home',
    url: 'https://alameenclinicandmaternityhome.netlify.app',
    domain: 'alameenclinicandmaternityhome.netlify.app',
    category: 'HEALTHCARE',
    description:
      'Community healthcare and maternity home website detailing maternal care, clinical services, and patient contact channels.',
    preview: {
      accentFrom: '#0284C7',
      accentTo: '#2563EB',
      surfaceBg: '#08182E',
      layoutStyle: 'clinic',
      headline: 'Compassionate Clinical & Maternity Care',
      subline: 'Antenatal · General Practice · Consultation',
      primaryLabel: 'Book Consultation',
    },
  },
  {
    id: 'davic-cooling',
    name: 'Davic Cooling Systems Limited',
    url: 'https://daviccoolingsystemslimited.netlify.app',
    domain: 'daviccoolingsystemslimited.netlify.app',
    category: 'BUSINESS',
    description:
      'Industrial and commercial refrigeration and HVAC services website with dedicated service management and company mission sections.',
    preview: {
      accentFrom: '#0EA5E9',
      accentTo: '#1D4ED8',
      surfaceBg: '#0A162B',
      layoutStyle: 'corporate',
      headline: 'Commercial Cooling & HVAC Engineering',
      subline: 'Installation · Cold Rooms · Maintenance',
      primaryLabel: 'View Services',
    },
  },
  {
    id: 'simsignature',
    name: 'SIMsignature Footwear',
    url: 'https://bright-kitsune-0f303f.netlify.app',
    domain: 'bright-kitsune-0f303f.netlify.app',
    category: 'E-COMMERCE',
    description:
      'Bespoke footwear storefront in Plateau State showcasing formal boots, oxford flats, heels, and leather care collections.',
    preview: {
      accentFrom: '#4338CA',
      accentTo: '#1E40AF',
      surfaceBg: '#0D0E20',
      layoutStyle: 'storefront',
      headline: 'Handcrafted Luxury Footwear',
      subline: 'Formal Boots · Oxford Flats · Bespoke Leather',
      primaryLabel: 'View Footwear',
    },
  },
  {
    id: 'sophie-fabrics',
    name: 'Sophie Classy Fabrics',
    url: 'https://nimble-conkies-12bf90.netlify.app',
    domain: 'nimble-conkies-12bf90.netlify.app',
    category: 'E-COMMERCE',
    description:
      'Luxury textile and fabric storefront curated for modern fashion buyers looking for high-grade lace, silk, and occasion materials.',
    preview: {
      accentFrom: '#7C3AED',
      accentTo: '#3B82F6',
      surfaceBg: '#120F28',
      layoutStyle: 'storefront',
      headline: 'Premium Luxury Textiles & Fabrics',
      subline: 'Occasion Lace · Couture Fabrics · Inquiries',
      primaryLabel: 'Explore Fabrics',
    },
  },
  {
    id: 'alishbeeliy-gadgets',
    name: 'Alishbeeliy Gadgets Venture',
    url: 'https://alishbeeliygadgetsventure.netlify.app',
    domain: 'alishbeeliygadgetsventure.netlify.app',
    category: 'E-COMMERCE',
    description:
      'Consumer electronics and gadgets storefront paired with product catalog management, order tracking, and store analytics.',
    preview: {
      accentFrom: '#2563EB',
      accentTo: '#06B6D4',
      surfaceBg: '#091225',
      layoutStyle: 'storefront',
      headline: 'Electronics & Gadgets Storefront',
      subline: 'Smart Devices · Order Tracking · Inventory',
      primaryLabel: 'Browse Gadgets',
    },
  },
  {
    id: 'umar-faruq',
    name: "Umar Faruq's Venture",
    url: 'https://umarfaruqsaventure.netlify.app',
    domain: 'umarfaruqsaventure.netlify.app',
    category: 'E-COMMERCE',
    description:
      'Online product showcase and retail catalog platform featuring structured product cards, video previews, and inventory controls.',
    preview: {
      accentFrom: '#1D4ED8',
      accentTo: '#4F46E5',
      surfaceBg: '#0B1328',
      layoutStyle: 'storefront',
      headline: 'Multi-Product Retail Catalog',
      subline: 'Featured Items · Video Previews · Direct Orders',
      primaryLabel: 'View Store',
    },
  },
  {
    id: 'numawiz-studios',
    name: 'Numawiz Studios',
    url: 'https://numawizstudios.netlify.app',
    domain: 'numawizstudios.netlify.app',
    category: 'PORTFOLIO',
    description:
      'Lagos-based creative design and digital studio portfolio highlighting visual projects, project inquiry forms, and WhatsApp contact.',
    preview: {
      accentFrom: '#6D28D9',
      accentTo: '#2563EB',
      surfaceBg: '#0B0D20',
      layoutStyle: 'portfolio',
      headline: 'Creative Design & Digital Studio',
      subline: 'Lagos, Nigeria · Visual Craft · Collaborations',
      primaryLabel: 'Explore Studio',
    },
  },
  {
    id: 'paul-bakos',
    name: 'Paul Samuel Bako Portfolio',
    url: 'https://paulbakosportfolio.netlify.app',
    domain: 'paulbakosportfolio.netlify.app',
    category: 'PORTFOLIO',
    description:
      'Personal brand portfolio for a designer and educator featuring service pages, design showcase, lesson booking, and admin controls.',
    preview: {
      accentFrom: '#2563EB',
      accentTo: '#7C3AED',
      surfaceBg: '#0A1024',
      layoutStyle: 'portfolio',
      headline: 'Design Portfolio & Lesson Booking',
      subline: 'Services · Selected Works · Direct Booking',
      primaryLabel: 'View Portfolio',
    },
  },
  {
    id: 'abuqoonitah',
    name: 'Abu Qoonitah Islamic Academy',
    url: 'https://abuqoonitahacademy.name.ng',
    domain: 'abuqoonitahacademy.name.ng',
    category: 'SCHOOL',
    description:
      'Islamic and general education academy website designed to communicate curriculum values, programs, and admissions contact.',
    preview: {
      accentFrom: '#1E40AF',
      accentTo: '#4F46E5',
      surfaceBg: '#0A142B',
      layoutStyle: 'academy',
      headline: 'Abu Qoonitah Islamic Academy',
      subline: 'Structured Learning · Admissions · Contact',
      primaryLabel: 'Learn More',
    },
  },
  {
    id: 'brainfield-academy',
    name: 'Brainfield International Academy',
    url: 'https://charming-pika-b92ca7.netlify.app',
    domain: 'charming-pika-b92ca7.netlify.app',
    category: 'SCHOOL',
    description:
      'Modern academy website presenting school identity, learning programs, and straightforward admissions contact for parents.',
    preview: {
      accentFrom: '#2563EB',
      accentTo: '#6366F1',
      surfaceBg: '#0B1329',
      layoutStyle: 'academy',
      headline: 'Brainfield International Academy',
      subline: 'Admissions · Academic Excellence · Campus',
      primaryLabel: 'Visit Academy',
    },
  },
  {
    id: 'mubk-daneji',
    name: 'Markazu Umar bn Al-Khattab',
    url: 'https://mubkdaneji.com',
    domain: 'mubkdaneji.com',
    category: 'SCHOOL',
    description:
      "Institutional website for a Qur'an memorization and Islamic studies center in Daneji Quarters with program information.",
    preview: {
      accentFrom: '#1E3A8A',
      accentTo: '#3B82F6',
      surfaceBg: '#0A1428',
      layoutStyle: 'academy',
      headline: "30-Juz Qur'an Memorization & Studies",
      subline: 'Daneji Quarters · Structured Memorization',
      primaryLabel: 'View Institution',
    },
  },
  {
    id: 'spell-expert',
    name: 'Spell Expert Educational Consult',
    url: 'https://chic-gecko-5d281f.netlify.app',
    domain: 'chic-gecko-5d281f.netlify.app',
    category: 'SCHOOL',
    description:
      'Educational consultancy website focused on literacy development and academic empowerment programs for children and youths.',
    preview: {
      accentFrom: '#4F46E5',
      accentTo: '#2563EB',
      surfaceBg: '#0C1229',
      layoutStyle: 'academy',
      headline: 'Literacy & Academic Empowerment',
      subline: 'Youth Programs · Educational Consulting',
      primaryLabel: 'Explore Programs',
    },
  },
  {
    id: 'ccc-ten',
    name: "Christ Centered Chapel Int'l",
    url: 'https://ccc-ten-mu.vercel.app',
    domain: 'ccc-ten-mu.vercel.app',
    category: 'ORGANIZATION',
    description:
      "Official church ministry website presenting fellowship schedules, outreach programs, and community engagement resources.",
    preview: {
      accentFrom: '#4338CA',
      accentTo: '#6D28D9',
      surfaceBg: '#0D1027',
      layoutStyle: 'foundation',
      headline: "Christ Centered Chapel Int'l",
      subline: "God's Word in Action · Ministries · Events",
      primaryLabel: 'Visit Ministry',
    },
  },
  {
    id: 'qaadatul-ghad',
    name: 'Qaadatul-Ghad Islamic Foundation',
    url: 'https://qaadatul-ghad-islamic-foundation-875365047876.europe-west2.run.app',
    domain: 'qaadatul-ghad-islamic-foundation.run.app',
    category: 'ORGANIZATION',
    description:
      'Foundation platform uniting community education and technology initiatives under an accessible, structured web presence.',
    preview: {
      accentFrom: '#1D4ED8',
      accentTo: '#7C3AED',
      surfaceBg: '#0A1329',
      layoutStyle: 'foundation',
      headline: 'Qaadatul-Ghad Islamic Tech Foundation',
      subline: 'Tech Literacy · Community Programs · Impact',
      primaryLabel: 'Explore Foundation',
    },
  },
  {
    id: 'roadmap-news',
    name: 'The RoadMap News',
    url: 'https://theroadmapnews.com.ng',
    domain: 'theroadmapnews.com.ng',
    category: 'BUSINESS',
    description:
      'Digital media and news publishing website structured for clear article discovery, category browsing, and reader engagement.',
    preview: {
      accentFrom: '#1E40AF',
      accentTo: '#0F172A',
      surfaceBg: '#0B1222',
      layoutStyle: 'corporate',
      headline: 'The RoadMap News · Digital Publication',
      subline: 'Headlines · Editorial · Community Updates',
      primaryLabel: 'Read Stories',
    },
  },
  {
    id: 'fashion-360',
    name: 'Fashion 360',
    url: 'https://scintillating-moxie-41c8a0.netlify.app',
    domain: 'scintillating-moxie-41c8a0.netlify.app',
    category: 'BUSINESS',
    description:
      'Bespoke fashion brand website in Makurdi, Benue State featuring service guarantees, customer inquiry form, and map directions.',
    preview: {
      accentFrom: '#6D28D9',
      accentTo: '#3B82F6',
      surfaceBg: '#0F1024',
      layoutStyle: 'corporate',
      headline: 'Fashion 360 · Makurdi Studio',
      subline: 'Tailoring · Customer Satisfaction · Directions',
      primaryLabel: 'Book Fitting',
    },
  },
  {
    id: 'battery-hospital',
    name: "God's Own Battery Hospital",
    url: 'https://storied-cactus-eba7b3.netlify.app',
    domain: 'storied-cactus-eba7b3.netlify.app',
    category: 'BUSINESS',
    description:
      'Automotive battery diagnostics and care business website in Gwagwalada, Abuja with an integrated article and news publishing module.',
    preview: {
      accentFrom: '#2563EB',
      accentTo: '#4338CA',
      surfaceBg: '#0A1328',
      layoutStyle: 'corporate',
      headline: 'Automotive Battery Diagnostics · Abuja',
      subline: 'Battery Care · Updates · Store Locator',
      primaryLabel: 'Visit Business',
    },
  },
  {
    id: 'femlush',
    name: 'FEMLUSH Logistics & Services',
    url: 'https://effervescent-madeleine-b41fcd.netlify.app',
    domain: 'effervescent-madeleine-b41fcd.netlify.app',
    category: 'BUSINESS',
    description:
      'Service and delivery platform in Ilesa, Osun State featuring location tracking estimates, FAQ support, and interactive assistance.',
    preview: {
      accentFrom: '#3B82F6',
      accentTo: '#7C3AED',
      surfaceBg: '#0B132B',
      layoutStyle: 'corporate',
      headline: 'FEMLUSH Delivery & Support',
      subline: 'Location Tracking · Estimates · Customer FAQ',
      primaryLabel: 'Explore Service',
    },
  },
  {
    id: 'gracey-nin',
    name: 'Gracey NIN Modification',
    url: 'https://shiny-jelly-744d03.netlify.app',
    domain: 'shiny-jelly-744d03.netlify.app',
    category: 'BUSINESS',
    description:
      'Service consultancy website in Nigeria helping clients navigate NIN name, date of birth, and phone correction inquiries cleanly.',
    preview: {
      accentFrom: '#1D4ED8',
      accentTo: '#4F46E5',
      surfaceBg: '#0A1429',
      layoutStyle: 'corporate',
      headline: 'Identity Documentation Support',
      subline: 'Guided Corrections · Fast Response · Nigeria',
      primaryLabel: 'View Services',
    },
  },
  {
    id: 'ai-website-course',
    name: 'AI Website Creation Course',
    url: 'https://aiwebsite.name.ng',
    domain: 'aiwebsite.name.ng',
    category: 'TECHNOLOGY',
    description:
      'Interactive technology learning platform teaching students how to build, refine, host, deploy, and manage websites with modern tools.',
    preview: {
      accentFrom: '#2563EB',
      accentTo: '#7C3AED',
      surfaceBg: '#081024',
      layoutStyle: 'webapp',
      headline: 'Website Development & Deployment Course',
      subline: 'Curriculum · Hosting · Live Deployment',
      primaryLabel: 'Explore Course',
    },
  },
  {
    id: 'ai-summer',
    name: 'AI Summer Holiday Program',
    url: 'https://aisummer.name.ng',
    domain: 'aisummer.name.ng',
    category: 'TECHNOLOGY',
    description:
      'Structured holiday tech camp portal for learners aged 8–21 covering web engineering, AI literacy, and hands-on digital projects.',
    preview: {
      accentFrom: '#4F46E5',
      accentTo: '#2563EB',
      surfaceBg: '#0A1228',
      layoutStyle: 'webapp',
      headline: 'AI Summer Holiday Program (Ages 8–21)',
      subline: 'Web Skills · AI Literacy · Project Tracks',
      primaryLabel: 'Join Program',
    },
  },
  {
    id: 'ai-innovators',
    name: 'AI Young Innovators Program',
    url: 'https://innovator.name.ng',
    domain: 'innovator.name.ng',
    category: 'TECHNOLOGY',
    description:
      'Technology education hub introducing young builders to software creation, problem-solving, and guided innovation tracks.',
    preview: {
      accentFrom: '#3B82F6',
      accentTo: '#6D28D9',
      surfaceBg: '#091125',
      layoutStyle: 'webapp',
      headline: 'AI Young Innovators Program',
      subline: 'Youth Tech · Innovation Tracks · Mentorship',
      primaryLabel: 'Explore Hub',
    },
  },
  {
    id: 'innovator-portal',
    name: 'Innovators Portal',
    url: 'https://innovatorportal.vercel.app',
    domain: 'innovatorportal.vercel.app',
    category: 'TECHNOLOGY',
    description:
      'Custom web application serving as a unified member and student portal for tracking activities and innovation resources.',
    preview: {
      accentFrom: '#4338CA',
      accentTo: '#2563EB',
      surfaceBg: '#0A1124',
      layoutStyle: 'webapp',
      headline: 'Innovators Portal Web App',
      subline: 'Member Access · Resources · Activity',
      primaryLabel: 'Open Portal',
    },
  },
  {
    id: 'investpro-wealth',
    name: 'InvestPro Wealth Platform',
    url: 'https://modernstack-boilerplate-102054364976.europe-west3.run.app',
    domain: 'modernstack-boilerplate.run.app',
    category: 'TECHNOLOGY',
    description:
      'Interactive fintech dashboard application showcasing real-time position tracking, market signals, and interactive advisory views.',
    preview: {
      accentFrom: '#1D4ED8',
      accentTo: '#6D28D9',
      surfaceBg: '#070E20',
      layoutStyle: 'webapp',
      headline: 'Portfolio & Market Signals Dashboard',
      subline: 'Positions · Real-Time Metrics · Advisory',
      primaryLabel: 'Launch App',
    },
  },
  {
    id: 'velocity-rush',
    name: 'Velocity Rush Web App',
    url: 'https://velocityrush2.netlify.app',
    domain: 'velocityrush2.netlify.app',
    category: 'TECHNOLOGY',
    description:
      'Interactive browser application built with responsive mobile controls and real-time client state updates.',
    preview: {
      accentFrom: '#6D28D9',
      accentTo: '#2563EB',
      surfaceBg: '#090D20',
      layoutStyle: 'webapp',
      headline: 'Interactive Mobile-Ready Web App',
      subline: 'Responsive Controls · Live State · Fast Load',
      primaryLabel: 'Try Web App',
    },
  },
];

export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  {
    id: 'design',
    title: 'Professional & Modern Designs',
    description:
      'Custom visual architecture tailored to your industry—never generic templates—so visitors immediately trust your brand.',
    iconKey: 'layout',
  },
  {
    id: 'mobile',
    title: 'Mobile-Responsive Websites',
    description:
      'Engineered to look crisp and operate effortlessly on Android phones, iPhones, tablets, laptops, and wide desktop displays.',
    iconKey: 'smartphone',
  },
  {
    id: 'speed',
    title: 'Fast-Loading Development',
    description:
      'Clean frontend code and optimized assets keep load times quick even on everyday Nigerian mobile data connections.',
    iconKey: 'zap',
  },
  {
    id: 'affordable',
    title: 'Affordable Website Packages',
    description:
      'Clear, structured packages designed for startups, growing SMEs, schools, and organizations without hidden surprises.',
    iconKey: 'wallet',
  },
  {
    id: 'seo',
    title: 'SEO-Friendly Structure',
    description:
      'Semantic HTML5 headings, clean metadata, and search-ready page structure help customers find you on Google.',
    iconKey: 'search',
  },
  {
    id: 'security',
    title: 'Secure Development Practices',
    description:
      'HTTPS-ready deployments, validated forms, and safe data handling protect your business and your visitors.',
    iconKey: 'shield',
  },
  {
    id: 'support',
    title: 'Customer-Focused Support',
    description:
      'We listen first, explain technical choices in plain English, and align every page with your conversion goals.',
    iconKey: 'headphones',
  },
  {
    id: 'custom',
    title: 'Customized Solutions',
    description:
      'Need appointment booking, property listings, CBT assessments, or PDF tools? We build features around your workflow.',
    iconKey: 'sliders',
  },
  {
    id: 'communication',
    title: 'Professional Communication',
    description:
      'Direct milestone updates via WhatsApp and email so you always know what is being built and when it ships.',
    iconKey: 'message',
  },
  {
    id: 'post-launch',
    title: 'Post-Launch Assistance',
    description:
      'Smooth handover, team walkthroughs, and ongoing maintenance options keep your website accurate long after launch day.',
    iconKey: 'wrench',
  },
];

export const WORKING_PROCESS: ProcessStep[] = [
  {
    step: 'STEP 1',
    title: 'Tell Us What You Need',
    description:
      'Contact us via WhatsApp or our request form and explain the type of website, features, and goals you want for your brand.',
  },
  {
    step: 'STEP 2',
    title: 'Design & Development',
    description:
      'We plan the structure, craft a modern responsive interface, and develop your website around your exact requirements.',
  },
  {
    step: 'STEP 3',
    title: 'Review & Approval',
    description:
      'You preview the live staging site across mobile and desktop and request agreed adjustments until everything feels right.',
  },
  {
    step: 'STEP 4',
    title: 'Launch Your Website',
    description:
      'We deploy the approved website to your domain, verify speed and mobile responsiveness, and provide handover and support.',
  },
];

/**
 * Editable Testimonial Placeholders
 * IMPORTANT: Clearly marked as editable placeholders until verified client feedback is entered.
 * Administrators can edit these in-browser via the Manage Testimonials drawer or right here in code.
 */
export const DEFAULT_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't1',
    clientName: '[Client Name — Editable Slot 1]',
    organization: 'Destiny Fountain Schools (Sample Slot)',
    role: 'School Administrator',
    rating: 5,
    review:
      '[Placeholder for verified client testimonial: Add genuine feedback describing the school website launch, admissions clarity, and parent response.]',
    projectUrl: 'https://destinyfountainschools.com',
    projectLabel: 'destinyfountainschools.com',
    isPlaceholder: true,
  },
  {
    id: 't2',
    clientName: '[Client Name — Editable Slot 2]',
    organization: 'GLOZEN (Sample Slot)',
    role: 'Brand Founder',
    rating: 5,
    review:
      '[Placeholder for verified client testimonial: Add genuine feedback covering storefront presentation, mobile shopping flow, and collaboration.]',
    projectUrl: 'https://Glozen.vercel.app',
    projectLabel: 'glozen.vercel.app',
    isPlaceholder: true,
  },
  {
    id: 't3',
    clientName: '[Client Name — Editable Slot 3]',
    organization: 'Mardeeyah Hospital (Sample Slot)',
    role: 'Medical Director',
    rating: 5,
    review:
      '[Placeholder for verified client testimonial: Add genuine feedback on clinical appointment scheduling, patient clarity, and delivery timeline.]',
    projectUrl: 'https://mardeeyahhospital.netlify.app',
    projectLabel: 'mardeeyahhospital.netlify.app',
    isPlaceholder: true,
  },
  {
    id: 't4',
    clientName: '[Client Name — Editable Slot 4]',
    organization: 'Lionshead Africa Ltd (Sample Slot)',
    role: 'Managing Partner',
    rating: 5,
    review:
      '[Placeholder for verified client testimonial: Add genuine feedback on real estate property showcasing and buyer trust.]',
    projectUrl: 'https://llionsheadafrica.netlify.app',
    projectLabel: 'llionsheadafrica.netlify.app',
    isPlaceholder: true,
  },
  {
    id: 't5',
    clientName: '[Client Name — Editable Slot 5]',
    organization: 'Rozay Kitchen (Sample Slot)',
    role: 'E-Commerce Owner',
    rating: 5,
    review:
      '[Placeholder for verified client testimonial: Add genuine feedback on product catalog organization and WhatsApp/online orders.]',
    projectUrl: 'https://rozaykitchen.com.ng',
    projectLabel: 'rozaykitchen.com.ng',
    isPlaceholder: true,
  },
  {
    id: 't6',
    clientName: '[Client Name — Editable Slot 6]',
    organization: 'GoEmpower Initiative (Sample Slot)',
    role: 'Program Coordinator',
    rating: 5,
    review:
      '[Placeholder for verified client testimonial: Add genuine feedback on communicating nonprofit impact and partner inquiries.]',
    projectUrl: 'https://goempowerinitiative.org',
    projectLabel: 'goempowerinitiative.org',
    isPlaceholder: true,
  },
];

/**
 * Editable Pricing Packages in Nigerian Naira (NGN)
 * Replace placeholder prices with your finalized agency rates.
 */
export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: 'starter',
    name: 'STARTER WEBSITE',
    subtitle: 'For individuals, personal brands, and small businesses launching online.',
    priceNgn: '₦ [Editable Starter Price]',
    priceNote: 'Replace placeholder in agencyConfig.ts',
    deliveryTimeline: '5 – 7 Business Days',
    features: [
      'Up to 4 responsive pages (Home, About, Services, Contact)',
      'Mobile-friendly design for Android, iPhone & desktop',
      'Direct WhatsApp chat button & inquiry integration',
      'Foundational on-page SEO titles & descriptions',
      'SSL security setup & deployment support',
    ],
    whatsappMessage:
      'Hello! I am interested in the STARTER WEBSITE package. Please share the current price and how we can begin.',
  },
  {
    id: 'business',
    name: 'BUSINESS WEBSITE',
    subtitle: 'For growing businesses, schools, clinics, and professional organizations.',
    priceNgn: '₦ [Editable Business Price]',
    priceNote: 'Replace placeholder in agencyConfig.ts',
    deliveryTimeline: '10 – 14 Business Days',
    recommended: true,
    features: [
      'Up to 8–10 custom-designed pages & sections',
      'Industry-tailored structure (Portfolio, Gallery, Admissions, or Services)',
      'Validated contact/booking form + WhatsApp lead routing',
      'Speed optimization & full OpenGraph social sharing metadata',
      'Google Business & local SEO structure',
      'Post-launch handover walkthrough & support',
    ],
    whatsappMessage:
      'Hello! I am interested in the BUSINESS WEBSITE package. Please share full pricing and timeline details.',
  },
  {
    id: 'premium',
    name: 'PREMIUM WEBSITE',
    subtitle: 'For businesses needing e-commerce, portals, or customized functionality.',
    priceNgn: '₦ [Editable Premium Price]',
    priceNote: 'Replace placeholder in agencyConfig.ts',
    deliveryTimeline: '2 – 4 Weeks',
    features: [
      'E-commerce store, booking engine, or custom web application',
      'Payment gateway integration (Paystack / Flutterwave)',
      'Admin dashboard or content management capabilities',
      'Custom database workflows & user portals',
      'Comprehensive SEO, Schema.org markup & performance tuning',
      'Priority post-launch maintenance & technical support',
    ],
    whatsappMessage:
      'Hello! I am interested in the PREMIUM WEBSITE package with custom features. Let us discuss my requirements.',
  },
];

export const FAQS: FaqItem[] = [
  {
    id: 'cost',
    question: 'How much does it cost to build a website?',
    answer:
      'Website cost depends on the type of site, number of pages, and custom features (such as e-commerce checkout, appointment booking, or portals). Message us on WhatsApp or request a quote with your goals, and we will share a clear, transparent breakdown in Nigerian Naira with no hidden fees.',
  },
  {
    id: 'timeline',
    question: 'How long does website development take?',
    answer:
      'A Starter business or personal website typically launches within 5 to 7 business days once content is ready. Multi-page Business or School websites take 10 to 14 business days, while custom E-Commerce stores and Web Applications take 2 to 4 weeks depending on scope.',
  },
  {
    id: 'schools-businesses',
    question: 'Can you build websites for schools and businesses?',
    answer:
      'Yes. We have built and deployed live websites for primary and secondary schools, seminaries, digital academies, engineering firms, logistics brands, hospitals, real estate agencies, and retail businesses across Nigeria.',
  },
  {
    id: 'mobile',
    question: 'Will my website work on mobile phones?',
    answer:
      'Every website we build is mobile-first and tested across Android phones, iPhones, tablets, and desktop screens so visitors can browse, read, and contact you effortlessly from any device.',
  },
  {
    id: 'updates',
    question: 'Can I update my website after it is launched?',
    answer:
      'Yes. Depending on your package, we can set up an easy content dashboard for announcements, products, or blog posts, or handle updates for you directly on request.',
  },
  {
    id: 'domain-hosting',
    question: 'Do you provide domain names and hosting?',
    answer:
      'Yes. We guide you through registering your preferred .com, .com.ng, .org, or .name.ng domain in your own name and configure fast, secure SSL-enabled hosting so you retain full ownership.',
  },
  {
    id: 'payments',
    question: 'Can you integrate online payments?',
    answer:
      'Yes. For e-commerce stores, booking platforms, and portals, we integrate trusted payment gateways such as Paystack and Flutterwave for cards, bank transfers, and USSD.',
  },
  {
    id: 'redesign',
    question: 'Can you redesign my existing website?',
    answer:
      'Yes. If your current website looks outdated, loads slowly, or struggles on mobile phones, we can rebuild it with a modern layout while preserving your domain and improving your search structure.',
  },
  {
    id: 'maintenance',
    question: 'Do you provide website maintenance?',
    answer:
      'Yes. After launch, we offer ongoing maintenance and support options covering content updates, security checks, backups, and feature additions as your organization grows.',
  },
  {
    id: 'get-started',
    question: 'How do I get started?',
    answer:
      'Click any "Chat With Us on WhatsApp" button or submit the project request form below. Tell us what your business or organization does, and we will guide you step-by-step from planning to launch.',
  },
];
