// src/pages/RwaCorporateActivations.tsx

import { motion } from "framer-motion";
import {
  Building2,
  Users,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Briefcase,
  Globe2,
  Target,
  Radio,
} from "lucide-react";

import { Link } from "react-router-dom";
import { PageTransition } from "@/components/PageTransition";
import BackgroundEffects from "./BackgroundEffects";

const services = [
  {
    title: "RWA Society Activations",
    desc:
      "Premium apartment and gated-community activations designed for direct family engagement and product interaction.",
    icon: Users,
  },
  {
    title: "Corporate Park Campaigns",
    desc:
      "Office park and IT campus engagement activities that connect brands with working professionals at scale.",
    icon: Building2,
  },
  {
    title: "Sampling & Product Trials",
    desc:
      "Targeted product sampling campaigns that generate real consumer experience, trust and conversions.",
    icon: Sparkles,
  },
  {
    title: "Workforce & Promoter Management",
    desc:
      "Trained promoters, emcees, brand ambassadors and staffing teams managed end-to-end for smooth execution.",
    icon: Briefcase,
  },
];

const highlights = [
  "Apartment & gated society activations",
  "Corporate office engagement campaigns",
  "Sampling & FMCG trial campaigns",
  "Promoter & manpower deployment",
  "Brand kiosks & experience zones",
  "Pan India workforce management",
];

const stats = [
  {
    value: "1800+",
    label: "Activations Delivered",
    icon: Sparkles,
  },
  {
    value: "350+",
    label: "RWA Communities",
    icon: Users,
  },
  {
    value: "25K+",
    label: "Promoters Managed",
    icon: Briefcase,
  },
  {
    value: "6M+",
    label: "Consumers Engaged",
    icon: Globe2,
  },
];

