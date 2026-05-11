import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Sparkles } from "lucide-react";
import metroImg from "@/assets/orbit/metro.png";
import busImg from "@/assets/orbit/bus.png";
import boothImg from "@/assets/orbit/booth.png";
import billboardImg from "@/assets/orbit/billboard.png";
import bottleImg from "@/assets/orbit/bottle.png";
import umbrellaImg from "@/assets/orbit/umbrella.png";
import keychainImg from "@/assets/orbit/keychain.png";
import bagImg from "@/assets/orbit/bag.png";
import BackgroundEffects from "@/pages/BackgroundEffects";

const AZURE = "#1D90FF";
const MINT = "#34D399";

type OrbitItem = {
  img: string;
  label: string;
  detail: string;
  ring: 0 | 1;
  angle: number;
};

const items: OrbitItem[] = [
  { img: metroImg,     label: "Metro Banners",     detail: "Premium metro branding across high-traffic corridors.", ring: 0, angle: 0 },
  { img: busImg,       label: "Bus Wraps",         detail: "Full-body bus wraps reaching 2M+ daily commuters.",     ring: 0, angle: 90 },
  { img: boothImg,     label: "Event Booths",      detail: "Architectural booths engineered to dominate the floor.", ring: 0, angle: 180 },
  { img: billboardImg, label: "Outdoor Banners",   detail: "City-wide hoardings, gantries and roadside placements.", ring: 0, angle: 270 },
  { img: bottleImg,    label: "Branded Bottles",   detail: "Custom bottles & merch for sampling and gifting.",      ring: 1, angle: 45 },
  { img: umbrellaImg,  label: "Branded Umbrellas", detail: "Weather-ready umbrellas for cafés, kiosks and events.", ring: 1, angle: 135 },
  { img: keychainImg,  label: "Keychains & SWAG",  detail: "Pocket-sized brand reminders for daily touchpoints.",   ring: 1, angle: 225 },
  { img: bagImg,       label: "Branded Bags",      detail: "Reusable totes that carry your brand across the city.", ring: 1, angle: 315 },
];

export function OrbitalGallery() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number | null>(null);
  const [hover, setHover] = useState<number | null>(null);
  const [size, setSize] = useState({ inner: 180, outer: 300, tile: 78 });

  const mx = useMotionValue(-400);
  const my = useMotionValue(-400);
  const smx = useSpring(mx, { stiffness: 120, damping: 18, mass: 0.6 });
  const smy = useSpring(my, { stiffness: 120, damping: 18, mass: 0.6 });

  useEffect(() => {
    const apply = () => {
      const w = window.innerWidth;
      if (w < 480) setSize({ inner: 105, outer: 170, tile: 56 });
      else if (w < 768) setSize({ inner: 135, outer: 215, tile: 64 });
      else if (w < 1024) setSize({ inner: 170, outer: 270, tile: 78 });
      else setSize({ inner: 200, outer: 330, tile: 92 });
    };
    apply();
    window.addEventListener("resize", apply);
    return () => window.removeEventListener("resize", apply);
  }, []);

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  };
  const onLeave = () => {
    mx.set(-400);
    my.set(-400);
  };

  const activeItem = active !== null ? items[active] : null;
  const centerSize = size.tile < 70 ? 130 : 170;

  return (
    <section
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative overflow-hidden py-24 md:py-32"
      style={{
        background:
          "linear-gradient(180deg, color-mix(in oklab, var(--ice) 55%, white) 0%, white 50%, white 100%)",
      }}
    >
        <BackgroundEffects/>
      {/* Cursor glow */}
      <motion.div
        aria-hidden
        style={{
          x: smx,
          y: smy,
          translateX: "-50%",
          translateY: "-50%",
          background: `radial-gradient(circle, ${AZURE}55 0%, ${AZURE}1f 35%, transparent 70%)`,
        }}
        className="pointer-events-none absolute top-0 left-0 h-[420px] w-[420px] rounded-full blur-3xl z-0"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-widest font-semibold text-primary">
            Marketing Excellence
          </span>
          <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] text-[var(--obsidian)]">
            One brand. <span className="text-gradient">Every surface.</span>
          </h2>
          <p className="mt-5 text-lg text-[var(--obsidian)]/65">
            From metro pillars to pocketable swag — explore the orbit of touchpoints we engineer for modern brands.
          </p>
        </div>

        <div
          className="relative mt-16 mx-auto flex items-center justify-center"
          style={{ height: size.outer * 2 + 100 }}
        >
          {/* === ADVANCED ORBITAL PATHS === */}
