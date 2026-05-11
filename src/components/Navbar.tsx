// src/components/Navbar.tsx

import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Home,
  Layers,
  MapPin,
  Briefcase,
  Mail,
  ArrowRight,
  ExternalLink,
  Info,
} from "lucide-react";

const serviceLinks = {
  Activations: [
    {
      title: "Brand Launches",
      to: "/services/brand-launches",
    },
    {
      title: "Sampling & Workforce",
      to: "/services/sampling-workforce",
    },
    {
      title: "RWA & Corporate",
      to: "/services/rwa-corporate",
    },
  ],

  "Physical Branding": [
    {
      title: "Retail Branding",
      to: "/services/retail-branding",
    },
    {
      title: "Mall & College",
      to: "/services/mall-college",
    },
    {
      title: "Expo Stalls",
      to: "/services/expo-stalls",
    },
  ],

  Production: [
    {
      title: "Printing & Merchandising",
      to: "/services/printing-merchandising",
    },
    {
      title: "Packaging & Gifting",
      to: "/services/packaging-gifting",
    },
  ],
};

const reachLinks = [
  {
    label: "Residential",
    sub: "1000+ RWAs",
    to: "/reach",
    icon: Home,
  },
  {
    label: "Commercial",
    sub: "500+ Tech Parks",
    to: "/reach",
    icon: Briefcase,
  },
  {
    label: "Entertainment",
    sub: "500+ Venues",
    to: "/reach",
    icon: MapPin,
  },
  {
    label: "Retail",
    sub: "1000+ Premium Malls",
    to: "/reach",
    icon: Layers,
  },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-[100]">
      <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6">
        <nav
          className={`pointer-events-auto mx-auto flex items-center justify-between rounded-full border transition-all duration-500 ${scrolled
              ? "max-w-5xl border-white/20 bg-white/70 px-5 py-3 shadow-[0_10px_50px_rgba(0,0,0,0.08)] backdrop-blur-xl"
              : "max-w-full border-white/10 bg-white/5 px-5 py-3 backdrop-blur-md"
            }`}
        >
          {/* LOGO */}
          <Link
            to="/"
            className="group flex items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--obsidian)] text-lg font-black text-white shadow-lg transition-transform duration-300 group-hover:rotate-6">
              B
            </div>

            <div className="flex flex-col leading-tight">
              <span className="text-lg font-bold tracking-tight text-[var(--obsidian)]">
                Brill Crafts
              </span>

              <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--sky)]">
                Brand Activation
              </span>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden items-center gap-1 lg:flex">
            <NavItem to="/" label="Home" />

            {/* SERVICES */}
            <Dropdown label="Services" width="w-[760px]">
              <div className="grid grid-cols-3 gap-8 p-8">
                {Object.entries(serviceLinks).map(
                  ([category, items]) => (
                    <div key={category}>
                      <h4 className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--sky)]">
                        {category}
                      </h4>

                      <div className="space-y-1">
                        {items.map((service) => (
                          <ServiceLink
                            key={service.title}
                            to={service.to}
                            title={service.title}
                          />
                        ))}
                      </div>
                    </div>
                  )
                )}
              </div>
            </Dropdown>

            {/* NETWORK */}
            <Dropdown label="Network" width="w-[500px]">
              <div className="grid grid-cols-2 gap-3 p-5">
                {reachLinks.map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    className="group flex items-start gap-3 rounded-2xl border border-transparent p-4 transition-all duration-300 hover:border-[var(--sky)]/10 hover:bg-[var(--ice)]/60"
                  >
                    <item.icon
                      size={18}
                      className="mt-0.5 text-[var(--sky)] transition-transform duration-300 group-hover:scale-110"
                    />

                    <div>
                      <p className="text-sm font-semibold text-[var(--obsidian)]">
                        {item.label}
                      </p>

                      <p className="text-xs text-[var(--obsidian)]/50">
                        {item.sub}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </Dropdown>

            <NavItem
              to="/case-studies"
              label="Case Studies"
            />

            <NavItem
              to="/about"
              label="About"
            />
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden items-center gap-2 rounded-full bg-[var(--obsidian)] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--sky)] hover:shadow-lg md:flex"
            >
              Start a Project
              <ArrowRight size={15} />
            </Link>

            <button
              onClick={() => setOpen(!open)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/70 text-[var(--obsidian)] shadow-sm backdrop-blur-md lg:hidden"
            >
              {open ? (
                <X size={20} />
              ) : (
                <Menu size={20} />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[110] bg-black/30 backdrop-blur-sm lg:hidden"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                damping: 24,
                stiffness: 220,
              }}
              className="fixed inset-y-0 right-0 z-[120] flex w-[85%] max-w-sm flex-col border-l border-white/10 bg-white shadow-2xl lg:hidden"
            >
              {/* HEADER */}
              <div className="flex items-center justify-between border-b border-slate-100 p-6">
                <span className="text-xl font-bold text-[var(--obsidian)]">
                  Brill Crafts
                </span>

                <button
                  type="button"
                  onClick={() => setOpen(!open)}
                  className="rounded-full bg-slate-100 p-2"
                >
                  <X size={20} />
                </button>
              </div>

              {/* MENU */}
              <div className="flex-1 space-y-2 overflow-y-auto p-4">
                <MobileNavItem
                  to="/"
                  label="Home"
                  icon={Home}
                />

                {/* SERVICES */}
                <MobileGroup
                  label="Our Services"
                  icon={Layers}
                >
                  {Object.entries(serviceLinks).map(
                    ([category, items]) => (
                      <div
                        key={category}
                        className="mb-4"
                      >
                        <p className="mb-2 px-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--sky)]">
                          {category}
                        </p>

                        {items.map((service) => (
                          <Link
                            key={service.title}
                            to={service.to}
                            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-slate-600 transition-all hover:bg-slate-50 hover:text-[var(--sky)]"
                          >
                            <ChevronRight size={12} />
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    )
                  )}
                </MobileGroup>

                {/* NETWORK */}
                <MobileGroup
                  label="Our Network"
                  icon={MapPin}
                >
                  {reachLinks.map((item) => (
                    <Link
                      key={item.label}
                      to={item.to}
                      className="flex items-center gap-3 rounded-xl px-4 py-3 transition-all hover:bg-slate-50"
                    >
                      <item.icon
                        size={18}
                        className="text-[var(--sky)]"
                      />

                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-[var(--obsidian)]">
                          {item.label}
                        </span>

                        <span className="text-[11px] text-slate-400">
                          {item.sub}
                        </span>
                      </div>
                    </Link>
                  ))}
                </MobileGroup>

                <MobileNavItem
                  to="/case-studies"
                  label="Case Studies"
                  icon={Briefcase}
                />

                <MobileNavItem
                  to="/about"
                  label="About"
                  icon={Info}
                />

                <MobileNavItem
                  to="/contact"
                  label="Contact"
                  icon={Mail}
                />
              </div>

              {/* FOOTER */}
              <div className="border-t border-slate-100 bg-slate-50/50 p-6">
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 rounded-2xl bg-[var(--obsidian)] py-4 font-bold text-white transition-all hover:bg-[var(--sky)]"
                >
                  Let's Talk
                  <ExternalLink size={18} />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

/* MOBILE GROUP */

function MobileGroup({
  label,
  icon: Icon,
  children,
}: {
  label: string;
  icon: any;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-1">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between rounded-xl p-3 transition-all hover:bg-slate-50"
      >
        <div className="flex items-center gap-3 font-semibold text-slate-700">
          <Icon
            size={20}
            className="text-[var(--sky)]"
          />
          {label}
        </div>

        <ChevronDown
          size={18}
          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""
            }`}
        />
      </button>

      {isOpen && (
        <div className="ml-5 space-y-1 border-l-2 border-slate-100 py-2 pl-4">
          {children}
        </div>
      )}
    </div>
  );
}

/* MOBILE NAV ITEM */

function MobileNavItem({
  to,
  label,
  icon: Icon,
}: any) {
  return (
    <Link
      to={to}
      className="flex items-center gap-3 rounded-xl p-3 font-semibold text-slate-700 transition-all hover:bg-slate-50 hover:text-[var(--sky)]"
    >
      <Icon
        size={20}
        className="text-[var(--sky)]"
      />
      {label}
    </Link>
  );
}

/* NAV ITEM */

function NavItem({
  to,
  label,
}: {
  to: string;
  label: string;
}) {
  const location = useLocation();

  const active = location.pathname === to;

  return (
    <Link
      to={to}
      className={`group relative px-4 py-2 text-sm font-semibold transition-colors ${active
          ? "text-[var(--sky)]"
          : "text-[var(--obsidian)]/70 hover:text-[var(--obsidian)]"
        }`}
    >
      {label}

      <span
        className={`absolute inset-x-4 bottom-1 h-0.5 origin-left bg-[var(--sky)] transition-transform duration-300 ${active
            ? "scale-x-100"
            : "scale-x-0 group-hover:scale-x-100"
          }`}
      />
    </Link>
  );
}

/* SERVICE LINK */

function ServiceLink({
  to,
  title,
}: {
  to: string;
  title: string;
}) {
  return (
    <Link
      to={to}
      className="group flex items-center justify-between rounded-xl px-3 py-2 text-[13px] font-medium text-slate-600 transition-all duration-300 hover:bg-[var(--ice)]/60 hover:text-[var(--sky)]"
    >
      {title}

      <ChevronRight
        size={14}
        className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
      />
    </Link>
  );
}

/* DROPDOWN */

function Dropdown({
  label,
  children,
  width,
}: any) {
  return (
    <div className="group/dropdown relative">
      <button className="flex items-center gap-1 px-4 py-2 text-sm font-semibold text-[var(--obsidian)]/70 transition-colors group-hover/dropdown:text-[var(--obsidian)]">
        {label}

        <ChevronDown
          size={14}
          className="transition-transform duration-300 group-hover/dropdown:rotate-180"
        />
      </button>

      <div className="invisible absolute left-1/2 top-full -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-all duration-300 group-hover/dropdown:visible group-hover/dropdown:translate-y-0 group-hover/dropdown:opacity-100">
        <div
          className={`${width} overflow-hidden rounded-3xl border border-white/30 bg-white/90 shadow-[0_20px_80px_rgba(0,0,0,0.08)] backdrop-blur-xl`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}