// src/pages/services/RetailBranding.tsx

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ShoppingBag,
  Store,
  Palette,
  Sparkles,
  LayoutGrid,
  ScanLine,
} from "lucide-react";

import { Link } from "react-router-dom";
import BackgroundEffects from "./BackgroundEffects";

export default function RetailBranding() {
  const services = [
    "In-Store Branding",
    "Window Display Design",
    "POSM & Visual Merchandising",
    "Retail Signage Systems",
    "Shelf Branding & Product Highlighting",
    "Experiential Retail Installations",
  ];

  const stats = [
    { value: "1500+", label: "Retail Stores Branded" },
    { value: "45+", label: "Cities Activated" },
    { value: "300+", label: "Campaign Rollouts" },
    { value: "98%", label: "Client Satisfaction" },
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white text-[var(--obsidian)]">

     <BackgroundEffects/>

      {/* GLOWS */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] h-[550px] w-[550px] rounded-full bg-[var(--sky)]/15 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[550px] w-[550px] rounded-full bg-[var(--parrot)]/10 blur-[120px]" />
      </div>

      {/* HERO */}
      <section className="relative pt-36 pb-32 px-6">
        <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--sky)]/20 bg-[var(--sky)]/10 px-4 py-2 text-sm font-semibold text-[var(--sky)] backdrop-blur-xl">
              <Sparkles size={16} />
              Premium Retail Experiences
            </div>

            <h1 className="max-w-2xl text-5xl font-black leading-[0.95] md:text-7xl">
              Retail Branding
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--sky)] to-[var(--parrot)]">
                That Converts.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-[var(--obsidian)]/60">
              We transform retail environments into immersive brand experiences
              that increase visibility, customer engagement, and purchase intent.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-[var(--obsidian)] px-8 py-4 text-sm font-bold text-white transition-all hover:-translate-y-1 hover:bg-[var(--sky)] hover:shadow-[0_20px_40px_rgba(29,144,255,0.35)]"
              >
                Start Retail Project
                <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
              </Link>

              <Link
                to="/case-studies"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/60 px-8 py-4 text-sm font-semibold backdrop-blur-xl hover:text-[var(--sky)] hover:border-[var(--sky)]/20 transition"
              >
                View Work
              </Link>
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
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1600&auto=format&fit=crop"
                alt="Retail Branding"
                className="h-[520px] w-full rounded-[2rem] object-cover transition-transform duration-[2000ms] group-hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="pb-32 px-6">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-[2rem] border border-white/40 bg-white/60 p-8 backdrop-blur-xl hover:-translate-y-2 transition"
            >
              <h3 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[var(--sky)] to-[var(--parrot)]">
                {item.value}
              </h3>
              <p className="mt-3 text-sm text-[var(--obsidian)]/60">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative px-6 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--sky)]">
              Retail Solutions
            </p>

            <h2 className="mt-4 text-5xl font-black">
              Elevating Every
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--sky)] to-[var(--parrot)]">
                Customer Touchpoint
              </span>
            </h2>
          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="group rounded-[2rem] border border-white/40 bg-white/70 p-8 backdrop-blur-xl hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(29,144,255,0.12)] transition"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--sky)]/10 text-[var(--sky)] group-hover:bg-[var(--sky)] group-hover:text-white transition">
                  <CheckCircle2 size={26} />
                </div>

                <h3 className="mt-6 text-xl font-bold">{service}</h3>

                <p className="mt-3 text-sm text-[var(--obsidian)]/60">
                  Strategically designed to enhance visibility, shopper engagement, and retail conversions.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative bg-white/40 px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--sky)]">
              Our Process
            </p>

            <h2 className="mt-4 text-5xl font-black">
              Retail Branding Built
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--sky)] to-[var(--parrot)]">
                Strategically
              </span>
            </h2>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-3">
            {[
              { icon: Palette, title: "Creative Design" },
              { icon: LayoutGrid, title: "Production & Execution" },
              { icon: ScanLine, title: "Retail Experience" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-[2rem] bg-white/70 p-10 backdrop-blur-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--sky)]/10 text-[var(--sky)]">
                  <item.icon size={30} />
                </div>

                <h3 className="mt-6 text-2xl font-bold">{item.title}</h3>

                <p className="mt-4 text-[var(--obsidian)]/60">
                  We design retail experiences that convert attention into action.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

 {/* CTA */}
<section className="px-6 pb-10">
  <div
    className="
      relative mx-auto max-w-5xl overflow-hidden
      rounded-[3rem]
      border border-[var(--sky)]/10
      bg-gradient-to-br
      from-[#f8fbff]
      via-[#eef6ff]
      to-[#f5fff8]
      px-10 py-24
      text-center
      shadow-[0_25px_80px_rgba(0,116,217,0.08)]
    "
  >
    {/* LIGHT GLOWS */}
    <div className="absolute left-[-10%] top-[-20%] h-[400px] w-[400px] rounded-full bg-[var(--sky)]/15 blur-3xl" />

    <div className="absolute bottom-[-20%] right-[-10%] h-[400px] w-[400px] rounded-full bg-[var(--parrot)]/15 blur-3xl" />

    {/* GRID */}
    <div
      className="
        absolute inset-0 opacity-[0.04]
        bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),
        linear-gradient(to_bottom,#0f172a_1px,transparent_1px)]
        bg-[size:70px_70px]
      "
    />

    <div className="relative z-10">
      {/* LABEL */}
      <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[var(--sky)]">
        Retail Branding Solutions
      </p>

      {/* HEADING */}
      <h2 className="text-5xl font-black leading-tight text-[var(--obsidian)]">
        Ready To Transform
        <span className="block bg-gradient-to-r from-[var(--sky)] to-[var(--parrot)] bg-clip-text text-transparent">
          Your Retail Presence?
        </span>
      </h2>

      {/* DESCRIPTION */}
      <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[var(--obsidian)]/65">
        We design impactful retail branding systems that captivate
        shoppers, strengthen visibility and elevate customer experiences.
      </p>

      {/* BUTTON */}
      <Link
        to="/contact"
        className="
          group mt-10 inline-flex items-center gap-2
          rounded-full
          bg-[var(--obsidian)]
          px-8 py-4
          font-bold
          text-white
          transition-all duration-300
          hover:-translate-y-1
          hover:bg-[var(--sky)]
          hover:shadow-[0_20px_40px_rgba(0,116,217,0.25)]
        "
      >
        Start Your Retail Project

        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </Link>
    </div>
  </div>
</section>
    </div>
  );
}