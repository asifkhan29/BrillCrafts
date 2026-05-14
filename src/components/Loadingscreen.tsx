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

const SPHERE_TEXTS = [
  "Brill Crafts",
  "Marketing",
  "Excellence",
];

const AZURE = "#1D90FF";
const MINT = "#00C2A8";

const SERVICES = [
  {
    Icon: TrainFront,
    label: "Metro Branding",
    phrase: "Wrapping Metro Corridors",
  },
  {
    Icon: Tent,
    label: "Event Booths",
    phrase: "Engineering Brand Touchpoints",
  },
  {
    Icon: ShoppingBag,
    label: "Premium Swag",
    phrase: "Crafting Premium Swag",
  },
  {
    Icon: Megaphone,
    label: "Launches",
    phrase: "Orchestrating Launches",
  },
  {
    Icon: Store,
    label: "Retail Branding",
    phrase: "Dressing Retail Floors",
  },
  {
    Icon: Building2,
    label: "RWAs & Malls",
    phrase: "Activating 1000+ RWAs",
  },
];

export function LoadingScreen({
  onDone,
}: {
  onDone: () => void;
}) {
  const [progress, setProgress] = useState(0);
  const [textIdx, setTextIdx] = useState(0);
  const [activeIdx, setActiveIdx] = useState(0);
  const [exiting, setExiting] = useState(false);

  /* PROGRESS */
  useEffect(() => {
    const start = performance.now();
    const duration = 4200;

    let raf = 0;

    const animate = (time: number) => {
      const pct = Math.min(
        (time - start) / duration,
        1
      );

      setProgress(pct * 100);

      if (pct < 1) {
        raf = requestAnimationFrame(animate);
      } else {
        setTimeout(() => {
          setExiting(true);
        }, 400);
      }
    };

    raf = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(raf);
  }, []);

  /* TEXT ROTATION */
  useEffect(() => {
    const id = setInterval(() => {
      setTextIdx(
        (prev) => (prev + 1) % SPHERE_TEXTS.length
      );
    }, 1200);

    return () => clearInterval(id);
  }, []);

  /* ACTIVE SERVICE */
  useEffect(() => {
    const id = setInterval(() => {
      setActiveIdx(
        (prev) => (prev + 1) % SERVICES.length
      );
    }, 850);

    return () => clearInterval(id);
  }, []);

  /* EXIT */
  useEffect(() => {
    if (exiting) {
      const t = setTimeout(() => {
        onDone();
      }, 800);

      return () => clearTimeout(t);
    }
  }, [exiting, onDone]);

  const radius = 42;
  const stageSize = "min(88vw, 72vh, 540px)";

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="
            fixed inset-0 z-[9999]

            flex items-center justify-center

            overflow-hidden

            bg-white
          "
        >
          {/* BACKGROUND GLOW */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.35, 0.55, 0.35],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute

                left-[-10%]
                top-[10%]

                h-[420px]
                w-[420px]

                rounded-full

                bg-blue-100

                blur-[120px]
              "
            />

            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.25, 0.45, 0.25],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute

                bottom-[-10%]
                right-[-10%]

                h-[520px]
                w-[520px]

                rounded-full

                bg-emerald-100

                blur-[140px]
              "
            />
          </div>

          {/* CONTENT */}
          <div className="relative z-10 flex flex-col items-center">
            {/* STAGE */}
            <div
              className="relative"
              style={{
                width: stageSize,
                height: stageSize,
              }}
            >
              {/* OUTER RING */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute inset-0

                  rounded-full

                  border border-slate-200/70
                "
              />

              {/* SECOND RING */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 26,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute inset-[8%]

                  rounded-full

                  border border-slate-100
                "
              />

              {/* SERVICES */}
              {SERVICES.map((s, i) => {
                const angle =
                  (i / SERVICES.length) *
                    Math.PI *
                    2 -
                  Math.PI / 2;

                const x =
                  50 +
                  Math.cos(angle) * radius;

                const y =
                  50 +
                  Math.sin(angle) * radius;

                const active =
                  i === activeIdx;

                return (
                  <motion.div
                    key={s.label}
                    initial={{
                      opacity: 0,
                      scale: 0,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      left: `${x}%`,
                      top: `${y}%`,
                    }}
                    transition={{
                      delay: i * 0.08,
                      type: "spring",
                      stiffness: 120,
                      damping: 14,
                    }}
                    className="
                      absolute

                      -translate-x-1/2
                      -translate-y-1/2

                      flex flex-col items-center
                    "
                  >
                    <motion.div
                      animate={
                        active
                          ? {
                              scale: 1.15,
                            }
                          : {
                              scale: 1,
                            }
                      }
                      className={`
                        relative

                        flex items-center justify-center

                        h-14 w-14
                        sm:h-16 sm:w-16

                        rounded-2xl

                        border

                        bg-white

                        shadow-lg

                        transition-all duration-500

                        ${
                          active
                            ? "border-[#1D90FF]"
                            : "border-slate-200"
                        }
                      `}
                    >
                      {/* ACTIVE GLOW */}
                      {active && (
                        <motion.div
                          layoutId="activeGlow"
                          className="
                            absolute inset-0

                            rounded-2xl

                            bg-blue-500/10
                          "
                        />
                      )}

                      <s.Icon
                        className={`
                          relative z-10

                          transition-all duration-500

                          ${
                            active
                              ? "text-[#1D90FF]"
                              : "text-slate-400"
                          }
                        `}
                        size={28}
                        strokeWidth={
                          active ? 2.4 : 1.8
                        }
                      />
                    </motion.div>

                    <span
                      className={`
                        mt-2

                        text-[9px]
                        sm:text-[10px]

                        font-black

                        uppercase

                        tracking-[0.2em]

                        transition-all duration-500

                        ${
                          active
                            ? "text-slate-700 opacity-100"
                            : "text-slate-400 opacity-50"
                        }
                      `}
                    >
                      {s.label}
                    </span>
                  </motion.div>
                );
              })}

              {/* CENTER SOLID SPHERE */}
              <motion.div
                animate={{
                  scale: [1, 1.03, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute left-1/2 top-1/2

                  z-20

                  flex items-center justify-center

                  h-[170px] w-[170px]
                  sm:h-[210px] sm:w-[210px]

                  -translate-x-1/2
                  -translate-y-1/2
                "
              >
                {/* SOLID GRADIENT CIRCLE */}
                <div
                  className="
                    absolute inset-0

                    rounded-full

                    shadow-[0_25px_80px_rgba(29,144,255,0.25)]
                  "
                  style={{
                    background: `linear-gradient(135deg, ${AZURE}, ${MINT})`,
                  }}
                />

                {/* INNER GLASS */}
                <div
                  className="
                    relative z-10

                    flex h-[82%] w-[82%]
                    items-center justify-center

                    rounded-full

                    bg-white/92

                    backdrop-blur-xl

                    shadow-inner
                  "
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={textIdx}
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: -10,
                      }}
                      transition={{
                        duration: 0.35,
                      }}
                      className="text-center px-4"
                    >
                      <p
                        className="
                          text-[9px]

                          font-black

                          uppercase

                          tracking-[0.3em]

                          text-[#1D90FF]
                        "
                      >
                        Brill Crafts
                      </p>

                      <h2
                        className="
                          mt-2

                          text-lg
                          sm:text-2xl

                          font-black

                          leading-tight

                          tracking-tight

                          text-slate-800
                        "
                      >
                        {
                          SPHERE_TEXTS[
                            textIdx
                          ]
                        }
                      </h2>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>

            {/* PROGRESS */}
            <div className="mt-12 w-[320px] max-w-[90vw]">
              <div className="mb-3 flex items-center justify-between">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={activeIdx}
                    initial={{
                      opacity: 0,
                      x: -10,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    exit={{
                      opacity: 0,
                      x: 10,
                    }}
                    className="
                      text-[10px]

                      font-black

                      uppercase

                      tracking-[0.5em]

                      text-slate-500
                    "
                  >
                    {
                      SERVICES[
                        activeIdx
                      ].phrase
                    }
                  </motion.p>
                </AnimatePresence>

                <span
                  className="
                    text-[10px]

                    font-black

                    text-[#1D90FF]
                  "
                >
                  {Math.floor(progress)}%
                </span>
              </div>

              {/* BAR */}
              <div
                className="
                  h-2

                  overflow-hidden

                  rounded-full

                  bg-slate-100
                "
              >
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    width: `${progress}%`,
                    background: `linear-gradient(90deg, ${AZURE}, ${MINT})`,
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