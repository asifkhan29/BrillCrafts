// src/pages/Printing.tsx

import { motion } from "framer-motion";
import {
  Printer,
  Package,
  Palette,
  BadgeCheck,
  Truck,
  ShoppingBag,
  ArrowRight,
  Sparkles,
  Shirt,
  Gift,
} from "lucide-react";

import { Link } from "react-router-dom";
import { PageTransition } from "@/components/PageTransition";
import BackgroundEffects from "./BackgroundEffects";

const services = [
  {
    title: "Corporate Merchandise",
    desc:
      "Custom branded merchandise including t-shirts, bottles, diaries, kits and gifting products.",
    icon: Shirt,
  },
  {
    title: "Retail Packaging",
    desc:
      "Premium packaging solutions designed for product launches, gifting and retail branding.",
    icon: Package,
  },
  {
    title: "Large Format Printing",
    desc:
      "High-quality flex, vinyl, fabric and outdoor branding prints with vibrant production quality.",
    icon: Printer,
  },
  {
    title: "Promotional Collateral",
    desc:
      "Brochures, standees, danglers, POSM kits and event branding materials for campaigns.",
    icon: ShoppingBag,
  },
  {
    title: "Creative Design Support",
    desc:
      "Concept development, artwork creation and print-ready designs aligned with your brand.",
    icon: Palette,
  },
  {
    title: "Pan India Production",
    desc:
      "Reliable manufacturing, logistics and delivery support across multiple cities and locations.",
    icon: Truck,
  },
];

const launchStats = [
  { value: "80L+", label: "Products Delivered" },
  { value: "180+", label: "Brand Partners" },
  { value: "35+", label: "Cities Covered" },
  { value: "99%", label: "Execution Accuracy" },
];