export default function RwaCorporateActivations() {
  return (
    <PageTransition>
      <div className="relative overflow-hidden bg-white text-[var(--obsidian)]">
        
      <BackgroundEffects/>

        {/* HERO */}
        <section className="relative overflow-hidden pt-36 pb-24">
          <div className="mx-auto max-w-7xl px-6">

            <div className="grid items-center gap-20 lg:grid-cols-2">

              {/* LEFT */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--sky)]/20 bg-[var(--sky)]/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--sky)] backdrop-blur-xl">
                  <Users size={16} />
                  RWA & Corporate Activation Experts
                </div>

                <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
                  RWA & Corporate
                  <br />

                  <span className="bg-gradient-to-r from-[var(--sky)] to-[var(--parrot)] bg-clip-text text-transparent">
                    Activations
                  </span>

                  <br />
                  That Build Real Connections.
                </h1>

                <p className="mt-8 max-w-xl text-lg leading-relaxed text-[var(--obsidian)]/60">
                  From apartment societies and gated communities to corporate
                  parks and office campuses — we execute high-impact activation
                  campaigns, product sampling drives and workforce solutions
                  that engage audiences directly where they live and work.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">

                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-2 rounded-full bg-[var(--obsidian)] px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:scale-[1.03] hover:bg-[var(--sky)] hover:shadow-[0_20px_50px_-10px_rgba(0,116,217,0.45)]"
                  >
                    Plan Your Activation

                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>

                  <Link
                    to="/case-studies"
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--obsidian)]/10 bg-white/80 px-8 py-4 text-sm font-bold text-[var(--obsidian)] backdrop-blur-xl transition-all duration-300 hover:border-[var(--sky)]/20 hover:text-[var(--sky)] hover:shadow-lg"
                  >
                    View Activation Campaigns
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
                <div className="absolute inset-0 m-auto h-[420px] w-[420px] rounded-full bg-[var(--sky)]/15 blur-[100px]" />

                <div className="relative overflow-hidden rounded-[2.5rem] border border-white/30 bg-white/60 p-6 shadow-[0_40px_100px_-20px_rgba(15,23,42,0.15)] backdrop-blur-2xl">

                  <div className="grid gap-5 sm:grid-cols-2">

                    {highlights.map((item, i) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08 }}
                        className="group rounded-[1.8rem] border border-white/30 bg-white/70 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
                      >
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--sky)]/10 text-[var(--sky)] transition-all group-hover:bg-[var(--sky)] group-hover:text-white">
                          <CheckCircle2 size={22} />
                        </div>

                        <p className="text-sm font-bold leading-relaxed text-[var(--obsidian)]">
                          {item}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* FLOATING CARD */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="absolute -bottom-8 left-8 rounded-3xl border border-white/30 bg-white/80 px-6 py-5 shadow-2xl backdrop-blur-xl"
                >
                  <div className="flex items-center gap-4">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--sky)]/10 text-[var(--sky)]">
                      <Sparkles size={28} />
                    </div>

                    <div>
                      <p className="text-2xl font-black text-[var(--obsidian)]">
                        3M+
                      </p>

                      <p className="text-sm text-[var(--obsidian)]/60">
                        Product Samples Distributed
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="pb-24">
          <div className="mx-auto max-w-7xl px-6">

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

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
          </div>
        </section>

        {/* SERVICES */}
        <section className="relative overflow-hidden bg-[var(--ice)]/30 py-28">

          <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[var(--sky)]/10 blur-[120px]" />

          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[var(--parrot)]/10 blur-[120px]" />

          <div className="relative mx-auto max-w-7xl px-6">

            <div className="mb-20 max-w-3xl">

              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[var(--sky)]">
                What We Offer
              </p>

              <h2 className="mt-5 text-4xl font-black leading-tight md:text-6xl">
                End-to-End
                <br />

                <span className="bg-gradient-to-r from-[var(--sky)] to-[var(--parrot)] bg-clip-text text-transparent">
                  Activation Solutions
                </span>
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-[var(--obsidian)]/60">
                We combine manpower, strategy, production and consumer
                engagement to deliver seamless RWA, corporate and sampling
                campaigns across India.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">

              {services.map((service, i) => {
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
                    className="group rounded-[2rem] border border-white/30 bg-white/70 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-[0_30px_80px_-20px_rgba(0,116,217,0.18)]"
                  >
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--sky)]/10 text-[var(--sky)] transition-all duration-300 group-hover:scale-110 group-hover:bg-[var(--sky)] group-hover:text-white">
                      <Icon size={30} />
                    </div>

                    <h3 className="text-2xl font-black tracking-tight">
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

        {/* PROCESS */}
        <section className="py-28">
          <div className="mx-auto max-w-7xl px-6">

            <div className="mb-20 text-center">

              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[var(--sky)]">
                Our Process
              </p>

              <h2 className="mt-5 text-4xl font-black md:text-6xl">
                From Planning
                <span className="bg-gradient-to-r from-[var(--sky)] to-[var(--parrot)] bg-clip-text text-transparent">
                  {" "}
                  To Execution
                </span>
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-4">

              {[
                "Audience & Location Planning",
                "Workforce & Promoter Deployment",
                "Sampling & Consumer Engagement",
                "Campaign Reporting & Analytics",
              ].map((step, i) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.08,
                  }}
                  className="group relative overflow-hidden rounded-[2rem] border border-[var(--obsidian)]/5 bg-white/80 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="absolute right-5 top-2 text-7xl font-black text-[var(--sky)]/5">
                    0{i + 1}
                  </div>

                  <div className="relative">

                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--sky)]/10 text-lg font-black text-[var(--sky)] transition-all group-hover:bg-[var(--sky)] group-hover:text-white">
                      0{i + 1}
                    </div>

                    <h3 className="text-xl font-black leading-snug">
                      {step}
                    </h3>
                  </div>
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
        relative overflow-hidden rounded-[3rem]
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

      <div className="relative">
        {/* LABEL */}
        <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-[var(--sky)]">
          Let’s Build Consumer Connections
        </p>

        {/* HEADING */}
        <h2 className="mx-auto max-w-4xl text-4xl font-black leading-tight text-[var(--obsidian)] md:text-6xl">
          Launch High-Impact
          <br />
          <span className="bg-gradient-to-r from-[var(--sky)] to-[var(--parrot)] bg-clip-text text-transparent">
            RWA & Corporate Activations
          </span>
        </h2>

        {/* DESCRIPTION */}
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[var(--obsidian)]/65">
          Engage families, working professionals and real consumers
          through strategic activations, product sampling and
          workforce-driven campaigns executed nationwide.
        </p>

        {/* BUTTON */}
        <Link
          to="/contact"
          className="
            group mt-10 inline-flex items-center gap-2
            rounded-full
            bg-[var(--obsidian)]
            px-10 py-4
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