import { createFileRoute, Link } from "@tanstack/react-router";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  AnimatePresence,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Sparkles,
  Zap,
  Globe2,
  Megaphone,
  Store,
  Package,
  Users,
  Box,
  Layout,
  ShoppingBag,
  Tent,
  Radio,
  Play,
  Target,
  MapPin,
  ArrowRight,
  TrendingUp,
  BarChart3,
  Send,
} from "lucide-react";
import { PageTransition } from "@/components/PageTransition";
import { services } from "@/lib/site";
import heroMetro from "@/assets/hero-metro.jpg";
import caseLaunch from "@/assets/case-launch.jpg";
import caseExpo from "@/assets/case-expo.jpg";
import caseMall from "@/assets/case-mall.jpg";
import { Hero } from "@/components/home/Hero";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bill Craft — Brand Activation Studio in India" },
      {
        name: "description",
        content:
          "End-to-end brand activations: launches, expo stalls, retail branding, sampling and on-ground campaigns across 1000+ RWAs, 500+ corporate parks and 1000+ malls.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <PageTransition>
      <Hero />
      <Marquee />
      <ServicesPreview />
      <SecondHero />
      <ReachBand />
      <CaseStudiesPreview />
      <CTA />
    </PageTransition>
  );
}

const AZURE = "#1D90FF";
const OLIVE = "#0074D9"; // keep palette blue-dominant — secondary deep sky blue

// function MagneticButton({
//   to,
//   children,
// }: {
//   to: string;
//   children: React.ReactNode;
// }) {
//   const ref = useRef<HTMLAnchorElement>(null);
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);
//   const sx = useSpring(x, { stiffness: 200, damping: 15 });
//   const sy = useSpring(y, { stiffness: 200, damping: 15 });

//   const onMove = (e: React.MouseEvent) => {
//     const r = ref.current?.getBoundingClientRect();
//     if (!r) return;
//     x.set((e.clientX - r.left - r.width / 2) * 0.35);
//     y.set((e.clientY - r.top - r.height / 2) * 0.35);
//   };
//   const onLeave = () => {
//     x.set(0);
//     y.set(0);
//   };

//   return (
//     <motion.div
//       style={{ x: sx, y: sy }}
//       onMouseMove={onMove}
//       onMouseLeave={onLeave}
//     >
//       <Link
//         ref={ref}
//         to={to}
//         className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-semibold text-white shadow-[0_18px_40px_-12px_rgba(29,144,255,0.55)] group"
//         style={{ background: `linear-gradient(135deg, ${AZURE}, ${OLIVE})` }}
//       >
//         {children}
//       </Link>
//     </motion.div>
//   );
// }

