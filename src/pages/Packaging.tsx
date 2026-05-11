// src/pages/Packaging.tsx

import { motion } from "framer-motion";
import {
  Gift,
  Package,
  Sparkles,
  ShoppingBag,
  BadgeCheck,
  Truck,
  Layers3,
  ArrowRight,
  CheckCircle2,
  Ribbon,
} from "lucide-react";

import { Link } from "react-router-dom";
import { PageTransition } from "@/components/PageTransition";
import BackgroundEffects from "./BackgroundEffects";

const packagingServices = [
  {
    title: "Corporate Gifting Kits",
    desc: "Premium employee, client and festive gifting kits designed to create memorable brand experiences.",
    icon: Gift,
  },
  {
    title: "Luxury Gift Packaging",
    desc: "Elegant rigid boxes, magnetic closures and premium finishes crafted for luxury presentation.",
    icon: Sparkles,
  },
  {
    title: "Custom Merchandise Packaging",
    desc: "Creative packaging for branded merchandise, welcome kits and promotional products.",
    icon: Package,
  },
  {
    title: "Branding Collaterals",
    desc: "Custom inserts, thank-you cards, sleeves, tags and branded stationery for complete gifting experiences.",
    icon: Layers3,
  },
  {
    title: "Bulk Gifting Solutions",
    desc: "Scalable production and pan-India delivery support for large corporate gifting campaigns.",
    icon: Truck,
  },
  {
    title: "Premium Finishing",
    desc: "Foiling, embossing, textured papers and luxury finishes that elevate brand perception.",
    icon: BadgeCheck,
  },
];

const stats = [
  {
    value: "200+",
    label: "Gifting Campaigns",
  },
  {
    value: "80+",
    label: "Brand Partners",
  },
  {
    value: "99%",
    label: "Delivery Accuracy",
  },
  {
    value: "25+",
    label: "Cities Covered",
  },
];

const highlights = [
  "Luxury festive gifting",
  "Corporate employee kits",
  "Custom merchandise packaging",
  "Premium box finishing",
  "Bulk gifting production",
  "Pan-India logistics support",
];

