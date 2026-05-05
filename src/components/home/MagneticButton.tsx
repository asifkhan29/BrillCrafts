import { Link } from "@tanstack/react-router";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

const AZURE = "#1D90FF";
const OLIVE = "#0074D9";

export function MagneticButton({ to, children }: { to: string; children: React.ReactNode }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    x.set((e.clientX - r.left - r.width / 2) * 0.35);
    y.set((e.clientY - r.top - r.height / 2) * 0.35);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div style={{ x: sx, y: sy }} onMouseMove={onMove} onMouseLeave={onLeave}>
      <Link
        ref={ref}
        to={to}
        className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-semibold text-white shadow-[0_18px_40px_-12px_rgba(29,144,255,0.55)] group"
        style={{ background: `linear-gradient(135deg, ${AZURE}, ${OLIVE})` }}
      >
        {children}
      </Link>
    </motion.div>
  );
}