function PhonePortal() {
  const phoneImages = [caseLaunch, caseExpo, caseMall];
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIdx((i) => (i + 1) % phoneImages.length),
      3200,
    );
    return () => clearInterval(id);
  }, [phoneImages.length]);

  return (
    <div className="relative h-[500px] md:h-[600px] w-full flex items-center justify-center [perspective:1400px]">
      {/* Increased Glows - Olive pulsing */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.55, 0.85, 0.55] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 m-auto h-[520px] w-[520px] rounded-full blur-[100px] -z-0"
        style={{
          background: `radial-gradient(circle, ${OLIVE}AA, transparent 70%)`,
        }}
        aria-hidden
      />
      {/* Increased Glows - Azure halo */}
      <div
        className="absolute inset-0 m-auto h-[400px] w-[400px] rounded-full blur-[90px] -z-0 opacity-60"
        style={{
          background: `radial-gradient(circle, ${AZURE}66, transparent 70%)`,
        }}
        aria-hidden
      />

      {/* Phone frame, tilted */}
      <motion.div
        whileHover={{ rotateY: -14, rotateX: 6 }}
        transition={{ type: "spring", stiffness: 120, damping: 14 }}
        style={{
          transform: "rotateY(-18deg) rotateX(8deg) rotateZ(-2deg)",
          transformStyle: "preserve-3d",
        }}
        className="relative z-10 w-[250px] md:w-[280px] h-[500px] md:h-[560px] rounded-[3rem] border-8 border-slate-900 bg-slate-900 shadow-[0_50px_120px_-30px_rgba(5,15,40,0.6)] overflow-hidden"
      >
        {/* Notch */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 z-30 h-6 w-28 rounded-full bg-slate-900" />

        {/* Screen */}
        <div className="relative h-full w-full overflow-hidden rounded-[2.4rem] bg-black">
          <AnimatePresence mode="sync">
            <motion.img
              key={idx}
              src={phoneImages[idx]}
              alt="Real-world brand activation"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </AnimatePresence>

          {/* Bottom info pill */}
          <div className="absolute bottom-5 left-4 right-4 rounded-2xl backdrop-blur-2xl bg-white/10 border border-white/20 px-4 py-3 text-white">
            <p className="text-[9px] uppercase tracking-widest opacity-70">
              Live activation
            </p>
            <p className="text-sm font-semibold">Real-world. Real impact.</p>
            <div className="mt-1 flex gap-1">
              <div className="h-1 flex-1 rounded-full bg-white/30" />
              <div className="h-1 flex-1 rounded-full bg-white/30" />
              <div className="h-1 flex-1 rounded-full bg-white" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating glass stat badges - Positioned adaptively */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.7 }}
        className="absolute top-16 left-[-20px] md:top-10 md:left-2 z-20 rounded-2xl backdrop-blur-2xl bg-white/5 border border-white/30 px-4 py-3 shadow-[0_20px_50px_-20px_rgba(15,42,90,0.3)]"
      >
        <div className="flex items-center gap-3">
          <span
            className="grid h-9 w-9 place-items-center rounded-full text-white"
            style={{
              background: `linear-gradient(135deg, ${AZURE}, ${OLIVE})`,
            }}
          >
            <Sparkles size={16} />
          </span>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-[var(--obsidian)]/55">
              Live now
            </p>
            <p className="text-sm font-semibold text-[var(--obsidian)]">
              12 active campaigns
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.7 }}
        className="absolute bottom-16 right-[-10px] md:right-0 z-20 rounded-2xl backdrop-blur-2xl bg-white/5 border border-white/30 px-4 py-3 shadow-[0_20px_50px_-20px_rgba(15,42,90,0.3)]"
      >
        <p className="text-[10px] uppercase tracking-widest text-[var(--obsidian)]/55">
          Reach
        </p>
        <p className="text-sm font-semibold text-[var(--obsidian)]">
          2,500+ venues
        </p>
      </motion.div>

      {/* Rotating dashed rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-2 right-2 h-24 w-24 rounded-full border-2 border-dashed"
        style={{ borderColor: `${AZURE}55` }}
        aria-hidden
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-2 left-6 h-16 w-16 rounded-full border-2 border-dashed"
        style={{ borderColor: `${OLIVE}77` }}
        aria-hidden
      />
    </div>
  );
}

function SecondHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // Adjusted for mid-page visibility
  });

  const phoneY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[80vh] flex items-center py-24 overflow-hidden bg-slate-50/50"
    >
      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* LEFT SIDE: Smartphone Portal (First on Mobile & Desktop) */}
        <motion.div
          style={{ y: phoneY, opacity }}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative order-first"
        >
          <PhonePortal />
        </motion.div>

        {/* RIGHT SIDE: Minimal Content */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <span
              className="text-xs font-bold uppercase tracking-[0.3em]"
              style={{ color: AZURE }}
            >
              The Portal
            </span>

            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[var(--obsidian)]">
              Digital Experience. <br />
              <span className="opacity-40">Real-World Scale.</span>
            </h2>

            <p className="max-w-md text-lg text-[var(--obsidian)]/60 leading-relaxed">
              Seamlessly bridge the gap between high-intent digital users and
              physical brand interactions.
            </p>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 font-bold group"
            >
              See how it works
              <ArrowRight
                size={20}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "Brand Launches",
    "Expo Stalls",
    "Retail Branding",
    "RWA Activations",
    "Corporate",
    "Sampling",
    "Packaging",
    "Merchandising",
  ];
  return (
    <section className="border-y border-white/5 py-8 overflow-hidden">
      <div className="flex gap-12 whitespace-nowrap animate-[marquee_28s_linear_infinite]">
        {[...items, ...items].map((t, i) => (
          <div key={i} className="flex items-center gap-12 text-foreground/40">
            <span className="text-xl md:text-2xl font-medium">{t}</span>
            <span className="text-primary">✦</span>
          </div>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
    </section>
  );
}

// Mapping icons to your pillars for that "Modern Studio" feel
const iconMap: Record<string, any> = {
  Activations: Zap,
  "Physical Branding": Layout,
  Production: Box,
  Retail: ShoppingBag,
  Events: Tent,
  Broadcast: Radio,
  Sampling: Users,
  Strategy: Map,
};

export function ServicesPreview() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Dynamic Background Blurs */}
      <div className="absolute left-0 top-1/4 -z-10 h-96 w-96 rounded-full bg-[var(--sky)]/10 blur-[100px]" />
      <div className="absolute right-0 bottom-1/4 -z-10 h-96 w-96 rounded-full bg-[var(--parrot)]/10 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader
            eyebrow="Capabilities"
            title={
              <span className="leading-tight">
                Eight pillars. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--sky)] to-[var(--parrot)]">
                  One ecosystem.
                </span>
              </span>
            }
            desc="The bridge between a digital concept and a physical reality."
          />
          <Link
            to="/services"
            className="group mb-2 hidden text-sm font-bold uppercase tracking-widest text-[var(--sky)] md:block"
          >
            View Expertise{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            const Icon = iconMap[s.category] || Zap;

            // LOGIC: Insert advertisement images at specific intervals
            // We'll show an "Ad" card after the 2nd and 5th service card
            const showAd = i === 2 || i === 5;

            return (
              <>
                <motion.div
                  key={s.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.05 }}
                  className="col-span-1"
                >
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="group relative flex h-full min-h-[320px] flex-col justify-between overflow-hidden rounded-[2rem] border border-[var(--obsidian)]/5 bg-white/50 p-8 backdrop-blur-md transition-all hover:bg-white hover:shadow-2xl hover:shadow-[var(--sky)]/10"
                  >
                    <div className="flex items-start justify-between">
                      <div className="rounded-2xl bg-[var(--obsidian)]/5 p-3 text-[var(--obsidian)] group-hover:bg-[var(--sky)] group-hover:text-white transition-colors">
                        <Icon size={22} />
                      </div>
                      <ArrowUpRight
                        size={20}
                        className="text-[var(--obsidian)]/20 transition-all group-hover:text-[var(--sky)] group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </div>

                    <div className="mt-8">
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--sky)]">
                        {s.category}
                      </p>
                      <h3 className="mt-2 text-xl font-bold tracking-tight text-[var(--obsidian)]">
                        {s.title}
                      </h3>
                      <p className="mt-3 line-clamp-2 text-sm text-[var(--obsidian)]/50">
                        {s.desc}
                      </p>
                    </div>

                    <span className="absolute bottom-6 right-8 text-5xl font-black text-[var(--obsidian)]/[0.03] italic">
                      0{i + 1}
                    </span>
                  </Link>
                </motion.div>

                {/* ADVERTISEMENT / MEDIA CARDS */}
                {showAd && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="col-span-1 lg:col-span-2 relative overflow-hidden rounded-[2rem] bg-[var(--obsidian)] group cursor-pointer"
                  >
                    {/* Placeholder for your actual project image/video */}
                    <img
                      src={
                        i === 2
                          ? "https://i.extremetech.com/imagery/content-types/01X34i9oHzZc7wTmRtY6OqC/hero-image.fill.size_1200x675.jpg"
                          : "https://drivingmotion.com/wp-content/uploads/2023/06/2.-The-newly-unveiled-Mercedes-AMG-EQS-53-4MATIC-and-Mercedes-AMG-EQE-53-4MATIC-taking-center-stage-at-MBFWKL.jpg"
                      }
                      alt="Project Showcase"
                      className="h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--obsidian)] via-transparent to-transparent" />

                    <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
                      <div>
                        <span className="rounded-full bg-[var(--parrot)] px-3 py-1 text-[10px] font-bold uppercase text-[var(--obsidian)]">
                          Featured Work
                        </span>
                        <h4 className="mt-2 text-lg font-bold text-white">
                          {i === 2
                            ? "Samsung Galaxy Launch"
                            : "Mercedes Expo Arena"}
                        </h4>
                      </div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white transition-transform group-hover:scale-110">
                        <Play size={20} fill="currentColor" />
                      </div>
                    </div>
                  </motion.div>
                )}
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
}
const reachStats = [
  { label: "Residential RWAs", value: 1000, suffix: "+", icon: MapPin },
  { label: "Tech Parks", value: 500, suffix: "+", icon: Target },
  { label: "Entertainment Hubs", value: 500, suffix: "+", icon: Users },
  { label: "Premium Malls", value: 1000, suffix: "+", icon: Globe2 },
];

