import { motion } from "framer-motion";
import {
  Building2,
  Briefcase,
  Music,
  Store,
  GraduationCap,
} from "lucide-react";
import { PageTransition } from "@/components/PageTransition";
import { SectionHeader } from "../pages/index";
import { Counter } from "@/components/Counter";
import { reachStats } from "@/lib/site";
import BackgroundEffects from "./BackgroundEffects";

const icons = [Building2, Briefcase, Music, Store, GraduationCap];

export function ReachPage() {
  return (
    <PageTransition>
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">

     <BackgroundEffects/>

        <section className="relative z-10 py-20">
          <div className="mx-auto max-w-7xl px-6">

            {/* HEADER */}
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[var(--sky)]">
                Our Reach
              </p>

              <h2 className="mt-4 text-4xl md:text-6xl font-black leading-tight text-[var(--obsidian)]">
                A footprint that
                <span className="block bg-gradient-to-r from-[var(--sky)] to-[var(--parrot)] bg-clip-text text-transparent">
                  moves real markets
                </span>
              </h2>

              <p className="mt-6 text-[var(--obsidian)]/60 text-lg">
                From gated communities to colleges, retail hubs to corporate zones —
                we activate brands where audiences actually live, work, and engage.
              </p>
            </div>

           {/* STATS GRID */}
<div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
  {reachStats.map((s, i) => {
    const Icon = icons[i] ?? Building2;

    return (
      <motion.div
        key={s.label}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: i * 0.08,
        }}
        whileHover={{
          y: -10,
          rotateX: -4,
          rotateY: 4,
          scale: 1.02,
        }}
        style={{
          transformStyle: "preserve-3d",
        }}
        className="
          group relative overflow-hidden

          rounded-[1.8rem]

          border border-white/40

          bg-gradient-to-br
          from-white
          via-white
          to-slate-50

          p-5 sm:p-6

          shadow-[0_20px_60px_rgba(15,23,42,0.08)]

          transition-all duration-700

          hover:border-[var(--sky)]/20
          hover:shadow-[0_30px_90px_rgba(0,116,217,0.15)]
        "
      >
        {/* LEFT ACCENT */}
        <div
          className="
            absolute left-0 top-0

            h-full w-[5px]

            bg-gradient-to-b
            from-[var(--obsidian)]
            via-[var(--sky)]
            to-[var(--parrot)]
          "
        />

        {/* GLOW */}
        <div
          className="
            absolute -right-16 -top-16

            h-40 w-40

            rounded-full

            bg-[var(--sky)]/10

            blur-3xl

            transition-all duration-700

            group-hover:scale-125
          "
        />

        {/* SHINE */}
        <div
          className="
            absolute inset-0

            bg-gradient-to-br
            from-white/40
            via-transparent
            to-transparent

            pointer-events-none
          "
        />

        {/* CONTENT */}
        <div
          className="relative z-10"
          style={{
            transform: "translateZ(30px)",
          }}
        >
          {/* TOP */}
          <div className="flex items-center gap-3">
            <motion.div
              whileHover={{
                rotate: 8,
                scale: 1.05,
              }}
              className="
                flex h-11 w-11 items-center justify-center

                rounded-xl

                bg-gradient-to-br
                from-[var(--sky)]
                to-[var(--parrot)]

                text-white

                shadow-[0_10px_25px_rgba(0,116,217,0.25)]
              "
            >
              <Icon size={20} />
            </motion.div>

            <span
              className="
                text-[10px]
                sm:text-xs

                font-black

                uppercase

                tracking-[0.16em]

                text-[var(--obsidian)]/55
              "
            >
              Activation Network
            </span>
          </div>

          {/* NUMBER */}
          <div className="mt-6">
            <p
              className="
                text-4xl
                sm:text-5xl

                font-black

                leading-none

                bg-gradient-to-r
                from-[var(--sky)]
                via-cyan-500
                to-[var(--parrot)]

                bg-clip-text
                text-transparent
              "
            >
              <Counter to={s.value} suffix={s.suffix} />
            </p>

            <div
              className="
                mt-3

                h-[2px] w-20

                rounded-full

                bg-gradient-to-r
                from-[var(--sky)]
                to-transparent
              "
            />
          </div>

          {/* LABEL */}
          <p
            className="
              mt-4

              text-sm
              sm:text-[15px]

              leading-relaxed

              text-[var(--obsidian)]/65
            "
          >
            {s.label}
          </p>
        </div>
      </motion.div>
    );
  })}
