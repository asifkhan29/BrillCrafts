// src/pages/MallBranding.tsx

import { motion } from "framer-motion";
import {
  Building2,
  Store,
  Sparkles,
  Users,
  MapPinned,
  LayoutPanelTop,
  BadgeCheck,
  ArrowRight,
  Globe2,
} from "lucide-react";

import { Link } from "react-router-dom";
import { PageTransition } from "@/components/PageTransition";
import BackgroundEffects from "./BackgroundEffects";

const brandingServices = [
  {
    title: "Mall Atrium Activations",
    desc: "High-footfall atrium campaigns designed to maximize visibility, interaction and live audience engagement.",
    icon: Sparkles,
  },
  {
    title: "College Campus Branding",
    desc: "Youth-focused branding campaigns across universities, colleges and educational festivals.",
    icon: Users,
  },
  {
    title: "Retail & Store Promotions",
    desc: "In-store branding and retail engagement activities that drive customer attention and conversions.",
    icon: Store,
  },
  {
    title: "Interactive Kiosks & Installations",
    desc: "Digital kiosks, experiential zones and immersive brand installations for modern audience engagement.",
    icon: LayoutPanelTop,
  },
  {
    title: "Roadshows & Sampling",
    desc: "Product sampling campaigns and mobile promotional activities executed across malls and campuses.",
    icon: MapPinned,
  },
  {
    title: "End-to-End Execution",
    desc: "Complete campaign management including fabrication, staffing, logistics and on-ground operations.",
    icon: BadgeCheck,
  },
];

const stats = [
  {
    value: "250+",
    label: "Mall & College Campaigns",
  },
  {
    value: "80+",
    label: "Premium Locations",
  },
  {
    value: "20L+",
    label: "Monthly Audience Reach",
  },
  {
    value: "99%",
    label: "Execution Accuracy",
  },
];

