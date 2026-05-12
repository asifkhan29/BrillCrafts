import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
  TrainFront,
  Tent,
  ShoppingBag,
  Megaphone,
  Store,
  Building2,
} from "lucide-react";

const SPHERE_TEXTS = ["Bill Craft", "Marketing", "Excellence"];


const AZURE = "#1D90FF";
const MINT = "#0074D9";

const SERVICES = [
  { Icon: TrainFront, label: "Metro Branding", phrase: "Wrapping Metro Corridors" },
  { Icon: Tent, label: "Event Booths", phrase: "Engineering Brand Touchpoints" },
  { Icon: ShoppingBag, label: "Premium Swag", phrase: "Crafting Premium Swag" },
  { Icon: Megaphone, label: "Launches", phrase: "Orchestrating Launches" },
  { Icon: Store, label: "Retail Branding", phrase: "Dressing Retail Floors" },
  { Icon: Building2, label: "RWAs & Malls", phrase: "Activating 1000+ RWAs" },
];

export function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [textIdx, setTextIdx] = useState(0);
  const [activeIdx, setActiveIdx] = useState(0);
  const [exiting, setExiting] = useState(false);

  // Smooth Progress Logic using rAF
  useEffect(() => {
    const start = performance.now();
    const dur = 4200;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setProgress(p * 100);
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setExiting(true), 400);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Interval Logic
  useEffect(() => {
    const id = setInterval(() => setTextIdx((i) => (i + 1) % SPHERE_TEXTS.length), 1100);
    const activeId = setInterval(() => setActiveIdx((i) => (i + 1) % SERVICES.length), 800);
    return () => { clearInterval(id); clearInterval(activeId); };
  }, []);

  useEffect(() => {
    if (exiting) {
      const t = setTimeout(onDone, 850);
      return () => clearTimeout(t);
    }
  }, [exiting, onDone]);

  const radiusPct = 42; 
  const stageSize = "min(90vw, 75vh, 560px)";

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-white"
        >
          {/* Soft Background Ambience */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.4, 0.6, 0.4] 
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-50 rounded-full blur-[100px]" 
            />
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3] 
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 2 }}
              className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-50 rounded-full blur-[120px]" 
            />
          </div>

          {/* Scale Out Radial Reveal (Wipe) */}
          <motion.div
            initial={{ scale: 0 }}
            animate={exiting ? { scale: 100 } : { scale: 0 }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            className="absolute z-[10000] w-20 h-20 bg-white rounded-full pointer-events-none"
          />

          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
            <div className="relative flex items-center justify-center" style={{ width: stageSize, height: stageSize }}>
              
              {/* ORBITAL PATHS (Dashed Tech Rings) */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <svg width="100%" height="100%" className="absolute opacity-10">
                  <circle cx="50%" cy="50%" r={`${radiusPct}%`} fill="none" stroke="#1D90FF" strokeWidth="1" strokeDasharray="5 10" />
                  <circle cx="50%" cy="50%" r={`${radiusPct + 8}%`} fill="none" stroke="#34D399" strokeWidth="0.5" strokeDasharray="100 20" />
                </svg>
              </div>

              {/* STAGGERED SERVICES */}
              {SERVICES.map((s, i) => {
                const angle = (i / SERVICES.length) * Math.PI * 2 - Math.PI / 2;
                const x = 50 + Math.cos(angle) * radiusPct;
                const y = 50 + Math.sin(angle) * radiusPct;
                const isActive = i === activeIdx;

                return (
                  <motion.div
                    key={s.label}
                    initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%", left: "50%", top: "50%" }}
                    animate={{ scale: 1, opacity: 1, left: `${x}%`, top: `${y}%` }}
                    transition={{
                      delay: 0.2 + i * 0.12,
                      type: "spring",
                      stiffness: 120,
                      damping: 18
                    }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2"
                  >
                    <motion.div
                      animate={isActive ? { scale: 1.25, boxShadow: `0 20px 40px -10px #1D90FF55` } : { scale: 1, boxShadow: "0 4px 12px rgba(0,0,0,0.03)" }}
                      className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center bg-white border transition-colors duration-500 ${isActive ? 'border-[#1D90FF]' : 'border-slate-100'}`}
                    >
                      <s.Icon 
                        className={`w-7 h-7 transition-colors duration-500 ${isActive ? 'text-[#1D90FF]' : 'text-slate-400'}`} 
                        strokeWidth={isActive ? 2.5 : 1.5}
                      />
                      {isActive && (
                         <motion.div 
                          layoutId="pulse"
                          className="absolute inset-0 rounded-2xl border-2 border-[#1D90FF] animate-pulse"
                         />
                      )}
                    </motion.div>
                    <span className={`text-[10px] sm:text-[11px] font-black uppercase tracking-widest transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-40'}`}>
                      {s.label}
                    </span>
                  </motion.div>
                );
              })}

              {/* CORE SPHERE ENGINE */}
              <motion.div
                className="relative z-20 flex items-center justify-center"
                style={{ width: "32%", height: "32%" }}
              >
                {/* Rotating Border */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[-4px] rounded-full"
                  style={{ 
  width: `${progress}%`, // Added comma here
  background: `linear-gradient(90deg, ${AZURE}, ${MINT})`, // Use variable names, not # hex here
  boxShadow: "0 0 10px rgba(29,144,255,0.4)"
}}
                />

                {/* Glass Inner Core */}
                <motion.div
                  className="w-full h-full rounded-full bg-white shadow-2xl flex items-center justify-center overflow-hidden border border-slate-50"
                  style={{
                    background: "radial-gradient(circle at 30% 20%, white 0%, #F1F9FF 100%)"
                  }}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={textIdx}
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                      className="text-center px-4"
                    >
                      <p className="text-[9px] uppercase tracking-[0.3em] font-black text-[#1D90FF] mb-1">Bill Craft</p>
                      <h3 className="text-sm md:text-lg font-black leading-tight text-slate-800 tracking-tighter">
                        {SPHERE_TEXTS[textIdx].toUpperCase()}
                      </h3>
                    </motion.div>
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            </div>

            {/* PROGRESS SECTION */}
            <div className="mt-12 w-full max-w-sm px-8">
              <div className="relative mb-3 flex items-center justify-between">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={activeIdx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="text-[10px] font-black uppercase tracking-widest text-slate-500"
                  >
                    {SERVICES[activeIdx].phrase}
                  </motion.p>
                </AnimatePresence>
                <span className="text-[10px] font-black text-[#1D90FF]">{Math.floor(progress)}%</span>
              </div>
              
              <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-50">
                <motion.div
                  className="h-full rounded-full"
                  style={{
  background: `conic-gradient(from 0deg, ${AZURE}, ${MINT}, transparent, ${AZURE})`, // Use variable names
  mask: "radial-gradient(circle, transparent 65%, black 70%)",
  WebkitMask: "radial-gradient(circle, transparent 65%, black 70%)",
}}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}