import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Globe,
  Rocket,
  BadgeCheck,
  Linkedin,
  Instagram,
} from "lucide-react";
import { Link } from "react-router-dom";
import BackgroundEffects from "./BackgroundEffects";

/* ---------------- DATA (UNCHANGED) ---------------- */

const stats = [
  { number: "120+", label: "Projects Delivered" },
  { number: "40+", label: "Global Clients" },
  { number: "8+", label: "Creative Experts" },
  { number: "99%", label: "Client Satisfaction" },
];

const values = [
  {
    icon: Sparkles,
    title: "Creative Excellence",
    desc: "We craft premium digital experiences with aesthetics, usability, and performance.",
  },
  {
    icon: Rocket,
    title: "Fast Execution",
    desc: "From concept to launch, we move fast while maintaining premium quality.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    desc: "Helping brands connect with audiences across the world.",
  },
  {
    icon: BadgeCheck,
    title: "Trusted Partnership",
    desc: "Long-term collaboration with transparency and innovation.",
  },
];

const timeline = [
  {
    year: "2022",
    title: "The Beginning",
    desc: "Started with a vision to create premium physical brand experiences, experiential events, and high-impact activations that connect brands with real audiences.",
  },
  {
    year: "2023",
    title: "Event & Exhibition Growth",
    desc: "Expanded into exhibitions, corporate events, brand launches, stall fabrication, and immersive on-ground experiences for growing businesses.",
  },
  {
    year: "2024",
    title: "Large-Scale Executions",
    desc: "Successfully delivered large-scale experiential campaigns, expo arenas, mall activations, and premium brand installations across multiple industries.",
  },
  {
    year: "2025",
    title: "Innovation in Experiences",
    desc: "Focused on blending creative production, interactive technology, lighting, stage design, and audience engagement into unforgettable real-world experiences.",
  },
  {
    year: "2026",
    title: "Global Brand Collaborations",
    desc: "Collaborated with leading national and international brands for experiential marketing campaigns, luxury showcases, and high-end event environments.",
  },
  {
    year: "Future",
    title: "Building Immersive Worlds",
    desc: "Continuing to push the boundaries of experiential design through innovative activations, immersive environments, and future-ready physical brand experiences.",
  },
];

