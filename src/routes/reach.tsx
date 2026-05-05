import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Building2, Briefcase, Music, Store, GraduationCap } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";
import { SectionHeader } from "./index";
import { Counter } from "@/components/Counter";
import { reachStats } from "@/lib/site";

export const Route = createFileRoute("/reach")({
  head: () => ({
    meta: [
      { title: "Our Reach — Bill Craft" },
      { name: "description", content: "1000+ RWAs, 500+ corporate parks, 500+ pubs & cafés, 1000+ malls and 100+ colleges across India." },
    ],
  }),
  component: ReachPage,
});

const icons = [Building2, Briefcase, Music, Store, GraduationCap];

function ReachPage() {
  return (
    <PageTransition>
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="Our reach"
            title="A footprint that moves markets."
            desc="From gated communities to coaching hubs — Bill Craft activations land where audiences live, work and unwind."
          />

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reachStats.map((s, i) => {
              const Icon = icons[i] ?? Building2;
              return (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="glass glass-hover relative rounded-3xl p-8 overflow-hidden"
                >
                  <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-primary/15 blur-3xl" />
                  <Icon className="text-primary" />
                  <p className="mt-6 text-6xl md:text-7xl font-bold text-gradient">
                    <Counter to={s.value} suffix={s.suffix} />
                  </p>
                  <p className="mt-3 text-foreground/70">{s.label}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-20 glass rounded-3xl p-10 md:p-14 halo-blue relative">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
                  Pan-India.
                  <br />
                  <span className="text-gradient">Hyperlocal precision.</span>
                </h3>
                <p className="mt-4 text-foreground/65">
                  Every activation is mapped to the audiences that matter — by
                  geography, demographic and behaviour. The result: campaigns that
                  feel personal at scale.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  ["Tier 1 cities", "12+"],
                  ["Tier 2 cities", "30+"],
                  ["Active states", "18"],
                  ["Brand partners", "120+"],
                ].map(([k, v]) => (
                  <div key={k} className="glass rounded-2xl p-5">
                    <p className="text-3xl font-bold text-gradient">{v}</p>
                    <p className="mt-1 text-sm text-foreground/60">{k}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
