export const services = [
  { slug: "brand-launches", title: "Brand Launches", category: "Activations", desc: "Cinematic launch experiences that turn audiences into believers." },
  { slug: "sampling-workforce", title: "Sampling & Workforce", category: "Activations", desc: "On-ground promoters and sampling squads with measurable lift." },
  { slug: "rwa-corporate", title: "RWA & Corporate", category: "Activations", desc: "Targeted residential and corporate engagement across India." },
  { slug: "retail-branding", title: "Retail Branding", category: "Physical Branding", desc: "Storefronts, in-store visuals, and shopper journeys that convert." },
  { slug: "expo-stalls", title: "Expo Stalls", category: "Physical Branding", desc: "Architectural booths engineered to dominate the floor." },
  { slug: "mall-college", title: "Mall & College", category: "Physical Branding", desc: "High-footfall takeovers in malls, colleges and coaching hubs." },
  { slug: "printing-merchandising", title: "Printing & Merchandising", category: "Production", desc: "Premium print, signage and merch produced at scale." },
  { slug: "packaging-gifting", title: "Packaging & Gifting", category: "Production", desc: "Unboxing-worthy packaging and corporate gifting suites." },
] as const;

export type Service = (typeof services)[number];

export const reachStats = [
  { label: "RWA Communities", value: 1000, suffix: "+" },
  { label: "Corporate Parks", value: 500, suffix: "+" },
  { label: "Pubs & Cafés", value: 500, suffix: "+" },
  { label: "Malls & Supermarkets", value: 1000, suffix: "+" },
  { label: "Colleges & Coaching", value: 100, suffix: "+" },
];

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/reach", label: "Our Reach" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/contact", label: "Contact" },
] as const;
