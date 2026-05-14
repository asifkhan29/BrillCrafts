import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";
import { services } from "@/lib/site";
import { Link } from "react-router-dom";
import BackgroundEffects from "./BackgroundEffects";

export function ServicesPage() {
  const cats = ["Activations", "Physical Branding", "Production"] as const;

  return (
    <PageTransition>

      {/* SEO */}
      <Helmet>
        <title>
          Brand Activation Services Mumbai | Retail Branding & Production | Brill Crafts
        </title>

        <meta
          name="description"
          content="Explore Brill Crafts services including brand activations, retail branding, fabrication, event production, mall activations, kiosk design, outdoor branding and experiential marketing solutions across India."
        />

        <meta
          name="keywords"
          content="brand activation agency Mumbai, retail branding company India, experiential marketing, event production, mall activation agency, kiosk branding, fabrication services, outdoor branding, BTL marketing agency"
        />

        <meta name="author" content="Brill Crafts" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Brill Crafts Services | Brand Activations & Retail Branding"
        />

        <meta
          property="og:description"
          content="From activations to production and retail branding, Brill Crafts creates impactful brand experiences across India."
        />

        <meta property="og:type" content="website" />

        <meta
          property="og:url"
          content="https://brillcrafts.com/services"
        />

        <meta
          property="og:image"
          content="https://brillcrafts.com/og-services.jpg"
        />

        {/* Twitter */}
        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="Brill Crafts Services"
        />

        <meta
          name="twitter:description"
          content="Explore premium brand activation, retail branding and production services by Brill Crafts."
        />

        <meta
          name="twitter:image"
          content="https://brillcrafts.com/og-services.jpg"
        />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://brillcrafts.com/services"
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Brand Activation & Retail Branding",
            provider: {
              "@type": "Organization",
              name: "Brill Crafts",
              url: "https://brillcrafts.com",
              logo: "https://brillcrafts.com/logo.png",
            },
            areaServed: {
              "@type": "Country",
              name: "India",
            },
            description:
              "Brill Crafts provides experiential marketing, retail branding, fabrication, production and activation services across India.",
          })}
        </script>
      </Helmet>

      <div className="relative isolate overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">

        <BackgroundEffects />

        {/* HERO */}
        <section className="pt-24 pb-16 relative z-10">
          <div className="mx-auto max-w-7xl px-6 text-center">

            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[var(--sky)]">
              Services Ecosystem
            </p>

            <h1 className="mt-5 text-4xl md:text-6xl font-black leading-tight text-[var(--obsidian)]">
              A complete brand
              <span className="block bg-gradient-to-r from-[var(--sky)] to-[var(--parrot)] bg-clip-text text-transparent">
                activation ecosystem
              </span>
            </h1>

            <p className="mt-6 max-w-3xl mx-auto text-lg text-[var(--obsidian)]/65">
              From live activations to retail branding and production support —
              we design, execute and scale experiences that make brands visible,
              memorable and impactful.
            </p>

          </div>
        </section>

        {/* CATEGORIES */}
        {cats.map((cat, ci) => (
          <section key={cat} className="py-14 relative z-10">

            <div className="mx-auto max-w-7xl px-6">

              {/* CATEGORY HEADER */}
              <div className="flex items-center gap-6 mb-10">
                <h2 className="text-2xl md:text-3xl font-black text-[var(--obsidian)]">
                  <span className="text-[var(--obsidian)]/30 mr-3">
                    0{ci + 1}
                  </span>
                  {cat}
                </h2>

                <span className="h-px flex-1 bg-[var(--obsidian)]/10" />
              </div>

              {/* GRID */}
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {services
                  .filter((s) => s.category === cat)
                  .map((s, i) => (
                    <motion.div
                      key={s.slug}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.08 }}
                    >
                      <Link
                        to={`/services/${s.slug}`}
                        className="group relative block rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_25px_80px_rgba(29,144,255,0.18)]"
                      >

                        {/* SOFT TOP GLOW */}
                        <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-[var(--sky)]/15 blur-2xl opacity-70 transition-all group-hover:scale-110" />

                        {/* TITLE */}
                        <h3 className="relative text-xl font-bold text-[var(--obsidian)] group-hover:text-[var(--sky)] transition-colors">
                          {s.title}
                        </h3>

                        {/* DESCRIPTION */}
                        <p className="mt-3 text-sm leading-relaxed text-slate-600">
                          {s.desc}
                        </p>

                        {/* CTA */}
                        <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[var(--sky)] to-[var(--parrot)]">
                          Explore Service

                          <ArrowUpRight
                            size={16}
                            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                          />
                        </div>

                        {/* BORDER HOVER ACCENT */}
                        <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-[var(--sky)]/20 transition-all" />

                      </Link>
                    </motion.div>
                  ))}
              </div>

            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="pb-28 pt-16 relative z-10">
          <div className="mx-auto max-w-6xl px-6">

            <div className="relative overflow-hidden rounded-[3rem] border border-white/40 bg-white/60 p-12 md:p-16 text-center backdrop-blur-xl">

              <div className="absolute -top-20 left-[-10%] h-[420px] w-[420px] rounded-full bg-[var(--sky)]/15 blur-[120px]" />
              <div className="absolute bottom-[-20%] right-[-10%] h-[420px] w-[420px] rounded-full bg-[var(--parrot)]/15 blur-[120px]" />

              <div className="relative">

                <Sparkles className="mx-auto text-[var(--sky)] mb-4" />

                <h2 className="text-4xl md:text-5xl font-black text-[var(--obsidian)]">
                  Need a complete brand
                  <span className="block bg-gradient-to-r from-[var(--sky)] to-[var(--parrot)] bg-clip-text text-transparent">
                    activation strategy?
                  </span>
                </h2>

                <p className="mt-6 text-[var(--obsidian)]/65 max-w-2xl mx-auto">
                  Let’s build experiences that connect, convert and create
                  real-world brand impact across India.
                </p>

                <Link
                  to="/contact"
                  className="mt-10 inline-flex items-center gap-2 rounded-full bg-[var(--obsidian)] px-8 py-4 text-sm font-bold text-white transition-all hover:-translate-y-1 hover:bg-[var(--sky)]"
                >
                  Start Your Project
                  <ArrowUpRight size={16} />
                </Link>

              </div>

            </div>

          </div>
        </section>

      </div>
    </PageTransition>
  );
}