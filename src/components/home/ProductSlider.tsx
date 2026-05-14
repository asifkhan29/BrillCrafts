import { useMemo } from "react";
import BackgroundEffects from "@/pages/BackgroundEffects";
import { PageTransition } from "@/components/PageTransition";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const products = [
  {
    name: "Glass Stands",
    img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1200",
    desc: "Premium Acrylic Finish",
    tag: "Eco-Friendly",
  },
  {
    name: "Premium Flasks",
    img: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80&w=1200",
    desc: "Laser Engraved Steel",
    tag: "Best Seller",
  },
  {
    name: "Branded Mugs",
    img: "https://images.unsplash.com/photo-1514228742587-6b1558fbed50?auto=format&fit=crop&q=80&w=1200",
    desc: "Matte Ceramic Print",
    tag: "Corporate",
  },
  {
    name: "Mobile Covers",
    img: "https://images.unsplash.com/photo-1601593346740-925612772716?auto=format&fit=crop&q=80&w=1200",
    desc: "Durable Polycarbonate",
    tag: "Trending",
  },
  {
    name: "Tablet Sleeves",
    img: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=1200",
    desc: "Custom Fabric Finish",
    tag: "New Arrival",
  },
  {
    name: "Desk Merch",
    img: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&q=80&w=1200",
    desc: "Executive Gift Set",
    tag: "Premium",
  },
];

export function ProductSlider() {
  /* TRIPLE ARRAY FOR PERFECT LOOP */
  const infiniteProducts = useMemo(
    () => [...products, ...products, ...products],
    []
  );

  return (
    <PageTransition>
      <section className="relative w-full overflow-hidden bg-[#FCFDFF] py-20 sm:py-24">
        {/* BACKGROUND */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <BackgroundEffects />
        </div>

        {/* CONTENT */}
        <div className="relative z-10">
          {/* HEADER */}
          <div className="mx-auto mb-14 max-w-7xl px-4 sm:px-6">
            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              {/* LEFT */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-[3px] w-10 rounded-full bg-emerald-400" />

                  <span
                    className="
                      text-[10px]
                      sm:text-xs
                      font-black
                      uppercase
                      tracking-[0.28em]
                      text-emerald-500
                    "
                  >
                    Inventory Excellence
                  </span>
                </div>

                <h2
                  className="
                    text-4xl
                    sm:text-5xl
                    lg:text-6xl
                    font-black
                    leading-[0.95]
                    tracking-tight
                    text-slate-900
                  "
                >
                  The Swag{" "}
                  <span
                    className="
                      bg-gradient-to-r
                      from-blue-500
                      to-emerald-400
                      bg-clip-text
                      text-transparent
                    "
                  >
                    Universe
                  </span>
                </h2>

                <p
                  className="
                    mt-5
                    max-w-xl
                    text-sm
                    sm:text-base
                    font-semibold
                    leading-relaxed
                    text-slate-500
                  "
                >
                  Precision branding on curated premium products.
                  Crafted for modern brands, gifting, and immersive
                  merchandise experiences.
                </p>
              </motion.div>

              {/* RIGHT BADGE */}
              <motion.div
                whileHover={{
                  y: -3,
                  scale: 1.03,
                }}
                className="
                  hidden md:flex
                  items-center gap-3
                  rounded-2xl
                  border border-slate-200/70
                  bg-white/80
                  px-6 py-3
                  backdrop-blur-xl
                  shadow-[0_10px_30px_rgba(15,23,42,0.05)]
                "
              >
                <ShieldCheck
                  className="text-emerald-500"
                  size={20}
                />

                <span className="text-sm font-black text-slate-700">
                  ISO Certified Quality
                </span>
              </motion.div>
            </div>
          </div>

          {/* SLIDER */}
          <div className="relative overflow-hidden">
            <motion.div
              className="
                flex w-max
                gap-5
                sm:gap-7
                px-4 sm:px-6
              "
              animate={{
                x: [0, -2028],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 22,
                  ease: "linear",
                },
              }}
              style={{
                willChange: "transform",
              }}
            >
              {infiniteProducts.map((item, idx) => (
                <motion.div
                  key={`${item.name}-${idx}`}
                  whileHover={{
                    y: -8,
                    scale: 1.015,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                  className="
                    group relative
                    transform-gpu

                    flex shrink-0 flex-col

                    w-[250px]
                    sm:w-[280px]
                    md:w-[310px]

                    overflow-hidden

                    rounded-[1.8rem]

                    border border-slate-200/70

                    bg-white

                    shadow-[0_10px_30px_rgba(15,23,42,0.05)]

                    transition-all duration-500

                    hover:border-emerald-300/40
                  "
                >
                  {/* IMAGE */}
                  <div
                    className="
                      relative overflow-hidden

                      h-[240px]
                      sm:h-[300px]
                      md:h-[340px]
                    "
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      loading="lazy"
                      decoding="async"
                      className="
                        h-full w-full object-cover
                        transition-transform duration-700
                        group-hover:scale-105
                        transform-gpu
                      "
                    />

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                    {/* TAG */}
                    <div
                      className="
                        absolute left-4 top-4
                        rounded-full
                        bg-white/90
                        px-3 py-1.5
                       
                      "
                    >
                      <span
                        className="
                          text-[9px]
                          font-black
                          uppercase
                          tracking-[0.18em]
                          text-emerald-600
                        "
                      >
                        {item.tag}
                      </span>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="flex flex-1 flex-col justify-between p-5">
                    <div>
                      {/* TITLE + SOLD */}
                      <div className="flex items-start justify-between gap-3">
                        <h4
                          className="
                            text-xl
                            sm:text-2xl
                            font-black
                            text-slate-800
                            transition-colors duration-300
                            group-hover:text-blue-600
                          "
                        >
                          {item.name}
                        </h4>

                       
                      </div>

                      <p
                        className="
                          mt-3
                          text-sm
                          font-medium
                          leading-relaxed
                          text-slate-400
                        "
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* BORDER */}
                  <div
                    className="
                      pointer-events-none
                      absolute inset-0
                      rounded-[1.8rem]
                      border border-transparent
                      transition-all duration-500
                      group-hover:border-emerald-300/30
                    "
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* LEFT FADE */}
            <div
              className="
                pointer-events-none
                absolute inset-y-0 left-0
                z-10

                w-16
                sm:w-24
                md:w-40

                bg-gradient-to-r
                from-[#FCFDFF]
                to-transparent
              "
            />

            {/* RIGHT FADE */}
            <div
              className="
                pointer-events-none
                absolute inset-y-0 right-0
                z-10

                w-16
                sm:w-24
                md:w-40

                bg-gradient-to-l
                from-[#FCFDFF]
                to-transparent
              "
            />
          </div>

          {/* TRUST SECTION */}
          <div className="mt-20 border-t border-slate-100/60 pt-12">
            <div
              className="
                flex flex-wrap justify-center
                gap-x-10
                gap-y-6
                px-6
                opacity-70
              "
            >
              {[
                "High Fidelity Print",
                "Global Shipping",
                "Bulk Discounting",
                "Custom Packaging",
              ].map((text) => (
                <motion.div
                  key={text}
                  whileHover={{
                    y: -2,
                    scale: 1.03,
                  }}
                  className="flex items-center gap-2"
                >
                  <div className="h-2 w-2 rounded-full bg-emerald-400" />

                  <span
                    className="
                      text-[10px]
                      font-black
                      uppercase
                      tracking-[0.28em]
                      text-slate-600
                    "
                  >
                    {text}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}