export function ReachBand() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Decorative "Data Grid" */}
      <div className="absolute inset-0 -z-10 opacity-[0.03] [mask-image:radial-gradient(ellipse_at_center,black,transparent)]">
        <div className="absolute inset-0 h-full w-full bg-[grid-line:var(--obsidian)] [background-size:40px_40px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-[var(--obsidian)]/5 bg-white/40 p-8 md:p-16 backdrop-blur-xl shadow-2xl shadow-[var(--sky)]/5">
          {/* Subtle Glows */}
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[var(--sky)]/10 blur-[80px]" />
          <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-[var(--parrot)]/10 blur-[80px]" />

          <div className="relative z-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 rounded-full bg-[var(--sky)]/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--sky)]"
              >
                <Globe2 size={14} className="animate-pulse" /> Network
                Intelligence
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mt-6 text-4xl font-bold tracking-tight text-[var(--obsidian)] md:text-6xl"
              >
                A footprint that <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--sky)] to-[var(--parrot)]">
                  moves markets.
                </span>
              </motion.h2>

              <p className="mt-6 max-w-lg text-lg text-[var(--obsidian)]/60 leading-relaxed">
                Strategic placements across India's most high-intent zones. From
                premium residential clusters to high-traffic retail corridors.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Link
                to="/reach"
                className="group flex items-center gap-3 rounded-2xl bg-[var(--obsidian)] px-8 py-4 text-sm font-bold text-white transition-all hover:bg-[var(--sky)] hover:shadow-xl hover:shadow-[var(--sky)]/20 active:scale-95"
              >
                Explore Full Reach
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          </div>

          {/* Stats Grid - Ultra Responsive */}
          <div className="relative z-10 mt-20 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {reachStats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative rounded-3xl border border-[var(--obsidian)]/5 bg-white/50 p-6 transition-all hover:bg-white hover:shadow-lg"
              >
                <div className="flex flex-row items-center gap-4 lg:flex-col lg:items-start lg:gap-2">
                  <div className="mb-2 rounded-xl bg-[var(--sky)]/5 p-3 text-[var(--sky)] transition-colors group-hover:bg-[var(--sky)] group-hover:text-white">
                    <s.icon size={24} strokeWidth={1.5} />
                  </div>

                  <div>
                    <p className="text-3xl font-black tracking-tighter text-[var(--obsidian)] md:text-4xl">
                      {/* Assuming Counter component exists, otherwise use s.value */}
                      <Counter to={s.value} suffix={s.suffix} />
                    </p>
                    <p className="text-[11px] font-bold uppercase tracking-widest text-[var(--obsidian)]/40 group-hover:text-[var(--sky)] transition-colors">
                      {s.label}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Simple internal helper if you don't have a Counter component
