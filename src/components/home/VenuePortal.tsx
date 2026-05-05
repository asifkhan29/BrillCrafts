import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
  AnimatePresence,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Train, Film, Bus, Radio } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

type VenueKey = "metro" | "cinema" | "arena" | "bus";

interface Venue {
  key: VenueKey;
  label: string;
  city: string;
  icon: typeof Train;
  width: number;
  height: number;
  radius: string;
  color: string;
  glow: string; // rgb triplet
  ad: { brand: string; line: string; bg: string; text: string };
}

const venues: Venue[] = [
  {
    key: "metro",
    label: "MUMBAI METRO L3",
    city: "Andheri Concourse · Pillar 7B",
    icon: Train,
    width: 170,
    height: 380,
    radius: "rounded-sm",
    color: "#1D90FF",
    glow: "29,144,255",
    ad: {
      brand: "AZURE",
      line: "Move with the city.",
      bg: "linear-gradient(180deg,#0A2540 0%,#1D90FF 55%,#7CC4FF 100%)",
      text: "#EAF6FF",
    },
  },
  {
    key: "cinema",
    label: "PVR DIRECTOR'S CUT",
    city: "DLF Vasant Kunj · Audi 3",
    icon: Film,
    width: 560,
    height: 300,
    radius: "rounded-lg",
    color: "#1D90FF",
    glow: "29,144,255",
    ad: {
      brand: "AZURE",
      line: "Premium. Felt in every frame.",
      bg: "linear-gradient(135deg,#0A2540 0%,#1D90FF 55%,#7CC4FF 100%)",
      text: "#EAF6FF",
    },
  },
  {
    key: "arena",
    label: "JIO WORLD ARENA",
    city: "BKC · Center Stage LED",
    icon: Radio,
    width: 600,
    height: 320,
    radius: "rounded-md",
    color: "#10B981",
    glow: "16,185,129",
    ad: {
      brand: "VERDE",
      line: "Tonight, the city listens.",
      bg: "linear-gradient(135deg,#022C22 0%,#059669 50%,#A7F3D0 100%)",
      text: "#ECFDF5",
    },
  },
  {
    key: "bus",
    label: "DELHI TRANSIT · ROUTE 543",
    city: "Connaught Place Loop",
    icon: Bus,
    width: 620,
    height: 220,
    radius: "rounded-2xl",
    color: "#10B981",
    glow: "16,185,129",
    ad: {
      brand: "VERDE",
      line: "Carry your brand across the city.",
      bg: "linear-gradient(90deg,#022C22 0%,#059669 50%,#6EE7B7 100%)",
      text: "#ECFDF5",
    },
  },
];