export default function Packaging() {
  return (
    <PageTransition>
      <div className="relative overflow-hidden bg-white text-[var(--obsidian)]">

      <BackgroundEffects/>

        {/* HERO */}
        <section className="relative overflow-hidden pt-36 pb-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-16 lg:grid-cols-2">

              {/* LEFT */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--sky)]/20 bg-[var(--sky)]/10 px-4 py-2 text-sm font-semibold text-[var(--sky)] backdrop-blur-xl">
                  <Gift size={16} />
                  Packaging & Gifting Solutions
                </div>

                <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
                  Premium gifting
                  <br />
                  <span className="bg-gradient-to-r from-[var(--sky)] to-[var(--parrot)] bg-clip-text text-transparent">
                    experiences that impress.
                  </span>
                </h1>

                <p className="mt-8 max-w-xl text-lg leading-relaxed text-[var(--obsidian)]/65">
                  From luxury corporate gifts to festive hampers and branded
                  merchandise packaging — we create memorable unboxing
                  experiences that strengthen brand relationships.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-2 rounded-full bg-[var(--obsidian)] px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--sky)] hover:shadow-[0_20px_50px_rgba(29,144,255,0.35)]"
                  >
                    Start Your Gifting Project
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>

                  <Link
                    to="/case-studies"
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--obsidian)]/10 bg-white/80 px-8 py-4 text-sm font-bold text-[var(--obsidian)] backdrop-blur-xl transition-all duration-300 hover:border-[var(--sky)]/20 hover:text-[var(--sky)]"
                  >
                    Explore Projects
                  </Link>
                </div>
              </motion.div>

              {/* RIGHT */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <div className="relative overflow-hidden rounded-[2.5rem] border border-white/30 bg-white/60 p-10 shadow-[0_30px_90px_rgba(0,0,0,0.08)] backdrop-blur-2xl">

                  <div className="absolute left-0 top-0 h-52 w-52 rounded-full bg-[var(--sky)]/10 blur-3xl" />

                  <div className="grid gap-5 sm:grid-cols-2">
                    {highlights.map((item, index) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.08 }}
                        className="rounded-[1.8rem] border border-white/30 bg-white/70 p-6 backdrop-blur-xl"
                      >
                        <CheckCircle2
                          className="mb-4 text-[var(--sky)]"
                          size={22}
                        />

                        <p className="text-sm font-bold leading-relaxed text-[var(--obsidian)]">
                          {item}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* FLOATING CARD */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className="absolute -bottom-8 left-8 rounded-3xl border border-white/20 bg-white/80 px-6 py-5 shadow-2xl backdrop-blur-xl"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--sky)]/10 text-[var(--sky)]">
                      <Ribbon size={28} />
                    </div>

                    <div>
                      <p className="text-2xl font-black text-[var(--obsidian)]">
                        500K+
                      </p>

                      <p className="text-sm text-[var(--obsidian)]/60">
                        Gifts Delivered
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="relative py-28">
          <div className="absolute left-0 top-1/4 h-96 w-96 rounded-full bg-[var(--sky)]/10 blur-[120px]" />

          <div className="absolute bottom-1/4 right-0 h-96 w-96 rounded-full bg-[var(--parrot)]/10 blur-[120px]" />

          <div className="relative mx-auto max-w-7xl px-6">

            <div className="mb-20 max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[var(--sky)]">
                What We Deliver
              </p>

              <h2 className="mt-5 text-4xl font-black leading-tight md:text-6xl">
                End-to-End
                <br />
                <span className="bg-gradient-to-r from-[var(--sky)] to-[var(--parrot)] bg-clip-text text-transparent">
                  Packaging & Gifting
                </span>
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-[var(--obsidian)]/60">
                Thoughtfully designed gifting experiences that blend creativity,
                premium packaging and seamless execution.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {packagingServices.map((service, i) => {
                const Icon = service.icon;

                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: i * 0.08,
                    }}
                    className="group rounded-[2rem] border border-[var(--obsidian)]/5 bg-white/70 p-8 shadow-[0_10px_40px_rgba(0,0,0,0.04)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-[0_25px_80px_rgba(29,144,255,0.12)]"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--sky)]/10 text-[var(--sky)] transition-all duration-300 group-hover:scale-110 group-hover:bg-[var(--sky)] group-hover:text-white">
                      <Icon size={28} />
                    </div>

                    <h3 className="mt-6 text-2xl font-black tracking-tight">
                      {service.title}
                    </h3>

                    <p className="mt-4 leading-relaxed text-[var(--obsidian)]/60">
                      {service.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* STATS + WHY US */}
        <section className="relative bg-[var(--ice)]/35 py-28">
          <div className="mx-auto max-w-7xl px-6">

            <div className="grid items-center gap-16 lg:grid-cols-2">

              {/* LEFT */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-[var(--sky)]">
                  Why Brill Crafts
                </p>

                <h2 className="mt-5 text-4xl font-black leading-tight md:text-6xl">
                  Gifting Solutions
                  <span className="block bg-gradient-to-r from-[var(--sky)] to-[var(--parrot)] bg-clip-text text-transparent">
                    That Build Connections
                  </span>
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-[var(--obsidian)]/60">
                  We combine premium materials, creative packaging and efficient
                  logistics to create gifting experiences that leave lasting
                  impressions on clients, employees and customers.
                </p>

                <div className="mt-10 space-y-5">
                  {[
                    "Luxury festive gifting solutions",
                    "Employee onboarding kits",
                    "Custom merchandise packaging",
                    "Bulk gifting & delivery support",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-4"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--sky)]/10 text-[var(--sky)]">
                        <ShoppingBag size={18} />
                      </div>

                      <span className="font-medium text-[var(--obsidian)]/75">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* RIGHT */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <div className="rounded-[2.5rem] border border-white/30 bg-white/70 p-10 shadow-[0_20px_80px_rgba(0,0,0,0.06)] backdrop-blur-2xl">
                  <div className="grid gap-8 sm:grid-cols-2">
                    {stats.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-3xl border border-[var(--obsidian)]/5 bg-white/80 p-6"
                      >
                        <h3 className="bg-gradient-to-r from-[var(--sky)] to-[var(--parrot)] bg-clip-text text-5xl font-black text-transparent">
                          {item.value}
                        </h3>

                        <p className="mt-3 text-sm font-bold uppercase tracking-[0.15em] text-[var(--obsidian)]/50">
                          {item.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

   {/* CTA */}
<section className="pb-10 pt-28">
  <div className="mx-auto max-w-6xl px-6">

    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-[3rem] border border-white/40 bg-white/70 px-10 py-24 text-center backdrop-blur-2xl shadow-[0_30px_80px_rgba(0,0,0,0.08)]"
    >

      {/* SOFT SKY + PARROT GLOWS (Mall/College style) */}
      <div className="absolute left-[-10%] top-[-20%] h-[420px] w-[420px] rounded-full bg-[var(--sky)]/15 blur-[120px]" />
      <div className="absolute bottom-[-20%] right-[-10%] h-[420px] w-[420px] rounded-full bg-[var(--parrot)]/15 blur-[120px]" />

      {/* SUBTLE GRID */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative z-10">

        <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-[var(--sky)]">
          Build Memorable Brand Moments
        </p>

        <h2 className="mx-auto max-w-4xl text-4xl font-black leading-tight text-[var(--obsidian)] md:text-6xl">
          Ready To Create Premium
          <br />
          <span className="bg-gradient-to-r from-[var(--sky)] to-[var(--parrot)] bg-clip-text text-transparent">
            Gifting Experiences?
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[var(--obsidian)]/60">
          From luxury gift boxes to branded employee kits, Brill Crafts
          delivers impactful packaging and gifting solutions tailored
          for modern brands.
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