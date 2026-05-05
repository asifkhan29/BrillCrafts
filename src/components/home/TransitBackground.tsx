import { motion } from "framer-motion";
import { Train, Bus, Car, TramFront, Bike, Plane, Truck } from "lucide-react";

/**
 * Floating background icons representing physical surfaces where Bill Craft
 * banner advertisements run — metro, train, bus, car, taxi, etc.
 * Purely decorative, sits behind the hero content.
 */
const items = [
  { Icon: Train, top: "12%", left: "6%", size: 44, delay: 0, dur: 9, x: 14, color: "text-sky-500/30" },
  { Icon: Bus, top: "22%", left: "82%", size: 52, delay: 0.6, dur: 10, x: -18, color: "text-emerald-500/30" },
  { Icon: Car, top: "68%", left: "10%", size: 40, delay: 1.2, dur: 8, x: 22, color: "text-slate-700/25" },
  { Icon: TramFront, top: "78%", left: "72%", size: 46, delay: 0.3, dur: 11, x: -16, color: "text-sky-500/30" },
  { Icon: Bike, top: "44%", left: "4%", size: 34, delay: 0.9, dur: 7, x: 12, color: "text-emerald-500/25" },
  { Icon: Plane, top: "8%", left: "46%", size: 38, delay: 1.5, dur: 12, x: 24, color: "text-slate-700/20" },
  { Icon: Truck, top: "58%", left: "88%", size: 42, delay: 0.4, dur: 9, x: -20, color: "text-emerald-500/25" },
  { Icon: Car, top: "88%", left: "40%", size: 36, delay: 1.1, dur: 8, x: 18, color: "text-sky-500/25" },
  { Icon: Bus, top: "36%", left: "58%", size: 30, delay: 1.8, dur: 10, x: -14, color: "text-emerald-500/20" },
  { Icon: Train, top: "54%", left: "30%", size: 32, delay: 2.0, dur: 9, x: 16, color: "text-sky-500/20" },
];

export function TransitBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {items.map(({ Icon, top, left, size, delay, dur, x, color }, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ top, left }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: [0, -10, 0], x: [0, x, 0] }}
          transition={{
            opacity: { duration: 1.2, delay: delay * 0.3 },
            y: { duration: dur, repeat: Infinity, ease: "easeInOut", delay },
            x: { duration: dur * 1.2, repeat: Infinity, ease: "easeInOut", delay },
          }}
        >
          <Icon size={size} strokeWidth={1.4} className={color} />
        </motion.div>
      ))}
    </div>
  );
}