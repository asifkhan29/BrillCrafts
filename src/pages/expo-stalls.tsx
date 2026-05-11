// src/pages/services/ExpoStalls.tsx

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Building2,
  PenTool,
  Users,
  Globe2,
  TrendingUp,
  LayoutGrid,
} from "lucide-react";

import { Link } from "react-router-dom";
import { PageTransition } from "@/components/PageTransition";
import BackgroundEffects from "./BackgroundEffects";

const features = [
  "Custom Exhibition Stall Design",
  "3D Stall Visualization",
  "Fabrication & Printing",
  "Interactive Brand Experience",
  "Product Display Zones",
  "On-site Installation & Support",
];

const stats = [
  {
    label: "Expo Projects",
    value: "250+",
    icon: LayoutGrid,
  },
  {
    label: "Cities Covered",
    value: "30+",
    icon: Globe2,
  },
  {
    label: "Brand Clients",
    value: "120+",
    icon: Users,
  },
  {
    label: "Avg. Footfall",
    value: "1M+",
    icon: TrendingUp,
  },
];

const process = [
  {
    icon: PenTool,
    title: "Design & Planning",
    desc: "Strategic concepts, layouts, and 3D mockups tailored to your brand goals.",
  },
  {
    icon: Building2,
    title: "Fabrication",
    desc: "Premium quality fabrication with durable materials and modern finishes.",
  },
  {
    icon: Users,
    title: "On-ground Execution",
    desc: "Complete installation, support, and event-ready delivery across India.",
  },
];

