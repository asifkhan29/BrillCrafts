import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, X, ChevronDown, ChevronRight, Home, 
  Layers, MapPin, Briefcase, Mail, ArrowRight, ExternalLink 
} from "lucide-react";
import { services } from "@/lib/site";

const reachLinks = [
  { label: "Residential", sub: "1000+ RWAs", to: "/reach", icon: Home },
  { label: "Commercial", sub: "500+ Tech Parks", to: "/reach", icon: Briefcase },
  { label: "Entertainment", sub: "500+ Venues", to: "/reach", icon: MapPin },
  { label: "Retail", sub: "1000+ Premium Malls", to: "/reach", icon: Layers },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setOpen(false), [loc.pathname]);

  const groupedServices = useMemo(() => ({
    Activations: services.filter((s) => s.category === "Activations"),
    "Physical Branding": services.filter((s) => s.category === "Physical Branding"),
    Production: services.filter((s) => s.category === "Production"),
  }), []);

  return (
    <header className="fixed top-0 inset-x-0 z-[100] transition-all duration-500 pointer-events-none">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4">
        <nav className={`mx-auto flex items-center justify-between rounded-full px-4 py-2 transition-all duration-500 pointer-events-auto border ${
            scrolled ? "bg-white/80 backdrop-blur-md shadow-xl border-white/40 max-w-4xl" : "bg-transparent border-transparent max-w-full"
          }`}>
          
          <Link to="/" className="group flex items-center gap-3 outline-none">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--obsidian)] text-white font-black transition-transform group-hover:rotate-[10deg]">B</div>
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-[var(--obsidian)]">Brill Crafts</span>            </div>
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-2">
            <NavItem to="/" label="Home" />
            <Dropdown label="Services" width="w-[720px]">
              <div className="grid grid-cols-3 gap-8 p-8">
                {Object.entries(groupedServices).map(([cat, items]) => (
                  <div key={cat} className="space-y-4">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-[var(--sky)]/70">{cat}</h4>
                    <div className="flex flex-col gap-1">
                      {items.map((s) => <ServiceLink key={s.slug} to={s.slug} title={s.title} />)}
                    </div>
                  </div>
                ))}
              </div>
            </Dropdown>
            <Dropdown label="Network" width="w-[450px]">
              <div className="grid grid-cols-2 gap-2 p-4">
                {reachLinks.map((r) => (
                  <Link key={r.label} to={r.to} className="flex items-start gap-3 p-3 rounded-xl hover:bg-[var(--ice)]/50 transition-all group">
                    <r.icon size={16} className="mt-1 group-hover:text-[var(--sky)]" />
                    <div>
                      <p className="text-sm font-semibold text-[var(--obsidian)]">{r.label}</p>
                      <p className="text-[11px] text-[var(--obsidian)]/50">{r.sub}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </Dropdown>
            <NavItem to="/case-studies" label="Case Studies" />
          </div>

          <div className="flex items-center gap-3">
            <Link to="/contact" className="hidden md:flex items-center gap-2 bg-[var(--obsidian)] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[var(--sky)] transition-all">
              Start a Project <ArrowRight size={14} />
            </Link>
            <button onClick={() => setOpen(!open)} className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full bg-white border border-slate-200 shadow-sm">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Sidebar - Re-Fixed with full links */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)} className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[110] lg:hidden pointer-events-auto" />
            <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 25, stiffness: 200 }} className="fixed inset-y-0 right-0 z-[120] w-[85%] max-w-sm bg-white shadow-2xl pointer-events-auto lg:hidden flex flex-col">
              <div className="flex items-center justify-between p-6 border-b">
                <span className="font-bold text-xl">Brill Crafts</span>
                <button onClick={() => setOpen(false)} className="p-2 rounded-full bg-slate-100"><X size={20} /></button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-2">
                <MobileNavItem to="/" label="Home" icon={Home} />
                
                {/* Services Group */}
                <MobileGroup label="Our Services" icon={Layers}>
                  {Object.entries(groupedServices).map(([cat, items]) => (
                    <div key={cat} className="mb-4 last:mb-0">
                      <p className="px-4 text-[10px] font-bold uppercase tracking-widest text-[var(--sky)] mb-2">{cat}</p>
                      {items.map(s => (
                        <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }} className="flex items-center gap-3 px-6 py-2.5 text-sm text-slate-600 hover:text-[var(--sky)]">
                          <ChevronRight size={12} /> {s.title}
                        </Link>
                      ))}
                    </div>
                  ))}
                </MobileGroup>

                {/* Network Group */}
                <MobileGroup label="Our Network" icon={MapPin}>
                  <div className="grid grid-cols-1 gap-1">
                    {reachLinks.map(r => (
                      <Link key={r.label} to={r.to} className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50">
                        <r.icon size={18} className="text-slate-400" />
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold">{r.label}</span>
                          <span className="text-[11px] text-slate-400">{r.sub}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </MobileGroup>

                <MobileNavItem to="/case-studies" label="Case Studies" icon={Briefcase} />
                <MobileNavItem to="/contact" label="Contact Us" icon={Mail} />
              </div>

              <div className="p-6 border-t bg-slate-50/50">
                <Link to="/contact" className="flex items-center justify-center gap-2 bg-[var(--obsidian)] text-white py-4 rounded-2xl font-bold">
                  Let's Talk <ExternalLink size={18} />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

// Logic for Collapsible Groups in Mobile Menu
function MobileGroup({ label, icon: Icon, children }: { label: string; icon: any; children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="space-y-1">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors">
        <div className="flex items-center gap-3 font-semibold text-slate-700">
          <Icon size={20} className="text-slate-400" /> {label}
        </div>
        <ChevronDown size={18} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && <div className="pl-4 py-2 border-l-2 border-slate-100 ml-5 space-y-1">{children}</div>}
    </div>
  );
}

function MobileNavItem({ to, label, icon: Icon }: any) {
  return (
    <Link to={to} className="flex items-center gap-3 p-3 rounded-xl font-semibold text-slate-700 hover:bg-slate-50 hover:text-[var(--sky)]">
      <Icon size={20} className="text-slate-400" /> {label}
    </Link>
  );
}

function NavItem({ to, label }: { to: string; label: string }) {
  return (
    <Link to={to} className="relative px-4 py-2 text-sm font-semibold text-[var(--obsidian)]/70 hover:text-[var(--obsidian)] group" activeProps={{ className: "!text-[var(--sky)]" }}>
      {label}
      <span className="absolute inset-x-4 bottom-1 h-0.5 scale-x-0 bg-[var(--sky)] transition-transform group-hover:scale-x-100" />
    </Link>
  );
}

function ServiceLink({ to, title }: { to: string; title: string }) {
  return (
    <Link to="/services/$slug" params={{ slug: to }} className="group flex items-center justify-between rounded-lg px-2 py-1.5 text-[13px] font-medium text-slate-600 hover:text-[var(--sky)] transition-all">
      {title} <ChevronRight size={14} className="opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
    </Link>
  );
}

function Dropdown({ label, children, width }: any) {
  return (
    <div className="relative group/dropdown">
      <button className="flex items-center gap-1 px-4 py-2 text-sm font-semibold text-[var(--obsidian)]/70 group-hover/dropdown:text-[var(--obsidian)]">
        {label} <ChevronDown size={14} className="transition-transform group-hover/dropdown:rotate-180" />
      </button>
      <div className={`absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 invisible group-hover/dropdown:opacity-100 group-hover/dropdown:visible transition-all duration-300 translate-y-2 group-hover/dropdown:translate-y-0`}>
        <div className={`${width} rounded-3xl border border-slate-100 bg-white shadow-2xl overflow-hidden`}>{children}</div>
      </div>
    </div>
  );
}