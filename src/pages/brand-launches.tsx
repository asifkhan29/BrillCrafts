// src/pages/BrandLaunches.tsx

import { motion } from "framer-motion";
import {
  Rocket,
  Sparkles,
  Users,
  Megaphone,
  ArrowRight,
  CheckCircle2,
  Zap,
  Globe2,
} from "lucide-react";

import { Link } from "react-router-dom";
import { PageTransition } from "@/components/PageTransition";
import BackgroundEffects from "./BackgroundEffects";

const launchStats = [
  {
    value: "120+",
    label: "Successful Launches",
  },
  {
    value: "18",
    label: "Cities Activated",
  },
  {
    value: "3.5M+",
    label: "Audience Reach",
  },
  {
    value: "95%",
    label: "Client Retention",
  },
];

const services = [
  {
    icon: Megaphone,
    title: "On-Ground Activations",
    desc: "High-energy launch events designed to create immediate market buzz and audience engagement.",
  },
  {
    icon: Users,
    title: "Audience Engagement",
    desc: "Interactive experiences that convert attention into real consumer connection.",
  },
  {
    icon: Sparkles,
    title: "Experiential Design",
    desc: "Immersive brand environments crafted for memorable first impressions.",
  },
  {
    icon: Rocket,
    title: "Launch Strategy",
    desc: "End-to-end planning from pre-launch hype to post-event amplification.",
  },
];

const process = [
  "Brand Discovery & Market Research",
  "Creative Concept Development",
  "Venue & Activation Planning",
  "Production & Fabrication",
  "Event Execution",
  "Post Campaign Analytics",
];

