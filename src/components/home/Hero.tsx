import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useMotionTemplate,
  useInView,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Sparkles,
  Megaphone,
  Store,
  Package,
  Users,
} from "lucide-react";
import { VenuePortal } from "./VenuePortal";
import { TransitBackground } from "./TransitBackground";

function MagneticButton({
  children,
  primary,
  onClick,
}: {
  children: React.ReactNode;
  primary?: boolean;
  onClick?: () => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });

  return (
    <motion.button
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        x.set((e.clientX - r.left - r.width / 2) * 0.4);
        y.set((e.clientY - r.top - r.height / 2) * 0.4);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      onClick={onClick}
      style={{ x: sx, y: sy }}
      className={`group relative inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-full font-medium text-sm tracking-wide transition-colors ${
        primary
          ? "bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-sky-500/20"
          : "border border-slate-300/70 bg-white/60 backdrop-blur-xl text-slate-900 hover:bg-white/80"
      }`}
    >
      {children}
    </motion.button>
  );
}

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1600;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Math.floor(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return (
    <span ref={ref}>
      {n.toLocaleString()}
      {suffix}
    </span>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -80]);

  const mx = useMotionValue(-400);
  const my = useMotionValue(-400);
  const smx = useSpring(mx, { stiffness: 120, damping: 18 });
  const smy = useSpring(my, { stiffness: 120, damping: 18 });
  const cursorBg = useMotionTemplate`radial-gradient(420px circle at ${smx}px ${smy}px, rgba(56,189,248,0.22), transparent 60%)`;

  const headlineWords = ["Where", "Digital", "Ambition", "Meets", "Physical"];

  return (
    <section
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        mx.set(e.clientX - r.left);
        my.set(e.clientY - r.top);
      }}
      onMouseLeave={() => {
        mx.set(-400);
        my.set(-400);
      }}
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-sky-50 via-white to-emerald-50"
    >
      <motion.div className="absolute inset-0 pointer-events-none" style={{ background: cursorBg }} />
      <motion.div
        style={{ y: y1 }}
        className="absolute -top-32 -left-24 w-[420px] h-[420px] rounded-full bg-sky-200/50 blur-3xl"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute -bottom-32 -right-24 w-[420px] h-[420px] rounded-full bg-emerald-200/50 blur-3xl"
      />
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #0f172a 1px, transparent 1px), linear-gradient(to bottom, #0f172a 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <TransitBackground />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 bg-white/60 backdrop-blur-md text-xs text-slate-700 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-sky-500" />
            <span>Future-Offline · Real-World Dominance</span>
          </div>

          <h1
            className="font-black tracking-tight leading-[0.95] text-slate-900"
            style={{ fontSize: "clamp(2.25rem, 7vw, 5.25rem)" }}
          >
            {headlineWords.map((w, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block mr-2 sm:mr-3"
              >
                {w}
              </motion.span>
            ))}
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="inline-block bg-gradient-to-r from-sky-500 via-emerald-400 to-sky-600 bg-clip-text text-transparent"
            >
              Impact.
            </motion.span>
          </h1>

          <p className="mt-6 max-w-xl text-slate-700" style={{ fontSize: "clamp(0.95rem, 1.4vw, 1.125rem)" }}>
            Brill Crafts dominates the offline landscape.{" "}
            <span className="text-slate-900 font-medium">
              1000+ Malls. 500+ Corporate Parks. 1000+ RWAs.
            </span>{" "}
            One unified physical execution engine.
          </p>

          {/* PORTAL on mobile — between headline and CTAs */}
          <div className="lg:hidden my-10">
            <VenuePortal />
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <MagneticButton primary>
              Start a project
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </MagneticButton>
            <MagneticButton>Explore services</MagneticButton>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {[
              { i: Megaphone, t: "Launches" },
              { i: Store, t: "Retail Branding" },
              { i: Users, t: "Sampling" },
              { i: Package, t: "Production" },
            ].map(({ i: Icon, t }) => (
              <div
                key={t}
                className="group relative overflow-hidden inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 bg-white/70 backdrop-blur-md text-xs text-slate-700"
              >
                <Icon className="w-3.5 h-3.5 text-emerald-500" />
                <span>{t}</span>
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/70 to-transparent" />
              </div>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4 sm:gap-6 max-w-lg">
            {[
              { v: 1000, s: "+", l: "RWAs activated" },
              { v: 500, s: "+", l: "Corporate parks" },
              { v: 1000, s: "+", l: "Malls reached" },
            ].map((x) => (
              <div key={x.l}>
                <div className="text-2xl sm:text-3xl font-bold text-slate-900">
                  <Counter to={x.v} suffix={x.s} />
                </div>
                <div className="text-[11px] sm:text-xs text-slate-600 mt-1">{x.l}</div>
              </div>
            ))}
          </div>
        </div>

        
        
        {/* PORTAL on desktop */}
        <div className="hidden lg:block w-full">
          <VenuePortal />
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.3em] text-slate-500">
        SCROLL ↓
      </div>
    </section>
  );
}