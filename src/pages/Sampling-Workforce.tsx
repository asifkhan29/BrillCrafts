// src/pages/services/SamplingWorkforce.tsx

import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Users,
  Megaphone,
  CheckCircle2,
  Radio,
  Trophy,
  Zap,
  Globe2,
} from "lucide-react";

import { Link } from "react-router-dom";
import BackgroundEffects from "./BackgroundEffects";

export default function SamplingWorkforce() {
  const services = [
    "In-Store Product Sampling",
    "Retail Promoter Deployment",
    "Field Workforce Management",
    "Merchandising Support",
    "Event Staffing Solutions",
    "Brand Promoter Activations",
  ];

  const stats = [
    {
      value: "2500+",
      label: "Promoters Deployed",
    },
    {
      value: "120+",
      label: "Cities Covered",
    },
    {
      value: "8M+",
      label: "Consumer Interactions",
    },
    {
      value: "200+",
      label: "Retail Campaigns",
    },
  ];

  return (
    <div className="relative overflow-hidden bg-white text-[var(--obsidian)]">
      {/* BACKGROUND */}
     <BackgroundEffects/>

      {/* HERO */}
      <section className="relative px-6 pb-24 pt-36">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--sky)]/20 bg-[var(--sky)]/10 px-4 py-2 text-sm font-semibold text-[var(--sky)]">
              <Sparkles size={16} />
              Sampling & Workforce Solutions
            </div>

            <h1 className="max-w-2xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
              Sampling & Workforce
              <span className="block bg-gradient-to-r from-[var(--sky)] to-[var(--parrot)] bg-clip-text text-transparent">
                That Builds Impact.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-[var(--obsidian)]/65">
              We provide trained promoters, field staff, and product
              sampling teams that help brands drive visibility,
              engagement, and real consumer interaction across retail
              and on-ground campaigns.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--obsidian)] px-7 py-4 font-semibold text-white transition-all hover:bg-[var(--sky)]"
              >
                Launch Your Campaign
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/case-studies"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-7 py-4 font-semibold transition-all hover:border-[var(--sky)] hover:text-[var(--sky)]"
              >
                View Campaigns
              </Link>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-[var(--obsidian)] to-slate-900 p-8 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1600&auto=format&fit=crop"
                alt="Sampling Workforce"
                className="h-[500px] w-full rounded-[1.5rem] object-cover"
              />

              <div className="absolute bottom-10 left-10 rounded-2xl bg-white/10 p-5 backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.2em] text-white/70">
                  Retail Sampling
                </p>

                <h3 className="mt-2 text-2xl font-bold text-white">
                  High-Impact Product Demonstration
                </h3>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-sm"
            >
              <h3 className="bg-gradient-to-r from-[var(--sky)] to-[var(--parrot)] bg-clip-text text-5xl font-black text-transparent">
                {item.value}
              </h3>

              <p className="mt-3 text-sm font-medium text-[var(--obsidian)]/60">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative px-6 py-24">
        <div className="absolute left-0 top-1/4 -z-10 h-96 w-96 rounded-full bg-[var(--sky)]/10 blur-[100px]" />

        <div className="absolute bottom-1/4 right-0 -z-10 h-96 w-96 rounded-full bg-[var(--parrot)]/10 blur-[100px]" />

        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--sky)]">
              Workforce Services
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight text-[var(--obsidian)] md:text-6xl">
              Workforce Solutions
              <span className="inline-block bg-gradient-to-r from-[var(--sky)] to-[var(--parrot)] bg-clip-text text-transparent">
                {" "}
                That Scale Fast.
              </span>
            </h2>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="group rounded-[2rem] border border-slate-100 bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--sky)]/10 text-[var(--sky)]">
                  <CheckCircle2 size={26} />
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  {service}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[var(--obsidian)]/60">
                  Professional staffing and sampling solutions designed
                  to improve brand visibility, consumer trials, and
                  retail engagement.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative bg-[var(--ice)]/40 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--sky)]">
              Our Process
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-6xl">
              Strategy To
              <span className="block bg-gradient-to-r from-[var(--sky)] to-[var(--parrot)] bg-clip-text text-transparent">
                Execution.
              </span>
            </h2>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Megaphone,
                title: "Campaign Planning",
                desc:
                  "We understand your product goals and create deployment strategies for retail and field campaigns.",
              },
              {
                icon: Users,
                title: "Promoter Deployment",
                desc:
                  "Trained promoters and sampling staff deployed across stores, malls, and activation zones.",
              },
              {
                icon: Trophy,
                title: "Execution & Reporting",
                desc:
                  "Real-time supervision, reporting, and campaign monitoring to ensure measurable results.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-[2rem] bg-white p-10 shadow-sm"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--sky)]/10 text-[var(--sky)]">
                  <item.icon size={30} />
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-relaxed text-[var(--obsidian)]/60">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="relative px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[2rem]">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop"
              alt="Workforce Team"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--sky)]">
              Why Choose Us
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
              Building Retail
              <span className="block bg-gradient-to-r from-[var(--sky)] to-[var(--parrot)] bg-clip-text text-transparent">
                Execution Excellence.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-[var(--obsidian)]/65">
              From promoter management to large-scale sampling campaigns,
              we ensure smooth execution, trained manpower, and measurable
              consumer engagement across every touchpoint.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-100 p-6">
                <Radio className="text-[var(--sky)]" size={28} />

                <h4 className="mt-4 text-lg font-bold">
                  Trained Promoters
                </h4>
              </div>

              <div className="rounded-2xl border border-slate-100 p-6">
                <Zap className="text-[var(--sky)]" size={28} />

                <h4 className="mt-4 text-lg font-bold">
                  Retail Sampling
                </h4>
              </div>

              <div className="rounded-2xl border border-slate-100 p-6">
                <Globe2 className="text-[var(--sky)]" size={28} />

                <h4 className="mt-4 text-lg font-bold">
                  Nationwide Workforce
                </h4>
              </div>

              <div className="rounded-2xl border border-slate-100 p-6">
                <Users className="text-[var(--sky)]" size={28} />

                <h4 className="mt-4 text-lg font-bold">
                  On-Ground Execution
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

   {/* CTA */}
<section className="pb-10">
  <div className="mx-auto max-w-6xl px-6">
    <div
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
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[var(--sky)]">
          Workforce Solutions
        </p>

        {/* HEADING */}
        <h2 className="text-4xl font-black leading-tight text-[var(--obsidian)] md:text-6xl">
          Ready To Scale
          <span className="block bg-gradient-to-r from-[var(--sky)] to-[var(--parrot)] bg-clip-text text-transparent">
            Your Workforce Campaigns?
          </span>
        </h2>

        {/* DESCRIPTION */}
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[var(--obsidian)]/65">
          From retail promoters and in-store staffing to large-scale
          activation campaigns, Brill Crafts helps brands execute
          impactful workforce solutions across India.
        </p>

        {/* BUTTON */}
        <div className="mt-10">
          <Link
            to="/contact"
            className="
              group inline-flex items-center gap-2
              rounded-full
              bg-[var(--obsidian)]
              px-8 py-4
              font-bold
              text-white
              transition-all duration-300
              hover:-translate-y-1
              hover:bg-[var(--sky)]
              hover:shadow-[0_20px_40px_rgba(0,116,217,0.25)]
            "
          >
            Launch Campaign

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}