function Counter({ to, suffix }: { to: number; suffix: string }) {
  // Replace this with your actual Counter component logic
  return (
    <>
      {to}
      {suffix}
    </>
  );
}

const cases = [
  {
    title: "Pan-India Metro Takeover",
    client: "FMCG Beverage Brand",
    img: "https://media.assettype.com/freepressjournal/2025-10-29/uem5shrv/Mumbai-Metro-3.jpg",
    tag: "Out-of-Home",
    metric: "12M+ Impressions",
    icon: BarChart3,
    desc: "A 6-week metro pillar & concourse takeover across 4 cities — synced with sampling squads at exit gates.",
  },
  {
    title: "Cinematic Product Launch",
    client: "Consumer Tech",
    img: "https://i.ytimg.com/vi/iXOEE-Kn3jw/maxresdefault.jpg",
    tag: "Brand Launch",
    metric: "38% Press Coverage",
    icon: Users,
    desc: "Stage design, AV, hospitality and post-event content for a flagship product reveal in Bengaluru.",
  },
  {
    title: "Pavilion Expo Stall",
    client: "B2B Industrial",
    img: "https://xs-worldwide.com/wp-content/uploads/2024/07/6th-pic-1920x1440.jpg",
    tag: "Expo Excellence",
    metric: "Ranked #1 Footfall",
    icon: Target,
    desc: "Architectural double-deck stall with live demo zones — engineered, fabricated and crewed end-to-end.",
  },
  {
    title: "Mall Storefront Rollout",
    client: "D2C Lifestyle",
    img: "https://s3.mortarr.com/images/project_gallery_images/architecture-design-collaborative-mall-storefront-design-1920x1920.jpeg",
    tag: "Retail Identity",
    metric: "42 Stores Live",
    icon: TrendingUp,
    desc: "Visual identity rollout across mall storefronts, in-store collateral and shopper journey signage.",
  },
];