export default function Printing() {
  return (
    <PageTransition>
      <div className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white text-[var(--obsidian)]">
        
    <BackgroundEffects/>

        {/* HERO */}
        <section className="relative overflow-hidden pt-36 pb-32">
          <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--sky)]/20 bg-[var(--sky)]/10 px-4 py-2 text-sm font-semibold text-[var(--sky)] backdrop-blur-xl">
                <Sparkles size={16} />
                Printing & Merchandising
              </div>

              <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
                Merchandise &
                <br />
                <span className="bg-gradient-to-r from-[var(--sky)] to-[var(--parrot)] bg-clip-text text-transparent">
                  print experiences
                </span>
                <br />
                that elevate brands.
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-relaxed text-[var(--obsidian)]/60">
                From corporate gifting and promotional merchandise to
                large-format branding and retail packaging — we create
                impactful print and merchandising solutions that strengthen
                brand visibility and customer recall.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-[var(--obsidian)] px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--sky)] hover:shadow-[0_20px_40px_rgba(29,144,255,0.35)]"
                >
                  Start Your Project
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  to="/case-studies"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--obsidian)]/10 bg-white/70 px-8 py-4 text-sm font-semibold backdrop-blur-xl transition-all duration-300 hover:border-[var(--sky)]/20 hover:text-[var(--sky)]"
                >
                  View Portfolio
                </Link>
              </div>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="group overflow-hidden rounded-[2.5rem] border border-white/30 bg-white/60 p-4 shadow-[0_30px_100px_rgba(29,144,255,0.12)] backdrop-blur-2xl">

                <img
                  src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop"
                  alt="Printing and Merchandise"
                  className="h-[560px] w-full rounded-[2rem] object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[var(--obsidian)]/30 via-transparent to-transparent" />
              </div>

              {/* FLOATING CARD */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-8 left-8 rounded-3xl border border-white/20 bg-white/80 p-6 shadow-2xl backdrop-blur-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--sky)]/10 text-[var(--sky)]">
                    <Gift size={28} />
                  </div>

                  <div>
                    <p className="text-2xl font-black text-[var(--obsidian)]">
                      80L+
                    </p>

                    <p className="text-sm text-[var(--obsidian)]/60">
                      Merchandise Units Delivered
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* STATS */}
        <section className="pb-28">
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
                    delay: index * 0.08,
                  }}
                  className="group rounded-[2rem] border border-white/40 bg-white/70 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_80px_rgba(29,144,255,0.12)]"
                >
                  <h3 className="bg-gradient-to-r from-[var(--sky)] to-[var(--parrot)] bg-clip-text text-5xl font-black text-transparent">
                    {item.value}
                  </h3>

                  <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-[var(--obsidian)]/50">
                    {item.label}
                  </p>
                </motion.div>
              ))}

            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="relative py-32">
          <div className="absolute left-0 top-1/4 -z-10 h-96 w-96 rounded-full bg-[var(--sky)]/10 blur-[100px]" />

          <div className="absolute bottom-1/4 right-0 -z-10 h-96 w-96 rounded-full bg-[var(--parrot)]/10 blur-[100px]" />

          <div className="mx-auto max-w-7xl px-6">

            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--sky)]">
                What We Deliver
              </p>

              <h2 className="mt-4 text-4xl font-black md:text-6xl">
                Complete printing &
                <span className="block bg-gradient-to-r from-[var(--sky)] to-[var(--parrot)] bg-clip-text text-transparent">
                  merchandising solutions
                </span>
              </h2>
            </div>

            <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

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
        <section className="relative py-32">
          <div className="mx-auto max-w-7xl px-6">

            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--sky)]">
                Process
              </p>

              <h2 className="mt-4 text-4xl font-black md:text-6xl">
                From concept
                <span className="block bg-gradient-to-r from-[var(--sky)] to-[var(--parrot)] bg-clip-text text-transparent">
                  to final delivery
                </span>
              </h2>
            </div>

            <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

              {[
                {
                  step: "01",
                  title: "Requirement Planning",
                  desc:
                    "Understanding campaign goals, merchandise requirements and print specifications.",
                },
                {
                  step: "02",
                  title: "Creative Design",
                  desc:
                    "Artwork creation, mockups and production-ready design approvals.",
                },
                {
                  step: "03",
                  title: "Production & Quality",
                  desc:
                    "Precision manufacturing, printing and strict quality control processes.",
                },
                {
                  step: "04",
                  title: "Delivery & Execution",
                  desc:
                    "Pan-India logistics, packaging and on-ground execution support.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="group rounded-[2rem] border border-white/40 bg-white/70 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(29,144,255,0.12)]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--sky)]/10 text-lg font-black text-[var(--sky)] transition-all group-hover:bg-[var(--sky)] group-hover:text-white">
                    {item.step}
                  </div>

                  <h3 className="mt-6 text-xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-relaxed text-[var(--obsidian)]/60">
                    {item.desc}
                  </p>
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
      className="relative overflow-hidden rounded-[3rem] border border-white/40 bg-white/70 px-10 py-24 text-center backdrop-blur-2xl shadow-[0_30px_80px_rgba(0,0,0,0.08)]"
    >

      {/* SKY + PARROT SOFT GLOWS (Mall/College style) */}
      <div className="absolute left-[-10%] top-[-20%] h-[420px] w-[420px] rounded-full bg-[var(--sky)]/15 blur-[120px]" />
      <div className="absolute bottom-[-20%] right-[-10%] h-[420px] w-[420px] rounded-full bg-[var(--parrot)]/15 blur-[120px]" />

      {/* SOFT GRID */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative z-10">

        <p className="text-sm font-bold uppercase tracking-[0.25em] text-[var(--sky)]">
          Build Stronger Brand Presence
        </p>

        <h2 className="mt-5 text-4xl font-black leading-tight text-[var(--obsidian)] md:text-6xl">
          Ready to launch your
          <br />
          <span className="bg-gradient-to-r from-[var(--sky)] to-[var(--parrot)] bg-clip-text text-transparent">
            next merchandising campaign?
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[var(--obsidian)]/60">
          From branded merchandise and corporate gifting to large-scale printing
          and retail packaging — we deliver solutions designed to make your
          brand unforgettable.
        </p>

        <Link
          to="/contact"
          className="group mt-10 inline-flex items-center gap-2 rounded-full bg-[var(--obsidian)] px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--sky)] hover:shadow-[0_20px_50px_rgba(29,144,255,0.25)]"
        >
          Contact Us
          <ArrowRight
            size={16}
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