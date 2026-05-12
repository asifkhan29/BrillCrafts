import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { SectionHeader } from "./index";
import heroMetro from "@/assets/hero-metro.jpg";
import caseLaunch from "@/assets/case-launch.jpg";
import caseExpo from "@/assets/case-expo.jpg";
import caseMall from "@/assets/case-mall.jpg";
import BackgroundEffects from "./BackgroundEffects";



const items = [
  { title: "Metro Takeover", tag: "Out-of-Home", img: heroMetro, span: "lg:col-span-2 lg:row-span-2" },
  { title: "Stage Brand Launch", tag: "Activation", img: caseLaunch, span: "" },
  { title: "Pavilion Stall", tag: "Expo", img: caseExpo, span: "" },
  { title: "Mall Storefront", tag: "Retail", img: caseMall, span: "lg:col-span-2" },
  { title: "Sampling Drive", tag: "Workforce", img: caseLaunch, span: "" },
  { title: "Premium Packaging", tag: "Production", img: caseExpo, span: "" },
];

export function CaseStudiesPage() {
  return (
   <PageTransition>
  <section className="relative py-20 overflow-hidden">

    {/* BACKGROUND */}
      <BackgroundEffects />
   

    {/* CONTENT */}
    <div className="relative z-10 mx-auto max-w-7xl px-6">
      <SectionHeader
        eyebrow="Case studies"
        title="Crafted for brands that lead."
        desc="A high-resolution glimpse of recent campaigns — engineered to make audiences look twice."
      />

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[240px] md:auto-rows-[280px] gap-5">
        {items.map((it, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.07 }}
            className={`
              relative overflow-hidden rounded-3xl group
              ${it.span}
            `}
          >
            <img
              src={it.img}
              alt={it.title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/45 z-10" />

            {/* TEXT */}
            <div className="absolute inset-x-0 bottom-0 z-20 p-5">
              <span className="text-xs uppercase tracking-[0.2em] text-primary">
                {it.tag}
              </span>

              <h3 className="mt-2 text-lg md:text-2xl font-semibold text-white leading-snug">
                {it.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
</PageTransition>
  );
}
