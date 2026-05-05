import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { SectionHeader } from "./index";
import heroMetro from "@/assets/hero-metro.jpg";
import caseLaunch from "@/assets/case-launch.jpg";
import caseExpo from "@/assets/case-expo.jpg";
import caseMall from "@/assets/case-mall.jpg";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — Bill Craft" },
      { name: "description", content: "Selected brand activation work — launches, expo stalls, retail and out-of-home takeovers." },
    ],
  }),
  component: CaseStudiesPage,
});

const items = [
  { title: "Metro Takeover", tag: "Out-of-Home", img: heroMetro, span: "lg:col-span-2 lg:row-span-2" },
  { title: "Stage Brand Launch", tag: "Activation", img: caseLaunch, span: "" },
  { title: "Pavilion Stall", tag: "Expo", img: caseExpo, span: "" },
  { title: "Mall Storefront", tag: "Retail", img: caseMall, span: "lg:col-span-2" },
  { title: "Sampling Drive", tag: "Workforce", img: caseLaunch, span: "" },
  { title: "Premium Packaging", tag: "Production", img: caseExpo, span: "" },
];

function CaseStudiesPage() {
  return (
    <PageTransition>
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="Case studies"
            title="Crafted for brands that lead."
            desc="A high-resolution glimpse of recent campaigns — engineered to make audiences look twice."
          />

          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 auto-rows-[200px] md:auto-rows-[260px] gap-5">
            {items.map((it, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.07 }}
                className={`group relative overflow-hidden rounded-3xl ${it.span}`}
              >
                <img src={it.img} alt={it.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[color-mix(in_oklab,var(--deep)_85%,transparent)] via-[color-mix(in_oklab,var(--deep)_20%,transparent)] to-transparent" />
                <div className="absolute bottom-0 left-0 p-5">
                  <span className="text-xs uppercase tracking-widest text-primary">{it.tag}</span>
                  <h3 className="mt-1 text-xl md:text-2xl font-semibold">{it.title}</h3>
                </div>
                <div className="absolute inset-0 ring-0 ring-primary/0 group-hover:ring-2 group-hover:ring-primary/40 transition-all rounded-3xl" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