export function VenuePortal() {
  const [idx, setIdx] = useState(0);
  const venue = venues[idx];
  const isMobile = useIsMobile();

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % venues.length), 3800);
    return () => clearInterval(id);
  }, []);

  // 3D dampened tilt
  const wrapRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const tiltMax = isMobile ? 3 : 10;
  const rx = useSpring(useTransform(my, [-1, 1], [tiltMax, -tiltMax]), {
    mass: 0.5,
    stiffness: 50,
    damping: 14,
  });
  const ry = useSpring(useTransform(mx, [-1, 1], [-tiltMax * 1.2, tiltMax * 1.2]), {
    mass: 0.5,
    stiffness: 50,
    damping: 14,
  });

  const onMove = (e: React.MouseEvent) => {
    if (isMobile) return;
    const r = wrapRef.current?.getBoundingClientRect();
    if (!r) return;
    mx.set(((e.clientX - r.left) / r.width - 0.5) * 2);
    my.set(((e.clientY - r.top) / r.height - 0.5) * 2);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  const ambient = `radial-gradient(closest-side, rgba(${venue.glow},0.42), transparent 70%)`;
  const ground = `radial-gradient(ellipse at 50% 100%, rgba(${venue.glow},0.55), rgba(${venue.glow},0.12) 40%, transparent 70%)`;

  // fluid stage size
  const aspect = venue.width / venue.height;

  return (
    <div
      ref={wrapRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative w-full max-w-[90vw] mx-auto"
      style={{ aspectRatio: "4 / 3" }}
    >
      {/* ambient room glow */}
      <motion.div
        key={`amb-${venue.key}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 pointer-events-none"
        style={{ background: ambient }}
      />

      {/* ground reflection (color follows ad) */}
      <motion.div
        key={`gr-${venue.key}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="absolute left-1/2 -translate-x-1/2 bottom-2 w-[80%] h-[18%] blur-2xl pointer-events-none"
        style={{ background: ground }}
      />

      {/* stage */}
      <motion.div
        style={{ rotateX: rx, rotateY: ry, transformPerspective: 1200 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div
          className="relative flex items-center justify-center"
          style={{
            width:
              venue.key === "metro"
                ? "clamp(140px, 38%, 220px)"
                : "clamp(280px, 88%, 680px)",
            aspectRatio: aspect,
          }}
        >
          {/* venue label chip */}
          <div className="absolute -top-10 left-0 right-0 flex justify-center z-30">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-slate-200 text-[10px] sm:text-xs text-slate-700 shadow-sm">
              <venue.icon className="w-3.5 h-3.5" style={{ color: venue.color }} />
              <span className="font-semibold tracking-wider">{venue.label}</span>
              <span className="text-slate-400 hidden sm:inline">· {venue.city}</span>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={venue.key}
              initial={{ opacity: 0, y: 20, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(12px)" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className={`relative w-full h-full ${venue.radius} overflow-hidden shadow-2xl`}
              style={{
                background: venue.ad.bg,
                boxShadow: `0 30px 80px -20px rgba(${venue.glow},0.55), 0 0 0 1px rgba(255,255,255,0.4) inset`,
              }}
            >
              {/* Ad content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 text-center">
                <span
                  className="text-[10px] tracking-[0.3em] mb-2 opacity-70"
                  style={{ color: venue.ad.text }}
                >
                  AD · LIVE
                </span>
                <div
                  className="font-black tracking-tight leading-none"
                  style={{
                    color: venue.ad.text,
                    fontSize: "clamp(1.6rem, 6vw, 4rem)",
                  }}
                >
                  {venue.ad.brand}
                </div>
                <div
                  className="mt-2 opacity-80"
                  style={{
                    color: venue.ad.text,
                    fontSize: "clamp(0.7rem, 1.4vw, 1rem)",
                  }}
                >
                  {venue.ad.line}
                </div>
              </div>

              {/* shine sweep */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ x: "-100%" }}
                animate={{ x: "120%" }}
                transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 1.5, ease: "easeInOut" }}
                style={{
                  background:
                    "linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.35) 50%, transparent 70%)",
                }}
              />

              {/* scanlines */}
              <div
                className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, rgba(0,0,0,0.4) 0px, rgba(0,0,0,0.4) 1px, transparent 1px, transparent 3px)",
                }}
              />

              <VenueChrome venue={venue} />
            </motion.div>
          </AnimatePresence>

          {/* Outer scenery animates with venue */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`outer-${venue.key}`}
              initial={{ opacity: 0, y: 16, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: 16, filter: "blur(10px)" }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 pointer-events-none"
            >
              <VenueOuter venue={venue} />
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Venue dots */}
      <div className="absolute bottom-1 left-0 right-0 flex justify-center gap-2 z-30">
        {venues.map((v, i) => (
          <button
            key={v.key}
            onClick={() => setIdx(i)}
            className="h-1.5 rounded-full transition-all"
            style={{
              width: i === idx ? 28 : 8,
              background: i === idx ? v.color : "rgba(15,23,42,0.25)",
            }}
            aria-label={v.label}
          />
        ))}
      </div>
    </div>
  );
}

