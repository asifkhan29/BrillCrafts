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

const icons = [Building2, Briefcase, Music, Store, GraduationCap];

export function ReachPage() {
  return (
    <PageTransition>
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">

        {/* BACKGROUND GLOWS */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute -top-40 left-[-10%] h-[500px] w-[500px] rounded-full bg-[var(--sky)]/10 blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-[var(--parrot)]/10 blur-[120px]" />
        </div>

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
            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {reachStats.map((s, i) => {
                const Icon = icons[i] ?? Building2;

                return (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.08 }}
                    className="group relative overflow-hidden rounded-3xl border border-white/40 bg-white/70 p-8 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,116,217,0.08)] hover:-translate-y-2 transition-all"
                  >
                    {/* glow */}
                    <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-[var(--sky)]/10 blur-3xl" />

                    <div className="flex items-center gap-3 text-[var(--sky)]">
                      <Icon size={22} />
                      <span className="text-sm font-semibold text-[var(--obsidian)]/60">
                        Activation Network
                      </span>
                    </div>

                    <p className="mt-6 text-6xl font-black bg-gradient-to-r from-[var(--sky)] to-[var(--parrot)] bg-clip-text text-transparent">
                      <Counter to={s.value} suffix={s.suffix} />
                    </p>

                    <p className="mt-3 text-[var(--obsidian)]/65">
                      {s.label}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* INSIGHT SECTION */}
            <div className="mt-20 relative overflow-hidden rounded-[3rem] border border-white/40 bg-white/60 p-10 md:p-14 backdrop-blur-xl">

              <div className="absolute -top-20 left-0 h-80 w-80 rounded-full bg-[var(--sky)]/10 blur-[120px]" />
              <div className="absolute bottom-[-20%] right-0 h-80 w-80 rounded-full bg-[var(--parrot)]/10 blur-[120px]" />

              <div className="relative grid gap-10 md:grid-cols-2 items-center">

                <div>
                  <h3 className="text-3xl md:text-4xl font-black text-[var(--obsidian)]">
                    Pan-India execution
                    <span className="block bg-gradient-to-r from-[var(--sky)] to-[var(--parrot)] bg-clip-text text-transparent">
                      with hyperlocal precision
                    </span>
                  </h3>

                  <p className="mt-4 text-[var(--obsidian)]/65 leading-relaxed">
                    Every campaign is designed based on audience behaviour, geography
                    and engagement patterns — ensuring brands connect meaningfully
                    at scale, not just visibility.
                  </p>
                </div>

                {/* METRICS */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    ["Tier 1 Cities", "12+"],
                    ["Tier 2 Cities", "30+"],
                    ["Active States", "18"],
                    ["Brand Partners", "120+"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-white/40 bg-white/70 p-5 backdrop-blur-xl"
                    >
                      <p className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[var(--sky)] to-[var(--parrot)]">
                        {value}
                      </p>
                      <p className="mt-1 text-sm text-[var(--obsidian)]/60">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>

              </div>
            </div>

          </div>
        </section>
        {/* CTA */}
<section className="relative z-10 pb-32 pt-20">
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