export function CaseStudiesPreview() {
  return (
    <section className="relative py-32 overflow-hidden bg-white">
      {/* Abstract Background Accent */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-[var(--sky)]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <SectionHeader
            eyebrow="Selected work"
            title={
              <span className="leading-tight">
                Engineering impact, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--sky)] to-[var(--parrot)]">
                  one city at a time.
                </span>
              </span>
            }
            desc="Real briefs, real metrics — a snapshot of how we architect physical brand experiences."
          />
          <Link
            to="/case-studies"
            className="hidden md:flex items-center gap-2 font-bold text-sm uppercase tracking-widest text-[var(--obsidian)] group"
          >
            Explore Portfolio
            <ArrowUpRight
              size={18}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {cases.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative flex flex-col rounded-[2.5rem] bg-white border border-[var(--obsidian)]/5 overflow-hidden transition-all hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] hover:border-[var(--sky)]/20"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={c.img}
                  alt={c.title}
                  className="h-full w-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--obsidian)]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Floating Tag */}
                <div className="absolute top-6 left-6 flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-md px-4 py-1.5 shadow-sm">
                  <div className="h-1.5 w-1.5 rounded-full bg-[var(--sky)] animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--obsidian)]">
                    {c.tag}
                  </span>
                </div>
              </div>

              {/* Content Container */}
              <div className="flex-1 p-8 flex flex-col">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--sky)] mb-2">
                      {c.client}
                    </p>
                    <h3 className="text-2xl font-bold tracking-tight text-[var(--obsidian)] leading-none">
                      {c.title}
                    </h3>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--obsidian)]/5 bg-slate-50 transition-all group-hover:bg-[var(--obsidian)] group-hover:text-white">
                    <ArrowUpRight size={20} />
                  </div>
                </div>

                <p className="text-base text-[var(--obsidian)]/60 leading-relaxed mb-8">
                  {c.desc}
                </p>

                {/* Metric Bento Pill */}
                <div className="mt-auto inline-flex items-center gap-3 rounded-2xl bg-[var(--ice)]/40 border border-[var(--sky)]/10 p-4 transition-all group-hover:bg-[var(--sky)]/5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm text-[var(--sky)]">
                    <c.icon size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--obsidian)]/40 leading-none mb-1">
                      Campaign Impact
                    </p>
                    <p className="text-lg font-black text-[var(--obsidian)] leading-none">
                      {c.metric}
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Mobile View All Link */}
        <div className="mt-12 md:hidden flex justify-center">
          <Link
            to="/case-studies"
            className="btn-magnetic w-full py-4 text-center"
          >
            View All Work
          </Link>
        </div>
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Soft Background Orbs */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[var(--sky)]/10 to-[var(--parrot)]/10 blur-[120px]" />

      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[3rem] border border-white/40 bg-white/60 px-8 py-16 text-center backdrop-blur-xl shadow-2xl shadow-[var(--sky)]/5 md:px-20 md:py-20"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--sky)]/10 text-[var(--sky)] mb-6"
          >
            <Zap size={28} fill="currentColor" />
          </motion.div>

          <h2 className="text-4xl font-bold tracking-tight text-[var(--obsidian)] md:text-6xl">
            Let's build the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--sky)] to-[var(--parrot)]">
              unforgettable.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-lg text-lg text-[var(--obsidian)]/60">
            From single-city activations to pan-India rollouts—bring the
            ambition, we'll engineer the physical reality.
          </p>

          <div className="mt-10 flex flex-col items-center gap-6">
            <Link
              to="/contact"
              className="group flex items-center gap-2 rounded-full bg-[var(--obsidian)] px-10 py-4 text-lg font-bold text-white transition-all hover:scale-105 hover:shadow-xl hover:shadow-[var(--sky)]/20 active:scale-95"
            >
              Start a Project
              <ArrowRight
                size={20}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-[var(--obsidian)]/40">
              <span className="flex items-center gap-1.5">
                <Send size={14} /> 2hr Response
              </span>
              <span className="h-3 w-px bg-[var(--obsidian)]/10" />
              <span className="flex items-center gap-1.5">
                <Sparkles size={14} /> India-Wide
              </span>
            </div>
          </div>

          {/* Clean Grid Overlay */}
          <div className="absolute inset-0 -z-10 opacity-[0.03] [mask-image:radial-gradient(ellipse_at_center,black,transparent)] bg-[grid-line:var(--obsidian)] [background-size:30px_30px]" />
        </motion.div>
      </div>
    </section>
  );
}
export function SectionHeader({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="max-w-3xl">
      <span className="text-xs uppercase tracking-widest text-primary font-semibold">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
        {title}
      </h2>
      {desc && (
        <p className="mt-5 text-lg text-foreground/65 max-w-2xl">{desc}</p>
      )}
    </div>
  );
}