export default function About() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white text-[var(--obsidian)]">

      {/* GLOBAL BACKGROUND */}
      <BackgroundEffects />
{/* HERO */}
<section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">

  {/* BACKGROUND GLOWS */}
  <div className="absolute inset-0 -z-10">

    <motion.div
      animate={{
        y: [0, -25, 0],
        x: [0, 25, 0],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
        absolute left-[-10%] top-[-10%]
        h-[420px] w-[420px]
        rounded-full
        bg-[var(--sky)]/10
        blur-[120px]
      "
    />

    <motion.div
      animate={{
        y: [0, 25, 0],
        x: [0, -25, 0],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
        absolute bottom-[-10%] right-[-10%]
        h-[420px] w-[420px]
        rounded-full
        bg-[var(--parrot)]/10
        blur-[120px]
      "
    />

  </div>

  <div className="relative z-10 max-w-6xl text-center">

    {/* FLOATING GLASS BADGE */}
    <motion.div
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="flex justify-center"
    >
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          relative inline-flex items-center gap-2
          overflow-hidden
          rounded-full
          border border-white/50
          bg-white/70
          px-5 py-2
          backdrop-blur-2xl
          shadow-[0_10px_40px_rgba(0,0,0,0.08)]
        "
      >

        <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/10 opacity-70" />

        <Sparkles
          size={16}
          className="relative z-10 text-[var(--sky)]"
        />

        <span className="relative z-10 text-sm font-semibold text-[var(--obsidian)]">
          About Brill Crafts
        </span>

      </motion.div>
    </motion.div>

   {/* TITLE */}
<motion.h1
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.1, duration: 0.8 }}
  className="
    mt-8
    text-4xl
    font-black
    leading-[1]
    tracking-tight
    sm:text-5xl
    md:text-6xl
    lg:text-7xl
  "
>
  Building

  <span
    className="
      block
      bg-gradient-to-r
      from-[var(--sky)]
      via-cyan-500
      to-[var(--parrot)]
      bg-clip-text
      text-transparent
    "
  >
    Brand Experiences
  </span>

  That Inspire
</motion.h1>

    {/* ABOUT COMPANY SECTION */}
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="
        relative mx-auto mt-10
        max-w-4xl
        overflow-hidden
        rounded-[2rem]
        border border-white/50
        bg-white/70
        p-8
        backdrop-blur-2xl
        shadow-[0_20px_60px_rgba(15,23,42,0.06)]
      "
    >

      {/* TOP LIGHT */}
      <div
        className="
          absolute left-0 top-0
          h-1 w-full
          bg-gradient-to-r
          from-[var(--sky)]
          via-cyan-400
          to-[var(--parrot)]
        "
      />

      {/* FLOATING GLOW */}
      <div
        className="
          absolute -right-10 -top-10
          h-40 w-40
          rounded-full
          bg-[var(--sky)]/10
          blur-3xl
        "
      />

      <div className="relative z-10">

        {/* HEADING */}
        <div
          className="
            inline-flex items-center gap-2
            rounded-full
            border border-slate-200
            bg-white/80
            px-4 py-2
            text-xs font-black uppercase tracking-[0.2em]
            text-[var(--sky)]
            backdrop-blur-xl
          "
        >
          <Sparkles size={14} />
          About The Company
        </div>

        {/* TEXT */}
        <p
          className="
            mx-auto mt-6
            max-w-3xl
            text-base leading-relaxed
            text-[var(--obsidian)]/65
            sm:text-lg md:text-xl
          "
        >
          Brill Crafts is heading with a vision to become a leading company
          for Below-the-Line (BTL) marketing specializing in offline
          marketing services across India.

          <span className="mt-4 block">
            Our services include brand launches, print solutions,
            merchandising, and retail branding. With years of expertise,
            we craft unique and impactful brand experiences that resonate
            deeply with your target audience.
          </span>
        </p>

      </div>
    </motion.div>

    {/* BUTTONS */}
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className="mt-12 flex flex-wrap justify-center gap-4"
    >

      <Link
        to="/contact"
        className="
          group inline-flex items-center gap-2
          rounded-full
          bg-[var(--obsidian)]
          px-7 py-4
          text-sm font-semibold text-white
          shadow-[0_15px_40px_rgba(15,23,42,0.18)]
          transition-all duration-300
          hover:-translate-y-1
          hover:bg-[var(--sky)]
          hover:shadow-[0_25px_60px_rgba(56,189,248,0.28)]
        "
      >
        Start a Project

        <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
      </Link>

      <Link
        to="/case-studies"
        className="
          inline-flex items-center gap-2
          rounded-full
          border border-white/50
          bg-white/70
          px-7 py-4
          text-sm font-semibold
          text-[var(--obsidian)]
          backdrop-blur-2xl
          shadow-sm
          transition-all duration-300
          hover:-translate-y-1
          hover:border-[var(--sky)]/20
          hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]
        "
      >
        View Work
      </Link>

    </motion.div>
  </div>
</section>

      {/* STATS */}
<section className="relative overflow-hidden px-6 py-16">

  {/* BACKGROUND GLOWS */}
  <div className="absolute inset-0 -z-10">

    <motion.div
      animate={{
        y: [0, -20, 0],
        x: [0, 20, 0],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
        absolute left-[-10%] top-0
        h-[380px] w-[380px]
        rounded-full
        bg-[var(--sky)]/10
        blur-[120px]
      "
    />

    <motion.div
      animate={{
        y: [0, 25, 0],
        x: [0, -20, 0],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
        absolute bottom-[-10%] right-[-10%]
        h-[380px] w-[380px]
        rounded-full
        bg-[var(--parrot)]/10
        blur-[120px]
      "
    />

  </div>

  <div className="relative mx-auto max-w-6xl">

    {/* HEADING */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-center"
    >

      {/* GLASS BADGE */}
      <div
        className="
          inline-flex items-center gap-2
          rounded-full
          border border-white/50
          bg-white/70
          px-5 py-2
          text-xs font-black uppercase tracking-[0.25em]
          text-[var(--sky)]
          backdrop-blur-xl
          shadow-sm
        "
      >
        <Sparkles className="h-4 w-4" />
        Company Achievements
      </div>

      <h2 className="mt-8 text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
        Trusted by Brands
        <span className="block bg-gradient-to-r from-[var(--sky)] to-[var(--parrot)] bg-clip-text text-transparent">
          Across India
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[var(--obsidian)]/60">
        From retail branding and merchandise production to experiential
        activations and brand launches, Brill Crafts delivers impactful
        offline marketing experiences with precision and creativity.
      </p>

    </motion.div>

    {/* STATS GRID */}
    <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: i * 0.08,
            duration: 0.6,
          }}
          whileHover={{
            y: -8,
            rotateX: 2,
            rotateY: -2,
          }}
          className="
            group relative overflow-hidden
            rounded-[2rem]
            border border-white/60
            bg-white/70
            p-8
            backdrop-blur-2xl
            shadow-[0_15px_50px_rgba(15,23,42,0.06)]
            transition-all duration-500
            hover:shadow-[0_35px_90px_rgba(56,189,248,0.12)]
          "
          style={{
            transformStyle: "preserve-3d",
          }}
        >

          {/* TOP LIGHT */}
          <div
            className="
              absolute left-0 top-0
              h-full w-1
              bg-gradient-to-b
              from-[var(--sky)]
              via-cyan-400
              to-[var(--parrot)]
            "
          />

          {/* FLOATING GLOW */}
          <motion.div
            animate={{
              y: [0, -12, 0],
              x: [0, 8, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute -right-10 -top-10
              h-36 w-36
              rounded-full
              bg-[var(--sky)]/10
              blur-3xl
            "
          />

          {/* GLASS SHINE */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-br
              from-white/40
              via-transparent
              to-transparent
              opacity-70
            "
          />

          {/* CONTENT */}
          <div className="relative z-10">

            <div
              className="
                inline-flex items-center gap-2
                rounded-full
                border border-slate-200
                bg-white/80
                px-3 py-1.5
                text-[10px]
                font-black
                uppercase
                tracking-[0.2em]
                text-[var(--sky)]
                backdrop-blur-xl
              "
            >
              Achievement
            </div>

            <h3
              className="
                mt-6
                text-5xl font-black
                bg-gradient-to-r
                from-[var(--sky)]
                to-[var(--parrot)]
                bg-clip-text
                text-transparent
              "
            >
              {s.number}
            </h3>

            <p className="mt-4 text-lg font-semibold text-[var(--obsidian)]">
              {s.label}
            </p>

            <p className="mt-3 text-sm leading-relaxed text-[var(--obsidian)]/60">
              Delivering high-quality branding, retail execution,
              merchandising, and experiential campaigns with measurable
              real-world impact.
            </p>

          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* VALUES */}
      <section className="relative px-6 py-16">

        <div className="mx-auto max-w-6xl text-center">

          <h2 className="text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
            What Makes Us Different
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="
                  group relative overflow-hidden
                  rounded-[2rem]
                  border border-white/50
                  bg-white/70
                  backdrop-blur-2xl
                  p-8
                  text-left
                  shadow-[0_15px_50px_rgba(15,23,42,0.05)]
                  transition-all duration-500
                  hover:-translate-y-3
                  hover:shadow-[0_30px_80px_rgba(56,189,248,0.12)]
                "
              >

                <div className="absolute -top-12 right-0 h-40 w-40 rounded-full bg-[var(--sky)]/10 blur-3xl" />

                <div className="
                  relative inline-flex rounded-2xl
                  bg-[var(--sky)]/10
                  p-4 text-[var(--sky)]
                  transition-all duration-300
                  group-hover:bg-[var(--sky)]
                  group-hover:text-white
                ">
                  <v.icon size={24} />
                </div>

                <h3 className="relative mt-6 text-xl font-bold">
                  {v.title}
                </h3>

                <p className="relative mt-4 leading-relaxed text-[var(--obsidian)]/60">
                  {v.desc}
                </p>

              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="relative overflow-hidden px-6 py-16">

        {/* BACKGROUND GLOWS */}
        <div className="absolute inset-0 -z-10">
          <motion.div
            animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="
        absolute top-0 left-[-10%]
        h-[420px] w-[420px]
        rounded-full
        bg-[var(--sky)]/10
        blur-[120px]
      "
          />

          <motion.div
            animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="
        absolute bottom-[-10%] right-[-10%]
        h-[420px] w-[420px]
        rounded-full
        bg-[var(--parrot)]/10
        blur-[120px]
      "
          />
        </div>

        <div className="relative mx-auto max-w-5xl">

          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >

            {/* GLASS BADGE */}
            <div
              className="
          inline-flex items-center gap-2
          rounded-full
          border border-white/60
          bg-white/70
          px-4 py-2
          text-xs font-black uppercase tracking-[0.25em]
          text-[var(--sky)]
          backdrop-blur-xl
          shadow-sm
        "
            >
              <Sparkles className="h-4 w-4" />
              Journey Timeline
            </div>

            <h2 className="mt-8 text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
              Our Journey
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[var(--obsidian)]/60">
              Growth, innovation, and transformation.
            </p>
          </motion.div>

          {/* TIMELINE */}
          <div className="relative mt-24">

            {/* CENTER LINE */}
            <div
              className="
          absolute left-[28px] top-0 hidden
          h-full w-[2px]
          bg-gradient-to-b
          from-[var(--sky)]/50
          via-cyan-300/40
          to-[var(--parrot)]/20
          md:block
        "
            />

            <div className="space-y-10">

              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.12,
                  }}
                  className="
              group relative
              grid gap-6
              md:grid-cols-[80px_1fr]
            "
                >

                  {/* YEAR NODE */}
                  <div className="relative z-10 flex justify-center md:justify-start">

                    {/* PULSE RING */}
                    <div className="absolute top-1/2 hidden -translate-y-1/2 md:block">
                      <div className="absolute h-14 w-14 animate-ping rounded-2xl bg-[var(--sky)]/20" />
                    </div>

                    {/* MAIN BOX */}
                    <div
                      className="
                  relative flex h-14 w-14 items-center justify-center
                  rounded-2xl
                  border border-white/60
                  bg-white/80
                  text-sm font-black text-[var(--sky)]
                  backdrop-blur-xl
                  shadow-[0_10px_30px_rgba(29,144,255,0.12)]
                  transition-all duration-500
                  group-hover:scale-110
                  group-hover:shadow-[0_20px_45px_rgba(29,144,255,0.2)]
                "
                    >
                      {item.year}
                    </div>
                  </div>

                  {/* CONTENT CARD */}
                  <motion.div
                    whileHover={{
                      y: -6,
                      rotateX: 2,
                      rotateY: -2,
                    }}
                    transition={{ duration: 0.25 }}
                    className="
  relative overflow-hidden
  rounded-[2rem]
  border border-white/60
  bg-white/70
  p-8 pl-10
  backdrop-blur-2xl
                shadow-[0_20px_60px_rgba(15,23,42,0.06)]
                transition-all duration-500
                hover:shadow-[0_35px_90px_rgba(29,144,255,0.12)]
              "
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >

                    {/* LEFT LIGHT BAR */}
                    <div className="absolute left-0 top-0 h-full w-[3px] overflow-hidden rounded-full">

                      {/* MAIN GRADIENT */}
                      <div
                        className="
      h-full w-full
      bg-gradient-to-b
      from-[var(--sky)]
      via-cyan-400
      to-[var(--parrot)]
    "
                      />

                      {/* GLOW */}
                      <div
                        className="
      absolute inset-0
      blur-md
      opacity-70
      bg-gradient-to-b
      from-[var(--sky)]
      via-cyan-400
      to-[var(--parrot)]
    "
                      />
                    </div>

                    {/* FLOATING ORB */}
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                        x: [0, 10, 0],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="
                  absolute -top-10 -right-10
                  h-32 w-32
                  rounded-full
                  bg-[var(--sky)]/10
                  blur-3xl
                "
                    />

                    {/* GLASS SHINE */}
                    <div
                      className="
                  absolute inset-0
                  bg-gradient-to-br
                  from-white/40
                  via-transparent
                  to-transparent
                  opacity-60
                "
                    />

                    {/* CONTENT */}
                    <div className="relative z-10">

                      <h3 className="text-2xl font-black text-[var(--obsidian)]">
                        {item.title}
                      </h3>

                      <p className="mt-4 leading-relaxed text-[var(--obsidian)]/60">
                        {item.desc}
                      </p>

                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    {/* FOUNDER SECTION */}
<motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="relative overflow-hidden px-6 py-28"
>

  {/* BACKGROUND GLOWS */}
  <div className="absolute inset-0 -z-10">

    <motion.div
      animate={{
        y: [0, -25, 0],
        x: [0, 20, 0],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
        absolute left-[-10%] top-[-10%]
        h-[420px] w-[420px]
        rounded-full
        bg-[var(--sky)]/10
        blur-[120px]
      "
    />

    <motion.div
      animate={{
        y: [0, 25, 0],
        x: [0, -20, 0],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
        absolute bottom-[-10%] right-[-10%]
        h-[420px] w-[420px]
        rounded-full
        bg-[var(--parrot)]/10
        blur-[120px]
      "
    />
  </div>

  <div className="relative mx-auto max-w-6xl">

   {/* MAIN CARD */}
<motion.div
  whileHover={{ y: -6 }}
  transition={{ duration: 0.35 }}
  className="
    relative overflow-hidden

    rounded-[2rem]
    sm:rounded-[3rem]

    border-2 border-slate-200/80

    bg-white/80
    backdrop-blur-2xl

    shadow-[0_30px_100px_rgba(15,23,42,0.08)]

    before:absolute before:inset-0
    before:rounded-[2rem]
    sm:before:rounded-[3rem]

    before:border before:border-white/40
    before:pointer-events-none

    hover:border-[var(--sky)]/40
    hover:shadow-[0_35px_120px_rgba(29,144,255,0.12)]

    transition-all duration-500
  "
>
  {/* TOP GRADIENT LINE */}
  <div
    className="
      absolute left-0 top-0
      h-2 w-full
      bg-gradient-to-r
      from-[var(--sky)]
      via-cyan-400
      to-[var(--parrot)]
    "
  />

  {/* GLASS SHINE */}
  <div
    className="
      absolute inset-0
      bg-gradient-to-br
      from-white/40
      via-transparent
      to-transparent
      opacity-70
      pointer-events-none
    "
  />

  <div
    className="
      grid gap-10

      p-5
      sm:p-8
      lg:p-14

      md:grid-cols-[320px_1fr]
      lg:grid-cols-[380px_1fr]
    "
  >
    {/* LEFT SIDE */}
    <div className="relative flex items-center justify-center">
      <motion.div
        whileHover={{
          rotateY: 8,
          rotateX: -4,
          scale: 1.02,
        }}
        transition={{ duration: 0.35 }}
        style={{
          transformStyle: "preserve-3d",
        }}
        className="relative w-full max-w-[320px]"
      >
        {/* IMAGE GLOW */}
        <div
          className="
            absolute inset-0
            scale-110
            rounded-[2rem]
            sm:rounded-[2.5rem]

            bg-[var(--sky)]/20
            blur-3xl
          "
        />

        {/* IMAGE CARD */}
        <div
          className="
            relative overflow-hidden

            rounded-[2rem]
            sm:rounded-[2.5rem]

            border-2 border-white

            bg-white/50
            backdrop-blur-xl

            shadow-[0_25px_70px_rgba(15,23,42,0.15)]

            transition-all duration-500
            hover:border-[var(--sky)]/30
          "
        >
          {/* IMAGE */}
          <div
            className="
              relative overflow-hidden

              w-full

              h-[420px]
              sm:h-[480px]
              md:h-[420px]
            "
          >
            <img
              src="/founder.jpg"
              alt="Founder"
              className="
                h-full w-full object-cover

                transition-transform duration-700
                hover:scale-110
              "
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            {/* FLOATING BADGE */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                left-4 top-4
                sm:left-6 sm:top-6
              "
            >
              <div
                className="
                  flex items-center gap-2
                  rounded-full

                  border border-white/30
                  bg-white/15

                  px-3 py-1.5
                  sm:px-4 sm:py-2

                  backdrop-blur-2xl

                  shadow-[0_10px_40px_rgba(0,0,0,0.25)]
                "
              >
                <div className="h-2 w-2 rounded-full bg-[var(--parrot)] animate-pulse" />

                <span
                  className="
                    text-[9px]
                    sm:text-[10px]

                    font-bold uppercase

                    tracking-[0.16em]
                    sm:tracking-[0.22em]

                    text-white
                  "
                >
                  Founder
                </span>
              </div>
            </motion.div>

            {/* NAME */}
            <div
              className="
                absolute

                bottom-4 left-4 right-4
                sm:bottom-6 sm:left-6 sm:right-6
              "
            >
              <h3
                className="
                  text-2xl
                  sm:text-3xl

                  font-black
                  text-white
                  leading-tight
                "
              >
                Nafees Ahmad
              </h3>

              <p
                className="
                  mt-2

                  text-[11px]
                  sm:text-sm

                  font-semibold uppercase

                  tracking-[0.14em]
                  sm:tracking-[0.22em]

                  text-white/70
                "
              >
                Founder Of Brill Crafts
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>

    {/* RIGHT CONTENT */}
    <div className="flex flex-col justify-center">
      {/* SMALL BADGE */}
      <div
        className="
          inline-flex w-fit items-center gap-2

          rounded-full

          border border-slate-200

          bg-white/80

          px-4 py-2

          text-[10px]
          sm:text-xs

          font-black uppercase
          tracking-[0.18em]
          sm:tracking-[0.22em]

          text-[var(--sky)]

          backdrop-blur-xl

          shadow-sm
        "
      >
        <Sparkles size={14} />
        Vision & Leadership
      </div>

      {/* TITLE */}
      <h2
        className="
          mt-6 sm:mt-8

          text-3xl
          sm:text-4xl
          lg:text-6xl

          font-black
          leading-tight

          text-[var(--obsidian)]
        "
      >
        Building immersive
        <span
          className="
            block
            bg-gradient-to-r
            from-[var(--sky)]
            to-[var(--parrot)]
            bg-clip-text
            text-transparent
          "
        >
          brand experiences.
        </span>
      </h2>

      {/* DESCRIPTION */}
      <p
        className="
          mt-6 sm:mt-8

          max-w-2xl

          text-sm
          sm:text-base
          lg:text-lg

          leading-relaxed

          text-[var(--obsidian)]/65
        "
      >
        Nafees Ahmad leads Brill Crafts with a vision to blend
        creativity, experiential storytelling, fabrication, and
        innovation into impactful real-world brand experiences,
        exhibitions, and immersive activations.
      </p>

      {/* STATS */}
      <div className="mt-8 sm:mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {[
          { value: "6+", label: "Years Experience" },
          { value: "120+", label: "Projects" },
          { value: "40+", label: "Clients" },
        ].map((item) => (
          <motion.div
            whileHover={{
              y: -6,
              scale: 1.02,
            }}
            key={item.label}
            className="
              relative overflow-hidden

              rounded-[1.5rem]

              border border-slate-200

              bg-white/80

              p-5

              backdrop-blur-xl

              shadow-sm

              transition-all duration-300

              hover:border-[var(--sky)]/30
              hover:shadow-lg
            "
          >
            <div
              className="
                absolute inset-0
                bg-gradient-to-br
                from-white/30
                to-transparent
                opacity-70
              "
            />

            <div className="relative z-10">
              <h4
                className="
                  text-2xl
                  sm:text-3xl

                  font-black
                  text-[var(--sky)]
                "
              >
                {item.value}
              </h4>

              <p
                className="
                  mt-2

                  text-[10px]
                  sm:text-xs

                  uppercase

                  tracking-[0.14em]
                  sm:tracking-[0.18em]

                  text-[var(--obsidian)]/50
                "
              >
                {item.label}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* BUTTONS */}
      <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row flex-wrap gap-4">
        <Link
          to="/contact"
          className="
            group inline-flex items-center justify-center gap-2

            rounded-full

            bg-[var(--obsidian)]

            px-6 py-3.5
            sm:px-8 sm:py-4

            text-sm font-semibold

            text-white

            shadow-[0_15px_40px_rgba(15,23,42,0.15)]

            transition-all duration-300

            hover:-translate-y-1
            hover:bg-[var(--sky)]
          "
        >
          Connect Now

          <ArrowRight
            size={16}
            className="
              transition-transform duration-300
              group-hover:translate-x-1
            "
          />
        </Link>

        <Link
          to="/services"
          className="
            inline-flex items-center justify-center

            rounded-full

            border border-slate-200

            bg-white/80

            px-6 py-3.5
            sm:px-8 sm:py-4

            text-sm font-semibold

            text-[var(--obsidian)]

            backdrop-blur-xl

            transition-all duration-300

            hover:-translate-y-1
            hover:border-[var(--sky)]/30
            hover:shadow-lg
          "
        >
          Explore Services
        </Link>
      </div>
    </div>
  </div>
</motion.div>
  </div>
</motion.section>
{/* TEAM SECTION */}
<motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="relative overflow-hidden px-6 pb-28"
>
  {/* BACKGROUND GLOW */}
  <div className="absolute inset-0 -z-10">
    <div
      className="
        absolute left-1/2 top-0
        h-[420px] w-[420px]
        -translate-x-1/2
        rounded-full
        bg-[var(--sky)]/10
        blur-[120px]
      "
    />
  </div>

  <div className="mx-auto max-w-7xl">
    {/* HEADING */}
    <div className="text-center">
      <div
        className="
          inline-flex items-center gap-2
          rounded-full
          border border-slate-200
          bg-white/80
          px-5 py-2
          text-[10px]
          sm:text-xs
          font-black
          uppercase
          tracking-[0.22em]
          text-[var(--sky)]
          backdrop-blur-xl
          shadow-sm
        "
      >
        <Sparkles size={14} />
        Creative Team
      </div>

      <h2
        className="
          mt-6
          text-4xl
          sm:text-5xl
          lg:text-6xl
          font-black
          leading-tight
          text-[var(--obsidian)]
        "
      >
        The minds behind
        <span
          className="
            block
            bg-gradient-to-r
            from-[var(--sky)]
            to-[var(--parrot)]
            bg-clip-text
            text-transparent
          "
        >
          immersive experiences.
        </span>
      </h2>

      <p
        className="
          mx-auto mt-6
          max-w-2xl
          text-sm
          sm:text-base
          lg:text-lg
          leading-relaxed
          text-[var(--obsidian)]/65
        "
      >
        A passionate team of designers, strategists, fabricators,
        and creative thinkers working together to craft unforgettable
        brand activations.
      </p>
    </div>

    {/* TEAM GRID */}
    <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {[
        {
          name: "Ayaan Khan",
          role: "Creative Director",
          image: "/team/team1.jpg",
        },
        {
          name: "Sara Ali",
          role: "Brand Strategist",
          image: "/team/team2.jpg",
        },
        {
          name: "Rahul Verma",
          role: "3D Visualizer",
          image: "/team/team3.jpg",
        },
        {
          name: "Fatima Noor",
          role: "Production Lead",
          image: "/team/team4.jpg",
        },
      ].map((member, index) => (
        <motion.div
          key={member.name}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: index * 0.12,
          }}
          whileHover={{
            y: -10,
          }}
          className="
            group relative overflow-hidden

            rounded-[2rem]

            border border-slate-200/80

            bg-white/80
            backdrop-blur-2xl

            shadow-[0_20px_60px_rgba(15,23,42,0.08)]

            transition-all duration-500

            hover:border-[var(--sky)]/30
            hover:shadow-[0_25px_80px_rgba(29,144,255,0.12)]
          "
        >
          {/* SHINE */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-br
              from-white/30
              via-transparent
              to-transparent
              opacity-70
              pointer-events-none
            "
          />

          {/* IMAGE */}
          <div className="relative overflow-hidden h-[340px]">
            <img
              src={member.image}
              alt={member.name}
              className="
                h-full w-full object-cover

                transition-transform duration-700
                group-hover:scale-110
              "
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

            {/* SOCIAL ICONS */}
            <div
              className="
                absolute top-5 right-5

                flex gap-2

                opacity-0
                translate-y-3

                transition-all duration-500

                group-hover:opacity-100
                group-hover:translate-y-0
              "
            >
              {[Instagram, Linkedin].map((Icon, i) => (
                <div
                  key={i}
                  className="
                    flex h-10 w-10 items-center justify-center

                    rounded-full

                    border border-white/20
                    bg-white/10

                    text-white
                    backdrop-blur-xl

                    transition-all duration-300

                    hover:bg-white
                    hover:text-[var(--sky)]
                  "
                >
                  <Icon size={16} />
                </div>
              ))}
            </div>

            {/* INFO */}
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-2xl font-black text-white">
                {member.name}
              </h3>

              <p
                className="
                  mt-2

                  text-[11px]
                  sm:text-xs

                  font-semibold
                  uppercase

                  tracking-[0.18em]

                  text-white/70
                "
              >
                {member.role}
              </p>
            </div>
          </div>

          {/* BOTTOM */}
          <div className="relative z-10 p-6">
            <p
              className="
                text-sm leading-relaxed
                text-[var(--obsidian)]/65
              "
            >
              Passionate about delivering impactful creative
              experiences through innovation, storytelling, and
              premium execution.
            </p>

         
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</motion.section>
    </div>
  );
}