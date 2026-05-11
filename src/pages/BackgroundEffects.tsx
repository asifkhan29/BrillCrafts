// src/components/ui/BackgroundEffects.tsx

import {
  Zap,
  Sparkles,
  Globe,
  Layers3,
  Rocket,
  BadgeCheck,
  Boxes,
  Cuboid,
} from "lucide-react";

export default function BackgroundEffects() {
  return (
    <>
       {/* SMOOTH FADE OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/80" />

      {/* MAIN BACKGROUND */}
      <div className="absolute inset-0 bg-[#f8fbff]" />

    {/* FULL PAGE NET GRID */}
<div
  className="absolute inset-0 z-0 opacity-100"
  style={{
    backgroundImage: `
      linear-gradient(to right, rgba(56,189,248,0.12) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(56,189,248,0.12) 1px, transparent 1px)
    `,
    backgroundSize: "50px 50px",
  }}
/>

      {/* FADE OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white/70" />

      {/* LIGHT BLOBS */}
      <div className="absolute left-[-10%] top-20 h-[420px] w-[420px] rounded-full bg-sky-400/15 blur-[120px]" />

      <div className="absolute right-[-10%] bottom-10 h-[420px] w-[420px] rounded-full bg-lime-400/15 blur-[120px]" />

      <div className="absolute left-1/2 top-1/3 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-blue-300/10 blur-[100px]" />

      {/* GLASS SQUARES */}
      <div className="absolute left-[8%] top-[16%] h-44 w-44 rounded-[2rem] border border-white/60 bg-white/20 backdrop-blur-2xl rotate-12 shadow-[0_10px_50px_rgba(59,130,246,0.08)]" />

      <div className="absolute right-[10%] top-[18%] h-56 w-56 rounded-[2.5rem] border border-white/50 bg-white/10 backdrop-blur-2xl -rotate-12 shadow-[0_10px_50px_rgba(132,204,22,0.08)]" />

      <div className="absolute left-[18%] bottom-[12%] h-32 w-32 rounded-[1.8rem] border border-sky-100/60 bg-white/20 backdrop-blur-xl rotate-6" />

      <div className="absolute right-[20%] bottom-[10%] h-40 w-40 rounded-[2rem] border border-lime-100/60 bg-white/10 backdrop-blur-xl -rotate-6" />

      {/* FLOATING ICONS */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <Zap
          className="
            absolute left-[8%] top-[18%]
            h-16 w-16
            text-sky-300/40
            rotate-[-12deg]
            animate-pulse
          "
        />

        <Sparkles
          className="
            absolute right-[12%] top-[12%]
            h-20 w-20
            text-lime-300/40
            rotate-12
            animate-pulse
          "
        />

        <Globe
          className="
            absolute left-[15%] bottom-[18%]
            h-24 w-24
            text-sky-200/40
            animate-spin
            [animation-duration:25s]
          "
        />

        <Layers3
          className="
            absolute right-[18%] bottom-[15%]
            h-20 w-20
            text-lime-200/40
            rotate-[18deg]
          "
        />

        <Rocket
          className="
            absolute left-1/2 top-[22%]
            h-14 w-14
            -translate-x-1/2
            text-blue-300/30
            rotate-[-20deg]
            animate-bounce
          "
        />

        <BadgeCheck
          className="
            absolute right-[32%] top-[55%]
            h-16 w-16
            text-sky-300/30
          "
        />

        <Boxes
          className="
            absolute left-[35%] top-[12%]
            h-16 w-16
            text-slate-300/40
            rotate-[15deg]
          "
        />

        <Cuboid
          className="
            absolute right-[40%] bottom-[18%]
            h-20 w-20
            text-blue-200/30
            -rotate-[15deg]
          "
        />

        {/* MINI GLOW DOTS */}
        <div className="absolute left-[30%] top-[70%] h-5 w-5 rounded-full bg-sky-300/40 blur-sm" />

        <div className="absolute right-[25%] top-[30%] h-4 w-4 rounded-full bg-lime-300/40 blur-sm" />

        <div className="absolute left-[70%] bottom-[20%] h-6 w-6 rounded-full bg-blue-200/30 blur-md" />

        <div className="absolute left-[55%] top-[45%] h-3 w-3 rounded-full bg-sky-400/40 blur-sm" />

        <div className="absolute right-[45%] bottom-[35%] h-5 w-5 rounded-full bg-lime-200/30 blur-md" />
      </div>
    </>
  );
}