</div>

            {/* INSIGHT SECTION */}
          {/* INSIGHT SECTION */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className="
    mt-16 sm:mt-20

    relative overflow-hidden

    rounded-[2rem] sm:rounded-[3rem]

    border border-white/40

    bg-white/70

    p-6 sm:p-8 lg:p-14

    backdrop-blur-2xl

    shadow-[0_25px_80px_rgba(15,23,42,0.08)]
  "
>
  {/* BACKGROUND GLOWS */}
  <div
    className="
      absolute -top-20 left-0

      h-60 w-60 sm:h-80 sm:w-80

      rounded-full

      bg-[var(--sky)]/10

      blur-[100px]
    "
  />

  <div
    className="
      absolute bottom-[-20%] right-0

      h-60 w-60 sm:h-80 sm:w-80

      rounded-full

      bg-[var(--parrot)]/10

      blur-[100px]
    "
  />

  {/* SHINE */}
  <div
    className="
      absolute inset-0

      bg-gradient-to-br
      from-white/40
      via-transparent
      to-transparent

      pointer-events-none
    "
  />

  <div
    className="
      relative z-10

      grid gap-10 lg:gap-16

      lg:grid-cols-[1.1fr_0.9fr]

      items-center
    "
  >
    {/* LEFT CONTENT */}
    <div>
      {/* SMALL BADGE */}
      <div
        className="
          inline-flex items-center gap-2

          rounded-full

          border border-slate-200

          bg-white/80

          px-4 py-2

          text-[10px] sm:text-xs

          font-black

          uppercase

          tracking-[0.18em]

          text-[var(--sky)]

          backdrop-blur-xl
        "
      >
        Pan India Reach
      </div>

      {/* HEADING */}
      <h3
        className="
          mt-6

          text-3xl
          sm:text-4xl
          lg:text-5xl

          font-black

          leading-tight

          text-[var(--obsidian)]
        "
      >
        Pan-India execution
        <span
          className="
            mt-2 block

            bg-gradient-to-r
            from-[var(--sky)]
            to-[var(--parrot)]

            bg-clip-text
            text-transparent
          "
        >
          with hyperlocal precision
        </span>
      </h3>

      {/* DESCRIPTION */}
      <p
        className="
          mt-5

          max-w-2xl

          text-sm
          sm:text-base
          lg:text-lg

          leading-relaxed

          text-[var(--obsidian)]/65
        "
      >
        Every campaign is strategically crafted around audience
        behavior, geography, and engagement insights — enabling
        brands to create meaningful impact at scale rather than
        just visibility.
      </p>

      {/* FEATURE LINE */}
      <div
        className="
          mt-8

          flex flex-wrap gap-3
        "
      >
        {[
          "Experiential Marketing",
          "Retail Activations",
          "Exhibition Solutions",
        ].map((item) => (
          <div
            key={item}
            className="
              rounded-full

              border border-slate-200

              bg-white/80

              px-4 py-2

              text-xs

              font-semibold

              text-[var(--obsidian)]/70

              backdrop-blur-xl
            "
          >
            {item}
          </div>
        ))}
      </div>
    </div>

    {/* RIGHT METRICS */}
    <div className="grid grid-cols-2 gap-4 sm:gap-5">
      {[
        ["Tier 1 Cities", "12+"],
        ["Tier 2 Cities", "30+"],
        ["Active States", "18"],
        ["Brand Partners", "120+"],
      ].map(([label, value], index) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: index * 0.08,
          }}
          whileHover={{
            y: -6,
            scale: 1.03,
          }}
          className="
            group relative overflow-hidden

            rounded-[1.5rem]

            border border-white/40

            bg-white/80

            p-5 sm:p-6

            backdrop-blur-xl

            shadow-[0_15px_40px_rgba(15,23,42,0.06)]

            transition-all duration-500

            hover:border-[var(--sky)]/20
            hover:shadow-[0_25px_60px_rgba(0,116,217,0.12)]
          "
        >
          {/* CARD GLOW */}
          <div
            className="
              absolute -right-10 -top-10

              h-28 w-28

              rounded-full

              bg-[var(--sky)]/10

              blur-3xl

              transition-all duration-500

              group-hover:scale-125
            "
          />

          {/* VALUE */}
          <p
            className="
              relative z-10

              text-3xl
              sm:text-4xl

              font-black

              bg-gradient-to-r
              from-[var(--sky)]
              to-[var(--parrot)]

              bg-clip-text
              text-transparent
            "
          >
            {value}
          </p>

          {/* LABEL */}
          <p
            className="
              relative z-10

              mt-2

              text-xs
              sm:text-sm

              leading-relaxed

              text-[var(--obsidian)]/60
            "
          >
            {label}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</motion.div>
          </div>
        </section>
        {/* CTA */}
<section className="relative z-10 pb-32 ">
  <div className="mx-auto max-w-6xl px-6">

    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-[3rem] border border-white/40 bg-white/60 px-10 py-20 text-center backdrop-blur-xl shadow-[0_30px_90px_rgba(0,116,217,0.10)]"
    >

      {/* GLOWS */}
      <div className="absolute -top-20 left-[-10%] h-[420px] w-[420px] rounded-full bg-[var(--sky)]/15 blur-[120px]" />
      <div className="absolute bottom-[-20%] right-[-10%] h-[420px] w-[420px] rounded-full bg-[var(--parrot)]/15 blur-[120px]" />

      {/* CONTENT */}
      <div className="relative">

        <p className="text-sm font-bold uppercase tracking-[0.25em] text-[var(--sky)]">
          Scale Your Brand Reach
        </p>

        <h2 className="mt-5 text-4xl md:text-6xl font-black leading-tight text-[var(--obsidian)]">
          Ready to Activate
          <span className="block bg-gradient-to-r from-[var(--sky)] to-[var(--parrot)] bg-clip-text text-transparent">
            Your Next Big Campaign?
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[var(--obsidian)]/65">
          From hyperlocal activations to nationwide brand campaigns,
          we help you reach the right audience at the right place with measurable impact.
        </p>

        {/* BUTTON */}
        <div className="mt-10 flex justify-center gap-4 flex-wrap">

          <a
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-[var(--obsidian)] px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--sky)] hover:shadow-[0_20px_40px_rgba(0,116,217,0.30)]"
          >
            Start Your Activation
          </a>

          <a
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--obsidian)]/10 bg-white/70 px-8 py-4 text-sm font-semibold text-[var(--obsidian)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[var(--sky)]/30 hover:text-[var(--sky)]"
          >
            Explore Services
          </a>

        </div>

      </div>
    </motion.div>

  </div>
</section>
      </div>
    </PageTransition>
  );
}