<div className="absolute inset-0 pointer-events-none flex items-center justify-center">
  {/* Inner Path with subtle dash-array animation */}
  <svg width={size.inner * 2 + 20} height={size.inner * 2 + 20} className="absolute opacity-20">
    <circle
      cx={size.inner + 10}
      cy={size.inner + 10}
      r={size.inner}
      fill="none"
      stroke={AZURE}
      strokeWidth="1.5"
      strokeDasharray="4 8"
      className="animate-[spin_60s_linear_infinite]"
    />
  </svg>
  
  {/* Outer Path with double-line technical feel */}
  <svg width={size.outer * 2 + 20} height={size.outer * 2 + 20} className="absolute opacity-10">
    <circle
      cx={size.outer + 10}
      cy={size.outer + 10}
      r={size.outer}
      fill="none"
      stroke={MINT}
      strokeWidth="1"
    />
    <circle
      cx={size.outer + 10}
      cy={size.outer + 10}
      r={size.outer + 6}
      fill="none"
      stroke={MINT}
      strokeWidth="0.5"
      strokeDasharray="100 20"
      className="animate-[spin_100s_linear_infinite_reverse]"
    />
  </svg>
</div>

{/* === ELITE CENTERPIECE CORE === */}
<div
  className="absolute z-20 grid place-items-center"
  style={{ width: centerSize + 100, height: centerSize + 100 }}
>
  {/* Deep Ambient Glow */}
  <motion.div
    animate={{ 
      scale: [1, 1.2, 1],
      opacity: [0.2, 0.4, 0.2] 
    }}
    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
    className="absolute inset-0 rounded-full blur-[60px]"
    style={{ background: `radial-gradient(circle, ${AZURE}, ${MINT}, transparent)` }}
  />

  {/* The "Power Ring" - Conic Gradient Border */}
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
    className="absolute rounded-full p-[2px]"
    style={{
      width: centerSize + 20,
      height: centerSize + 20,
      background: `conic-gradient(from 0deg, transparent, ${AZURE}, ${MINT}, transparent, ${AZURE})`,
      mask: "radial-gradient(circle, transparent 65%, black 67%)",
      WebkitMask: "radial-gradient(circle, transparent 65%, black 67%)",
    }}
  />

  {/* Multiple Pulsing Radar Waves */}
  {[0, 1, 2].map((i) => (
    <motion.div
      key={i}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 2, opacity: 0 }}
      transition={{ 
        duration: 3, 
        repeat: Infinity, 
        delay: i * 1,
        ease: "easeOut" 
      }}
      className="absolute rounded-full border border-blue-400/30"
      style={{ width: centerSize, height: centerSize }}
    />
  ))}

  {/* Premium Glass core */}
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="relative grid place-items-center rounded-full text-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden"
    style={{
      width: centerSize,
      height: centerSize,
      background: `linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))`,
      backdropFilter: "blur(20px)",
      border: "1px solid rgba(255,255,255,0.3)",
    }}
  >
    {/* Animated Internal Liquid Glow */}
    <motion.div 
      animate={{ 
        x: [-20, 20, -20],
        y: [-10, 10, -10]
      }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="absolute w-full h-full opacity-40"
      style={{
        background: `radial-gradient(circle at center, ${AZURE}, transparent 70%)`,
        filter: "blur(20px)"
      }}
    />

    <div className="relative z-10 text-center flex flex-col items-center">
      <div className="bg-white/20 p-2 rounded-lg backdrop-blur-md mb-2">
        <Sparkles size={20} className="text-white" />
      </div>
      <p className="text-[10px] uppercase tracking-[0.3em] font-black text-blue-100">Bill Craft</p>
      <h3 className="text-lg md:text-xl font-black leading-none mt-1 drop-shadow-md">
        MARKETING<br/><span className="text-[12px] font-medium opacity-80">CORE</span>
      </h3>
    </div>

    {/* Surface Reflection Line */}
    <div 
      className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] rotate-[35deg] pointer-events-none"
      style={{
        background: "linear-gradient(to bottom, transparent 45%, rgba(255,255,255,0.1) 50%, transparent 55%)",
      }}
    />
  </motion.div>