export default function BrandLaunches() {
  return (
    <PageTransition>
<div className="relative isolate overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">          {/* BACKGROUND EFFECTS (MUST BE BEHIND) */}
  <div className="absolute inset-0 -z-10 pointer-events-none">
  <BackgroundEffects />
</div>
       
        {/* HERO */}
        <section className="relative overflow-hidden pt-36 pb-32">
          {/* GLOWS */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute left-[-10%] top-[-10%] h-[550px] w-[550px] rounded-full bg-[var(--sky)]/15 blur-[120px]" />

            <div className="absolute bottom-[-10%] right-[-10%] h-[550px] w-[550px] rounded-full bg-[var(--parrot)]/10 blur-[120px]" />

            <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--sky)]/5 blur-[100px]" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-20 lg:grid-cols-2">
              {/* LEFT */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--sky)]/20 bg-[var(--sky)]/10 px-4 py-2 text-sm font-semibold text-[var(--sky)] backdrop-blur-xl">
                  <Rocket size={16} />
                  Brand Launch Specialists
                </div>

                <h1 className="max-w-2xl text-5xl font-black leading-[0.95] tracking-tight text-[var(--obsidian)] md:text-7xl">
                  Launch Brands
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--sky)] to-[var(--parrot)]">
                    That People Remember.
                  </span>
                </h1>

                <p className="mt-8 max-w-xl text-lg leading-relaxed text-[var(--obsidian)]/60">
                  We create high-impact launch experiences that blend
                  storytelling, experiential marketing, and on-ground
                  activations to give brands unforgettable market entries.
                </p>

                {/* BUTTONS */}
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-2 rounded-full bg-[var(--obsidian)] px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--sky)] hover:shadow-[0_20px_40px_rgba(29,144,255,0.35)]"
                  >
                    Start Your Launch
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>

                  <Link
                    to="/case-studies"
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--obsidian)]/10 bg-white/70 px-8 py-4 text-sm font-semibold text-[var(--obsidian)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[var(--sky)]/20 hover:bg-white hover:text-[var(--sky)]"
                  >
                    View Case Studies
                  </Link>
                </div>

                {/* MINI FEATURES */}
                <div className="mt-12 flex flex-wrap gap-6">
                  <div className="flex items-center gap-2 text-sm font-medium text-[var(--obsidian)]/60">
                    <Zap
                      size={16}
                      className="text-[var(--sky)]"
                    />
                    Experiential Marketing
                  </div>

                  <div className="flex items-center gap-2 text-sm font-medium text-[var(--obsidian)]/60">
                    <Users
                      size={16}
                      className="text-[var(--sky)]"
                    />
                    Live Audience Engagement
                  </div>

                  <div className="flex items-center gap-2 text-sm font-medium text-[var(--obsidian)]/60">
                    <Globe2
                      size={16}
                      className="text-[var(--sky)]"
                    />
                    Pan India Activations
                  </div>
                </div>
              </motion.div>

              {/* RIGHT IMAGE */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="group overflow-hidden rounded-[2.5rem] border border-white/30 bg-white/50 p-4 shadow-[0_30px_100px_rgba(29,144,255,0.12)] backdrop-blur-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1600&auto=format&fit=crop"
                    alt="Brand Launch Event"
                    className="h-[550px] w-full rounded-[2rem] object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                  />
                </div>

                {/* FLOATING CARD */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-8 left-8 rounded-3xl border border-white/20 bg-white/80 p-6 shadow-2xl backdrop-blur-xl"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--sky)]/10 text-[var(--sky)]">
                      <Sparkles size={28} />
                    </div>

                    <div>
                      <p className="text-2xl font-black text-[var(--obsidian)]">
                        500K+
                      </p>

                      <p className="text-sm text-[var(--obsidian)]/60">
                        Live Event Footfall
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="pb-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {launchStats.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="group rounded-[2rem] border border-white/40 bg-white/60 p-8 backdrop-blur-xl transition-all hover:-translate-y-2 hover:shadow-[0_25px_80px_rgba(29,144,255,0.12)]"
                >
                  <h3 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[var(--sky)] to-[var(--parrot)]">
                    {item.value}
                  </h3>

                  <p className="mt-3 text-sm font-medium text-[var(--obsidian)]/60">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="relative py-10">
          <div className="absolute left-0 top-1/4 -z-10 h-96 w-96 rounded-full bg-[var(--sky)]/10 blur-[100px]" />

          <div className="absolute right-0 bottom-1/4 -z-10 h-96 w-96 rounded-full bg-[var(--parrot)]/10 blur-[100px]" />

          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--sky)]">
                What We Do
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight text-[var(--obsidian)] md:text-6xl">
                Complete Brand
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--sky)] to-[var(--parrot)]">
                  Launch Ecosystem
                </span>
              </h2>
            </div>

            <div className="mt-20 grid gap-6 md:grid-cols-2">
              {services.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="group rounded-[2rem] border border-white/40 bg-white/70 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-[var(--sky)]/20 hover:shadow-[0_25px_60px_rgba(29,144,255,0.12)]"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--sky)]/10 text-[var(--sky)] transition-all duration-300 group-hover:scale-110 group-hover:bg-[var(--sky)] group-hover:text-white">
                    <item.icon size={30} />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-[var(--obsidian)]">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-relaxed text-[var(--obsidian)]/65">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="py-10">
          <div className="mx-auto max-w-5xl px-6">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--sky)]">
                Process
              </p>

              <h2 className="mt-4 text-5xl font-black text-[var(--obsidian)]">
                How We Launch
              </h2>
            </div>

            <div className="mt-20 space-y-6">
              {process.map((step, index) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="group flex items-center gap-5 rounded-[2rem] border border-white/40 bg-white/70 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(29,144,255,0.10)]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--sky)]/10 text-lg font-black text-[var(--sky)] transition-all group-hover:bg-[var(--sky)] group-hover:text-white">
                    0{index + 1}
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[var(--obsidian)]">
                      {step}
                    </h3>
                  </div>

                  <CheckCircle2
                    className="ml-auto text-[var(--parrot)]"
                    size={24}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

{/* CTA */}
<section className="pb-10">
  <div className="mx-auto max-w-6xl px-6">
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="
        relative overflow-hidden
        rounded-[3rem]
        border border-[var(--sky)]/10
        bg-gradient-to-br
        from-[#f8fbff]
        via-[#eef6ff]
        to-[#f5fff8]
        px-8 py-24 md:px-14
        text-center
        shadow-[0_25px_80px_rgba(0,116,217,0.08)]
      "
    >
      {/* LIGHT GLOWS */}
      <div className="absolute left-[-10%] top-[-20%] h-[420px] w-[420px] rounded-full bg-[var(--sky)]/15 blur-[120px]" />

      <div className="absolute bottom-[-20%] right-[-10%] h-[420px] w-[420px] rounded-full bg-[var(--parrot)]/15 blur-[120px]" />

      {/* GRID */}
      <div
        className="
          absolute inset-0 opacity-[0.04]
          bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),
          linear-gradient(to_bottom,#0f172a_1px,transparent_1px)]
          bg-[size:70px_70px]
        "
      />

      {/* CONTENT */}
      <div className="relative z-10">

        {/* ICON */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            mx-auto mb-8
            flex h-20 w-20 items-center justify-center
            rounded-3xl
            border border-white/70
            bg-white/80
            text-[var(--sky)]
            shadow-[0_20px_40px_rgba(0,116,217,0.12)]
            backdrop-blur-xl
          "
        >
          <Rocket size={34} />
        </motion.div>

        {/* HEADING */}
        <h2 className="text-4xl font-black leading-tight tracking-tight text-[var(--obsidian)] md:text-6xl">
          Ready To Launch
          <br />

          <span className="bg-gradient-to-r from-[var(--sky)] to-[var(--parrot)] bg-clip-text text-transparent">
            Your Next Big Idea?
          </span>
        </h2>

        {/* DESCRIPTION */}
        <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-[var(--obsidian)]/65 md:text-lg">
          From strategy to execution — we create launch experiences
          that generate visibility, engagement and real-world impact.
        </p>

        {/* BUTTON */}
        <Link
          to="/contact"
          className="
            group mt-10 inline-flex items-center gap-3
            rounded-full
            bg-[var(--obsidian)]
            px-8 py-4
            text-sm font-bold
            text-white
            transition-all duration-300
            hover:-translate-y-1
            hover:bg-[var(--sky)]
            hover:shadow-[0_20px_40px_rgba(0,116,217,0.25)]
          "
        >
          Let’s Build Something Big

          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </motion.div>
  </div>
</section>
      </div>
    </PageTransition>
  );
}