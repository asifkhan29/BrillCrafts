import { Link } from "react-router-dom";
import { ArrowUpRight, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative  overflow-hidden bg-[var(--ice)]/30 pt-20">
      {/* Decorative Background Element */}
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-br from-[var(--sky)]/10 to-[var(--parrot)]/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 pb-12">
        <div className="grid gap-16 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">

          {/* Brand Section */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--obsidian)] shadow-lg transition-transform hover:rotate-6">
                <span className="text-xl font-black text-white">B</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight text-[var(--obsidian)]">Brill Crafts</span>
              </div>
            </div>

            <p className="max-w-xs text-base leading-relaxed text-[var(--obsidian)]/60">
              A brand activation studio crafting high-impact retail branding, expo stalls,
              and on-ground campaigns that move the needle.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--obsidian)] px-8 py-4 text-sm font-bold text-white transition-all hover:bg-[var(--sky)] hover:shadow-[0_20px_40px_-10px_rgba(var(--sky-rgb),0.3)] active:scale-95"
            >
              Start Your Project
              <ArrowUpRight size={18} />
            </Link>
          </div>

          {/* Navigation Columns */}
          <FooterCol title="Studio">
            <FooterLink to="/services">Capabilities</FooterLink>
            <FooterLink to="/reach">Network Reach</FooterLink>
            <FooterLink to="/case-studies">Success Stories</FooterLink>
            <FooterLink to="/about">Our Story</FooterLink>
          </FooterCol>

          <FooterCol title="Services">
            <FooterLink to="/services/brand-launches">Brand Launches</FooterLink>
            <FooterLink to="/services/expo-stalls">Expo Design</FooterLink>
            <FooterLink to="/services/retail-branding">Retail ID</FooterLink>
            <FooterLink to="/services/rwa-corporate">On-Ground</FooterLink>
          </FooterCol>

       {/* CONTACT */}
<FooterCol title="Contact">
  <div className="space-y-4 pt-1">

    <ContactItem
      href="mailto:nafis@brillcrafts.in"
      icon={<Mail size={16} />}
      text="nafis@brillcrafts.in"
    />

    <ContactItem
      href="tel:+917506839909"
      icon={<Phone size={16} />}
      text="+91 75068 39909"
    />

    <ContactItem
      href="https://maps.app.goo.gl/XJfp8SSMQLY47gCE9"
      icon={<MapPin size={16} />}
      text="Sakinaka, Andheri East, Mumbai"
    />

    {/* SOCIAL LINKS */}
    <div className="flex gap-4 pt-2">

      <SocialCircle
        href="https://www.instagram.com/brillcrafts.in/"
        icon={<Instagram size={18} />}
      />

      <SocialCircle
        href="https://www.linkedin.com/company/brill-crafts/"
        icon={<Linkedin size={18} />}
      />

    </div>
  </div>
</FooterCol>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-[var(--obsidian)]/5 pt-10 md:flex-row">
          <div className="flex items-center gap-2 text-sm font-medium text-[var(--obsidian)]/40">
            <span>© {currentYear} Brill Crafts .</span>
            <span className="hidden md:inline">•</span>
            <span>Crafted with intent in India.</span>
          </div>

          <div className="flex items-center gap-8 text-sm font-semibold text-[var(--obsidian)]/60">
            <Link to="/privacy" className="transition-colors hover:text-[var(--sky)]">Privacy</Link>
            <Link to="/terms" className="transition-colors hover:text-[var(--sky)]">Terms</Link>
            <div className="flex items-center gap-1.5 text-[var(--parrot)]">
              <div className="h-1.5 w-1.5 rounded-full bg-current animate-pulse" />
              Agency Status: Available
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Sub-components for better organization
function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-6">
      <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--sky)]">
        {title}
      </h4>
      <div className="flex flex-col gap-3.5">{children}</div>
    </div>
  );
}

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="group flex items-center text-[15px] font-medium text-[var(--obsidian)]/60 transition-colors hover:text-[var(--obsidian)]"
    >
      <span className="relative">
        {children}
        <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-0 bg-[var(--parrot)] transition-all group-hover:w-full" />
      </span>
    </Link>
  );
}

function ContactItem({
  href,
  icon,
  text,
}: {
  href: string;
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="
        flex items-center gap-3
        text-[15px] font-medium
        text-[var(--obsidian)]/60
        transition-colors duration-300
        hover:text-[var(--sky)]
      "
    >
      <span className="text-[var(--sky)]/50">
        {icon}
      </span>

      {text}
    </a>
  );
}
function SocialCircle({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        flex h-10 w-10 items-center justify-center
        rounded-xl
        border border-[var(--obsidian)]/5
        bg-white
        text-[var(--obsidian)]/60
        shadow-sm
        transition-all duration-300
        hover:-translate-y-1
        hover:bg-[var(--sky)]
        hover:text-white
        hover:shadow-lg
        hover:shadow-[var(--sky)]/20
      "
    >
      {icon}
    </a>
  );
}