export default function MallBranding() {
  return (
    <PageTransition>
      <div className="relative overflow-hidden bg-white text-[var(--obsidian)]">
<BackgroundEffects/>

        {/* HERO */}
        <section className="relative pt-36 pb-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-16 lg:grid-cols-2">

              {/* LEFT */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >

                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--sky)]/20 bg-[var(--sky)]/10 px-4 py-2 text-sm font-bold text-[var(--sky)] backdrop-blur-xl">
                  <Store size={16} />
                  Mall & College Physical Branding
                </div>

                <h1 className="text-5xl font-black leading-[0.95] tracking-tight text-[var(--obsidian)] md:text-7xl">
                  Create unforgettable
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--sky)] to-[var(--parrot)]">
                    mall & campus experiences.
                  </span>
                </h1>

                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--obsidian)]/60">
                  We execute high-impact mall activations, college campaigns,
                  youth engagement programs and experiential branding solutions
                  that connect brands directly with consumers.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">

                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-2 rounded-full bg-[var(--obsidian)] px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--sky)] hover:shadow-xl hover:shadow-[var(--sky)]/20"
                  >
                    Start Your Campaign

                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>

                  <Link
                    to="/case-studies"
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--obsidian)]/10 bg-white/70 px-8 py-4 text-sm font-bold text-[var(--obsidian)] backdrop-blur-xl transition-all duration-300 hover:border-[var(--sky)]/20 hover:text-[var(--sky)]"
                  >
                    View Projects
                  </Link>

                </div>
              </motion.div>

              {/* RIGHT */}
              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >

                <div className="relative overflow-hidden rounded-[2.5rem] border border-white/30 bg-white/60 p-4 shadow-[0_30px_90px_rgba(0,0,0,0.08)] backdrop-blur-2xl">

                  <img
                    src="https://images.unsplash.com/photo-1481437156560-3205f6a55735?q=80&w=1600&auto=format&fit=crop"
                    alt="Mall Branding"
                    className="h-[560px] w-full rounded-[2rem] object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--obsidian)]/30 via-transparent to-transparent" />

                  {/* FLOATING CARD */}
                  <div className="absolute bottom-8 left-8 rounded-3xl border border-white/20 bg-white/80 p-6 shadow-2xl backdrop-blur-xl">

                    <div className="flex items-center gap-4">

                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--sky)]/10 text-[var(--sky)]">
                        <Globe2 size={28} />
                      </div>

                      <div>
                        <p className="text-2xl font-black text-[var(--obsidian)]">
                          20L+
                        </p>

                        <p className="text-sm text-[var(--obsidian)]/60">
                          Monthly Consumer Reach
                        </p>
                      </div>

                    </div>
                  </div>

                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="relative pb-28">

          <div className="mx-auto max-w-7xl px-6">

            <div className="mb-16 max-w-3xl">

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--sky)]">
                Activation Services
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-tight text-[var(--obsidian)] md:text-6xl">
                Complete mall &
                <br />
                college activation ecosystem.
              </h2>

            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              {brandingServices.map((service, index) => {
                const Icon = service.icon;

                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    className="group rounded-[2rem] border border-[var(--obsidian)]/5 bg-white/60 p-8 shadow-[0_10px_40px_rgba(0,0,0,0.04)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
                  >

                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--sky)]/10 text-[var(--sky)] transition-all duration-300 group-hover:scale-110 group-hover:bg-[var(--sky)] group-hover:text-white">
                      <Icon size={28} />
                    </div>

                    <h3 className="mt-6 text-2xl font-bold tracking-tight text-[var(--obsidian)]">
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

        {/* WHY US */}
        <section className="relative pb-28">

          <div className="mx-auto max-w-7xl px-6">

            <div className="grid items-center gap-16 lg:grid-cols-2">

              {/* LEFT */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >

                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--sky)]">
                  Why Brill Crafts
                </p>

                <h2 className="mt-5 text-4xl font-black tracking-tight text-[var(--obsidian)] md:text-6xl">
                  Youth-focused &
                  <br />
                  high-footfall engagement.
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-[var(--obsidian)]/60">
                  From mall activations to college engagement programs, we create
                  memorable experiences that increase brand awareness, customer
                  interaction and audience participation.
                </p>

                <div className="mt-10 space-y-5">

                  {[
                    "Pan-India mall activation support",
                    "College & university campaigns",
                    "Sampling & experiential engagement",
                    "Creative fabrication & production",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-4">

                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--sky)]/10 text-[var(--sky)]">
                        <Building2 size={18} />
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

                <div className="relative overflow-hidden rounded-[2.5rem] border border-white/30 bg-white/60 p-10 shadow-[0_20px_80px_rgba(0,0,0,0.06)] backdrop-blur-2xl">

                  <div className="absolute left-0 top-0 h-48 w-48 rounded-full bg-[var(--sky)]/10 blur-3xl" />

                  <div className="relative grid gap-8 md:grid-cols-2">

                    {stats.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-3xl border border-[var(--obsidian)]/5 bg-white/70 p-6 backdrop-blur-xl"
                      >

                        <h3 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[var(--sky)] to-[var(--parrot)]">
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
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-[var(--sky)]">
          Let’s Build Brand Buzz
        </p>

        {/* HEADING */}
        <h2 className="mt-5 text-4xl font-black leading-tight text-[var(--obsidian)] md:text-6xl">
          Ready to launch
          <br />
          <span className="bg-gradient-to-r from-[var(--sky)] to-[var(--parrot)] bg-clip-text text-transparent">
            impactful activations?
          </span>
        </h2>

        {/* DESCRIPTION */}
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[var(--obsidian)]/65">
          From mall branding to college activations and sampling campaigns,
          Brill Crafts helps brands engage audiences through immersive
          on-ground experiences.
        </p>

        {/* BUTTON */}
        <Link
          to="/contact"
          className="
            group mt-10 inline-flex items-center gap-2
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
          Start Your Campaign

          <ArrowRight
            size={16}
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