</div>

          {/* Two orbit groups */}
          {[0, 1].map((ring) => {
            const radius = ring === 0 ? size.inner : size.outer;
            const duration = ring === 0 ? 38 : 52;
            const direction = ring === 0 ? 360 : -360;
            const isPaused = hover !== null && items[hover].ring === ring;

            return (
              <motion.div
                key={ring}
                animate={{ rotate: isPaused ? undefined : direction }}
                transition={{ duration, repeat: Infinity, ease: "linear" }}
                className="absolute"
                style={{ width: radius * 2, height: radius * 2 }}
              >
                {items
                  .filter((it) => it.ring === ring)
                  .map((it, localIdx) => {
                    const globalIdx = items.indexOf(it);
                    const angleRad = (it.angle * Math.PI) / 180;
                    const x = radius + Math.cos(angleRad) * radius;
                    const y = radius + Math.sin(angleRad) * radius;
                    const isActive = active === globalIdx;
                    const isHover = hover === globalIdx;
                    const showLabel = isHover || isActive;

                    return (
                      <motion.button
                        key={it.label}
                        type="button"
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{
                          delay: 0.1 + localIdx * 0.08,
                          type: "spring",
                          stiffness: 180,
                          damping: 14,
                        }}
                        onMouseEnter={() => setHover(globalIdx)}
                        onMouseLeave={() => setHover(null)}
                        onClick={() => setActive(isActive ? null : globalIdx)}
                        className="absolute -translate-x-1/2 -translate-y-1/2 z-10 focus:outline-none"
                        style={{ left: x, top: y }}
                        aria-label={it.label}
                      >
                        {/* Counter-rotate to keep upright */}
                        <motion.div
                          animate={{ rotate: isPaused ? undefined : -direction }}
                          transition={{ duration, repeat: Infinity, ease: "linear" }}
                        >
                          <motion.div
                            animate={{
                              scale: showLabel ? 1.18 : 1,
                              y: [0, -5, 0],
                            }}
                            transition={{
                              scale: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                              y: { duration: 3 + localIdx * 0.3, repeat: Infinity, ease: "easeInOut" },
                            }}
                            className="relative grid place-items-center rounded-2xl bg-white border"
                            style={{
                              width: size.tile,
                              height: size.tile,
                              borderColor: showLabel
                                ? AZURE
                                : `color-mix(in oklab, ${AZURE} 22%, transparent)`,
                              boxShadow: showLabel
                                ? `0 14px 40px -8px ${AZURE}99, 0 0 28px ${MINT}66`
                                : `0 10px 26px -12px ${AZURE}55`,
                              transition: "box-shadow 0.4s ease, border-color 0.4s ease",
                            }}
                          >
                            <img
                              src={it.img}
                              alt={it.label}
                              loading="lazy"
                              width={512}
                              height={512}
                              className="h-[98%] w-[98%] object-contain"
                              draggable={false}
                            />

                            {/* Label tooltip — hidden by default, smooth fade on hover/active */}
                            <AnimatePresence>
                              {showLabel && (
                                <motion.span
                                  initial={{ opacity: 0, y: -4, scale: 0.95 }}
                                  animate={{ opacity: 1, y: 0, scale: 1 }}
                                  exit={{ opacity: 0, y: -4, scale: 0.95 }}
                                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                                  className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-2.5 py-1 text-[10px] font-semibold text-white shadow-md"
                                  style={{
                                    top: "calc(100% + 8px)",
                                    background: `linear-gradient(135deg, ${AZURE}, ${MINT})`,
                                  }}
                                >
                                  {it.label}
                                </motion.span>
                              )}
                            </AnimatePresence>
                          </motion.div>
                        </motion.div>
                      </motion.button>
                    );
                  })}
              </motion.div>
            );
          })}

          {/* Active detail under center */}
          <AnimatePresence mode="wait">
            {activeItem && (
              <motion.div
                key={activeItem.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
                className="absolute left-1/2 -translate-x-1/2 z-30 max-w-xs text-center px-4 py-2.5 rounded-full bg-white/85 backdrop-blur-xl border shadow-md"
                style={{
                  top: `calc(50% + ${centerSize / 2 + 28}px)`,
                  borderColor: `${AZURE}55`,
                }}
              >
                <p className="text-sm font-medium text-[var(--obsidian)]">{activeItem.detail}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