export default function ExpoStalls() {
  return (
    <PageTransition>
      <div className="relative overflow-hidden bg-white text-[var(--obsidian)]">
     <BackgroundEffects/>

        {/* HERO */}
        <section className="relative px-6 pb-28 pt-36">
          <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--sky)]/20 bg-[var(--sky)]/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[var(--sky)] backdrop-blur-xl">
                <Sparkles size={15} />
                Premium Exhibition Experiences
              </div>

              <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
                Expo Stalls
                <br />
                <span className="bg-gradient-to-r from-[var(--sky)] to-[var(--parrot)] bg-clip-text text-transparent">
                  That Command Attention.
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-relaxed text-[var(--obsidian)]/60">
                We create immersive exhibition stalls and expo environments that
                attract visitors, elevate brand visibility, and drive real
                business conversations.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-[var(--obsidian)] px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:scale-[1.03] hover:bg-[var(--sky)] hover:shadow-[0_20px_50px_-10px_rgba(0,116,217,0.45)]"
                >
                  Start Your Expo Project
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  to="/case-studies"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--obsidian)]/10 bg-white/80 px-8 py-4 text-sm font-bold text-[var(--obsidian)] backdrop-blur-xl transition-all duration-300 hover:border-[var(--sky)]/20 hover:text-[var(--sky)] hover:shadow-lg"
                >
                  View Case Studies
                </Link>
              </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              {/* Glow */}
              <div className="absolute inset-0 m-auto h-[420px] w-[420px] rounded-full bg-[var(--sky)]/15 blur-[100px]" />

              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/20 bg-white/50 p-5 shadow-[0_40px_100px_-20px_rgba(15,23,42,0.15)] backdrop-blur-2xl">
                <img
                  src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1600&auto=format&fit=crop"
                  alt="Expo Stall"
                  className="h-[520px] w-full rounded-[2rem] object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-t from-[var(--obsidian)]/60 via-transparent to-transparent" />

                {/* Floating Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="absolute bottom-10 left-10 rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-2xl"
                >
                  <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/60">
                    Featured Setup
                  </p>

                  <h3 className="mt-3 text-2xl font-black text-white">
                    Interactive Brand Pavilion
                  </h3>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* STATS */}
        <section className="relative px-6 pb-24">
          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                }}
                className="group rounded-[2rem] border border-[var(--obsidian)]/5 bg-white/70 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-2xl"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--sky)]/10 text-[var(--sky)] transition-all group-hover:bg-[var(--sky)] group-hover:text-white">
                  <item.icon size={26} />
                </div>

                <h3 className="bg-gradient-to-r from-[var(--sky)] to-[var(--parrot)] bg-clip-text text-5xl font-black text-transparent">
                  {item.value}
                </h3>

                <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-[var(--obsidian)]/50">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FEATURES */}
        <section className="relative overflow-hidden bg-[var(--ice)]/30 px-6 py-28">
          <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[var(--sky)]/10 blur-[120px]" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[var(--parrot)]/10 blur-[120px]" />

          <div className="relative mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[var(--sky)]">
                What We Offer
              </p>

              <h2 className="mt-5 text-4xl font-black leading-tight md:text-6xl">
                End-to-End Expo
                <br />
                <span className="bg-gradient-to-r from-[var(--sky)] to-[var(--parrot)] bg-clip-text text-transparent">
                  Stall Solutions
                </span>
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-[var(--obsidian)]/60">
                From concept creation to installation, we design impactful
                exhibition environments that maximize visibility and engagement.
              </p>
            </div>

            <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, i) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.06,
                  }}
                  className="group rounded-[2rem] border border-white/30 bg-white/70 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-[0_30px_80px_-20px_rgba(0,116,217,0.18)]"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--sky)]/10 text-[var(--sky)] transition-all duration-300 group-hover:scale-110 group-hover:bg-[var(--sky)] group-hover:text-white">
                    <CheckCircle2 size={28} />
                  </div>

                  <h3 className="mt-6 text-xl font-black leading-snug">
                    {feature}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-[var(--obsidian)]/60">
                    Crafted with precision to maximize engagement, footfall and
                    brand recall at every expo experience.
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="relative px-6 py-28">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[var(--sky)]">
                Our Process
              </p>

              <h2 className="mt-5 text-4xl font-black leading-tight md:text-6xl">
                From Concept
                <br />
                <span className="bg-gradient-to-r from-[var(--sky)] to-[var(--parrot)] bg-clip-text text-transparent">
                  To Execution
                </span>
              </h2>
            </div>

            <div className="mt-20 grid gap-8 md:grid-cols-3">
              {process.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.08,
                  }}
                  className="group relative overflow-hidden rounded-[2rem] border border-[var(--obsidian)]/5 bg-white/80 p-10 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="absolute right-4 top-0 text-8xl font-black text-[var(--sky)]/5">
                    0{i + 1}
                  </div>

                  <div className="relative">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--sky)]/10 text-[var(--sky)] transition-all duration-300 group-hover:bg-[var(--sky)] group-hover:text-white">
                      <item.icon size={30} />
                    </div>

                    <h3 className="mt-7 text-2xl font-black">
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-relaxed text-[var(--obsidian)]/60">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

    
{/* CTA */}
<section className="relative px-6 pb-10">
  <div className="mx-auto max-w-6xl">
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-[3rem] border border-white/40 bg-white/70 px-10 py-24 text-center backdrop-blur-2xl shadow-[0_30px_80px_rgba(0,0,0,0.08)]"
    >
      {/* SOFT SKY + PARROT GLOWS (same as Mall/College) */}
      <div className="absolute left-[-10%] top-[-20%] h-[420px] w-[420px] rounded-full bg-[var(--sky)]/15 blur-[120px]" />
      <div className="absolute bottom-[-20%] right-[-10%] h-[420px] w-[420px] rounded-full bg-[var(--parrot)]/15 blur-[120px]" />

      {/* OPTIONAL GRID SOFT */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative z-10">

        <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-[var(--sky)]">
          Build Experiences That Stand Out
        </p>

        <h2 className="text-4xl font-black leading-tight text-[var(--obsidian)] md:text-6xl">
          Ready To Build
          <br />
          <span className="bg-gradient-to-r from-[var(--sky)] to-[var(--parrot)] bg-clip-text text-transparent">
            Your Next Expo Stall?
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[var(--obsidian)]/60">
          From trade shows to international exhibitions, Brill Crafts delivers
          premium expo experiences that create lasting brand impressions.
        </p>

        <Link
          to="/contact"
          className="group mt-10 inline-flex items-center gap-2 rounded-full bg-[var(--obsidian)] px-10 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--sky)] hover:shadow-[0_20px_50px_rgba(29,144,255,0.25)]"
        >
          Let's Build Together
          <ArrowRight
            size={18}
            className="transition-transform group-hover:translate-x-1"
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