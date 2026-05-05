import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";
import { SectionHeader } from "./index";
import { services } from "@/lib/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Bill Craft" },
      { name: "description", content: "Eight service pillars: brand launches, expo stalls, retail branding, sampling, RWA & corporate, mall, printing and packaging." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const cats = ["Activations", "Physical Branding", "Production"] as const;
  return (
    <PageTransition>
      <section className="pt-16 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="Services"
            title="A complete brand activation ecosystem."
            desc="Three categories. Eight pillars. Everything you need to make a brand felt — across streets, screens, stalls and shelves."
          />
        </div>
      </section>

      {cats.map((cat, ci) => (
        <section key={cat} className="py-12">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex items-baseline justify-between gap-6">
              <h2 className="text-2xl md:text-3xl font-semibold">
                <span className="text-foreground/40 mr-3">0{ci + 1}</span>
                {cat}
              </h2>
              <span className="h-px flex-1 bg-white/10" />
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.filter((s) => s.category === cat).map((s, i) => (
                <motion.div
                  key={s.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="glass glass-hover group relative block rounded-3xl p-7 h-full"
                  >
                    <h3 className="text-xl font-semibold">{s.title}</h3>
                    <p className="mt-3 text-sm text-foreground/60 leading-relaxed">{s.desc}</p>
                    <div className="mt-8 inline-flex items-center gap-2 text-primary text-sm font-medium">
                      Explore
                      <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </PageTransition>
  );
}