/* Inner chrome: lives inside the ad frame */
function VenueChrome({ venue }: { venue: Venue }) {
  if (venue.key === "metro") {
    return (
      <>
        {/* backlit LED edge glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            boxShadow: `inset 0 0 40px rgba(${venue.glow},0.55), inset 0 0 120px rgba(${venue.glow},0.25)`,
          }}
        />
      </>
    );
  }
  if (venue.key === "cinema") {
    return (
      <>
        <div className="absolute inset-y-0 left-0 w-[6%] bg-gradient-to-r from-black/60 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-[6%] bg-gradient-to-l from-black/60 to-transparent" />
      </>
    );
  }
  if (venue.key === "arena") {
    return (
      <>
        {(["top", "bottom"] as const).map((side) => (
          <div
            key={side}
            className={`absolute left-2 right-2 h-1.5 flex justify-between ${
              side === "top" ? "top-1.5" : "bottom-1.5"
            }`}
          >
            {Array.from({ length: 14 }).map((_, i) => (
              <div key={i} className="w-1 h-1 rounded-full bg-black/40" />
            ))}
          </div>
        ))}
      </>
    );
  }
  // bus inner: window strip
  return (
    <div className="absolute top-3 left-3 right-3 h-3 flex gap-1">
      {Array.from({ length: 9 }).map((_, i) => (
        <div key={i} className="flex-1 rounded-sm bg-white/30" />
      ))}
    </div>
  );
}

/* Outer scenery: surrounds the ad to sell the silhouette */
function VenueOuter({ venue }: { venue: Venue }) {
  if (venue.key === "metro") {
    return (
      <>
        {/* concrete texture overlay on pillar */}
        <div
          className="absolute -left-3 -right-3 -top-6 -bottom-6 -z-10 rounded-md"
          style={{
            background:
              "linear-gradient(180deg,#cbd5e1 0%,#94a3b8 50%,#cbd5e1 100%)",
            backgroundImage:
              "repeating-linear-gradient(45deg, rgba(0,0,0,0.05) 0 2px, transparent 2px 6px)",
            boxShadow: "0 30px 60px -20px rgba(0,0,0,0.25)",
          }}
        />
        {/* metallic top cap (catches LED glow) */}
        <div
          className="absolute -left-4 -right-4 -top-8 h-3 rounded-sm -z-10"
          style={{
            background:
              "linear-gradient(180deg,#94a3b8,#e2e8f0 50%,#64748b)",
            boxShadow: `0 0 20px rgba(${venue.glow},0.5)`,
          }}
        />
        {/* metallic bottom cap */}
        <div
          className="absolute -left-4 -right-4 -bottom-8 h-3 rounded-sm -z-10"
          style={{
            background:
              "linear-gradient(180deg,#64748b,#e2e8f0 50%,#94a3b8)",
            boxShadow: `0 0 20px rgba(${venue.glow},0.5)`,
          }}
        />
      </>
    );
  }
  if (venue.key === "cinema") {
    return (
      <>
        {/* light bleed onto seats */}
        <div
          className="absolute -left-10 -right-10 -bottom-16 h-12 -z-10 blur-2xl"
          style={{
            background: `radial-gradient(ellipse at center top, rgba(${venue.glow},0.7), transparent 70%)`,
          }}
        />
        {/* seats */}
        <div className="absolute -left-8 -right-8 -bottom-10 -z-10 grid grid-cols-12 gap-1">
          {Array.from({ length: 24 }).map((_, i) => (
            <div
              key={i}
              className="h-3 rounded-sm bg-slate-800/80"
              style={{
                boxShadow: `0 -4px 10px rgba(${venue.glow},${0.15 + (i % 3) * 0.1})`,
              }}
            />
          ))}
        </div>
      </>
    );
  }
  if (venue.key === "arena") {
    return (
      <>
        {/* speaker stacks */}
        {[0, 1].map((side) => (
          <div
            key={side}
            className={`absolute -top-6 -bottom-6 w-4 -z-10 flex flex-col gap-1 ${
              side === 0 ? "-left-6" : "-right-6"
            }`}
          >
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex-1 rounded-sm bg-slate-800"
                style={{ boxShadow: `inset 0 0 6px rgba(${venue.glow},0.4)` }}
              />
            ))}
          </div>
        ))}
        {/* stage floor */}
        <div className="absolute -left-6 -right-6 -bottom-4 h-2 -z-10 bg-slate-900 rounded-sm" />
      </>
    );
  }
  // BUS — coach silhouette
  return (
    <>
      {/* front cabin with curved windshield */}
      <div
        className="absolute -right-12 top-0 bottom-0 w-14 -z-10"
        style={{
          background:
            "linear-gradient(180deg,#16a34a 0%,#15803d 50%,#14532d 100%)",
          borderRadius: "60% 30% 30% 30% / 50% 30% 30% 50%",
          boxShadow: "inset -4px 0 8px rgba(0,0,0,0.25)",
        }}
      >
        {/* curved windshield */}
        <div
          className="absolute top-2 left-1 right-2 h-1/2 rounded-tl-[80%] rounded-tr-[40%] rounded-bl-[20%]"
          style={{
            background:
              "linear-gradient(135deg, rgba(186,230,253,0.95), rgba(56,189,248,0.6))",
            boxShadow: "inset 0 1px 2px rgba(255,255,255,0.6)",
          }}
        />
        {/* digital LED route number */}
        <div
          className="absolute bottom-3 left-1 right-2 h-3 rounded-sm flex items-center justify-center text-[8px] font-mono font-bold"
          style={{
            background: "#000",
            color: "#22c55e",
            textShadow: "0 0 4px #22c55e",
          }}
        >
          543
        </div>
        {/* headlight */}
        <div
          className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
          style={{
            background: "#fff8d6",
            boxShadow: "0 0 8px #fde68a, 0 0 16px rgba(253,230,138,0.6)",
          }}
        />
      </div>

      {/* side mirror */}
      <div
        className="absolute -right-14 top-1 w-2 h-3 rounded-sm bg-slate-700"
        style={{ boxShadow: "0 1px 2px rgba(0,0,0,0.3)" }}
      />

      {/* door */}
      <div className="absolute -left-1 top-2 bottom-2 w-2 -z-10 bg-slate-900/50 rounded-sm" />

      {/* wheel arches + wheels */}
      {[0, 1].map((i) => (
        <div
          key={i}
          className="absolute -bottom-3 w-10 h-10 -z-10"
          style={{ left: i === 0 ? "10%" : "70%" }}
        >
          {/* arch */}
          <div
            className="absolute inset-x-0 top-0 h-1/2 rounded-t-full"
            style={{
              background:
                "linear-gradient(180deg, transparent, rgba(0,0,0,0.4))",
            }}
          />
          {/* wheel */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full"
            style={{
              background:
                "radial-gradient(circle at 35% 35%, #475569 0%, #1e293b 60%, #0f172a 100%)",
              boxShadow:
                "0 6px 8px -2px rgba(0,0,0,0.5), inset 0 0 0 2px #0f172a",
            }}
          />
          {/* hubcap */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-slate-300" />
          {/* shadow */}
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-10 h-1.5 rounded-full bg-black/40 blur-sm" />
        </div>
      ))}

      {/* road */}
      <div
        className="absolute -left-16 -right-16 -bottom-6 h-2 -z-10 rounded-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(15,23,42,0.5) 30%, rgba(15,23,42,0.5) 70%, transparent)",
        }}
      />
    </>
  );
}